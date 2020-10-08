function adjustPadding(event){
    // update padding on buttons
    for (i = 0; i < buttons.length; i++){
        buttons[i].style.padding = `${this.value}px`
    }

    // update value box in browser
    let paddingVal = document.getElementById('padding-val');
    paddingVal.innerHTML = this.value; 
}

let buttons = document.getElementsByTagName('button');

let paddingInput = document.getElementById('padding');
paddingInput.addEventListener('input', adjustPadding);