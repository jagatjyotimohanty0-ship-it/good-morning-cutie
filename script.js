const startBtn = document.getElementById("startBtn");

const scanBox = document.getElementById("scanBox");


startBtn.onclick = function(){


startBtn.style.display="none";


let steps = [

"🤖 Scanner Loading...",

"Smile Scanner Starting...",

"█░░░░░░░░░ 10%<br>Tumhari profile search ho rahi hai... 👀",

"████░░░░░░ 40%<br>Secret information collect ho rahi hai... 🤫",

"███████░░░ 70%<br>Heart connection verify ho raha hai... ❤️",

"██████████ 100%<br>Scan Complete! ✅"

];


let i=0;


let timer=setInterval(function(){


scanBox.innerHTML = steps[i];


i++;


if(i===steps.length){

clearInterval(timer);


setTimeout(showReport,1500);


}


},1500);



}



function showReport(){


scanBox.innerHTML=`

<h2>📋 Final Report</h2>

<br>

👤 Name:
<br>
Snoor ❤️

<br><br>

🌸 Status:
<br>
Meri Sabse Favorite Person

<br><br>

✨ Cuteness Level:
<br>
Infinite ♾️

<br><br>

🤍 Kindness Level:
<br>
100/100

<br><br>

😊 Smile Power:
<br>
Ek smile se mera pura din ban jata hai.

<br><br>

💖 Special Talent:
<br>
Bina permission mera dil chura lena. 😤❤️

<br><br>

<button onclick="showPolice()">
🚔 CHECK LOVE POLICE DATABASE
</button>
`;

}
function showPolice(){

scanBox.innerHTML=`

<h2>🚔 LOVE POLICE DATABASE</h2>

<br>

🚨 Crime Detected:
<br>
❤️ Dil Chori

<br><br>

🕵️ Prime Suspect:
<br>
Snoor 🤭

<br><br>

👤 Victim:
<br>
Jagat

<br><br>

📌 Evidence:

<br>
• Cute Smile 😊

<br>
• Innocent Face 🥺

<br>
• Beautiful Eyes ✨

<br><br>

⚖️ Punishment Decided:

<br>

Lifetime mere saath rehna. ❤️

<br>

No Bail.
<br>
No Escape.
<br>
Only Love. 🤍


<br><br>

<button onclick="showExtra()">
❤️ SEE EXTRA FINDINGS
</button>


`;

}
