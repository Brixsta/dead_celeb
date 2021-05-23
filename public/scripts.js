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
};

deathObj = {
     drug_overdose: [],
     suicide: [],
     murder: [],
     plane_crash: [],
     skiing_accident: [],
     botched_surgery: [],
     natural_causes: [],
     aids: [],
     car_crash: []
};


$( document ).ready(function() {
    $searchBtn.click((event)=>{
     
    let deathSelectVal = $deathSelect.val().toLowerCase();

          if(deathSelectVal === 'drug_overdose') {
               deathNumber = 111;
          } else if (deathSelectVal === 'suicide') {
               deathNumber = 222;
          } else if (deathSelectVal === 'murder') {
               deathNumber = 333;
          } else if (deathSelectVal === 'plane_crash') {
               deathNumber = 444;
          } else if (deathSelectVal === 'skiing_accident') {
               deathNumber = 555;
          } else if (deathSelectVal === 'botched_surgery') {
               deathNumber = 666;
          } else if (deathSelectVal === 'natural_causes') {
               deathNumber = 777;
          } else if(deathSelectVal === 'aids') {
               deathNumber = 888;
          } else if (deathSelectVal === 'car_crash') {
               deathNumber = 999;
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
                celebToDeathMap(results);

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
     var $celebTable = $('<table></table', {class:'celebTable'});
     var $firstNameHeading = $('<th></th>', {text:'First Name'});
     var $lastNameHeading = $('<th></th>', {text:'Last Name'});
     var $celebIdHeading = $('<th></th>', {text:'Celeb Id'});
     var $deathIdHeading = $('<th></th>', {text:'Death Id'});
     // var tableRowAmt = results.deathid.filter(element => element === deathNumber).length; 
     
     console.log('Object entries deathObj: ', Object.entries(deathObj));




     $celebTable.append($firstNameHeading, $lastNameHeading, $celebIdHeading, $deathIdHeading);
     $('.celebBox').append($celebTable);

     for(let i=0; i<tableRowAmt; i++) {
          var $tableRow = $('<tr></tr>', {class:'tableRow'});
          $('.celebTable').append($tableRow);
     }   
}

function celebToDeathMap (array) {
     for(let i=0; i<array.length; i++) {
          if(array[i].deathid === 111) {
               deathObj.drug_overdose.push(array[i]);
          } else if(array[i].deathid === 222) {
               deathObj.suicide.push(array[i]);
          } else if (array[i].deathid === 333) {
               deathObj.murder.push(array[i]);
          } else if (array[i].deathid === 444) {
               deathObj.plane_crash.push(array[i]);
          } else if (array[i].deathid === 555) {
               deathObj.skiing_accident.push(array[i]);
          } else if (array[i].deathid === 666) {
               deathObj.botched_surgery.push(array[i]);
          } else if (array[i].deathid === 777) {
               deathObj.natural_causes.push(array[i]);
          } else if (array[i].deathid === 888) {
               deathObj.aids.push(array[i]);
          } else if (array[i].deathid === 999) {
               deathObj.car_crash.push(array[i]);
          }
     }

     console.log('HERES THE DEATH OBJ AFTER MAPPING: ', deathObj);
}
     


