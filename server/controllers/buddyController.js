module.exports = {
    addBuddy: async (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {buddy_id} = req.params
        await db.buddies.add_buddy(user.user_id, buddy_id)
        return res.sendStatus(200)
    },
    getBuddies: async (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        if(!user) {
            return res.status(511).send('please login to view your buddies!')
        }
        const buddies = await db.buddies.get_buddies(user.user_id)
        return res.status(200).send(buddies)
    }
}