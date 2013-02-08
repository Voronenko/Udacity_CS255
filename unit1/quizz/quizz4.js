var canvas = null;
var context = null;
var assets = ['/media/js/standalone/libs/gamedev_assets/robowalk/robowalk00.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk01.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk02.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk03.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk04.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk05.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk06.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk07.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk08.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk09.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk10.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk11.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk12.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk13.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk14.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk15.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk16.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk17.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk18.png'
			 ];
var frames = [];
var framesloadingcounter= 0;

var onImageLoad = function(){
        framesloadingcounter++;
	console.log("IMAGE!!!");
};

var setup = function() {
	body = document.getElementById('body');
	canvas = document.createElement('canvas');

	context = canvas.getContext('2d');
	
	canvas.width = 100;
	canvas.height = 100;

	body.appendChild(canvas);

        framesloadingcounter = 0; 
        for (var i=0;i<assets.length;i++){
          var theimg = new Image();
          theimg.onload = onImageLoad;
          theimg.src = assets[i];
          frames.push(theimg);   
        }  


        window.setInterval(animate,1000/30);
	// Load each image URL from the assets array into the frames array 
	// in the correct order.
	// Afterwards, call setInterval to run at a framerate of 30 frames 
	// per second, calling the animate function each time.
	// YOUR CODE HERE
};


var currindex=0;
var animate = function(){
       if (framesloadingcounter!==100) return; // still loading
       context.drawImage(frames[currindex],0,0);
       currindex++;
       currindex = currindex % frames.length; 
	// Draw each frame in order, looping back around to the 
	// beginning of the animation once you reach the end.
    // Draw each frame at a position of (0,0) on the canvas.
  
    // Try your code with this call to clearRect commented out
    // and uncommented to see what happens!
    //
    //context.clearRect(0,0,canvas.width, canvas.height);
  
	// YOUR CODE HERE
};





setup();
