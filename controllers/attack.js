const Attack = require('../models/Attack')

module.exports = {
    getTime: async (req,res) => {
        try{ 
            res.render('attack-time.ejs', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },

    createAttackTime: async (req,res) => {
        try{
            await Attack.create({
                date: new Date(req.body.date),
                startTime: req.body.start,
                endTime: req.body.end,
                userId: req.user.id,
                email: req.user.email
            })
            console.log("Attack time has been added.")
            res.redirect("/attack/attack-type")
        }catch(err){
            console.log(err)
        }
    },

    getType: async (req,res) => {
        try{ 
            res.render('attack-type.ejs', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },

    createAttackType: async (req,res) => {
        try{
            const attackType = await Attack.create({
                type: req.body.attackType,
                userId: req.user.id,
                email: req.user.email
            })
            console.log("Attack type has been added.")
            res.redirect("/attack/pain-level")
        }catch(err){
            console.log(err)
        }
    },

    getPainLevel: async (req,res) => {
        try{ 
            res.render('pain-level.ejs', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },

    createPainLevel: async (req,res) => {
        try{
            await Attack.create({
                level: req.body.painLevel,
                userId: req.user.id,
                email: req.user.email
            })
            console.log("Pain level has been added.")
            res.redirect("/attack/attack-location")
        }catch(err){
            console.log(err)
        }
    },

    getLocation: async (req,res) => {
        try{ 
            res.render('attack-location.ejs', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },

    createAttackLocation: async (req,res) => {
        try{
            await Attack.create({
                attackLocation: req.body.attackLocation,
                userId: req.user.id,
                email: req.user.email
            })
            console.log("Attack location has been added.")
            res.redirect("/attack/symptoms")
        }catch(err){
            console.log(err)
        }
    },

    getSymptoms: async (req,res) => {
        try{ 
            res.render('symptoms.ejs', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },

    createSymptoms: async (req,res) => {
        try{
            await Attack.create({
                symptoms: req.body.attackSymptoms,
                userId: req.user.id,
                email: req.user.email
            })
            console.log("Symptoms have been added.")
            res.redirect("/attack/triggers")
        }catch(err){
            console.log(err)
        }
    },

    getTriggers: async (req,res) => {
        try{ 
            res.render('triggers.ejs', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },

    createTriggers: async (req,res) => {
        try{
            await Attack.create({
                triggers: req.body.attackTriggers,
                userId: req.user.id,
                email: req.user.email
            })
            console.log("Triggers have been added.")
            res.redirect("/attack/aura")
        }catch(err){
            console.log(err)
        }
    },

    getAura: async (req,res) => {
        try{ 
            res.render('aura.ejs', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },

    createAura: async (req,res) => {
        try{
            await Attack.create({
                aura: req.body.attackAura,
                userId: req.user.id,
                email: req.user.email
            })
            console.log("Auras have been added.")
            res.redirect("/attack/medication")
        }catch(err){
            console.log(err)
        }
    },

    getMedication: async (req,res) => {
        try{ 
            res.render('medication.ejs', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },

    createMedication: async (req,res) => {
        try{
            await Attack.create({
                medication: req.body.attackMedication,
                userId: req.user.id,
                email: req.user.email
            })
            console.log("Medication have been added.")
            res.redirect("/attack/relief")
        }catch(err){
            console.log(err)
        }
    },

    getRelief: async (req,res) => {
        try{ 
            res.render('relief.ejs', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },

    createRelief: async (req,res) => {
        try{
            await Attack.create({
                relief: req.body.reliefMethod,
                userId: req.user.id,
                email: req.user.email
            })
            console.log("Relief methods have been added.")
            res.redirect("/attack/activities")
        }catch(err){
            console.log(err)
        }
    },

    getActivities: async (req,res) => {
        try{ 
            res.render('activities.ejs', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },

    createActivities: async (req,res) => {
        try{
            await Attack.create({
                activities: req.body.activitiesAffected,
                userId: req.user.id,
                email: req.user.email
            })
            console.log("Activities affected have been added.")
            res.redirect("/attack/pain-location")
        }catch(err){
            console.log(err)
        }
    },

    getPainLocation: async (req,res) => {
        try{ 
            res.render('pain-location.ejs', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },

    createPainLocation: async (req,res) => {
        try{
            await Attack.create({
                painLocation: req.body.painLocation,
                userId: req.user.id,
                email: req.user.email
            })
            console.log("Pain location has been added.")
            res.redirect("/attack/summary")
        }catch(err){
            console.log(err)
        }
    },

    getSummary: async (req,res) => {
        try{ 
            res.render('summary.ejs', { user: req.user })
        }catch(err){
            console.log(err)
        }
    }
}