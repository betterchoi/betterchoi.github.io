const counts = document.querySelectorAll('.count')
const speed=80
counts.forEach((row)=>{
   function upData(){
         const target=Number(row.getAttribute('data-target'))
         const count=Number(row.innerText)
         const inc =target/speed
         if(count<target){
            row.innerText=Math.floor(inc+count)
            setTimeout(upData,1)
         }
         else{
            row.innerText=target
         }
      }
      upData()
})