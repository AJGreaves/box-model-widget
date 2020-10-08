
/**
 * Function to adjust padding on buttons when the slider
 * for padding is moved. Also updates number value to show
 * the current selected amount.
 */
function adjustPadding(){
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