# Pompes compatibles

AAPS fonctionne avec un certain nombre de pompes à insuline. La liste suivante montre les appareils pris en charge actuellement. Elle indique entre parenthèses si AAPS communique avec la pompe via le Bluetooth intégré de votre téléphone, ou s'il faut un appareil compatible RileyLink.

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

- [Accu-Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) (Bluetooth ; voir aussi [Conseils pour une utilisation de base](#combov2-tips-for-basic-usage))
- [Accu-Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md) (Bluetooth)
- [CareLevo](../CompatiblePumps/CareLevo.md) (Bluetooth)
- [DanaR](../CompatiblePumps/DanaR-Insulin-Pump.md) (Bluetooth)
- [DanaRS](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Dana-i2](../CompatiblePumps/DanaRS-Insulin-Pump.md) (Bluetooth)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md) (Bluetooth)
- [EOPatch2](../CompatiblePumps/EOPatch2.md) (Bluetooth)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md) (Bluetooth)
- Certaines anciennes pompes [Medtronic](../CompatiblePumps/MedtronicPump.md) ([appareil de communication supplémentaire](#CompatiblePumps-additional-communication-device) nécessaire)
- [Medtrum Nano 200U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Medtrum 300U](../CompatiblePumps/MedtrumNano.md) (Bluetooth)
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) (Bluetooth)
- [Omnipod Eros](../CompatiblePumps/OmnipodEros.md) ([appareil de communication supplémentaire](#CompatiblePumps-additional-communication-device) nécessaire)

## Ma pompe n'est pas dans la liste

L'état des autres pompes qui pourraient fonctionner avec AAPS est décrit sur la page [Pilotes de pompe futurs (possibles)](../CompatiblePumps/Future-possible-Pump-Drivers.md).

(CompatiblePumps-additional-communication-device)=
## Périphérique de communication additionnel

Si aucun appareil de communication supplémentaire n'est mentionné, la communication entre la pompe à insuline et **AAPS** utilise le Bluetooth intégré d'Android. Aucun appareil supplémentaire n'est alors nécessaire pour traduire le protocole de communication.

Pour les anciennes pompes Medtronic et pour Omnipod Eros, un appareil de communication supplémentaire (en plus de votre téléphone) est nécessaire pour « traduire » le signal radio de la pompe en Bluetooth. L'appareil doit utiliser la même fréquence radio que votre pompe :

- **Omnipod Eros** : 433 MHz.
- **Medtronic** : 916 MHz pour les pompes vendues aux États-Unis et au Canada, 868 MHz pour les pompes vendues ailleurs. Voir [Comment savoir quelle fréquence utilise ma pompe](#MedtronicPump-faq).

Appareils de communication disponibles :

- ![OrangeLink](../images/omnipod/OrangeLink.png)  [Site internet OrangeLink](https://getrileylink.org/product/orangelink)
- ![RileyLink](../images/omnipod/RileyLink.png) [RileyLink 433MHz](https://getrileylink.org/product/rileylink433)
- ![EmaLink](../images/omnipod/EmaLink.png)  [Site internet Emalink](https://github.com/sks01/EmaLink) - [Contact](mailto:getemalink@gmail.com)
- ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Contact](mailto:Boshetyn@ukr.net)
- ![LoopLink](../images/omnipod/LoopLink.png)  [Site internet LoopLink](https://www.getlooplink.org/) - [Contact](https://jameswedding.substack.com/) - Non testé