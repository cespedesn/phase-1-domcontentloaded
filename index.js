// Your code goes here

// const changeText = document.addEventListener('DOMContentLoaded', (event) => {
//    const change = document.querySelector('p').innerText = ("This is really cool!");
//    document.querySelector('p').append(change)
//    console.log(changeText)
// })

const changeText = document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('text').textContent = 'This is really cool!'
})
