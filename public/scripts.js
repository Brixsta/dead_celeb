var $container = $('.container');
var $searchBtn = $('.searchBtn');
var $deathSelect = $('.deathSelect');
var $body = $('body');
var results;

$( document ).ready(function() {
    $searchBtn.click((event)=>{
    let deathSelectVal = $deathSelect.val().toLowerCase();

        //http://cors-anywhere.herokuapp.com/

        $.get(`https://hidden-plateau-56299.herokuapp.com/api/dead_celeb/`, (data) => {
    //  var results = JSON.parse(data)
                results = data;
                console.log('These are the results: ', results);

                createProfile();
                console.log('Death Select Value ', deathSelectVal);

                switch(deathSelectVal) {
                    case 0: deathSelectVal === 'drug_overdose';
                    console.log($('.celebInfo'));
                    $('.celebInfo').text('yolo');
                    $('.celebInfo').text() ='swaggins';
                    console.log('drug overdose');
                    case 1: deathSelectVal === 'suicide';
                         console.log('suicide');
                    case 2: deathSelectVal === 'murder';
                    console.log('murder');
                    case 3: deathSelectVal === 'plane_crash';
                         console.log('plane_crash');
                    case 4: deathSelectVal === 'skiing_accident';
                     console.log('skiing_accident');
                    case 5: deathSelectVal === 'botched_surgery';
                     console.log('botched surgery');
                    case 6: deathSelectVal === 'natural_causes';
                    console.log('natural causes');
                    case 7: deathSelectVal === 'aids';
                    console.log('aids');
                    case 8: deathSelectVal === 'car_crash';
                         console.log('car crash');
                }
            });
    });
});

function createProfile() {
    let deathSelectVal = $deathSelect.val().toLowerCase();
    var $celebBox = $('<div></div>', {class:'celebBox'});
    var $celebHeading = $('<h1></h1>', {class:'celebHeading', text:`Celebrity deaths: ${deathSelectVal.replace('_', ' ')}`});
    var $celebDivider = $('<hr>', {class:'celebDivider'});
    var $celebInfo = $('<p></p>', {class:'celebInfo', text:`${JSON.stringify(results)}`});

    $('.celebBox').remove();

    $body.append($celebBox);
    $celebBox.append($celebHeading, $celebDivider);
    $celebBox.hide();
    $celebBox.fadeIn(750);
}
