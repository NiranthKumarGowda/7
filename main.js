var canvas=new fabric.Canvas("myCanvas")
block_image_width=30
block_image_height=30
player_x=10
player_y=10
var player_object=""
var block_image_object=""
function player_update(){
    fabric.Image.fromURL("player.png",function (IMG){
        player_object=IMG
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(150)
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object)
    })
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function (IMG){
        block_image_object=IMG
        block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height)
        block_image_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_image_object)
    })
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode
    if (e.shiftKey && keypressed=='80') {
      console.log("p&shift is pressed together")  
      block_image_width=block_image_width+10
      block_image_height=block_image_height+10
      document.getElementById("current_width").innerHTML=block_image_width
      document.getElementById("current_height").innerHTML=block_image_height
    }
    if (e.shiftKey && keypressed=='77') {
        console.log("m&shift is pressed together")  
        block_image_width=block_image_width-10
        block_image_height=block_image_height-10
        document.getElementById("current_width").innerHTML=block_image_width
        document.getElementById("current_height").innerHTML=block_image_height
      }
      if (keypressed=='38') {
         up()
      }
      if (keypressed=='40') {
        down()
     }
     if (keypressed=='37') {
        left()
     }
     if (keypressed=='39') {
        right()
     }
     if (keypressed=='67') {
        new_image("cloud.jpg")
     }
     if (keypressed=='68') {
        new_image("dark_green.png")
     }
     if (keypressed=='71') {
        new_image("ground")
     }
     if (keypressed=='76') {
        new_image("light_green.png")
     }
     if (keypressed=='82') {
        new_image("roof.jpg")
     }
     if (keypressed=='84') {
        new_image("trunk.jpg")
     }
     if (keypressed=='85') {
        new_image("unique.png")
     }
     if (keypressed=='87') {
        new_image("wall.png")
     }
     if (keypressed=='89') {
        new_image("yellow_wall.png")
     }
   }
   function up(){
      if (player_y>=0) {
         player_y=player_y-block_image_height
         canvas.remove(player_object)
         player_update()
      }
   }
   function down(){
      if (player_y<=600) {
         player_y=player_y+block_image_height
         canvas.remove(player_object)
         player_update()
      }
   }
   function left(){
      if (player_x>=0) {
         player_x=player_x-block_image_width
         canvas.remove(player_object)
         player_update()
      }
   }
   function right(){
      if (player_x<=1000) {
         player_x=player_x+block_image_width
         canvas.remove(player_object)
         player_update()
      }
   }