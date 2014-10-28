function mifuncion(parametro1,parametro2,parametro3){
    console.log(typeof parametro1);
    console.log(typeof parametro2);
    console.log(typeof parametro3);
    parametro3(parametro1,parametro2);
}

var mifuncion22=function(){
    console.log(arguments);
}

mifuncion('hola', [0,1,3],mifuncion22);

[0,1,2,'hola'].forEach(function(item, index){
                       console.log(index+" " + item)
})