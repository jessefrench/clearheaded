const AttackTime = require('../models/AttackTime')
const AttackType = require('../models/AttackType')
const PainLevel = require('../models/PainLevel')
const AttackLocation = require('../models/AttackLocation')
const Symptoms = require('../models/Symptoms')
const Triggers = require('../models/Triggers')
const Aura = require('../models/Aura')
const Medication = require('../models/Medication')
const Relief = require('../models/Relief')
const Activities = require('../models/Activities')
const PainLocation = require('../models/PainLocation')
const Summary = require('../models/Summary')

module.exports = {
    getTime: async (req, res) => {
        try{ 
            res.render('attack-time', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },
    createAttackTime: async (req, res) => {
        try{
            await AttackTime.create({
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
    getType: async (req, res) => {
        try{ 
            res.render('attack-type', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },
    createAttackType: async (req, res) => {
        try{
            await AttackType.create({
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
    getPainLevel: async (req, res) => {
        try{ 
            res.render('pain-level', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },
    createPainLevel: async (req,  res) => {
        try{
            await PainLevel.create({
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
    getLocation: async (req, res) => {
        try{ 
            res.render('attack-location', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },
    createAttackLocation: async (req, res) => {
        try{
            await AttackLocation.create({
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
    getSymptoms: async (req, res) => {
        try{ 
            res.render('symptoms', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },
    createSymptoms: async (req, res) => {
        try{
            await Symptoms.create({
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
    getTriggers: async (req, res) => {
        try{ 
            res.render('triggers', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },
    createTriggers: async (req, res) => {
        try{
            await Triggers.create({
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
    getAura: async (req, res) => {
        try{ 
            res.render('aura', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },
    createAura: async (req, res) => {
        try{
            await Aura.create({
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
    getMedication: async (req, res) => {
        try{ 
            res.render('medication', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },
    createMedication: async (req, res) => {
        try{
            await Medication.create({
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
    getRelief: async (req, res) => {
        try{ 
            res.render('relief', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },
    createRelief: async (req, res) => {
        try{
            await Relief.create({
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
    getActivities: async (req, res) => {
        try{ 
            res.render('activities', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },
    createActivities: async (req, res) => {
        try{
            await Activities.create({
                activities: req.body.activitiesAffected,
                userId: req.user.id, 
                email: req.user.email
            })
            console.log("Activities have been added.")
            res.redirect("/attack/pain-location")
        }catch(err){
            console.log(err)
        }
    },
    getPainLocation: async (req, res) => {
        try{ 
            res.render('pain-location', { user: req.user })
        }catch(err){
            console.log(err)
        }
    },
    createPainLocation: async (req, res) => {
        try{
            await PainLocation.create({
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
    getSummary: async (req, res) => {
        try{
            const attackDate = await AttackTime.findOne({userId: req.user.id}).sort({_id: -1})
            const attackStartTime = await AttackTime.findOne({userId: req.user.id}).sort({_id: -1})
            const attackEndTime = await AttackTime.findOne({userId: req.user.id}).sort({_id: -1})
            const attackType = await AttackType.findOne({userId: req.user.id}).sort({_id: -1})
            const painLevel = await PainLevel.findOne({userId: req.user.id}).sort({_id: -1})
            const aLocation = await AttackLocation.findOne({userId: req.user.id}).sort({_id: -1})
            const attackSymptoms = await Symptoms.findOne({userId: req.user.id}).sort({_id: -1})
            const attackTriggers = await Triggers.findOne({userId: req.user.id}).sort({_id: -1})
            const attackAura = await Aura.findOne({userId: req.user.id}).sort({_id: -1})
            const attackMedication = await Medication.findOne({userId: req.user.id}).sort({_id: -1})
            const reliefMethods = await Relief.findOne({userId: req.user.id}).sort({_id: -1})
            const activitiesAffected = await Activities.findOne({userId: req.user.id}).sort({_id: -1})
            const pLocation = await PainLocation.findOne({userId: req.user.id}).sort({_id: -1})
            res.render('summary', {
                date: attackDate.date,
                start: attackStartTime.startTime,
                end: attackEndTime.endTime,
                type: attackType.type,
                level: painLevel.level,
                attackLoc: aLocation.attackLocation,
                symptoms: attackSymptoms.symptoms,
                triggers: attackTriggers.triggers,
                aura: attackAura.aura,
                medication: attackMedication.medication,
                relief: reliefMethods.relief,
                activities: activitiesAffected.activities,
                painLoc: pLocation.painLocation
            })
        }catch(err){
            console.log(err)
        }
    },
    createSummary: async (req, res) => {
        try{
            const attackDate = await AttackTime.findOne({userId: req.user.id}).sort({_id: -1})
            const attackStartTime = await AttackTime.findOne({userId: req.user.id}).sort({_id: -1}).select('startTime')
            const attackEndTime = await AttackTime.findOne({userId: req.user.id}).sort({_id: -1}).select('endTime')
            const attackType = await AttackType.findOne({userId: req.user.id}).sort({_id: -1})
            const painLevel = await PainLevel.findOne({userId: req.user.id}).sort({_id: -1})
            const attackLocation = await AttackLocation.findOne({userId: req.user.id}).sort({_id: -1})
            const attackSymptoms = await Symptoms.findOne({userId: req.user.id}).sort({_id: -1})
            const attackTriggers = await Triggers.findOne({userId: req.user.id}).sort({_id: -1})
            const attackAura = await Aura.findOne({userId: req.user.id}).sort({_id: -1})
            const attackMedication = await Medication.findOne({userId: req.user.id}).sort({_id: -1})
            const reliefMethods = await Relief.findOne({userId: req.user.id}).sort({_id: -1})
            const activitiesAffected = await Activities.findOne({userId: req.user.id}).sort({_id: -1})
            const painLocation = await PainLocation.findOne({userId: req.user.id}).sort({_id: -1})

            await Summary.create({
                date: attackDate.date,
                startTime: attackStartTime.startTime,
                endTime: attackEndTime.endTime,
                type: attackType.type,
                level: painLevel.level,
                attackLocation: attackLocation.attackLocation,
                symptoms: attackSymptoms.symptoms,
                triggers: attackTriggers.triggers,
                aura: attackAura.aura,
                medication: attackMedication.medication,
                relief: reliefMethods.relief,
                activities: activitiesAffected.activities,
                painLocation: painLocation.painLocation
            })

            console.log("Summary has been added.")
            res.redirect("/home")

        }catch(err){
            console.log(err)
        }
    }
}