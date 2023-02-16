// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.



// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let imageUrl = document.querySelector(".display-image");
let songName = document.querySelector("display-song");
let artist = document.querySelector(".display-artist");
let songLink = document.querySelector(".display-link");

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

// let songList = ["Hype Boy", "Ditto", "Spring Day", "Tell Me", "Hip", "OMG"];

// let artistList = ["NewJean", "BTS", "Wonder Girls", "Mamamoo"];

// let imageUrlList = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ihKX1zLMq3gvL9DuLkeQ_YJkQ8E-XRczXg&usqp=CAU", 
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejfjwegUwfc8S8BC0i8fsT1ey8YDdgfg0LQ&usqp=CAU", "https://thebiaslistcom.files.wordpress.com/2019/11/mamamoo-hip.jpg",
// "https://m.media-amazon.com/images/M/MV5BN2ZkYzkzYmUtNzFjOC00YTRmLWIwYjEtMWZiYjI4Mzg4ZTJjXkEyXkFqcGdeQXVyNjk5NzY4OTk@._V1_.jpg", "https://upload.wikimedia.org/wikipedia/en/e/ef/Wonder_Girls_-_The_Wonder_Years_%28album_cover%29.jpg", "https://images.genius.com/04b543b45bb91449afcf59d62ec55be8.1000x1000x1.jpg"];

// let songLinkList = [
//   "https://www.youtube.com/watch?v=11cta61wi0g ", "https://www.youtube.com/watch?v=pSUydWEqKwE",       "https://www.youtube.com/watch?v=KhTeiaCezwM", "https://www.youtube.com/watch?v=xEeFrLSkMm8", "https://www.youtube.com/watch?v=BlHv3BbBv6A", "https://www.youtube.com/watch?v=K9_VFxzCuQ0"
// ];



//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.

//did it

// task 12: create an object for each of your songs.

let song1 = {
  name: "Hype Boy",
  artist: "NewJean",
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ihKX1zLMq3gvL9DuLkeQ_YJkQ8E-XRczXg&usqp=CAU", 
  link: "https://www.youtube.com/watch?v=11cta61wi0g"
}

let song2 = {
  name:"Ditto",
  artist:"NewJean",
  imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejfjwegUwfc8S8BC0i8fsT1ey8YDdgfg0LQ&usqp=CAU",
  link:"https://www.youtube.com/watch?v=pSUydWEqKwE"
}

let song3 = {
  name:"Hip",
  artist:"Mamamoo",
imageUrl:"https://thebiaslistcom.files.wordpress.com/2019/11/mamamoo-hip.jpg",
  link:"https://www.youtube.com/watch?v=KhTeiaCezwM"
}

let song4 = {
  name:"Spring Day",
  artist:"BTS",
  imageUrl:"https://m.media-amazon.com/images/M/MV5BN2ZkYzkzYmUtNzFjOC00YTRmLWIwYjEtMWZiYjI4Mzg4ZTJjXkEyXkFqcGdeQXVyNjk5NzY4OTk@._V1_.jpg",
  link:"https://www.youtube.com/watch?v=xEeFrLSkMm8"
}

let song5 = {
  name:"Tell Me",
  artist:"Wonder Girl",
imageUrl:"https://upload.wikimedia.org/wikipedia/en/e/ef/Wonder_Girls_-_The_Wonder_Years_%28album_cover%29.jpg",
  link:"https://www.youtube.com/watch?v=BlHv3BbBv6A"
}

let song6 = {
  name:"Gone",
  artist:"Rose",
  imageUrl:"https://images.genius.com/04b543b45bb91449afcf59d62ec55be8.1000x1000x1.jpg",
  link:"https://www.youtube.com/watch?v=K9_VFxzCuQ0"
}

// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

let song = [song1, song2, song3, song4, song5, song6];

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
