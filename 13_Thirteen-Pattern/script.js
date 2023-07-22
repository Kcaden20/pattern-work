var count = 0;
var inverval_timer;

// Running
setTimeout(() => { if(count<= 30) {
    inverval_timer = setInterval(function() { 
        i();
    }, 500);    
} else {
    stop_timer()
}}, 16000);

setTimeout(() => { if(count >= 0) {
    o();
} else {
    stop_timer()
}

}, 36000)




// Function Storage
function i(){
	items = document.getElementsByClassName("scan-line");
    if(count < items.length)
       	items[count++].classList.remove("hidden");
}

function o(){
    items = document.getElementsByClassName("scan-line");
    if(count <= items.length)
       	items[count--].classList.add("hidden");
}

function stop_timer() {
    clearInterval(inverval_timer); 
}
