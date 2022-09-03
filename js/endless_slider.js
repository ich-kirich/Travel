const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const outImgs = document.querySelectorAll('.pictures')
const pageWidth = document.documentElement.scrollWidth
const outPagination = document.querySelectorAll('.pagination div')
let currentPosition = 0

if(pageWidth <= 390){ 
    let i = 0
    nextBtn.onclick = () =>{
        if(i < outImgs.length - 1){
            i++
        }else{
            i = 0
        }
        outImgs[currentPosition].classList.add('right');
        outImgs[i].classList.remove('left');
        if(i === 2){
            outImgs[0].classList.remove('right');
            outImgs[0].classList.add('left');
        }
        else {
            outImgs[i + 1].classList.remove('right');
            outImgs[i + 1].classList.add('left');
        }
        outPagination[i].classList.add('point-choose');
        outPagination[currentPosition].classList.remove('point-choose');
        currentPosition = i
    }
    
    prevBtn.onclick = () =>{
        if(i > 0){
            i--
        }else{
            i = outImgs.length-1 
        }
        outImgs[i].classList.remove('right');
        outImgs[currentPosition].classList.add('left');
        if(i === 0){
            outImgs[2].classList.remove('left');
            outImgs[2].classList.add('right');
        }
        else {
            outImgs[i - 1].classList.remove('left');
            outImgs[i - 1].classList.add('right');
        }
        outPagination[i].classList.add('point-choose');
        outPagination[currentPosition].classList.remove('point-choose');
        currentPosition = i
    }
}
else{
    let i = 0
    nextBtn.onclick = () =>{
        if(i < outImgs.length - 1){
            i++
        }else{
            i = 0
        }
        outImgs[currentPosition].classList.add('right');
        outImgs[i].classList.remove('left');
        if(i === 2){
            outImgs[0].classList.remove('right');
            outImgs[0].classList.add('left');
        }
        else {
            outImgs[i + 1].classList.remove('right');
            outImgs[i + 1].classList.add('left');
        }
        outPagination[i].classList.add('point-choose');
        outPagination[currentPosition].classList.remove('point-choose');
        currentPosition = i
    }
    
    prevBtn.onclick = () =>{
        if(i > 0){
            i--
        }else{
            i = outImgs.length-1 
        }
        outImgs[i].classList.remove('right');
        outImgs[currentPosition].classList.add('left');
        if(i === 0){
            outImgs[2].classList.remove('left');
            outImgs[2].classList.add('right');
        }
        else {
            outImgs[i - 1].classList.remove('left');
            outImgs[i - 1].classList.add('right');
        }
        outPagination[i].classList.add('point-choose');
        outPagination[currentPosition].classList.remove('point-choose');
        currentPosition = i
    }
}