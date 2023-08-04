// Fishes

function Fish1() {
    const node = document.getElementById("crabsjs-fish1");
    const clone = node.cloneNode(true);
    document.getElementById("body").appendChild(clone);
}

function Fish2() {
    const node = document.getElementById("crabsjs-fish2");
    const clone = node.cloneNode(true);
    document.getElementById("body").appendChild(clone);
}

function Fish3() {
    const node = document.getElementById("crabsjs-fish3");
    const clone = node.cloneNode(true);
    document.getElementById("body").appendChild(clone);
}

var fishes = [Fish1, Fish2, Fish3]

function addFish() { 
    var ranFish = Math.floor(Math.random() * fishes.length)
    fishes.splice(ranFish-1, 1, Fish1, Fish2, Fish3)[0]()
}

// Cars

function Car1() {
    const node = document.getElementById("crabsjs-car1");
    const clone = node.cloneNode(true);
    document.getElementById("body").appendChild(clone);
}

function Car2() {
    const node = document.getElementById("crabsjs-car2");
    const clone = node.cloneNode(true);
    document.getElementById("body").appendChild(clone);
}

function Car3() {
    const node = document.getElementById("crabsjs-car3");
    const clone = node.cloneNode(true);
    document.getElementById("body").appendChild(clone);
}

function Car4() {
    const node = document.getElementById("crabsjs-car4");
    const clone = node.cloneNode(true);
    document.getElementById("body").appendChild(clone);
}

function Car5() {
    const node = document.getElementById("crabsjs-car5");
    const clone = node.cloneNode(true);
    document.getElementById("body").appendChild(clone);
}

function Car6() {
    const node = document.getElementById("crabsjs-car6");
    const clone = node.cloneNode(true);
    document.getElementById("body").appendChild(clone);
}

var cars = [Car1, Car2, Car3, Car4, Car5, Car6]

function addCar() {
    var ranCar = Math.floor(Math.random() * cars.length)
    cars.splice(ranCar-1, 1, Car1, Car2, Car3, Car4, Car5, Car6)[0]()
}

// Ghosts

function addGhost() {
    const node = document.getElementById("crabsjs-ghost");
    const clone = node.cloneNode(true);
    document.getElementById("body").appendChild(clone); 
}