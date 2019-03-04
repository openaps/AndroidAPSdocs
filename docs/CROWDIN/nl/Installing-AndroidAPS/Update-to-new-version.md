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

Kies vervolgens 'Checkout' (je kunt 'Checkout as New Branch' of 'Checkout As...' gebruiken als je hier geen 'Checkout' kunt kiezen).

![](../images/checkout.png)

**Bijwerken vd branch vanuit Github**

* Druk op Ctrl+T, selecteer Merge method en druk op OK

![](../images/merge.png)

Onderin beeld zie je een bericht verschijnen over 'updated project' (bijgewerkt projekt) of 'all files are up-to-date' (alle bestanden zijn bijgewerkt).

**App maken en op je telefoon zetten**

Bouw de ondertekende apk zoals beschreven in [Bouwen van de app (kopje 'Bouwen van de ondertekende APK')](Building-APK.html#generate-signed-apk). Volg de verdere instructies daar om de app op je telefoon te zetten.

## Development branch (voor ontwikkelaars)

**Attentie:** De dev-versie van AndroidAPS is alleen voor ontwikkelaars en testers die kunnen omgaan met stacktraces, kunnen zoeken in logbestanden en zo nodig de debugger op te starten om foutrapporten te produceren die nuttig zijn voor de ontwikkelaars (kortom: mensen die weten wat ze doen zonder hulp te krijgen!). Daarom zijn veel functies die nog niet voltooid zijn, uitgeschakeld in de app. Om deze functies in te schakelen moet je de **Engineering Mode** (ontwikkelaarsmodus) activeren, door een bestand te maken genaamd `engineering_mode` in dezelfde map als waar je de logbestanden vindt. Het inschakelen van de ontwikkelaarsmodus kan de loop volledig onbruikbaar maken.

De meest stabiele versie van AndroidAPS is die in de [Master branch](https://github.com/MilosKozak/AndroidAPS/tree/master). Het wordt dringend aangeraden om op de Master branch te blijven terwijl je de leerdoelen afwerkt en praktijkervaring krijgt.

De [Dev branch](https://github.com/MilosKozak/AndroidAPS/tree/dev) is echter een goede plek om te zien welke functies worden getest en om te helpen met bugs ontdekken en feedback geven over hoe nieuwe functies in de praktijk werken. Vaak zullen mensen de Dev-branch testen met een oude telefoon en pomp totdat ze er vertrouwen in hebben dat die versie stabiel is - gebruik ervan is op jouw eigen risico. Bij het testen van nieuwe functies, vergeet niet dat je iets aan het testen bent dat nog middenin het ontwikkelingsproces is. Doe dit op je eigen risico & met de nodige voorzichtigheid om jezelf veilig te houden.

Als je een bug vindt of denkt dat er iets mis is gegaan terwijl je de Dev branch gebruikt, kijk dan op het tabblad [issues](https://github.com/MilosKozak/AndroidAPS/issues) om te zien of iemand anders al hetzelfde heeft gehad, of voeg het zelf toe als dat niet het geval is. Hoe meer informatie je hier kunt delen, hoe beter (vergeet niet om jouw [log bestanden](../Usage/Accessing-logfiles.md)) aan te leveren. Jouw ervaringen met de nieuwe functies kun je ook bespreken op [gitter](https://gitter.im/MilosKozak/AndroidAPS). <br />  
Als je jouw app wilt bijwerken naar de Dev branch, kun je dezelfde stappen gebruiken als hierboven beschreven. Je hoeft alleen te zorgen dat je de bijbehorende "dev"-branch selecteert in Android Studio.