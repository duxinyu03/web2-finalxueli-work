/*
* @Author: Deeream
* @Date:   2019-12-20 15:41:22
* @Last Modified by:   Deeream
* @Last Modified time: 2019-12-25 19:41:03
*/
var search = document.getElementById("search");
var hidden = document.getElementById("hidden");
search.onfocus = function(){
	hidden.style.opacity = "1.0";
	hidden.style.marginLeft = "600px";
	hidden.style.marginTop = "75px";
}
search.onblur = function(){
	hidden.style.opacity = "0";
	hidden.style.marginLeft = "1000px";
	hidden.style.marginTop = "10px";
}
//侧面导航
var img_user1 = document.getElementById("img_user1");
img_user1.onmouseover = function(){
	img_user1.style.width = "400px";
	img_user1.style.height = "280px";
	img_user1.style.borderRadius = "0px";
}
img_user1.onmouseout = function(){
	img_user1.style.width = "50px";
	img_user1.style.height = "50px";
	img_user1.style.borderRadius = "27px";
}
var img_user2 = document.getElementById("img_user2");
img_user2.onmouseover = function(){
	img_user2.style.width = "400px";
	img_user2.style.height = "280px";
	img_user2.style.borderRadius = "0px";
}
img_user2.onmouseout = function(){
	img_user2.style.width = "50px";
	img_user2.style.height = "50px";
	img_user2.style.borderRadius = "27px";
}
var img_user3 = document.getElementById("img_user3");
img_user3.onmouseover = function(){
	img_user3.style.width = "400px";
	img_user3.style.height = "280px";
	img_user3.style.borderRadius = "0px";
}
img_user3.onmouseout = function(){
	img_user3.style.width = "50px";
	img_user3.style.height = "50px";
	img_user3.style.borderRadius = "27px";
}
var img_user4 = document.getElementById("img_user4");
img_user4.onmouseover = function(){
	img_user4.style.width = "838px";
	img_user4.style.height = "365px";
	img_user4.style.borderRadius = "0px";
}
img_user4.onmouseout = function(){
	img_user4.style.width = "50px";
	img_user4.style.height = "50px";
	img_user4.style.borderRadius = "27px";
}
var img_user5 = document.getElementById("img_user5");
img_user5.onmouseover = function(){
	img_user5.style.width = "400px";
	img_user5.style.height = "710px";
	img_user5.style.borderRadius = "0px";
}
img_user5.onmouseout = function(){
	img_user5.style.width = "50px";
	img_user5.style.height = "50px";
	img_user5.style.borderRadius = "27px";
}
var img_user6 = document.getElementById("img_user6");
img_user6.onmouseover = function(){
	img_user6.style.width = "400px";
	img_user6.style.height = "310px";
	img_user6.style.borderRadius = "0px";
}
img_user6.onmouseout = function(){
	img_user6.style.width = "50px";
	img_user6.style.height = "50px";
	img_user6.style.borderRadius = "27px";
}
var img_user7 = document.getElementById("img_user7");
img_user7.onmouseover = function(){
	img_user7.style.width = "400px";
	img_user7.style.height = "310px";
	img_user7.style.borderRadius = "0px";
}
img_user7.onmouseout = function(){
	img_user7.style.width = "50px";
	img_user7.style.height = "50px";
	img_user7.style.borderRadius = "27px";
}
var p1=document.getElementById("p1");
var do1=document.getElementById("do1");
var list=document.getElementById("list");
window.onscroll=function(){
	var st=document.documentElement.scrollTop;
	if(st>600){
	  list.style.display="block";
	}
	else{
	  list.style.display="none";
	}
}
var containers = document.getElementById("containers");
var cartoon = document.getElementById("cartoon");
var navigation = document.getElementById("navigation");
var lefts = document.getElementById("lefts");
var rights = document.getElementById("rights");
var navList = document.getElementById("navigation").children;
var roller = document.getElementById("roller");
var ending = document.getElementById("ending");
var index =1;
var isMoving = false;
function next(){
	index++;
	navColor();
	animate(cartoon,{left:-600*index},function(){
		if(index === 6){
			cartoon.style.left = "-600px";
			index = 1;
		}
	});
}
var timer = setInterval(next,2500);
containers.onmouseover = function(){
	animate(lefts,{opacity:50});
	animate(rights,{opacity:50});
	clearInterval(timer);
}
containers.onmouseout = function(){
	animate(lefts,{opacity:0});
	animate(rights,{opacity:0});
	timer = setInterval(next,2500)
}
rights.onclick = next;
function before(){
	index--;
	navColor();
	animate(cartoon,{left:-600*index},function(){
		if(index === 0){
			cartoon.style.left = "-3000px";
			index = 5;
		}
	});
}
lefts.onclick = before;
for(var i=0;i<navList.length;i++){
	navList[i].forIndex = i;
	navList[i].onclick = function(){
		index = this.forIndex+ 1;
		navColor();
		animate(cartoon,{left:-600*index});
	}
}
function navColor(){
	for(var i=0;i<navList.length;i++){
		navList[i].className = '';
	}
	if(index ===6){
		navList[0].className = "nav";
	}else if(index === 0){
		navList[4].className = "nav";
	}else{
		navList[index-1].className = "nav";
	}
}