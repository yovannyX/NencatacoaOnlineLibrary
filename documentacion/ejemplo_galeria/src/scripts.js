var anchtot = 0;
var postbn = 0;


function isdef(variable,propiedad){
    return variable.find(op=>op == propiedad) != undefined;
}


function cambiar(){
    foco.setAttribute('src',this.src);
    anima();
    document.getElementById("campo1").innerHTML = "Nombre:" + this.nombre;
    document.getElementById("campo2").innerHTML = "Autor:" + this.autor;
    document.getElementById("campo3").innerHTML = "Año:" + this.anio;

}

//Funciones de animación
function anima(){
    for(let j = 0; j<=1; j+=0.01){
            setTimeout(function (){
                if(isdef(animaciones,"opacidad")) {foco.style.filter = "opacity("+j+")";}//Animación de opacidad
                if(isdef(animaciones,"crecer")) {foco.style.height=""+(j*100-10)+"%";}//entrada por tamaño
                if(isdef(animaciones,"derecha")) {foco.style.left=(j*100-50)+"%";}//de izquierda a derecha
                if(isdef(animaciones,"izquierda")) {foco.style.left=(150-j*100)+"%";}//de derecha a izquierda
                if(isdef(animaciones,"abajo")) {foco.style.top=(150-j*100)+"%";}//de abajo hacia arriba
                if(isdef(animaciones,"arriba")) {foco.style.top=(j*100 - 50)+"%";}//de arriba hacia abajo
            },t_anim*j);
    }
}


function creaprev(){

for(let i=0;i<imags.length;i++){
    
    cont = document.createElement('div');
    cont.setAttribute('class','prev_c');
    im = document.createElement('img');
    im.setAttribute('class','imgprev');
    im.setAttribute('id','tmbn'+i);
    im.addEventListener(tipo_inter,cambiar);
    im.addEventListener("touchstart",cambiar);//Compatibilidad con equipos táctiles
    im.src = imags[i].archivo;
    im.nombre = imags[i].nombre;
    im.autor = imags[i].autor;
    im.anio = imags[i].anio;
    //anchtot = anchtot + im.width/imags.length;
    cont.appendChild(im);
    prevc.appendChild(cont);

}

}


function btrans(e){
    if(e == "izq"){
        if( Number(prevc.style.left.split("px")[0]) > -anchtot){
        prevc.style.left = Number(prevc.style.left.split("px")[0]) - 10 +"px";}
    }
    if(e == "der"){
        if( Number(prevc.style.left.split("px")[0]) < 0){
        prevc.style.left = Number(prevc.style.left.split("px")[0]) + 10 +"px";}
    }
}

