//let about = document.getElementById("about");

function back() {
    console.log("step 2");
    hideEverything();
    document.getElementById("mainpng").style.height = '750px';
    document.getElementById("src").style.top = '340%';
    document.getElementById("bkcover1").style.display = 'inline';
    document.getElementById("bkcover2").style.display = 'inline';
    document.getElementById("MysticalLawns").style.display = 'inline';
    document.getElementById("menu").style.display = 'inline';
    console.log("step 3");
}

function openAbout() {
    hideEverything();
    document.getElementById("aboutPage").style.display = 'inline';
    document.getElementById("aboutPagepng").style.display = 'inline';
    console.log("step 1");
}

function SE() {
    hideEverything();
    document.getElementById("mainpng").style.height = '90%';
    document.getElementById("src").style.top = '90%';
    document.getElementById("SEPage").style.display = 'inline';
}

function SEPageMowing() {
    hideEverything();
    document.getElementById("SEPageMowing").style.display = 'inline';
    document.getElementById("SEPageJobs").style.display = 'inline';
}

function openJoinUsPage() {
    hideEverything();
    document.getElementById("mainpng").style.height = '100%';
    document.getElementById("src").style.top = '100%';
    document.getElementById("joinUsPage").style.display = 'inline';  
}

function openContactUsPage() {
    hideEverything();
    document.getElementById("contactUsPage").style.display = 'inline';  
}

function hideEverything() {
    document.getElementById("menu").style.display = 'none';
    document.getElementById("bkcover1").style.display = 'none';
    document.getElementById("bkcover2").style.display = 'none';
    document.getElementById("MysticalLawns").style.display = 'none';
    document.getElementById("aboutPage").style.display = 'none';
    document.getElementById("aboutPagepng").style.display = 'none';
    document.getElementById("SEPage").style.display = 'none';
    document.getElementById("SEPageMowing").style.display = 'none';
    document.getElementById("SEPageJobs").style.display = 'none';
    document.getElementById("joinUsPage").style.display = 'none';  
    document.getElementById("contactUsPage").style.display = 'none'; 
}




let schedule_appointment = false;
function scheduleAppointment() {
    let SEPSEO = document.getElementById("SEPageScheduleEstimateOn");

    if (schedule_appointment === false) {
        schedule_appointment = true;
        console.log("1");
        SEPSEO.textContent = "Sure, We will need your address and email address or phone number after you have clicked which job you would like us to do.";

    } else if (schedule_appointment === true) {
        schedule_appointment = false;
        console.log("0");
        SEPSEO.textContent = "";
    }

}