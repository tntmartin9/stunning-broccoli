//let about = document.getElementById("about");

function back() {
    document.getElementById("accountNameMain").style.display = 'inline';
    document.getElementById("accountCreationDateMain").style.display = 'inline';
    document.getElementById("accountCreditBalanceTitle").style.display = 'inline';
    document.getElementById("accountCreditBalance").style.display = 'inline';

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
    //document.getElementById("SEPagePressureWashing").style.display = 'none';
    document.getElementById("SEPagePlanting").style.display = 'none';
    document.getElementById("SEPageWeeding").style.display = 'none';
    document.getElementById("SEPageCleaning").style.display = 'none';
    document.getElementById("SEPageMowing").style.display = 'none';
    //action
    document.getElementById("SEPage").style.display = 'inline';
}

function backShop() {
    document.getElementById("accountCoinsShop").style.display = 'none';
    document.getElementById("accountShop").style.display = 'none';
    document.getElementById("accountCreditDescriptionPage").style.display = 'none';
    document.getElementById("creditInformationPage").style.display = 'inline';
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

function SEPagePressureWashing() {
    document.getElementById("SEPageJobs").style.display = 'inline';
    //document.getElementById("SEPagePressureWashing").style.display = 'inline';
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

function openLoginPage() {
hideEverything();
document.getElementById("loginPage").style.display = 'inline';
}

function openSignUpPage() {
hideEverything();
document.getElementById("signUpPage").style.display = 'inline';
}

function openContactUsPage() {
    hideEverything();
    document.getElementById("contactUsPage").style.display = 'inline';  
}

function openCreditInformationPage() {
    hideEverything();
    document.getElementById("creditInformationPageImage").style.display = 'inline';  
}

function openAccountCreditDescription() {
    document.getElementById("creditInformationPage").style.display = 'none';
    document.getElementById("accountCreditDescriptionPage").style.display = 'inline';  
}

function openAccountShop() {
    document.getElementById("creditInformationPage").style.display = 'none';
    document.getElementById("accountShop").style.display = 'inline'; 
}

function openAccountCoinsShop() {
    document.getElementById("creditInformationPage").style.display = 'none';
    document.getElementById("accountCoinsShop").style.display = 'inline';
    document.getElementById("item_0AccountCoinsShop").style.display = 'inline';
}

function hideEverything() {
    document.getElementById("creditInformationPage").style.display = 'inline';

    document.getElementById("hideFirstPage").style.display = 'none';
    // document.getElementById("menu").style.display = 'none';
    // document.getElementById("ahhhhhhh").style.display = 'none';
    // document.getElementById("MysticalLawns").style.display = 'none';
    document.getElementById("aboutPage").style.display = 'none';
    document.getElementById("aboutPagepng").style.display = 'none';
    //document.getElementById("videoOneMowing").style.display = 'none'; 

    //estimates page
    document.getElementById("SEPage").style.display = 'none';
    document.getElementById("SEPageMowing").style.display = 'none';
    //document.getElementById("SEPagePressureWashing").style.display = 'none';
    document.getElementById("SEPagePlanting").style.display = 'none';
    document.getElementById("SEPageWeeding").style.display = 'none';
    document.getElementById("SEPageCleaning").style.display = 'none';
    document.getElementById("SEPageBK").style.display = 'none';
    document.getElementById("SEPageJobs").style.display = 'none';

    //join and talk to us pages
    document.getElementById("loginPage").style.display = 'none';
    document.getElementById("signUpPage").style.display = 'none';
    document.getElementById("contactUsPage").style.display = 'none';

    //account
    document.getElementById("accountShop").style.display = 'none';
    document.getElementById("creditInformationPageImage").style.display = 'none';
    document.getElementById("accountCreditDescriptionPage").style.display = 'none'; 
    document.getElementById("accountCoinsShop").style.display = 'none'; 
}


let menuSwitch = false;

function checkMenu() {
const phoneMenu = document.getElementById('phoneMenu');
const style = window.getComputedStyle(phoneMenu);
const color = style.getPropertyValue('color');

let menuSwitchDetect = color;

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



document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    

    if (username === 'marvin' && password === 'd') {
        back();
        const accountNameMain = document.getElementById("accountNameMain");
        accountNameMain.innerText = "Bob";
        const accountCreationDateMain = document.getElementById("accountCreationDateMain");
        accountCreationDateMain.innerText = "6/20/2023";
        const accountCreditBalance = document.getElementById("accountCreditBalance");
        accountCreditBalance.innerText = "1000";

        const accountCoinBalance = document.getElementById("accountCoinBalance");
        accountCoinBalance.innerText = "8750";

        if (menuSwitch == false) {
        document.getElementById("login").style.display = 'none';
        document.getElementById("creditInformation").style.display = 'inline';
        } else {
        document.getElementById("phoneLogin").style.display = 'none';
        document.getElementById("phoneCreditInformation").style.display = 'inline';
        }
        //marvin@mysticallawns.com



    } else if (username === 'Letty' && password === 'd' || username === 'letty' && password === 'd') {
        back();

        const accountNameMain = document.getElementById("accountNameMain");
        accountNameMain.innerText = "Letty";

        const accountCreationDateMain = document.getElementById("accountCreationDateMain");
        accountCreationDateMain.innerText = "6/20/2023";

        const accountCreditBalance = document.getElementById("accountCreditBalance");
        accountCreditBalance.innerText = "580";

        const accountCoinBalance = document.getElementById("accountCoinBalance");
        accountCoinBalance.innerText = "-110000";
        document.getElementById("creditInformation").style.display = 'inline';
        document.getElementById("login").style.display = 'none';
        alert("Login successful! Now you can check your account information at the top right");



    } else if (username === 'Carolyn' && password === 'B' || username === 'carolyn' && password === 'b') {
        back();

        const accountNameMain = document.getElementById("accountNameMain");
        accountNameMain.innerText = "undefined";

        const accountCreationDateMain = document.getElementById("accountCreationDateMain");
        accountCreationDateMain.innerText = "6/25/2023";

        const accountCreditBalance = document.getElementById("accountCreditBalance");
        accountCreditBalance.innerText = "8";

        const accountCoinBalance = document.getElementById("accountCoinBalance");
        accountCoinBalance.innerText = "-3500";
        document.getElementById("creditInformation").style.display = 'inline';
        document.getElementById("login").style.display = 'none';
        alert("Login successful! Now you can check your account information at the top right");



    } else {
      alert("Invalid username or password.");
    }
  };


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
