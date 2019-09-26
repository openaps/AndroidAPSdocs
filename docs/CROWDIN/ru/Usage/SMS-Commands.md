# SMS-команды

### Обход ошибки в AndroidAPS 2.3

Настройки команд SMS отключены в версиях AndroidAPS 2.3 из-за ошибки, но могут снова применяться в версии 2.4

Если вам необходимо пользоваться SMS командами, можно применить такое решение:

- Экспорт настроек
- Понижение до версии AndroidAPS 2.2 (установив ваш файл APK версии 2.2)
- Выполните настройки команд SMS в версии AndroidAPS 2.2.
- Обновитесь до AndroidAPS 2.3. Настройки SMS будут там недоступны.

## Безопасность прежде всего

- AndroidAPS позволяет вам контролировать телефон ребенка удаленно посредством текстовых сообщений (смс). Если вы активируете этот смс-коммуникатор, всегда помните, что телефон, настроенный на подачу удаленных команд, может быть украден. Поэтому всегда защищайте смартфон хотя бы ПИН-кодом.
- AndroidAPS также сообщит вам текстовым сообщением, выполнены ли ваши удаленные команды, такие как болюс или изменения профиля. Рекомендуется сделать такую настройку, чтобы подтверждающие тексты направлялись по меньшей мере на два разных телефона на тот случай, если один из них украден.

## Как это работает

В настройках Android телефон перейдите в приложения > AndroidAPS > Разрешения и включите SMS

В AndroidAPS перейдите в Настройки > SMS Коммуникатор и введите номер телефона(ов), с которых вы хотите отправлять SMS команды (разделенные запятыми, без пробелов или других символов где угодно - т.е. +4412345678;+4412345679), а также включите 'Разрешить удаленные команды через SMS'.

Отправьте SMS на телефон с AndroidAPS с одобренного(ых) вами телефона(ов) при помощи команд перечисленных ниже **жирным шрифтом**, телефон ответит подтверждением успешного выполнения команды или запрошенного статуса.

**Подсказка**: Полезно держать функцию SMS незанятой на обоих телефонах, если их отправляется много.

## BG/ГК

- Текущая ГК: 5,6 4мин назад, Дельта: -0,2 ммол, IOB: 0,20U (Болюс: 0,10U Базал: 0,10U)

## ОСТАНОВКА/ОТКЛЮЧЕНИЕ ПЕТЛИ

- Цикл остановлен

## ЦИКЛ ПУСК/ВКЛЮЧИТЬ

- зцикл активирован

## СТАТУС ПЕТЛИ

- зцикл не работает
- зцикл работает
- Остановлен (на 10 мин)

## LOOP SUSPEND 20

- Loop suspended for 20 minutes

## LOOP RESUME

- Loop resumed

## TREATMENTS REFRESH

- TERATMENTS REFRESH 1 receivers

## NSCLIENT RESTART

- NSCLIENT RESTART 1 receivers

## PUMP

- Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100

## BASAL STOP/CANCEL

- To stop temp basal reply with code EmF

## BASAL 0.3

- To start basal 0.3U/h for 30 min reply with code Swe

## BASAL 0.3 20

- To start basal 0.3U/h for 20 min reply with code Swe

## BASAL 30%

- To start basal 30% for 30 min reply with code Swe

## BASAL 30% 50

- To start basal 30% for 50 min reply with code Swe

## BOLUS 1.2

- To deliver bolus 1.2U reply with code Rrt
- Remote bolus not allowed (*if within 15 min after last bolus command or remote commands not allowed*)

## EXTENDED STOP/CANCEL

- To stop extended bolus reply with code EmF

## EXTENDED 2 120

- To start extended bolus 2U for 120 min reply with code EmF

## CAL 5.6

- To send calibration 5.6 reply with code Rrt
- Calibration sent (*if xDrip is installed. Accepting calibrations must be enabled in xDrip+*)

## PROFILE STATUS

- Profile1

## PROFILE LIST

- 1.`Profile1` 2.`Profile2`

## PROFILE 1

- To switch profile to Profile1 100% reply with code Any

## PROFILE 2 30

- To switch profile to Profile2 30% reply with code Any