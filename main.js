var displayedImage = document.querySelector
('.displayed-img');
var thumbBar = document.querySelector
('.thumb-bar');


/* Looping through images */
for (var i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    displayedImage.src = e.target.src;
  }
}
