# Future (possible) Pump Drivers

Questa è una lista di alcuni micro in commercio, con lo stato del loro supporto in altri sistemi di loop e il loro stato in AAPS. Alla fine ci sono alcune informazioni su cosa serve perché un micro sia "utilizzabile con il loop".

    {contents} Indice
    :depth: 1
    :local: true

## Micro in fase di integrazione in AAPS

**Coming soon:** drivers for these pumps are in development and already running in test builds.

Omnipod 5 ([Homepage](https://www.omnipod.com/))

![Omnipod 5 driver in development](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([Homepage](https://www.tandemdiabetes.com/))

![Tandem t:Mobi driver in development](../images/future-pumps/tandem-mobi-driver.png)

## Pumps that are Loopable

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status:** Pump is a Loop candidate, but protocol is unknown at the time. No interest in open source from the vendor.

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

### Tandem: t:slim X3 ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** Possible future Loop candidate. The hope is that t:slim X3 will allow full control from a phone, which would enable AAPS support, but the timeline and features are still unknown.

**Hardware requirement for AAPS:** None. Dovrebbe avere il Bluetooth.

**Commenti:** non ancora in commercio. t:slim X3 appears to be repeatedly deprioritized on Tandem's roadmap in favour of t:Mobi (including a tubeless version) and Sigi (their patch pump).

### Twiist ([Homepage](https://www.twiist.com/))

**Loop status:** Loop candidate.

**Hardware requirement for AAPS:** None. Ha il Bluetooth.

### Willcare Insulin pump ([Homepage](http://shinmyungmedi.com/en/))

**Stato per il loop:** al momento non è un candidato per il loop, ma il loro personale ci ha contattato ed è interessato a rendere il micro utilizzabile con il loop (sembra che manchino solo i comandi per leggere/impostare il profilo).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

### Ypsopump ([Homepage](https://www.ypsomed.com/))

**Loop status:** Loop candidate. The pump's Bluetooth protocol has been reverse-engineered by the community, so communicating with it is possible in principle.

**Hardware requirement for AAPS:** None. Ha il Bluetooth.

**Comments:** The Ypsopump protects its Bluetooth communication with heavy third-party encryption. Working with it is technically demanding, which makes building and maintaining a reliable driver hard. There is no production-ready AAPS driver yet.

## Pumps no longer sold (companies no longer operating)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Commenti:** fine del supporto a marzo 2025.

## Pumps that aren't Loopable

### Medtronic Bluetooth

**Commenti:** Medtronic si è [ritirata](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Comments:** The Tandem Bluetooth protocol has been reverse-engineered, but on the t:slim X2 only boluses can be delivered — basal delivery cannot be controlled — so it cannot be used safely for looping. This is unlikely to change unless Tandem allows full control of the X2 from a phone, which would more probably arrive with the t:slim X3 instead.

### Accu-Chek Solo

**Comments:** No community success in communicating with the Solo pump.

## Requirements for pumps being loopable

**Prerequisite**

- Pump has to support some kind of remote control. (BT, Radio frequency, etc)
- Protocol is hacked/documented/etc.

**Requisito minimo**

- Set Temporary Basal Rate
- Get Status
- Cancel Temporary Basal Rate

**For oref1(SMB) or Bolusing:**

- Set Bolus

**Good to have**

- Cancel Bolus
- Get Basal Profile (almost requirement)
- Set Basal Profile (nice to have)
- Read History 

**Other (not required but good to have)**

- Set Extended Bolus
- Cancel Extended Bolus
- Read History
- Read TDD

### Other pumps support

If you have any other pumps you would like to see status on, please contact us on discord.