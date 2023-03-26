function back() {
    console.log("step 2");
    hideEverything()
    document.getElementById("hideFirstPage").style.display = 'inline';
    // document.getElementById("ahhhhhhh").style.display = 'inline';
    
    document.getElementById("MysticalLawns").style.display = 'inline';
    checkMenu();
    console.log("step 3");
}

function backTwo() {

    
    //setup
    document.getElementById("SEPageJobs").style.display = 'none';
    document.getElementById("SEPageMulching").style.display = 'none';
    document.getElementById("SEPagePlanting").style.display = 'none';
    document.getElementById("SEPageWeeding").style.display = 'none';
    document.getElementById("SEPageCleaning").style.display = 'none';
    document.getElementById("SEPageMowing").style.display = 'none';
    //action
    document.getElementById("SEPage").style.display = 'inline';
}

function openAbout() {
    hideEverything();
    document.getElementById("aboutPage").style.display = 'inline';
    document.getElementById("aboutPagepng").style.display = 'inline';
    console.log("step 1");
}

function SE() {
    hideEverything();
    document.getElementById("SEPageBK").style.display = 'inline';
    document.getElementById("SEPage").style.display = 'inline';
}

function SEPageMowing() {
    document.getElementById("SEPageJobs").style.display = 'inline';
    document.getElementById("SEPageMowing").style.display = 'inline';
}

function SEPageMulching() {
    document.getElementById("SEPageJobs").style.display = 'inline';
    document.getElementById("SEPageMulching").style.display = 'inline';
}

function SEPagePlanting() {
    document.getElementById("SEPageJobs").style.display = 'inline';
    document.getElementById("SEPagePlanting").style.display = 'inline';
}

function SEPageWeeding() {
    document.getElementById("SEPageJobs").style.display = 'inline';
    document.getElementById("SEPageWeeding").style.display = 'inline';
}

function SEPageCleaning() {
    document.getElementById("SEPageJobs").style.display = 'inline';
    document.getElementById("SEPageCleaning").style.display = 'inline';
}

function openJoinUsPage() {
    hideEverything();
    document.getElementById("joinUsPage").style.display = 'inline';  
}

function openContactUsPage() {
    hideEverything();
    document.getElementById("contactUsPage").style.display = 'inline';  
}

function hideEverything() {
    document.getElementById("hideFirstPage").style.display = 'none';
    // document.getElementById("menu").style.display = 'none';
    // document.getElementById("ahhhhhhh").style.display = 'none';
    // document.getElementById("MysticalLawns").style.display = 'none';
    document.getElementById("aboutPage").style.display = 'none';
    document.getElementById("aboutPagepng").style.display = 'none';

    //estimates page
    document.getElementById("SEPage").style.display = 'none';
    document.getElementById("SEPageMowing").style.display = 'none';
    document.getElementById("SEPageMulching").style.display = 'none';
    document.getElementById("SEPagePlanting").style.display = 'none';
    document.getElementById("SEPageWeeding").style.display = 'none';
    document.getElementById("SEPageCleaning").style.display = 'none';
    document.getElementById("SEPageBK").style.display = 'none';
    document.getElementById("SEPageJobs").style.display = 'none';

    //join and talk to us pages
    document.getElementById("joinUsPage").style.display = 'none';  
    document.getElementById("contactUsPage").style.display = 'none'; 
}



function checkMenu() {
const phoneMenu = document.getElementById('phoneMenu');
const style = window.getComputedStyle(phoneMenu);
const color = style.getPropertyValue('color');

let menuSwitchDetect = color;
let menuSwitch = false;

if (menuSwitchDetect === 'rgb(255, 255, 255)') {
    menuSwitch = true;
    console.log(menuSwitchDetect);
    document.getElementById("menu").style.display = 'none';
    document.getElementById("phoneMenu").style.display = 'inline';
} else {
    document.getElementById("phoneMenu").style.display = 'none';
    document.getElementById("menu").style.display = 'inline';
}

}


//let SEPageEdgeTrimmingCheckbox = document.getElementById("SEPageEdgeTrimmingCheckbox");
let SEPageWeedEatCheckbox = document.getElementById("SEPageWeedEatCheckbox");
let SEPageBlowingCheckbox = document.getElementById("SEPageBlowingCheckbox");
let SEPageBaggingCheckbox = document.getElementById("SEPageBaggingCheckbox");

//EdgeTrimming = false;
WeedEat = false;
Blowing = false;
Bagging = false;


function SEPageMowingCheckCheckboxes() {
/*if (SEPageEdgeTrimmingCheckbox.checked) {
    EdgeTrimming = true;
  } else {}*/

  if (SEPageWeedEatCheckbox.checked) {
    WeedEat = true;
  } else {}

  if (SEPageBlowingCheckbox.checked) {
    Blowing = true;
  } else {}

  if (SEPageBaggingCheckbox.checked) {
    Bagging = true;
  } else {}

}




let schedule_appointment = false;
function scheduleAppointment() {
    let SEPSEO = document.getElementById("SEPageScheduleEstimateOn");

    if (schedule_appointment === false) {
        schedule_appointment = true;
        console.log("1");
        SEPSEO.textContent = "Hallo! We mow lawns at these locations: Moore and south of OKC";

    } else if (schedule_appointment === true) {
        schedule_appointment = false;
        console.log("0");
        SEPSEO.textContent = "";
    }

}


checkMenu();
