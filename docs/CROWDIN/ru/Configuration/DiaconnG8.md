# Помпа Diaconn G8

## Bluetooth-сопряжение

- Нажмите на выпадающее меню в левом верхнем углу.

  > ```{image} ../images/DiaconnG8/DiaconnG8_01.jpg
  > :alt: Hamburger menu
  > ```

- Выберите Конфигуратор.

  > ```{image} ../images/DiaconnG8/DiaconnG8_02.jpg
  > :alt: Config builder
  > ```

- После выбора помпы Diaconn G8 щелкните на иконку настроек (шестеренка).

  > ```{image} ../images/DiaconnG8/DiaconnG8_03.jpg
  > :alt: Settings
  > ```

- Choose Selected pump.

  > ```{image} ../images/DiaconnG8/DiaconnG8_04.jpg
  > :alt: Select pump
  > ```

- Select your insulin pump’s model number once it appears in the list.

  > ```{image} ../images/DiaconnG8/DiaconnG8_05.jpg
  > :alt: Pump pairing
  > ```

- Есть два варианта проверки номера модели:

  > 1. The last 5 digits of the SN number on the back of the pump.
  > 2. Click on O button > Information > BLE > Last 5 digits.
  > 
  > > `{image} ../images/DiaconnG8/DiaconnG8_06.jpg
    :alt: проверить модель.`

- Когда выберете помпу, появится окно с запросом PIN-кода. Введите PIN, отображаемый на вашей помпе для завершения сопряжения.

  > ```{image} ../images/DiaconnG8/DiaconnG8_07.jpg
  > :alt: PIN code
  > ```

## Проверка статуса помпы и синхронизация журнала

- Once your pump is connected, click on the Bluetooth symbol to check the status and to synchronize logs.

  > ```{image} ../images/DiaconnG8/DiaconnG8_08.jpg
  > :alt: Bluetooth status
  > ```

## Устранение неполадок Bluetooth-соединения

**What to do in the case of an unstable Bluetooth connection with the pump.**

### Метод 1 ) Проверьте помпу снова после завершения работы приложения AAPS.

- Click on the 3 dots button on the top right.

  > ```{image} ../images/DiaconnG8/DiaconnG8_09.jpg
  > :alt: Preferences menu
  > ```

- Click on Exit.

  > ```{image} ../images/DiaconnG8/DiaconnG8_10.jpg
  > :alt: Exit
  > ```

### Method 2) If the first method doesn’t work, disconnect Bluetooth and then reconnect.

- Press and hold the Bluetooth button at the top for about 3 seconds.

  > ```{image} ../images/DiaconnG8/DiaconnG8_11.jpg
  > :alt: Bluetooth button
  > ```

- Нажмите кнопку настроек на сопряженной помпе Diaconn G8.

  > ```{image} ../images/DiaconnG8/DiaconnG8_12.jpg
  > :alt: Settings button
  > ```

- Unpair.

  > ```{image} ../images/DiaconnG8/DiaconnG8_13.jpg
  > :alt: Unpair
  > ```

- Repeat the Bluetooth pairing process for the pump (see above).

## Further Information

### Настройка параметров помпы G8 Diaconn

- Config manager > pump > Diaconn G8 > Settings
- DIACONN G8 вверху> 3 точки кнопки в правом верхнем углу > Настройки Diaconn G8

```{image} ../images/DiaconnG8/DiaconnG8_14.jpg
:alt: Diaconn G8 pump options
```

- If the **Log reservoir change** option is activated, the relevant details are automatically uploaded to the careportal when an “Insulin Change” event occurs.
- If the **Log needle change** option is activated, the relevant details are automatically uploaded to the careportal when a “Site Change” event occurs.
- If the **Log tube change** option is activated, the relevant details are automatically uploaded to the careportal when a “Tube Change” event occurs.
- If the **Log battery change** option is activated, the relevant details are automatically uploaded to the careportal when a “Battery Change” event occurs, and the PUMP BATTERY CHANGE button in the ACTION tab is deactivated. (Note: To change the battery, please stop all in-progress injection functions before proceeding.)

```{image} ../images/DiaconnG8/DiaconnG8_15.jpg
:alt: Diaconn G8 actions menu
```

### Extended Bolus function

- If you use extended bolus it will disable closed loop.
- See [this page](Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment) for details why extended bolus does not work in a closed loop environment.
