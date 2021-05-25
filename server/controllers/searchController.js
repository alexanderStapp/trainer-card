module.exports = {
    searchUsers: async (req, res) => {
        const db = req.app.get('db')
        const {username} = req.body
        const [users] = await db.search.user_search(username)
        delete users.password
        return res.status(200).send(users)
    }
}