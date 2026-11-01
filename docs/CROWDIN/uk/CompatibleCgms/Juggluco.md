# Налаштування Juggluco

Якщо ще не налаштовано, завантажте [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Дотримуйтеся [інструкцій](https://www.juggluco.nl/Jugglucohelp/introhelp.html), щоб підключити сенсор.

## Базові налаштування для всіх систем CGM

### Вимкніть вивантаження в Nightscout

Не дозволяйте жодному іншому застосунку вивантажувати дані (глюкозу крові та терапію) в Nightscout.

Вимкніть у Juggluco будь-яке активне вивантаження в Nightscout.

![Вимкнення вивантаження в Nightscout](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco → AAPS

Juggluco може надсилати значення глюкози крові прямо в AAPS. Якщо ви використовуєте [надійний сенсор](#GettingStarted-TrustedBGSource), SMB будуть дозволені завжди.

З сенсором Libre 2/2+/3/3+ значення щохвилини надсилаються в AAPS, але AAPS не робить розрахунки щохвилини.

Увімкніть xDrip broadcast у Juggluco (не вмикайте Patched Libre), підтвердьте та збережіть інформацію про пакет AAPS. Виберіть в AAPS джерело даних ГК xDrip.

Застосуйте достатнє [згладжування](./SmoothingBloodGlucoseData.md) в AAPS.

![Juggluco → AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco → xDrip

Juggluco може надсилати значення глюкози крові в xDrip, а xDrip потім надсилає їх в AAPS.

Увімкніть Patched Libre у Juggluco (не вмикайте xDrip broadcast), підтвердьте та збережіть інформацію про пакет dexdrip. Виберіть в AAPS джерело даних ГК xDrip.

Apply sufficient [smoothing](./SmoothingBloodGlucoseData.md) in AAPS if necessary. When using a Libre 2/2+/3/3+ sensor, xDrip will average the minute-by-minute readings to 5-minute readings and [also smooth](#libre2-value-smoothing-raw-values) them.

![Juggluco → xDrip](../images/juggluco/Juggluco-xDrip+.png)
