# Помпа Accu Chek Combo

**Настоящее ПО является частью самодеятельной разработки, а не готовым программным продуктом. От ВАС потребуется прочитать, изучить и понять систему и то, как ей пользоваться. Она не контролирует диабет за вас, но позволит улучшить компенсацию и качество жизни, если вы готовы уделить ей достаточно времени. Не бросайтесь в систему сломя голову, дайте себе время на изучение. Только вы несете ответственность за то, что делаете.**

## Требования к оборудованию

- Помпа Roche Accu-Chek Combo (любая версия прошивки, работают все)
- Устройство Smartpix или Realtyme с приложением "360" для конфигурирования помпы под свои параметры. По вашему запросу фирма Roche бесплатно вышлет устройства и ПО. (как всегда, Россия здесь исключение. По крайней мере, переводчику данной документации ничего не выслали. Возможно, надо разговаривать с сотрудниками или руководителями фирмы, а не с агентами, чьи контакты нам обычно дают при установке помпы).
- Совместимый смартфон: телефон на Android с прошивкой LineageOS (прежнее название - CyanogenMod) или Android 8.1 (Oreo). LineageOS 14.1 должен быть свежей весии, не позднее июня 2017, когда в прошивку включили изменения, позволяющие соединяться с помпой Combo. Список телефонов можно найти в документе [Телефоны, работающие с AAPS](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). Имейте в виду, что это не полный список, который отражает личный пользовательский опыт. Вам предлагается также внести результаты вашего опыта и тем самым помогать другим (все подобные проекты основаны на идеологии бескорыстной помощи)

- Имейте в виду, что хотя Android 8.1 позволяет общаться с Комбо, по-прежнему есть проблемы с AAPS на 8.1. Опытные пользователи имеют возможность выполнить сопряжение на рутованном телефоне и передать настройки на другой телефон для работы с алгоритмом/AAPS, который также должен быть рутован. Такой подход позволяет пользоваться телефонами с версиями Android ниже 8.1, но еще достаточно не опробован. https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Ограничения

- Удлиненный болюс и многоволновый болюс не поддерживаются (вместо них см. [Расширенные углеводы](../Usage/Extended-Carbs))
- Поддерживается только один базальной профиль.
- Установка профиля, отличного от заданного на помпе или подача пролонгированного/многоволнового болюса с помпы конфликтует с общей скоростью базы TBR и приводит к приостановке алгоритма ИПЖ на 6 часов поскольку безопасность работы цикла нарушается.
- В настоящее время невозможно задать дату и время на помпе, поэтому переходы с/на летнее/зимнее время должны производиться вручную (вы можете деактивировать автоматический переход на телефоне вечером и утром изменить время на помпе и часах, чтобы избежать срабатывания сигнала оповещения ночью). (На территории России неактуально).
- В настоящее время поддерживаются только величины базала от 0.05 до 10 ед./час. Это также относится к изменениям профиля, например, при увеличении до 200% наивысшая величина базала не должна превышать 5 ед/час, иначе она удвоится. Аналогично, при снижении на 50%, самая низкая базальная скорость не должна быть меньше 0,10 U/ч.
- Если алгоритм цикла запрашивает отмену суммарной величины базала TBR, Комбо на 15 минут вместо нее устанавливает TBR в 90% или 110%. Это происходит потому, что отмена TBR вызывает оповещение на помпе, которое производит много вибрации.
- Периодически (раз в несколько дней) AAPS может дать сбой оповещения TBR ОТМЕНЕН при автоматической отмене TBR. Пользователю придется самостоятельно разобраться с этим (нажав кнопку "обновить" в AAPS для передачи предупреждения в программу или подтвердив получение оповещения кнопкой помпы).
- Стабильность соединения по bluetooth различна в разных телефонах и может вызвать оповещение "помпа недоступна" когда соединение разорвано. Если эта ошибка возникает, убедитесь, что Bluetooth включен, нажмите кнопку "обновить" на вкладке Комбо и проверьте, устранена ли проблема и если соединение не восстановится, перезагрузите телефон, что обычно исправляет ошибку. Есть другая проблема, при которой перезапуск не помогает. В этом случае следует нажать кнопку на помпе (она перезапустит bluetooth помпы) и помпа снова начнет принимать соединение с телефоном. В настоящее время мало что можно сделать для устранения этих проблем. Поэтому если подобные ошибки повторяются часто, подберите себе другой телефон, о котором известно, что он хорошо работает с AndroidAPS и Комбо (см. выше).
- Подача болюса с помпы не всегда распознается вовремя (проверяется только во время соединения с AAPS) и в худшем случае может занять до 20 минут. Болюсы помпы проверяются перед высоким временным базалом TBR или болюсом, подаваемым с AAPS, но из-за встроенных ограничений AAPS откажется подавать TBR/болюс т. к. его расчет производился на неверных основаниях. (-> Не подавайте болюс с помпы! См. раздел *Применение*)
- Следует избегать программирования временного базала TBR на помпе, так как контроль над TBR задается алгоритмом AAPS. Обнаружение нового временного базала TBR на помпе может занять до 20 минут, а его действие принимается в расчет алгоритмом AAPS с момента обнаружения, так что в худшем случае TBR не будет учтен как активный инсулин IOB в течении 20 минут. 

## Настройки

- Настройте помпу с помощью конфигурирующей программы 360. Если у вас нет этой программы, обратитесь в службу поддержки Акку-Чек. Обычно они высылают диск с программой "360° Pump Configuration Software" и устройство инфракрасной связи SmartPix зарегистрированным пользователям (устройство Realtyme также годится для этих целей). 
  - Требуется (на снимках экрана отмечено зеленым): 
    - Установите/оставьте конфигурацию меню как "Стандартная", покажутся только поддерживаемые меню/действия на помпе и уберутся неподдерживаемые (удлиненный/многоволновый болюс, множественные скорости базала), которые ограничивают функционал помпы в режиме AAPS.
    - Убедитесь, что *Текст Краткие сведения* установлен на "КРАТКИЕ СВЕДЕНИЯ" (без кавычек, в разделе <0>Параметры инсулиновой помпы<0>).</li> 
      
      - Установите *Максимум корректировки<0> суммарной скорости базала TBR на 500%</li> 
        
        - Отключите *Сигнал окончания временного базала*
        - Установите *приращение длительности* суммарного базала на 15 мин
        - Включите Bluetooth</ul></li> 
        
        - Рекомендуется (отмечено синим на снимках экрана) 
          - Установите сигнал оповещения о малом количестве инсулина в картридже на величину по своему усмотрению
          - Настройте максимальную величину болюса в соответствии с требованиями вашей терапии, но имея в виду защиту от ошибок в программном обеспечении
          - Аналогичным образом настройте максимальную продолжительность суммарного базала TBR на безопасный уровень. Установите эту величину по крайней мере на 3 часа, так как опция отключения помпы задает базал в виде 0% на 3 часа.
          - Включите кодовую блокировку помпы для предотвращения быстрой подачи болюса, особенно если быстрая подача болюса с помпы была в привычке до перехода на AAPS.
          - Задайте время ожидания выключения экрана и меню минимум на 5,5 и 5 соответственно. Это позволяет AAPS быстрее восстановиться после ошибок и уменьшает количество вибраций во время таких ошибок</ul></li> </ul> 
        
        ![Screenshot of user menu settings](../images/combo/combo-menu-settings.png)
        
        ![Screenshot of TBR settings](../images/combo/combo-tbr-settings.png)
        
        ![Screenshot of bolus settings](../images/combo/combo-bolus-settings.png)
        
        ![Screenshot of insulin cartridge settings](../images/combo/combo-insulin-settings.png)
        
        - Установите AndroidAPS по инструкции [AndroidAPS](http://wiki.AndroidAPS.org).
        - Для правильной работы с программой внимательно прочитайте инструкции в вики.
        - На этом этапе выберите расширение MDI а не Комбо чтобы избежать вмешательства в работу алгоритма во время установки соединения.
        - По ссылке http://ruffy.AndroidAPS.org клонируйте ruffy через git.
        - Установите утилиту и используйте его для сопряжения с помпой. Если она не работает после нескольких попыток, переключитесь на ветку `сопряжение`, установите связь с помпой и затем переключитесь обратно на исходную ветку. Обратите внимание, что сопряжение - процесс плохо контролируемый (но выполняется всего один раз) и, возможно, потребуется несколько попыток; своевременно реагируйте на запросы и, при необходимости повторить попытку, заранее удаляйте помпу из настроек Bluetooth. Можно попробовать другой вариант, который заключается в том, чтобы после начала процесса сопряжения войти в меню Bluetooth (это делает Bluetooth телефона видимым на время отображения в меню) и после подтверждения сопряжения, когда помпа показывает код авторизации, переключиться обратно на ruffy. Если вам не удалось настроить соединение с помпой (скажем, после 10 попыток) попробуйте подождать до 10 секунд, прежде чем подтвердить соединение на помпе (после появления наименования телефона на дисплее помпы). Если вы настроили тайм-аут меню меньше 5 сек., потребуется снова увеличить его. Некоторые пользователи сообщают, что им приходилось так делать. Наконец, попробуйте переместиться из одной комнаты в другую, чтобы избежать помех связи. Один из пользователей сообщил нам об устранении проблем соединения после простой перемены комнат.
        - Когда AAPS пользуется алгоритмом ruffy, утилита ruffy недоступна. Самым простым выходом в этом случае является перезагрузить телефон после сопряжения и дать возможность алгоритму ruffy запуститься в фоновом режиме.
        - Если помпа совершенно новая, требуется подать болюс на помпе, чтобы помпа произвела первую запись в логе.
        - Прежде чем активировать расширение Combo в AAPS, убедитесь в правильной настройке профиля и в его активации (!) и что профиль базала актуален т. к. AAPS будет синхронизировать профиль с помпой. После этого активируйте расширение Combo. Нажмите кнопку *Обновить* на вкладке Combo для запуска помпы.
        - Для проверки настроек, при отключенной помпе в режиме **отключено**, задайте TBR 500% на 15 мин и подайте болюс. После этого в логах помпы появится работающий TBR и болюс. AAPS должен также показать активный TBR и поданный болюс.
        
        ## Почему сопряжение с помпой не работает с утилитой "ruffy"?
        
        Существует несколько возможных причин. Попробуйте следующие действия:
        
        1. Вставьте в помпу **свежие или полностью заряженные батареи**. Подробнее см. в разделе "батарея". Убедитесь, что помпа находится вблизи смартфона.
        
        ![Combo should be next to phone](../images/Combo_next_to_Phone.png)
        
        2. Отключите или удалите любые другие устройства bluetooth, чтобы они не смогли установить подключение к телефону во время сопряжения. Любая параллельная связь по bluetooth или запрос на соединение могут нарушить процесс сопряжения.
        
        3.     Удалите уже подключенные устройства в меню Bluetooth помпы: ** настройки BLUETOOTH / подключение / удалить ** до появления сообщения 
              ** NO DEVICE ** (нет устройств).
              
        
        4. Delete a pump already connected to the phone via Bluetooth: Under Settings / Bluetooth, remove the paired device "**SpiritCombo**"
        5. Make sure, that AAPS not running in background the loop. Deaktivate Loop in AAPS.
        6. Now start ruffy on the phone. You may press Reset! and remove old Bonding. Then hit Connect!.
        7. In the Bluetooth menu of the pump, go to **ADD DEVICE / ADD CONNECTION**. Press *CONNECT!** * Step 5 and 6 have to be in a short timing.
        8.     Now the Pump should show up the BT Name of phone to select for pairing. Here it is importand to whait at least 5s 
              bevore you hit the select button on Pump. Otherwise the Pumpe will not send the Paring request to the Phone proberly.
              
              * If Combo Pump is set to 5s Screentime out, you may test it with 40s (original setting). From experiance the time 
                between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out 
                without successfully Pair. Later you should set it back to 5s, to meet AAPS Combo settings.
              * If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not 
                compatible with the pump. Make sure you are running a new **LineageOS ≥ 14.1** or **Android ≥ 8.1 (Oreo)**. If 
                possible, try another smartphone. You can find a list of already successfully used smartphones under [AAPS Phones] 
                (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 
              
        
        9.     At next Pump should show up a 10 digit security code. And Ruffy a screen to enter it. So enter it in Ruffy and you 
              should be ready to go.
              
        
        10. Reboot the phone.
        11. Now you can restart AAPS loop.
        
        ## Usage
        
        - Keep in mind that this is not a product, esp. in the beginning the user needs to monitor and understand the system, its limitations and how it can fail. It is strongly advised NOT to use this system when the person using it is not able to fully understand the system.
        - Read the OpenAPS documentation https://openaps.org to understand the loop algorithm AndroidAPS is based upon.
        - Read the wiki to learn about and understand AndroidAPS http://wiki.AndroidAPS.org
        - This integration uses the same functionality which the meter provides that comes with the Combo. The meter allows to mirror the pump screen and forwards button presses to the pump. The connection to the pump and this forwarding is what the ruffy app does. A `scripter` components reads the screen and automates entering boluses, TBRs etc and making sure inputs are processed correctly. AAPS then interacts with the scripter to apply loop commands and to administer boluses. This mode has some restrictions: it's comparatively slow (but well fast enough for what it is used for), and setting a TBR or giving a bolus causes the pump to vibrate.
        - The integration of the Combo with AndroidAPS is designed with the assumption that all inputs are made via AndroidAPS. Boluses entered on the pump directly will be detected by AAPS, but it can take up to 20 min before AndroidAPS becomes aware of such a bolus. Reading boluses delivered directly on the pump is a safety feature and not meant to be regularly used (the loop requires knowledge of carbs consumed, which can't be entered on the pump, which is another reason why all inputs should be done in AndroidAPS). 
        - Don't set or cancel a TBR on the pump. The loop assumes control of TBR and cannot work reliably otherwise, since it's not possible to determine the start time of a TBR that was set by the user on the pump.
        - The pump's first basal rate profile is read on application start and is updated by AAPS. The basal rate should not be manually changed on the pump, but will be detected and corrected as a safety measure (don't rely on safety measures by default, this is meant to detect an unintended change on the pump).
        - It's recommended to enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and using the "quick bolus" feature was a habit. Also, with keylock enabled, accidentally pressing a key will NOT interrupt active communication between AAPS and pump.
        - When a BOLUS/TBR CANCELLED alert starts on the pump during bolusing or setting a TBR, this is caused by a disconnect between pump and phone, which happens from time to time. AAPS will try to reconnect and confirm the alert and then retry the last action (boluses are NOT retried for safety reasons). Therefore, such an alarm can be ignored as AAPS will confirm it automatically, usually within 30s (cancelling it is not problem, but will lead to the currently active action to have to wait till the pump's display turns off before it can reconnect to the pump). If the pump's alarm continues, automatic corfirmation failed, in which case the user needs to confirm the alarm manually.
        - When a low cartridge or low battery alarm is raised during a bolus, they are confirmed and shown as a notification in AAPS. If they occur while no connection is open to the pump, going to the Combo tab and hitting the Refresh button will take over those alerts by confirming them and show a notification in AAPS.
        - When AAPS fails to confirm a TBR CANCELLED alert, or one is raised for a different reason, hitting Refresh in the Combo tab establishes a connection, confirms the alert and shows a notification for it in AAPS. This can safely be done, since those alerts are benign - an appropriate TBR will be set again during the next loop iteration.
        - For all other alerts raised by the pump: connecting to the pump will show the alert message in the Combo tab, e.g. "State: E4: Occlusion" as well as showing a notification on the main screen. An error will raise an urgent notification. AAPS never confirms serious errors on the pump, but let's the pump vibrate and ring to make sure the user is informed of a critical situation that needs action.
        - After pairing, ruffy should not be used directly (AAPS will start in the background as needed), since using ruffy at AAPS at the same time is not supported.
        - If AAPS crashes (or is stopped from the debugger) while AAPS and the pump were communicating (using ruffy), it might be necessary to force close ruffy. Restarting AAPS will start ruffy again. Restarting the phone is also an easy way to resolve this if you don't know how to force kill an app.
        - Don't press any buttons on the pump while AAPS communicates with the pump (Bluetooth logo is shown on the pump).