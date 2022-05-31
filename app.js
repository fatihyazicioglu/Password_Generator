const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')



const randomHex = () => {
  let result = [];
  let numAndStr = "1234567890ABCDEF";
  for (let i = 0; i < 6; i++) {
    result.push(numAndStr[Math.floor(Math.random() * numAndStr.length)]);
  }
  passwordDisplay.innerHTML = result.join("");
  return result.join("");
};
for (const item of form) {
  item.style.backgroundColor = `#${randomHex()}`;
}



