(function(){
    'use strict'
    AOS.init();
    let money = 1440;
    let happiness = 80;
    let grades = 80;
    let isReminderSet = false;

    function updateMoney(){
        document.getElementById('MoneyCount').innerHTML = `Money: $${money}`;
    }

    function updateHappiness(){
        document.getElementById('HealthCount').innerHTML = `Happiness: ${happiness}`;
    }

    function countGrades(){
        if (grades >= 98){
            document.getElementById('GradesCount').innerHTML = `Grades: A+`;
        } else if (grades >= 93) {
            document.getElementById('GradesCount').innerHTML = `Grades: A`;
        } else if (grades >= 90) {
            document.getElementById('GradesCount').innerHTML = `Grades: A-`;
        } else if (grades >= 88 ) {
            document.getElementById('GradesCount').innerHTML = `Grades: B+`;
        } else if (grades >= 83 ) {
            document.getElementById('GradesCount').innerHTML = `Grades: B`;
        } else if (grades >= 80 ) {
            document.getElementById('GradesCount').innerHTML = `Grades: B-`;
        }
        else if (grades >= 78 ) {
            document.getElementById('GradesCount').innerHTML = `Grades: C+`;
        } else if (grades >= 73 ) {
            document.getElementById('GradesCount').innerHTML = `Grades: C`;
        }
        else if (grades >= 70 ) {
            document.getElementById('GradesCount').innerHTML = `Grades: C-`;
        }
        else if (grades >= 60 ) {
            document.getElementById('GradesCount').innerHTML = `Grades: D`;
        } else {
            document.getElementById('GradesCount').innerHTML = `Grades: F`;
        }
    }

    document.getElementById('begin').addEventListener('click', function(){
        document.getElementById('dataBarStyle').style.display = 'flex';
        document.getElementById('beginMain').style.display = 'none';
        document.getElementById('scene1').style.display = 'block';
        updateHappiness();
        updateMoney();
        countGrades();
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
        happiness -= 10;
        updateHappiness();
        grades += 10;
        countGrades();
        document.getElementById('2op1').style.display = 'block';
        document.getElementById('scene2Part1').style.display = 'none';
    });

    document.getElementById('scene2op2').addEventListener('click', function(){
        happiness += 10;
        updateHappiness();
        grades -= 5;
        countGrades();
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
        money -= 20;
        happiness += 8;
        document.getElementById('scene3Eatout1').style.display = 'block';
        document.getElementById('scene3Text2').style.display = 'none';
        document.getElementById('scene3Text').style.display = 'none';
        document.getElementById('scene3Choices').style.display = 'none';
        updateMoney();
        updateHappiness();
    });

    document.getElementById('scene3Sandwhich').addEventListener('click', function(){
        money -= 10;
        happiness += 3;
        document.getElementById('scene3Sandwhich1').style.display = 'block';
        document.getElementById('scene3Text2').style.display = 'none';
        document.getElementById('scene3Text').style.display = 'none';
        document.getElementById('scene3Choices').style.display = 'none';
        updateHappiness();
        updateMoney();
    });

    document.getElementById('scene3Decline').addEventListener('click', function(){
        happiness -= 10;
        document.getElementById('scene3Decline1').style.display = 'block';
        document.getElementById('scene3Text2').style.display = 'none';
        document.getElementById('scene3Text').style.display = 'none';
        document.getElementById('scene3Choices').style.display = 'none';
        updateMoney();
        updateHappiness();
    });

    var scene3buttons = document.getElementsByClassName('scene3Cont');
    for (var i = 0; i < scene3buttons.length; i++) {
        scene3buttons[i].addEventListener('click', function() {
            document.getElementById('scene3V1').style.display = 'none';
            document.getElementById('scene3V2').style.display = 'none';
            document.getElementById('scene4').style.display = 'block';
        });
    }

    document.getElementById('eatOutTip').addEventListener('click', function(){
        money -= 3;
        updateMoney();
        document.getElementById('scene3V1').style.display = 'none';
        document.getElementById('scene4').style.display = 'block';
    });



    document.getElementById('buySnack').addEventListener('click', function(){
        happiness += 5;
        updateHappiness();
        document.getElementById('scene4Continued').style.display = 'block';
        document.getElementById('scene4Text').style.display = 'none';
        money -= 66;
        updateMoney();
    });


    document.getElementById('DontbuySnack').addEventListener('click', function(){
        happiness -=5;
        updateHappiness();
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
        happiness += 10;
        updateHappiness();
        updateMoney();
        document.getElementById('7attend').style.display = 'block';
        document.getElementById('scene7').style.display = 'block';
        document.getElementById('scene6').style.display = 'none';

    });

    document.getElementById('attend10').addEventListener('click', function(){
        money -= 10;
        happiness += 7;
        updateHappiness();
        updateMoney();
        document.getElementById('7attend').style.display = 'block';
        document.getElementById('scene7').style.display = 'block';
        document.getElementById('scene6').style.display = 'none';

    });

    document.getElementById('attend').addEventListener('click', function(){
        happiness += 4;
        updateHappiness();
        document.getElementById('7attend').style.display = 'block';
        document.getElementById('scene7').style.display = 'block';
        document.getElementById('scene6').style.display = 'none';

    });
    
    document.getElementById('delineAttend').addEventListener('click', function(){
        happiness -= 10;
        updateHappiness();
        document.getElementById('7declineAttend').style.display = 'block';
        document.getElementById('scene7').style.display = 'block';
        document.getElementById('scene6').style.display = 'none';

    });

    document.getElementById('7Uber').addEventListener('click', function(){
        money -= 15;
        grades += 5;
        happiness += 5;
        updateHappiness();
        countGrades();
        updateMoney();
        document.getElementById('scene7Part2').style.display = 'block';
        document.getElementById('7attend').style.display = 'none';

    });
    
    document.getElementById('7Stay').addEventListener('click', function(){
        grades -= 7;
        happiness -= 5;
        document.getElementById('scene7Part2').style.display = 'block';
        document.getElementById('7attend').style.display = 'none';
        updateHappiness();
        countGrades();
    });

    document.getElementById('7Home').addEventListener('click', function(){
        grades += 3;
        countGrades();
        document.getElementById('scene7Part2').style.display = 'block';
        document.getElementById('7declineAttend').style.display = 'none';

    });
    
    document.getElementById('7Continue').addEventListener('click', function(){
        money -= 10;
        updateMoney();
        grades += 5;
        countGrades();
        document.getElementById('scene8').style.display = 'block';
        document.getElementById('scene7').style.display = 'none';

    });

    document.getElementById('scene8Continue').addEventListener('click', function(){
        money -= 80;
        updateMoney();
        document.getElementById('scene9').style.display = 'block';
        document.getElementById('scene8').style.display = 'none';

    });
    
    document.getElementById('scene9Continue').addEventListener('click', function(){
        document.getElementById('scene10').style.display = 'block';
        document.getElementById('scene9').style.display = 'none';

    });

    document.getElementById('scene10Class').addEventListener('click', function(){
        grades += 8;
        countGrades();
        happiness -= 15;
        updateHappiness();
        document.getElementById('scene10ClassOpt').style.display = 'block';
        document.getElementById('scene10Prompt').style.display = 'none';

    });
    
    document.getElementById('scene10Rest').addEventListener('click', function(){
        happiness += 15;
        updateHappiness();
        grades -= 10;
        countGrades();
        document.getElementById('scene10BedOpt').style.display = 'block';
        document.getElementById('scene10Prompt').style.display = 'none';

    });

    document.getElementById('scene10Doctor').addEventListener('click', function(){
        money -= 100;
        happiness += 15;
        updateHappiness();
        grades -= 10;
        countGrades();
        updateMoney();
        document.getElementById('scene10DocOpt').style.display = 'block';
        document.getElementById('scene10Prompt').style.display = 'none';

    });

    var doctor = document.getElementsByClassName('VisitDoc');
    for (var i = 0; i < doctor.length; i++) {
        doctor[i].addEventListener('click', function() {
            money -= 100;
            updateMoney();
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
        money -= 45;
        updateMoney();
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
        happiness += 3;
        updateHappiness();
        grades -= 2;
        countGrades();
        document.getElementById('scene13CallBack').style.display = 'block';
        document.getElementById('scene13p2').style.display = 'none';
    });
    
    document.getElementById('scene13ignoreCall').addEventListener('click', function(){
        happiness -= 4;
        updateHappiness();
        grades += 3;
        countGrades();
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
        happiness += 5;
        updateHappiness();
        grades -= 5;
        countGrades();
        document.getElementById('scene16').style.display = 'block';
        document.getElementById('scene16v2').style.display = 'block';
        document.getElementById('scene15').style.display = 'none';

    });

    document.getElementById('scene15Assignments').addEventListener('click', function(){
        grades += 10;
        countGrades();
        happiness -=10;
        updateHappiness();
        document.getElementById('scene16').style.display = 'block';
        document.getElementById('scene16v1').style.display = 'block';
        document.getElementById('scene15').style.display = 'none';
    });

    document.getElementById('scene16Sandwhich').addEventListener('click', function(){
        happiness += 5;
        updateHappiness();
        document.getElementById('scene16v3').style.display = 'block';
        document.getElementById('scene16v2').style.display = 'none';
    });

    document.getElementById('scene16Fave').addEventListener('click', function(){
        happiness += 10;
        updateHappiness();
        document.getElementById('scene16v3').style.display = 'block';
        document.getElementById('scene16v2').style.display = 'none';

    });

    var scene16Cont = document.getElementsByClassName('scene16Cont');
    for (var i = 0; i < scene16Cont.length; i++) {
        scene16Cont[i].addEventListener('click', function() {
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
        grades += 2;
        countGrades();
        document.getElementById('scene19').style.display = 'block';
        document.getElementById('scene18').style.display = 'none';
    });

    document.getElementById('bus').addEventListener('click', function(){
        happiness -= 5;
        updateHappiness();
        document.getElementById('busTxt').style.display = 'block';
        document.getElementById('scene19Txt').style.display = 'none';

    });

    document.getElementById('ubertoWork').addEventListener('click', function(){
        money -= 15;
        happiness += 5;
        updateHappiness();
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
        happiness += 5;
        updateHappiness();
        updateMoney();
        document.getElementById('scene20V1').style.display = 'block';
        document.getElementById('scene20Txt').style.display = 'none';

    });

    document.getElementById('getUsual').addEventListener('click', function(){
        money -= 40;
        happiness -= 8;
        updateHappiness();
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
        happiness += 15;
        updateHappiness();
        grades -= 5;
        countGrades();
        updateMoney();
        pizzaGo = true;
        document.getElementById('scene21V4').style.display = 'block';
        document.getElementById('scene21V1').style.display = 'none';
    });

    document.getElementById('scene21Uber').addEventListener('click', function(){
        money -= 15;
        happiness += 5;
        updateHappiness();
        updateMoney();
        document.getElementById('scene21V5').style.display = 'block';
        document.getElementById('scene21V4').style.display = 'none';

    });

    document.getElementById('scene21Bus').addEventListener('click', function(){
        happiness -= 2;
        updateHappiness();
        document.getElementById('scene21V5').style.display = 'block';
        document.getElementById('scene21V4').style.display = 'none';
    });

    document.getElementById('pizzaDecline').addEventListener('click', function(){
        happiness -= 15;
        updateHappiness();
        pizzaGo = false;
        document.getElementById('scene21V2').style.display = 'block';
        document.getElementById('scene21V1').style.display = 'none';
    });


    document.getElementById('pizzaGo2').addEventListener('click', function(){
        happiness += 30;
        grades -= 5;
        countGrades();
        updateHappiness();
        pizzaGo = true;
        document.getElementById('scene21V4').style.display = 'block';
        document.getElementById('scene21V2').style.display = 'none';
    });

    document.getElementById('pizzaDecline2').addEventListener('click', function(){
        grades += 5;
        countGrades();
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
                grades -= 25;
                countGrades();
            } else {
                document.getElementById('scene22V1').style.display = 'block';
                grades+=15;
                countGrades();
            }
            document.getElementById('scene22Rent').innerHTML = `After class, you remember that this week you have to pay rent. You anxiously check your bank account and you see that you have $${money} left.`;
        });
    }
    

    document.getElementById('scene22Cont').addEventListener('click', function(){
        document.getElementById('scene23').style.display = 'block';
        document.getElementById('scene22').style.display = 'none';
    });

    document.getElementById('scene23Cont').addEventListener('click', function(){
        money -= 22;
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
        if (money > 799){
            document.getElementById('scene25').style.display = 'block';
            document.getElementById('scene25TxtEnough').style.display = 'block';
            document.getElementById('scene25TxtEnough1').innerHTML = `You check your bank account. You have $${money} left and the rent is $800.00. You have just enough to make this months payment without the help of loans or begging your landlord.`;
            document.getElementById('scene24').style.display = 'none';
        } else {
            document.getElementById('scene25').style.display = 'block';
            document.getElementById('scene25TxtNotEnough').style.display = 'block';
            document.getElementById('scene25TxtNotEnoughTxt').innerHTML = ` You check your bank account. You have $${money} left and the rent is $800.00. Even if you waited for next month's salary (in 5 more days), next month you would have the same problem again.`;
            document.getElementById('scene24').style.display = 'none';
        }
    });


    document.getElementById('payRent').addEventListener('click', function(){
        money -= 800;
        updateMoney();
        document.getElementById('results').style.display = 'block';
        document.getElementById('resultsTxt').innerHTML = `You finished the month with $${money}, ${happiness} happiness, and you have a ${grades}% in school.`;
        document.getElementById('dataBarStyle').style.display = 'none';
        document.getElementById('scene25').style.display = 'none';

        document.getElementById('resultsTxt2').innerHTML = `You were able to make ends meet! You still have $${money} but fear it may not be enough to make it to next month. You begin to think about all the things you can cut out to keep your budget costs low.`;
    });


    document.getElementById('takeloan').addEventListener('click', function(){
        money += 1200;
        updateMoney();
        document.getElementById('TaketheLoan').style.display = 'block';
        document.getElementById('TaketheLoanTxt').innerHTML = `With just a couple of clicks, the money comes into your account. It makes you happy to see $${money} in your account. You quickly pay this month's rent to the owner and make ends meet.`;
        document.getElementById('scene25TxtNotEnough').style.display = 'none';
    });

    document.getElementById('takeloan2').addEventListener('click', function(){
        money += 1200;
        updateMoney();
        document.getElementById('TaketheLoan').style.display = 'block';
        document.getElementById('TaketheLoanTxt').innerHTML = `With just a couple of clicks, the money comes into your account. It makes you happy to see $${money} in your account. You quickly pay this month's rent to the owner and make ends meet.`;
        document.getElementById('scene25LessThanHalf').style.display = 'none';

    });

    document.getElementById('waitforpaycheck').addEventListener('click', function(){
        if (money > 700){
            document.getElementById('scene25MoreThanHalf').style.display = 'block';
            document.getElementById('scene25TxtNotEnough').style.display = 'none';
        } else {
            document.getElementById('scene25LessThanHalf').style.display = 'block';
            document.getElementById('scene25TxtNotEnough').style.display = 'none';
        }
    });

    document.getElementById('scene25RentCont').addEventListener('click', function(){
        money = 0;
        updateMoney();
        document.getElementById('results').style.display = 'block';
        document.getElementById('resultsTxt').innerHTML = `You finished the month with $${money}, ${happiness} happiness, and you have a ${grades}% in school.`;
        document.getElementById('dataBarStyle').style.display = 'none';
        document.getElementById('scene25').style.display = 'none';

        document.getElementById('resultsTxt2').innerHTML = `You were able to make ends meet but at what cost?. You'll have to wait for your next paycheck at the end of the month to repay your landlord. You hope you'll have enough to make it to next month.`;
    });

    document.getElementById('scene25LossCont').addEventListener('click', function(){
        document.getElementById('results').style.display = 'block';
        document.getElementById('resultsTxt').innerHTML = `You finished the month with $${money}, ${happiness} happiness, and you have a ${grades}% in school.`;
        document.getElementById('dataBarStyle').style.display = 'none';
        document.getElementById('scene25').style.display = 'none';
        document.getElementById('resultsTxt2').innerHTML = `You lost your apartment and fear you will be unable to find another place to stay. You think about your choices and question what your next move should be. You start calling your friends and family to see if they have an couch you can sleep on for the future.`;
    });

    document.getElementById('scene25Cont').addEventListener('click', function(){
        money -= 800;
        updateMoney();
        document.getElementById('results').style.display = 'block';
        document.getElementById('resultsTxt').innerHTML = `You finished the month with $${money}, ${happiness} happiness, and you have a ${grades}% in school.`;
        document.getElementById('dataBarStyle').style.display = 'none';
        document.getElementById('scene25').style.display = 'none';

        document.getElementById('resultsTxt2').innerHTML = `You were able to make ends meet but at what cost? You still have $${money} left but this is money in disguise that you will have to pay back to the bank. You pray you'll make it to the end of next month.`;
    });



})();