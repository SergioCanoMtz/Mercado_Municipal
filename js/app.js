
document.addEventListener('DOMContentLoaded', function(){   
    var evento = document.getElementById('evento');
    window.onscroll = ()=>{
        reducciondeHeader();
    };

    evento.addEventListener('click', function(){     
        /* document.body.scrollTop = 400; */
        document.documentElement.scrollTop = 500; 
    })

    function reducciondeHeader() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("derecha").className = "derecha";
            document.getElementById("abajo").className = "abajo";
            document.getElementById("logo").className = "pequeno";
            document.getElementById("minimo").className = 'minimo';
        } else{
            document.getElementById("derecha").className = "back";
            document.getElementById("abajo").className = "regreso";
            document.getElementById("logo").className = "";
            document.getElementById("minimo").className = "";
        }
    }
});