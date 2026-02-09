const headders = document.querySelectorAll("[data-name='perfume-title']");
const button = document.querySelector('[data-modal-button]');

headders.forEach(function (item){
    item.addEventListener('click', showContent ); 
})
function showContent (){
this.nextElementSibling.classList.toggle('hidden');
}

 

   
 
