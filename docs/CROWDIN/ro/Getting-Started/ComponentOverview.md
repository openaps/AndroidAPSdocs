# Prezentare generală a componentelor

**AAPS** is not just a (self-built) application; it is one of several modules of your closed loop system. Before deciding on components, it is a good idea to look at the component documentation.

![Prezentare generală a componentelor](../images/modules.png)

```{admonition} IMPORTANT SAFETY NOTICE
:class: important

Fundamentul caracteristicilor de siguranță **AAPS** discutate în această documentație se bazează pe caracteristicile de siguranță ale hardware-ului utilizat pentru a construi sistemul dumneavoastră. Pentru a închide o buclă automată de dozare a insulinei, este extrem de important să utilizați doar o pompă de insulină și un CGM testate, complet funcționale și aprobate de instanțele oficiale din țara dumneavoastră. Modificările hardware sau software ale acestor componente pot cauza dozări neașteptate de insulină, ce provoacă riscuri semnificative pentru utilizator. Dacă găsiți sau vi se oferă pompe de insulină sau receptoare CGM defecte, modificate sau fabricate de dumneavoastră, **nu le utilizați** pentru a crea un sistem **AAPS**.

În plus, este la fel de important să se utilizeze numai materiale originale, cum ar fi inseratoarele, canule și recipiente de insulină aprobate de fabricant pentru a fi utilizate cu pompa sau CGM. Utilizarea unor materiale netestate sau modificate poate cauza inexactitate CGM și erori de dozare a insulinei. Insulina este foarte periculoasă atunci când este administrată greșit - vă rugăm să nu vă jucați cu viața prin modificarea consumabilelor.

Nu în ultimul rând, nu trebuie să luați inhibitori ai SGLT-2 (gliflozine), deoarece aceștia scad incalculabil nivelul zahărului din sânge. Asocierea cu un sistem care scade ratele bazale pentru a crește glicemia este deosebit de periculoasă, deoarece, din cauza gliflozinelor, această creștere a glicemiei poate să nu apară și se poate ajunge la o stare periculoasă de lipsă de insulină. [Mai multe informații aici](#PreparingForAaps-no-sglt-2-inhibitors).
```

## Module necesare

### Algoritm de dozaj individual bun pentru tratamentul diabetului dumneavoastră

Even though this is not something to create or buy, it is probably the most underestimated 'module' — but it is essential. When you let an algorithm help manage your diabetes, it needs to know the right settings so it does not make severe mistakes. Chiar dacă încă vă lipsesc alte module, puteți deja să vă verificați și să vă adaptați **Profilul** în colaborare cu echipa dumneavoastră medicală de diabet.

**Profilul** include:

- RB (Rate bazale): furnizează insulină de fond;
- ISF (factorul de sensibilitate la insulină): cât de mult va fi redus nivelul glicemiei cu 1 unitate de insulină;
- CR (raportul carbohidraților): câte grame de carbohidrați sunt acoperite de o unitate de insulină.

Majoritatea utilizatorilor de buclă utilizează setări circadiene, rate bazale, ISF și CR, care adaptează sensibilitatea hormonală a insulinei în timpul zilei.

Pe lângă **Profil**, trebuie să configurați și **insulina** în **Gestionați → Setări insulină**, inclusiv DIA (durata de acțiune a insulinei) — vedeți [Setări insulină](#Config-Builder-insulin-dia).

Mai multe informații despre **Profil** găsiți [pe pagina dedicată](../SettingUpAaps/YourAapsProfile.md).

### Telefon

Vedeți pagina dedicată [Telefoane](../Getting-Started/Phones.md).

### Pompa de insulină

Vedeți pagina dedicată [Pompele compatibile](../Getting-Started/CompatiblePumps.md).

**Avantajele și dezavantajele unor modele de pompă**

Combo, Insight și pompele Medtronic mai vechi sunt pompe solide și pot fi folosite în buclă. Combo are avantajul că oferă mult mai multe tipuri de seturi de perfuzie din care puteți alege, deoarece are un conector Luer-Lock standard. Iar bateria este una obișnuită, pe care o puteți cumpăra de la orice benzinărie sau magazin deschis non-stop. Dacă chiar aveți nevoie de una, o puteți fura/împrumuta din telecomanda din camera de hotel ;-).

Avantajele DanaR/RS și Dana-i față de Combo, ca pompă preferată, sunt însă:

- Asocierea inițială este mai simplă cu Dana-i/RS. Dar, de obicei, faceți asta o singură dată, așa că are impact doar dacă vreți să testați o nouă funcție cu pompe diferite.
- Până acum, Combo funcționează prin analizarea ecranului. În general, funcționează excelent, dar este lent. Pentru buclă, acest lucru nu contează prea mult, deoarece totul funcționează în fundal. Still there is much more time you need to be connected so more time when the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
- The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. At nighttime, you are likely to be using TBRs more than SMB.  Dana-i/RS poate fi configurată astfel încât să nu emită semnale sonore și să nu vibreze.
- Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon as some CGM values are in.
- All pumps **AAPS** can talk with are waterproof on delivery. Only the Dana pumps are also "waterproof by warranty" due to the sealed battery compartment and reservoir filling system.

### Sursă valoare glicemie

Vedeți pagina dedicată [CGM-uri compatibile](../Getting-Started/CompatiblesCgms.md).

### **AAPS**-.apk file

Componenta principală a sistemului. Pentru a instala aplicația, trebuie mai întâi să construiți singur fișierul apk. Instrucțiunile sunt [aici](../SettingUpAaps/BuildingAaps.md).

### Server de raportare

A reporting server displays your glucose and treatment data, and creates reports for detailed analysis. There are currently two reporting servers available for use with AAPS: [Nightscout](#SettingUpTheReportingServer-nightscout) and [Tidepool](#SettingUpTheReportingServer-tidepool). They both provide ways to visualize your diabetes data over time, provide statistics about the **time in range** (TIR) and other measures.

Serverul de raportare este independent de celelalte module. If you don’t want to use a reporting server, you should know that it is not mandatory for running **AAPS** in the long term. But you still need to set one up, as it is required to fulfill [**Objective 1**](#objectives-objective1).

Informații suplimentare despre configurarea serverului de raportare găsiți [aici](../SettingUpAaps/SettingUpTheReportingServer.md).

## Module opționale

### Ceas inteligent

Puteți alege orice ceas inteligent cu **Wear OS 3** sau mai nou. See [Watches](../Getting-Started/Watches.md) for details.

Utilizatorii creează o [listă de telefoane și ceasuri testate](#Phones-list-of-tested-phones). There are different watchfaces for use with **AAPS**, which you can find [here](../WearOS/WearOsSmartwatch.md).

### xDrip

Even if you don't need the xDrip app as your **BG Source**, you can still use it, for example for alarms or a different blood glucose display. You can have as many alarms as you want, specify the time when an alarm should be active, choose whether it can override silent mode, etc. Some xDrip information can be found [here](../CompatibleCgms/xDrip.md). Please be aware that the documentation for this app is not always up to date, as it changes quickly.

## Ce trebuie făcut în timp ce așteptați modulele

It sometimes takes a while to get all the modules for closing the loop. Dar nu vă faceți griji, sunt multe lucruri pe care le puteți face în timp ce așteptați. It is **necessary** to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with **AAPS**. Using this mode, **AAPS** gives treatment recommendations you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, [read](../UsefulLinks/BackgroundReading.md) documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?** If you have your **AAPS** components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../SettingUpAaps/CompletingTheObjectives.md) before each new Objective, and set up your hardware.
