const Todo = require('../models/Todo')
const AttackTime = require('../models/AttackTime')
const AttackType = require('../models/AttackType')
const moment = require('moment')

module.exports = {
    getTodos: async (req, res) => {
        try{
            const todoItems = await Todo.find({userId: req.user.id}).sort({completed: 1}).sort({date: 1})
            const itemsLeft = await Todo.countDocuments({userId: req.user.id, completed: false})
            const recordedAttackType = await AttackType.findOne({userId: req.user.id}).sort({_id: -1})
            const recordedAttackDate = await AttackTime.findOne({userId: req.user.id}).sort({_id: -1})
            res.render('home.ejs', {
                todos: todoItems,
                left: itemsLeft,
                user: req.user
            })
        }catch(err){
            console.log(err)
        }
    },
    getTask: async (req, res) => {
        try{
            const setDate = moment(req.body.findTask).format("YYYY-MM-DD").toString()
            const todoItems = await Todo.find({userId: req.user.id}).find({date: {$gte: new Date(req.body.findTask), $lte: new Date(req.body.findTask)}})
            const itemsLeft = await Todo.countDocuments({userId: req.user.id, completed: false})
            res.render('home.ejs', {
                todos: todoItems,
                left: itemsLeft,
                user: req.user
            })
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res) => {
        try{
            await Todo.create({todo: req.body.todoItem, completed: false, date: new Date(req.body.toDoDate), userId: req.user.id, email: req.user.email})
            console.log('Headache has been added.')
            res.redirect('/home')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res) => {
        try{
            await Todo.findOneAndUpdate({_id: req.body.todoIdFromJSFile}, {completed: true})
            console.log('Marked complete.')
            res.json('Marked complete.')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res) => {
        try{
            await Todo.findOneAndUpdate({_id: req.body.todoIdFromJSFile}, {completed: false})
            console.log('Marked incomplete.')
            res.json('Marked incomplete.')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res) => {
        try{
            const deleteQuickAdd = await Todo.findOneAndDelete({_id: req.body.todoIdFromJSFile})
            console.log('Headache deleted.')
            res.json('Headache deleted.')
        }catch(err){
            console.log(err)
        }
    },
    markImportant: async (req, res) => {
        try{
            await Todo.findOneAndUpdate({_id: req.body.todoIdFromJSFile}, {important: true})
            console.log('Marked important.')
            res.json('Marked important.')
        }catch(err){
            console.log(err)
        }
    },
    markNotImportant: async (req, res) => {
        try{
            await Todo.findOneAndUpdate({_id: req.body.todoIdFromJSFile}, {important: false})
            console.log('Marked not important.')
            res.json('Marked not important.')
        }catch(err){
            console.log(err)
        }
    }
}