const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const outImg = document.querySelector('.img')
const pageWidth = document.documentElement.scrollWidth
const outName = document.querySelector('.name')
const outPagination = document.querySelectorAll('.pagination div')
let currentPosition = 0

if(pageWidth <= 390){ 
    const art1 = 'img/ocean.jpg'
    const art2 = 'img/japan.jpg'
    const art3 = 'img/bridge.jpg'
    const name1 = 'SPAIN'
    const name2 = 'JAPAN'
    const name3 = 'USA'

    const images = [art1, art2, art3]
    const names = [name1, name2, name3]
    let i = 0
    outImg.innerHTML =`<img src=${images[i]}>`
    nextBtn.onclick = () =>{
        if(i < images.length - 1){
            i++
        }else{
            i = 0
        }
        outImg.innerHTML =`<img src=${images[i]}>`
        outName.textContent=`${names[i]}`;
        outPagination[i].classList.add('point-choose');
        outPagination[currentPosition].classList.remove('point-choose');
        currentPosition = i
    }
    
    prevBtn.onclick = () =>{
        if(i > 0 ){
            i--
        }else{
            i = images.length-1 
        }
        outImg.innerHTML =`<img src=${images[i]}>`
        outName.textContent=`${names[i]}`;
        outPagination[i].classList.add('point-choose');
        outPagination[currentPosition].classList.remove('point-choose');
        currentPosition = i
    }
}
else { 
    const art1 = 'img/ocean.jpg'
    const art2 = 'img/japan.jpg'
    const art3 = 'img/bridge.jpg'
    const name1 = 'SPAIN'
    const name2 = 'JAPAN'
    const name3 = 'USA'

    const images = [art1, art2, art3]
    const names = [name1, name2, name3]
    let i = 0
    outImg.innerHTML =`<img src=${images[i]}>`
    nextBtn.onclick = () =>{
        if(i < images.length - 1){
            i++
        }else{
            i = 0
        }
        outImg.innerHTML =`<img src=${images[i]}>`
        outName.textContent=`${names[i]}`;
    }
    
    prevBtn.onclick = () =>{
        if(i > 0 ){
            i--
        }else{
            i = images.length-1 
        }
        outImg.innerHTML =`<img src=${images[i]}>`
        outName.textContent=`${names[i]}`;
    }
}