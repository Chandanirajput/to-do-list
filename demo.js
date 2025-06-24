let item =document.getElementById("item");
let n1 =document.getElementById("new");

item.addEventListener('keyup',

    function(event){
        if(event.key=="Enter"){
addfun(this.value);
this.value="";
    }
}
    )
    const addfun =(item)=>{
        let li     = document.createElement("li");
        li.innerHTML=`${item}       <i class="fa-solid fa-xmark fa-l" style="color: #ff0550;"></i>`;
       n1.appendChild(li);
        let icon= li.querySelector('i');
      icon.addEventListener('click',function(){
        li.remove();
})
   li.addEventListener('click',function(){
        li.style.textDecoration='line-through';
          li.innerHTML=`${item}      <i class="fa-regular fa-circle-check fa-lg" style="color: #74C0FC;"></i>`

       });

       


        
       

   
        

        n1.appendChild(li);
    }

    
    
