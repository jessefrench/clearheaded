const deleteBtn = document.querySelectorAll('.del')
const getTask = document.querySelector('.double')
const headacheImportant = document.querySelectorAll('.fa-circle-exclamation')
const headacheNotImportant = document.querySelectorAll('.fa-circle-exclamation.important')
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

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

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteHeadache)
})

Array.from(headacheImportant).forEach((el) => {
    el.addEventListener('click', markImportant)
})

Array.from(headacheNotImportant).forEach((el) => {
    el.addEventListener('click', markNotImportant)
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

document.getElementById('checker').onchange = function() {
    if(this.checked === true){
        document.getElementById("userInput").disabled = false
        document.getElementById("userInput").focus()
    }else{
        document.getElementById("userInput").disabled = true
    }
}