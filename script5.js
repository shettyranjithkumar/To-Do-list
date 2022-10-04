let btn1=document.getElementById('btn');
let input=document.getElementById('input');
let main=document.querySelector('.main2');
//let trash=document.querySelector('.fa-sharp fa-solid fa-trash');
 btn1.addEventListener('click',()=>{
   if(input.value==0){
    alert("Please Enter any task!");
   }
   else{
      let newItem=document.createElement('div');
      newItem.classList.add('sub');
      newItem.innerHTML=` 
        <p class="task"> ${input.value} </p>
        <i class="fa-sharp fa-solid fa-trash" id="trash"></i> `
        console.log(newItem) 
       main.appendChild(newItem);
        input.value= '';
   }
   
}); 
input.addEventListener('input',()=>{
    if(input.value !=0){
      btn1.classList.add('active');
    }
    else{
      btn1.classList.remove('active');
    }
    
}); 
main.addEventListener('click',(e)=>{
  if(e.target.classList.contains('fa-trash')){
    e.target.parentElement.remove();
  }
})
