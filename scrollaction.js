// JavaScript Document
function bar_check()
{
  var r = document.querySelector(':root');
  var winScroll = document.body.scrollTop || page.scrollTop;
  var height = (page.scrollHeight+70) - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  r.style.setProperty('--yy',scrolled+"%");
}