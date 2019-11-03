SMS-команды
*****
Безопасность прежде всего
======
AndroidAPS позволяет контролировать телефон ребенка удаленно посредством текстовых сообщений (смс). Если смс-коммуникатор активирован, не забывайте, что телефон, настроенный на подачу удаленных команд, может быть украден. Поэтому всегда защищайте смартфон хотя бы ПИН-кодом.
* AndroidAPS при помощи смс также сообщит, выполнены ли удаленные команды, такие как болюс или изменения профиля. Рекомендуется сделать такую настройку, чтобы подтверждающие тексты направлялись по меньшей мере на два разных телефона на тот случай, если один из них украден.
* **If you bolus through SMS Commands you must enter carbs through Nightscout (NSClient, Website...)!** If you fail to do so IOB would be correct with too low COB potentially leading to not performed correction bolus as AAPS assumes that you have too much active insulin.

Как это работает
=====
* Most of the adjustments of temp targets, following AAPS etc. can be done on `NSclient app <../Children/Children.html>`_ on an Android phone with an internet connection.
* Boluses can't be given through Nightscout, but you can use SMS commands.
* If you use an iPhone as a follower and therefore cannot use NSclient, there are additional SMS commands available.

* In your android phone setting go to Applications > AndroidAPS > Permissions and enable SMS
* In AndroidAPS go to Preferences > SMS Communicator and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons, no spaces or other characters anywhere - i.e. +4412345678;+4412345679), а также включите опцию 'Разрешить удаленные команды с помощью СМС'.

  .. image:: ../images/SMSCommandsSetup.png
    :alt: SMS Commands Setup

* Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the commands below in **CAPITAL LETTERS**, the phone will respond to confirm success of command or status requested. Если необходимо, подтвердите команду, отправив код, предлагаемый в ответном SMS-сообщении.

**Подсказка: Если отправляется много SMS, полезно держать функцию SMS незанятой на обоих телефонах,.

Команды
=====

Commands must be send in English, response will be in your local language if the response string is already `translated <../translations.html#translate-strings-for-androidaps-app>`_.

.. image:: ../images/SMSCommands.png
  :alt: SMS Commands Example

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
