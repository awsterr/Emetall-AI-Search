const ROWS_PER_PAGE = 8



// Логика для линии прогресса
const progressBar = document.getElementById('progress');
const progressStatus = document.getElementById('progress-status');
const progresBlock = document.getElementById('progress-container');


//Функция по изменению прогресса
const changeProgress = (progress) => {
  progressBar.style.width = `${progress}%`;
  progressStatus.innerHTML = progress + '%...  Идет обработка'
  if (progress===100){
   progresBlock.classList.add('hidden')
  }
};
// Моковый прогресс
function handleFileRead(){
   progresBlock.classList.remove('hidden')
   setTimeout(() => changeProgress(9), 1000);
   setTimeout(() => changeProgress(24), 2000);
   setTimeout(() => changeProgress(34), 3000);
   setTimeout(() => changeProgress(38), 3866);
   setTimeout(() => changeProgress(42), 4000);
   setTimeout(() => changeProgress(45), 4500);
   setTimeout(() => changeProgress(85), 5600);
   setTimeout(() => changeProgress(98), 6266);
   setTimeout(() => {
      changeProgress(100)
      findResults()
   }, 8000);
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
const backdrop = document.getElementById('backdrop')
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
})
searchBlock.addEventListener('dragleave', () => {
   dragCounter--
   if (dragCounter === 0) hideDragover()
})
searchBlock.addEventListener('drop', (event) => {
   event.preventDefault()
   dragCounter = 0
   hideDragover()
   handleFileRead()
});
closeDragover.addEventListener('click',hideDragover)

const docpicker = document.getElementById('docpicker')
docpicker.addEventListener('change',(event)=>{
   handleFileRead()
   const files = event.target.files
   console.dir(files)
}) 











function findResults(){
   // Запрос на сервер, получаем константы
   const results = [
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
         thickness:'3',
         steelGrade:'ст.0-20',
         standard:'13663-86',
         amount:'30',
         unit:'Кг',
        }
     ]
   
   const tableHeaders = {
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
   
   const tableData = [
      {
         id:1,
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
         id:2,
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
         id:3,
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
   function renderTableData(id){
      const table = document.getElementById('table_'+id)
      
      const tableHeaderRow = document.createElement('tr')
      tableHeaderRow.classList.add('result-table__headers-row')
      for(let key in tableHeaders){
         const td = document.createElement('td')
         td.innerHTML = tableHeaders[key]
         td.classList.add('result-table__headers-data')
         tableHeaderRow.appendChild(td)
         if(key === 'amount'){
            const td = document.createElement('td')
            td.style.padding = "0";
            tableHeaderRow.appendChild(td)
         }
      }
      const td = document.createElement('td')
      tableHeaderRow.appendChild(td)
      table.appendChild(tableHeaderRow)
   
      const inputs = document.querySelectorAll('.amount-input-field')
      inputs.forEach((input)=>{
         input.addEventListener('focus', () => {
            inputs.forEach(el => el.classList.add('focused'));
          });
          input.addEventListener('blur', () => {
            inputs.forEach(el => el.classList.remove('focused'));
          });
      })
      
   
   
      tableData.map((item)=>{
         const tr = document.createElement('tr')
         tr.classList.add('result-table_row',`table-row_${id}`)
         for(let key in item){
            if (key === 'id') continue
            const td = document.createElement('td')
            td.innerHTML = item[key]
            if(key==='warehouse'){
               td.innerHTML = ''
               td.classList.add('warehouse')
      
               const span = document.createElement('span')
               span.innerHTML = 10
               td.appendChild(span)
      
               const a = document.createElement('a')
               a.setAttribute('href','https://e-metall.ru/postavshhiki/')
               a.innerHTML = item[key]
               td.appendChild(a)
            }
            tr.appendChild(td)
   
            if(key==='amount'){
               const info = document.createElement('td')
               info.classList.add('info')
               const img = document.createElement('img')
               img.setAttribute('src', 'img/info-gray.svg')
               img.style.marginTop = "5px";
               img.setAttribute('title','Указана розничная цена. Возможно согласование скидки')
               info.appendChild(img)
               tr.appendChild(info)
            }
         }
         const td = document.createElement('td')
         
         const button = document.createElement('a')
         button.innerText = 'В корзину'
         button.classList.add('btn-cart','btn')
         button.setAttribute('id',`btn-cart_${item.id}`)
         button.addEventListener('click',()=>{
            openCartModal()
         })
         td.appendChild(button)
      
         const more = document.createElement('div')
         more.classList.add('more-container')
      
         const img = document.createElement('img')
         img.setAttribute('src', 'img/more.svg')
         more.appendChild(img)
      
         td.appendChild(more)
         tr.appendChild(td)
         table.appendChild(tr)
   
   
         const rows = document.querySelectorAll(`.result-table_row.table-row_${id}`)
         const moreBtn = document.getElementById(`btn-more_${id}`)
         
         let visibleRows = ROWS_PER_PAGE
   
         function updateTable(){
            rows.forEach((row,index)=>{
               row.style.display = index < visibleRows ? 'table-row' : 'none'
            })
            const remainingRows = rows.length - visibleRows
   
            if (remainingRows > 0) {
               moreBtn.textContent = `Еще ${remainingRows} предложений`
               moreBtn.style.display = "flex"
            } else {
               moreBtn.style.display = "none"
            }
         }
         
         moreBtn.addEventListener('click',()=>{
            visibleRows += ROWS_PER_PAGE
            updateTable()
         })
         updateTable()
   
      })
   }
   
   const resutlsCounter = document.querySelector('.search-results__title')
   resutlsCounter.innerHTML = `Распознано ${results.length} позиции`
   const searchConteiner = document.querySelector('.search-results')
   searchConteiner.style.display = 'block'
   const resultList = document.getElementById('search-results__list')
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
                              <input type="text" value="${position.unit}" class="amount-input-field">
                           </div>
                        </div>
                        <div class="position-filter__item">
                           <a class="secondary-btn position-filter__refresh-btn btn_38" href="#" id="refresh_${position.id}">Обновить результат</a>
                        </div>
                     </div>
                     <button class="result-item__close" id="close_${position.id}">
                        <img src="img/search-close.svg">
                     </button>
                  </div>
                  <div class="result-item__body">
                     <table class="result-table" id="table_${position.id}">
                     </table>
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
         li.remove();
      })
   
   
      const moreBtn = document.createElement('a')
      moreBtn.classList.add('secondary-btn','btn_44','result-item__btn-more')
      moreBtn.setAttribute('id',`btn-more_${position.id}`)
      li.appendChild(moreBtn)
   
      renderTableData(position.id)
   })
   
   function blurTable(id){
      const table = document.getElementById('table_'+id)
      if (!table) return;
      const loadingBlur = document.createElement('div')
      loadingBlur.classList.add('loading-container')
      const circle = document.createElement('div')
      circle.classList.add('loading-circle')
      table.appendChild(loadingBlur)
      loadingBlur.appendChild(circle)
      const refreshBtns = document.querySelectorAll('.result-item__btn-more')
      console.dir(refreshBtns)
      refreshBtns.forEach((btn)=>{
         btn.classList.add('disable')
      })
      // Здесь запрос делать
      setTimeout(() => {
         loadingBlur.remove();
         refreshBtns.forEach((btn)=>{
            btn.classList.remove('disable')
         })
   
      }, 3000);
   }
}

const findBtn = document.getElementById('btn-find')
findBtn.addEventListener('click',(event)=>{
   event.preventDefault()
   handleFileRead()
})


// function openCartModal(){

// }








findResults()