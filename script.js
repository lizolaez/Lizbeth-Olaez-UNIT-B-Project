let title= document.querySelector(".title")
let storyOpening=document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons")
let optionOne=document.querySelector(".option-one");
let optionTwo=document.querySelector(".option-two");
let optiononescreen=document.querySelector(".option-one-screen");
let optiontwoscreen=document.querySelector(".option-two-screen");
let optiononeend=document.querySelector(".option-one-end")
let optiontwoend=document.querySelector (".option-two-end")
let buttonscreenone=document.querySelector(".option-onescreenone")
let buttonscreentwo=document.querySelector(".option-twoscreentwo" )

optionOne.onclick=function(){
title .style.display="none";
  storyOpening.style.display="none";
  buttons.style.display="none";
  optiononescreen.style.display="block";
  buttonscreenone.style.display="block";
};


optionTwo.onclick=function(){
title .style.display="none";
  storyOpening.style.display="none";
  buttons.style.display="none";
  optiontwoscreen.style.display="block";
  buttonscreentwo.style.display="block";
};

buttonscreenone.onclick=function(){ 
   optiononescreen.style.display="none";
  buttonscreenone.style.display="none";
  optiononeend.style.display="block";
};

buttonscreentwo.onclick=function(){
  optiontwoscreen.style.display="none";
  buttonscreentwo.style.display="none";
  optiontwoend.style.display="block";
};