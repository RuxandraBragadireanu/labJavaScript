var film = [];
film[0] = 
{
    nume : "Fight Club",
    durata : 139,
    actori : ["Brad Pitt" , "Edward Norton" , "Meat Loaf" ],
    vizualizat : true,
    img : "https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
};

film[1] = 
{
    nume : "Guardians of the Galaxy",
    durata : 121,
    actori : ["Chris Pratt", "Vin Diesel" , "Bradley Cooper"],
    vizualizat : true,
    img : "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UX182_CR0,0,182,268_AL_.jpg"
};

film[2] = 
{
    nume : "The Magnificent Seven",
    durata : 132,
    actori : ["Denzel Washington" , "Chris Pratt" , "Ethan Hawke"],
    vizualizat : false,
    img : "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTc0NTAyM15BMl5BanBnXkFtZTgwMTk1ODA5OTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
};

film.forEach(function (ob) {
    var titluLista = document.createElement("ul");
    var textTitlu = document.createTextNode(ob.nume);
    if(ob.vizualizat)
        titluLista.style.color = "red";
    else
        titluLista.style.color = "black";
    titluLista.appendChild(textTitlu);

    var durataFilm = document.createElement ("li");
    var textDurata = document.createTextNode("Durata: " + ob.durata + " minute");
    durataFilm.appendChild(textDurata);
    titluLista.appendChild(durataFilm);

    var actoriFilm = document.createElement ("li");
    var textActori = document.createTextNode("Actori: " + ob.actori);
    actoriFilm.appendChild(textActori);
    titluLista.appendChild(actoriFilm);

    var element = document.getElementById("div1");
    element.appendChild(titluLista);

    var imagine = document.createElement ("IMG");
    imagine.src = ob.img;
    element.appendChild(imagine);

});

