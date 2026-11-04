# Compatible Pumps

AAPS works with a number of insulin pumps. הרשימה הבאה מציגה את ההתקנים הנתמכים כעת. בסוגריים מצוין אם AAPS מתקשר עם המשאבה דרך ה-Bluetooth המובנה של הטלפון, או שנדרש התקן תואם RileyLink.

<!-- List of hidden pages to avoid overcrowding the menu -->

```{toctree}
:hidden:

../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md
../CompatiblePumps/Accu-Chek-Insight-Pump.md
../CompatiblePumps/CareLevo.md
../CompatiblePumps/DanaR-Insulin-Pump.md
../CompatiblePumps/DanaRS-Insulin-Pump.md
../CompatiblePumps/DiaconnG8.md
../CompatiblePumps/EOPatch2.md
../CompatiblePumps/Equil5.3.md
../CompatiblePumps/MedtronicPump.md
../CompatiblePumps/MedtrumNano.md
../CompatiblePumps/OmnipodDASH.md
../CompatiblePumps/OmnipodEros.md
../CompatiblePumps/Future-possible-Pump-Drivers.md
```

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth; ראו גם [טיפים לשימוש בסיסי](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- משאבות [Medtronic](../CompatiblePumps/MedtronicPump.md) ישנות מסוימות (נדרש [התקן תקשורת נוסף](#CompatiblePumps-additional-communication-device))
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) (נדרש [התקן תקשורת נוסף](#CompatiblePumps-additional-communication-device))

## My pump is not listed

פרטים על מצב משאבות אחרות שאולי יוכלו לעבוד עם AAPS מופיעים בדף [מנהלי התקן עתידיים (אפשריים) למשאבות](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Additional communication device

אם לא מצוין התקן תקשורת נוסף, התקשורת בין משאבת האינסולין לבין **AAPS** מבוססת על מערכת ה-Bluetooth המובנית של Android. אין צורך בהתקן תקשורת נוסף שיתרגם את פרוטוקול התקשורת.

במשאבות Medtronic ישנות וב-Omnipod Eros נדרש התקן תקשורת נוסף (מלבד הטלפון), כדי "לתרגם" את אות הרדיו מהמשאבה ל-Bluetooth. ההתקן חייב להשתמש באותו תדר רדיו כמו המשאבה:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 916 MHz למשאבות שנמכרו בארה"ב ובקנדה, 868 MHz למשאבות שנמכרו בשאר העולם. ראו [כיצד לזהות באיזה תדר המשאבה משתמשת](#MedtronicPump-faq).

התקני תקשורת זמינים:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Website](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [RileyLink בתדר 433MHz](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Website](https://github.com/sks01/EmaLink) - [Contact Info](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Contact Info](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink Website](https://www.getlooplink.org/) - [Contact Info](https://jameswedding.substack.com/) - Untested