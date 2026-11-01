# Общие рекомендации по мониторингу

## Гигиена мониторинга

Вне зависимости от того, какой у вас мониторинг - официальная система или самодельная, следует соблюдать определенные правила калибровок.

-   Убедитесь, что руки и комплект для измерения чисты.
-   Старайтесь калибровать на ровных значениях ГК (обычно достаточно 15-30 минут с плоской шкалой)
-   Избегайте калибровки при повышении или понижении уровня глюкозы.
-   По возможности проводите «достаточно» калибровок – на официальных приложениях раз или два раза за сутки появляется предложение откалибровать систему. В самодельных системах таких напоминаний не бывает, поэтому будьте осторожны если давно не делали калибровки.
-   Для сенсоров, не требующих или не разрешающих калибровку, по крайней мере ежедневно проверяйте реальный сахар крови. AAPS будет насколько безопасным, насколько надежны данные с сенсора.
-   If at all possible, calibrate with some of your readings in a lower range (4-5mmol/L or 72-90mg/dL) and some at a slightly higher level (7-9mmol/L or 126-160mg/dL) as this provides a better range for the point/slope calibration.

## Установка сенсора (G6)

При установке сенсора не рекомендуется слишком сильно давить на манипулятор, чтобы избежать кровотечения. Контакты сенсора не должны касаться крови.

После установки сенсора трансмиттер может быть защелкнут на его платформе. Осторожно! Сначала защелкните квадратную сторону, затем надавите на круглую.

(общая-информация-cgm-устранение неполадок)=
## Устранение неполадок

### Проблемы с подключением

Соединение Bluetooth может быть нарушено другими близлежащими устройствами Bluetooth, такими как глюкометры, гарнитуры, планшеты, кухонные устройства, микроволновые печи или керамические плиты. In this case xDrip does not display any BG values. Когда соединение Bluetooth восстанавливается, пропущенные данные заполняются.

### Ошибки сенсора

Если возникают повторяющиеся ошибки сенсора, попробуйте выбрать другое место на теле для его установки. Контакты сенсора не должны касаться крови.

Часто "Ошибка сенсора" может быть исправлена обильным питьем и массажем вокруг сенсора!

### Скачки данных

You might try to change settings for noise blocking in xDrip (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse". См. также [Сглаживание данных ГК](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Отрицательный срок работы сенсора

![Sensor age on the Sensor row of the expanded status panel](../images/main/main_status_row_expanded.png)

The sensor age is shown on the **Sensor** row of the status panel on the main screen (tap the chevron to expand it). A negative age occurs if there is either a double "Sensor Insert" [careportal entry](#aaps-screens-careportal) or a sensor insert with wrong date. Open **Treatments history** (menu ☰), select the **Careportal** tab and delete the wrong entry.
