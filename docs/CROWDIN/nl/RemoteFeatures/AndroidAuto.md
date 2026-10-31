# Android Auto

**AAPS** kan je informatie over je huidige status als bericht sturen, direct naar Android Auto in je auto.

## Vereisten

**AAPS** gebruikt een functie van Android Auto die berichten van apps op de telefoon naar het scherm van Android Auto in de auto stuurt.

Dat betekent dat:

* Android moet **AAPS** toestaan om meldingen te tonen en
* **AAPS** is geen officiële app. Sta daarom het gebruik van "onbekende bronnen" toe in Android Auto.

![AAPS CGM-gegevens in Android Auto](../images/android_auto_01.png)

(androidauto-check-that-aaps-can-show-notifications)=

## Controleer of AAPS meldingen mag tonen

**AAPS** toont altijd een statusmelding met je huidige glucose, IOB en COB. Dit is de melding die Android Auto in de auto toont. In **AAPS** hoef je niets aan te zetten, maar Android moet **AAPS** toestaan om meldingen te tonen.

Open op je telefoon **Instellingen** > **Apps** > **AAPS** > **Meldingen** en controleer of **Alle AAPS-meldingen** aan staat.

![Alle AAPS-meldingen aangezet](../images/android_auto_notifications_all.png)

Scrol naar beneden en controleer of **Lopende status** aan staat: dit is het kanaal van de statusmelding.

![Meldingskanaal Lopende status aangezet](../images/android_auto_ongoing_channel.png)

Controleer nu eerst of je de statusmelding van **AAPS** op de telefoon ziet, voordat je naar je auto loopt!

![AAPS-melding op de telefoon](../images/android_auto_04.png)

(androidauto-allow-the-use-of-unknown-sources-with-android-auto)=

## Het gebruik van "onbekende bronnen" toestaan in Android Auto.

**AAPS** is geen officiële Android Auto-app. Daarom moeten meldingen voor "onbekende bronnen" aangezet worden in Android Auto. Dit doe je met de ontwikkelaarsmodus. Hieronder laten we zien hoe.

Ga naar je auto en verbind je telefoon met het audiosysteem van de auto.

Je ziet nu een scherm dat lijkt op dit scherm.

![Ontwikkelaarsmodus inschakelen](../images/android_auto_05.png)

Tik op het pictogram **instellingen** om de configuratie te starten.

Scrol naar beneden tot het einde van de pagina en kies **see more in the phone** (meer bekijken op de telefoon).

![Ontwikkelaarsmodus inschakelen](../images/android_auto_06.png)

Nu zetten we op de telefoon de ontwikkelaarsmodus aan.

Het eerste scherm ziet er zo uit. Scrol naar beneden tot het einde van de pagina.

![Ontwikkelaarsmodus inschakelen](../images/android_auto_07.png)

Daar zie je de versie van Android Auto staan. Tik 10 keer (tien keer) op de versie van Android Auto. Met deze verborgen combinatie heb je nu de ontwikkelaarsmodus aangezet.

![Ontwikkelaarsmodus inschakelen](../images/android_auto_08.png)

Bevestig in het venster "Allow development settings?" (ontwikkelaarsinstellingen toestaan?) dat je de ontwikkelaarsmodus wilt aanzetten.

![Ontwikkelaarsmodus inschakelen](../images/android_auto_09.png)

Zet in de **ontwikkelaarsinstellingen** "Onbekende bronnen" aan.

![Ontwikkelaarsmodus inschakelen](../images/android_auto_10.png)

Nu kun je de ontwikkelaarsmodus verlaten als je wilt. Tik daarvoor op het menu met drie puntjes rechtsboven.

## Meldingen tonen in de auto

Tik in Android Auto in je auto op het **cijferpictogram** rechtsonder.

![cijferpictogram - Android Auto in de auto](../images/android_auto_11.png)

Je CGM-gegevens worden zo getoond:

![AAPS CGM-gegevens in Android Auto](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## Probleemoplossing:

* Als je de melding niet ziet, controleer dan of je [AAPS hebt toegestaan om meldingen te tonen](#androidauto-check-that-aaps-can-show-notifications) in Android en of [Android Auto toegang heeft tot meldingen](#androidauto-allow-the-use-of-unknown-sources-with-android-auto).