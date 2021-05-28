module.exports = {
    addBuddy: async (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {buddy_id} = req.params
        await db.buddies.add_buddy(user.user_id, buddy_id)
        return res.sendStatus(200)
    }
}