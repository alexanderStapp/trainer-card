module.exports = {
    editCard: async (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {threedsID, switchID, profile_pic} = req.body
        const [updateCard] = await db.card.edit_card(user.user_id, threedsID, switchID, profile_pic)
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
    }
}