document.querySelectorAll('.img-container img').forEach(image =>{
    image.onclick =() =>{
    document.querySelector('.popupimg').style.display ='block';
    document.querySelector('.popupimg img').src= image.getAttribute('src');

}
});
document.querySelector('.popupimg span').onclick=() =>{
    document.querySelector('.popupimg').style.display ='none';
}
