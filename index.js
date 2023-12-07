// Get all the images
imageL_array = [
    '01.jpg','02.jpg','03.jpg','04.jpg','05.jpg',
    '06.jpg','07.jpg','08.jpg','09.jpg','10.jpg',
    '11.jpg','12.jpg','13.jpg','14.jpg','15.jpg',
    '16.jpg', '17.jpg', '18.jpg', '19.jpg','20.jpg',
    '21.jpg'
]

imageR_array = [
    'a.jpg', 'b.jpg','c.jpg','d.jpg'
]
  
  function randomShuffleL(){
    // Get a random index
    random_index = Math.floor(Math.random() * imageL_array.length);
  
    // Get an image at the random_index
    selected_image = imageL_array[random_index]
  
    // Display the image
    document.getElementById('image_shower').src = `./imageL/${selected_image}`
  }

  function randomShuffleR(){

    random_indexR = Math.floor(Math.random() * imageR_array.length);
  
    selected_imageR = imageR_array[random_indexR]
  
    document.getElementById('image_landscape').src = `./imageR/${selected_imageR}`
  }
