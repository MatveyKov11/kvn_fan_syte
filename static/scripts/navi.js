var body = document.body, html = document.documentElement;
if (window.innerWidth > 900){
    up.style.top = scrollY + window.innerHeight - 190 + 'px';
    down.style.top = scrollY + window.innerHeight - 90 + 'px';
    big.style.top = scrollY + window.innerHeight - 120 + 'px';
    small.style.top = scrollY + window.innerHeight - 120 + 'px';
}else{
    up.style.top = scrollY + window.innerHeight - 150 + 'px';
    down.style.top = scrollY + window.innerHeight - 80 + 'px';
    big.style.top = scrollY + window.innerHeight - 105 + 'px';
    small.style.top = scrollY + window.innerHeight - 105 + 'px';
}
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
up.onclick = async function(event){
    let n = Math.round(height/4000);
    if(n > 0){
        for(let i = n-1; i > 0; i--){
        window.scrollTo({left: pageXOffset, top: Math.round(i*height/n), behavior: 'smooth'});
        await sleep(700);
        }
    }
    window.scrollTo({left: pageXOffset, top: 0, behavior: 'smooth'});
}
down.onclick = async function(event){
    // На телефонах картинки долго загружаются и высота страницы считается без учёта этих картинок, поэтому обновляем высоту 
    height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    let n = Math.round(height/4000);
    if(n > 0){
        for(let i = 1; i < n; i++){
        window.scrollTo({left: pageXOffset, top: Math.round(i*height/n), behavior: 'smooth'});
        await sleep(700);
        }
    }
    window.scrollTo({left: pageXOffset, top: height, behavior: 'smooth'});
}
if (window.innerWidth > 900){
    document.addEventListener('scroll', function(event){
        up.style.top = scrollY + window.innerHeight - 190 + 'px';
        down.style.top = scrollY + window.innerHeight - 90 + 'px';
        big.style.top = scrollY + window.innerHeight - 120 + 'px';
        small.style.top = scrollY + window.innerHeight - 120 + 'px';
    });
}else{
    document.addEventListener('scroll', function(event){
        up.style.top = scrollY + window.innerHeight - 150 + 'px';
        down.style.top = scrollY + window.innerHeight - 80 + 'px';
        big.style.top = scrollY + window.innerHeight - 105 + 'px';
        small.style.top = scrollY + window.innerHeight - 105 + 'px';
    });
}