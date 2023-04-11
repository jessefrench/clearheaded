const Summary = require('../models/Summary')

module.exports = {
    getSummaryArchive: async (req, res) => {
        try {
            const summaryId = await Summary.findById(req.params.id)
            const summaryData = await Summary.find({}).sort({_id: -1})
            const selectedSummary = summaryData.map((items, index) => ({
                i: index,
                id: items._id,
                date: items.date,
                startTime: items.startTime,
                endTime: items.endTime,
                type: items.type.join(', ').toLowerCase(),
                level: items.level,
                attackLocation: items.attackLocation.toLowerCase(),
                symptoms: items.symptoms.join(', ').toLowerCase(),
                triggers: items.triggers.join(', ').toLowerCase(),
                aura: items.aura.join(', ').toLowerCase(),
                medication: items.medication.join(', '),
                relief: items.relief.join(', ').toLowerCase(),
                activities: items.activities.join(', ').toLowerCase(),
                painLocation: items.painLocation.join(', ').toLowerCase()
            }))
            res.render('summaries', {
                selectedSummary,
                summaryId
            })
        } catch (err) {
            console.log(err)
        }
    },

    getSummaryById: async (req, res) => {
        try {
            const summaryId = await Summary.findById(req.params.id)
            res.json(summaryId)
        } catch (err) {
            console.log(err)
        }
    }
}