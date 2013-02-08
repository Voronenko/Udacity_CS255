

var image;

setup = function() {
	var body = document.getElementById('body');
	var canvas = document.createElement('canvas');

	var context = canvas.getContext('2d');
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	body.appendChild(canvas);

        image = document.createElement('image');
        // by quizz answer new Image();
        image.onload = onImageLoad;
        image.src = '/media/js/standalone/libs/gamedev_assets/ralphyrobot.png';

        // append is not used in quizz answer.
        body.appendChild(image);
	// Create a new image with a src of "/media/js/standalone/libs/gamedev_assets/ralphyrobot.png" and onload of onImageLoad
	// YOUR CODE HERE
};

onImageLoad = function(){
	// Use the console.log function to print a statement to the browser console.
	// This will print once the image has been downloaded.
	// YOUR CODE HERE
        console.log('Image loaded');
};

setup();
