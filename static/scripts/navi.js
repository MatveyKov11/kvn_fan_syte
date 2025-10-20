var body = document.body, html = document.documentElement;
up.style.top = scrollY + window.innerHeight - 180 + 'px';
down.style.top = scrollY + window.innerHeight - 80 + 'px';
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
up.onclick = function(event){
    window.scrollTo({left: pageXOffset, top: 0, behavior: 'smooth'});
}
down.onclick = function(event){
    // На телефонах картинки долго загружаются и высота страницы считается без учёта этих картинок, поэтому обновляем высоту 
    height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    window.scrollTo({left: pageXOffset, top: height, behavior: 'smooth'});
}
document.addEventListener('scroll', function(event){
    up.style.top = scrollY + window.innerHeight - 180 + 'px';
    down.style.top = scrollY + window.innerHeight - 80 + 'px';
});