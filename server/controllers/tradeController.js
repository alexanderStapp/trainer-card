module.exports = {
    createTrade: async (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {lookingFor, willing} = req.body
        await db.trades.create_trade(user.user_id, lookingFor, willing)
        return res.sendStatus(200)
    },
    getTrades: async (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.params
        const trades = await db.trades.get_trades(user_id)
        return res.status(200).send(trades)
    }
}