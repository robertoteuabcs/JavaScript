var mi_arreglo=[1,2.1,{'label':'mensaje'},'hola'];
var mi_arreglo2=new Array(3);
mi_arreglo2[0]=2;
mi_arreglo2[1]='hola';

console.log(typeof mi_arreglo);
console.log(typeof mi_arreglo2);
console.log(mi_arreglo2[1]);
console.log(mi_arreglo);
mi_arreglo.splice(1,1);
console.log(mi_arreglo.length);

function mifuncion(){
    return(typeof mi_arreglo2 === 'object')?'es objecto':'noes object';
}



var mifuncion2=function (parametro){
    console.log(parametro);
}

console.log(typeof mifuncion2);