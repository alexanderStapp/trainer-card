module.exports = {
    createTrade: async (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {lookingFor, lookingName, lookingSprite, willing, willingName, willingSprite} = req.body
        await db.trades.create_trade(user.user_id, lookingFor, lookingName, lookingSprite, willing, willingName, willingSprite)
        return res.sendStatus(200)
    },
    getTrades: async (req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.params
        const trades = await db.trades.get_trades(user_id)
        return res.status(200).send(trades)
    },
    deleteTrade: async (req, res) => {
        const db = req.app.get('db')
        const {trade_id} = req.params
        const {user} = req.session
        await db.trades.delete_trade(trade_id)
        const trades = await db.trades.get_trades(user.user_id)
        return res.status(200).send(trades)
    }
}