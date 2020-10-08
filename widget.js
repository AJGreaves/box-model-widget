let buttons = document.getElementsByTagName('button');

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

let paddingInput = document.getElementById('padding');
paddingInput.addEventListener('input', adjustPadding);

/**
 * Function to adjust border on buttons when the slider
 * for border is moved. Also updates number value to show
 * the current selected amount.
 */
function adjustBorder(){
    // update border on buttons
    for (i = 0; i < buttons.length; i++){
        buttons[i].style.borderWidth = `${this.value}px`
    }
    // update value box in browser
    let borderVal = document.getElementById('border-val');
    borderVal.innerHTML = this.value; 
}

let borderInput = document.getElementById('border');
borderInput.addEventListener('input', adjustBorder);

/**
 * Function to adjust margin on buttons when the slider
 * for margin is margin. Also updates number value to show
 * the current selected amount.
 */
function adjustMargin(){
    // update margin on buttons
    for (i = 0; i < buttons.length; i++){
        buttons[i].style.margin = `${this.value}px`
    }
    // update value box in browser
    let marginVal = document.getElementById('margin-val');
    marginVal.innerHTML = this.value; 
}

let marginInput = document.getElementById('margin');
marginInput.addEventListener('input', adjustMargin);