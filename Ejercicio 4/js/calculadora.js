window.caculadora = {
    miConf:{
        name:'super',
        color:'blue'
    
    },
    
    init: function(newConfig){
        if(typeof newConfig === 'object'){
            this.myConf= newConfig;
        } 
    }
    var select= document.getElementById('acciones');
    var resultado = document.getElementsByClassName('mi clase');
    
    console log(select);
    console log(elemeto2);
    suma:function(a,b){
        return a+b;
    },
    
    resta:function(a,b){
        return a-b;
    },
    
    mult:function(a,b){
        return a*b;
    },

    div:function(a,b){
        return a/b;
    }
    
}
//inerhtml sobre escribe p
var operaciones = function(){
    var valor= select.option[select.selectedIndex].value;
    switch(valor){
        case 'suma':
            resultado.innerHTML= calculadora.suma(10,20);
            console.log();
            break;
        case 'resta':
            console.log(calculadora.resta(10,20));
            break;
        case 'mult':
            console.log(calculadora.mult(10,20));
            break;
        case 'div':
            console.log(calculador.div(10,20));
            break;
            
    }
}

if (select.addEventListener){
    select.addEventListener('change',operaciones);
}else{
    
}