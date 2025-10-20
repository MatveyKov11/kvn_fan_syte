let newsJSON = [
    /*{
        "src": "static/images/comands_crop/zhh_back.jpg",
        "href": "./comands.html",
        "text": "abacaba"
    }*/ /*,

    {
        "src": "static/images/comands_crop/kto_back.jpg",
        "href": "./comands.html",
        "text": "abacaba"
    }*/ /*,

    {
        "src": "static/images/comands_crop/ob_back.jpg",
        "href": "./comands.html",
        "text": "abacaba"
    },*/

    //{}
];

if (newsJSON.length > 0){
    img1.src = newsJSON[0].src;
    link1.href = newsJSON[0].href;
    link1.text = newsJSON[0].text;
}else{
    news.style.display = "none";
}

if (newsJSON.length > 1){
    img2.src = newsJSON[1].src;
    link2.href = newsJSON[1].href;
    link2.text = newsJSON[1].text;
}else{
    new2.style.display = "none";
    new3.style.display = "none";
}

if (newsJSON.length > 2){
    img3.src = newsJSON[2].src;
    link3.href = newsJSON[2].href;
    link3.text = newsJSON[2].text;
}else{
    new3.style.display = "none";
}

if (newsJSON.length > 3){
    more.style.display = "flex";
}else{
    more.style.display = "none";
}