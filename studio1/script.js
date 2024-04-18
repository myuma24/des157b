(function(){
    'use strict'
    const intervalID = setInterval(checkTime, 1000);
    
    const love = document.querySelector('#love');
    const like = document.querySelector('#like');
    const the = document.querySelector('#the');
    const sky = document.querySelector('#sky');
    const with1 = document.querySelector('#with');
    const no = document.querySelector('#no');
    const limits = document.querySelector('#limits');
    
    const video = document.querySelector('#video');

    function checkTime(){
        if (1<video.currentTime && video.currentTime<5){
            love.className = 'showing';
        } else{
            love.className = 'hidden';
        }

        if (video.currentTime >= 2 && video.currentTime < 7){
            like.className = 'showing';
        } else{
            like.className = 'hidden';
        }

        if (video.currentTime >= 3 && video.currentTime < 9){
            the.className = 'showing';
        } else{
            the.className = 'hidden';
        }
        if (video.currentTime >= 4 && video.currentTime < 11){
            sky.className = 'showing';
        } else{
            sky.className = 'hidden';
        }
        if (video.currentTime >= 6 && video.currentTime < 16){
            with1.className = 'showing';
        } else{
            with1.className = 'hidden';
        }
        if (video.currentTime >= 7 && video.currentTime < 21){
            no.className = 'showing';
        } else{
            no.className = 'hidden';
        }
        if (video.currentTime >= 8 && video.currentTime < 26){
            limits.className = 'showing';
        } else{
            limits.className = 'hidden';
        }
    }

    const button = document.querySelector('button');
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            video.className = 'switch';
            mode = 'light';
        } else {
            video.removeAttribute('class');
            mode = 'dark'
        }
    });

    const loading = document.querySelector('.fa-sun');

    video.addEventListener('playing', function() {
    loading.style.display = 'none';
    });

})();