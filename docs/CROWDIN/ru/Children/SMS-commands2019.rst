SMS-команды
*****
Безопасность прежде всего
======
AndroidAPS позволяет контролировать телефон ребенка удаленно посредством текстовых сообщений (смс). Если смс-коммуникатор активирован, не забывайте, что телефон, настроенный на подачу удаленных команд, может быть украден. Поэтому всегда защищайте смартфон хотя бы ПИН-кодом.
* AndroidAPS при помощи смс также сообщит, выполнены ли удаленные команды, такие как болюс или изменения профиля. Рекомендуется сделать такую настройку, чтобы подтверждающие тексты направлялись по меньшей мере на два разных телефона на тот случай, если один из них украден.
* **Если вы подаете болюс через SMS-команды необходимо вводить углеводы через Nightscout (NSClient, сайт...)!** Если вы этого не сделаете, AAPS учтет правильное количество активного инсулина IOB, и будет считать, что активных углеводов COB слишком мало и, вероятно, не будет подавать корректировочный болюс, полагая, что у вас много активного инсулина.

Как это работает
=====
* Большинство корректировок временных целей, слежение за работой ААПС и т. д. может выполняться в приложении ` NSclient <../Children/Children.html> ` _ на Android-телефоне с подключением к Интернету.
* Болюсы не могут подаваться через Nightscout, но можно использовать SMS-команды.
* Если у вас iPhone для слежения и, следовательно, нет возможности использовать NSclient, доступны дополнительные SMS-команды.

* В настройках Android телефон перейдите в приложения > AndroidAPS > Разрешения и включите SMS
* В AndroidAPS перейдите в Настройки > SMS Коммуникатор и введите номер телефона(ов), с которых вы хотите отправлять SMS команды (разделенные точками с запятой, без пробелов или других символов - напр. +4412345678;+4412345679), а также включите опцию 'Разрешить удаленные команды с помощью СМС'.

  .. изображение:: ../images/SMSCommandsSetup.png
    :alt: Настройка SMS команд

* Отправьте SMS на телефон с AndroidAPS с одобренного(ых) вами телефона(ов) при помощи команд перечисленных ниже **ЗАГЛАВНЫМИ БУКВАМИ**, телефон ответит подтверждением успешного выполнения команды или запрошенного статуса. Если необходимо, подтвердите команду, отправив код, предлагаемый в ответном SMS-сообщении.

**Подсказка: Если отправляется много SMS, полезно держать функцию SMS незанятой на обоих телефонах,.

Команды
=====

Команды должны отправляться на английском языке, ответ будет получен на локальном языке, если строка ответа уже " переведена <../translations.html#translate-strings-pl-androidaps-app> ` _.

.. изображение:: ../images/SMSCommandsSetup.png
  :alt: Пример команд SMS

Замкнутый цикл
-----
* ОТКЛЮЧИТЬ ЗЦ
   * Ответ: цикл отключен
* ВКЛЮЧИТЬ ЗЦ
   * Ответ: цикл включен
* СТАТУС ЗЦ
   * Ответ зависит от фактического состояния
      * зцикл не работает
      * зцикл работает
      * Остановлен (на 10 мин)
* ОСТАНОВИТЬ ЗЦ 20
   * Зцикл остановлен на 20 минут
* ВОЗОБНОВИТЬ ЗЦ
   * Ответ: Цикл возобновлен

Данные мониторинга
-----
* BG/ГК
   * Response: Last BG: 5.6 4min ago, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)
* CAL 5.6
   * Response: To send calibration 5.6 reply with code Rrt
   * Response after correct code was received: Calibration sent (**If xDrip is installed. Accepting calibrations must be enabled in xDrip+**)

Basal
-----
* BASAL STOP/CANCEL
   * Response: To stop temp basal reply with code EmF [Note: Code EmF is just an example]
* BASAL 0.3
   * Response: To start basal 0.3U/h for 30 min reply with code Swe
* BASAL 0.3 20
   * Response: To start basal 0.3U/h for 20 min reply with code Swe
* BASAL 30%
   * Response: To start basal 30% for 30 min reply with code Swe
* BASAL 30% 50
   * Response: To start basal 30% for 50 min reply with code Swe

Bolus
-----
* BOLUS 1.2
   * Response depends time last bolus was given
      * To deliver bolus 1.2U reply with code Rrt
      * Remote bolus not available. Try again later. (**Remote bolus not allowed within 15 min after last bolus command or remote commands!**)
* EXTENDED STOP/CANCEL
   * Response: To stop extended bolus reply with code EmF
* EXTENDED 2 120
   * Response: To start extended bolus 2U for 120 min reply with code EmF

Профиль
-----
* PROFILE STATUS
   * Response: Profile1
* PROFILE LIST
   * Response: 1.`Profile1` 2.`Profile2`
* PROFILE 1
   * Response: To switch profile to Profile1 100% reply with code Any
* PROFILE 2 30
   * Response: To switch profile to Profile2 30% reply with code Any

Другое
-----
* TREATMENTS REFRESH
   * Response: Refresh treatments from NS
* NSCLIENT RESTART
   * Response: NSCLIENT RESTART 1 receivers
* PUMP
   * Response: Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100

Устранение неполадок
=====
There was a report on SMS commands stopping after an update on Galaxy S10 phone. Could be solved by disabeling 'send as chat message'.

.. image:: ../images/SMSdisableChat.png
  :alt: Disable SMS as chat message
