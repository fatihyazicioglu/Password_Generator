const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')


function randomColor(){
  let one = Math.floor(Math.random () * 256)
  let two = Math.floor(Math.random () * 256)
  let three = Math.floor(Math.random() * 256)
  let a = Math.random()
  return `rgba(${one},${two},${three},${a})`
        }
   passwordDisplay.style.backgroundColor = randomColor()


const randomHex = () => {
  let result = [];
  let numAndStr = "1234567890ABCDEF";
  for (let i = 0; i < 8; i++) {
    result.push(numAndStr[Math.floor(Math.random() * numAndStr.length)]);
  }
  passwordDisplay.innerHTML = result.join(" - ");
  return result.join("");
};


   for (const item of form) {
  item.style.backgroundColor = `#${randomHex()}`;
}








// for (let i = 0; i < items.length; ) {
//   items[i].style.backgroundColor = "gray";
//   i += 2;
// }
// items.forEach((item, i) => {
//   item.style.backgroundColor = `rgba(
//      ${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)},
//     ${Math.floor(Math.random() * 255)},
//     ${Math.random()}
//   )`;
// });

