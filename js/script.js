const ROWS_PER_PAGE = 8



// Логика для линии прогресса
const progressBar = document.getElementById('progress')
const progressStatus = document.getElementById('progress-status')
const progresBlock = document.getElementById('progress-container')
const formResults = document.querySelector('.form-results')

const circleProgress = document.querySelector('.progress-ring__circle')
var radius = circleProgress.r.baseVal.value
var circumference = radius * 2 * Math.PI

circleProgress.style.strokeDasharray = `${circumference} ${circumference}`
circleProgress.style.strokeDashoffset = `${circumference}`

//Функция по изменению прогресса
const changeProgress = (progress) => {
  progressBar.style.width = `${progress}%`
  progressBar.style.outline = '4px solid rgba(39, 100, 224, .1)'
  progressStatus.innerHTML = progress + '%...  Идет обработка'
  document.querySelector('.form-results__status span').innerText = progress + '%...  Идет обработка'
  if (progress===100){
   progressStatus.innerHTML = '100% Завершено'
  }


  const offset = circumference - progress / 100 * circumference
  circleProgress.style.strokeDashoffset = offset
}
// Моковый прогресс
// function handleFileRead(){
//    formResults.style.display = 'flex'
//    setTimeout(() => changeProgress(9), 1000)
//    setTimeout(() => changeProgress(24), 2000)
//    setTimeout(() => changeProgress(34), 3000)
//    setTimeout(() => changeProgress(38), 3866)
//    setTimeout(() => changeProgress(42), 4000)
//    setTimeout(() => changeProgress(45), 4500)
//    setTimeout(() => changeProgress(85), 5600)
//    setTimeout(() => changeProgress(98), 6266)
//    setTimeout(() => {
//       changeProgress(100)
//       formResults.classList.add('finished')
//       textarea.dispatchEvent(new Event('blur'))
//       findResults([
//          {
//             id:1,
//             name:'Труба профильная',
//             size:'50x50',
//             thickness:'3',
//             steelGrade:'ст.0-20',
//             standard:'13663-86',
//             amount:'30',
//             unit:'Кг',
//            },
//            {
//             id:2,
//             name:'Труба профильная',
//             size:'50x50',
//             thickness:'2',
//             steelGrade:'ст.0-20',
//             standard:'13663-86',
//             amount:'100',
//             unit:'Кг',
//            },
//            {
//             id:3,
//             name:'Труба профильная',
//             size:'50x50',
//             thickness:'3',
//             steelGrade:'ст.0-20',
//             standard:'13663-86',
//             amount:'30',
//             unit:'Кг',
//            }
//       ])
//    }, 8000)
// }
function handleFileRead(){
   changeProgress(0)
   document.querySelector('#autosearch-form').style.minHeight = '0'
   formResults.classList.add('result-flex')
   document.querySelector('.autosearch').classList.add('search-mobile')
   document.querySelector('.form-results__status').classList.add('blue')
   document.querySelector('.mobile-loading').style.display = 'flex'
   document.querySelector('.search-results').style.display = 'block'
   setTimeout(() => changeProgress(9), 1000)
   setTimeout(() => changeProgress(24), 2000)
   setTimeout(() => changeProgress(34), 3000)
   setTimeout(() => changeProgress(38), 3866)
   setTimeout(() => changeProgress(42), 4000)
   setTimeout(() => changeProgress(45), 4500)
   setTimeout(() => changeProgress(85), 5600)
   setTimeout(() => changeProgress(98), 6266)
   setTimeout(() => {
      changeProgress(100)
      formResults.classList.add('finished')
      document.querySelector('.autosearch').classList.add('finished')
      document.querySelector('.form-results__status').classList.remove('blue')
      document.querySelector('.form-results__status span').innerText = 'Готово'
      textarea.dispatchEvent(new Event('blur'))
      document.querySelector('.mobile-loading').style.display = 'none'
      findResults([
         {
            id:1,
            name:'Труба профильная',
            size:'50x50',
            thickness:'3',
            steelGrade:'ст.0-20',
            standard:'13663-86',
            amount:'30',
            unit:'Кг',
           },
           {
            id:2,
            name:'Труба профильная',
            size:'50x50',
            thickness:'2',
            steelGrade:'ст.0-20',
            standard:'13663-86',
            amount:'100',
            unit:'Кг',
           },
           {
            id:3,
            name:'Труба профильная',
            size:'50x50',
            thickness:'3',
            steelGrade:'ст.0-20',
            standard:'13663-86',
            amount:'30',
            unit:'Кг',
           },
           {
            id:4,
            name:'Труба профильная',
            size:'50x50',
            thickness:'2',
            steelGrade:'ст.0-20',
            standard:'13663-86',
            amount:'100',
            unit:'Кг',
           },
           {
            id:5,
            name:'Труба профильная',
            size:'50x50',
            thickness:'3',
            steelGrade:'ст.0-20',
            standard:'13663-86',
            amount:'30',
            unit:'Кг',
           },
           {
            id:6,
            name:'Труба профильная',
            size:'50x50',
            thickness:'2',
            steelGrade:'ст.0-20',
            standard:'13663-86',
            amount:'100',
            unit:'Кг',
           },
           {
            id:7,
            name:'Труба профильная',
            size:'50x50',
            thickness:'3',
            steelGrade:'ст.0-20',
            standard:'13663-86',
            amount:'30',
            unit:'Кг',
           },
           {
            id:8,
            name:'Труба профильная',
            size:'50x50',
            thickness:'2',
            steelGrade:'ст.0-20',
            standard:'13663-86',
            amount:'100',
            unit:'Кг',
           },
           {
            id:9,
            name:'Труба профильная',
            size:'50x50',
            thickness:'3',
            steelGrade:'ст.0-20',
            standard:'13663-86',
            amount:'30',
            unit:'Кг',
           }
      ])
   }, 8000)
}
// handleFileRead()
document.querySelector('.autosearch__back .profile__back').addEventListener('click',(e)=>{
   e.preventDefault()
   document.querySelector('.autosearch').classList.remove('search-mobile')
   document.querySelector('.autosearch').classList.remove('finished')
   formResults.classList.remove('finished')
   formResults.classList.remove('result-flex')
   document.querySelector('#search-results__list').innerHTML = ''
   document.querySelector('#autosearch-form').style.minHeight = '390px'
   document.querySelector('.mobile-loading').style.display = 'none'
})

const textarea = document.getElementById('autosearch-textarea')
const symbolCounter = document.getElementById('symbol-counter')
const placeholder = document.getElementById('pseudo-placeholder')

// Меняем счетчик при вводе в поле
textarea.addEventListener('input',(event)=>{
   symbolCounter.innerHTML = textarea.value.length
   symbolCounter.classList.remove('warning')
   placeholder.classList.add('hidden')
   if(!event.target.value.length){
      placeholder.classList.remove('hidden')
   }
   if(event.target.value.length===20000){
      symbolCounter.classList.add('warning')
   }
})
placeholder.addEventListener('click',()=>{
   textarea.focus()
})


// Логика перетаскивания файлов
const searchBlock = document.getElementById('autosearch-form')
const searchDragover = document.getElementById('autosearch-dragover')
const backdrop = document.getElementById('dragover-backdrop')
const closeDragover = document.getElementById('close-btn')


let dragCounter = 0

function hideDragover(){
   searchDragover.classList.add('hidden')
   backdrop.classList.add('hidden')
}
function showDragover(){
   searchDragover.classList.remove('hidden')
   backdrop.classList.remove('hidden')
}

searchBlock.addEventListener('dragenter', (event) => {
   event.preventDefault()
   dragCounter++
   showDragover()
})
searchBlock.addEventListener('dragover', (event) => {
   event.preventDefault()
   event.stopPropagation()
   event.dataTransfer.dropEffect = 'copy'
})
searchBlock.addEventListener('dragleave', () => {
   dragCounter--
   if (dragCounter === 0) hideDragover()
})
searchBlock.addEventListener('drop', (event) => {
   event.preventDefault()
   const files = event.dataTransfer.files
   hideDragover()
   dragCounter = 0
   if (files.length === 0) return
   handleFileRead()
   showFileInfo(files[0])

})
closeDragover.addEventListener('click',hideDragover)

const docpicker = document.getElementById('docpicker')
docpicker.addEventListener('change',(event)=>{
   handleFileRead()
   const files = event.target.files
   // console.dir()
   // const fileIcon = document.querySelector('.form-results__logo')
   
   showFileInfo(files[0])
})

const copyBtn = document.getElementById('search-request__copy-btn')
copyBtn.addEventListener('click',()=>{
   navigator.clipboard.writeText('order+507@e-metall.ru')
})


function showFileInfo(file){
   const title = document.querySelector('.form-results__title span')
   title.innerHTML = file.name
   document.querySelector('.form-results__subtitle a').style.display = 'none'
   const subtitle = document.querySelector('.form-results__subtitle span')
   subtitle.innerHTML = formatFileSize(file.size)

   const logo = document.querySelector('.form-results__logo')
   switch (file.type){
         case 'application/msword':
         case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            logo.classList.remove('exl')
            logo.classList.remove('txt')
            logo.classList.add('word')
            break
         case 'text/plain':
            logo.classList.remove('exl')
            logo.classList.remove('word')
            logo.classList.add('txt')
            break
         default:
            logo.classList.remove('txt')
            logo.classList.remove('word')
            logo.classList.add('exl')
   }

   const h3 = document.querySelector('.form-results__container h3')
   const number = 3
   h3.innerHTML = `Распознано ${number} позиции`
}

function formatFileSize(size) {
   const units = ["Б", "КБ", "МБ"]
   let unitIndex = 0

   while (size >= 1024 && unitIndex < units.length - 1) {
       size /= 1024
       unitIndex++
   }

   return `${size.toFixed(2)} ${units[unitIndex]}`
}








function findResults(results){
   // Запрос на сервер, получаем константы
   
   const searchConteiner = document.querySelector('.search-results')
   searchConteiner.style.display = 'none'
   
   const subscribePromo = document.querySelector('.subscribe-promo')
   subscribePromo.style.display = 'none'

   
   
   
   searchConteiner.style.display = 'block'
   
   const resultList = document.getElementById('search-results__list')
   resultList.innerHTML = ''
   results.map((position,index)=>{
      const li = document.createElement('li')
      li.classList.add("search-results__item","result-item")
      li.innerHTML = `<div class="result-item__header">
                     <div class="result-item__number">${index+1}</div>
                     <div class="position-filter">
                        <div class="mobile mobile-title">Редактировать позицию</div>
                        <div class="position-filter__item">
                           <div class="position-filter__title fw_600">Наименование</div>
                           <div class="position-filter__body">
                              <input type="text" value="${position.name}">
                           </div>
                        </div>
                        <div class="position-filter__item">
                           <div class="position-filter__title fw_600">Размер</div>
                           <div class="position-filter__body">
                              <input type="text" value="${position.size}">
                           </div>
                        </div>
                        <div class="position-filter__item">
                           <div class="position-filter__title fw_600">Стенка</div>
                           <div class="position-filter__body">
                              <input type="text" value="${position.thickness}">
                           </div>
                        </div>
                        <div class="position-filter__item">
                           <div class="position-filter__title fw_600">Сталь</div>
                           <div class="position-filter__body">
                              <input type="text" value="${position.steelGrade}">
                           </div>
                        </div>
                        <div class="position-filter__item">
                           <div class="position-filter__title fw_600">ГОСТ</div>
                           <div class="position-filter__body">
                              <input type="text" value="${position.standard}">
                           </div>
                        </div>
                        <div class="position-filter__item">
                           <div class="position-filter__title fw_600">Количество</div>
                           <div class="position-filter__body double-input">
                              <input type="text" value="${position.amount}" class="amount-input-field">
                              <input type="text" value="${position.unit}" class="amount-input-field unit">
                              <div class="amount-input-icon"></div>
                              <div class="amount-dropdown hidden">
                                 <div class="dropdown-item" data-value="кг">Кг</div>
                                 <div class="dropdown-item" data-value="т">Тонны</div>
                                 <div class="dropdown-item" data-value="шт">Штуки</div>
                                 <div class="dropdown-item" data-value="м">Метры</div>
                              </div>
                           </div>
                        </div>
                        <div class="position-filter__item">
                           <a class="secondary-btn position-filter__refresh-btn btn_38" href="#" id="refresh_${position.id}">Обновить результат</a>
                        </div>
                        <svg class="mobile" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                           <path d="M0.266929 0.266929C-0.0889771 0.622835 -0.0889754 1.19987 0.266929 1.55577L6.71116 8L0.266944 14.4442C-0.0889597 14.8001 -0.0889597 15.3771 0.266944 15.7331C0.62285 16.089 1.19989 16.089 1.55579 15.7331L8 9.28885L14.4442 15.7331C14.8001 16.089 15.3772 16.089 15.7331 15.7331C16.089 15.3771 16.089 14.8001 15.7331 14.4442L9.28884 8L15.7331 1.55577C16.089 1.19987 16.089 0.622835 15.7331 0.266929C15.3772 -0.0889765 14.8001 -0.0889765 14.4442 0.266929L8 6.71116L1.55577 0.266929C1.19987 -0.0889765 0.622833 -0.0889765 0.266929 0.266929Z" fill="#6C757D"/>
                        </svg>
                        <a class="mobile mobile-delete" href="#">Удалить позицию из поиска</a>
                     </div>
                     <div class="result-mobile mobile">
                        <div class="result-item__text">Труба профильная 50х50, 3, ст.0-20, ГОСТ 13663-86</div>
                        <div class="result-item__amount">30 кг</div>
                        <a href="#" class="result-item__more">Смотреть 27 предложений</a>
                        <a href="#" class="result-item__settings">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <circle cx="16" cy="16" r="15.5" stroke="#2764E0"/>
                              <path d="M16 19.4204C15.4406 19.4204 14.8939 19.2491 14.4288 18.9281C13.9637 18.6071 13.6012 18.1508 13.3871 17.617C13.1731 17.0832 13.1171 16.4958 13.2262 15.9291C13.3353 15.3625 13.6047 14.8419 14.0002 14.4334C14.3957 14.0248 14.8997 13.7466 15.4483 13.6338C15.9969 13.5211 16.5655 13.579 17.0823 13.8001C17.5991 14.0212 18.0408 14.3956 18.3515 14.8761C18.6623 15.3565 18.8281 15.9213 18.8281 16.4991C18.827 17.2735 18.5286 18.0159 17.9985 18.5635C17.4684 19.1111 16.7497 19.4192 16 19.4204ZM21.6078 17.2135C21.6695 16.7393 21.6695 16.2588 21.6078 15.7847L22.8633 14.4605C22.936 14.3825 22.9825 14.2825 22.9959 14.1752C23.0094 14.0679 22.9892 13.9589 22.9382 13.8644L21.6519 11.6256C21.5988 11.532 21.5176 11.4587 21.4207 11.4168C21.3237 11.375 21.2163 11.3668 21.1144 11.3935L19.3788 11.8486C19.0046 11.5579 18.5979 11.315 18.1674 11.125L17.7268 9.36403C17.6974 9.25947 17.636 9.16753 17.5519 9.10193C17.4677 9.03633 17.3653 9.00057 17.2599 9H14.7533C14.6479 9.00057 14.5455 9.03633 14.4613 9.10193C14.3772 9.16753 14.3158 9.25947 14.2864 9.36403L13.7974 11.1159C13.3655 11.3059 12.9573 11.5488 12.5816 11.8395L10.8459 11.3844C10.7441 11.3584 10.6369 11.367 10.5401 11.4088C10.4433 11.4506 10.3621 11.5234 10.3085 11.6165L9.08384 13.8644C9.02859 13.9561 9.00386 14.064 9.0134 14.1716C9.02294 14.2792 9.06624 14.3806 9.1367 14.4605L10.3746 15.7847C10.3129 16.2588 10.3129 16.7393 10.3746 17.2135L9.1367 18.5377C9.06404 18.6156 9.01755 18.7156 9.00407 18.823C8.99058 18.9303 9.01083 19.0392 9.06181 19.1338L10.3481 21.3726C10.4012 21.4662 10.4824 21.5395 10.5793 21.5813C10.6763 21.6232 10.7837 21.6314 10.8856 21.6046L12.6212 21.1496C12.9945 21.4404 13.4014 21.682 13.8326 21.8686L14.3216 23.6341C14.3485 23.7351 14.4055 23.8246 14.4847 23.89C14.5638 23.9554 14.6609 23.9933 14.7621 23.9982H17.2599C17.3704 24.008 17.4808 23.9781 17.5724 23.9134C17.6639 23.8486 17.7309 23.7532 17.7621 23.6432L18.2511 21.8777C18.6823 21.6911 19.0892 21.4495 19.4625 21.1587L21.1981 21.6137C21.29 21.6256 21.3831 21.61 21.4667 21.5689C21.5502 21.5278 21.6206 21.4628 21.6695 21.3817L22.9206 19.1474C22.9779 19.0564 23.0051 18.9486 22.9979 18.8402C22.9908 18.7319 22.9497 18.6289 22.8809 18.5468L21.6078 17.2135Z" fill="#2764E0"/>
                           </svg>
                        </a>
                     </div>
                     <button class="result-item__close" id="close_${position.id}">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M0.254006 0.254021C-0.0846687 0.592719 -0.0846687 1.14185 0.254006 1.48055L5.77354 7.00013L0.254271 12.5194C-0.0844041 12.8581 -0.0844041 13.4073 0.254271 13.746C0.592946 14.0847 1.14209 14.0847 1.48076 13.746L7.00003 8.22665L12.5192 13.7458C12.8579 14.0845 13.407 14.0845 13.7457 13.7458C14.0844 13.4072 14.0844 12.858 13.7457 12.5193L8.22658 7.00012L13.746 1.48068C14.0847 1.14199 14.0847 0.592848 13.746 0.254153C13.4073 -0.0845447 12.8581 -0.0845447 12.5195 0.254153L7.00009 5.7736L1.48055 0.254021C1.14182 -0.0846737 0.592734 -0.0846737 0.254006 0.254021Z" fill="#6C757D"/>
                        </svg>
                     </button>
                  </div>
                  <div class="result-item__body" id="table-container_${position.id}">
                  </div>`
      resultList.appendChild(li)
   
      const refresh = document.getElementById('refresh_'+position.id)
      refresh.addEventListener('click',(event)=>{
         event.preventDefault()
         blurTable(position.id)
      })
      const close = document.getElementById('close_'+position.id)
      close.addEventListener('click',(event)=>{
         event.preventDefault()
         li.remove()
      })
   
   
      const moreBtn = document.createElement('a')
      moreBtn.classList.add('secondary-btn','btn_44','result-item__btn-more')
      moreBtn.style.display = 'none'
      moreBtn.setAttribute('id',`btn-more_${position.id}`)
      li.appendChild(moreBtn)
   
   })
   mockTableGenerator(results)
   tableUpdate()
   document.querySelectorAll('.info-icon').forEach(icon => {
      const extraInfo = icon.nextElementSibling
   
      if (extraInfo && extraInfo.classList.contains('extra-info')) {
         icon.addEventListener('mouseover', () => {
            extraInfo.style.display = 'block'
         })
   
         icon.addEventListener('mouseout', () => {
            extraInfo.style.display = 'none'
         })
      }
   })
   document.querySelectorAll('.more-container').forEach(more => {
      const extraInfo = more.children[1]
      if (extraInfo && extraInfo.classList.contains('more-menu')) {
         more.addEventListener('click', (event) => {
            event.stopPropagation()
            document.querySelectorAll('.more-menu').forEach(menu => {
               if (menu !== extraInfo) menu.style.display = 'none'
               menu.closest('.more-container').style.background = ''
            })
            if (extraInfo.style.display === 'block') {
               extraInfo.style.display = 'none'
               more.style.background = ''
            } else {
               extraInfo.style.display = 'block'
               more.style.background = '#E3E3E3'
            }
         })
         
      }
   })
   document.addEventListener('click', () => {
      document.querySelectorAll('.more-menu').forEach(menu => {
         menu.style.display = 'none'
         menu.closest('.more-container').style.background = ''
      })
   })
   document.querySelectorAll('.amount-input-icon').forEach(icon => {
      icon.addEventListener('click', (event) => {
         event.stopPropagation()
   
         document.querySelectorAll('.amount-dropdown').forEach(dropdown => {
            dropdown.classList.add('hidden')
         })
   
         const input = icon.closest('.double-input').querySelector('.unit')
         
         let dropdown = icon.closest('.double-input').querySelector('.amount-dropdown')
         dropdown.classList.toggle('hidden')
   
         dropdown.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', () => {
               input.value = item.textContent.trim()
               dropdown.classList.add('hidden')
            })
         })
      })
   })
   document.addEventListener('click', () => {
      document.querySelectorAll('.amount-dropdown').forEach(dropdown => {
         dropdown.classList.add('hidden')
      })
   })

   
   
}

function blurTable(id){
   const table = document.getElementById('table_'+id)
   if (!table) return
   const loadingBlur = document.createElement('div')
   loadingBlur.classList.add('loading-container')
   const circle = document.createElement('div')
   circle.classList.add('loading-circle')
   table.appendChild(loadingBlur)
   loadingBlur.appendChild(circle)
   const refreshBtns = document.querySelectorAll('.result-item__btn-more')
   refreshBtns.forEach((btn)=>{
      btn.classList.add('disable')
   })
   // Здесь запрос делать
   setTimeout(() => {
      loadingBlur.remove()
      refreshBtns.forEach((btn)=>{
         btn.classList.remove('disable')
      })

   }, 3000)
}
const findBtn = document.getElementById('btn-find')
findBtn.addEventListener('click',(event)=>{
   event.preventDefault()

   document.querySelector('.form-results__title span').innerHTML = 'Ваша заявка'

   document.querySelector('.form-results__subtitle a').style.display='inline'

   document.querySelector('.form-results__subtitle span').innerHTML = textarea.value.substring(0, 25) + "..."

   const number = 3
   document.querySelector('.form-results__container h3').innerHTML = `Распознано ${number} позиции`

   handleFileRead()
})


function openCartModal(){
   const modal = document.getElementById('modal-card-window')
   modal.classList.remove('hidden')
   cartBackdrop.classList.remove('hidden')
}
function closeCartModal(){
   const modal = document.getElementById('modal-card-window')
   modal.classList.add('hidden')
   cartBackdrop.classList.add('hidden')
}
const closeModalBtn = document.getElementById('cart-modal__close-btn')
closeModalBtn.addEventListener('click',closeCartModal)

const cartBackdrop = document.getElementById('modal-card__backdrop')
cartBackdrop.addEventListener('click',closeCartModal)

const returnBtn = document.getElementById('cart-modal__return')
returnBtn.addEventListener('click',closeCartModal)

const cartModalAmount = document.getElementById('cart-modal__amount-value')
const cartModalPlus = document.getElementById('cart-modal__plus')
const cartModalMinus = document.getElementById('cart-modal__minus')
cartModalPlus.addEventListener("click", () => {
   let value = getCartModalValue()
   updateCartModalValue(value + 1)
})
cartModalMinus.addEventListener("click", () => {
   let value = getCartModalValue()
   updateCartModalValue(Math.max(0, value - 1))
})
cartModalAmount.addEventListener("input", () => {
   let value = cartModalAmount.value.replace(",", ".")
   if (!/^\d+(\.\d{0,2})?$/.test(value)) {
      cartModalAmount.value = getCartModalValue().toFixed(2).replace(".", ",")
   }
})

function getCartModalValue() {
   let rawValue = cartModalAmount.value.replace(",", ".")
   let parsedValue = parseFloat(rawValue)
   return isNaN(parsedValue) ? 0 : parsedValue
}

function updateCartModalValue(value) {
   cartModalAmount.value = value.toFixed(2).replace(".", ",")
}


const cartTabs = document.querySelectorAll('.cart-modal__unit-tab')
cartTabs.forEach((tab)=>{
   tab.addEventListener('click',()=>{
      cartTabs.forEach((tab)=>{
         tab.classList.remove('active')
      })
      tab.classList.add('active')
   })
})










function mockTableGenerator(results){
   // doing smthg....
   // geting html
   results.forEach((position)=>{

      const tableData = getTableData()
      const tableContainer = document.getElementById('table-container_'+position.id)

      const table = document.createElement('table')
      table.classList.add('table','table-striped')
      table.setAttribute('id',`table_${position.id}`)
      
      const tableHeader = document.createElement('thead')
      tableHeader.innerHTML = `<tr>${Object.values(getTableHeaders()).map((header)=>{
         return '<th>'+header+'</th>'
      }).join('')}</tr>`
      table.appendChild(tableHeader)

      const tableBody = document.createElement('tbody')
      tableData.forEach((element)=>{
         let tr = '<tr>'
         for(let key in element){
            tr +=`<td>${element[key]}</td>`
         }
         tableBody.innerHTML += tr + '</tr>'
      })
      table.appendChild(tableBody)

      tableContainer.appendChild(table)

   })
}
function getTableData(){
   return [
      {
         diametr:'Труба 50х50',
         thickness:'3',
         steelGrade:'ст.0-20',
         standard:'ГОСТ 13663-86',
         length:'6',
         amount:'36.58 т',
         price:'53 400 руб/т',
         warehouse:'Металлторг',
         city:'Екатеринбург',
      },
      {
         diametr:'Труба 50х50',
         thickness:'3',
         steelGrade:'ст.0-20',
         standard:'ГОСТ 13663-86',
         length:'6',
         amount:'36.58 т',
         price:'53 400 руб/т',
         warehouse:'Металлторг',
         city:'Екатеринбург',
      }
   ]
}
function getTableHeaders(){
   return {
      diametr:'Диаметр',
      thickness:'Стенка',
      steelGrade:'Марка стали',
      standard:'Стандарт',
      length:'Длина',
      amount:'Наличие',
      price:'Цена, руб с НДС',
      warehouse:'Металлобаза',
      city:'Город',
   }
}

function tableUpdate(){
   const tablesColection = document.querySelectorAll('.table.table-striped')
   if (tablesColection.length === 0) return
   
   tablesColection.forEach((table)=>{
      const thead = table.querySelector("thead")
      const tbody = table.querySelector("tbody")
      if (thead) thead.classList.add("result-table__thead")
      if (tbody) tbody.classList.add("result-table__tbody")

      thead?.querySelectorAll("tr").forEach(tr=>tr.classList.add('result-table__thead-tr'))
      tbody?.querySelectorAll("tr").forEach(tr=>tr.classList.add('result-table__tbody-tr'))
      wrapTableContentWithSpans(table);

      let infoColumnIndex = -1
      let warehouseColumnIndex = -1
      thead.querySelectorAll("tr").forEach(tr => {
         tr.querySelectorAll("th").forEach((th,index) => {
            if (th.textContent.trim() === "Цена, руб с НДС") {
               const newTh = document.createElement("th")
               newTh.classList.add('info')
               tr.insertBefore(newTh, th)

               infoColumnIndex = index
            }
            if (th.textContent.trim() === "Металлобаза") {
               warehouseColumnIndex = index
            }
         })
      })
      if(infoColumnIndex !== -1){
         tbody.querySelectorAll('tr').forEach(tr=>{
            const tdList = tr.querySelectorAll('td')
            const newTd = document.createElement('td')
            newTd.classList.add('info')

            const img = document.createElement('div')
            img.classList.add('info-icon')
            newTd.appendChild(img)

            newTd.innerHTML += `<div class="extra-info">
      <div class="extra-info__header">
         
         <div>Инфо</div>
         <span>Дата обновления 27.11.2024</span>
      </div>
      <dl class="extra-info__dl">
            <dt class="extra-info__dl-termin">Наименование</dt>
            <dd class="extra-info__dl-data">Труба стальная профильная 50х50</dd>
            <dt class="extra-info__dl-termin">Цена</dt>
            <dd class="extra-info__dl-data">53 400 руб/т</dd>
            <dt class="extra-info__dl-termin">Стандарт</dt>
            <dd class="extra-info__dl-data">-</dd>
      </dl>
   </div>`
            
            if(tdList.length>infoColumnIndex){
               tr.insertBefore(newTd,tdList[infoColumnIndex])
            } else {
               tr.appendChild(newTd)
            }
         })
      }
      if (warehouseColumnIndex !== -1){
         tbody.querySelectorAll("tr").forEach(tr => {
            const tdList = tr.querySelectorAll("td")
            if (tdList.length > warehouseColumnIndex) {
               const targetTd = tdList[warehouseColumnIndex+1]
               targetTd.classList.add("warehouse")
               const span = document.createElement("span")
               span.classList.add('rating')
               span.textContent = "10"

               const link = document.createElement("a")
               link.href = "https://e-metall.ru/postavshhiki/"
               link.textContent = targetTd.children[1].textContent.trim()
               targetTd.children[1].innerHTML = ""
               targetTd.children[1].appendChild(span)
               targetTd.children[1].appendChild(link)
            }
         })
      }

      tbody.querySelectorAll("tr").forEach(tr => {
         const newTd = document.createElement("td")
         newTd.classList.add('btns')
         const cartButton = document.createElement("a")
         cartButton.classList.add("btn-cart", "btn")
         cartButton.textContent = "В корзину"
         cartButton.addEventListener('click',openCartModal)

         const moreContainer = document.createElement("div")
         moreContainer.classList.add("more-container")

         moreContainer.innerHTML+= `<svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z" fill="#212529"/>
                                       <path d="M11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2Z" fill="#212529"/>
                                       <path d="M16 4C17.1046 4 18 3.10457 18 2C18 0.895431 17.1046 0 16 0C14.8954 0 14 0.895431 14 2C14 3.10457 14.8954 4 16 4Z" fill="#212529"/>
                                    </svg>
`

         const moreMenu = document.createElement("div")
         moreMenu.classList.add('more-menu')
         moreMenu.innerHTML = `<div class="more-option">
         <img src="img/export.svg" alt="">
         <a href="">Поделиться</a>
      </div>
      <div class="more-option">
         <img src="img/providerscard-rekw.svg" alt="">
         <a href="">Скачать прайс-лист</a>
      </div>
      <div class="more-option">
         <img src="img/providerscard-rekw.svg" alt="">
         <a href="">Скачать реквизиты</a>
      </div>
      <div class="more-option warning">
         <img src="img/providerscard-red.svg" alt="">
         <a href="">Сообщить о несоответсвии</a>
      </div>`
         moreContainer.appendChild(moreMenu)

         newTd.appendChild(cartButton)
         newTd.appendChild(moreContainer)

         tr.appendChild(newTd)
      })

      thead.querySelector("tr").appendChild(document.createElement("th"))

      thead?.querySelectorAll("th").forEach(th => th.classList.add("result-table__th"))
      tbody?.querySelectorAll("td").forEach(td => td.classList.add("result-table__td"))
   
      const mobileDiv = document.createElement('div')
      mobileDiv.innerHTML = `
         <div class="result__back">
            <!-- Появляется после нажатия "Найти" или drop -->
            <a href="#" class="profile__back">
               <p class="fs_16 fw_600 lh_norm">
                  27 предложений
               </p>
            </a>
         </div>
         <div class="mobile-result-header__container">
            <h3 class="mobile-result-header__title">Труба профилильная 50х50х3, ст.0-20, ГОСТ 13663-86</h3>
            <div class="mobile-result-header__wrapper">
               <p class="mobile-result-header__text">13 предложений в <a href="#">Москве</a> <br>и еще 14 в других регионах</p>
               <a href="#" class="mobile-result-header__link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                     <circle cx="16" cy="16" r="15.5" stroke="#2764E0"></circle>
                     <path d="M16 19.4204C15.4406 19.4204 14.8939 19.2491 14.4288 18.9281C13.9637 18.6071 13.6012 18.1508 13.3871 17.617C13.1731 17.0832 13.1171 16.4958 13.2262 15.9291C13.3353 15.3625 13.6047 14.8419 14.0002 14.4334C14.3957 14.0248 14.8997 13.7466 15.4483 13.6338C15.9969 13.5211 16.5655 13.579 17.0823 13.8001C17.5991 14.0212 18.0408 14.3956 18.3515 14.8761C18.6623 15.3565 18.8281 15.9213 18.8281 16.4991C18.827 17.2735 18.5286 18.0159 17.9985 18.5635C17.4684 19.1111 16.7497 19.4192 16 19.4204ZM21.6078 17.2135C21.6695 16.7393 21.6695 16.2588 21.6078 15.7847L22.8633 14.4605C22.936 14.3825 22.9825 14.2825 22.9959 14.1752C23.0094 14.0679 22.9892 13.9589 22.9382 13.8644L21.6519 11.6256C21.5988 11.532 21.5176 11.4587 21.4207 11.4168C21.3237 11.375 21.2163 11.3668 21.1144 11.3935L19.3788 11.8486C19.0046 11.5579 18.5979 11.315 18.1674 11.125L17.7268 9.36403C17.6974 9.25947 17.636 9.16753 17.5519 9.10193C17.4677 9.03633 17.3653 9.00057 17.2599 9H14.7533C14.6479 9.00057 14.5455 9.03633 14.4613 9.10193C14.3772 9.16753 14.3158 9.25947 14.2864 9.36403L13.7974 11.1159C13.3655 11.3059 12.9573 11.5488 12.5816 11.8395L10.8459 11.3844C10.7441 11.3584 10.6369 11.367 10.5401 11.4088C10.4433 11.4506 10.3621 11.5234 10.3085 11.6165L9.08384 13.8644C9.02859 13.9561 9.00386 14.064 9.0134 14.1716C9.02294 14.2792 9.06624 14.3806 9.1367 14.4605L10.3746 15.7847C10.3129 16.2588 10.3129 16.7393 10.3746 17.2135L9.1367 18.5377C9.06404 18.6156 9.01755 18.7156 9.00407 18.823C8.99058 18.9303 9.01083 19.0392 9.06181 19.1338L10.3481 21.3726C10.4012 21.4662 10.4824 21.5395 10.5793 21.5813C10.6763 21.6232 10.7837 21.6314 10.8856 21.6046L12.6212 21.1496C12.9945 21.4404 13.4014 21.682 13.8326 21.8686L14.3216 23.6341C14.3485 23.7351 14.4055 23.8246 14.4847 23.89C14.5638 23.9554 14.6609 23.9933 14.7621 23.9982H17.2599C17.3704 24.008 17.4808 23.9781 17.5724 23.9134C17.6639 23.8486 17.7309 23.7532 17.7621 23.6432L18.2511 21.8777C18.6823 21.6911 19.0892 21.4495 19.4625 21.1587L21.1981 21.6137C21.29 21.6256 21.3831 21.61 21.4667 21.5689C21.5502 21.5278 21.6206 21.4628 21.6695 21.3817L22.9206 19.1474C22.9779 19.0564 23.0051 18.9486 22.9979 18.8402C22.9908 18.7319 22.9497 18.6289 22.8809 18.5468L21.6078 17.2135Z" fill="#2764E0"></path>
                  </svg>
               </a>
            </div>
         </div>
      `
      mobileDiv.classList.add('mobile','mobile-result-header')
      table.closest('.result-item__body').insertBefore(mobileDiv,table)

   })
   // Редактировать позицию
   const resultSettings = document.querySelectorAll('.result-item__settings')

   resultSettings.forEach(link=>{
      link.addEventListener('click',()=>{
         link.closest('.result-item__header').querySelector('.position-filter').style.display = 'grid'
         document.querySelector('#dragover-backdrop').style.display = 'block'
         // Выключаю скролл пока открыта модалка
         document.body.style.overflow = 'hidden'
      })
   })

   // Закрыть окно 'Редактировать позицию'
   document.querySelectorAll('.position-filter svg.mobile').forEach(svg=>{
      svg.addEventListener('click',()=>{
         svg.closest('.position-filter').style.display = 'none'
         document.querySelector('#dragover-backdrop').style.display = 'none'
         document.body.style.overflow = ''
      })
   })
   backdrop.addEventListener('click',()=>{
      document.querySelector('#dragover-backdrop').style.display = 'none'
      document.querySelectorAll('.position-filter').forEach(position=>{
         position.style.display = 'none'
      })
      document.body.style.overflow = ''

   })

   // Удалить позицию из списка
   document.querySelectorAll('.mobile-delete').forEach((btn=>{
      btn.addEventListener('click',()=>{
         btn.closest('.search-results__item.result-item').remove()
         document.querySelector('#dragover-backdrop').style.display = 'none'
         document.body.style.overflow = ''
      })
   }))

   // Перейти на предложения по позиции
   document.querySelectorAll('.result-item__more').forEach(btn=>{
      btn.addEventListener('click',()=>{
         btn.closest('.result-item').querySelector('.result-item__body').style.display = 'block'


         // Костыль для скрытия всех элементов списка, при открытии "модалки"
         document.querySelectorAll('.result-item').forEach(li=>{
            if(li !== btn.closest('.result-item')){
               li.style.display='none'
            }
         })
      })
   })

   // Жирный шрифт у цены и наличия при мобилке
   const tdLableList = document.querySelectorAll('.result-table__td .mobile')
   tdLableList.forEach(span=>{
      if(span.innerText==='Цена, руб с НДС' || span.innerText==='Наличие'){
         span.nextElementSibling.classList.add('mobile-bold')
      }
   })
 document.querySelectorAll('.result__back .profile__back').forEach(link=>{
   link.addEventListener('click',()=>{
      document.querySelectorAll('.result-item__body').forEach(item=>{
         item.style.display = 'none'
      })
      document.querySelectorAll('.result-item').forEach(item=>{
         item.style.display='block'
      })
   })
 })
}
// findResults([
//    {
//       id:1,
//       name:'Труба профильная',
//       size:'50x50',
//       thickness:'3',
//       steelGrade:'ст.0-20',
//       standard:'13663-86',
//       amount:'30',
//       unit:'Кг',
//      },
//      {
//       id:2,
//       name:'Труба профильная',
//       size:'50x50',
//       thickness:'2',
//       steelGrade:'ст.0-20',
//       standard:'13663-86',
//       amount:'100',
//       unit:'Кг',
//      },
//      {
//       id:3,
//       name:'Труба профильная',
//       size:'50x50',
//       thickness:'3',
//       steelGrade:'ст.0-20',
//       standard:'13663-86',
//       amount:'30',
//       unit:'Кг',
//      }
// ])


// handleFileRead()



 function wrapTableContentWithSpans(table) {
     const headers = table.querySelectorAll('thead th');
     headers.forEach(th => {
       const originalText = th.textContent.trim();
 
       th.innerHTML = `<span class="thvalue">${originalText}</span>`;
     });
 
     const rows = table.querySelectorAll('tbody tr');
     rows.forEach(row => {
       const cells = row.querySelectorAll('td');
       cells.forEach((cell, index) => {
         const header = headers[index].textContent.trim();
 
         const originalContent = cell.innerHTML;
 
         const newContent = `
           <span class="mobile">${header}</span>
           <span class="tdvalue">${originalContent}</span>
         `;
 
         cell.innerHTML = newContent;
       });
     });
 }


// Просмотр заказа
const viewOrder = document.querySelector('.view-order.mobile')
document.querySelector('.form-results__subtitle a').addEventListener('click',()=>{
   viewOrder.style.display = 'block'
})
viewOrder.querySelector('.view-order__backdrop').addEventListener('click',()=>{
   viewOrder.style.display = 'none'
})
viewOrder.querySelector('.view-order__container svg').addEventListener('click',()=>{
   viewOrder.style.display = 'none'
})

