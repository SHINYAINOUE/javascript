const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');





// アロー関数-新しい書き方
const arrow = () => {
    //実行したい処理1
    //実行したい処理2

}

// function構文-古くからのある書き方
function func() {
    //実行したい処理1
    //実行したい処理2

}

const colorBg = () => {

    document.body.style.backgroundColor = color.value;

    // document.body.style.fontSize = '40px';

    if (color.value === '#ffffff') {
        text.textContent = `カラーコード : ${color.value}(white)`;
    }
    else if (color.value === '#000000') {
        text.textContent = `カラーコード : ${color.value}(black)`
    } else {
        text.textContent = `カラーコード : ${color.value}`
    }
}


color.addEventListener('click', colorBg)



// const message = (name,weather) => {
//     console.log(`${name}さん、こんにちは！今日はwether}です。`);
// }

// // 呼び出して初めて実行される。
// message('aa','いい天気')
// message('bb','雨')

