const $container = $('.container');
const $searchBtn = $('.searchBtn');
const $addCelebBtn = $('.addCelebBtn');
const $firstNameInput = $('.firstNameInput');
const $lastNameInput = $('.lastNameInput');
var $deathSelect = $('.deathSelect');
var $deathSelectNewCeleb = $('.deathSelectNewCeleb');
const $body = $('body');
var results;
var deathNumber = 0;
var deathSelectVal = '';
var deathSelectNewCelebVal = '';


const makeRequest = (data) => {
     $.post({
          url: "/api/dead_celeb",
          data: JSON.stringify(data),
          success: (res) => {
               console.log(res);
          },
          contentType:"application/json",
     });
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

     
     
     deathSelectVal = $deathSelect.val().toLowerCase();

     assignDeathNumber(deathSelectVal);


        $.get(`https://hidden-plateau-56299.herokuapp.com/api/dead_celeb/`, (data) => {
                results = data;
                console.log('These are the results: ', results);

                celebToDeathMap(results);
                createProfile();  
                createTable(results);
               });
          });


          // user clicks to add a dead celeb
          $addCelebBtn.click((event)=>{
          
               if($firstNameInput.val().length < 1) {
                    alert('Please fill all fields before submitting a new Dead Celeb');
                    return;
               } else if ($lastNameInput.val().length < 1) {
                    alert('Please fill all fields before submitting a new Dead Celeb');
                    return;
               }

               $('.celebBox').fadeOut();
               deathNumber = 0;
               console.log('firstNameInput.val() is: ', $firstNameInput.val());
               console.log('lastNameInput.val() is: ', $lastNameInput.val());
               console.log('death Number is ', deathNumber);

               let data = {firstname:$firstNameInput.val(), lastName:$lastNameInput.val()};

               makeRequest(data);

               $.get(`https://hidden-plateau-56299.herokuapp.com/api/dead_celeb/`, (data) => {
                results = data;
                console.log('These are the new results: ', results);

               });

               deathSelectNewCelebVal = $deathSelectNewCeleb.val().toLowerCase();

               assignDeathNumber(deathSelectNewCelebVal);

     
          });

          




    });

    function createProfile() {

     var $celebBox = $('<div></div>', {class:'celebBox'});
     var $celebHeading = $('<h1></h1>', {class:'celebHeading', text:`Celebrity deaths: ${$deathSelect.val().toLowerCase().replace('_', ' ')}`});
     var $celebDivider = $('<hr>', {class:'celebDivider'});
     // var $celebInfo = $('<p></p>', {class:'celebInfo', text:`${JSON.stringify(listOfDead(results, deathNumber))}`});

     $('.celebBox').remove();

     $body.append($celebBox);
     $celebBox.append($celebHeading, $celebDivider);
     $celebBox.hide();
     $celebBox.fadeIn(750);
          
}

function createTable (array) {
     var $celebTable = $('<table></table', {class:'celebTable'});
     var $firstNameHeading = $('<th></th>', {text:'First Name'});
     var $lastNameHeading = $('<th></th>', {text:'Last Name'});
     var $celebIdHeading = $('<th></th>', {text:'Celeb Id'});
     var $deathIdHeading = $('<th></th>', {text:'Death Id'});
     var tableRowAmt = rowAmtToCreate();

     $celebTable.append($firstNameHeading, $lastNameHeading, $celebIdHeading, $deathIdHeading);
     $('.celebBox').append($celebTable);

     for(let i=0; i<tableRowAmt; i++) {
          var $tableRow = $('<tr></tr>', {class:'tableRow'});
          $('.celebTable').append($tableRow);
     }   

     for(let i=0; i< tableRowAmt; i++) {
          var tableRow = ('.tableRow');
          var firstNameCell = document.createElement('td');
          firstNameCell.textContent = deathObj[deathSelectVal][i].firstname;
          var lastNameCell = document.createElement('td');
          lastNameCell.textContent = deathObj[deathSelectVal][i].lastname;
          var celebIdCell = document.createElement('td');
          celebIdCell.textContent = deathObj[deathSelectVal][i].celebid;
          var deathIdCell = document.createElement('td');
          deathIdCell.textContent = deathObj[deathSelectVal][i].deathid;

         $('.tableRow')[i].append(firstNameCell, lastNameCell, celebIdCell, deathIdCell);
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
}

// The Amount of rows to create for the tables
function rowAmtToCreate () {
     let newArr = [];
     let rowAmt = 0;

     for(let i=0; i<results.length; i++) {
          if(results[i].deathid === deathNumber) {
               newArr.push(results[i]);
          }
      }
      rowAmt = newArr.length;
      return rowAmt;
}

// Based on the deathSelect Val assign a deathnumber
function assignDeathNumber (value) {
     if(value === 'drug_overdose') {
          if(value === 111){return;}
          deathNumber = 111;
     } else if (value === 'suicide') {
          if(value === 222){return;}
          deathNumber = 222;
     } else if (value === 'murder') {
          if(value === 333){return;}
          deathNumber = 333;
     } else if (value === 'plane_crash') {
          if(value === 444){return;}
          deathNumber = 444;
     } else if (value === 'skiing_accident') {
          if(value === 555){return;}
          deathNumber = 555;
     } else if (value === 'botched_surgery') {
          if(value === 666){return;}
          deathNumber = 666;
     } else if (value === 'natural_causes') {
          if(value === 777){return;}
          deathNumber = 777;
     } else if(value === 'aids') {
          if(value === 888){return;}
          deathNumber = 888;
     } else if (value === 'car_crash') {
          if(value === 999){return;}
          deathNumber = 999;
     }
}
