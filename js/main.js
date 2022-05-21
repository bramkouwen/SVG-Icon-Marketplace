(() => {

    console.log('Icon Chest');

    let theVectors = document.querySelectorAll('img');

    function logMyId() {
        debugger;

        console.log(this.id);
        
    }
 
    theVectors.forEach(vector => vector.addEventListener('click', logMyId));
})();