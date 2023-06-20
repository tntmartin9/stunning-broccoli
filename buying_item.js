var itemBought; // Declare itemBought outside the function scope

//purchase organizaing
function item_1AccountShop() { item = 1; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }

function item_2AccountShop() { item = 2; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }

function item_3AccountShop() { item = 3; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }

function item_4AccountShop() { item = 4; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }

function item_5AccountShop() { item = 5; document.getElementById("PurchaseConfirmation").style.display = 'inline'; }


//purchase completion
function yesPurchase() {
  if (item === 1) {

    finishAccountTransaction();
    itemBought = document.getElementById("itemBought");
    itemBought.innerText = "$5 Discount";
    buyingEmailReciept(); reset(); //return false;


} else if (item === 2) {

    finishAccountTransaction();
    itemBought = document.getElementById("itemBought");
    itemBought.innerText = "+50 Credit";
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






