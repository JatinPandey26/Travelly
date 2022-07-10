let radioBtns = document.querySelectorAll('.radioBtnDiv div');
let largeBoxImg = document.querySelectorAll('.largeBoxImg');
let packages = document.querySelector('.packages')
let places = document.querySelector('.places')
let contact = document.querySelector('.contact')
let review = document.querySelector('.ReviewBox')

let prevBtn;
let prevImg;
radioBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        if(prevBtn!= undefined) prevBtn.classList.remove('clicked')
        if(prevImg!=undefined) prevImg.classList.remove('currImg')
        btn.classList.add('clicked')
        let btnNumber = btn.getAttribute('btnNumber');
        if(btnNumber == 1){ largeBoxImg[0].classList.add('currImg'); prevImg = largeBoxImg[0]}
        else if(btnNumber == 2) { largeBoxImg[1].classList.add('currImg'); prevImg = largeBoxImg[1]}
        else if(btnNumber == 3) { largeBoxImg[2].classList.add('currImg'); prevImg = largeBoxImg[2]}
        
        
        prevBtn = btn;
    })
})

let imgPos = 0;
let prevSelectedBtn;
setInterval(() => {
    let idx = Math.abs(imgPos)/100;
    if(prevImg != undefined) prevImg.classList.remove('currImg')
    largeBoxImg[idx].classList.add('currImg');
    prevImg = largeBoxImg[idx]
    if(prevBtn != undefined) prevBtn.classList.remove('clicked')
    
    if(imgPos==0) {
        radioBtns[0].classList.add('clicked');
        prevBtn = radioBtns[0];
    }
    else if(imgPos==-100) {
        radioBtns[1].classList.add('clicked');
        prevBtn = radioBtns[1];
    }
    else if(imgPos==-200) {
        radioBtns[2].classList.add('clicked');
        prevBtn = radioBtns[2];
    }
    imgPos -= 100;
    imgPos %= 300;
}, 4000);


packages.addEventListener('click',()=>{
    location.assign('pakages.html')
})

places.addEventListener('click',()=>{
    location.assign('places.html')
})

contact.addEventListener('click',()=>{
    location.assign('contact.html')
})

review.addEventListener('click',()=>{
    location.assign('reviews.html')
})