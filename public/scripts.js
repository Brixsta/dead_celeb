var $container = $('.container');
var $searchBtn = $('.searchBtn');
var $deathSelect = $('.deathSelect');
var $body = $('body');
var results;
var deathNumber = 0;
var deathSelectVal = '';

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

bloodSplatterEffects();

$( document ).ready(function() {
    $searchBtn.click((event)=>{
 
     deathSelectVal = $deathSelect.val().toLowerCase();

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
                results = data;
                console.log('These are the results: ', results);

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
     // var $celebInfo = $('<p></p>', {class:'celebInfo', text:`${JSON.stringify(listOfDead(results, deathNumber))}`});

     $('.celebBox').remove();

     $body.append($celebBox);
     $celebBox.append($celebHeading, $celebDivider);
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

function bloodSplatterEffects () {
     


     console.log('bloodsplatter executed');

     


     $('.bloodSplatter0').hide();
     $('.bloodSplatter1').hide();
     $('.bloodSplatter2').hide();
     $('.bloodSplatter3').hide();
     
     
     fadeInAndOut();
     setTimeout(function(){
          bloodSplatterEffects();
     },27000);
}

function fadeInAndOut () {
     let randomNumber = 0;
     console.log('random number is', randomNumber);

     setTimeout(function(){
          randomNumber = Math.floor(Math.random()*4);
          $('.bloodSplatter1').attr('src', `bloodsplatter${randomNumber}.png`);
          $('.bloodSplatter1').fadeIn(800);
     },2000);

     setTimeout(function(){
          randomNumber = Math.floor(Math.random()*4);
          bloodSplatterFadeOut();
     },7000);

     setTimeout(function(){
          randomNumber = Math.floor(Math.random()*4);
          console.log('11000');
          $('.bloodSplatter2').attr('src', `bloodsplatter${randomNumber}.png`);
          $('.bloodSplatter2').fadeIn(800);
     },8000);

     setTimeout(function(){
          bloodSplatterFadeOut();
     },13000);

     setTimeout(function(){
          randomNumber = Math.floor(Math.random()*4);
          console.log('17000');
          $('.bloodSplatter3').attr('src', `bloodsplatter${randomNumber}.png`);
          $('.bloodSplatter3').fadeIn(800);
     },14000);
     setTimeout(function(){
          bloodSplatterFadeOut();
     },19000);
     setTimeout(function(){
          randomNumber = Math.floor(Math.random()*4);
          console.log('23000');
          $('.bloodSplatter0').attr('src', `bloodsplatter${randomNumber}.png`);
          $('.bloodSplatter0').fadeIn(600);
     },20000);
     setTimeout(function(){
          bloodSplatterFadeOut();
     },25000);
}

function bloodSplatterFadeOut() {
     $('.bloodSplatter0').fadeOut(800);
     $('.bloodSplatter1').fadeOut(800);
     $('.bloodSplatter2').fadeOut(800);
     $('.bloodSplatter3').fadeOut(800);
}


