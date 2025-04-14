const container = document.querySelector('.profile__subscribe__info')
// ['NO_SUB','FREE_TRIAL','TRIAL_END','SUB']
let subscribeStatus = 'NO_SUB'
function renderSubscribeInfo(subscribeStatus){
   switch (subscribeStatus){
   case 'NO_SUB': container.innerHTML = `
                                             <div class="profile__subscribe__actual">
                                                <p class="fw_600 mb_22">Ваша подписка <span class="pro pro-plus">Pro</span></p>
                                                <div class="profile-subscribe__body-wrapper">
                                                   <svg class="diamond" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                      <g clip-path="url(#clip0_430_1501)">
                                                      <path d="M19.7422 13.1797L18.2589 14.8843L13.9257 26.0816L14 28L26.3047 13.1797L25.4332 12.3594H20.9213L19.7422 13.1797Z" fill="#136EF1"/>
                                                      <path d="M1.69531 13.1797L14 28L14.1602 26.3026L9.64972 14.6495L8.25781 13.1797L7.18151 12.3594H2.82373L1.69531 13.1797Z" fill="#136EF1"/>
                                                      <path d="M23.0234 6.61719L21.711 7.60145L19.4448 12.1337L19.7422 13.1797H26.3047L23.0234 6.61719Z" fill="#1689FC"/>
                                                      <path d="M4.97656 6.61719L6.41244 7.84826L8.73316 12.4898L8.25781 13.1797H1.69531L4.97656 6.61719Z" fill="#1689FC"/>
                                                      <path d="M19.7422 13.1797L14 28L8.25781 13.1797L9.70156 12.3594H18.2L19.7422 13.1797Z" fill="#17ACE8"/>
                                                      <path d="M19.7422 13.1797L14 28V12.3594H18.2L19.7422 13.1797Z" fill="#1689FC"/>
                                                      <path d="M14.8203 0.820312V2.51562C14.8203 2.97495 14.4594 3.33594 14 3.33594C13.5406 3.33594 13.1797 2.97495 13.1797 2.51562V0.820312C13.1797 0.360883 13.5406 0 14 0C14.4594 0 14.8203 0.360883 14.8203 0.820312Z" fill="#CAE8F9"/>
                                                      <path d="M9.93929 5.01741C9.7294 5.01741 9.51951 4.93729 9.35933 4.77706L8.19936 3.61708C7.87894 3.29667 7.87894 2.77752 8.19936 2.45711C8.51977 2.13669 9.03892 2.13669 9.35933 2.45711L10.5193 3.61708C10.8397 3.9375 10.8397 4.45665 10.5193 4.77706C10.3591 4.93729 10.1492 5.01741 9.93929 5.01741Z" fill="#CAE8F9"/>
                                                      <path d="M18.0607 5.01741C17.8508 5.01741 17.6409 4.93729 17.4807 4.77706C17.1603 4.45665 17.1603 3.9375 17.4807 3.61708L18.6407 2.45711C18.9611 2.13669 19.4803 2.13669 19.8007 2.45711C20.1211 2.77752 20.1211 3.29667 19.8007 3.61708L18.6407 4.77706C18.4805 4.93729 18.2706 5.01741 18.0607 5.01741Z" fill="#B7E0F6"/>
                                                      <path d="M14 6.61719L14.1319 7.70541L18.3713 12.5505L19.7422 13.1797L23.0234 6.61719H14Z" fill="#17ACE8"/>
                                                      <path d="M14 6.61719L14.1247 7.41212L9.84041 12.3085L8.25781 13.1797L4.97656 6.61719H14Z" fill="#17ACE8"/>
                                                      <path d="M14.8203 0.820312V2.51562C14.8203 2.97495 14.4594 3.33594 14 3.33594V0C14.4594 0 14.8203 0.360883 14.8203 0.820312Z" fill="#B7E0F6"/>
                                                      <path d="M19.7422 13.1797H8.25781L14 6.61719L19.7422 13.1797Z" fill="#CAE8F9"/>
                                                      <path d="M19.7422 13.1797H14V6.61719L19.7422 13.1797Z" fill="#B7E0F6"/>
                                                      </g>
                                                      <defs>
                                                      <clipPath id="clip0_430_1501">
                                                      <rect width="28" height="28" fill="white"/>
                                                      </clipPath>
                                                      </defs>
                                                   </svg>
                                                   <p class="blue lh_150">Вам доступен бесплатный пробный период сроком на&nbsp;1&nbsp;месяц!</p>
                                                </div>
                                                <a href="" class="btn btn_38 fs_14" id="trial">Попробовать <span class="desktop">&nbsp;30 дней&nbsp;</span> бесплатно</a>
                                             </div>
                                             <div class="profile__subscribe__about fs_14">
                                                <p class="fw_600 mb_12">Что входит в пробный период?</p>
                                                <ul class="profile__subscribe__advantages mb_18">
                                                   <li>Базовые функции сайта</li>
                                                   <li>До 50 автопоисков в месяц</li>
                                                   <li>Расширенная база поставщиков</li>
                                                   <li>Отправка заявки в любом формате</li>
                                                   <li>Разбор многопозиционных заявок</li>
                                                </ul>
                                                <div class="profile__subscribe__about__wrapper">
                                                   <a href="" class="no-visited">
                                                      Подробнее
                                                   </a>
                                                   <a href="" class="no-visited">
                                                      Нужна помощь?
                                                   </a>
                                                </div>
                                             </div>`
                  break
   case 'FREE_TRIAL': container.innerHTML = `<div class="profile__subscribe__actual">
                                                   <p class="fw_600 mb_22 profile__subscribe__actual__title">Ваша подписка <span class="pro pro-plus">Pro</span>
                                                      
                                                      <span class="subscribe-status active">
                                                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                                                            <path d="M0.2955 5.47787C0.20213 5.38904 0.127789 5.28216 0.0769916 5.16371C0.0261941 5.04527 0 4.91774 0 4.78887C0 4.65999 0.0261941 4.53246 0.0769916 4.41402C0.127789 4.29558 0.20213 4.1887 0.2955 4.09987L0.2625 4.13087C0.456752 3.94695 0.714296 3.84479 0.9818 3.84553C1.2493 3.84628 1.50628 3.94987 1.6995 4.13487L4.5795 6.90487L11.4645 0.282867C11.6584 0.100969 11.9143 -0.000185533 12.1802 2.5547e-07C12.4461 0.000186044 12.7019 0.101699 12.8955 0.283867L12.8625 0.252867C12.9565 0.341869 13.0313 0.44916 13.0823 0.568143C13.1333 0.687125 13.1594 0.815282 13.159 0.944731C13.1587 1.07418 13.1318 1.20218 13.0801 1.32087C13.0284 1.43955 12.953 1.54641 12.8585 1.63487L5.3005 8.90287C5.10609 9.08583 4.84945 9.18813 4.58249 9.18905C4.31552 9.18998 4.05817 9.08948 3.8625 8.90787L0.2955 5.47787Z" fill="currentColor"/>
                                                         </svg>Активна
                                                      </span>
                                                   </p>
                                                   <p class="gray2 lh_150">У вас действует бесплатный пробный период <br> еще 27 дней</p>
                                                   <a href="" class="btn secondary-btn btn_38 fs_14 short">Купить подписку</a>
                                                </div>
                                                <div class="profile__subscribe__about fs_14">
                                                   <p class="fw_600 mb_12">Что входит в пробный период?</p>
                                                   <ul class="profile__subscribe__advantages mb_18">
                                                      <li>Базовые функции сайта</li>
                                                      <li>До 50 автопоисков в месяц</li>
                                                      <li>Расширенная база поставщиков</li>
                                                      <li>Отправка заявки в любом формате</li>
                                                      <li>Разбор многопозиционных заявок</li>
                                                   </ul>
                                                   <div class="profile__subscribe__about__wrapper">
                                                      <a href="" class="no-visited">
                                                         Подробнее
                                                      </a>
                                                      <a href="" class="no-visited">
                                                         Нужна помощь?
                                                      </a>
                                                   </div>
                                                </div>`
                        break
   case 'TRIAL_END': container.innerHTML = `<div class="profile__subscribe__actual">
                                                <p class="fw_600 mb_22 profile__subscribe__actual__title">Ваша подписка <span class="pro pro-plus pro-inactive">Pro</span>
                                                   
                                                   <span class="subscribe-status inactive">
                                                      Неактивна
                                                   </span>
                                                </p>
                                                <p class="gray2 lh_150">У вас закончился бесплатный пробный период. </p>
                                                <a href="" class="btn btn_38 fs_14 short">Купить подписку</a>
                                             </div>
                                             <div class="profile__subscribe__about fs_14">
                                                <p class="fw_600 mb_12">Что входит в пробный период?</p>
                                                <ul class="profile__subscribe__advantages mb_18">
                                                   <li>Базовые функции сайта</li>
                                                   <li class="disabled">До 50 автопоисков в месяц</li>
                                                   <li class="disabled">Расширенная база поставщиков</li>
                                                   <li class="disabled">Отправка заявки в любом формате</li>
                                                   <li class="disabled">Разбор многопозиционных заявок</li>
                                                </ul>
                                                <div class="profile__subscribe__about__wrapper">
                                                   <a href="" class="no-visited">
                                                      Подробнее
                                                   </a>
                                                   <a href="" class="no-visited">
                                                      Нужна помощь?
                                                   </a>
                                                </div>
                                             </div>`
                     break
   default: container.innerHTML = `<div class="profile__subscribe__actual">
                                       <p class="fw_600 mb_22 profile__subscribe__actual__title">Ваша подписка <span class="pro pro-plus">Pro</span>
                                          
                                          <span class="subscribe-status active">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                                                <path d="M0.2955 5.47787C0.20213 5.38904 0.127789 5.28216 0.0769916 5.16371C0.0261941 5.04527 0 4.91774 0 4.78887C0 4.65999 0.0261941 4.53246 0.0769916 4.41402C0.127789 4.29558 0.20213 4.1887 0.2955 4.09987L0.2625 4.13087C0.456752 3.94695 0.714296 3.84479 0.9818 3.84553C1.2493 3.84628 1.50628 3.94987 1.6995 4.13487L4.5795 6.90487L11.4645 0.282867C11.6584 0.100969 11.9143 -0.000185533 12.1802 2.5547e-07C12.4461 0.000186044 12.7019 0.101699 12.8955 0.283867L12.8625 0.252867C12.9565 0.341869 13.0313 0.44916 13.0823 0.568143C13.1333 0.687125 13.1594 0.815282 13.159 0.944731C13.1587 1.07418 13.1318 1.20218 13.0801 1.32087C13.0284 1.43955 12.953 1.54641 12.8585 1.63487L5.3005 8.90287C5.10609 9.08583 4.84945 9.18813 4.58249 9.18905C4.31552 9.18998 4.05817 9.08948 3.8625 8.90787L0.2955 5.47787Z" fill="currentColor"/>
                                             </svg>Активна
                                          </span>
                                       </p>
                                       <p class="gray2 lh_150">Действует до 12 октября 2025</p>
                                    </div>
                                    <div class="profile__subscribe__about fs_14">
                                       <p class="fw_600 mb_12">Что входит в пробный период?</p>
                                       <ul class="profile__subscribe__advantages mb_18">
                                          <li>Базовые функции сайта</li>
                                          <li>До 50 автопоисков в месяц</li>
                                          <li>Расширенная база поставщиков</li>
                                          <li>Отправка заявки в любом формате</li>
                                          <li>Разбор многопозиционных заявок</li>
                                       </ul>
                                       <div class="profile__subscribe__about__wrapper">
                                          <a href="" class="no-visited">
                                             Подробнее
                                          </a>
                                          <a href="" class="no-visited">
                                             Нужна помощь?
                                          </a>
                                       </div>
                                    </div>`
}
}
renderSubscribeInfo(subscribeStatus)


const modal = document.querySelector('.subscribe-modal__body')
      const trialBtn = document.getElementById('trial')
      const backdrop = document.querySelector('.subscribe-modal')
      const closeIcon = document.querySelector('.close-icon')
      const activateBtn = document.querySelector('#activate_sub')

      activateBtn.addEventListener('click',(event)=>{
         event.preventDefault()
         backdrop.innerHTML = `<div class="subscribe-modal__body success">
                                 <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M0.246142 0.246142C-0.0820384 0.574323 -0.0820565 1.10641 0.246142 1.43461L3.81154 5L0.246142 8.56539C-0.0820384 8.89357 -0.0820565 9.42566 0.246142 9.75386C0.574341 10.0821 1.10643 10.082 1.43461 9.75386L5 6.18846L8.56539 9.75386C8.89359 10.0821 9.42568 10.082 9.75386 9.75386C10.082 9.42568 10.0821 8.89359 9.75386 8.56539L6.18846 5L9.75386 1.43461C10.082 1.10643 10.0821 0.574341 9.75386 0.246142C9.42566 -0.0820565 8.89357 -0.0820384 8.56539 0.246142L5 3.81154L1.43461 0.246142C1.10641 -0.0820565 0.574323 -0.0820384 0.246142 0.246142Z" fill="#9295AE"/>
                                 </svg>
                                 <svg class="diamond" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <g clip-path="url(#clip0_430_1501)">
                                    <path d="M19.7422 13.1797L18.2589 14.8843L13.9257 26.0816L14 28L26.3047 13.1797L25.4332 12.3594H20.9213L19.7422 13.1797Z" fill="#136EF1"/>
                                    <path d="M1.69531 13.1797L14 28L14.1602 26.3026L9.64972 14.6495L8.25781 13.1797L7.18151 12.3594H2.82373L1.69531 13.1797Z" fill="#136EF1"/>
                                    <path d="M23.0234 6.61719L21.711 7.60145L19.4448 12.1337L19.7422 13.1797H26.3047L23.0234 6.61719Z" fill="#1689FC"/>
                                    <path d="M4.97656 6.61719L6.41244 7.84826L8.73316 12.4898L8.25781 13.1797H1.69531L4.97656 6.61719Z" fill="#1689FC"/>
                                    <path d="M19.7422 13.1797L14 28L8.25781 13.1797L9.70156 12.3594H18.2L19.7422 13.1797Z" fill="#17ACE8"/>
                                    <path d="M19.7422 13.1797L14 28V12.3594H18.2L19.7422 13.1797Z" fill="#1689FC"/>
                                    <path d="M14.8203 0.820312V2.51562C14.8203 2.97495 14.4594 3.33594 14 3.33594C13.5406 3.33594 13.1797 2.97495 13.1797 2.51562V0.820312C13.1797 0.360883 13.5406 0 14 0C14.4594 0 14.8203 0.360883 14.8203 0.820312Z" fill="#CAE8F9"/>
                                    <path d="M9.93929 5.01741C9.7294 5.01741 9.51951 4.93729 9.35933 4.77706L8.19936 3.61708C7.87894 3.29667 7.87894 2.77752 8.19936 2.45711C8.51977 2.13669 9.03892 2.13669 9.35933 2.45711L10.5193 3.61708C10.8397 3.9375 10.8397 4.45665 10.5193 4.77706C10.3591 4.93729 10.1492 5.01741 9.93929 5.01741Z" fill="#CAE8F9"/>
                                    <path d="M18.0607 5.01741C17.8508 5.01741 17.6409 4.93729 17.4807 4.77706C17.1603 4.45665 17.1603 3.9375 17.4807 3.61708L18.6407 2.45711C18.9611 2.13669 19.4803 2.13669 19.8007 2.45711C20.1211 2.77752 20.1211 3.29667 19.8007 3.61708L18.6407 4.77706C18.4805 4.93729 18.2706 5.01741 18.0607 5.01741Z" fill="#B7E0F6"/>
                                    <path d="M14 6.61719L14.1319 7.70541L18.3713 12.5505L19.7422 13.1797L23.0234 6.61719H14Z" fill="#17ACE8"/>
                                    <path d="M14 6.61719L14.1247 7.41212L9.84041 12.3085L8.25781 13.1797L4.97656 6.61719H14Z" fill="#17ACE8"/>
                                    <path d="M14.8203 0.820312V2.51562C14.8203 2.97495 14.4594 3.33594 14 3.33594V0C14.4594 0 14.8203 0.360883 14.8203 0.820312Z" fill="#B7E0F6"/>
                                    <path d="M19.7422 13.1797H8.25781L14 6.61719L19.7422 13.1797Z" fill="#CAE8F9"/>
                                    <path d="M19.7422 13.1797H14V6.61719L19.7422 13.1797Z" fill="#B7E0F6"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_430_1501">
                                    <rect width="28" height="28" fill="white"/>
                                    </clipPath>
                                    </defs>
                                 </svg>
                                 <p class="fw_600 mb_22 profile__subscribe__actual__title">Ваша подписка <span class="pro pro-plus">Pro</span>
                                                      
                                    <span class="subscribe-status active">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                                          <path d="M0.2955 5.47787C0.20213 5.38904 0.127789 5.28216 0.0769916 5.16371C0.0261941 5.04527 0 4.91774 0 4.78887C0 4.65999 0.0261941 4.53246 0.0769916 4.41402C0.127789 4.29558 0.20213 4.1887 0.2955 4.09987L0.2625 4.13087C0.456752 3.94695 0.714296 3.84479 0.9818 3.84553C1.2493 3.84628 1.50628 3.94987 1.6995 4.13487L4.5795 6.90487L11.4645 0.282867C11.6584 0.100969 11.9143 -0.000185533 12.1802 2.5547e-07C12.4461 0.000186044 12.7019 0.101699 12.8955 0.283867L12.8625 0.252867C12.9565 0.341869 13.0313 0.44916 13.0823 0.568143C13.1333 0.687125 13.1594 0.815282 13.159 0.944731C13.1587 1.07418 13.1318 1.20218 13.0801 1.32087C13.0284 1.43955 12.953 1.54641 12.8585 1.63487L5.3005 8.90287C5.10609 9.08583 4.84945 9.18813 4.58249 9.18905C4.31552 9.18998 4.05817 9.08948 3.8625 8.90787L0.2955 5.47787Z" fill="currentColor"/>
                                       </svg>Активна
                                    </span>
                                 </p>
                                 <p class="subscribe-modal__title">Вы активировали бесплатный пробный период!</p>
                                 <p class="subscribe-modal__text">Вам теперь доступен автоматический поиск металлопроката по расширенной базе поставщиков</p>
                                 <a href="https://e-metall.ru/smart/" class="btn btn_38 fs_14">Начать пользоваться</a>
                              </div>`
         renderSubscribeInfo('FREE_TRIAL')

         let newClose = document.querySelector('.close-icon')
         newClose.addEventListener('click',(event)=>{
         backdrop.style.display = 'none'
      })
      })

      closeIcon.addEventListener('click',(event)=>{
         backdrop.style.display = 'none'
      })
      trialBtn.addEventListener('click',(event)=>{
         event.preventDefault()
         backdrop.style.display = 'flex'
      })

      backdrop.addEventListener('click',(event)=>{
         if (event.target === backdrop) {
            backdrop.style.display = 'none'
         }
      })