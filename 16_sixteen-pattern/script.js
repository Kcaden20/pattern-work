const fModule = document.getElementsByClassName('f-mod');
const fWrap = document.getElementsByClassName('f-piece');
const fPiece = fWrap[0];

const sModule = document.getElementsByClassName('s-mod');
const sWrap = document.getElementsByClassName('s-piece');
const sPiece = sWrap[0];

addEventListener("load", (event) => {
    if(document.body.clientWidth >= 1400) {
        for(let i = 0; i <= 1000; i++) {
            let newF = fPiece.cloneNode(true);
            fModule[0].appendChild(newF);

            let newS = sPiece.cloneNode(true);
            sModule[0].appendChild(newS);
        }
    }
});

var onresize = function() {
    width = document.body.clientWidth;
    height = document.body.clientHeight;

    if(width >= 1400 && fModule[0].childElementCount < 1000) {
        for(let i = 0; i <= 10; i++) {
            let newF = fPiece.cloneNode(true);
            fModule[0].appendChild(newF);

            let newS = sPiece.cloneNode(true);
            sModule[0].appendChild(newS);
        }
    }

    console.log(fModule[0].childElementCount);
 }
 window.addEventListener("resize", onresize);
