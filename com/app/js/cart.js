  jQuery(document).ready(function() {


     /* Scroll seccion Mujer/Hombre */
     jQuery("#mujer").click(function() {

         jQuery('html, body').animate({
             scrollTop: jQuery("#her").offset().top
         }, 500);

         jQuery("#mujer").addClass("active");
         if (jQuery("#hombre").hasClass("active")) {
             jQuery("#hombre").removeClass("active");
         }

     });


     jQuery("#hombre").click(function() {

         jQuery('html, body').animate({
             scrollTop: jQuery("#him").offset().top
         }, 500);
         jQuery("#hombre").addClass("active");
         if (jQuery("#mujer").hasClass("active")) {
             jQuery("#mujer").removeClass("active");
         }

     });
     /* Fin  Scroll seccion Mujer/Hombre */


     /* visualizar carrito */
     jQuery(".cart").click(function() {

         jQuery(".cantidad-carro").toggleClass("active");
         if (jQuery(".cart").hasClass("active")) {
             jQuery(this).animate({
                 height: this.getElementsByClassName("cantidad-carro")[0].offsetHeight + "px"
             }, 500);
         }

     });
     jQuery(window).resize(function() {
         if (jQuery(window).width() < 760) {
             jQuery(".cantidad-carro.active").css("width", jQuery(window).width() + "px");

         }
     });
     /* Fin visualizar carrito */



     /* Variables para controlar carrito y suma*/
     variables = {
         btn: document.querySelectorAll(".btn"),
         precioTotal: document.querySelectorAll(".count-prod"),
         cantidadItems: document.querySelectorAll(".cnt-item"),
         almacenarOperacion: [],
         almacenarItem: [],
         item: function(id, valor) {
             var id = id;
             var found = variables.almacenarItem.some(function(e) {/*Si existe (actualizar)*/
                 if (e.id === id) {
                     e.cantidad++;
                     jQuery("#itm ." + e.id + " .cantid").html("x" + e.cantidad + "");
                 }
                 return e.id === id;
             });
             if (!found) {/*Si NO existe (crear)*/
                 variables.almacenarItem.push({
                     id: id,
                     cantidad: 1
                 });
                 jQuery("#itm").append(valor);

             }

         },
         booleanIgual: false,
         almacenResultado: 0
     }
     /* Fin variables*/



     /*
     iniciarBtn : le añadimos event listener para que al clicar al button sume los items
     operar : hace la suma total
     */
     calcu = {
         iniciarBtn: function() {
             for (var i = 0; i < variables.btn.length; i++) {
                 variables.btn[i].addEventListener("click", calcu.presionar);
             }
         },
         presionar: function(e) {
         	jQuery("#empty").addClass("notReallyEmpty");/* hace desaparecer el texto de el carrito cuando esta con items*/
             var t = "<div class='itm-info " + e.path[1].id + "'>" + e.path[1].getElementsByClassName(e.path[1].id)[0].innerHTML + "<div class='cantid'>x1</div></div>";
             variables.item(e.path[1].id, t);
             variables.almacenarOperacion.push(e.path[1].getElementsByClassName("price")[0].innerHTML);
             calcu.operar(variables.almacenarOperacion);
         },
         operar: function(dato) {
             variables.precioTotal[0].innerHTML = eval(dato.join('+')) + "&euro;";
             variables.cantidadItems[0].innerHTML++;
         }
     }
     calcu.iniciarBtn();

 });