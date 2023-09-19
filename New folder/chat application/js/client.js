const socket = io("http://localhost:8000")

const form = document.getElementById('send-container')
const userInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")

const append = (message, position)=>{
    const messageElement = document.creatElement('div')
    messageElement.innerText = message
    messageElement.classList.append('message')
    messageElement.classList.append('position')
    message.messageContainer.append(messageElement)

}


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const message = messageInput.value 
    append(`You: ${message}`, 'right')
    socket.emit('send', message)
    messageInput.value = '' 
})

const name = prompt("Enter your name to join: ")
socket.emit('new-user-joined', name)

socket.on('user-joined', name =>{
    append(`${name} joined chat`, 'center')
})

socket.on('receive', data =>{
    append(`${neme}: ${data.message}`, 'center')
})

socket.on('left', name =>{
    append(`${name} left the chat`, 'center')
})