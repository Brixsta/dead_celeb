var $container = $('.container');
var $searchBtn = $('.searchBtn');
var $deathSelect = $('.deathSelect');
var $body = $('body');
var results;
var deathNumber = 0;


$( document ).ready(function() {
    $searchBtn.click((event)=>{
     
    let deathSelectVal = $deathSelect.val().toLowerCase();

          if(deathSelectVal === 'drug_overdose') {
               deathNumber = 111;
               console.log('drug_overdose');
          } else if (deathSelectVal === 'suicide') {
               deathNumber = 222;
               console.log('suicide');
          } else if (deathSelectVal === 'murder') {
               deathNumber = 333;
               console.log('murder');
          } else if (deathSelectVal === 'plane_crash') {
               deathNumber = 444;
               console.log('plane_crash');
          } else if (deathSelectVal === 'skiing_accident') {
               deathNumber = 555;
               console.log('skiing_accident');
          } else if (deathSelectVal === 'botched_surgery') {
               deathNumber = 666;
               console.log('botched_surgery');
          } else if (deathSelectVal === 'natural_causes') {
               deathNumber = 777;
               console.log('natural_causes');
          } else if(deathSelectVal === 'aids') {
               deathNumber = 888;
               console.log('aids');
          } else if (deathSelectVal === 'car_crash') {
               deathNumber = 999;
               console.log('car crash');
          }

        $.get(`https://hidden-plateau-56299.herokuapp.com/api/dead_celeb/`, (data) => {
    //  var results = JSON.parse(data)
                results = data;
                console.log('These are the results: ', results);

                createProfile();  
               });
          });
    });

    function createProfile() {

     var $celebBox = $('<div></div>', {class:'celebBox'});
     var $celebHeading = $('<h1></h1>', {class:'celebHeading', text:`Celebrity deaths: ${$deathSelect.val().toLowerCase().replace('_', ' ')}`});
     var $celebDivider = $('<hr>', {class:'celebDivider'});
     var $celebInfo = $('<p></p>', {class:'celebInfo', text:`${JSON.stringify(listOfDead(results, deathNumber))}`});

     $('.celebBox').remove();

     $body.append($celebBox);
     $celebBox.append($celebHeading, $celebDivider, $celebInfo);
     $celebBox.hide();
     $celebBox.fadeIn(750);
}

function listOfDead (array, deathIdNum) {
          let newArr = [];

          for(let i=0; i<array.length; i++) {
          if(array[i].deathid === deathIdNum) {
               newArr.push(array[i]);
          }
     }
     return newArr;
}


     


