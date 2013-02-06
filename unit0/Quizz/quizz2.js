

parseJSON = function (weaponJSON) {
    parsedJSON = JSON.parse(weaponJSON);

    return parsedJSON['frames']['chaingun_impact.png']['spriteSourceSize']['x'];
};

// Create a new XMLHttpRequest object, then use
// its open method to to define the request that
// will be sent. The parameters to 'open' are:
//
// 1) The HTTP method to use, in our case we want
//    "GET".
// 2) The resource to request, in this case we're
//    interested in "/media/js/standalone/libs/gamedev_assets/weapon.json".
// 3) A boolean indicating whether or not we want
//    the request to be asynchronous or not. True
//    means we do want it to be asynchronous.
//
// After that, we want to define the onload method
// of the request to be our parsing function from
// before. We've included that code above for
// reference. A few things to keep in mind here:
//
// 1) This function can't take any parameters.
// 2) Instead of parsing 'weaponJSON', we'll need
//    to parse the 'responseText' member of the
//    request object.
// 3) You can access the request object inside
//    your 'onload' function by using the 'this'
//    keyword.
//
// Finally, we want to call the send method of the
// request object to actually send the request.
//
// YOUR CODE HERE
var weaponXHR = new XMLHttpRequest();

var setup = function() {
	// YOUR CODE HERE
    weaponXHR.onload = function(){
        parseJSON(this.responseText);
    };
    weaponXHR.open("GET", "/media/js/standalone/libs/gamedev_assets/weapon.json", true);
	weaponXHR.send();
};
