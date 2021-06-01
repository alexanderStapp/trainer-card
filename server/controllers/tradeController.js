module.exports = {
    createTrade: async (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        console.log(req.body)
        const {lookingFor, willing} = req.body
        await db.trades.create_trade(user.user_id, lookingFor, willing)
        return res.sendStatus(200)
    }
}