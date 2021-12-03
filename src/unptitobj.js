const car = {
    nbWheels: 2,
    color: "grey",
    klaxon: function() {
        console.log("Tutut")
    }
}

// propriété -> variable dans un objet
car.nbWheels

// méthode -> fonction dans un objet
car.klaxon()

car.nbWheels = 4;
car["nbWheels"] = 4;