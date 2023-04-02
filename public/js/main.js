const deleteBtn = document.querySelectorAll('.del')
const getTask = document.querySelector('.double')
const headacheImportant = document.querySelectorAll('.fa-circle-exclamation')
const headacheNotImportant = document.querySelectorAll('.fa-circle-exclamation.important')

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