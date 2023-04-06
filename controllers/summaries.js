const Summary = require('../models/Summary')

module.exports = {
    getSummaryArchive: async (req, res) => {
        try {
            const allSummaryDocs = await Summary.find({}).sort({_id: -1})
            const summaryDates = allSummaryDocs.map((records) => ({
                id: records._id,
                date: records.date
            }))
            const summaryData = await Summary.find({}).sort({_id: -1}).limit(1)
            const summaryItems = summaryData.map((items) => ({
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
                summaryItems,
                summaryDates
            })
        } catch (err) {
            console.log(err)
        }
    },

    // getSummaryByDate: async (req, res) => {
    //     try {
    //         const allSummaryDocs = await Summary.findById(req.params.id)
    //         console.log(allSummaryDocs)
    //         const selectSummaryByDate = allSummaryDocs.map((records) => ({
    //             id: records._id,
    //             date: records.date
    //         }))

    //         res.render('summaries', {
    //             selectSummaryByDate
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
}