var body = document.body, html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
up.style.top = scrollY + window.innerHeight - 180 + 'px';
down.style.top = scrollY + window.innerHeight - 80 + 'px';
up.onclick = function(event){
    window.scrollTo({left: pageXOffset, top: 0, behavior: 'smooth'});
}
down.onclick = function(event){
    window.scrollTo({left: pageXOffset, top: height, behavior: 'smooth'});
}
document.onscroll = function(event){
    up.style.top = scrollY + window.innerHeight - 180 + 'px';
    down.style.top = scrollY + window.innerHeight - 80 + 'px';
}