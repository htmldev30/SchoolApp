const userModel = require('../../models/userSchema')
const associateRequestModel = require('../../models/associateRequestSchema')

exports.getAssociationRequests = async (req, res) => {
    try {
        const { recipientEmail } = req.body
        const recipient = await userModel.findOne({
            email: recipientEmail,
        })

        // if recipient is not a student, then they cannot access this page
        if (recipient.accountType !== 'student') {
            throw new Error(
                'Only students can be requested to associate with parent users.',
            )
        }

        // find all associationRequests under recipient's id
        const associationRequests = await associateRequestModel.find({
            recipient: recipient._id,
        })
        // find all users that have requested association with this recipient
        const associationRequestUsersTemp = []
        for (i = 0; i < associationRequests.length; i++) {
            // get the document id for the specific association request
            const associationRequestId = associationRequests[i]._id
            const associationRequestUsers = await userModel.find({
                _id: associationRequests[i].requester,
            })

            associationRequestUsersTemp.push({
                associateRequestId: associationRequestId,
                associationRequestUserEmail: associationRequestUsers[i].email,
            })
        }
        res.status(200).send(associationRequestUsersTemp)
    } catch (err) {
        res.status(500).send(err)
    }
}
exports.requestAssociation = async (req, res) => {
    try {
        const { requesterEmail, recipientEmail } = req.body
        const requester = await userModel.findOne({ email: requesterEmail })
        const recipient = await userModel.findOne({ email: recipientEmail })
        // Users that are not of "parent" accountType cannot associate accounts under them.
        if (requester.accountType !== 'parent') {
            throw new Error(
                'Only parent accounts may associate their student users.',
            )
        }

        const associateRequest = new associateRequestModel({
            requester: requester._id,
            recipient: recipient._id,
            status: 'pending',
        })

        associateRequest.save((err, res) => {
            err
                ? console.log('Error: ', err)
                : console.log('Result: Associate Request Successful')
        })
        res.status(201).send('User Associate Request Made.')
    } catch (err) {
        res.status(500).send(err)
    }
}

exports.verifyAssociation = async (req, res) => {
    try {
        const { associateRequestId, status } = req.body

        const associateRequest = await associateRequestModel.findOne({
            _id: associateRequestId,
        })
        const requester = await userModel.findOne({
            _id: associateRequest.requester,
        })
        const recipient = await userModel.findOne({
            _id: associateRequest.recipient,
        })
        // if recipient of request accepts, append associatedUser to each.
        // delete the associateRequest document in any case.
        if (status == 'accept') {
            requester.associatedUsers.push(recipient._id)
            recipient.associatedUsers.push(requester._id)
            requester.save()
            recipient.save()
            associateRequest.delete()
            res.status(200).send('Users have been associated.')
        } else {
            associateRequest.delete()
            res.status(200).send('User has been denied association.')
        }

        associateRequest.delete()
    } catch (err) {
        res.status(500).send(err)
    }
}
