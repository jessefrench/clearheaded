const Headache = require('../models/Headache')

module.exports = {
    getHeadaches: async (req, res) => {
        try{
            const headacheItems = await Headache.find({userId: req.user.id}).sort({completed: 1}).sort({date: 1})
            const itemsLeft = await Headache.countDocuments({userId: req.user.id, completed: false})
            res.render('home', {
                headaches: headacheItems,
                left: itemsLeft,
                user: req.user
            })
        }catch(err){
            console.log(err)
        }
    },
    createHeadache: async (req, res) => {
        try{
            await Headache.create({headache: req.body.headacheItem, completed: false, date: new Date(req.body.headacheDate), userId: req.user.id, email: req.user.email})
            console.log('Headache has been added.')
            res.redirect('/home')
        }catch(err){
            console.log(err)
        }
    },
    deleteHeadache: async (req, res) => {
        try{
            const deleteQuickAdd = await Headache.findOneAndDelete({_id: req.body.headacheIdFromJSFile})
            console.log('Headache deleted.')
            res.json('Headache deleted.')
        }catch(err){
            console.log(err)
        }
    },
    markImportant: async (req, res) => {
        try{
            await Headache.findOneAndUpdate({_id: req.body.headacheIdFromJSFile}, {important: true})
            console.log('Marked important.')
            res.json('Marked important.')
        }catch(err){
            console.log(err)
        }
    },
    markNotImportant: async (req, res) => {
        try{
            await Headache.findOneAndUpdate({_id: req.body.headacheIdFromJSFile}, {important: false})
            console.log('Marked not important.')
            res.json('Marked not important.')
        }catch(err){
            console.log(err)
        }
    }
}