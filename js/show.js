document.addEventListener('DOMContentLoaded', function(){   
    var ver = document.getElementById('ver');
    var opc = document.getElementById('opc');

    ver.addEventListener('click', () => {
        opc.classList.toggle('show');
    })
});