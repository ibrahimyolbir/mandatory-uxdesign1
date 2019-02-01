const setActive = (el, active) => {
    const formField = el.parentNode.parentNode
    if (active) {
        formField.classList.add('mds-text-field--is-active')
    } else {
        formField.classList.remove('mds-text-field--is-active')
        el.value === '' ?
            formField.classList.remove('mds-text-field--is-filled') :
            formField.classList.add('mds-text-field--is-filled')
    }
}

[].forEach.call(
    document.querySelectorAll('.mds-text-field__input, .mds-text-field__textarea'),
    (el) => {
        el.onblur = () => {
            setActive(el, false)
        }
        el.onfocus = () => {
            setActive(el, true)
        }
    }
)


function disable() {
    let textFieldControl =  document.querySelectorAll(".mds-text-field__control");
    for (const bgcolor of textFieldControl) {
        bgcolor.style.background = "#d4d2d29e";    
    };

    document.getElementById("i1").disabled = true;
    document.getElementById("i2").disabled = true;

    let radioButtons = document.querySelectorAll(".mds-radio__input");
    for (let buttons of radioButtons){
        buttons.setAttribute("disabled", true);
    }   

    
    
    document.getElementById("id-name--1").disabled = true;
}
function enable() {
    
    let textFieldControl =  document.querySelectorAll(".mds-text-field__control");
    for (const bgcolor of textFieldControl) {
        bgcolor.style.background = "#fff    ";    
    };

    document.getElementById("i1").disabled = false;
    document.getElementById("i2").disabled = false;
    
    let radioButtons = document.querySelectorAll(".mds-radio__input");
    for (let buttons of radioButtons){
        buttons.removeAttribute("disabled", false);
    }   
    document.getElementById("id-name--1").disabled = false;
}