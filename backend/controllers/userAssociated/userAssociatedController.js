const userModel = require('../../models/userSchema')
exports.associateUser = async (req, res) => {
    try {
        const { accountType, userEmail, usersToAssociate } = req.body
        const user = await userModel.findOne({ email: userEmail })
        if (!user) {
            res.status(500).send('This user does not exist')
        }
        // #region

        // NOTE TO SELF: MAKE USER EACH ASSOCIATED USER IS UNIQUE!
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

            // Add user associating to userToAssociate's document
            userToAssociate.associatedUsersInformation.push({
                associatedUserFullName: {
                    associatedUserFirstName: user.fullName.firstName,
                    associatedUserLastName: user.fullName.lastName,
                },
                // if associatedUser is a student, then input the associatedUserGrade
                associatedUserGrade:
                    user.accountType == 'student'
                        ? user.associatedUsersInformation[i].associatedUserGrade
                        : null,
                associatedUser: user._id,
            })
            await userToAssociate.save()
        }

        //#endregion
        res.status(200).send('Account Associated')
    } catch (err) {
        res.status(500).send(err)
    }
}
