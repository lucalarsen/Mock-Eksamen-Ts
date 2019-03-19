document.getElementById("udregnbtnbil").addEventListener("click",udregnPrisBil);
document.getElementById("udregnbtnelbil").addEventListener("click",udregnPrisElbil);
document.getElementById("slet").addEventListener("click",slet);

let elementInput = document.getElementById("prisenPaaBil");
let personbil: number = 200000;


function udregnPrisBil() {
    let inputText: number = parseInt((<HTMLInputElement>elementInput).value);
    var gammelpris = document.getElementById('content');
    var nypris = document.createElement('li');

    if (inputText <= personbil) {
        let resultat: number = inputText * 0.85;
        let nyText = document.createTextNode(resultat.toString());
        gammelpris.appendChild(nypris);
        nypris.appendChild(nyText);

        }
    else{
        let resultat: number = (inputText * 1.50)-130000;
        let nyText = document.createTextNode(resultat.toString());
        gammelpris.appendChild(nypris);
        nypris.appendChild(nyText);
        
        }
}
function udregnPrisElbil() {
    let inputText: number = parseInt((<HTMLInputElement>elementInput).value);
    var gammelpris = document.getElementById('content');
    var nypris = document.createElement('li');


    if (inputText <= personbil) {
        let resultat: number = (inputText * 0.85)*0.20;
        let nyText = document.createTextNode(resultat.toString());
        gammelpris.appendChild(nypris);
        nypris.appendChild(nyText);

        }
    else{
        let resultat: number = ((inputText * 1.50)-130000)*0.20;
        let nyText = document.createTextNode(resultat.toString());
        gammelpris.appendChild(nypris);
        nypris.appendChild(nyText);
        
        }
}

function slet() {
    let item = document.getElementById("content");
    while (item.hasChildNodes()) {
        item.removeChild(item.firstChild);
    }
}
