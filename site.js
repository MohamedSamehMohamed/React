function checkText(){
  if (isCheater) {
    location.reload();
    return;
  }
  let str = document.getElementById("typedText").value;
  let unTypedText = document.getElementById("unMarkedText").textContent;
  let typedText = document.getElementById("markedText").textContent;
  let typedWrongText = document.getElementById('markedWrong').textContent;
  if (count >= 0) {
      document.getElementById("typedText").value = '';
      return;
  }
  unTypedText = typedWrongText + unTypedText;
  
  if (unTypedText.length == 0){
      return;
  }
  let strToMarkedRed = '';
  if (unTypedText[0] != str[0]){
      wrongChars+=1;
      let len = (unTypedText.length < str.length? unTypedText.length: str.length);
      strToMarkedRed = unTypedText.substring(0, len);
      unTypedText = unTypedText.substring(len);
  }else {
      let i = 0;
      while (i < unTypedText.length && i < str.length && str[i] == unTypedText[i]) {
          typedText += str[i];
          i++;
      }
      i--;
      str = str.substring(i + 1);
      unTypedText = unTypedText.substring(i + 1);
  }
  document.getElementById("typedText").value = str;
  document.getElementById("unMarkedText").textContent = unTypedText;
  document.getElementById("markedText").textContent = typedText;
  document.getElementById("markedWrong").textContent = strToMarkedRed;
  let seconds = calcWPM();
  if (unTypedText.length + strToMarkedRed.length == 0){
      printAllInfo(seconds);
  }
}
function addToUl(ul, text){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ul.appendChild(li);
}
function printAllInfo(seconds){
  let str = 'total number of characters Writen is ' + textSize + ' character';
  var ul = document.getElementById("info");
  addToUl(ul, str);
  str = 'Time: ' + seconds.toPrecision(3) + ' seconds';
  addToUl(ul, str);
  str = 'accurecy: ' + parseInt(100 * (1 - (((wrongChars/textSize)*100)/100))) + '%';
  addToUl(ul, str);
  str = 'word per minute (wpm): ' + calcWpmHelper(seconds, textSize) + ' wpm';
  addToUl(ul, str);
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
      textSize = document.getElementById("unMarkedText").textContent.length;
      wrongChars = 0;
      count -= 1;
      isCheater = 0;
      return;
  }
  e.textContent = count;
  count-=1;
}
function addTextHelper(text){
  document.getElementById("unMarkedText").textContent = text;
  document.getElementById("markedText").textContent = '';
  document.getElementById('markedWrong').textContent = '';
  document.getElementById('info').textContent = '';
  document.getElementById("typedText").value = '';
  count = 2;
}
function addText(){
  let text = document.getElementById('textToAdd').value;
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
let wrongChars;
let textSize = document.getElementById("unMarkedText").textContent.length;
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



