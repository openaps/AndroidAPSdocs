# Opdatering til en ny version eller gren

## Byg selv i stedet for at downloade

**AAPS** kan ikke downloades på grund af regler om medicinsk udstyr. Det er lovligt at bygge appen til eget brug, men du må ikke give en kopi til andre! Se [Ofte stillede spørgsmål for loopere](../UsefulLinks/FAQ.md) for detaljer.

## Vigtige bemærkninger

- Opdater til den nye version af **AAPS** så hurtigt som muligt, når en ny udgivelse er tilgængelig.
- Når en ny udgivelse er tilgængelig, får du et informationsbanner om den nye version i selve **AAPS**-appen.
- Den nye version bliver også annonceret på Facebook, når den udkommer.
- Læs grundigt [Udgivelsesnoter](ReleaseNotes.md) efter udgivelsen, og afklar eventuelle spørgsmål med fællesskabet på Facebook eller Discord, før du går videre med opdateringen.
- Opdaterer du fra **AAPS** 3.x? Læs først [Hvad er ændret i AAPS v4](V4Changes.md): den viser de funktioner, der er flyttet, har fået nyt navn eller er fjernet.
- Glem ikke at [eksportere dine indstillinger](ExportImportSettings.md). Når du importerer dem igen efter opdateringen, vælger du, om pumpeindstillingerne også skal erstattes.

## Opdater AAPS med build i browseren

Har du allerede bygget din AAPS-app med en browser? Følg vejledningen for den metode, du brugte:

- **AAPS Builder**: du bygger fra siden **Build AAPS** i dit private repository (som regel kaldet `my-aaps`) og downloader appen fra GitHub. Følg [Opdatering af AAPS med AAPS Builder](#aaps-builder-updates). Der er ingen fork at synkronisere.
- **Fork og forberedelsesfil**: du kører workflowet **AAPS-CI** i din egen kopi (fork) af AndroidAPS, et repository med navnet `AndroidAPS` på din GitHub-konto, og appen havner i dit Google Drive. Følg [Opdatering med en browser (fork)](./UpdateBrowserBuild.md).

## Opdater AAPS med Android Studio

Følg [denne vejledning](./UpdateComputerBuild.md).

## Opdater AAPS med kommandolinjen

Brug [den samme vejledning](../SettingUpAaps/CLIBuild.md) som da du byggede AAPS før, men hent de nye ændringer med git.

(Update-to-new-version-check-aaps-version-on-phone)=

## Efter opdateringen

Disse trin er de samme for alle build-metoder. Se i [Udgivelsesnoter](../Maintenance/ReleaseNotes.md), om der er særlige instruktioner efter opdateringen.

Når du har installeret den nye apk:

- kan du se **AAPS**-versionen på din telefon ved at åbne **menuen** (☰) øverst til venstre og derefter **Om** (som på skærmbilledet nedenfor). Den aktuelle **AAPS**-version kan ses;
- sørg for, at du har importeret dine indstillinger; og
- kontroller dine **AAPS**-indstillinger under **Indstillinger**, og sørg for, at de stadig er korrekte.

![Dialogen Om med den installerede AAPS-version](../images/update/about_dialog_version.png)