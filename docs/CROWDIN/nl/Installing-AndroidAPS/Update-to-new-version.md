# Bijwerken naar een nieuwe versie of branch

## Master branch

**Installeer Git (als je dat nog niet hebt)**

* Elke versie van Git zou moeten werken. Bijvoorbeeld <https://git-scm.com/download/win>. Volg de instructies op die site om Git te installeren. Onthoud of noteer in welke map Git op jouw computer geïnstalleerd wordt.
* Ga naar Android Studio. Laat Android Studio weten waar op jouw computer het git.exe bestandje staat: File > Settings > Version Control > Git. Klik op de 3 stipjes rechts van het veld "Path to Git executable" en navigeer naar het git.exe bestandje op jouw computer. Klik OK.![](../images/git.png)

**Bijwerken van jouw lokale kopie**

* Zorg dat je in het hoofdscherm van Android Studio bent. Klik op VCS > Git > Fetch

**Selecteer branch**

* Als je de branch wilt wijzigen, selecteer dan een andere branch uit het menu rechtsonder: "master" (de meest actuele, stabiele versie) of een andere versie (zie verderop).

![](../images/branchintray.png)

Kies vervolgens 'Checkout' (je kunt 'Checkout as New Branch' gebruiken als je hier geen 'Checkout' kunt kiezen).

![](../images/checkout.png)

**Bijwerken vd branch vanuit Github**

* Druk op Ctrl+T, selecteer Merge method en druk op OK

![](../images/merge.png)

Onderin beeld zie je een groen bericht verschijnen over 'updated project' (bijgewerkt projekt).

**App maken en op je telefoon zetten**

Bouw de ondertekende apk zoals beschreven in [Bouwen van de app (kopje 'Bouwen van de ondertekende APK')](Building-APK.html#generate-signed-apk). Volg de verdere instructies daar om de app op je telefoon te zetten.

## Development branch (voor ontwikkelaars)

**Attentie:** De dev-versie van AndroidAPS is alleen voor ontwikkelaars en testers die kunnen omgaan met stacktraces, kunnen zoeken in logbestanden en zo nodig de debugger op te starten om foutrapporten te produceren die nuttig zijn voor de ontwikkelaars (kortom: mensen die weten wat ze doen zonder hulp te krijgen!). Daarom zijn veel functies die nog niet voltooid zijn, uitgeschakeld in de app. Om deze functies in te schakelen moet je de **Engineering Mode** (ontwikkelaarsmodus) activeren, door een bestand te maken genaamd `engineering_mode` in dezelfde map als waar je de logbestanden vindt. Het inschakelen van de ontwikkelaarsmodus kan de loop volledig onbruikbaar maken.

De meest stabiele versie van AndroidAPS is die in de [Master branch](https://github.com/MilosKozak/AndroidAPS/tree/master). Het wordt dringend aangeraden om op de Master branch te blijven terwijl je de leerdoelen afwerkt en praktijkervaring krijgt.

De [Dev branch](https://github.com/MilosKozak/AndroidAPS/tree/dev) is echter een goede plek om te zien welke functies worden getest en om te helpen met bugs ontdekken en feedback geven over hoe nieuwe functies in de praktijk werken. Vaak zullen mensen de Dev-branch testen met een oude telefoon en pomp totdat ze er vertrouwen in hebben dat die versie stabiel is - gebruik ervan is op jouw eigen risico.

A short summary of some of the changes to old features or development of new features currently in the Dev branch is listed below, and links to any key issues known will be shared (if applicable).

**Super Micro Bolus (SMB)**

More can be read on [Super Micro Boluses (SMB) on OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).  
  
Remember that you are choosing to test a still-in-development feature. Do so at your own risk & with due diligence to keep yourself safe.  
  
You should have run basic closed looping for more than four weeks (having completed Objective 7), and be very aware of all the types of situations in which your APS might fail.  
  
You may need to adjust your settings to allow SMB to work effectively. A good place to start is increasing your max IOB to normal meal bolus + 3x max daily basal. But remain vigilant and adjust settings with care.

<br />  
  
As with all updates, previous code has been cleaned, improved and bugs fixed. <br />  
Als je een bug vindt of denkt dat er iets mis is gegaan bij het gebruik van de Dev branch, ga dan naar het [issues](https://github.com/MilosKozak/AndroidAPS/issues) tabblad om te zien of iemand anders het al eerder gevonden heeft, of voeg het zelf toe als dat nog niet het geval is. Hoe meer informatie je hier kunt delen, hoe beter (vergeet niet dat je jouw [log bestanden moet delen](../Usage/Accessing-logfiles.md). De nieuwe functies kunnen ook worden besproken op [gitter](https://gitter.im/MilosKozak/AndroidAPS). <br />  
Als je wilt bijwerken naar de Dev branch, kun je dezelfde stappen gebruiken als hierboven beschreven. Je hoeft alleen te zorgen dat je de bijbehorende "dev"-branch selecteert in Android Studio.