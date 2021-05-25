module.exports = {
    editCard: (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {threedsID, switchID} = req.body
        db.card.edit_card(user.user_id, threedsID, switchID)
        res.status(200).send(user)
    }
}