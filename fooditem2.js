let fooditems = [];
document.addEventListener("DOMContentLoaded", function (event) 
{document.getElementById("btn").addEventListener("click", function () {
let newfooditem = new fooditem(document.getElementById("foodtype").value, document.getElementById("quantity").value,
document.getElementById("calories").value);
 if (!newfooditem.isValid()) {
 alert("Please Try again. Remember to fill out Everything and only write numbers for quantity and calories");}
 else {fooditems.push(newfooditem);  showvalues();}});});

let showvalues = function () 
{var initial= "", Total = 0;

    for (let i in fooditems)                            
	{initial += fooditems[i].toString() + "\n";  
	Total += fooditems[i].intake(); } 
    
    let Totalintake = Total ;  
    initial+= "\nYour total intake of calories is:" + Totalintake;

    document.getElementById("alldata").value = initial; };

    
