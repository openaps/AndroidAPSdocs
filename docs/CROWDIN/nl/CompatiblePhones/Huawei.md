# Een Huawei-telefoon instellen

**Voor welke telefoons is deze pagina:** Huawei-telefoons met **EMUI 12 tot EMUI 15**. Die zijn allemaal gebaseerd op Android 12, het minimum voor de huidige versie van **AAPS**. Op een telefoon met een oudere EMUI-versie kun je alleen een [oudere AAPS-versie](#maintenance-android-version-aaps-version) gebruiken.

```{admonition} Telefoons met HarmonyOS NEXT / HarmonyOS 5 :class: warning

Nieuwe Huawei-telefoons die in China worden verkocht, draaien HarmonyOS NEXT (HarmonyOS 5 en hoger). Dit systeem is geen Android meer en kan **AAPS** niet draaien. ```

Huawei-telefoons sluiten apps die op de achtergrond draaien heel agressief af. Pas alle instellingen hieronder toe op **AAPS** en op je CGM-app (bijvoorbeeld xDrip+ of Juggluco). Anders kunnen de loop en de glucosemetingen stoppen als het scherm uit is.

Namen van menu's kunnen per model iets verschillen. Kun je een instelling niet vinden? Typ dan de naam in de zoekbalk bovenaan in **Instellingen**.

De schermafbeeldingen hieronder komen van een oudere EMUI-versie. De instellingen zijn hetzelfde op EMUI 12 tot 15.

## Batterijoptimalisatie negeren

1. Open **Instellingen > Apps > Apps**.
2. Tik rechtsboven op het menu **⋮** en kies **Speciale toegang > Batterijoptimalisatie**.
3. Tik op de pijl bovenaan de lijst en kies **Alle apps**.
4. Kies **AAPS** en kies **Niet toestaan**. Huawei optimaliseert apps in deze lijst dan niet meer.
5. Doe hetzelfde voor je CGM-app.

![Huawei - batterijoptimalisatie negeren](../images/Huawei_BatteryOptimization.png)

## App starten: draaien op de achtergrond toestaan

1. Open **Instellingen > Batterij > App starten** (of **Instellingen > Apps > Apps >** kies de app **> Batterij > App starten**).
2. Zoek **AAPS** en zet **Automatisch beheren** uit.
3. Zet in het venster **Handmatig beheren** alle drie de opties aan: 
    - **Automatisch starten**
    - **Secundair starten** (kan door andere apps worden gestart)
    - **Op achtergrond uitvoeren**
4. Doe hetzelfde voor je CGM-app.

![Huawei - batterijopties](../images/Huawei_BatteryOptions.png)

## AAPS vastzetten in de recente apps

Vastgezette apps worden niet gesloten als je de lijst met recente apps leegmaakt.

1. Open de lijst met recente apps.
2. Veeg omlaag over de kaart van **AAPS**. Er verschijnt een slotje op de kaart.
3. Doe hetzelfde voor je CGM-app.

![Huawei - app vastzetten](../images/Huawei_LockApp.png)

## Energiebesparingsmodus

Laat **Energiebesparingsmodus** en **Ultra-energiebesparing** uit staan (**Instellingen > Batterij**). Die sluiten apps op de achtergrond, wat de instellingen hierboven ook zijn.

## Als AAPS nog steeds stopt op de achtergrond

Zie [Don't kill my app](https://dontkillmyapp.com/huawei) voor meer oplossingen speciaal voor Huawei.

## Honor-telefoons

Honor is nu een apart merk. De telefoons draaien MagicOS in plaats van EMUI. De instellingen voor de achtergrond lijken erg op elkaar: zoek naar **App starten** in de batterij-instellingen van de app, zet **Automatisch beheren** uit en sta alle drie de opties toe. Haal daarna de app uit de batterijoptimalisatie.