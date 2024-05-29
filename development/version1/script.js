(function(){
    'use strict'
    let money = 1920;
    let health = 100;
    let grades = 100;
    let isReminderSet = false;

    function updateMoney(){
        document.getElementById('dataBar').innerHTML = `Money: $${money}`;
    }

    document.getElementById('scene1op1').addEventListener('click', function() {
        money -= 90;
        document.getElementById('scene2').style.display = 'block';
        document.getElementById('scene1').style.display = 'none';
        updateMoney();
    });

    document.getElementById('scene1op2').addEventListener('click', function() {
        let isReminderSet = true;
        document.getElementById('scene2').style.display = 'block';
        document.getElementById('scene1').style.display = 'none';
        updateMoney();    
    });


    function countGrades(){
        if (grades >= 90){

        } else if (grades >= 80) {

        } else if (grades >= 70) {

        } else if (grades >= 60 ) {

        } else {
            gradeCounter.innerHtml = "you failed your classes"
        }
    }

})();





