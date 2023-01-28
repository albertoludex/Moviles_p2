
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');


    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        /*
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        */
        console.log('Received Event: ' + id);
        console.log('Version cordova: ' + device.cordova);
        console.log('Modelo: ' + device.model);
        dispositivo();
        checkConnection();
        dialogo();
    }
};


function dialogo(){

    if(document.getElementById("alert")==null){

    }else{

    document.getElementById("alert").onclick = function() {
        navigator.notification.alert('ESTO ES UN ALERT', null, 'ALERT', 'OK');
    };

    document.getElementById("confirm").onclick = function() {
        navigator.notification.confirm('ESTO ES UN DIALOGO DE CONFIRMACION', null, 'Confirm', ['OK','Cancel']);
    };

    document.getElementById("prompt").onclick = function() {
        navigator.notification.prompt('ESTO ES UN PROMPT', null, 'Prompt', ['OK','Cancel'], null);
    };


    }

}






function dispositivo() {


    if (document.getElementById('modelo')==null){


    }else{
    document.getElementById('modelo').value= device.model;
    document.getElementById('apache').value= device.cordova;
    document.getElementById('plataforma').value= device.platform;
    document.getElementById('version').value= device.version;
    document.getElementById('uuid').value= device.uuid;
    }
}


function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'UNKNOWN';
    states[Connection.ETHERNET] = 'ETHERNET';
    states[Connection.WIFI]     = 'WIFI';
    states[Connection.CELL_2G]  = '2G';
    states[Connection.CELL_3G]  = '3G';
    states[Connection.CELL_4G]  = '4G';
    states[Connection.CELL]     = 'CELL';
    states[Connection.NONE]     = 'NONE';

    var estado= states[networkState];

    if (document.getElementById(estado)==null){


    }else{

        document.getElementById(estado).checked = true;

        var radio=document.getElementsByName("estado");
        var len=radio.length;
        for(var i=0;i<len;i++)
        {
            radio[i].disabled=true;
        }

    }

}

app.initialize();