const Game = require('../model/quizmodel')

exports.createquiz = (req,res) => {
    const game = new Game({
        ...req.body
    })
    game.save().then(() => {
        res.json({response:"Product Added succefuly", succes:true})
    }).catch(err=> {res.json({err})})
}