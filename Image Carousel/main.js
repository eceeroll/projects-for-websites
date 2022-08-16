var index = 0;

show_slide = (i) => {
  //increment/decrement slide index
  index += i;

  //grab all the images
  var images = document.getElementsByClassName("image");
  //grab all the dots
  var dots = document.getElementsByClassName("dot");

  // hide all the images
  for (i = 0; i < images.length; i++) 
    images[i].style.display = "none";
  
  // remove the active class from the dot
  for (i = 0; i < dots.length; i++) 
    dots[i].className = dots[i].className.replace(" active", "");
  
   // if user clicks the next button when at the last photo 
  if (index > images.length - 1) 
    index = 0 ;
  
  // if user clicks prev button when at the first photo
  if (index < 0)
    index = images.length - 1;

  // only display the image that's next or previous
  images[index].style.display = "block";
  // only make the current dot active
  dots[index].className += " active";

}

window.addEventListener("onload", show_slide(index));
       