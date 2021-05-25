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
          
               // checks user has filled out all fields
               if($firstNameInput.val().length < 1) {
                    alert('Please fill all fields before submitting a new Dead Celeb');
                    return;
               } else if ($lastNameInput.val().length < 1) {
                    alert('Please fill all fields before submitting a new Dead Celeb');
                    return;
               }

               $('.celebBox').fadeOut();
               deathNumber = 0;
               console.log('here is the variable $deathSelectNewCeleb', $deathSelectNewCeleb);
               deathSelectNewCelebVal = $deathSelectNewCeleb.val().toLowerCase();
               console.log('deathSelectNewCelebVal is: ',deathSelectNewCelebVal);
               assignDeathNumber(deathSelectNewCelebVal);
               let data = {firstName:$firstNameInput.val(), lastName:$lastNameInput.val(), deathId:deathNumber};
               console.log('about to send this data');

               makeRequest(data);

               
               // make an additional git request to view updated database
               $.get(`https://hidden-plateau-56299.herokuapp.com/api/dead_celeb/`, (data) => {
                results = data;
                console.log('These are the new results: ', results);


                    
                    // console.log('This is the new deathSelectNewCelebVal: ', deathSelectNewCelebVal);
                    
     
                    // console.log('This is the new deathNumber', deathNumber);
                    // deathObj = {};
                    // console.log('here is the deathObj', deathObj);
                    // celebToDeathMap(results);
                    // console.log('here is the deathObj after mapping');
               });

               

     
          });

          




    });
    
    // create profile that includes celebBox
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

// create the table for the celebBox
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

// organize celebs based on their deathid in the deathObj
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
          deathNumber = 111;
     } else if (value === 'suicide') {
          deathNumber = 222;
     } else if (value === 'murder') {
          deathNumber = 333;
     } else if (value === 'plane_crash') {
          deathNumber = 444;
     } else if (value === 'skiing_accident') {
          deathNumber = 555;
     } else if (value === 'botched_surgery') {
          deathNumber = 666;
     } else if (value === 'natural_causes') {
          deathNumber = 777;
     } else if(value === 'aids') {
          deathNumber = 888;
     } else if (value === 'car_crash') {
          deathNumber = 999;
     }
}
