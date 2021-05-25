module.exports = {
    editCard: async (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {threedsID, switchID} = req.body
        const [newCard] = await db.card.edit_card(user.user_id, threedsID, switchID)
        delete newCard.password
        return res.status(200).send(newCard)
    }
}