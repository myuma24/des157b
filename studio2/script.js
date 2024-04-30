(function(){
    let globalData;

    const h1Element = document.querySelector('#coughDropsInfo');
    const leftIcon = document.querySelector('#leftIcon');
    const rightIcon = document.querySelector('#rightIcon');

    async function getData() {
        const coughDropData = await fetch('data/coughdrops.json');
        const data = await coughDropData.json();
        console.log(data);
        globalData = data;
    }

    function outputData(data){

        for (let key in data){
            console.log(key, data[key]);
            /* h1Element.innerHTML = `I ate ${data[key]} coughdrops at ${key}`; */
        }
        return;
    }
    getData(); 








/* 
    function updateH1() {
        console.log(currentTime);
        const currentCoughDrops = globalData[currentTime];
        h1Element.innerHTML = `At ${currentTime} I ate ${currentCoughDrops} cough drops.`;
    }

    rightIcon.addEventListener('click',function(){
        const times = Object.keys(globalData);
        const currentIndex = times.indexOf(currentTime);
        if (currentIndex > 0) {
            currentTime = times[currentIndex - 1];
            updateH1();
        }
    });

    leftIcon.addEventListener('click',function(){
        const times = Object.keys(globalData);
        const currentIndex = times.indexOf(currentTime);
        if (currentIndex < times.length - 1) {
            currentTime = times[currentIndex + 1];
            updateH1();
        }
    });
    
    
    getData(); */
    
})();