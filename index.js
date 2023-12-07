image_array = [
    '01.jpg','02.jpg','03.jpg','04.jpg','05.jpg',
    '06.jpg','07.jpg','08.jpg','09.jpg','10.jpg',
    '11.jpg','12.jpg','13.jpg','14.jpg','15.jpg',
    '16.jpg','17.jpg', '18.jpg', '19.jpg', '20.jpg',
    '21.jpg'
]

function randomShuffle(){
    // get random index
    randomIndex = Math.floor(Math.random()* image_array.length);

    // get image at the random index
    selected_image = image_array[randomIndex]

    //display the image
    document.getElementById('imageShower').src = './imageP/${selected_image}'
}