const menu = document.querySelector('#menu');

// const strawberry = {
//     name: 'イチゴ',
//     img: 'strawberry.jpg',
//     price: 450
// }

// console.log(strawberry)
// console.log(strawberry.name)
// console.log(strawberry.img)
// console.log(strawberry.price)


const lists = [
    {
        name: 'イチゴ',
        img: 'strawberry.jpg',
        price: 450
    },
    {
        name: 'ライム',
        img: 'lime.jpg',
        price: 400
    },
    {
        name: 'マンゴー',
        img: 'mango.jpg',
        price: 500
    },
    {
        name: 'レモン',
        img: 'lemon.jpg',
        price: 400
    },
    {
        name: 'イチジク',
        img: 'fig.jpg',
        price: 500
    },
    {
        name: 'リンゴ',
        img: 'apple.jpg',
        price: 400
    },
];


// const lists = [
//     'strawberry.jpg',
//     'lime.jpg',
//     'mango.jpg',
//     'lemon.jpg',
//     'fig.jpg',
//     'apple.jpg',
// ];



// // console.log(lists[0])
// // console.log(lists[2])
// // console.log(lists[5])


for (let i= 0; i < lists.length; i++){
    console.log(lists[i].img)
    const content = `
    <div>
    <img src="images/${lists[i].img}" alt="">
<h2>${lists[i].name}</h2>
<p>${lists[i].price}円</p>
    </div>
    `
menu.insertAdjacentHTML('beforeend', content);
}


// // const apple = {
// //     name: 'リンゴ',
// //     color: '赤'
// //     price: '100'
// //     size: 'small'
// //     area:'青森県'
// // }

