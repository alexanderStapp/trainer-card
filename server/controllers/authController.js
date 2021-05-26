const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const [result] = await db.auth.check_username(username)
        if(result) {
            return res.status(409).send('username has been taken')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const [user] = await db.auth.register_user(username, hash)
        delete user.password
        req.session.user = user
        return res.status(200).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const [user] = await db.auth.check_username(username)
        if(!user) {
            return res.status(401).send('user not found')
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if(!isAuthenticated) {
            return res.status(401).send('password incorrect')
        }
        delete user.password
        req.session.user = user
        return res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    getUser: (req, res) => {
        if(req.session.user) {
            return res.status(200).send(req.session.user)
        } else {
            return res.sendStatus(511)
        }
    }
}