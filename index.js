// Get all the images
imageL_array = [
    '01.jpg','02.jpg','03.jpg','04.jpg','05.jpg',
    '06.jpg','07.jpg','08.jpg','09.jpg','10.jpg',
    '11.jpg','12.jpg','13.jpg','14.jpg','15.jpg',
    '16.jpg', '17.jpg', '18.jpg', '19.jpg','20.jpg',
    '21.jpg', '22.jpg','23.jpg','24.jpg','25.jpg',
    '26.jpg','27.jpg','28.jpg','29.jpg','30.jpg',
    '31.jpg','32.jpg','33.jpg','34.jpg','35.jpg',
    '36.jpg', '37.jpg', '38.jpg', '39.jpg','40.jpg',
    '41.jpg','42.jpg','43.jpg','44.jpg','45.jpg',
    '46.jpg', '47.jpg', '48.jpg', '49.jpg','50.jpg',
    '51.jpg'
]

imageR_array = [
    'a.jpg', 'b.jpg','c.jpg','d.jpg','e.jpg', 'f.jpg',
    'g.jpg','h.jpg','i.jpg', 'j.jpg','k.jpg','l.jpg',
    'm.jpg', 'n.jpg','o.jpg','p.jpg','q.jpg', 'r.jpg',
    's.jpg','t.jpg','u.jpg','v.jpg','w.jpg','x.jpg'
]

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  
 console.log( mouseY, mouseX)
  
 document.querySelector('.rounded').style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}
  
  function randomShuffleL(){
    // Get a random index
    random_index = Math.floor(Math.random() * imageL_array.length);
    const Lnum= document.getElementById('imageLnum');
    Lnum.innerHTML = random_index ;
  
    // Get an image at the random_index
    selected_image = imageL_array[random_index]
  
    // Display the image
    document.getElementById('image_shower').src = `./imageL/${selected_image}`
  }

  function randomShuffleR(){

    random_indexR = Math.floor(Math.random() * imageR_array.length);
    const Rnum= document.getElementById('imageRnum');
    Rnum.innerHTML = random_indexR;

    selected_imageR = imageR_array[random_indexR]
    document.getElementById('image_landscape').src = `./imageR/${selected_imageR}`
  }

window.onload = function(){
    randomShuffleL()
    randomShuffleR()
  }
  
  window.addEventListener('mousemove', moveCursor)

 document.onkeyup= (event) => {

    if (event.code === "Space") {
      // Cancel the default action, if needed
      event.preventDefault();
      randomShuffleL()
      randomShuffleR()
    }

    if (event.code === "ArrowLeft") {
      // Cancel the default action, if needed
      event.preventDefault();
      randomShuffleL()
    }

    if (event.code === "ArrowRight") {
      // Cancel the default action, if needed
      event.preventDefault();
      randomShuffleR()
    }
    }
