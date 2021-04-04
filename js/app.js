document.addEventListener('DOMContentLoaded', function(){   
    var evento = document.getElementById('evento');

    evento.addEventListener('click', function(){     
        /* document.body.scrollTop = 400; */
        document.documentElement.scrollTop = 500; 
    })
});