const deleteBtn = document.querySelectorAll('.del')
const getTask = document.querySelector('.double')
const headacheImportant = document.querySelectorAll('.fa-circle-exclamation')
const headacheNotImportant = document.querySelectorAll('.fa-circle-exclamation.important')
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')
const checker = document.getElementById('checker')
const summaryLink = document.querySelectorAll('.summary-link')
const summaryList = document.getElementById('summary-list')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY) 
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
            container.appendChild(draggable)
        } else {
            container.insertBefore(draggable, afterElement)
        }
    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}

Array.from(summaryLink).forEach((link) => {
    link.addEventListener('click', handleClick)
})

async function handleClick(event) {
    event.preventDefault()
    const url = event.target.href
    try {
        const response = await fetch(url, {
            method: 'GET',
            dataType: 'json'
        })
        const summaryId = await response.json()
        const dateStr = summaryId.date
        const dateNew = new Date(dateStr)
        const date = dateNew.toLocaleDateString('en-US', {
            month: "numeric",
            day: "numeric",
            year: "numeric"
        })
        const startTimeStr = summaryId.startTime
        const [hours, minutes] = startTimeStr.split(':')
        const startTimeNew = new Date()
        startTimeNew.setHours(hours, minutes)
        const startTime = startTimeNew.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        })
        const endTimeStr = summaryId.endTime
        const [hrs, mins] = endTimeStr.split(':')
        const endTimeNew = new Date()
        endTimeNew.setHours(hrs, mins)
        const endTime = endTimeNew.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        })
        const type = summaryId.type.join(', ').toLowerCase()
        const level = summaryId.level
        const attackLocation = summaryId.attackLocation.toLowerCase()
        const symptoms = summaryId.symptoms.join(', ').toLowerCase()
        const triggers = summaryId.triggers.join(', ').toLowerCase()
        const aura = summaryId.aura.join(', ').toLowerCase()
        const medication = summaryId.medication.join(', ')
        const relief = summaryId.relief.join(', ').toLowerCase()
        const activities = summaryId.activities.join(', ').toLowerCase()
        const painLocation = summaryId.painLocation.join(', ').toLowerCase() 
        summaryList.innerHTML = `
            <ul id="summary-list" className="list-none">
                <li> <strong>Attack date:</strong> ${date} </li>
                <li> <strong>Attack time:</strong> ${startTime} - ${endTime} </li>
                <li> <strong>Attack type:</strong> ${type} </li>
                <li> <strong>Pain level:</strong> ${level} </li>
                <li> <strong>Attack location:</strong> ${attackLocation} </li>
                <li> <strong>Symptoms:</strong> ${symptoms} </li>
                <li> <strong>Triggers:</strong> ${triggers} </li>
                <li> <strong>Aura:</strong> ${aura} </li>
                <li> <strong>Medication:</strong> ${medication} </li>
                <li> <strong>Relief methods:</strong> ${relief} </li>
                <li> <strong>Activities affected:</strong> ${activities} </li>
                <li> <strong>Pain location:</strong> ${painLocation} </li>
            </ul>
        `
        console.log(summaryId)
    } catch (err) {
        console.log(err)
    }
}

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteHeadache)
})

async function deleteHeadache(){
    const headacheId = this.parentNode.dataset.id
    const recTypeId = this.parentNode.dataset.id
    try {
        const response = await fetch('../home/deleteHeadache', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'headacheIdFromJSFile': headacheId,
                'recTypeIdFromJSFile': recTypeId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

Array.from(headacheImportant).forEach((el) => {
    el.addEventListener('click', markImportant)
})

async function markImportant() {
    const headacheId = this.parentNode.dataset.id
    try {
        const response = await fetch('../home/markImportant', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'headacheIdFromJSFile': headacheId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

Array.from(headacheNotImportant).forEach((el) => {
    el.addEventListener('click', markNotImportant)
})

async function markNotImportant() {
    const headacheId = this.parentNode.dataset.id
    try {
        const response = await fetch('../home/markNotImportant', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'headacheIdFromJSFile': headacheId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

if (checker) {
    checker.addEventListener('change', toggleInput)
}

async function toggleInput() {
    try {
        if (this.checked === true) {
            document.getElementById("userInput").disabled = false
            document.getElementById("userInput").focus()
        } else {
            document.getElementById("userInput").disabled = true
        }
    } catch (error) {
        console.log(error)
    }
}