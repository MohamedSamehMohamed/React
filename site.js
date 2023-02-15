let paragraphs = ['The chapters in the next part of the book walk through a fictitious case study for The Pampered Pet, a pet supply store. These chapters work through the steps for building the company a new database from requirements gathering to implementation.'
, "Chapter 11 begins the development process by gathering user requirements. It walks through the project's initial steps, including meeting the customers, picking the customers' brains, and examining the database's performance, security, and data integrity needs. It finishes by developing use cases and requirements documents."
, "The purpose of the initial meeting is mostly to let you and the customers meet and get comfortable with each other. There's a chance that you'll get some serious work done, but it's more likely that this meeting will stay at a fairly high level."
, "The system must be fast enough to be usable by an employee working with a customer. This is a typical case of 'fast enough is fast enough.' Unfortunately 'fast enough' isn't a verifiable quantity. You need to write down an explicit definition of what 'fast enough' means so you can tell if you're meeting your goal."
, "It's important to get feedback at every stage of development. Remember, the longer a mistake is in the system, the harder it is to fix. Mistakes made during requirements gathering can throw the whole effort out of whack."
, "Semantic object models have the advantage that they are relatively close in structure to the kinds of entity definitions that you typically get out of requirements gathering. They focus on the attributes that objects have. That is the same type of information that you get by studying the customer's needs and user interface mockups, and then figuring out where those mockups will get their data."
, "Many system administrators spend a great deal of effort on software and network security and do nothing about physical security. It makes sense to focus on network attacks because an open Internet connection makes you potentially vulnerable to millions of would-be hackers and cybersnoops."
, "It is always a good idea to ask questions about the exact scope of the problem we are solving. Design questions are mostly open-ended, and they don't have ONE correct answer, that’s why clarifying ambiguities early in the interview becomes critical. Candidates who spend enough time to define the end goals of the system always have a better chance to be successful in the interview. Also, since we only have 35-40 minutes to design a (supposedly) large system, we should clarify what parts of the system we will be focusing on."
, "Scalability is the capability of a system, process, or a network to grow and manage increased demand. Any distributed system that can continuously evolve in order to support the growing amount of work is considered to be scalable."
, "Horizontal vs. Vertical Scaling: Horizontal scaling means that you scale by adding more servers into your pool of resources whereas Vertical scaling means that you scale by adding more power (CPU, RAM, Storage, etc.) to an existing server. With horizontal-scaling it is often easier to scale dynamically by adding more machines into the existing pool; Vertical-scaling is usually limited to the capacity of a single server and scaling beyond that capacity often involves downtime and comes with an upper limit."
, "Reliability By definition, reliability is the probability a system will fail in a given period. In simple terms, a distributed system is considered reliable if it keeps delivering its services even when one or several of its software or hardware components fail. Reliability represents one of the main characteristics of any distributed system, since in such systems any failing machine can always be replaced by another healthy one, ensuring the completion of the requested task."
, "Availability By definition, availability is the time a system remains operational to perform its required function in a specific period. It is a simple measure of the percentage of time that a system, service, or a machine remains operational under normal conditions. An aircraft that can be flown for many hours a month without much downtime can be said to have a high availability. Availability takes into account maintainability, repair time, spares availability, and other logistics considerations. If an aircraft is down for maintenance, it is considered not available during that time."
, "Reliability Vs. Availability If a system is reliable, it is available. However, if it is available, it is not necessarily reliable. In other words, high reliability contributes to high availability, but it is possible to achieve a high availability even with an unreliable product by minimizing repair time and ensuring that spares are always available when they are needed."
, "Efficiency To understand how to measure the efficiency of a distributed system, let’s assume we have an operation that runs in a distributed manner and delivers a set of items as result. Two standard measures of its efficiency are the response time (or latency) that denotes the delay to obtain the first item and the throughput (or bandwidth) which denotes the number of items delivered in a given time unit (e.g., a second)."
, "Load Balancer (LB) is another critical component of any distributed system. It helps to spread the traffic across a cluster of servers to improve responsiveness and availability of applications, websites or databases. LB also keeps track of the status of all the resources while distributing requests. If a server is not available to take new requests or is not responding or has elevated error rate, LB will stop sending traffic to such a server. Typically a load balancer sits between the client and the server accepting incoming network and application traffic and distributing the traffic across multiple backend servers using various algorithms. By balancing application requests across multiple servers, a load balancer reduces individual server load and prevents any one application server from becoming a single point of failure, thus improving overall application availability and responsiveness."
, "A proxy server is an intermediate server between the client and the back-end server. Clients connect to proxy servers to request for a service like a web page, file, connection, etc. In short, a proxy server is a piece of software or hardware that acts as an intermediary for requests from clients seeking resources from other servers."
, "An open proxy is a proxy server that is accessible by any Internet user. Generally, a proxy server only allows users within a network group (i.e. a closed proxy) to store and forward Internet services such as DNS or web pages to reduce and control the bandwidth used by the group. With an open proxy, however, any user on the Internet is able to use this forwarding service."
, "Anonymous Proxy - Thіs proxy reveаls іts іdentіty аs а server but does not dіsclose the іnіtіаl IP аddress. Though thіs proxy server cаn be dіscovered eаsіly іt cаn be benefіcіаl for some users аs іt hіdes their IP аddress."
, "Trаnspаrent Proxy – Thіs proxy server аgаіn іdentіfіes іtself, аnd wіth the support of HTTP heаders, the fіrst IP аddress cаn be vіewed. The mаіn benefіt of usіng thіs sort of server іs іts аbіlіty to cаche the websіtes."
, "Redundancy is the duplication of critical components or functions of a system with the intention of increasing the reliability of the system, usually in the form of a backup or fail-safe, or to improve actual system performance. For example, if there is only one copy of a file stored on a single server, then losing that server means losing the file. Since losing data is seldom a good thing, we can create duplicate or redundant copies of the file to solve this problem."
, "Redundancy plays a key role in removing the single points of failure in the system and provides backups if needed in a crisis. For example, if we have two instances of a service running in production and one fails, the system can failover to the other one."
, "Replication means sharing information to ensure consistency between redundant resources, such as software or hardware components, to improve reliability, fault-tolerance, or accessibility."
, "Replication is widely used in many database management systems (DBMS), usually with a master-slave relationship between the original and the copies."
, "In the world of databases, there are two main types of solutions: SQL and NoSQL (or relational databases and non-relational databases). Both of them differ in the way they were built, the kind of information they store, and the storage method they use."
, "Relational databases store data in rows and columns. Each row contains all the information about one entity and each column contains all the separate data points. Some of the most popular relational databases are MySQL, Oracle, MS SQL Server, SQLite, Postgres, and MariaDB."
, "CAP theorem states that it is impossible for a distributed software system to simultaneously provide more than two out of three of the following guarantees (CAP): Consistency, Availability, and Partition tolerance. When we design a distributed system, trading off among CAP is almost the first thing we want to consider."
, "Distributed Hash Table (DHT) is one of the fundamental components used in distributed scalable systems. Hash Tables need a key, a value, and a hash function where hash function maps the key to a location where the value is stored."

];
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
  if (count >= 0 || isRaceRunning == 0) {
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
  let underlinedBefore = 0;
  for (let i = 0; i < textSize; i++){
    let j = i + 1;
    let text = unTypedText[i];
    while (j < textSize && charactersArray[j] == charactersArray[j-1]){
      text += unTypedText[j];
      j++;
    }
  
    let curText = document.createElement("span");
    curText.textContent = text;
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
     
    if (charactersArray[i] <= 0 && underlinedBefore == 0){
		underlinedBefore = 1;
		curText.innerHTML = "<ins style = \"color:orange;\">" + text[0] + "</ins>" + text.substr(1);
	}
    document.getElementById('content').appendChild(curText);
    i = j - 1;
  }
  
  document.getElementById("typedText").value = str;
  let timeForTyping = calcWPM()

  // if all letters are writen correctly 
  if (charactersArray[textSize-1] > 0)
  {
	isRaceRunning = 0;
    printAllInfo(timeForTyping);
  }
}
function addToUl(ul, text){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ul.appendChild(li);
}
function createTableRow(data){
let tr = document.createElement('tr');
for (let i = 0; i < data.length; i++){
	let td = document.createElement('td');
	td.textContent = data[i];
	tr.appendChild(td);
}
return tr;
}
function addTableRow(column1, column2){
  let tr = createTableRow([column1, column2]);
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
function getRepeatButton(){
	return '';
return "<input type = 'submit' value = 'repeatRace' id = 'repeat'/>";
}
function printAllInfo(seconds){
  if (isRaceRunning) return;
  document.getElementById('tableInfo').innerHTML = '';
  addTableRow('total number of characters Writen: ', textSize + ' character');
  addTableRow('Time: ', timeToString(parseInt(seconds)));
  let wrongChars = getNumberOfWrongCharsTyped();
  addTableRow('accurecy: ', parseInt(100 * (1 - (wrongChars/textSize))) + '%');
  addTableRow('word per minute (wpm): ', calcWpmHelper(seconds, textSize) + ' wpm');
  document.getElementById('tableInfo').innerHTML = document.getElementById('tableInfo').innerHTML + getRepeatButton();
  addRaceHistory(textSize, calcWpmHelper(seconds, textSize), parseInt(100 * (1 - (wrongChars/textSize))), timeToString(parseInt(seconds)));
}
function calcWpmHelper(time, textSize){
  let curTextSize = 0;
  for (let i = 0; i < textSize; i++){
	if (charactersArray[i] <= 0) break;
	curTextSize++;
  }
  let charsPerSecond = curTextSize / time;
  let wordPerMinute =  parseInt((charsPerSecond * 60) / 4);
  return wordPerMinute;
}
function calcWpmPerSecond(){
  if (isRaceRunning == 0) {
	  document.getElementById("wpmScore").textContent = '';
	  document.getElementById('passedTime').textContent = '';
	  return;
  }
  end = new Date();
  let time = (end.getTime() - start.getTime()) / 1000;
  let wordPerMinute = calcWpmHelper(time, textSize);
  document.getElementById("wpmScore").textContent = wordPerMinute + ' wpm';
  document.getElementById('passedTime').textContent = time.toFixed(2);
}
function calcWPM(){
  end = new Date();
  let time = (end.getTime() - start.getTime()) / 1000;
  let wordPerMinute = calcWpmHelper(time, textSize);
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
      isRaceRunning = 1;
      return;
  }
  e.style = '';
  e.textContent = count;
  count-=1;
}
function addTextHelper(text){
  while (text[text.length-1] == ' ') text = text.substr(0, text.length-1);
  document.getElementById("content").textContent = text;
  document.getElementById('tableInfo').textContent = '';
  document.getElementById("typedText").value = '';
  init();
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
function getRandomWord(){
let words = "Robert Langdon, Harvard professor of symbology and religious iconology, arrives at the Guggenheim Museum Bilbao to attend the unveiling of a discovery that will change the face of science forever. The evening's host is his friend and former student, Edmond Kirsch, a forty-year-old tech magnate whose dazzling inventions and audacious predictions have made him a controversial figure around the world. This evening is to be no exception: he claims he will reveal an astonishing breakthrough to challenge the fundamentals of human existence.".split(' ');
let len = words.length;
let index = parseInt(Math.random() * len);
console.log(index);
return words[index];
}
function genText1(){
  let rep = 1 + parseInt(Math.random() * 20);
  let repEachWord = 1 + parseInt(Math.random() * 4);
  let fin = '';
  for (var j = 0; j < rep; j++){
	let curWord = getRandomWord();
	for (var r = 0; r < repEachWord; r++){
		fin += curWord;
		if (r + 1 < repEachWord)
			fin += ' ';
	}
	if (j + 1 < rep) fin += ' ';
 }
 addTextHelper(fin);
}
function get_diffuclty(){
for (let i = 0; i < diff_options.length; i++){
	if (document.getElementById(diff_options[i]).checked)
		return i;
}
// default
return 3;
}
function genText(){
  let len = paragraphs.length;
  let index = parseInt(Math.random() * len);
  
  let diff = get_diffuclty();
  let level = [100, 400, 20000];
  let fin = paragraphs[index];
  if (diff != 3){
	  while (diff > 0 && fin.length <= level[diff-1]){
	   index = parseInt(Math.random() * len);
	   fin = paragraphs[index];
	  }
	  while (fin.length > level[diff]){
	   fin = fin.substr(0, fin.length - 1);
	  }
  }
  
  addTextHelper(fin);
}
function markCheater(){
  isCheater = 1;
  alert('Shame On YOU');
}
function playAnimation(){
	for (let i = 0; i < HeadText.length; i++){
		let z = document.getElementById(i);
		if (z.className == 'active'){
		 let nxt = i + 1;
		 nxt %= HeadText.length;
		 z.className = 'unactive';
		 document.getElementById(nxt).className = 'active';
		 break;
		}
	}
}
let typedTextInput = document.getElementById("typedText");
typedTextInput.oninput = function (){checkText()};
function repeatRace(){
	init();
}
function addRaceHistory(count_of_characters, speed, accurcy, time){
	let history_table = document.getElementById('RaceHistoryTable');
	let tr = createTableRow([count_of_characters, speed, accurcy, time]);
	history_table.appendChild(tr);
}
function init(){
	textSize = document.getElementById("content").textContent.length;
	charactersArray = Array(textSize);
	for (let i = 0; i < textSize; i++){
	  charactersArray[i] = 0;
	}
	isRaceRunning = 0;
	count = 2;
}
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
let isRaceRunning = 0;
setInterval('countDown();', 500);
setInterval('playAnimation();', 70);
setInterval('calcWpmPerSecond();', 100);
// If user use paste in text
let typedTextObj = document.getElementById('typedText');
typedTextObj.onpaste = function(){markCheater()};

// to add the text to Text Div 
let addBtn = document.getElementById('addText')
addBtn.onclick = function (){addText()};

// to generate a random text
let genBtn = document.getElementById('genRandom');
genBtn.onclick = function (){genText()};

// repeate The Race
//let repeatBtn = document.getElementById('repeat');
//repeatBtn.onclick = function(){repeatRace()};

let obj = document.getElementsByClassName('HeadTitle')[0];
let HeadText = 'Type Racer';
for (let i = 0; i < HeadText.length; i++){
let sp = document.createElement('span');
sp.textContent = HeadText[i];
sp.id = i;
if (i)
	sp.className = 'unactive';
else 
	sp.className = 'active';
obj.appendChild(sp);
}


function timeToString(time){
let strs = [' hour', ' minute', ' second'];
let amount = [60*60, 60, 1];
let str = '';
let cnt = [0, 0, 0];
for (var i = 0; i < amount.length; i++){
	if (time >= amount[i]){
	 let local_cnt = parseInt(time/amount[i]);
	 cnt[i] = local_cnt;
	 time = time % amount[i];
	}
}
for (var i = 0; i < cnt.length; i++){
	if (cnt[i] > 0){
		str += cnt[i] + strs[i] + (cnt[i] > 1? 's': '');
		let unZeroCount = 0;
		for(let j = i+1; j < cnt.length; j++)
			if (cnt[j] > 0)
				unZeroCount+=1;
		if (unZeroCount > 1){
			str += ', ';
		}
		else if (unZeroCount == 1){
			str +=' and ';	
		}
	}
}
return str;

}
// to choose only one option ::
let diff_options = ['easy', 'meduim', 'hard', 'default'];
function clearOther(curId){
	for (let i = 0; i < diff_options.length; i++){
		if (diff_options[i] == curId) continue;
		document.getElementById(diff_options[i]).checked = false;
	}

}

for (let i = 0; i < diff_options.length; i++){
	let easy_obj = document.getElementById(diff_options[i]);
	easy_obj.onclick = function (){clearOther(diff_options[i])};
}



