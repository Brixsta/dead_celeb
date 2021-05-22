var $container = $('.container');
var $searchBtn = $('.searchBtn');
var $deathSelect = $('.deathSelect');
var $body = $('body');

$( document ).ready(function() {
    $searchBtn.click((event)=>{
        

        //http://cors-anywhere.herokuapp.com/

        $.get(`https://hidden-plateau-56299.herokuapp.com/api/dead_celeb/`, (data) => {
    //  var results = JSON.parse(data) 
                var results = data;
                console.log('These are the results: ', results);

                createProfile();
                console.log('Death Select Value toLowerCase ', $deathSelect.val().toLowerCase);

                switch($deathSelect.val().toLowerCase()) {
                    case 'drug_overdose': console.log('drug overdose');
                    case 'suicide': console.log('suicide');
                    case 'murder': console.log('murder');
                    case 'plane_crash': console.log('plane_crash');
                    case 'skiing_accident': console.log('skiing_accident');
                    case 'botched_surgery': console.log('botched surgery');
                    case 'natural_causes': console.log('natural causes');
                    case 'aids': console.log('aids');
                    case 'car_crash': console.log('car crash');
                }
            });
    });
});

function createProfile() {
    var $celebBox = $('<div></div>', {class:'celebBox'});
    var $celebHeading = $('<h1></h1>', {class:'celebHeading', text:`Celebrity deaths: ${$deathSelect.val().toLowerCase().replace('_', ' ')}`});
    var $celebDivider = $('<hr>', {class:'celebDivider'});
    var $celebInfo = $('<p></p>', {text:'This is some placeholder text'});
    $('.celebBox').remove();

    $body.append($celebBox);
    $celebBox.append($celebHeading, $celebDivider, $celebInfo);
    $celebBox.hide();
    $celebBox.fadeIn(750);
}