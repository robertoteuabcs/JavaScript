function Auto(propiedades){
    if(propiedades){
        console.log("con propiedades");
        this.modelo=propiedades.modelo || 'default';
        this.anio=propiedades.anio || 1980;
        this.kilometraje=propiedades.kilometraje || 0;
    }else{
        console.log("sin propiedades");
        this.modelo='default';
        this.anio=1980;
        this.kilometraje=0;
    }
    
    var micarro=new Auto({
        modelo:'vocho',
        anio:2003
    });
    
    
}

console.log(micarro);