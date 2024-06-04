(function(){
    'use strict'
    let money = 1920;
    let health = 80;
    let grades = 90;
    let isReminderSet = false;


    function updateMoney(){
        document.getElementById('MoneyCount').innerHTML = `Money: $${money}`;
    }

    document.getElementById('begin').addEventListener('click', function(){
        document.getElementById('dataBar').style.display = 'block';
        document.getElementById('beginMain').style.display = 'none';
        document.getElementById('scene1').style.display = 'block';
    });

/*     document.getElementById('').addEventListener('click', function(){
        document.getElementById('').style.display = 'block';
        document.getElementById('').style.display = 'none';

    }); */


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

    document.getElementById('').addEventListener('click', function(){
        document.getElementById('').style.display = 'block';
        document.getElementById('').style.display = 'none';

    });
    
    document.getElementById('').addEventListener('click', function(){
        document.getElementById('').style.display = 'block';
        document.getElementById('').style.display = 'none';

    });

    document.getElementById('').addEventListener('click', function(){
        document.getElementById('').style.display = 'block';
        document.getElementById('').style.display = 'none';

    });
    
    document.getElementById('').addEventListener('click', function(){
        document.getElementById('').style.display = 'block';
        document.getElementById('').style.display = 'none';

    });

    document.getElementById('').addEventListener('click', function(){
        document.getElementById('').style.display = 'block';
        document.getElementById('').style.display = 'none';

    });
    
    document.getElementById('').addEventListener('click', function(){
        document.getElementById('').style.display = 'block';
        document.getElementById('').style.display = 'none';

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





