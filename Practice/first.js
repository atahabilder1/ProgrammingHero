
const result = document.getElementsByTagName('li');
console.log(result);
console.log(typeof result);



console.log(" clas baed search");
const result2 = document.getElementsByClassName('goodsection');
console.log(result2);





console.log(" id baed search");
const result3 = document.getElementById('homee');
console.log(result3);
 

console.log("  Quaruary selector results");
const quaryResult= document.querySelector('#seecondSection');
console.log(quaryResult);



console.log("Now priinting  Quaryselector all results");
const quaryResultall= document.querySelectorAll('.goodsection');
console.log(quaryResultall);
 

const theblank= document.getElementById('blank');
const dynamiccreates = document.createElement('li');
dynamiccreates.innerHTML = "I am dynamic";
 theblank.appendChild(dynamiccreates);