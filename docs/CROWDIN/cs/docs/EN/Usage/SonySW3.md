# Manuální instalace služeb Google Play pro Sony Smartwatch 3

Sony Smartwach 3 patří k nejoblíbenějším hodinkám používaným s AAPS. Společnost Google od podzimu 2020 již bohužel nepodporuje zařízení s OS 1.5. This leads to problems when using Sony SW3 with AAPS 2.7 and above.

Následující postup by měl prodloužit dobu, po kterou lze hodinky Sony Smartwatch 3 používat, ale mějte na paměti, že dříve nebo později bude potřeba přejít na nové chytré hodinky.

## 1. Stáhněte si nejnovější Google Service pro Wear OS

- Pomocí [webové stránky apkmirror](https://www.apkmirror.com/apk/google-inc/google-play-services-android-wear/) najdete nejnovější apk pro "Google Play Services (Wear OS)".

  Architektura: armeabi-v7a, minimální verze: Android 6.0+, DPI obrazovky: nodpi

- Musíte zajistit 2 věci:

  - Jedná se o nejnovější verzi?
  - Je kompatibilní s Android 6.0+ (protože verze pro android wear 7.0+ a vyšší nebude fungovat)?

- Dříve nebo později Google definitivně ukončí podporu Android 6.0. Až se tak stane, nejnovější verze pro Android 6.0+ již nebude k dispozici, proto to bude konec.

## 2. Stáhněte a nainstalujte si nástroje adb pro ladění do svého počítače

- Existuje několik způsobů, jak nainstalovat nástroj adb pro ladění.
- Doporučuje se použít [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools): Stačí stáhnout zip soubor a rozbalit jej do adresáře dle vašeho výběru.

## 3. Povolte možnosti ladění ADB na hodinkách

- Povolte vývojářský režim tak, že přejdete do Nastavení --> About --> Build number
- Or it could be Settings --> System --> About -->  --> Versions --> Build number

- Klikněte na něj 7krát.
- Nyní přejděte do Nastavení --> Developer options --> ADB Debugging (enable)

## 4. Připojte hodinky k počítači

- Poté připojte své hodinky k PC.
- Přejmenujte nejnovější APK služeb Google na něco krátkého a jednoduchého (řekněme SW3fix.apk).
- Umístěte tento soubor APK do adresáře svého nástroje adb (v našem případě: adresář rozbalených SDK Platform Tools).
- Otevřete terminál Windows pomocí příkazu „cmd“ v nabídce start Windows.
- In terminal, go to the directory that includes your adb tool and google services APK (type command „cd \[your path\]“, e.g. „cd C:UsersSWR50loopersdktools“).
- Pak zadejte „adb devices“.
- Po chvíli byste měli obdržet žádost o povolení k ladění na hodinkách: tu přijměte.
- V terminálu byste nyní měli vidět něco jako "zařízení 14452D11F536B5", když znovu napíšete "adb devices".
- Pokud vidíte "unauthorized" nebo něco jiného, nejste připraveni na další krok, vraťte se zpět a zkuste to znovu.
- Pokud se vám v tomto kroku nedaří, možná budete potřebovat konkrétní ovladače nebo jiný soubor pro vaše hodinky. Google bude v tomto okamžiku vaším nejlepším přítelem.
- Potom počkejte, instalace může trvat několik minut.

## 5. Odešlete aplikaci do hodinek

- V terminálu zadejte tento příkaz „adb install -r -g nazevaplikace.apk“ (v našem případě tedy „adb install -r -g SW3fix.apk“).

  ![Terminal command](../images/SonySW3_Terminal1.png)

- Počkejte asi 4–5 minut na dokončení instalace.

  ![Terminál – úspěšná instalace](../images/SonySW3_Terminal2.png)

- Jakmile máte hotovo, restartujte hodinky a měli byste vidět, jak se aplikace začínají samy synchronizovat.
