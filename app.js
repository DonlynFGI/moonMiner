let cheese = 0;
startinterval()
function mine() {
  cheese++
  pickmult()
  shavemult()
  count(cheese)
  update()
}

function count(cheese) {
  document.getElementById('cheesecounter').innerText = `Current Cheese = ${cheese}`
}


let clickUpgrades = {
  pickaxes: {
    price: 5,
    quantity: 0,
    multiplier: 2
  }
  ,
  shaveblades: {
    price: 500,
    quantity: 0,
    multiplier: 25
  }
};

let automaticUpgrades = {
  rovers: {
    price: 600,
    quantity: 0,
    multiplier: 40
  }
  ,
  miners: {
    price: 1000,
    quantity: 0,
    multiplier: 150
  }
};

function buypickaxe() {
  if (cheese >= 5) {
    cheese = cheese - clickUpgrades.pickaxes.price
    clickUpgrades.pickaxes.quantity++
    document.getElementById('pickcount').innerText = `pickaxes: ${clickUpgrades.pickaxes.quantity}`
    update()
  }
}

function pickmult() {
  if (clickUpgrades.pickaxes.quantity >= 1) {
    newmult = clickUpgrades.pickaxes.multiplier * clickUpgrades.pickaxes.quantity
    cheese = cheese + newmult
  }
  update()
}

function buyshave() {
  if (cheese >= 500) {
    cheese = cheese - clickUpgrades.shaveblades.price
    clickUpgrades.shaveblades.quantity++
    document.getElementById('shavecount').innerText = `shaveblades: ${clickUpgrades.shaveblades.quantity}`
    update()
  }
}

function shavemult() {
  if (clickUpgrades.shaveblades.quantity >= 1) {
    newmult2 = clickUpgrades.shaveblades.multiplier * clickUpgrades.shaveblades.quantity
    cheese = cheese + newmult2
  }
  update()
}
function update() {
  document.getElementById('cheesecounter').innerText = `Current Cheese = ${cheese}`
}

function buyrover() {
  if (cheese >= 600) {
    cheese = cheese - automaticUpgrades.rovers.price
    automaticUpgrades.rovers.quantity++
    document.getElementById('rovercount').innerText = `rovers: ${automaticUpgrades.rovers.quantity}`
    update()
  }
}

function buyminer() {
  if (cheese >= 1000) {
    cheese = cheese - automaticUpgrades.miners.price
    automaticUpgrades.miners.quantity++
    document.getElementById('minercount').innerText = `miners: ${automaticUpgrades.miners.quantity}`
    update()
  }
}

function collectAutoUpgrades() {
  let sumrovers = automaticUpgrades.rovers.quantity * automaticUpgrades.rovers.multiplier;
  let summiners = automaticUpgrades.miners.quantity * automaticUpgrades.miners.multiplier;
  cheese += sumrovers + summiners
  console.log('ts')
  update()
}


function startinterval() {
  let collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

update()