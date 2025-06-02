
//  date: 2 jun 2025
let exName;
let m;

{
//                          image editor

let imgBtn = document.querySelector('#inputBtn');

let canvas = document.querySelector('canvas');

let downloadBtn = document.querySelector('#download');

let image = new Image();

let style;

let ctx;

let filterValue;

let reset = document.querySelector('#reset');

let imgName;


//console.log()


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
                
                reset.onclick= function(){
                    Reset();
                    ctx.filter="none";
                    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                };
                
                downloadBtn.addEventListener('click', create);

            }

        }

    }

    reader.readAsDataURL(e.target.files[0]);
    imgName = imgBtn.value.split('\\')[2];
    exName = imgName.split(".");
    
//console.log(`exname${exName}`)
}







function create() {

    
    console.log(exName[0],exName[1])
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

        link.download = `editor_${exName[0]}`;

        link.click();
    }, `image/${exName[1]}`, 1.0);

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

        `hue-rotate(${hue}deg)`
    											;
    
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
;
    
}

// brightness.addEventListener('input', myFilters)


function Reset(){
    let brightness = document.querySelector('#brightness').value = 100;

    let contrast = document.querySelector('#contrast').value = 100;

    let saturate = document.querySelector('#saturate').value = 100;

    let grayscale = document.querySelector('#grayscale').value = 0;

    let invert = document.querySelector('#invert').value = 0;

    let opacity = document.querySelector('#opacity').value = 100;

    let sepia = document.querySelector('#sepia').value = 0;

    let blur = document.querySelector('#blur').value = 0;

    let hue = document.querySelector('#hue-rotate').value = 0;
    
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}

//console.log(brightness)
    
                   }



/*

//  first

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

*/
