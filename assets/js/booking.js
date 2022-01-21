var type,basePrice,fuel,tranPrice = 0,total;
var days = document.getElementById("days");


function ty(e) {
    type = e;
    var a=document.getElementsByName('radio');
    for(var i=0;i<a.length;i++){
        a[i].disabled = true;
    }


    var b=document.getElementsByName('gear');
    for(var i=0;i<b.length;i++){
        b[i].disabled = true;
    }


    switch (type) {
        case "Moto": document.querySelector("#gasoline").disabled = false;
                     document.querySelector("#electric").disabled = false;
                     basePrice = 10;
        break;
        

        case "Compact": document.querySelector("#manual").disabled = false;
                        document.querySelector("#manual").checked = true;
                        document.querySelector("#hybride").disabled = false;
                        document.querySelector("#gasoline").disabled = false;
                        document.querySelector("#diesel").disabled = false;
                        basePrice = 14;
        break;


        case "citadine": document.querySelector("#manual").disabled = false;
                         document.querySelector("#manual").checked = true;
                         document.querySelector("#electric").disabled = false;
                         document.querySelector("#hybride").disabled = false;
                         document.querySelector("#gasoline").disabled = false;
                         document.querySelector("#diesel").disabled = false;
                         basePrice = 12;
        break;


        case "utilitaire": document.querySelector("#manual").disabled = false;
                           document.querySelector("#diesel").disabled = false;
                           document.querySelector("#manual").checked = false;
                           document.querySelector("#diesel").checked = false;
                           basePrice = 16;
        break;

        case "Berlin": document.querySelector("#automatic").disabled = false;
                       document.querySelector("#automatic").checked = true;
                       document.querySelector("#hybride").disabled = false;
                       document.querySelector("#gasoline").disabled = false;
                       document.querySelector("#diesel").disabled = false;

                       basePrice = 20;
                       tranPrice = 0.19;
        break;

        case "truck": document.querySelector("#automatic").disabled = false;
                      document.querySelector("#diesel").disabled = false;
                      document.querySelector("#automatic").checked = true;
                      document.querySelector("#diesel").checked = false;
                      basePrice = 250;
                      tranPrice = 0.19;
        break;

        case "cm": document.querySelector("#manual").disabled = false;
                   document.querySelector("#manual").checked = false;
                   document.querySelector("#diesel").disabled = false;
                   document.querySelector("#gasoline").disabled = false;
                   basePrice = 900;
                   
        break;
        
    }


}
function fuelP(e) {
    fuel = e;

}

function calc(){
    total = (basePrice + ( basePrice * fuel) + (basePrice * tranPrice))*days.value;
    alert(total);
    console.log(total);
}

