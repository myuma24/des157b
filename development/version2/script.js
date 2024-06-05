(function(){
    'use strict'
    let money = 1920;
    let health = 80;
    let grades = 90;
    let isReminderSet = false;

    alert(` Play through the days. Try and maintain your money as best as possible. Play through the days and choose the most expensive options. Play through the days and choose the options that would most likely to affect your health. `);


    function updateMoney(){
        document.getElementById('MoneyCount').innerHTML = `Money: $${money}`;
    }

    document.getElementById('begin').addEventListener('click', function(){
        document.getElementById('dataBar').style.display = 'block';
        document.getElementById('dataHealth').style.display = 'block';
        document.getElementById('dataGrades').style.display = 'block';
        document.getElementById('beginMain').style.display = 'none';
        document.getElementById('scene1').style.display = 'block';
    });


    document.getElementById('scene1Phonering').addEventListener('click', function(){
        document.getElementById('scene1Part2').style.display = 'block';
        document.getElementById('scene1Part1').style.display = 'none';
    });

    document.getElementById('scene1op1').addEventListener('click', function() {
        money -= 90;
        document.getElementById('op1').style.display = 'block';
        document.getElementById('scene1Part2').style.display = 'none';
        updateMoney();
    });

    document.getElementById('scene1op2').addEventListener('click', function() {
        isReminderSet = true;
        document.getElementById('op2').style.display = 'block';
        document.getElementById('scene1Part2').style.display = 'none';
    });

    var scene2buttons = document.getElementsByClassName('Scene1Continue');
    for (var i = 0; i < scene2buttons.length; i++) {
        scene2buttons[i].addEventListener('click', function() {
            document.getElementById('scene2').style.display = 'block';
            document.getElementById('scene1').style.display = 'none';
        });
    }

    document.getElementById('scene2op1').addEventListener('click', function(){
        document.getElementById('2op1').style.display = 'block';
        document.getElementById('scene2Part1').style.display = 'none';
    });

    document.getElementById('scene2op2').addEventListener('click', function(){
        document.getElementById('2op2').style.display = 'block';
        document.getElementById('scene2Part1').style.display = 'none';
    });

    document.getElementById('2Next1').addEventListener('click', function(){
            document.getElementById('scene3V1').style.display = 'block';
            document.getElementById('scene2').style.display = 'none';
    });

    document.getElementById('2Next2').addEventListener('click', function(){
        document.getElementById('scene3V2').style.display = 'block';
        document.getElementById('scene2').style.display = 'none';
    });

    document.getElementById('scene3Eatout').addEventListener('click', function(){
        money -= 23;
        document.getElementById('scene3Eatout1').style.display = 'block';
        document.getElementById('scene3Text2').style.display = 'none';
        document.getElementById('scene3Text').style.display = 'none';
        document.getElementById('scene3Choices').style.display = 'none';
        updateMoney();
    });

    document.getElementById('scene3Sandwhich').addEventListener('click', function(){
        money -= 8;
        document.getElementById('scene3Sandwhich1').style.display = 'block';
        document.getElementById('scene3Text2').style.display = 'none';
        document.getElementById('scene3Text').style.display = 'none';
        document.getElementById('scene3Choices').style.display = 'none';
        updateMoney();
    });

    document.getElementById('scene3Decline').addEventListener('click', function(){
        document.getElementById('scene3Decline1').style.display = 'block';
        document.getElementById('scene3Text2').style.display = 'none';
        document.getElementById('scene3Text').style.display = 'none';
        document.getElementById('scene3Choices').style.display = 'none';
        updateMoney();
    });

    var scene3buttons = document.getElementsByClassName('scene3Cont');
    for (var i = 0; i < scene3buttons.length; i++) {
        scene3buttons[i].addEventListener('click', function() {
            document.getElementById('scene3V1').style.display = 'none';
            document.getElementById('scene3V2').style.display = 'none';
            document.getElementById('scene4').style.display = 'block';
        });
    }

    document.getElementById('buySnack').addEventListener('click', function(){
        document.getElementById('scene4Continued').style.display = 'block';
        document.getElementById('scene4Text').style.display = 'none';
        money -= 66;
        updateMoney();
    });


    document.getElementById('DontbuySnack').addEventListener('click', function(){
        document.getElementById('scene4Continued').style.display = 'block';
        document.getElementById('scene4Text').style.display = 'none';
        money -= 60;
        updateMoney();
    });


    document.getElementById('scene4Continue').addEventListener('click', function(){
        document.getElementById('scene5').style.display = 'block';
        document.getElementById('scene4').style.display = 'none';
    });


    document.getElementById('scene5Continue').addEventListener('click', function(){
        document.getElementById('scene6').style.display = 'block';
        document.getElementById('scene5').style.display = 'none';

    });

    document.getElementById('attend30').addEventListener('click', function(){
        money -= 30;
        updateMoney();
        document.getElementById('7attend').style.display = 'block';
        document.getElementById('scene7').style.display = 'block';
        document.getElementById('scene6').style.display = 'none';

    });

    document.getElementById('attend10').addEventListener('click', function(){
        money -= 10;
        updateMoney();
        document.getElementById('7attend').style.display = 'block';
        document.getElementById('scene7').style.display = 'block';
        document.getElementById('scene6').style.display = 'none';

    });

    document.getElementById('attend').addEventListener('click', function(){
        document.getElementById('7attend').style.display = 'block';
        document.getElementById('scene7').style.display = 'block';
        document.getElementById('scene6').style.display = 'none';

    });
    
    document.getElementById('delineAttend').addEventListener('click', function(){
        document.getElementById('7declineAttend').style.display = 'block';
        document.getElementById('scene7').style.display = 'block';
        document.getElementById('scene6').style.display = 'none';

    });

    document.getElementById('7Uber').addEventListener('click', function(){
        money -= 10;
        updateMoney();
        document.getElementById('scene7Part2').style.display = 'block';
        document.getElementById('7attend').style.display = 'none';

    });
    
    document.getElementById('7Stay').addEventListener('click', function(){
        document.getElementById('scene7Part2').style.display = 'block';
        document.getElementById('7attend').style.display = 'none';

    });

    document.getElementById('7Home').addEventListener('click', function(){
        document.getElementById('scene7Part2').style.display = 'block';
        document.getElementById('7declineAttend').style.display = 'none';

    });
    
    document.getElementById('7Continue').addEventListener('click', function(){
        money -= 10;
        document.getElementById('scene8').style.display = 'block';
        document.getElementById('scene7').style.display = 'none';

    });

    document.getElementById('scene8Continue').addEventListener('click', function(){
        money -= 70;
        updateMoney();
        document.getElementById('scene9').style.display = 'block';
        document.getElementById('scene8').style.display = 'none';

    });
    
    document.getElementById('scene9Continue').addEventListener('click', function(){
        document.getElementById('scene10').style.display = 'block';
        document.getElementById('scene9').style.display = 'none';

    });

    document.getElementById('scene10Class').addEventListener('click', function(){
        document.getElementById('scene10ClassOpt').style.display = 'block';
        document.getElementById('scene10Class').style.display = 'none';

    });
    
    document.getElementById('scene10Rest').addEventListener('click', function(){
        document.getElementById('scene10BedOpt').style.display = 'block';
        document.getElementById('scene10Class').style.display = 'none';

    });

    document.getElementById('scene10Doctor').addEventListener('click', function(){
        money -= 100;
        updateMoney();
        document.getElementById('scene10DocOpt').style.display = 'block';
        document.getElementById('scene10Class').style.display = 'none';

    });

    var doctor = document.getElementsByClassName('VisitDoc');
    for (var i = 0; i < doctor.length; i++) {
        doctor[i].addEventListener('click', function() {
            money -= 100;
            document.getElementById('scene10ClassOpt').style.display = 'none';
            document.getElementById('scene10DocOpt').style.display = 'none';
            document.getElementById('scene10BedOpt').style.display = 'none';
            document.getElementById('pharmacy').style.display = 'block';
        });
    }

    document.getElementById('pharmacyOpt').addEventListener('click', function(){
        money -= 100;
        updateMoney();
        document.getElementById('pharmacy').style.display = 'block';
        document.getElementById('scene10DocOpt').style.display = 'none';

    });


    
    document.getElementById('scene10Cont').addEventListener('click', function(){
        money -= 30;
        updateMoney();
        document.getElementById('scene11').style.display = 'block';
        document.getElementById('scene10').style.display = 'none';

    });

    document.getElementById('scene11Cont').addEventListener('click', function(){
        money -= 20;
        updateMoney();
        document.getElementById('scene12').style.display = 'block';
        document.getElementById('scene11').style.display = 'none';

    });
    
    document.getElementById('scene12Cont').addEventListener('click', function(){
        document.getElementById('scene13').style.display = 'block';
        document.getElementById('scene12').style.display = 'none';

    });

    document.getElementById('scene13$').addEventListener('click', function(){
        money -= 4;
        updateMoney();
        document.getElementById('scene13p2').style.display = 'block';
        document.getElementById('scene13p1').style.display = 'none';

    });

    document.getElementById('scene13Call').addEventListener('click', function(){
        document.getElementById('scene13CallBack').style.display = 'block';
        document.getElementById('scene13p2').style.display = 'none';

    });

    document.getElementById('scene13Visit').addEventListener('click', function(){
        document.getElementById('scene14').style.display = 'block';
        document.getElementById('scene13').style.display = 'none';

    });

    document.getElementById('scene14Talk').addEventListener('click', function(){
        document.getElementById('scene14P1').style.display = 'block';
        document.getElementById('Tscene14Talking').style.display = 'none';

    });

    document.getElementById('scene14TakeBill').addEventListener('click', function(){
        money += 100;
        updateMoney();
        document.getElementById('scene14P1v1').style.display = 'block';
        document.getElementById('scene14P1').style.display = 'none';

    });
    document.getElementById('scene14DeclineBill').addEventListener('click', function(){
        document.getElementById('scene14P1v2').style.display = 'block';
        document.getElementById('scene14P1').style.display = 'none';

    });

    var scene14 = document.getElementsByClassName('scene14Home');
    for (var i = 0; i < doctor.length; i++) {
        doctor[i].addEventListener('click', function() {
            money -= 100;
            document.getElementById('scene14P1v2').style.display = 'none';
            document.getElementById('scene14P1v1').style.display = 'none';
            document.getElementById('scene14P1v2').style.display = 'block';
        });
    }

    document.getElementById('scene14Cont').addEventListener('click', function(){
        document.getElementById('scene15').style.display = 'block';
        document.getElementById('scene15Intro').innerHTML = `You're halfway through the month. You still have ${money} and in less than two weeks you have to pay rent.;`
        document.getElementById('scene14').style.display = 'none';

    });
    document.getElementById('scene15Lunch').addEventListener('click', function(){
        alert("You've finished the testing prototype, thank you!");

    });

    document.getElementById('scene15Assignments').addEventListener('click', function(){
        alert("You've finished the testing prototype, thank you!");
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





