const button = document.querySelector('#button')

console.log(button)

const changColor = () => {
    //実行したい内容
    // document.querySelector('#button').style.backgroundColor = "red"
    button.style.backgroundColor = "red"
    button.style.color = "white"
}
button.addEventListener('click', changColor)




