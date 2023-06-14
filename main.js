canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.
rover_width=100;
rover_height=90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Crea la función "add()"
 {
    background_imgTag=new Image();
    background_imgTag.oonload=uploadBackground;
    background_imgTag.src=background_image;
    rover_imgTag=new Image();
    rover_imgTag.oonload=uploadrover;
    rover_imgTag.src=rover_image;
  }
	                                  //Define la variable con una nueva imagen
	                                     // Define una función para cargar esta variable
	                                     // Carga la imagen

                                         //Define la variable con una nueva imagen
	                                     // Define una función para cargar esta variable
	                                     // Carga la imagen

//Crea una función "uploadBackground()".
      function upLoadBackground()
      {
        ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);

      }                        
                                         //Dibuja la imagen de fondo

//Crea una función "uploadrover()".
function upLoadrover()
      {
        ctx.drawImage(rover_imgTag,rover_x,rover_y,rover.width, rover.height);

      }             

                                        //Dibuja la imagen del explorador


window.addEventListener(                            );
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
		
    


     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
		




    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
}

function up(){

}
function down(){
	
}
function right(){
	
}
function left(){
	
}



