// const todoItem = document.querySelectorAll('span.not')
// const todoComplete = document.querySelectorAll('span.completed')
const deleteBtn = document.querySelectorAll('.del')
const getTask = document.querySelector('.double')
const todoImportant = document.querySelectorAll('.fa-circle-exclamation')
const todoNotImportant = document.querySelectorAll('.fa-circle-exclamation.important')


// Array.from(todoItem).forEach((el) => {
//     el.addEventListener('click', markComplete)
// })

// Array.from(todoComplete).forEach((el) => {
//     el.addEventListener('click', markIncomplete)
// })

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteTodo)
})

Array.from(todoImportant).forEach((el) => {
    el.addEventListener('click', markImportant)
})

Array.from(todoNotImportant).forEach((el) => {
    el.addEventListener('click', markNotImportant)
})


// async function markComplete() {
//     const todoId = this.parentNode.dataset.id
//     try {
//         const response = await fetch('../home/markComplete', {
//             method: 'put',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     } catch (err) {
//         console.log(err)
//     }
// }

// async function markIncomplete() {
//     const todoId = this.parentNode.dataset.id
//     try {
//         const response = await fetch('../home/markIncomplete', {
//             method: 'put',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     } catch (err) {
//         console.log(err)
//     }
// }

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    const recTypeId = this.parentNode.dataset.id
    try {
        const response = await fetch('../home/deleteTodo', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId,
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
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('../home/markImportant', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
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
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('../home/markNotImportant', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
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