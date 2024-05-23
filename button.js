var click =document.getElementById("click")
var demo=document.getElementById("demo")
click.addEventListener('click',function(){
    demo.textContent="hello how are you"
})
var color=document.getElementById("color")
color.addEventListener('click',function(){
    color.style.color="red"
})
var image=document.getElementById("img")
var abc=document.getElementById("abc")
image.addEventListener('click',function(){
    abc.style.backgroundImage="url('benefit.jpg')"
})
