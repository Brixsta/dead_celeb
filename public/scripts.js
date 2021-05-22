var $container = $('.container');
var $searchBtn = $('.searchBtn');
var $deathSelect = $('.deathSelect');
var $body = $('body');
var glob;

$( document ).ready(function() {
    $searchBtn.click((event)=>{
        

        //http://cors-anywhere.herokuapp.com/

        $.get(`https://hidden-plateau-56299.herokuapp.com/api/dead_celeb/`, (data) => {
    //  var results = JSON.parse(data) 
                var results = data;
                glob = results;
                console.log('These are the results: ', results);

                createProfile();
                console.log('Death Select Value ', deathSelect.val());
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