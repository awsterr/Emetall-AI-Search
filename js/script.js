const ROWS_PER_PAGE = 8



// Логика для линии прогресса
const progressBar = document.getElementById('progress')
const progressStatus = document.getElementById('progress-status')
const progresBlock = document.getElementById('progress-container')
const formResults = document.querySelector('.form-results')

//Функция по изменению прогресса
const changeProgress = (progress) => {
  progressBar.style.width = `${progress}%`
  progressBar.style.outline = '4px solid rgba(39, 100, 224, .1)'
  progressStatus.innerHTML = progress + '%...  Идет обработка'
  if (progress===100){
   progressStatus.innerHTML = '100% Завершено'
  }
}
// Моковый прогресс
function handleFileRead(){
   formResults.style.display = 'flex'

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
      textarea.dispatchEvent(new Event('blur'))
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
           }
      ])
   }, 8000)
}



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
   showFileInfo(files[0])
})

const copyBtn = document.getElementById('search-request__copy-btn')
copyBtn.addEventListener('click',()=>{
   navigator.clipboard.writeText('order+507@e-metall.ru')
})


function showFileInfo(file){
   const title = document.querySelector('.form-results__title span')
   title.innerHTML = file.name

   const subtitle = document.querySelector('.form-results__subtitle span')
   subtitle.innerHTML = formatFileSize(file.size)

   const logo = document.querySelector('.form-results__logo')
   logo.classList.add('doc')

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

   const title = document.querySelector('.form-results__title span')
   title.innerHTML = 'Ваша заявка'

   const subtitle = document.querySelector('.form-results__subtitle span')
   subtitle.innerHTML = textarea.value.substring(0, 25) + "..."

   const h3 = document.querySelector('.form-results__container h3')
   const number = 3
   h3.innerHTML = `Распознано ${number} позиции`

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
      },
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
               span.textContent = "10"

               const link = document.createElement("a")
               link.href = "https://e-metall.ru/postavshhiki/"
               link.textContent = targetTd.textContent.trim()
               targetTd.innerHTML = ""
               targetTd.appendChild(span)
               targetTd.appendChild(link)
            }
         })
      }

      tbody.querySelectorAll("tr").forEach(tr => {
         const newTd = document.createElement("td")

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