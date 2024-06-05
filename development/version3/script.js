(function(){
    'use strict'
    let money = 1440;
    let happiness = 100;
    let grades = 90;
    let isReminderSet = false;

    function updateMoney(){
        document.getElementById('MoneyCount').innerHTML = `Money: $${money}`;
    }

    function updateHappiness(){
        document.getElementById('HealthCount').innerHTML = `Happiness: ${happiness}`;
    }

    updateHappiness();

    document.getElementById('begin').addEventListener('click', function(){
        document.getElementById('dataBarStyle').style.display = 'flex';
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
        updateMoney();
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
        document.getElementById('scene10Prompt').style.display = 'none';

    });
    
    document.getElementById('scene10Rest').addEventListener('click', function(){
        document.getElementById('scene10BedOpt').style.display = 'block';
        document.getElementById('scene10Prompt').style.display = 'none';

    });

    document.getElementById('scene10Doctor').addEventListener('click', function(){
        money -= 100;
        updateMoney();
        document.getElementById('scene10DocOpt').style.display = 'block';
        document.getElementById('scene10Prompt').style.display = 'none';

    });

    var doctor = document.getElementsByClassName('VisitDoc');
    for (var i = 0; i < doctor.length; i++) {
        doctor[i].addEventListener('click', function() {
            document.getElementById('scene10ClassOpt').style.display = 'none';
            document.getElementById('scene10BedOpt').style.display = 'none';
            document.getElementById('scene10DocOpt').style.display = 'block';
        });
    }

    document.getElementById('pharmacyOpt').addEventListener('click', function(){
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
    
    document.getElementById('scene13ignoreCall').addEventListener('click', function(){
        document.getElementById('scene13ignore').style.display = 'block';
        document.getElementById('scene13p2').style.display = 'none';
    });
    

    document.getElementById('scene13Visit').addEventListener('click', function(){
        document.getElementById('Tscene14Talking').style.display = 'block';
        document.getElementById('scene14').style.display = 'block';
        document.getElementById('scene13').style.display = 'none';

    });

    
    document.getElementById('scene13Cont').addEventListener('click', function(){
        document.getElementById('scene14').style.display = 'block';
        document.getElementById('scene14Chill').style.display = 'block';
        document.getElementById('scene13').style.display = 'none';
    });

    document.getElementById('scene14Talk').addEventListener('click', function(){
        document.getElementById('scene14P1').style.display = 'block';
        document.getElementById('Tscene14Talking').style.display = 'none';    });

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
    for (var i = 0; i < scene14.length; i++) {
        scene14[i].addEventListener('click', function() {
            document.getElementById('scene14P1v2').style.display = 'none';
            document.getElementById('scene14P1v1').style.display = 'none';
            document.getElementById('scene14P1v3').style.display = 'block';
        });
    }

    var scene14Cont = document.getElementsByClassName('scene14Cont');
    for (var i = 0; i < scene14Cont.length; i++) {
        scene14Cont[i].addEventListener('click', function() {
            document.getElementById('scene15').style.display = 'block';
            document.getElementById('scene15Intro').innerHTML = `You're halfway through the month. You still have $${money} and in less than two weeks you have to pay rent.`;
            document.getElementById('scene14').style.display = 'none';
        });
    }

    document.getElementById('scene15Lunch').addEventListener('click', function(){
        document.getElementById('scene16').style.display = 'block';
        document.getElementById('scene16v2').style.display = 'block';
        document.getElementById('scene15').style.display = 'none';

    });

    document.getElementById('scene15Assignments').addEventListener('click', function(){
        document.getElementById('scene16').style.display = 'block';
        document.getElementById('scene16v1').style.display = 'block';
        document.getElementById('scene15').style.display = 'none';
    });

    document.getElementById('scene16Sandwhich').addEventListener('click', function(){
        money -= 12;
        updateMoney();
        document.getElementById('scene16v3').style.display = 'block';
        document.getElementById('scene16v2').style.display = 'none';
    });

    document.getElementById('scene16Fave').addEventListener('click', function(){
        money -= 22;
        updateMoney();
        document.getElementById('scene16v3').style.display = 'block';
        document.getElementById('scene16v2').style.display = 'none';

    });

    var scene16Cont = document.getElementsByClassName('scene16Cont');
    for (var i = 0; i < scene16Cont.length; i++) {
        scene16Cont[i].addEventListener('click', function() {
            money -= 10;
            updateMoney();
            document.getElementById('scene16').style.display = 'none';
            document.getElementById('scene17').style.display = 'block';
        });
    }

    document.getElementById('scene17v2').addEventListener('click', function(){
        document.getElementById('scene17v3').style.display = 'block';
        document.getElementById('scene17v1').style.display = 'none';
    });

    document.getElementById('scene17v4').addEventListener('click', function(){
        document.getElementById('scene18').style.display = 'block';
        document.getElementById('scene17').style.display = 'none';
    });

    document.getElementById('scene18Cont').addEventListener('click', function(){
        document.getElementById('scene19').style.display = 'block';
        document.getElementById('scene18').style.display = 'none';
    });

    document.getElementById('bus').addEventListener('click', function(){
        document.getElementById('busTxt').style.display = 'block';
        document.getElementById('scene19Txt').style.display = 'none';

    });

    document.getElementById('ubertoWork').addEventListener('click', function(){
        money -= 10;
        updateMoney();
        document.getElementById('uberTxt').style.display = 'block';
        document.getElementById('scene19Txt').style.display = 'none';

    });

    var scene19Cont = document.getElementsByClassName('scene19Cont');
    for (var i = 0; i < scene19Cont.length; i++) {
        scene19Cont[i].addEventListener('click', function() {
            updateMoney();
            document.getElementById('scene19').style.display = 'none';
            document.getElementById('scene20').style.display = 'block';
        });
    }

    document.getElementById('buyFruit').addEventListener('click', function(){
        money -= 55;
        updateMoney();
        document.getElementById('scene20V1').style.display = 'block';
        document.getElementById('scene20Txt').style.display = 'none';

    });

    document.getElementById('getUsual').addEventListener('click', function(){
        money -= 40;
        updateMoney();
        document.getElementById('scene20V1').style.display = 'block';
        document.getElementById('scene20Txt').style.display = 'none';
    });

    document.getElementById('scene20Cont').addEventListener('click', function(){
        document.getElementById('scene21').style.display = 'block';
        document.getElementById('scene20').style.display = 'none';
    });

    let pizzaGo;

    document.getElementById('pizzaGo').addEventListener('click', function(){
        money -= 12;
        updateMoney();
        pizzaGo = true;
        document.getElementById('scene21V4').style.display = 'block';
        document.getElementById('scene21V1').style.display = 'none';
    });

    document.getElementById('scene21Uber').addEventListener('click', function(){
        money -= 10;
        happiness += 2;
        updateMoney();
        document.getElementById('scene21V5').style.display = 'block';
        document.getElementById('scene21V4').style.display = 'none';

    });

    document.getElementById('scene21Bus').addEventListener('click', function(){
        document.getElementById('scene21V5').style.display = 'block';
        document.getElementById('scene21V4').style.display = 'none';
    });

    document.getElementById('pizzaDecline').addEventListener('click', function(){
        pizzaGo = false;
        document.getElementById('scene21V2').style.display = 'block';
        document.getElementById('scene21V1').style.display = 'none';
    });


    document.getElementById('pizzaGo2').addEventListener('click', function(){
        happiness += 10;
        updateHappiness();
        pizzaGo = true;
        document.getElementById('scene21V4').style.display = 'block';
        document.getElementById('scene21V2').style.display = 'none';
    });

    document.getElementById('pizzaDecline2').addEventListener('click', function(){
        happiness -= 5;
        updateHappiness();
        pizzaGo = false;
        document.getElementById('scene21V3').style.display = 'block';
        document.getElementById('scene21V2').style.display = 'none';
    });

    var scene21Cont = document.getElementsByClassName('scene21Cont');
    for (var i = 0; i < scene21Cont.length; i++) {
        scene21Cont[i].addEventListener('click', function() {
            document.getElementById('scene22').style.display = 'block';
            document.getElementById('scene21').style.display = 'none';
            if (pizzaGo == true) {
                document.getElementById('scene22V2').style.display = 'block';
            } else {
                document.getElementById('scene22V1').style.display = 'block';
            }
            document.getElementById('scene22Rent').innerHTML = `After class, you remember that this week you have to pay rent. You anxiously check your bank account and you see that you have $${money} left.`;
        });
    }
    

    document.getElementById('scene22Cont').addEventListener('click', function(){
        document.getElementById('scene23').style.display = 'block';
        document.getElementById('scene22').style.display = 'none';
    });

    document.getElementById('scene23Cont').addEventListener('click', function(){
        money -= 31;
        updateMoney();
        if (isReminderSet == false) {
            document.getElementById('scene24').style.display = 'block';
            document.getElementById('scene23').style.display = 'none';            
        } else {
            document.getElementById('electricNotPaid').style.display = 'block';
            document.getElementById('scene23Txt').style.display = 'none';            
        }
    });

    document.getElementById('scene23ContElectric').addEventListener('click', function(){
        money -= 90;
        updateMoney();
        document.getElementById('scene24').style.display = 'block';
        document.getElementById('scene23').style.display = 'none';

    });

    document.getElementById('scene24Cont').addEventListener('click', function(){
        money -= 200;
        updateMoney();
        if (money > 700){
            document.getElementById('scene25').style.display = 'block';
            document.getElementById('scene25TxtEnough').style.display = 'block';
            document.getElementById('scene24').style.display = 'none';
        } else {
            document.getElementById('scene25').style.display = 'block';
            document.getElementById('scene25TxtNotEnough').style.display = 'block';
            document.getElementById('scene24').style.display = 'none';
        }

    });

    document.getElementById('takeloan').addEventListener('click', function(){
        money += 1200;
        updateMoney();
        document.getElementById('TaketheLoan').style.display = 'block';
        document.getElementById('scene25Txt').style.display = 'none';

    });

    document.getElementById('takeloan2').addEventListener('click', function(){
        money += 1200;
        updateMoney();
        document.getElementById('TaketheLoan').style.display = 'block';
        document.getElementById('scene25LessThanHalf').style.display = 'none';

    });

    document.getElementById('waitforpaycheck').addEventListener('click', function(){
        if (money > 350){
            money -= 350;
            updateMoney();
            document.getElementById('scene25MoreThanHalf').style.display = 'block';
            document.getElementById('scene25Txt').style.display = 'none';
        }else {
            document.getElementById('scene25LessThanHalf').style.display = 'block';
            document.getElementById('scene25Txt').style.display = 'none';
    
        }
    });

    var scene25Cont = document.getElementsByClassName('scene25Cont');
    for (var i = 0; i < scene25Cont.length; i++) {
        scene25Cont[i].addEventListener('click', function() {
            document.getElementById('results').style.display = 'block';
            document.getElementById('dataBarStyle').style.display = 'none';
            document.getElementById('scene25').style.display = 'none';
        });
    }

    function countGrades(){
        if (grades >= 90){
            document.getElementById('GradesCount').innerHTML = `Your Grades: A`;
        } else if (grades >= 80) {
            document.getElementById('GradesCount').innerHTML = `Your Grades: B`;
        } else if (grades >= 70) {
            document.getElementById('GradesCount').innerHTML = `Your Grades: C`;
        } else if (grades >= 60 ) {
            document.getElementById('GradesCount').innerHTML = `Your Grades: D`;
        } else {
            document.getElementById('GradesCount').innerHTML = `Your Grades: F`;
        }
    }

    

    /*     document.getElementById('').addEventListener('click', function(){
        document.getElementById('').style.display = 'block';
        document.getElementById('').style.display = 'none';

    }); */

})();