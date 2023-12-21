const body = document.body
const photos = [
  "./images/antic.jpg", 
  "./images/balls.jpg",
  "./images/black.jpg",
  "./images/cat.jpg", 
  "./images/dune.jpg",
  "./images/flowers.jpg",
  "./images/giraffe.jpg", 
  "./images/meadow.jpg" , 
  "./images/mountains.jpg",
  "./images/needle.jpg",
  "./images/ocean.jpg" ,
  "./images/puffin.jpg", 
  "./images/red.jpg"
]

const changeBackground = () =>{
  const randomNumber = Math.floor(Math.random() * photos.length);
  newBackground = photos[randomNumber]
  body.style.backgroundImage = `url(${newBackground})`;
}


setInterval(() => {
  changeBackground()
}, 15000)

changeBackground()