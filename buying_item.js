var itemBought = -1; // Declare itemBought outside the function scope

//purchase organizaing
function item_0AccountShop() { item = 0; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }

function item_1AccountShop() { item = 1; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }

function item_2AccountShop() { item = 2; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }

function item_3AccountShop() { item = 3; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }

function item_4AccountShop() { item = 4; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }

function item_5AccountShop() { item = 5; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }


//purchase completion
function yesPurchase() {
  if (item === 0) {

    finishAccountTransaction();
    itemBought = document.getElementById("itemBought");
    itemBought.innerText = "$40 Mowing Discount with Coins";
    buyingEmailReciept(); reset(); //return false;


  } else if (item === 1) {

    finishAccountTransaction();
    itemBought = document.getElementById("itemBought");
    itemBought.innerText = "$5 Discount";
    buyingEmailReciept(); reset(); //return false;


} else if (item === 2) {

    finishAccountTransaction();
    itemBought = document.getElementById("itemBought");
    itemBought.innerText = "+10 Credit with Coins";
    buyingEmailReciept(); reset(); //return false;


  } else if (item === 3) {

    finishAccountTransaction();
    itemBought = document.getElementById("itemBought");
    itemBought.innerText = "$35 Discount";
    buyingEmailReciept(); reset(); //return false;


  } else if (item === 4) {

    finishAccountTransaction();
    itemBought = document.getElementById("itemBought");
    itemBought.innerText = "$70 Discount";
    buyingEmailReciept(); reset(); //return false;


  } else if (item === 5) {

    finishAccountTransaction();
    itemBought = document.getElementById("itemBought");
    itemBought.innerText = "$120 Discount";
    buyingEmailReciept(); reset(); //return false;


  } else if (item === 6) {

    finishAccountTransaction();
    itemBought = document.getElementById("itemBought");
    itemBought.innerText = "$10 For 1000 Coins";
    //console.log(itemBought.innerText);
    buyingEmailReciept(); //reset(); //return false;
    GreenLight_CashApp();

  } else if (item === 7) {

    finishAccountTransaction();
    itemBought = document.getElementById("itemBought");
    itemBought.innerText = "$35 For 3500 Coins";
    //console.log(itemBought.innerText);
    buyingEmailReciept(); //reset(); //return false;
    GreenLight_CashApp();

  } else if (item === 8) {

    finishAccountTransaction();
    itemBought = document.getElementById("itemBought");
    itemBought.innerText = "$40 For 4120 Coins";
    //console.log(itemBought.innerText);
    buyingEmailReciept(); //reset(); //return false;
    GreenLight_CashApp();

  } else if (item === 9) {

    finishAccountTransaction();
    itemBought = document.getElementById("itemBought");
    itemBought.innerText = "$80 For 8400 Coins";
    //console.log(itemBought.innerText);
    buyingEmailReciept(); //reset(); //return false;
    GreenLight_CashApp();

  } else if (item === 10) {

    finishAccountTransaction();
    itemBought = document.getElementById("itemBought");
    itemBought.innerText = "$90 For 10000 Coins";
    //console.log(itemBought.innerText);
    buyingEmailReciept(); //reset(); //return false;
    GreenLight_CashApp();
  } else if (item === 11) {

    finishAccountTransaction();
    itemBought = document.getElementById("itemBought");
    itemBought.innerText = "$120 For 13800 Coins";
    //console.log(itemBought.innerText);
    buyingEmailReciept(); //reset(); //return false;
    GreenLight_CashApp();

  }
}

function GreenLight_CashApp() {
  var result = window.confirm("You will be redirected to the GreenLights or CashApp website. There type in the amount of money you chose. Don't worry about leaving a note that was already done through the website. If it does ask for a note type 'ML' ");

  // Check the user's choice
  if (result) {
    // User chose pizza
    console.log("GreenLight");
    redirectToWebsiteGreenlight('https://gl.me/u/JkDjTdwmZGZS');  
  } else {
    // User chose Fanta or cancelled
    console.log("CashApp");
    redirectToWebsiteGreenlight('https://cash.app/$Radish6147');  
  }
}


//purchase cancelled
function noDontPurchase() {
  // Do Nothing
  finishAccountTransaction();
}

function finishAccountTransaction() {
  document.getElementById("PurchaseConfirmation").style.display = 'none';
}



itemCurrentlyOn = 1;



//Coins Shop

function accountTriangleCoinsShopLeftandRightMoveBackCheck() {
  if (itemCurrentlyOn <= 5) {
    itemCurrentlyOn = 6;
  } else {
  }
}

function accountTriangleCoinsShopLeftMoveBack() {
  accountTriangleCoinsShopLeftandRightMoveBackCheck();
  itemCurrentlyOn --;
  accountTriangleCoinsShopMoveCheck();
  console.log(itemCurrentlyOn);
}

function accountTriangleCoinsShopRightMoveFoward() {
  accountTriangleCoinsShopLeftandRightMoveBackCheck();
  if (itemCurrentlyOn >= 11) {
    itemCurrentlyOn --;
  }
  itemCurrentlyOn ++;
  accountTriangleCoinsShopMoveCheck();
  console.log(itemCurrentlyOn);
}


function accountTriangleCoinsShopMoveCheck() {
  if (itemCurrentlyOn === 6) {
    document.getElementById("item_1AccountCoinsShop").style.display = 'none';
    document.getElementById("item_2AccountCoinsShop").style.display = 'none';
    document.getElementById("item_3AccountCoinsShop").style.display = 'none';
    document.getElementById("item_4AccountCoinsShop").style.display = 'none';
    document.getElementById("item_5AccountCoinsShop").style.display = 'none';
    document.getElementById("item_0AccountCoinsShop").style.display = 'inline';
  } else if (itemCurrentlyOn === 7) {
    document.getElementById("item_0AccountCoinsShop").style.display = 'none';
    document.getElementById("item_2AccountCoinsShop").style.display = 'none';
    document.getElementById("item_3AccountCoinsShop").style.display = 'none';
    document.getElementById("item_4AccountCoinsShop").style.display = 'none';
    document.getElementById("item_5AccountCoinsShop").style.display = 'none';
    document.getElementById("item_1AccountCoinsShop").style.display = 'inline';
  } else if (itemCurrentlyOn === 8) {
    document.getElementById("item_0AccountCoinsShop").style.display = 'none';
    document.getElementById("item_1AccountCoinsShop").style.display = 'none';
    document.getElementById("item_3AccountCoinsShop").style.display = 'none';
    document.getElementById("item_4AccountCoinsShop").style.display = 'none';
    document.getElementById("item_5AccountCoinsShop").style.display = 'none';
    document.getElementById("item_2AccountCoinsShop").style.display = 'inline';
  } else if (itemCurrentlyOn === 9) {
    document.getElementById("item_0AccountCoinsShop").style.display = 'none';
    document.getElementById("item_1AccountCoinsShop").style.display = 'none';
    document.getElementById("item_2AccountCoinsShop").style.display = 'none';
    document.getElementById("item_4AccountCoinsShop").style.display = 'none';
    document.getElementById("item_5AccountCoinsShop").style.display = 'none';
    document.getElementById("item_3AccountCoinsShop").style.display = 'inline';
  } else if (itemCurrentlyOn === 10) {
    document.getElementById("item_0AccountCoinsShop").style.display = 'none';
    document.getElementById("item_1AccountCoinsShop").style.display = 'none';
    document.getElementById("item_2AccountCoinsShop").style.display = 'none';
    document.getElementById("item_3AccountCoinsShop").style.display = 'none';
    document.getElementById("item_5AccountCoinsShop").style.display = 'none';
    document.getElementById("item_4AccountCoinsShop").style.display = 'inline';
  } else if (itemCurrentlyOn === 11) {
    document.getElementById("item_0AccountCoinsShop").style.display = 'none';
    document.getElementById("item_1AccountCoinsShop").style.display = 'none';
    document.getElementById("item_2AccountCoinsShop").style.display = 'none';
    document.getElementById("item_3AccountCoinsShop").style.display = 'none';
    document.getElementById("item_4AccountCoinsShop").style.display = 'none';
    document.getElementById("item_5AccountCoinsShop").style.display = 'inline';
  } else { accountTriangleCoinsShopLeftandRightMoveBackCheck(); console.log("failed"); }

}





function item_0AccountCoinsShop() { item = 6; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }
function item_1AccountCoinsShop() { item = 7; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }
function item_2AccountCoinsShop() { item = 8; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }
function item_3AccountCoinsShop() { item = 9; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }
function item_4AccountCoinsShop() { item = 10; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }
function item_5AccountCoinsShop() { item = 11; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }

/*function hide_item_0AccountCoinsShop_All() {
  document.getElementById("item_0AccountCoinsShop").style.display = 'none';
  document.getElementById("item_1AccountCoinsShop").style.display = 'none';
  document.getElementById("item_2AccountCoinsShop").style.display = 'none';
  document.getElementById("item_3AccountCoinsShop").style.display = 'none';
  document.getElementById("item_4AccountCoinsShop").style.display = 'none';
  document.getElementById("item_5AccountCoinsShop").style.display = 'none';
}*/


function redirectToWebsiteGreenlight(url) {
  //alert("This will take you to the GreenLights website");
  window.open(url, '_blank');
}

