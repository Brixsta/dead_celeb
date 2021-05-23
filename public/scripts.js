var $container = $('.container');
var $searchBtn = $('.searchBtn');
var $deathSelect = $('.deathSelect');
var $body = $('body');
var results;
var deathNumber = 0;
var deathStyle = '';
celebObj = {
     firstName: [],
     lastName: [],
     celebId: [],
     deathId: [],
}


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

                for(let i=0; i<results.length; i++) {
                    celebObj.firstName.push(results[i].firstname);
                    celebObj.lastName.push(results[i].lastname);
                    celebObj.celebId.push(results[i].celebid);
                    celebObj.deathId.push(results[i].deathid);
                }

                console.log('This is the celeb OBJECT:', celebObj);

                createProfile();  
                createTable(results);
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

function createTable (array) {
     let $celebTable = $('<table></table', {class:'celebTable'});
     let $firstNameHeading = $('<th></th>', {text:'First Name'});
     let $lastNameHeading = $('<th></th>', {text:'Last Name'});
     let $celebIdHeading = $('<th></th>', {text:'Celeb Id'});
     let $deathIdHeading = $('<th></th>', {text:'Death Id'});
     let tableRowAmt = celebObj.deathId.filter(element => element === deathNumber).length; 

     $('.celebTable').remove();

     $celebTable.append($firstNameHeading, $lastNameHeading, $celebIdHeading, $deathIdHeading);
     $('.celebBox').append($celebTable);

     console.log('Here is the number before the table', tableRowAmt);

     for(let i=0; i<tableRowAmt; i++) {
          var $tableRow = $('<tr></tr>');
          $('.celebTable').append($tableRow);
     }

     
}
     


