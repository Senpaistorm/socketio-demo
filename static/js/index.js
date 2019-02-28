(function (){

    window.addEventListener('load', function(){
        var socket = io();
        document.querySelector('#chatform').addEventListener('submit', function(e){
            e.preventDefault(); // prevents page reloading
            socket.emit('chat message', document.querySelector('#m').value);
            document.querySelector('#m').value = '';
            return false;
        });
    });
    
})();