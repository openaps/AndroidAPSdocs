# Diaconn G8 Insulin Pump

## Insulin Pump Bluetooth Pairing

- Click on the hamburger menu in the top left corner.

![image](../images/DiaconnG8/DiaconnG8_01.jpg)

- Click on Config Builder.

![image](../images/DiaconnG8/DiaconnG8_02.jpg)

- After selecting the Diaconn G8 Pump click on the Settings icon (cog wheel).

![image](../images/DiaconnG8/DiaconnG8_03.jpg)

- Choose Selected pump.

![image](../images/DiaconnG8/DiaconnG8_04.jpg)

- Select your insulin pump’s model number once it appears in the list.

![image](../images/DiaconnG8/DiaconnG8_05.jpg)

- There are two options to check your model number:

1. The last 5 digits of the SN number on the back of the pump.
2. Click on O button > Information > BLE > Last 5 digits.

![image](../images/DiaconnG8/DiaconnG8_06.jpg)

- Once you select your pump, a window appears asking for a pin code. Enter the pin number displayed on your pump to complete the connection.

 ![image](../images/DiaconnG8/DiaconnG8_07.jpg)

## Pump status check and log synchronization

- Once your pump is connected, click on the Bluetooth symbol to check the status and to synchronize logs.

![image](../images/DiaconnG8/DiaconnG8_08.jpg)

## Bluetooth Troubleshooting

**What to do in the case of an unstable Bluetooth connection with the pump.**

### Method 1 ) Check the pump again after AAPS application is completed.

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
