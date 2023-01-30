function checkText(){
  if (isCheater) {
    location.reload();
    return;
  }
  // what user typed 
  let str = document.getElementById("typedText").value;
  // the text to be typed
  let unTypedText = document.getElementById("content").textContent;
  
  // if race didn't start yet 
  if (count >= 0) {
      document.getElementById("typedText").value = '';
      return;
  }
  let indexForUnTyped = 0;
  // charactersArray[i] -> 0 not typed yet
  // charactersArray[i] -> 1 typed correctly 
  // charactersArray[i] -> -1 typed incorrectly 
  // charactersArray[i] ->  2 typed incorrectly then correctly 

  while (indexForUnTyped < textSize && charactersArray[indexForUnTyped] > 0){
    indexForUnTyped++;
  }
  while (indexForUnTyped < textSize && str.length > 0){
    if (unTypedText[indexForUnTyped] == str[0])
    {
      charactersArray[indexForUnTyped] = (charactersArray[indexForUnTyped] == -1? 2: 1);
      str = str.substr(1);
      indexForUnTyped++;
    }else {
      let wrongChars = str.length;
      while (indexForUnTyped < textSize && wrongChars > 0){
        charactersArray[indexForUnTyped] = -1;
        wrongChars--;
        indexForUnTyped++;
      }
      break;
    }
  }
  // clear the old text
  document.getElementById('content').textContent = '';
  
  for (let i = 0; i < textSize; i++){
    let j = i + 1;
    let text = unTypedText[i];
    while (j < textSize && charactersArray[j] == charactersArray[j-1]){
      text += unTypedText[j];
      j++;
    }
  
    let curText = document.createElement("span");
    if (charactersArray[i] == 0){
      curText.className = 'unMarkedText';
    }else if (charactersArray[i] == 1)
    {
      curText.className = 'markedText';
    }else if (charactersArray[i] == -1)
    {
      curText.className = 'markedWrong';
    }else if (charactersArray[i] == 2){
      curText.className = 'markedTextWithFail';
    }
    curText.textContent = text;
    document.getElementById('content').appendChild(curText);
    i = j - 1;
  }
  
  document.getElementById("typedText").value = str;
  let timeForTyping = calcWPM()

  // if all letters are writen correctly 
  if (charactersArray[textSize-1] > 0)
  {
    printAllInfo(timeForTyping);
  }
}
function addToUl(ul, text){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ul.appendChild(li);
}
function addTableRow(column1, column2){
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  td1.textContent = column1; 
  td2.textContent = column2;
  tr.appendChild(td1);
  tr.appendChild(td2);
  document.getElementById('tableInfo').appendChild(tr);
}
function getNumberOfWrongCharsTyped(){
  let wrongChars = 0;
  for (let i = 0; i < textSize; i++)
  {
    if (charactersArray[i] == 2)
    {
      wrongChars++;
    }
  }
  return wrongChars;
}
function printAllInfo(seconds){
  addTableRow('total number of characters Writen: ', textSize + ' character');
  addTableRow('Time: ', seconds.toPrecision(3) + ' seconds');
  let wrongChars = getNumberOfWrongCharsTyped();
  addTableRow('accurecy: ', parseInt(100 * (1 - (wrongChars/textSize))) + '%');
  addTableRow('word per minute (wpm): ', calcWpmHelper(seconds, textSize) + ' wpm');
}
function calcWpmHelper(time, textSize){
  let charsPerSecond = textSize / time;
  let wordPerMinute =  parseInt((charsPerSecond * 60) / 4);
  return wordPerMinute;
}
function calcWPM(){
  end = new Date();
  let time = (end.getTime() - start.getTime()) / 1000;
  let wordPerMinute = calcWpmHelper(time, textSize);
  document.getElementById("wpmScore").textContent = wordPerMinute + ' wpm';
  return time;
}
function countDown(){
  let e = document.getElementById("countDown");
  if (count < 0) return;
  if (count == 0) {
      e.textContent = 'Go';
      e.style = 'color: green';
      start = new Date();
      textSize = document.getElementById("content").textContent.length;
      wrongChars = 0;
      count -= 1;
      isCheater = 0;
      return;
  }
  e.style = '';
  e.textContent = count;
  count-=1;
}
function addTextHelper(text){
  document.getElementById("content").textContent = text;
  document.getElementById('tableInfo').textContent = '';
  document.getElementById("typedText").value = '';
  
  count = 2;
}
function addText(){
  let text = document.getElementById('content').value;
  if (text.length == 0) {
    alert('please Add Text');
    return;
  }
  addTextHelper(text);
}
function getRandomChar(){
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let index = parseInt(Math.random() * alpha.length);
  return alpha[index];
}
function genText(){
  let len = 1 + Math.random() * 8;
  let text = '';
  for (let i = 0; i < len; i++){
    text += getRandomChar();
  }
  let rep = 1 + Math.random() * 10;
  let fin = '';
  while (rep > 0){
    rep--;
    fin += text;
    if (rep > 0) fin += ' ';
  }
  addTextHelper(fin);
}
function markCheater(){
  isCheater = 1;
  alert('Shame On YOU');
}
let typedTextInput = document.getElementById("typedText");
typedTextInput.oninput = function (){checkText()};

let start;
let end;
let textSize = document.getElementById("content").textContent.length;
let charactersArray = Array(textSize);
for (let i = 0; i < textSize; i++){
  charactersArray[i] = 0;
}
// time before the race
let count = 2;
let isCheater = 0;
setInterval('countDown();', 1000);


// If user use paste in text
let typedTextObj = document.getElementById('typedText');
typedTextObj.onpaste = function(){markCheater()};

// to add the text to Text Div 
let addBtn = document.getElementById('addText')
addBtn.onclick = function (){addText()};

// to generate a random text
let genBtn = document.getElementById('genRandom')
genBtn.onclick = function (){genText()};



