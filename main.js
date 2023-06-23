const menuItems = document.querySelectorAll('.textologo a');
menuItems.forEach(function(item)   {
       item.addEventListener('click', function(e) {
               const currentItem = document.querySelector('.textologo a.active');
               currentItem.classList.remove('active');
               e.target.classList.add('active');
       });
    });     
       
     /* Prueba js*/      
    console.log("¡El archivo JavaScript se ha vinculado correctamente!");


