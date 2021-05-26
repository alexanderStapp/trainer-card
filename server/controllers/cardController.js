module.exports = {
    editCard: async (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {threedsID, switchID} = req.body
        const [updateCard] = await db.card.edit_card(user.user_id, threedsID, switchID)
        delete updateCard.password
        return res.status(200).send(updateCard)
    },
    getCard: async (req, res) => {
        const db = req.app.get('db')
        const {username} = req.params
        const [user] = await db.card.get_user_card(username)
        delete user.password
        console.log(user)
        return res.status(200).send(user)
    }
}