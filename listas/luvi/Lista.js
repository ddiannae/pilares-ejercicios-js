window.onload= function(){
const datos = [{"nombre":"Ibby","apellido":"Jozwik","email":"ijozwik0@google.es","sexo":"Female","edad":64},
{"nombre":"Minnnie","apellido":"Leban","email":"mleban1@europa.eu","sexo":"Male","edad":73},
{"nombre":"Clayborn","apellido":"Gumby","email":"cgumby2@jimdo.com","sexo":"Female","edad":61},
{"nombre":"Jandy","apellido":"Goodding","email":"jgoodding3@1688.com","sexo":"Female","edad":80},
{"nombre":"Bethina","apellido":"Tungate","email":"btungate4@edublogs.org","sexo":"Female","edad":51},
{"nombre":"Jeniffer","apellido":"McAneny","email":"jmcaneny5@gov.uk","sexo":"Male","edad":63},
{"nombre":"Ian","apellido":"Warrior","email":"iwarrior6@weather.com","sexo":"Male","edad":68},
{"nombre":"Eolande","apellido":"Desson","email":"edesson7@discuz.net","sexo":"Female","edad":78},
{"nombre":"Jude","apellido":"Alyokhin","email":"jalyokhin8@digg.com","sexo":"Male","edad":79},
{"nombre":"Fanchon","apellido":"Mustin","email":"fmustin9@vkontakte.ru","sexo":"Female","edad":56},
{"nombre":"Danni","apellido":"Mertel","email":"dmertela@accuweather.com","sexo":"Male","edad":44},
{"nombre":"Vanni","apellido":"Toffano","email":"vtoffanob@forbes.com","sexo":"Female","edad":68},
{"nombre":"Sydelle","apellido":"Cromar","email":"scromarc@bing.com","sexo":"Male","edad":71},
{"nombre":"Rubia","apellido":"Floyd","email":"rfloydd@fema.gov","sexo":"Female","edad":63},
{"nombre":"Hobie","apellido":"Petracci","email":"hpetraccie@google.nl","sexo":"Male","edad":78},
{"nombre":"Jessie","apellido":"Verrick","email":"jverrickf@i2i.jp","sexo":"Female","edad":58},
{"nombre":"Malissia","apellido":"Blowing","email":"mblowingg@unc.edu","sexo":"Female","edad":54},
{"nombre":"Bessy","apellido":"Christofor","email":"bchristoforh@netlog.com","sexo":"Female","edad":57},
{"nombre":"Alameda","apellido":"Petzold","email":"apetzoldi@oakley.com","sexo":"Male","edad":54},
{"nombre":"Worthington","apellido":"Mazey","email":"wmazeyj@tinyurl.com","sexo":"Female","edad":67},
{"nombre":"Adan","apellido":"Tyers","email":"atyersk@macromedia.com","sexo":"Female","edad":65},
{"nombre":"Corly","apellido":"Sherrington","email":"csherringtonl@sourceforge.net","sexo":"Male","edad":80},
{"nombre":"Lorie","apellido":"O'Donnelly","email":"lodonnellym@vkontakte.ru","sexo":"Female","edad":64},
{"nombre":"Gerianna","apellido":"Seagrave","email":"gseagraven@arstechnica.com","sexo":"Female","edad":51},
{"nombre":"Rhona","apellido":"Duesberry","email":"rduesberryo@indiegogo.com","sexo":"Male","edad":54},
{"nombre":"Cathy","apellido":"Luparto","email":"clupartop@google.ca","sexo":"Male","edad":73},
{"nombre":"Belle","apellido":"Ivanikov","email":"bivanikovq@studiopress.com","sexo":"Male","edad":52},
{"nombre":"Brucie","apellido":"Eckhard","email":"beckhardr@e-recht24.de","sexo":"Female","edad":51},
{"nombre":"Lonna","apellido":"Salan","email":"lsalans@google.fr","sexo":"Male","edad":57},
{"nombre":"Ricky","apellido":"Springer","email":"rspringert@aol.com","sexo":"Male","edad":42}];

function llenarTabla(){
 let tablaDatos= document.getElementById("tabla");
 document.getElementById("tabla").innerHTML="";
    datos.forEach(elemento => {
     let fila=  tablaDatos.insertRow(-1);
     let celda= fila.insertCell();
     celda.textContent=elemento.nombre;
     celda= fila.insertCell();
     celda.textContent=elemento.apellido;
     celda= fila.insertCell();
     celda.textContent=elemento.email;
     celda= fila.insertCell();
     celda.textContent=elemento.sexo;
     celda= fila.insertCell();
     celda.textContent=elemento.edad;
    })
}
function guardarDatos(){
let nombre= document.getElementById("nombre").value;
let apellido= document.getElementById("apellido").value;
let email= document.getElementById("email").value;
let sexo= document.getElementById("sexo").value;
let edad= document.getElementById("edad").value;
let nuevoElemento={"nombre":nombre,"apellido":apellido,"email":email,"sexo":sexo,"edad":edad};
datos.push(nuevoElemento);
llenarTabla();
return false;
}


function buscarDatos(){
let busqueda= document.getElementById("buscar").value;
let seleccion= document.getElementById("seleccionar").value;
let resultados= datos.filter(elemento=>{
if(seleccion=="todos"){
    return (elemento.nombre.toLowerCase().includes(busqueda.toLowerCase())
    ||
    elemento.apellido.toLowerCase().includes(busqueda.toLowerCase())
    ||
    elemento.email.toLowerCase().includes(busqueda.toLowerCase())
    )
}
else{
   return elemento[seleccion].toLowerCase().includes(busqueda.toLowerCase())
}
});
let tablaDatos= document.getElementById("tabla");
 document.getElementById("tabla").innerHTML="";
    resultados.forEach(elemento => {
     let fila=  tablaDatos.insertRow(-1);
     let celda= fila.insertCell();
     celda.textContent=elemento.nombre;
     celda= fila.insertCell();
     celda.textContent=elemento.apellido;
     celda= fila.insertCell();
     celda.textContent=elemento.email;
     celda= fila.insertCell();
     celda.textContent=elemento.sexo;
     celda= fila.insertCell();
     celda.textContent=elemento.edad;
    })
    return false;
}

document.getElementById("guardar").onclick= guardarDatos;
llenarTabla();
document.getElementById("busqueda").onclick= buscarDatos;
}