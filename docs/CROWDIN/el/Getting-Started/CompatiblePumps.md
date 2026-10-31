# Συμβατές αντλίες

Το AAPS λειτουργεί με αρκετές αντλίες ινσουλίνης. Η παρακάτω λίστα δείχνει τις συσκευές που υποστηρίζονται σήμερα. Σε παρένθεση αναφέρεται αν το AAPS επικοινωνεί με την αντλία μέσω του ενσωματωμένου Bluetooth του τηλεφώνου σας ή αν χρειάζεται μια συσκευή συμβατή με RileyLink.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth· δείτε επίσης [Συμβουλές για βασική χρήση](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Ορισμένες παλαιότερες αντλίες [Medtronic](../CompatiblePumps/MedtronicPump.md) (χρειάζεται [πρόσθετη συσκευή επικοινωνίας](#CompatiblePumps-additional-communication-device))
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) (χρειάζεται [πρόσθετη συσκευή επικοινωνίας](#CompatiblePumps-additional-communication-device))

## Η αντλία μου δεν είναι στη λίστα

Λεπτομέρειες για την κατάσταση άλλων αντλιών που ίσως μπορούν να λειτουργήσουν με το AAPS θα βρείτε στη σελίδα [Μελλοντικοί (πιθανοί) οδηγοί αντλιών](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Πρόσθετη συσκευή επικοινωνίας

Αν δεν αναφέρεται πρόσθετη συσκευή επικοινωνίας, η επικοινωνία μεταξύ της αντλίας ινσουλίνης και του **AAPS** γίνεται μέσω του ενσωματωμένου Bluetooth του Android. Δεν χρειάζεται πρόσθετη συσκευή για να «μεταφράσει» το πρωτόκολλο επικοινωνίας.

Για τις παλιές αντλίες Medtronic και το Omnipod Eros χρειάζεται μια πρόσθετη συσκευή επικοινωνίας (εκτός από το τηλέφωνό σας), η οποία «μεταφράζει» το ραδιοσήμα της αντλίας σε Bluetooth. Η συσκευή πρέπει να χρησιμοποιεί την ίδια ραδιοσυχνότητα με την αντλία σας:

- **Omnipod Eros**: 433 MHz.
- **Medtronic**: 916 MHz για αντλίες που πωλούνται στις ΗΠΑ και τον Καναδά, 868 MHz για αντλίες που πωλούνται σε άλλες χώρες. Δείτε [Πώς να βρω ποια συχνότητα χρησιμοποιεί η αντλία μου](#MedtronicPump-faq).

Διαθέσιμες συσκευές επικοινωνίας:

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [Ιστότοπος OrangeLink](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [RileyLink 433MHz](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Ιστότοπος Emalink](https://github.com/sks01/EmaLink) - [Στοιχεία επικοινωνίας](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Στοιχεία επικοινωνίας](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [Ιστότοπος LoopLink](https://www.getlooplink.org/) - [Στοιχεία επικοινωνίας](https://jameswedding.substack.com/) - Δεν έχει δοκιμαστεί