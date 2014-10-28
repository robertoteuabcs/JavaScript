window.crud={
    create: function(){
        var di=document.getElementById("div");
        var p=document.getElementById("parrafo");
        
        var nombre = document.getElementById('name');
        var apellido = document.getElementById('lastName');
        var edad = document.getElementById('age');
        
        
        arreglo.push(new Persona (nombre.value, apellido.value, edad.value));
        
    for(var i=0;i<arreglo.length;i++){
         //p.innerHTML='';
        var hielera=document.createElement("tr");
        
        var celda=document.createElement("td");
        celda.innerHTML=arreglo[arreglo.length-1]['nombre'];
       // celda.appendChild(document.createTextNode(arreglo[arreglo.length-1]['nombre']));
        hielera.appendChild(celda);
       //hielera.innerHTML=celda;
        
        var celda1=document.createElement("td");
        celda1.appendChild(document.createTextNode(arreglo[arreglo.length-1]['apellidos']));
        hielera.appendChild(celda1);
        
         var celda2=document.createElement("td");
        celda2.appendChild(document.createTextNode(arreglo[arreglo.length-1]['edad']));
        hielera.appendChild(celda2);
        
       p.appendChild(hielera);
        //p.innerHTML=hielera;
    }
  
    }


}


var button = document.getElementById('crearButton');

var arreglo = [];

button.addEventListener('click',crud.create);


function Persona(nombre,apellidos,edad){
    this.nombre=nombre,
    this.apellidos=apellidos,
    this.edad=edad;
}