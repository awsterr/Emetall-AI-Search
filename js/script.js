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
})

const copyBtn = document.getElementById('search-request__copy-btn')
copyBtn.addEventListener('click',()=>{
   navigator.clipboard.writeText('order+507@e-metall.ru')
})











function findResults(){
   // Запрос на сервер, получаем константы
   
   const searchConteiner = document.querySelector('.search-results')
   searchConteiner.style.display = 'none'
   

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
         li.remove();
      })
   
   
      const moreBtn = document.createElement('a')
      moreBtn.classList.add('secondary-btn','btn_44','result-item__btn-more')
      moreBtn.style.display = 'none'
      moreBtn.setAttribute('id',`btn-more_${position.id}`)
      li.appendChild(moreBtn)
   
   })
   mockTableGenerator(results)
   tableUpdate()
   
}

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

const findBtn = document.getElementById('btn-find')
findBtn.addEventListener('click',(event)=>{
   event.preventDefault()
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
   let value = getValue()
   updateValue(value + 1)
})
cartModalMinus.addEventListener("click", () => {
   let value = getValue()
   updateValue(Math.max(0, value - 1))
})
cartModalAmount.addEventListener("input", () => {
   let value = cartModalAmount.value.replace(",", ".")
   if (!/^\d+(\.\d{0,2})?$/.test(value)) {
      cartModalAmount.value = getValue().toFixed(2).replace(".", ",")
   }
});

function getValue() {
   let rawValue = cartModalAmount.value.replace(",", ".")
   let parsedValue = parseFloat(rawValue)
   return isNaN(parsedValue) ? 0 : parsedValue
}

function updateValue(value) {
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


findResults()








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
         // id:1,
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
         // id:2,
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
         // id:3,
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
// mockTableGenerator()

function tableUpdate(){
   const tablesColection = document.querySelectorAll('.table.table-striped')
   if (tablesColection.length === 0) return
   
   tablesColection.forEach((table)=>{
      const thead = table.querySelector("thead");
      const tbody = table.querySelector("tbody");
      if (thead) thead.classList.add("result-table__thead");
      if (tbody) tbody.classList.add("result-table__tbody");

      thead?.querySelectorAll("tr").forEach(tr=>tr.classList.add('result-table__thead-tr'))
      tbody?.querySelectorAll("tr").forEach(tr=>tr.classList.add('result-table__tbody-tr'))

      let infoColumnIndex = -1
      let warehouseColumnIndex = -1
      thead.querySelectorAll("tr").forEach(tr => {
         tr.querySelectorAll("th").forEach((th,index) => {
            if (th.textContent.trim() === "Цена, руб с НДС") {
               const newTh = document.createElement("th");
               newTh.classList.add('info')
               tr.insertBefore(newTh, th)

               infoColumnIndex = index
            }
            if (th.textContent.trim() === "Металлобаза") {
               warehouseColumnIndex = index
            }
         });
      });
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
            const tdList = tr.querySelectorAll("td");
            if (tdList.length > warehouseColumnIndex) {
               const targetTd = tdList[warehouseColumnIndex+1];
               targetTd.classList.add("warehouse");

               const span = document.createElement("span");
               span.textContent = "10";

               const link = document.createElement("a")
               link.href = "https://e-metall.ru/postavshhiki/";
               link.textContent = targetTd.textContent.trim()
               targetTd.innerHTML = "";
               targetTd.appendChild(span);
               targetTd.appendChild(link);
            }
         });
      }

      tbody.querySelectorAll("tr").forEach(tr => {
         const newTd = document.createElement("td");

         // Создаем <a> кнопку "В корзину"
         const cartButton = document.createElement("a");
         cartButton.classList.add("btn-cart", "btn");
         cartButton.textContent = "В корзину";
         cartButton.addEventListener('click',openCartModal)

         // Создаем контейнер <div> с изображением more.svg
         const moreContainer = document.createElement("div");
         moreContainer.classList.add("more-container");


         const moreImage = document.createElement("img");
         moreImage.src = "img/more.svg";
         // Добавляем изображение внутрь контейнера
         moreContainer.appendChild(moreImage);

         const moreMenu = document.createElement("div");
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
         moreContainer.appendChild(moreMenu);

         // Добавляем кнопку и контейнер внутрь <td>
         newTd.appendChild(cartButton);
         newTd.appendChild(moreContainer);

         // Добавляем новый <td> в <tr>
         tr.appendChild(newTd);
      });

      thead.querySelector("tr").appendChild(document.createElement("th"))

      thead?.querySelectorAll("th").forEach(th => th.classList.add("result-table__th"));
      tbody?.querySelectorAll("td").forEach(td => td.classList.add("result-table__td"));
   
   })
}

document.querySelectorAll('.info-icon').forEach(icon => {
   const extraInfo = icon.nextElementSibling;

   if (extraInfo && extraInfo.classList.contains('extra-info')) {
      icon.addEventListener('mouseover', () => {
         extraInfo.style.display = 'block';
      });

      icon.addEventListener('mouseout', () => {
         extraInfo.style.display = 'none';
      });
   }
});
document.querySelectorAll('.more-container').forEach(more => {
   const extraInfo = more.children[1];
   if (extraInfo && extraInfo.classList.contains('more-menu')) {
      more.addEventListener('click', (event) => {
         event.stopPropagation()
         document.querySelectorAll('.more-menu').forEach(menu => {
            if (menu !== extraInfo) menu.style.display = 'none';
            menu.closest('.more-container').style.background = ''
         });
         if (extraInfo.style.display === 'block') {
            extraInfo.style.display = 'none';
            more.style.background = ''; // Сброс фона
         } else {
            extraInfo.style.display = 'block';
            more.style.background = '#E3E3E3'; // Установка фона
         }
      });
      
   }
});
document.addEventListener('click', () => {
   document.querySelectorAll('.more-menu').forEach(menu => {
      menu.style.display = 'none';
      menu.closest('.more-container').style.background = ''
   });
});
// tableUpdate()