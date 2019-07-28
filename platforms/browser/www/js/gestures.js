var emisora = document.getElementById('emisora');
var emisoras = ["http://20833.live.streamtheworld.com/EL_SOL_MED_SC?DIST=TuneIn&amp;TGT=TuneIn&amp;maxServers=2&amp;ua=RadioTime&amp;ttag=RadioTime",
                "http://65.60.45.74:8070/;",
                "http://20833.live.streamtheworld.com/RADIO_ACTIVA_SC?DIST=TuneIn&amp;TGT=TuneIn&amp;maxServers=2&amp;ua=RadioTime&amp;ttag=RadioTime",
                "http://peridot.streamguys.com:7830/WUCF_QL"];
var boton_pausa = false;
var frecuencia = - 1;
var app = {
    // primera función que se ejecutar al cargar la pagina
    inicio: function () {
        this.iniciaBotones();
        this.iniciaFastClick();
    },
    //inicia librería FastClick
    iniciaFastClick: function () {
        FastClick.attach(document.body);
    },
    
    //inicializa cada botón en el DOM
    iniciaBotones: function () {
        var botonPlay = document.querySelector('#play');
        var botonPause = document.querySelector('#pause');
        //var botonVolMas = document.querySelector('#volumemas');
        //var botonVolMenos = document.querySelector('#volumemenos');
        var slider = document.querySelector("#myRange");
   var selecc = document.querySelector('#seleccion');
       botonPlay.addEventListener('click', app.play, false);
        botonPause.addEventListener('click', app.pausa, false);
        //botonVolMas.addEventListener('click', app.subeVol, false);
       // botonVolMenos.addEventListener('click', app.bajaVol, false);
        slider.addEventListener('input', app.deslizar, false);
        selecc.addEventListener('change', app.sintonizarEmisora, false);
    },
    
    
    // función del botón play del reproductor
    
    play: function () {
        if (frecuencia == 3 && boton_pausa == false)
            {
                frecuencia = - 1;
            }
        if (boton_pausa == false)
        {
            frecuencia++;
        }
        else{
            boton_pausa = false;
        }
        var url = emisoras[frecuencia];
        /*console.log(frecuencia);
        console.log("clic en play");*/
        document.getElementById('emisora').src = url;
            
            document.getElementById('emisora').play();
            
    },
    // función del botón pausa del reproductor
    pausa: function () {  
        boton_pausa = true;
        //console.log("clic en pause");
            document.getElementById('emisora').pause(); 
    },
    // función del botón subir volume del reproductor
    /*subeVol: function () {
        console.log("clic en sube volume");
        var mas = document.getElementById('emisora').volume;
        if (mas <= 1.0){
            mas += 0.1;
    
    },
    // función del botón bajar volume del reproductor
    bajaVol: function () {
        console.log("clic en baja volume");
        document.getElementById('emisora').volume -= 0.1;
    }*/
    sintonizarEmisora: function () {
        app.pausa();
        emisora.src = emisoras[this.value];
},
    deslizar: function(){

        // console.log(this.value/100)
        document.getElementById('emisora').volume = this.value/100;
    }
};


// inicializar al cargar la pagina
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        app.inicio();
    }, false);
}
