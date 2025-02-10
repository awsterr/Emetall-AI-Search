
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
   setTimeout(() => changeProgress(100), 8000);
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







const tableHeaders = [
   'Диаметр',
   'Стенка',
   'Марка стали',
   'Стандарт',
   'Длина',
   'Наличие',
   '', // Для примечания
   'Цена, руб с НДС',
   'Металлобаза',
   'Город',
   '' // Для кнопок 
]
const tableData = [
   {
      'Диаметр':'Труба 50х50',
      'Стенка':'3',
      'Марка стали':'ст.0-20',
      'Стандарт':'ГОСТ 13663-86',
      'Длина':'6',
      'Наличие':'36.58 т',
      'Цена, руб с НДС':'53 400 руб/т',
      'Металлобаза':'Металлторг',
      'Город':'Екатеринбург',
   },{
      'Диаметр':'Труба 50х50',
      'Стенка':'3',
      'Марка стали':'ст.0-20',
      'Стандарт':'ГОСТ 13663-86',
      'Длина':'6',
      'Наличие':'36.58 т',
      'Цена, руб с НДС':'53 400 руб/т',
      'Металлобаза':'Металлторг',
      'Город':'Екатеринбург',
   },{
      'Диаметр':'Труба 50х50',
      'Стенка':'3',
      'Марка стали':'ст.0-20',
      'Стандарт':'ГОСТ 13663-86',
      'Длина':'6',
      'Наличие':'36.58 т',
      'Цена, руб с НДС':'53 400 руб/т',
      'Металлобаза':'Металлторг',
      'Город':'Екатеринбург',
   },{
      'Диаметр':'Труба 50х50',
      'Стенка':'3',
      'Марка стали':'ст.0-20',
      'Стандарт':'ГОСТ 13663-86',
      'Длина':'6',
      'Наличие':'36.58 т',
      'Цена, руб с НДС':'53 400 руб/т',
      'Металлобаза':'Металлторг',
      'Город':'Екатеринбург',
   },{
      'Диаметр':'Труба 50х50',
      'Стенка':'3',
      'Марка стали':'ст.0-20',
      'Стандарт':'ГОСТ 13663-86',
      'Длина':'6',
      'Наличие':'36.58 т',
      'Цена, руб с НДС':'53 400 руб/т',
      'Металлобаза':'Металлторг',
      'Город':'Екатеринбург',
   },{
      'Диаметр':'Труба 50х50',
      'Стенка':'3',
      'Марка стали':'ст.0-20',
      'Стандарт':'ГОСТ 13663-86',
      'Длина':'6',
      'Наличие':'36.58 т',
      'Цена, руб с НДС':'53 400 руб/т',
      'Металлобаза':'Металлторг',
      'Город':'Екатеринбург',
   },{
      'Диаметр':'Труба 50х50',
      'Стенка':'3',
      'Марка стали':'ст.0-20',
      'Стандарт':'ГОСТ 13663-86',
      'Длина':'6',
      'Наличие':'36.58 т',
      'Цена, руб с НДС':'53 400 руб/т',
      'Металлобаза':'Металлторг',
      'Город':'Екатеринбург',
   },{
      'Диаметр':'Труба 50х50',
      'Стенка':'3',
      'Марка стали':'ст.0-20',
      'Стандарт':'ГОСТ 13663-86',
      'Длина':'6',
      'Наличие':'36.58 т',
      'Цена, руб с НДС':'53 400 руб/т',
      'Металлобаза':'Металлторг',
      'Город':'Екатеринбург',
   },{
      'Диаметр':'Труба 50х50',
      'Стенка':'3',
      'Марка стали':'ст.0-20',
      'Стандарт':'ГОСТ 13663-86',
      'Длина':'6',
      'Наличие':'36.58 т',
      'Цена, руб с НДС':'53 400 руб/т',
      'Металлобаза':'Металлторг',
      'Город':'Екатеринбург',
   },{
      'Диаметр':'Труба 50х50',
      'Стенка':'3',
      'Марка стали':'ст.0-20',
      'Стандарт':'ГОСТ 13663-86',
      'Длина':'6',
      'Наличие':'36.58 т',
      'Цена, руб с НДС':'53 400 руб/т',
      'Металлобаза':'Металлторг',
      'Город':'Екатеринбург',
   },{
      'Диаметр':'Труба 50х50',
      'Стенка':'3',
      'Марка стали':'ст.0-20',
      'Стандарт':'ГОСТ 13663-86',
      'Длина':'6',
      'Наличие':'36.58 т',
      'Цена, руб с НДС':'53 400 руб/т',
      'Металлобаза':'Металлторг',
      'Город':'Екатеринбург',
   },
]

const tableHeader = document.getElementById('result-table__header')
const tableBody = document.getElementById('result-table__body')

const table = document.getElementById('table')

const tableHeaderRow = document.createElement('tr')
tableHeaderRow.classList.add('table-headers')
tableHeaders.map((item)=>{
   const td = document.createElement('td')
   td.innerHTML = item
   tableHeaderRow.appendChild(td)
})
table.appendChild(tableHeaderRow)

tableData.map((item)=>{
   const tr = document.createElement('tr')
   for(let key in item){
      if(key==='Цена, руб с НДС'){
         const info = document.createElement('td')
         info.classList.add('info')
         const img = document.createElement('img')
         img.setAttribute('src', '/img/info-gray.svg')
         img.setAttribute('style','margin-top:5px;')
         info.appendChild(img)
         tr.appendChild(info)
      }
      const td = document.createElement('td')
      td.innerHTML = item[key]
      tr.appendChild(td)
   }
   const td = document.createElement('td')
   
   const button = document.createElement('a')
   button.innerText = 'В корзину'
   button.classList.add('btn-cart')
   td.appendChild(button)

   const more = document.createElement('div')
   more.classList.add('more-container')

   const img = document.createElement('img')
   img.setAttribute('src', '/img/more.svg')
   more.appendChild(img)

   td.appendChild(more)
   tr.appendChild(td)
   table.appendChild(tr)
})
