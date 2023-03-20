function back() {
    console.log("step 2");
    hideEverything()
    document.getElementById("mainpng").style.display = 'inline';
    document.getElementById("ahhhhhhh").style.display = 'inline';
    document.getElementById("menu").style.display = 'inline';
    document.getElementById("MysticalLawns").style.display = 'inline';
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
    hideEverything();
    document.getElementById("SEPageJobs").style.display = 'inline';
    document.getElementById("SEPageMowing").style.display = 'inline';
}

function SEPageMulching() {
    hideEverything();
    document.getElementById("SEPageJobs").style.display = 'inline';
    document.getElementById("SEPageMulching").style.display = 'inline';
}

function SEPagePlanting() {
    hideEverything();
    document.getElementById("SEPageJobs").style.display = 'inline';
    document.getElementById("SEPagePlanting").style.display = 'inline';
}

function SEPageWeeding() {
    hideEverything();
    document.getElementById("SEPageJobs").style.display = 'inline';
    document.getElementById("SEPageWeeding").style.display = 'inline';
}

function SEPageCleaning() {
    hideEverything();
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
    document.getElementById("mainpng").style.display = 'none';
    document.getElementById("menu").style.display = 'none';
    document.getElementById("ahhhhhhh").style.display = 'none';
    document.getElementById("MysticalLawns").style.display = 'none';
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




let schedule_appointment = false;
function scheduleAppointment() {
    let SEPSEO = document.getElementById("SEPageScheduleEstimateOn");

    if (schedule_appointment === false) {
        schedule_appointment = true;
        console.log("1");
        SEPSEO.textContent = "Hallo";

    } else if (schedule_appointment === true) {
        schedule_appointment = false;
        console.log("0");
        SEPSEO.textContent = "";
    }

}
