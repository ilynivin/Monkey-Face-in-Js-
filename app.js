const closedface = document.querySelector('.closed');
const openface = document.querySelector('.open');


// Emoji monkey closed EventListner
closedface.addEventListener('click' ,() =>{
    if(openface.classList.contains('open')){
        openface.classList.add('active');
        closedface.classList.remove('active');
    }
});

// Emoji Monkey open Event listner 
openface.addEventListener('click' , ()=> {
    if(closedface.classList.contains('closed'));
    closedface.classList.add('active')
    openface.classList.remove('active');
});