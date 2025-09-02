// Waits for any activity from the page
self.onmessage = function(e) {
    if(e.data !== undefined) {
console.log(e);
        // Do work 
        var total = e.data + ' World';
        // Posting back to the page
        self.postMessage(total)
    }
}
// Terminate with: worker.terminate()