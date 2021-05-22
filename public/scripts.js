var $container = $('.container');
var $searchBtn = $('.searchBtn');
var $deathSelect = $('.deathSelect');
var $body = $('body');

$( document ).ready(function() {
    $searchBtn.click((event)=>{
        createProfile();
        
    });
});

function createProfile() {
    var $celebBox = $('<div></div>', {class:'celebBox'});
    var $celebHeading = $('<h1></h1>', {class:'celebHeading', text:`Celebrity deaths: ${$deathSelect.val().toLowerCase()}`});
    var $celebDivider = $('<hr>', {class:'celebDivider'});
    $('.celebBox').remove();

    $body.append($celebBox);
    $celebBox.append($celebHeading, $celebDivider);
    $celebBox.hide();
    $celebBox.fadeIn(750);
}