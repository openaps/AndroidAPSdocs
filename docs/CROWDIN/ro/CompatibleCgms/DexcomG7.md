# Dexcom G7 și ONE+


## Elemente fundamentale în avans

Trebuie remarcat faptul că sistemele G7 și ONE+, în comparație cu G6, nu filtrează valorile, nici în aplicație, nici în cititor. Mai multe detalii despre acest lucru [aici](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Citiți [metoda de filtrare](../CompatibleCgms/SmoothingBloodGlucoseData.md) sugestiile pentru Dexcom G7/ONE+/Stelo
```

## 1. xDrip+ (conectare directă la G7 sau ONE+)

- Urmați instrucțiunile de aici: [xDrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- Selectați xDrip+ în [Configurator, Sursă de glicemie](#Config-Builder-bg-source).

- Reglați setările xDrip+ în funcție de explicațiile de pe pagina de setări xDrip+  [Setări xDrip+ ](../CompatibleCgms/xDrip.md)

## 2.  Aplicația Dexcom G7 modificată (DiaKEM)

```{admonition} No new users
:class: avertizare
Cele mai recente actualizări de pe servere Dexcom au stricat DiaKEM pentru instalări noi: aplicația nu mai poate trece prin procesul de autentificare și înregistrare care se întâmplă la o instalare nouă a aplicației. 
Utilizatorii existenți nu se confruntă deocamdată cu probleme: nu deconectați, nu ștergeți datele, sau reinstalați aplicația G7 deoarece aceasta vă va împiedica să faceți aplicația să ruleze din nou. Dacă rulează deja, nu ar trebui să fiți afectat.
Utilizatorii noi sunt recomandați să folosească [xDrip+](https://androidaps.readthedocs.io/en/latest/CompatibleCgms/xDrip.html) ca sursă de date glicemice în **AAPS** până când această problemă a fost rezolvată.
```

**Notă: AAPS 3.2.0.0 sau mai mare este necesar! Nu este disponibil pentru ONE+.**

### Instalați o nouă aplicație G7 modificată (!) și porniți senzorul


O aplicație Dexcom G7 (DiaKEM) modificată permite accesul la datele Dexcom G7. Aceasta nu este aplicația BYODA deoarece această aplicație nu poate primi date G7 în acest moment.

- Dezinstalați aplicația Dexcom originală dacă o utilizați înainte (sesiunea senzorului curent poate fi continuată - țineți cont de codul senzorului înainte de a elimina aplicația!)

- Descărcați și instalați patched.apk [aici](https://github.com/authorgambel/g7/releases).

- Introduceți codul senzorului în aplicația modificată.

- Urmați recomandările generale pentru igiena și plasarea senzorilor de glicemie găsite [aici](../CompatibleCgms/GeneralCGMRecommendation.md).

- După faza de încălzire, valorile sunt afișate ca de obicei în aplicația G7.

### Configurarea în AAPS

- Selectați 'BYODA' în [Configurator, Sursă glicemie](#Config-Builder-bg-source) - chiar dacă nu este aplicația BYODA!

- Dacă AAPS nu primește valori, comută la o altă sursă de glicemie și apoi înapoi la "BYODA" pentru a apela interogarea pentru aprobarea schimbului de date între AAPS și BYODA.

## 3. xDrip+ (mod companion)

-   Descărcați și instalați xDrip+: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- Ca sursă de date în xDrip+ "Companion App" trebuie selectată și în Setări Avansate > Setări Bluetooth > "Companion Bluetooth" trebuie activat.
-   Selectați xDrip+ în [Configurator, Sursă glicemie](#Config-Builder-bg-source).

-   Reglați setările xDrip+ în funcție de explicațiile de pe pagina de setări xDrip+  [Setări xDrip+ ](../CompatibleCgms/xDrip.md)

## 4. Juggluco

Versiunea 9.0+ necesară

- Dezactivați aplicația conectată anterior la senzor: Dezinstalați aplicația sau utilizați "Oprire forțată". Dezactivați permisiunea "Dispozitive apropiate" în setările aplicației. Restricționează utilizarea bateriei de către aplicație.

- Uitați senzorul în setările Bluetooth: În setările Android, găsiți senzorul în dispozitivele asociate și selectați "Uitați". Numele senzorilor Dexcom G7 încep cu DXCM.

- Evitați interferențele ale altor senzori: Păstrați senzorii Dexcom vechi în afara razei Bluetooth.

- Conectați senzorul G7 la Juggluco: Deschide Juggluco → Meniul Stânga → Foto. Scanați matricea de date de pe aplicatorul G7 al senzorului. Așteptați până la 5 minute pentru ca Juggluco să găsească senzorul.

- Cerințe de asociere: Acceptați împerecherea senzorului cu Juggluco. Asigurați-vă că ecranul nu este blocat în timpul asocierii. Dacă asocierea eșuează, așteptați 5 minute înainte de a încerca din nou.

- Excepție: Ceasurile cu Wear OS se pot asocia fără a apăsa un buton de acceptare.
