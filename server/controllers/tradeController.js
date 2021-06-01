module.exports = {
    createTrade: async (req, res) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {poke1, poke2, notes} = req.body
        await db.trades.create_trade(user.user_id, poke1, poke2, notes)
        return res.sendStatus(200)
    }
}