# Recomanacions generals sobre CGM

## Higiene del CGM

Sigui quin sigui el sistema CGM que feu servir, si calibreu amb glucèmia en sang, hi ha unes regles molt clares que heu de seguir, tant si feu servir programari CGM DIY com les aplicacions oficials.

-   Assegureu-vos que les mans i el material estan nets.
-   Intenteu calibrar quan tingueu una sèrie de punts amb una fletxa plana (normalment n'hi ha prou amb 15–30 minuts)
-   Eviteu calibrar quan la glucèmia puja o baixa.
-   Feu prou calibracions: a les aplicacions oficials, se us demanarà una o dues comprovacions al dia. Als sistemes DIY potser no se us demanarà, i heu d'anar amb compte si continueu sense calibracions.
-   Per als sensors que no necessiten o no permeten calibració, comproveu la glucèmia real en sang com a mínim un cop al dia. AAPS serà tan segur com fiables siguin les lectures del vostre sensor.
-   Si és possible, calibreu amb algunes lectures en un rang més baix (4–5 mmol/l o 72–90 mg/dl) i algunes en un nivell una mica més alt (7–9 mmol/l o 126–160 mg/dl), perquè així s'obté un rang millor per a la calibració de punt/pendent.

## Col·locació del sensor (G6)

En col·locar el sensor, es recomana no prémer l'aplicador massa fort per evitar sagnat. Els contactes del sensor no han d'entrar en contacte amb sang.

Després de col·locar el sensor, el transmissor es pot encaixar al suport del sensor. Atenció! Primer encaixeu el costat quadrat i després premeu el costat rodó.

(general-cgm-troubleshooting)=
## Resolució de problemes

### Problemes de connexió

La connexió Bluetooth pot ser alterada per altres dispositius Bluetooth propers, com glucòmetres, auriculars, tauletes o aparells de cuina com forns de microones o plaques vitroceràmiques. En aquest cas, xDrip no mostra cap valor de glucèmia. Quan la connexió Bluetooth es restableix, les dades que falten es recuperen (backfill).

### Errors del sensor

Si hi ha errors del sensor sovint, proveu de col·locar el sensor en una altra part del cos. Els contactes del sensor no han d'entrar en contacte amb sang.

Sovint un «Sensor Error» es pot corregir bevent de seguida i fent un massatge al voltant del sensor!

### Valors que salten

Podeu provar de canviar la configuració de bloqueig del soroll a xDrip (Settings - Inter-App Settings - Noise Blocking), per exemple «Block Very High noise and worse». Vegeu també [Suavitzat de les dades de glucèmia](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Edat del sensor negativa

![Edat del sensor a la fila Sensor del panell d'estat desplegat](../images/main/main_status_row_expanded.png)

L'edat del sensor es mostra a la fila **Sensor** del panell d'estat de la pantalla principal (toqueu la fletxa per desplegar-lo). L'edat negativa apareix si hi ha una entrada doble d'«Inserció del sensor» al [portal de cures](#aaps-screens-careportal) o una inserció del sensor amb una data incorrecta. Obriu **Historial de tractaments** (menú ☰), seleccioneu la pestanya **Portal de cures** i elimineu l'entrada incorrecta.
