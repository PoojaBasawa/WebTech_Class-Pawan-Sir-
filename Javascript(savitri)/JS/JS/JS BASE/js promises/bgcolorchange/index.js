let colors = ['white', 'red', 'purple', 'orange', 'pink']
let len = colors.length - 1

let btnControl = document.getElementById('btn')
let spanControl = document.querySelector(".color")

btnControl.addEventListener('click', () => {
    var index = generateRandomIndex()
    spanControl.textContent = colors[index]
    document.body.style.backgroundColor = colors[index] // Change the background color
})

function generateRandomIndex() {
    return Math.round(Math.random() * len)
}
