// JavaScript Document

setInterval(get_height, 10);

//window.onresize = function() {get_height()};

function get_height()
{
	var uh = document.getElementById("navmenu");
	var r = document.querySelector(':root');
	r.style.setProperty('--ys',(uh.offsetHeight - 51)+"px");
}

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}


function bar_check()
{
  var r = document.querySelector(':root');
  var winScroll = document.body.scrollTop || page.scrollTop;
  var height = (page.scrollHeight+70) - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  r.style.setProperty('--yy',scrolled+"%");
}
