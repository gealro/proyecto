var emisora = document.getElementById('emisora');
var emisoras = ["http://20833.live.streamtheworld.com/EL_SOL_MED_SC?DIST=TuneIn&amp;TGT=TuneIn&amp;maxServers=2&amp;ua=RadioTime&amp;ttag=RadioTime",
                "http://65.60.45.74:8070/;",
                "http://20833.live.streamtheworld.com/RADIO_ACTIVA_SC?DIST=TuneIn&amp;TGT=TuneIn&amp;maxServers=2&amp;ua=RadioTime&amp;ttag=RadioTime",
                "http://peridot.streamguys.com:7830/WUCF_QL"];
var boton_pausa = false;
var frecuencia = - 1;
var app = {
    inicio: function () {
        this.iniciaBotones();
        this.iniciaFastClick();
    },
    iniciaFastClick: function () {
        FastClick.attach(document.body);
    },
    
    iniciaBotones: function () {
        var botonPlay = document.querySelector('#play');
        var botonPause = document.querySelector('#pause');
        var slider = document.querySelector("#myRange");
   var selecc = document.querySelector('#seleccion');
       botonPlay.addEventListener('click', app.play, false);
        botonPause.addEventListener('click', app.pausa, false);
        slider.addEventListener('input', app.deslizar, false);
        selecc.addEventListener('change', app.sintonizarEmisora, false);
    },
    
    
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
        document.getElementById('emisora').src = url;
            
            document.getElementById('emisora').play();
            
    },
    pausa: function () {  
        boton_pausa = true;
        document.getElementById('emisora').pause(); 
    },
    sintonizarEmisora: function () {
        app.pausa();
        emisora.src = emisoras[this.value];
},
    deslizar: function(){
        document.getElementById('emisora').volume = this.value/100;
    }
};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        app.inicio();
    }, false);
}
