let textarea = document.createElement("textarea");
textarea.className = "textarea";
document.body.prepend(textarea);

let div = document.createElement("div");
div.className = "keyboard";
document.body.append(div);


const keyboard = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 
                  97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 
                  122, 120, 99, 118, 98, 110, 109, 44, 46, 47];


document.onkeypress = function(event) {
    // console.log(event);
    keyboard.push(event.keyCode);
    console.log(keyboard);
}
function init() {
    let out = '';
    for(let i = 0; i < keyboard.length; i++) {
        if(i == 12 || i == 24) {
            out += '<div class = "clearFlow"</div>'
        }
        out +=  '<div class="key" data-key="' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</div>';    // .k-key
    }
    document.querySelector('.keyboard').innerHTML = out;
}
init();

document.onkeypress = function(event) {
    // console.log(event.code);    //keyA
    // console.log(event.keyCode); //97

    const allElements = Array.from(document.querySelectorAll('.keyboard .key'));
    allElements.forEach(node => {
        node.classList.remove('active');
    });
    
    document.querySelector('.keyboard .key[data-key="' + event.keyCode +'"]').classList.add('active');
}