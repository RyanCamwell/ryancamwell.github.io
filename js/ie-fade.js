$(document).ready(function(){
$(".fader_img").fadeTo("slow", 0.0);
$(".fader_img").hover(function(){
$(this).fadeTo("slow", 1);
},function(){
$(this).fadeTo("slow", 0.0);
});
});
