/*external js
http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js
http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js
*/

function funcColor() {
	var logo = document.getElementById("logo");
	var hidden = document.getElementById("hidden");
	var hidden2 = document.getElementById("hidden2");
	var hidden3 = document.getElementById("hidden3");
  	hidden.style.backgroundColor = "yellow";
  	hidden2.style.backgroundColor = "blue";
  	hidden3.style.backgroundColor = "red";
  	TweenLite.to(hidden, 1, {top:"100px"});
  	TweenLite.to(hidden, 1, {left:"100px", delay:.25});
  	TweenLite.to(hidden2, 1, {top:"100px"});
  	TweenLite.to(hidden2, 1, {left:"250px", delay:.5});
  	TweenLite.to(hidden3, 1, {top:"100px"});
  	TweenLite.to(hidden3, 1, {left:"400px", delay:.75});
  	hidden.style.display = 'block';
  	hidden2.style.display = 'block';
  	hidden3.style.display = 'block';
  }
function funcSetup() {
	var logo = document.getElementById("logo");
	var bar = document.getElementById("bar");
	
	  TweenLite.to(bar, 4, {width:"200px", delay:.25});
	  TweenLite.to(bar, 4, {left:"216px", delay:.25});
	  TweenLite.to(logo, 4, {left:"632px", delay:.25});

}
function resetAll() {
	location.reload();
}
function showExtra() {
	var thing = document.getElementById("extra");
	var thing2 = document.getElementById("extra2");
	var thing3 = document.getElementById("extra3");
	thing2.style.display = 'none';
	thing3.style.display = 'none';
	thing.style.display = 'block';
}
function showExtra2() {
	var thing = document.getElementById("extra");
	var thing2 = document.getElementById("extra2");
	var thing3 = document.getElementById("extra3");
	thing2.style.display = 'block';
	thing3.style.display = 'none';
	thing.style.display = 'none';
}
function showExtra3() {
	var thing = document.getElementById("extra");
	var thing2 = document.getElementById("extra2");
	var thing3 = document.getElementById("extra3");
	thing2.style.display = 'none';
	thing3.style.display = 'block';
	thing.style.display = 'none';
}

function start() {
	funcSetup();
	document.getElementById("logo").addEventListener("click", funcColor);
	document.getElementById("reset").addEventListener("click", resetAll);
	document.getElementById("hidden").addEventListener("click", showExtra);
	document.getElementById("hidden2").addEventListener("click", showExtra2);
	document.getElementById("hidden3").addEventListener("click", showExtra3);
}

window.onload = start;