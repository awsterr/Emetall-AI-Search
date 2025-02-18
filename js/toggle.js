// toggle
const toggleBtns = document.querySelectorAll('.toggle div')
toggleBtns.forEach(btn=>{
   btn.addEventListener('click',()=>{
      toggleBtns.forEach(btn=>{
         btn.classList.remove('active')
      })
      btn.classList.add('active')
   })
})
