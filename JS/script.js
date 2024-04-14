let age = Number(prompt("შეიყვანეთ თქვენი ასაკი"))
let movieType = prompt("3D ფილმი ირჩევთ")
let time = prompt("საღამოს სესია?")
let fasdakleba = prompt("გაქვთ ფადაკლების ბილეთი")


function calculatePrice(age, movieType, time) {
    let price = 0;
    
    
    switch (true) {
        
        case age < 10:
            price = 5;
            break;
        case age >= 10 && age < 65: 
            price = 15;
            break;
        case age > 65:
            price = 10;  
            break;  
    }   
    switch (movieType) {
        case "კი":
            price += 5;
            break;
    }
    switch (time) {
        case "კი":
            price += 5;
            break;
    }
    if (fasdakleba === "კი") {
        price -= 5;
    }


    alert(`ბილეთს ფასი თქვენთვის არის  ${price} ლარი`)  
}

calculatePrice(age, movieType, time)