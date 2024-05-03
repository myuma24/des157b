(function() {
    let globalData;
    async function getData(){
        const dropsdata = await fetch('data/coughdrops.json');
        const data = await dropsdata.json();
        //console.log(data);
        globalData = data;
        document.querySelector("#drops").innerHTML = outputHTML1(data);
        document.querySelector("#picker").innerHTML = createSelectList(data);
    }
    
    function outputHTML1(data){
        const html = `<p>It's allergy season, how many coughdrops did I eat today?</p>`;
        return html;
    }
    
    function createSelectList(data){
        let html = '<option>---</option>';
        const dataPoints = Object.keys(data);
        //console.log(dataPoints);
        dataPoints.forEach( function(eachPoint){
            html += `<option value="${eachPoint}">${data[eachPoint].time}</option>`;
        } );
        return html;
    }
    
    document.querySelector("#picker").addEventListener('change', function(){
        const newValue = this.value;
        updateInterface(newValue, globalData);

    });
    
    function updateInterface(value, jsonData ){
        let html = '<p>';
        html += `At ${jsonData[value].time} I ate ${jsonData[value].amount} cough  drops.`;
        html += '</p>';

        document.querySelector("#result").innerHTML = html;

        if (jsonData[value].amount == 4) {
            document.querySelector("#imageupdate").src = "images/drops4.png";
        } else if (jsonData[value].amount == 3){
            document.querySelector("#imageupdate").src = "images/drops3.png";
        } else if (jsonData[value].amount == 2){
            document.querySelector("#imageupdate").src = "images/drops2.png";
        } else if (jsonData[value].amount == 1){
            document.querySelector("#imageupdate").src = "images/drops1.png";
        } else {
            // Optionally, reset the image to a default if none of the conditions match
            document.querySelector("#imageupdate").src = "../images/cd.png";
        }
    }
    
    getData();
    
})();
