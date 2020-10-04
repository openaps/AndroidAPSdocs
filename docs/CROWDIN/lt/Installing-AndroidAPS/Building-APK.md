# Android programos (APK) kūrimas

## Kurti sau, o ne parsisiųsti

**Dėl reikalavimų medicininiams įrenginiams, nėra galimybės tiesiog parsisiųsti AndroidAPS programą. Programos kūrimas savo reikmėms yra visiškai teisėtas, tačiau jums neleidžiama perduoti jos kopijos kitiems! Žr. [DUK](../Getting-Started/FAQ.md) dėl išsamesnės informacijos.**

## ## Svarbios pastabos

* Please use **[Android Studio Version 4.0.1](https://developer.android.com/studio/)** or newer to build the apk.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) are not supported by Android Studio 4.0.1.

**Konfigūracija pagal pareikalavimą** nepalaikoma dabartinėje Android Gradle modulio versijoje!

Jei sukurti APK nepavyko dėl pasirinktinės konfigūracijos klaidos, galite atlikti šiuos veiksmus:

* Atidarykite nustatymų langą spustelėdami File > Settings (Mac kompiuteryje Android Studio > Preferences).
* Kairiojoje srityje spustelėkite Build, Execution, Deployment > Compiler.
* Panaikinkite langelio „Configure on demand“ žymėjimą.
* Spustelėkite Apply arba OK.

* * *

### Šis straipsnis yra padalintas į dvi dalis.

* Apžvalgos skyriuje paaiškinta, kokių veiksmų reikia norint sukurti APK failą.
* Žingsnis po žingsnio instrukcijose rasite konkretaus diegimo ekrano kopijas. Kadangi Android Studio versijos - programinės įrangos kūrimo aplinka, kurioje sukursime APK - keičiasi labai greitai, tikslios atitikties su savo kūrimu nepamatysite, tačiau susidarysite bendrą įspūdį, kaip tai daroma. Android Studio veikia Windows, Mac OS X ir Linux ir kiekvienoje platformoje gali būti nedidelių skirtumų. Jei pastebite, kad kažkas svarbaus neveikia tinkamai arba jo trūksta, praneškite Facebook grupėje "AndroidAPS users" arba Gitter kanale [Android APS](https://gitter.im/MilosKozak/AndroidAPS) arba [AndroidAPSwiki](https://gitter.im/AndroidAPSwiki/Lobby), kad galėtumėme išspręsti problemą.

## Apžvalga

APK failui sukurti reikalingi šie veiksmai:

1. [Git diegimas](../Installing-AndroidAPS/git-install.rst)
2. [Android Studio įdiegimas](../Installing-AndroidAPS/Building-APK#install-android-studio)
3. [Nustatyti git kelią Android Studio parametruose](../Installing-AndroidAPS/Building-APK#set-git-path-in-preferences)
4. [Atsisiųsti AndroidAPS kodą](../Installing-AndroidAPS/Building-APK#download-androidaps-code)
5. [Atsisiųskite AndroidAPS SDK](../Installing-AndroidAPS/Building-APK#download-android-sdk)
6. [Sukurti programą](../Installing-AndroidAPS/Building-APK#generate-signed-apk) (generuoti pasirašomą apk)
7. [Perkelti apk failą į telefoną](../Installing-AndroidAPS/Building-APK#transfer-apk-to-smartphone)
8. [Identifikuoti gavėją, jei naudojate xDrip+](../Installing-AndroidAPS/Building-APK#identify-receiver-if-using-xdrip)

## Žingsnis po žingsnio instrukcija

Detalus veiksmų, reikalingų sukurti APK failą, aprašymas.

## Įdiegti git (jei neturite)

Vykdykite instrukcijas pagal [git instaliavimo puslapį](../Installing-AndroidAPS/git-install.rst).

## Android Studio įdiegimas

Šios ekrano kopijos yra iš Android Studio 3.6.1 versijos. Priklausomai nuo Android Studio versijos, jūsų ekranas gali atrodyti šiek tiek kitaip. Bet jūs vis tiek turėtumėte sugebėti susitvarkyti. Čia galite rasti [bendruomenės pagalbą](../Where-To-Go-For-Help/Connect-with-other-users.md).

Vienas iš svarbiausių aspektų diegiant Android Studio yra: **Būkite kantrūs!** Diegiant ir nustatant Android Studio yra įkeliama daug duomenų ir tai užima daug laiko.

Įdiekite [Android Studio](https://developer.android.com/studio/install.html) ir nustatykite jį pirmojo paleidimo metu.

Pasirinkite „Do not import settings“, nes iki šiol nebuvo atlikta jokių nustatymų.

![Neimportuoti nustatymų](../images/AndroidStudio361_01.png)

Nuspręsti, ar norite bendrinti duomenis su Google, ar ne.

![Dalintis duomenimis su Google](../images/AndroidStudio361_02.png)

Kitame ekrane spustelėkite "Next" (kitas).

![Pasisveikinimo ekranas](../images/AndroidStudio361_03.png)

Pasirinkite "Standart" instaliavimą ir spauskite "Next".

![Standartinis instaliavimas](../images/AndroidStudio361_04.png)

Pasirinkite sąsajos dizainą, kuris jums labiausiai patinka. (Šiame vadove mes naudojamas "Light".) Tada spustelėkite "Next" (kitas). Tai tik spalvų schema. Galite pasirinkti bet kurią norite (pvz., "Darcula" tamsiam režimui). Šis pasirinkimas neturi įtakos APK kūrimui.

![UI Spalvų schema](../images/AndroidStudio361_05.png)

"Verify Settings" (patvirtinti nustatymus) lange spustelėkite "Next".

![Patvirtinti nustatymus](../images/AndroidStudio361_06.png)

Palaukite, kol Android Studio siunčiasi papildomus komponentus ir būkite kantrūs. Kai viskas atsisiųs, mygtukas "Finish" (baigti) pamėlynuos. Spustelėkite mygtuką dabar.

![Komponentai atsisiunčiami](../images/AndroidStudio361_07.png)

## Android Studio nustatymuose įveskite git kelią

Įsitikinkite, kad [git yra įdiegta](../Installing-AndroidAPS/git-install.rst) kompiuteryje.

Android Studio pasisveikinimo ekrane spustelėkite mažą trikampį (1. kitame paveikslėlį) ir pasirinkite "Settings" (Nustatymai) (2.).

![Android Studio nustatymai pasisveikinimo ekrane](../images/AndroidStudio361_08.png)

### Windows

* Spustelėkite mažą trikampį šalia "Version Control" (1.) norėdami atidaryti sub-meniu.
* Spustelėkite Git (2.).
* Įsitikinkite, kad atnaujinimo metodas "Merge" (3.) yra pasirinktas.
* Patikrinkite, ar Android Studio automatiškai randa kelią į git.exe, paspaudus mygtuką "Test" (4.)
    
    ![Android Studio nustatymai](../images/AndroidStudio361_09.png)

* Jei automatinis nustatymas sėkmingas, git versija bus rodoma.

* Spauskite "OK" dialogo lange (1.) ir "OK" nustatymų lange (2.).
    
    ![Automatinis git instaliavimas pavyko](../images/AndroidStudio361_10.png)

* Jei failas git.exe negali būti rastas, spustelėkite "OK" dialogo lange (1.) ir tada mygtuką su trimis taškais (2.).

* Naudokite [paieškos funkcija](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) "Windows explorer" rasti "git.exe" jei jūs nežinote, kur jį galima rasti. Jūs ieškote git.exe, esančiame \bin\ aplanke.
* Pasirinkite kelią į git.exe ir įsitikinkite, kad jūs pasirinkote vieną iš ** \bin\ ** aplankų (3.) ir spustelėkite "OK" (4.).
* Uždarykite nustatymų langą, paspausdami "OK" mygtuką (5.).
    
    ![Automatinis git instaliavimas nepavyko](../images/AndroidStudio361_11.png)

* **Perkraukite kompiuterį, kad atsinaujintų sistemos aplinka.**

### Mac

* Bet kuri git versija turėtų veikti. Pvz., <https://git-scm.com/download/mac>.
* Naudoti homebrew įdiegti git: ```$ brew install git```.
* Daugiau informacijos, kaip įdiegti git, žr. [oficialioji git dokumentacija](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Jei įdiegiate git per homebrew, nereikia keisti jokių nuostatų. Jei prireiks: Jos gali būti randamos čia: Android Studio - Preferences.

## Atsisiųsti AndroidAPS kodą

* **Jei dar neperkrovėte kompiuterio iš naujo, po git.exe kelio nustatymų, padarykite tai dabar. Sistemos aplinka turi būti atnaujinta.**

* Yra du variantai, kaip pradėti naują projektą:
    
    * Android Studio pasisveikinimo ekrane spustelėkite "Get from version control"
        
        ![Patikrinti projektą iš Versijos kontrolės pasisveikinimo ekrane](../images/AndroidStudio_GetFromVersionControl.PNG)
    
    * Jei jau atidarėte Android Studio ir nematote pasisveikinimo ekrano, pasirinkite File (1.) > New (2.) > Project from Version Control... (3.)
        
        ![Patikrinti projektą iš Versijos kontrolės Android Studio](../images/AndroidStudio_FileNew.PNG)

* Įveskite pagrindinio AndroidAPS saugyklos puslapio URL (https://github.com/nightscout/AndroidAPS) (1.).

* Pasirinkite katalogą, kuriame norite išsaugoti klonuotą kodą. (2.)
* Spustelėkite mygtuką "Clone" (3.).
    
    ![Klonuoti saugyklą](../images/AndroidStudio_NewURL.PNG)

* Nespauskite "Background" (vykdyti fone), o kol duomenų saugykla yra klonuojama!
    
    ![Nėra foninio veiksmo](../images/AndroidStudio_NoBackground.png)

* Po duomenų saugyklos sėkmingo klonavimo, atidarykite savo vietinę kopiją, paspausdami "Yes".
    
    ![Atidaryti saugyklą](../images/AndroidStudio361_16.png)

* Apatiniame dešiniajame kampe pamatysite informaciją, kad Android Studio vykdo fonines užduotis.
    
    ![Foninis veikimas](../images/AndroidStudio361_17.png)

* Suteikite prieigą, jei ugniasienė prašo leidimo.
    
    ![Ugniasienės leidimas java](../images/AndroidStudio361_18.png)

* Kai foninės užduotys yra baigtos, jūs tikriausiai pamatysite tokį klaidos pranešimą:
    
    ![SDK licencija](../images/AndroidStudio361_19.png)

## Atsisiųskite AndroidAPS SDK

* Spustelėkite File > Settings.
    
    ![Atidaryti nustatymus](../images/AndroidStudio361_20.png)

* Spustelėkite mažą trikampį šalia Appearance & Behaviour (1.).

* Spustelėkite mažą trikampį prie System Settings (2.) ir pasirinkite Android SDK (3.)
* Pažymėkite langelį kairėje "Android 9.0 (Pie)" (4.) (API Level 28).
    
    ![SDK nustatymai](../images/AndroidStudio361_21.png)

* Patvirtinkite pakeitimus paspausdami OK.
    
    ![Patvirtinti SDK pakeitimus](../images/AndroidStudio361_22.png)

* Sutikite su licencijos nuostatomis (1.) ir spustelėkite "Next" (2.).
    
    ![Priimti SDK licenciją](../images/AndroidStudio361_23.png)

* Palaukite, kol baigsis diegimas.
    
    ![Palaukti, kol SDK diegiamas](../images/AndroidStudio361_24.png)

* Kai SDK diegimas bus baigtas, "Finish" mygtukas pamėlynuos. Spustelėkite mygtuką dabar.
    
    ![Baigti SDK diegimą](../images/AndroidStudio361_25.png)

* Android Studio gali rekomenduoti atnaujinti gradle sistemą. **Niekada neatnaujinkite gradle!** Tai gali sukelti problemų!

* Jei apatinėje dešinėje Android Studio lango pusėje matote informaciją, kad Android Gradle papildinį galima atnaujinti, spustelėkite tekstą „update“ (1.) ir dialogo lange "Don't remind me again for this project" (Nepriminti vėl šiam projektui) (2.).
    
    ![Neatnaujinti Gradle](../images/AndroidStudio361_26.png)

## Generuoti pasirašytą APK (Generate signed APK)

Pasirašymas reiškia, kad jūs pasirašote savo sukurtą programą, skaitmenine prasme reiškia tam tikrą skaitmeninį pirštų atspaudą pačioje programoje. Programą būtina pasirašyti skaitmeniniu būdu, nes Android saugumo sumetimais priima tik pasirašytą kodą. Daugiau informacijos apie šią temą, spauskite [šią nuorodą](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* Spustelėkite "Build" (Sukurti) meniu juostoje ir pasirinkite "Generate Signed Bundle / APK..." (Generuoti pasirašomą rinkinį / APK...).
    
    ![Kurti apk](../images/AndroidStudio361_27.png)

* Pasirinkite "APK" (1.) vietoje "Android App Bundle" ir spauskite "Next" (2.).
    
    ![APK vietoj rinkinio](../images/AndroidStudio361_28.png)

* Įsitikinkite, kad modulis yra nustatytas, į "app" (1.).

* Spustelėkite "Create new..." (2.), kad pradėtumėte kurti savo raktų saugyklą.
    
    Tai ne kas kita, kaip failas, kuriame saugoma jūsų programos parašo informacija. Ji šifruojama, ir informacija apsaugota slaptažodžiais.
    
    ![Sukurti raktų saugyklą](../images/AndroidStudio361_29.png)

* Spustelėkite aplanko simbolį (1.), kad pasirinktumėte savo rakto saugyklos kelią.

* Pasirinkite kelią, kur jūsų raktų saugykla turi būti išsaugota (2.). **Nesaugokite tame pačiame aplanke, kuriame yra projektas. Jūs turite naudoti kitą aplanką!** Galimas variantas yra jūsų pagrindinis katalogas.
* Įveskite failo vardą savo raktų saugyklai (3.).
* Spustelėkite "OK" (4.).
* Raktų saugyklos ir pačių raktų slaptažodžiai neturi būti labai sudėtingi. Įsitikinkite, kad juos prisiminsite, arba užsirašykite ir laikykite saugioje vietoje. Tuo atveju, jei neprisiminsite slaptažodžio ateityje, skaitykite [pamestų raktų saugyklų trikčių šalinimas](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Įveskite (5.) ir patvirtinkite (6.) raktų saugyklos slaptažodį.
* Atlikite tą patį ir raktui (7. + 8.).
* Galiojimas (9.) 25 metus, kaip nustatyta. Jums nereikia pakeisti nustatytų reikšmių.
* Vardas ir pavardė turi būti įrašyti (10.). Visa kita informacija yra neprivaloma.
* Spustelėkite "OK" (11.) kai baigsite.
    
    ![Raktų saugyklos kelias](../images/AndroidStudio361_30.png)

* Įsitikinkite, kad langelis prisiminti slaptažodžius (remember passwords), yra pažymėtas (1.). Taigi jums nereikia įvesti juos kitą kartą, kai kursite apk (t. y. kai atnaujinima į naują AndroidAPS versiją).

* Spustelėkite "Next" (2.).
    
    ![Atsiminti slaptažodžius](../images/AndroidStudio361_31.png)

* Pasirinkite kūrimo variantą "fullRelease" (1.).

* Pažymėkite langelius V1 ir V2 parašo versijoms(2.).
* Spustelėkite "Finish". (3.)
    
    ![Baigti kūrimą](../images/AndroidStudio361_32.png)

* Android Studio bus rodoma informacija "APK(s) generated successfully..."(APK(s) sukurtas sėkmingai...), kai kūrimas bus baigtas.

* Jei kūrimas nebuvo sėkmingas, skaitykite [trikčių diagnostikos skiltį](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).
* Lengviausias būdas surasti sukurtą APK, spustelėkite ant "Event log" (įvykių žurnalai).
    
    ![Kūrimas sėkmingas - įvykių žurnalas](../images/AndroidStudio361_33.png)

* Įvykių žurnalo skiltyje spauskite "locate" (surasti).
    
    ![Įvykių žurnalas - raskite apk](../images/AndroidStudio361_34.png)

* failo, kurio ieškote, pavadinimas yra app-full-release.apk.
    
    ![APK failo vieta](../images/AndroidStudio361_35.png)

## Perkelkite APK į išmanųjį telefoną

Lengviausias būdas perkelti app-full-release.apk failą į telefoną yra [USB kabeliu ar Google Disku](https://support.google.com/android/answer/9064445?hl=en). Prašome atkreipti dėmesį, kad perdavimas elektroniniu paštu gali sukelti sunkumų ir nėra tinkamiausias būdas.

Jūsų telefone jūs turite leisti diegti programas iš nežinomų šaltinių. Instrukcijas, kaip tai padaryti, galima rasti internete (pvz., [čia](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) arba [čia](https://www.androidcentral.com/unknown-sources)).

## Identifikuoti gavėją, jei naudojate xDrip+

[Žr. xDrip+ puslapyje](../Configuration/xdrip#identify-receiver)

## Trikčių šalinimas

Žr. atskirą puslapį, kuriame pateiktas [Android Studio trikčių šalinimas](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).