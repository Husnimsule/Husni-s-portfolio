let openMenu = document.getElementById('open')

function showMenu(){
    openMenu.style.right = "0px"
}
function hideMenu(){
    openMenu.style.right = "-400px"
}
$('.smoothscroll').on('click', function (e) {
	 	
    e.preventDefault();

  var target = this.hash,
   $target = $(target);

   $('html, body').stop().animate({
      'scrollTop': $target.offset().top
 }, 800, 'swing', function () {
     window.location.hash = target;
 });

 });  
