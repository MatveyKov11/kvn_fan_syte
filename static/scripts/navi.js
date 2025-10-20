var body = document.body, html = document.documentElement;
if (window.innerWidth > 900){
    up.style.top = scrollY + window.innerHeight - 180 + 'px';
    down.style.top = scrollY + window.innerHeight - 80 + 'px';
}else{
    up.style.top = scrollY + window.innerHeight - 72 + 'px';
    down.style.top = scrollY + window.innerHeight - 32 + 'px';
}
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
up.onclick = function(event){
    window.scrollTo({left: pageXOffset, top: 0, behavior: 'smooth'});
}
down.onclick = function(event){
    // На телефонах картинки долго загружаются и высота страницы считается без учёта этих картинок, поэтому обновляем высоту 
    height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    window.scrollTo({left: pageXOffset, top: height, behavior: 'smooth'});
}
if (window.innerWidth > 900){
    document.addEventListener('scroll', function(event){
        up.style.top = scrollY + window.innerHeight - 180 + 'px';
        down.style.top = scrollY + window.innerHeight - 80 + 'px';
    });
}else{
    document.addEventListener('scroll', function(event){
        up.style.top = scrollY + window.innerHeight - 72 + 'px';
        down.style.top = scrollY + window.innerHeight - 32 + 'px';
    });
}