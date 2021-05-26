module.exports = {
    searchUsers: async (req, res) => {
        const db = req.app.get('db')
        const {username} = req.params
        const users = await db.search.user_search(username)
        console.log(users)
        return res.status(200).send(users)
    }
}