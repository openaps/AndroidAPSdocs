Řešení problémů s Android Studiem
**************************************************
Ztráta úložiště klíčů
==================================================
Pokud při aktualizaci AndroidAPS používáte stále stejné úložiště klíčů, nemusíte odinstalovávat předchozí verzi na svém chytrém telefonu. To je důvod, proč je doporučeno uchovávat úložiště klíčů na bezpečném místě.

V případě, že nemůžete najít své staré úložiště klíčů, postupujte při aktualizaci takto:

1. `Exportujte nastavení <../Usage/ExportImportSettings.html#exportovat-nastaveni>`_ na svém telefonu.
2. Zkopírujte nastavení ze svého telefonu na externí úložiště (např. váš počítač, cloudové úložiště...).
3. Ujistěte se, že soubor se zálohou nastavení "AndroidAPS Preferences" je bezpečně uložen.
4. Vytvořte podepsanou aplikaci v nové verzi tak, jak je popsáno na stránce `Jak aktualizovat na novou verzi <../Installing-AndroidAPS/Update-to-new-version.html>`_.
5. Odinstalujte předchozí verzi AAPS na svém telefonu.
6. Nainstalujte novou verzi AAPS na svůj telefon.
7. `Importujte nastavení <../Usage/ExportImportSettings.html#exportovat-nastaveni>`_ – pokud nemůžete najít soubor s nastavením na svém telefonu, zkopírujte jej do telefonu z externího úložiště.
8. Smyčku pak můžete dále používat.



Error "on demand" Configuration
==================================================

Jestliže vytváření apk selže s chybou "on demand configuration", proveďte následující změnu:
* Otevřete okno Preferences klepnutím na File > Settings (na platformě Mac, Android Studio > Preferences).
* V levé části pak na Build, Execution, Deployment > Compiler.
* Odtrhněte Configure on demand.
* Klikněte na Apply nebo OK.


Varování kompilátoru Kotlin
==================================================
Pokud sestavení proběhne úspěšně, ale objeví se varování kompilátoru Kotlin, prostě je ignorujte.

Sestavení aplikace bylo úspěšné a můžete ji přenést do telefonu.

.. image:: ../images/GIT_WarningIgnore.PNG
  :alt: ignorujte varování kompilátoru Kotlin

Klíč byl vytvořen s chybami
==================================================
Při vytváření nového úložiště klíčů pro vytvoření podepsané APK se ve Windows může objevit následující chybová zpráva

.. image:: ../images/AndroidStudio35SigningKeys.png
  :alt: Klíč byl vytvořen s chybami

Zdá se, že se jedná o chybu Android Studia 3.5.1 a jeho prostředí Java ve Windows. Klíč je správně vytvořen, ale doporučení je nesprávně zobrazeno jako chyba. To lze nyní ignorovat.

Nelze stáhnout… / Práce Offline
==================================================
Pokud se zobrazí podobná chybová zpráva,

.. image:: ../images/GIT_Offline1.jpg
  :alt: Warning could not download

ujistěte se, že položka ‘Offline work’ je deaktivována.

File -> Settings

.. image:: ../images/GIT_Offline2.jpg
  :alt: Nastavení práce offline

Error: buildOutput.apkData must not be null
==================================================
Někdy můžete při vytváření APK dostat chybovou zprávu, která říká

  ``Errors while building APK.``

  ``Cause: buildOutput.apkData must not be null``

Toto je známá chyba v Android Studio 3.5 a pravděpodobně nebude opravena před Androidem Studio 3.6. Tři možnosti:

1. Ručně smažte tři složky pro sestavení (obvykle "build", složku pro sestavení v "app" a složku sestavení ve "wear") a znovu vygenerujte podepsanou apk.
2. Nastavte cílovou složku do složky projektu namísto složky aplikace, jak je popsáno v `tomto videu <https://www.youtube.com/watch?v=BWUFWzG-kag>`_.
3. Změňte cílovou složku APK (jiné umístění).

Unable to start daemon process
==================================================
Pokud vidíte zmíněnou chybovou zprávu, pravděpodobně používáte 32bitový systém Windows 10. Ten není podporován Android Studiem 3.5.1 a novějším. Pokud používáte Windows 10, musíte používat 64bitový operační systém.

Na internetu existuje spousta manuálů, jak zjistit, zda máte 32bitový nebo 64bitový OS – například `tento <https://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/>`_.

.. image:: ../images/AndroidStudioWin10_32bitError.png
  :alt: Screenshot Unable to start daemon process
  

Nejsou dostupná data z CGM
==================================================
* V případě, že používáte xDrip+: Proveďte identifikaci vysílače tak, jak je popsáno na stránce `nastavení xDrip+ <../Configuration/xdrip.html#identify-receiver>`_.
* In case you are using patched Dexcom G6 app: This app is outdated. Use `BYODA <../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app>`_ instead.

Neprovedené změny
==================================================
Pokud se zobrazí podobná chybová zpráva,

.. image:: ../images/GIT_TerminalCheckOut0.PNG
  :alt: Chyba uncommitted changes

Možnost 1 – Zkontrolujte instalaci gitu
--------------------------------------------------
* git nemusel být nainstalován správně (musí být globálně dostupný)
* pokud jste ve Windows a git byl právě nainstalován, měli byste restartovat počítač nebo se alespoň odhlásit a znovu se přihlásit, aby byl git po své instalaci globálně dostupný
* `Zkontrolujte instalaci git <../Installing-AndroidAPS/git-install.html#kontrola-nastaveni-git-v-android-studiu>`_
* Pokud se při kontrole nezobrazí žádná verze gitu, ale git je na počítači nainstalován, zkontrolujte, že Android Studio ví, `kde je git v počítači umístěn <../Installing-AndroidAPS/git-install.html#nastaveni-git-v-android-studiu>`_.

Možnost 2 – Znovu načtěte zdrojový kód
--------------------------------------------------
* V Android Studio zvolte VCS -> GIT -> Reset HEAD

.. image:: ../images/GIT_TerminalCheckOut3.PNG
  :alt: Reset HEAD

Možnost 3 – Zkuste stáhnout aktualizace
--------------------------------------------------
* Zkopírujte ‘git checkout --’ do schránky (bez uvozovek)
* Přepněte v Android Studiu na Terminal (ve spodní části vlevo v okně Android Studia)

  .. image:: ../images/GIT_TerminalCheckOut1.PNG
    :alt: Terminál Android Studia

* Vložte zkopírovaný text a stiskněte enter

  .. image:: ../images/GIT_TerminalCheckOut2.jpg
    :alt: Vaše větev kódu je aktuální

Aplikace není nainstalována
==================================================
.. image:: ../images/Update_AppNotInstalled.png
  :alt: aplikace v telefonu není nainstalována

* Ujistěte se, že jste do telefonu přenesli soubor „app-full-release.apk“.
* Pokud se na telefonu zobrazí „Aplikace není nainstalována“, postupujte následovně:
  
1. `Exportujte nastavení <../Usage/ExportImportSettings.html>`__ (ve verzi AAPS, která je již nainstalována v telefonu)
2. Odinstalujte aplikaci AAPS ze svého telefonu
3. Zapněte režim letadlo a vypněte bluetooth.
4. Nainstalujte novou verzi (“app-full-release.apk”)
5. `Importujte nastavení <../Usage/ExportImportSettings.html>`__
6. Znovu zapněte bluetooth a vypněte režim letadlo

Aplikace je nainstalována, ale ve staré verzi
==================================================
Jestliže jste úspěšně sestavili aplikaci, přenesli ji do telefonu a nainstalovali ji, ale číslo verze zůstává stejné, možná jste zapomněli krok sloučení v `návodu na aktualizaci lokální kopie <../Installing-AndroidAPS/Update-to-new-version.html#aktualizace-lokalni-kopie>`_.

Nic z výše uvedeného nefunguje
==================================================
Jestliže žádný z uvedených tipů nepomáhá, zvažte sestavení aplikace úplně od začátku:

1. `Exportujte nastavení <../Usage/ExportImportSettings.html>`__ (ve verzi AAPS, která je již nainstalována v telefonu)
2. Zálohujte si úložiště klíčů a heslo k němu. V případě, že jste hesla zapomněli, můžete je zkusit najít v projektových souborech, jak je popsáno `zde <https://youtu.be/nS3wxnLgZOo>`__. Nebo můžete vytvořit a použít nové úložiště klíčů.
3. Vytvořte aplikaci úplně od začátku, jak je popsáno `zde <../Installing-AndroidAPS/Building-APK.html#stahnete-si-kod-androidaps>`__.
4. Jestliže jste úspěšně sestavili APK, odstraňte stávající aplikaci z telefonu a přeneste do něj a nainstalujte nový soubor apk.
5. `Importujte nastavení <../Usage/ExportImportSettings.html>`__

Nejčernější scénář
==================================================
V případě, že ani sestavení aplikace úplně od začátku nevyřeší váš problém, zkuste úplně odinstalovat Android Studio. Někteří uživatelé uvedli, že to jejich problém vyřešilo.

**Ujistěte se, že jsou odinstalovány všechny soubory spojené s Android Studiem.** Pokud zcela neodstraníte Android Studio se všemi skrytými soubory, odinstalování může způsobit nové problémy namísto vyřešení těch stávajících. manuály pro kompletní odinstalaci můžete najít na internetu, například `https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10 <https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10>`_.

Znovu od začátku nainstalujte Android Studio, jak je popsáno `zde <../Installing-AndroidAPS/Building-APK.html#instalace-android-studio>`_ a **neaktualizujte gradle**.
