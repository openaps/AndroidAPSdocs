# Μελλοντικοί (πιθανοί) οδηγοί αντλιών

Αυτή είναι μια λίστα με ορισμένες Αντλίες που επιπλέουν γύρω από αυτό, και την κατάσταση υποστήριξης γι 'αυτούς σε οποιοδήποτε από τα συστήματα κυκλώματος και στη συνέχεια την κατάσταση στο AAPS. Στο τέλος υπάρχουν κάποιες πληροφορίες, τι απαιτείται για να είναι μια αντλία "ικανή για κύκλωμα".

    {contents} Table of contents
    :depth: 1
    :local: true

## Pumps in AAPS integration phase

**Coming soon:** drivers for these pumps are in development and already running in test builds.

Omnipod 5 ([Homepage](https://www.omnipod.com/))

![Omnipod 5 driver in development](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([Homepage](https://www.tandemdiabetes.com/))

![Tandem t:Mobi driver in development](../images/future-pumps/tandem-mobi-driver.png)

## Αντλίες που είναι για κύκλωμα

### Kaleido ([Homepage](https://www.hellokaleido.com/))

**Loop status:** Pump is a Loop candidate, but protocol is unknown at the time. No interest in open source from the vendor.

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

### Tandem: t:slim X3 ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** Possible future Loop candidate. The hope is that t:slim X3 will allow full control from a phone, which would enable AAPS support, but the timeline and features are still unknown.

**Hardware requirement for AAPS:** None. It is expected to be Bluetooth enabled.

**Comments:** Not yet released. t:slim X3 appears to be repeatedly deprioritized on Tandem's roadmap in favour of t:Mobi (including a tubeless version) and Sigi (their patch pump).

### Twiist ([Homepage](https://www.twiist.com/))

**Loop status:** Loop candidate.

**Hardware requirement for AAPS:** None. It is Bluetooth enabled.

### Willcare Insulin pump ([Homepage](http://shinmyungmedi.com/en/))

**Loop status:** At the moment its not Loop candidate, but we were contacted by their staff and they interested in extending their pump to be loopable (at the moment I think its missing only get/set profile commands).

**Hardware requirement for AAPS:** None. It seems to be BT enabled.

**Comments:** Since company is interested in integration with AAPS, they might do implementation themselves.

### Ypsopump ([Homepage](https://www.ypsomed.com/))

**Loop status:** Loop candidate. The pump's Bluetooth protocol has been reverse-engineered by the community, so communicating with it is possible in principle.

**Hardware requirement for AAPS:** None. It is Bluetooth enabled.

**Comments:** The Ypsopump protects its Bluetooth communication with heavy third-party encryption. Working with it is technically demanding, which makes building and maintaining a reliable driver hard. There is no production-ready AAPS driver yet.

## Pumps no longer sold (companies no longer operating)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Comments:** End of support March 2025.

## Αντλίες που δεν είναι για κύκλωμα

### Medtronic Bluetooth

**Comments:** Medtronic [withdrew](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([Homepage](https://www.tandemdiabetes.com/))

**Comments:** The Tandem Bluetooth protocol has been reverse-engineered, but on the t:slim X2 only boluses can be delivered — basal delivery cannot be controlled — so it cannot be used safely for looping. This is unlikely to change unless Tandem allows full control of the X2 from a phone, which would more probably arrive with the t:slim X3 instead.

### Accu-Chek Solo

**Comments:** No community success in communicating with the Solo pump.

## Απαιτήσεις αντλιών για να είναι συμβατές με κύκλωμα

**Prerequisite**

- Η αντλία πρέπει να υποστηρίζει κάποιο είδος τηλεχειρισμού. (BT, Radio frequency, etc)
- Το πρωτόκολλο παραβιάζεται / τεκμηριώνεται / κλπ.

**Minimal requirement**

- Ορισμός συχνότητας προσωρινού βασικού ρυθμού
- Get Status
- Ακύρωση συχνότητας προσωρινού βασικού ρυθμού

**For oref1(SMB) or Bolusing:**

- Set Bolus

**Good to have**

- Ακύρωση του Bolus
- Αποκτήστε βασικό προφίλ (σχεδόν απαραίτητο)
- Ορίστε βασικό προφίλ (ωραίο να έχετε)
- Διαβάστε το Ιστορικό 

**Other (not required but good to have)**

- Ορίστε εκτεταμένο bolus
- Cancel Extended Bolus
- Διαβάστε το Ιστορικό
- Read TDD

### Other pumps support

If you have any other pumps you would like to see status on, please contact us on discord.