
//                          image editor
let imgBtn = document.querySelector('#inputBtn');
let canvas = document.querySelector('canvas');
let downloadBtn = document.querySelector('#download');
let image = new Image();
let style;
let ctx;
let filterValue;


//console.log()

//let hue = document.querySelector('#hue-rotate');

canvas.width = window.innerWidth / 1.2;
canvas.height = window.innerHeight / 3;

imgBtn.onchange = function (e) {
    let reader = new FileReader();

    reader.onload = function () {
         let fileName = reader.result;
        image.src = fileName;
        
        ctx = canvas.getContext("2d");
        image.onload = function () {
            myFilters();

            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

            if (!(ctx.drawImage(image, 0, 0, canvas.width, canvas.height))) {

                brightness.addEventListener('input', myFilters);
                contrast.addEventListener('input', myFilters);
                saturate.addEventListener('input', myFilters);
                grayscale.addEventListener('input', myFilters);
                invert.addEventListener('input', myFilters);
                opacity.addEventListener('input', myFilters);
                sepia.addEventListener('input', myFilters);

                downloadBtn.addEventListener('click', create);
            }
        }
    }
    reader.readAsDataURL(e.target.files[0]);
    
}



function create() {

    let canvas1 = document.createElement('canvas');
    let ctx1 = canvas1.getContext("2d");

    canvas1.width = image.width;
    canvas1.height = image.height;
    ctx1.filter = ctx.filter;
    ctx1.drawImage(image, 0, 0, image.width, image.height);
    canvas1.toBlob(function (blob) {
        let link = document.createElement('a');
        let url = URL.createObjectURL(blob);
        link.href = url;
        link.download = `editor_.jpeg`;
        link.click();

    }, "image/jpeg", 1.0);
}
// downloadBtn.addEventListener('click', create);

function myFilters() {
    let brightness = document.querySelector('#brightness').value;
    let contrast = document.querySelector('#contrast').value;
    let saturate = document.querySelector('#saturate').value;
    let grayscale = document.querySelector('#grayscale').value;
    let invert = document.querySelector('#invert').value;
    let opacity = document.querySelector('#opacity').value;
    let sepia = document.querySelector('#sepia').value;
    let blur = document.querySelector('#blur').value;
    let hue = document.querySelector('#hue-rotate').value;

    canvas.style.filter =
        // `brightness(${brightness}%)` +
        //     `contrast(${contrast}%)` +
        //     `saturate(${saturate}%)` +
        //     `grayscale(${grayscale}%)` +
        //     `invert(${invert}%)` +
        `opacity(${opacity}%)`
        //     `sepia(${sepia}%)` +
        //     `blur(${blur}px)` +
        //     `hue-rotate( ${hue}deg)`
        ;

    ctx.filter = `brightness(${brightness}%)` +
        `contrast(${contrast}%)` +
        `saturate(${saturate}%)` +
        `grayscale(${grayscale}%)` +
        `invert(${invert}%)` +
        `opacity(${opacity}%)` +
        `sepia(${sepia}%)` +
        `blur(${blur}px)` +
        `hue-rotate(${hue}deg)`;

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
}
// brightness.addEventListener('input', myFilters)