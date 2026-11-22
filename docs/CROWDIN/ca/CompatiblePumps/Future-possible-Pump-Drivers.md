# Controladors de bomba futurs (possibles)

Aquesta és una llista d'algunes bombes del mercat, de l'estat del seu suport en altres sistemes de llaç i del seu estat a AAPS. Al final hi ha informació sobre què necessita una bomba per poder «funcionar en llaç».

    {contents} Taula de continguts
    :depth: 1
    :local: true

## Bombes en fase d'integració a AAPS

**Aviat disponibles:** els controladors d'aquestes bombes estan en desenvolupament i ja funcionen en compilacions de prova.

Omnipod 5 ([Pàgina web](https://www.omnipod.com/))

![Controlador d'Omnipod 5 en desenvolupament](../images/future-pumps/omnipod5-driver.png)

See [Omnipod 5](../CompatiblePumps/Omnipod5.md) for how the driver in development works.

Tandem: t:Mobi ([Pàgina web](https://www.tandemdiabetes.com/))

![Controlador de Tandem t:Mobi en desenvolupament](../images/future-pumps/tandem-mobi-driver.png)

## Bombes que es poden fer servir en llaç

### Kaleido ([Pàgina web](https://www.hellokaleido.com/))

**Estat del llaç:** La bomba és candidata per al llaç, però de moment el protocol és desconegut. El fabricant no té interès en el codi obert.

**Requisit de maquinari per a AAPS:** Cap. Sembla que té Bluetooth.

### Tandem: t:slim X3 ([Pàgina web](https://www.tandemdiabetes.com/about-us/pipeline))

**Estat del llaç:** Possible candidata per al llaç en el futur. L'esperança és que la t:slim X3 permeti el control complet des d'un telèfon, cosa que faria possible el suport a AAPS, però encara no se'n coneixen les dates ni les funcions.

**Requisit de maquinari per a AAPS:** Cap. S'espera que tingui Bluetooth.

**Comentaris:** Encara no ha sortit al mercat. Sembla que Tandem endarrereix una vegada i una altra la t:slim X3 en els seus plans, per donar prioritat a la t:Mobi (també una versió sense tub) i a la Sigi (la seva bomba patch).

### Twiist ([Pàgina web](https://www.twiist.com/))

**Estat del llaç:** Candidata per al llaç.

**Requisit de maquinari per a AAPS:** Cap. Té Bluetooth.

### Bomba d'insulina Willcare ([Pàgina web](http://shinmyungmedi.com/en/))

**Estat del llaç:** De moment no és candidata per al llaç, però el seu personal ens ha contactat i està interessat a fer que la bomba es pugui fer servir en llaç (sembla que només li falten les ordres d'obtenir/establir el perfil).

**Requisit de maquinari per a AAPS:** Cap. Sembla que té Bluetooth.

**Comentaris:** Com que l'empresa està interessada en la integració amb AAPS, potser ella mateixa farà la implementació.

### Ypsopump ([Pàgina web](https://www.ypsomed.com/))

**Estat del llaç:** Candidata per al llaç. La comunitat ha desxifrat el protocol Bluetooth de la bomba (enginyeria inversa), per tant en principi és possible comunicar-s'hi.

**Requisit de maquinari per a AAPS:** Cap. Té Bluetooth.

**Comentaris:** La Ypsopump protegeix la seva comunicació Bluetooth amb un xifratge fort d'un tercer. Treballar-hi és tècnicament difícil, i això fa que sigui difícil crear i mantenir un controlador fiable. Encara no hi ha cap controlador d'AAPS a punt per a l'ús real.

## Bombes que ja no es venen (empreses que ja no funcionen)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Comentaris:** Fi del suport el març del 2025.

## Bombes que no es poden fer servir en llaç

### Medtronic Bluetooth

**Comentaris:** Medtronic s'ha [retirat](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([Pàgina web](https://www.tandemdiabetes.com/))

**Comentaris:** El protocol Bluetooth de Tandem s'ha desxifrat (enginyeria inversa), però a la t:slim X2 només es poden lliurar bolus — no es pot controlar el lliurament de la basal —, per tant no es pot fer servir de manera segura en llaç. És poc probable que això canviï si Tandem no permet el control complet de la X2 des d'un telèfon; és més probable que aquest control arribi amb la t:slim X3.

### Accu-Chek Solo

**Comentaris:** La comunitat no ha aconseguit comunicar-se amb la bomba Solo.

## Requisits perquè una bomba es pugui fer servir en llaç

**Requisit previ**

- La bomba ha d'acceptar algun tipus de control remot. (BT, radiofreqüència, etc.)
- El protocol s'ha desxifrat, està documentat, etc.

**Requisit mínim**

- Establir taxa basal temporal
- Obtenir estat
- Cancel·lar taxa basal temporal

**Per a oref1 (SMB) o per fer bolus:**

- Establir bolus

**Convenient**

- Cancel·lar bolus
- Obtenir perfil basal (gairebé obligatori)
- Establir perfil basal (convenient)
- Llegir historial 

**Altres (no obligatori però convenient)**

- Establir bolus estès
- Cancel·lar bolus estès
- Llegir historial
- Llegir TDD

### Suport per a altres bombes

Si hi ha altres bombes de les quals voleu conèixer l'estat, contacteu amb nosaltres a Discord.