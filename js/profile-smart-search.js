

// fetch searches

function getSmartSearches(){
   return [{
      id:104020199,
      date: 'Сегодня, в 16:02',
      results:[
         {
            name:'Труба профильная 50х50 ГОСТ 13663-8609',
            amount: '0,2 т.',
            after: ''
         },
         {
            name:'Балка 24 метра ГОСТ 13663-8609',
            amount: '8 шт.',
            after: 1
         },
         {
            name:'Арматура 32 А500С ГОСТ 34028',
            amount: '0,1 т.',
            after: ''
         },
         {
            name:'Труба профильная 50х50 ГОСТ 13663-8609',
            amount: '0,2 т.',
            after: ''
         },
         {
            name:'Балка 24 метра ГОСТ 13663-8609',
            amount: '8 шт.',
            after: 1
         },
         {
            name:'Арматура 32 А500С ГОСТ 34028',
            amount: '0,1 т.',
            after: ''
         },
         {
            name:'Труба профильная 50х50 ГОСТ 13663-8609',
            amount: '0,2 т.',
            after: ''
         },
         {
            name:'Балка 24 метра ГОСТ 13663-8609',
            amount: '8 шт.',
            after: 1
         },
         {
            name:'Арматура 32 А500С ГОСТ 34028',
            amount: '0,1 т.',
            after: ''
         },
      ]
   },{
      id:104020199,
      date: 'Сегодня, в 16:02',
      results:[
         {
            name:'Труба профильная 50х50 ГОСТ 13663-8609',
            amount: '0,2 т.',
            after: ''
         },
         {
            name:'Балка 24 метра ГОСТ 13663-8609',
            amount: '8 шт.',
            after: 1
         },
         {
            name:'Арматура 32 А500С ГОСТ 34028...',
            amount: '0,1 т.',
            after: ''
         }
      ]
   },{
      id:104020199,
      date: 'Сегодня, в 16:02',
      results:[
         {
            name:'Труба профильная 50х50 ГОСТ 13663-8609',
            amount: '0,2 т.',
            after: ''
         },
         {
            name:'Балка 24 метра ГОСТ 13663-8609',
            amount: '8 шт.',
            after: 1
         },
         {
            name:'Арматура 32 А500С ГОСТ 34028...',
            amount: '0,1 т.',
            after: ''
         }
      ]
   },{
      id:104020199,
      date: 'Сегодня, в 16:02',
      results:[
         {
            name:'Труба профильная 50х50 ГОСТ 13663-8609',
            amount: '0,2 т.',
            after: ''
         },
         {
            name:'Балка 24 метра ГОСТ 13663-8609',
            amount: '8 шт.',
            after: 1
         },
         {
            name:'Арматура 32 А500С ГОСТ 34028...',
            amount: '0,1 т.',
            after: ''
         }
      ]
   }]
}

function renderSmartSearches(){
   const ul = document.querySelector('.profile__searches__card-list')
   const resultList = getSmartSearches()

   resultList.forEach(result=>{
      const li = document.createElement('li')
      li.classList.add('profile__searches__card-item','mb_16')
      li.innerHTML = `<div class="profile__searches__card__body">
                              <div class="profile__searches__card__title">
                                 <p class="profile__searches__card__subtitle">${result.date}</p>
                                 <p class="profile__searches__card__name fs_16 fw_600 mt_8">Смарт-поиск id${result.id}</p>
                              </div>
                              <div class="profile__searches__card__results">
                                 <p class="profile__searches__card__subtitle mb_12">Вы искали:</p>
                                 <div class="profile__searches__card__wrapper "></div>
                                 <a href="" class="profile__searches__card__more">${result.results.length > 3 ? 'Всего '+ result.results.length+' позиций <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M4.50495 5.78413L0.205241 1.25827C-0.0684138 0.970375 -0.0684138 0.503596 0.205241 0.215836C0.478652 -0.071946 0.922098 -0.071946 1.19549 0.215836L5.00007 4.22052L8.80452 0.215953C9.07805 -0.0718293 9.52145 -0.0718292 9.79486 0.215953C10.0684 0.503736 10.0684 0.970491 9.79486 1.25839L5.49508 5.78424C5.35831 5.92814 5.17925 6 5.00009 6C4.82085 6 4.64165 5.928 4.50495 5.78413Z" fill="#2764E0"/></svg>':''}
                                 </a>
                              </div>
                           </div>
                           <a href="" class="profile__searches__card__refresh">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                 <path d="M13.2926 8.03062C12.8301 7.95977 12.4194 8.27893 12.3531 8.73394C12.1865 9.87678 11.6626 10.9195 10.8379 11.7498C8.73899 13.8629 5.32633 13.8612 3.22823 11.7498C1.13054 9.63748 1.13054 6.20047 3.22823 4.08858C4.01731 3.29457 5.01346 2.77688 6.12833 2.58842C6.60777 2.49681 7.12323 2.48098 7.65807 2.54199C8.39243 2.62709 9.07595 2.8724 9.6997 3.23256L8.62184 3.41785C8.17154 3.49562 7.86827 3.92621 7.94593 4.37998C8.01465 4.78615 8.36477 5.07305 8.76093 5.07305C8.80704 5.07305 8.85391 5.06938 8.90159 5.06121L11.7912 4.56386C12.007 4.52643 12.2003 4.40432 12.3273 4.22361C12.4542 4.04332 12.5043 3.81944 12.4671 3.60131L11.9722 0.692581C11.8962 0.239231 11.4742 -0.06442 11.0166 0.0116802C10.5663 0.0894474 10.263 0.52046 10.3407 0.974227L10.4709 1.73981C9.66957 1.28721 8.7856 0.994398 7.84642 0.885541C7.14302 0.804939 6.46065 0.827361 5.83607 0.947804C4.39815 1.19036 3.09162 1.86884 2.05747 2.90991C-0.685824 5.67177 -0.685824 10.1658 2.05747 12.9284C3.42908 14.3097 5.23128 15 7.03307 15C8.83528 15 10.6366 14.3098 12.0087 12.9284C13.0865 11.8433 13.772 10.4767 13.9911 8.9765C14.0575 8.52065 13.7446 8.0973 13.2926 8.03062Z" fill="#2764E0"/>
                              </svg>
                              Обновить результат
                           </a>`
      const wrapper = li.querySelector('.profile__searches__card__wrapper')
      result.results.forEach(position=>{
         const div = document.createElement('div')
         div.classList.add('profile__searches__card__result__item','mb_12')
         div.innerHTML = `<p>${position.name}...<span class="amount">${position.amount}</span></p>`
         if (position.after){
            div.innerHTML += `<a href="#" class="after">+${position.after} <span class="new"> новое</span><span class="offer"> предложение</span></a>`
         }
         wrapper.appendChild(div)
      })
      ul.appendChild(li)
   })

}
renderSmartSearches()
function updateResultsCount(){

}
document.querySelectorAll('.profile__searches__card__more').forEach(button => {
   button.addEventListener('click', (event) => {
      event.preventDefault()
      const wrapper = button.closest('.profile__searches__card__results').querySelector('.profile__searches__card__wrapper')
      if(wrapper.childNodes.length<=3){
         button.style.display = 'none'
      }
      if (wrapper.style.height) {
         wrapper.style.height = ''
         button.innerText = `Всего ${wrapper.childNodes.length} позиций`
      } else {
         wrapper.style.height = wrapper.scrollHeight + 'px'
         button.innerText = 'Скрыть'
      }
   })
})