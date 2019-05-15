# Smartwatch instellingen

AndroidAPS is ontworpen om *te worden bediend* vanaf Android Wear horloges. Om te kunnen bolussen enz vanaf je horloge moet je bij "Wear instellingen" de optie "Bedieningen via horloge" geactiveerd hebben.

De volgende functies kunnen vanaf het horloge worden geactiveerd:

* een tijdelijk BG doel (TT) instellen
* een bolus toedienen
* de bolus calculator gebruiken (in [instellingen](../Configuration/Config-Builder.md?highlight=tdd#wear) op de telefoon is geconfigureerd welke variabelen in de berekening worden meegenomen)
* de status van de loop en pomp controleren
* weergeven van de TDD (Totale Dagelijkse Dosis = bolus + basale insuline per dag)

Om dit te bereiken moet je de build variant "fullRelease" selecteren wanneer je [de APK bouwt](../Installing-AndroidAPS/Building-APK.md) (terwijl "pumpRelease" je in staat stelt om ook zonder loop de pomp te bedienen). Hierna kunt u binnen AndroidAPS vervolgens binnen de Configurator [Wear inschakelen](../Configuration/Config-Builder#wear).

Er zijn verschillende watchfaces om uit te kiezen die de gemiddelde delta, IOB, momenteel actieve tijdelijke basaal en basale profielen + een CGM grafiek kunnen weergeven.

![AndroidAPSv2-watchface](../images/AAPSv2_Watchface.png)

Zorg er voor dat meldingen van AndroidAPS niet geblokkeerd zijn op het horloge. Een actie (bijv. bolus, tijdelijk BG doel) moet door middel van een notificatie worden bevestigd. Pas na swipen en herbevestiging wordt deze uitgevoerd.

Voer een double-tap uit op je BG om sneller naar het AAPS-menu te gaan. Voer een double-tap uit op de BG grafiek om de tijdschaal ervan te wijzigen.

## Probleemoplossing van de wear app:

* Onder Android Wear 2.0 zal AndroidAPS niet meer vanzelf op je horloge worden geïnstalleerd. Om AndroidAPS op je wear horloge te installeren moet je nu naar de playstore op het horloge gaan (let op dit is niet hetzelfde als de playstore op de telefoon). Onder de categorie 'apps geinstalleerd op je telefoon' vind je een item AndroidAPS waarmee de installatie op je telefoon kan worden uitgevoerd. Schakel ook 'Automatisch bijwerken' in. 
* Soms helpt het om de apps opnieuw te synchroniseren naar het horloge, omdat het een beetje langzaam kan zijn om dit zelf te doen: Android Wear > Tandwiel icoon > Horlogenaam > Synchroniseren apps.
* Schakel ADB-foutopsporing in onder Ontwikkelaars Opties (op het horloge), verbind het horloge via USB en start de Wear app eenmaal in Android Studio.

## Legenda AndroidAPSv2 watchface

![Legenda AndroidAPSv2 watchface](../images/AAPSv2_Watchface_legend.png)

A - tijd sinds laatste uitvoering loop

B - CGM-uitlezing

C - minuten sinds laatste CGM-uitlezing

D - wijziging in vergelijking met de laatste CGM-uitlezing (in mmol of mg/dl)

Gemiddelde wijziging in de CGM-uitlezing in de laatste 15 minuten

F - telefoon batterij

G - basaal (getoond in E/uur tijdens standaard patroon en in % tijdens TBR)

H - BGI (bloed glucose interactie) -> de mate waarin BG zou moeten stijgen of dalen uitgaande van enkel de insuline activiteit.

I - koolhydraten (koolhydraten aan boord | e-carbs in de toekomst)

J - insuline aan boord (van bolus | van basaal)

## Bekijken van gegevens in Nightscout

Als je een ander looping systeem gebruikt en je wilt de loop details *bekijken* op een Android Wear horloge, of als je wilt kijken naar de looping van uw kind, dan kunt u alleen de NSClient APK bouwen/downloaden. Om dit te doen volg de [APK build instructies](../Installing-AndroidAPS/Building-APK.md) waarbij je de build variant "NSClientRelease" selecteert. Er zijn verschillende watchfaces om uit te kiezen die de gemiddelde delta, IOB, momenteel actieve tijdelijke basaal en basale profielen + een CGM grafiek kunnen weergeven.

## Pebble

Pebble gebruikers kunnen de [Urchin watchface gebruiken](https://github.com/mddub/urchin-cgm) om de loopdata (indien geüpload naar Nightscout) *te bekijken*, maar je kunt niet via het horloge met AndroidAPS communiceren. U kunt verschillende velden kiezen om te tonen zoals IOB, en momenteel actief tijdelijk basaal en voorspellingen. Als u een open loop gebruikt kunt u [IFTTT](https://ifttt.com/) gebruiken om een applet te maken die zegt als Notificatie wordt ontvangen van AndroidAPS verzend dan een SMS of pushover notificatie.