# Aus Quellcode App machen

## Android Studio auf dem Computer installieren

Um die AndroidAPS-App aus dem Quellcode zu erstellen, benötigst du auf dem Computer zunächst die Software Android Studio:

[https://developer.android.com/studio/install](https://developer.android.com/studio/install)

## AndroidAPS-App erstellen

1. Auf dem Computer/Notebook [https://github.com/MilosKozak/AndroidAPS](https://github.com/MilosKozak/AndroidAPS) aufrufen
2. Branch "master" auswählen
3. Schaltfläche "Clone or download" > Download ZIP auswählen
4. Heruntergeladene ZIP-Datei in einem neuen Ordner entpacken
5. Android Studio auf dem Computer/Laptop starten, "Open an existing Android Studio project" auswählen und den Pfad zum entpackten Ordner angeben, warten bis Android Studio nichts mehr nachlädt (kann einige Minuten dauern)
6. Gehe dann zum Build Menü und klicke auf "Generate Signed APK"
7. Wähle den build type, den du kompilieren möchtest:
![release full signatuer](https://user-images.githubusercontent.com/9692866/38299493-8838e38a-37fa-11e8-8c28-3fa6071e7a76.png)
    * **Release** - sollte man immer nehmen
    * **Debug** - nur für die Programmierer um Fehler zu finden
8. Wähle den Flavour, den du kompilieren möchtest:
    * **full** - Gesamte App (inkl. open loop, closed loop, Smartwatch-Steuerung)
    * **nsclient** - Zeigt nur die Behandlungen an, die in Nightscout eingetragen sind (z.B. für die elterliche Kontrolle ohne Steuerung)
    * **openloop** - nur der OpenAPS Teil der App (keine Pumpentreiber)
    * **pumpcontrol** - nur die Möglichkeit, die DanaR von der App aus zu bedienen (kein Loop, nur z.B. manuelle Bolusabgabe)
9. Wähle das Module "app"
10. Setze einen Key und ein Passwort, falls das dein erstes Mal ist, dann klicke auf Create new oder fülle die Angaben für deinen bestehenden Key aus.  Für mehr Informationen über den Key gehe bitte zu https://developer.android.com/studio/publish/app-signing.html#generate-key
11. Wähle den gleichen Build Typ wie vorher, wähle mind. V1 (Jar Signature) und drücke Finish.

    ![release full signatuer](https://user-images.githubusercontent.com/9692866/38299493-8838e38a-37fa-11e8-8c28-3fa6071e7a76.png)

12. Bitte warte eine Weile, bis die APK fertiggestellt ist. Das kann mehrere Minuten dauern. Du bekommst eine Benachrichtigung.

    ![AS3](https://github.com/MilosKozak/AndroidAPS/wiki/images/androidstudio3.png)

13. Klicke auf 'Show in Explorer'. Hier findest du die APK, manchmal kann es ein bisschen dauern bis sie angezeigt wird.
14. Kopiere die APK mit dem selben Namen, wie den des Build Types auf dein Handy und installiere sie. Falls AndroidAPS sich nicht installieren lässt und du eine ältere Version installiert hast, die mit einem anderen Schlüssel signiert wurde, solltest du diese zuerst (**DAVOR EINSTELLUNGEN UNBEDINGT SICHERN -> export settings**) deinstallieren.
