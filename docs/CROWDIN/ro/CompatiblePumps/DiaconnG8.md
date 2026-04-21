# Pompa de insulină Diaconn G8

## Cuplarea pompei de insulină prin Bluetooth

- Apăsați pe meniul hamburger din colțul din stânga sus.

![image](../images/DiaconnG8/DiaconnG8_01.jpg)

- Apăsați pe Configurator.

![image](../images/DiaconnG8/DiaconnG8_02.jpg)

- După selectarea pompei Diaconn G8, apăsați pe pictograma Setări (rotița dințată).

![image](../images/DiaconnG8/DiaconnG8_03.jpg)

- Alegeți pompa selectată.

![image](../images/DiaconnG8/DiaconnG8_04.jpg)

- După ce apare în listă, alegeți modelul pompei de insulină.

![image](../images/DiaconnG8/DiaconnG8_05.jpg)

- Există două opțiuni pentru a verifica numărul modelului:

1. Ultimele 5 cifre ale numărului SN de pe spatele pompei.
2. Apăsați pe butonul O > Informații > BLE > Ultimele 5 cifre.

![image](../images/DiaconnG8/DiaconnG8_06.jpg)

- Odată ce ați selectat pompa dumneavoastră, o fereastră va apărea și va cere un cod PIN. Introduceți numărul PIN afișat în pompă pentru a finaliza conexiunea.

 ![image](../images/DiaconnG8/DiaconnG8_07.jpg)

## Verificarea stării pompei și sincronizarea jurnalelor

- Odată ce pompa este conectată, apăsați pe simbolul Bluetooth pentru a verifica starea și pentru a sincroniza jurnalele.

![image](../images/DiaconnG8/DiaconnG8_08.jpg)

## Depanare Bluetooth

**Ce trebuie să faceți în cazul unei conexiuni Bluetooth instabile cu pompa.**

### Metoda 1) Verificați pompa din nou după ce setările din aplicația AAPS au fost finalizate.

- Click on the 3 dots button on the top right.

![image](../images/DiaconnG8/DiaconnG8_09.jpg)

- Click on Exit.

![image](../images/DiaconnG8/DiaconnG8_10.jpg)

### Method 2) If the first method doesn’t work, disconnect Bluetooth and then reconnect.

- Press and hold the Bluetooth button at the top for about 3 seconds.

![image](../images/DiaconnG8/DiaconnG8_11.jpg)

- Click on the Setting button on the paired Diaconn G8 Insulin pump.

![image](../images/DiaconnG8/DiaconnG8_12.jpg)

- Unpair.

![image](../images/DiaconnG8/DiaconnG8_13.jpg)

- Repeat the Bluetooth pairing process for the pump (see above).

## Further Information

### Diaconn G8 Insulin pump option setting

- Config manager > pump > Diaconn G8 > Settings
- DIACONN G8 at the top> 3 dots button on the top right > Diaconn G8 Preferences

![Diaconn G8 pump options](../images/DiaconnG8/DiaconnG8_14.jpg)

- If the **Log reservoir change** option is activated, the relevant details are automatically uploaded to the careportal when an “Insulin Change” event occurs.
- If the **Log needle change** option is activated, the relevant details are automatically uploaded to the careportal when a “Site Change” event occurs.
- If the **Log tube change** option is activated, the relevant details are automatically uploaded to the careportal when a “Tube Change” event occurs.
- If the **Log battery change** option is activated, the relevant details are automatically uploaded to the careportal when a “Battery Change” event occurs, and the PUMP BATTERY CHANGE button in the ACTION tab is deactivated. (Note: To change the battery, please stop all in-progress injection functions before proceeding.)

![Diaconn G8 actions menu](../images/DiaconnG8/DiaconnG8_15.jpg)

### Extended Bolus function

- If you use extended bolus it will disable closed loop.
- See [this page](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) for details why extended bolus does not work in a closed loop environment.
