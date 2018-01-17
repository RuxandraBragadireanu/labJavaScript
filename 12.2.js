id = 1;

//get
function getDogs() {
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost:3000/dogs";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            dogs = JSON.parse(this.responseText);
            showDogs(dogs);
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}

function showDogs(dogs) {

    dogs.forEach(function (dog) {

        var dogId = document.createElement('div');
        dogId.setAttribute('id', 'dogId ' + dog.id);
        var textId = document.createTextNode(dog.id + ". " + dog.name)
        dogId.appendChild(textId);
        document.body.appendChild(dogId);
        id++;
        
        var dogImg =  document.createElement('img');
        dogImg.setAttribute('id', 'dogImg ' + dog.id);
        dogImg.src = dog.img;
        document.body.appendChild(dogImg);

    })
}

getDogs();

function postDog() {
    var dog = {};
    dog.id = id;
    dog.name = document.getElementById("form-add").elements[0].value;
    dog.img = document.getElementById("form-add").elements[1].value;
    var json = JSON.stringify(dog);

    var url = "http://localhost:3000/dogs";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var dogs = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(dogs);
        } else {
            console.error(dogs);
        }
    }
    xhr.send(json);
}

//put
function putDog() {

    var url = "http://localhost:3000/dogs";
    var dog = {};
    dog.id = document.getElementById("form-update").elements[0].value;
    dog.name = document.getElementById("form-update").elements[1].value;
    dog.img  = document.getElementById("form-update").elements[2].value;
    var json = JSON.stringify(dog);

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url+'/' + dog.id, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var dogs = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(dogs);
        } else {
            console.error(dogs);
        }
    }
    xhr.send(json);
}



//delete
function deleteDog() {
    var url = "http://localhost:3000/dogs";
    var number = document.getElementById("form-del").elements[0].value;
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url + '/' + number, true);
    xhr.onload = function () {
        var dogs = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(dogs);
        } else {
            console.error(dogs);
        }
    }
    xhr.send(null);
}

document.getElementById("post-button").addEventListener("click", postDog);
document.getElementById("put-button").addEventListener("click", putDog);
document.getElementById("del-button").addEventListener("click", deleteDog);
