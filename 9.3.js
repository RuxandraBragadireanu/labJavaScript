var film = [];
film[0] = 
{
    nume : "Fight Club",
    durata : 139,
    actori : ["Brad Pitt" , "Edward Norton" , "Meat Loaf" ],
    vizualizat : true
};

film[1] = 
{
    nume : "Guardians of the Galaxy",
    durata : 121,
    actori : ["Chris Pratt", "Vin Diesel" , "Bradley Cooper"],
    vizualizat : true
};

film[2] = 
{
    nume : "The Magnificent Seven",
    durata : 132,
    actori : ["Denzel Washington" , "Chris Pratt" , "Ethan Hawke"],
    vizualizat : false
};

film.forEach(function (ob) {
    var para = document.createElement("p");
    var node = document.createTextNode(ob.nume);
    para.appendChild(node);
    var element = document.getElementById("div1");
    document.body.element.appendChild(para);
});

