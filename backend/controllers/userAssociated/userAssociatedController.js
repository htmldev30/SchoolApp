const userModel = require('../../models/userSchema')
exports.associateUser = async (req, res) => {
    try {
        const { accountType, userEmail, usersToAssociate } = req.body

        const user = await userModel.findOne({ email: userEmail })
        // #region
        // associate userToAssociate information to user's document

        // Associate both user and desired user to associate at the same time
        for (i = 0; i < usersToAssociate.length; i++) {
            const userToAssociate = await userModel.findOne({
                email: usersToAssociate[i].userToAssociateEmail,
            })

            // pushing the data into mongoose field of array of objects
            user.associatedUsersInformation.push({
                associatedUserFullName: {
                    associatedUserFirstName:
                        usersToAssociate[i].userToAssociateFullName.firstName,
                    associatedUserLastName:
                        usersToAssociate[i].userToAssociateFullName.lastName,
                },
                associatedUserGrade: usersToAssociate[i].userToAssociateGrade,
                associatedUser: userToAssociate._id,
            })
            await user.save()
        }

        //#endregion
        res.status(200).send('Account Associated')
    } catch (err) {
        res.status(500).send(err)
    }
}
