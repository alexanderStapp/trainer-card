module.exports = {
    editCard: async (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {threedsID, switchID, homeID, profile_pic} = req.body
        const [updateCard] = await db.card.edit_card(user.user_id, threedsID || user.threeds, switchID || user.switch, homeID || user.home, profile_pic)
        delete updateCard.password
        return res.status(200).send(updateCard)
    },
    getCard: async (req, res) => {
        const db = req.app.get('db')
        const {username} = req.params
        const [user] = await db.card.get_user_card(username)
        if(user) {
            delete user.password
        }
        return res.status(200).send(user)
    },
    getProfilePics: async (req, res) => {
        const db = req.app.get('db')
        const profilePics = await db.card.get_profile_pics()
        return res.status(200).send(profilePics)
    }
}