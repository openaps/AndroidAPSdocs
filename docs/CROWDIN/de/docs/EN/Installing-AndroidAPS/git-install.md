# Git installieren

## Windows

### 1. Git herunterladen

- **Du musst immer online sein, da Android Studio verschiedene Updates herunterlädt!**
- Jede git Version sollte funktionieren. Zum Beispiel [https://git-scm.com/download/win](https://git-scm.com/download/win).
- Notiere Dir den Installationspfad. Du brauchst diesen im nächsten Schritt.

```{admonition} make git.exe available via Windows PATH
:class: note

Achte darauf, dass die Datei git.exe später ohne den Installationspfad mit angeben zu müssen, aufrufbar ist. Android Studio benötigt dies, um git.exe zu finden. In diesem Fall wird der Pfad in den Android Studio-Einstellungen automatisch richtig gesetzt.

```

![Git Installationspfad](../images/Update_GitPath.png)

### 2. Pfad zu git in Android Studio festlegen

- Öffne File > Settings

  ![Android Studio - Einstellungen öffnen](../images/Update_GitSettings1.png)

- Klicke auf das kleine Dreieck neben Version Control (1.), um das Untermenü zu öffnen.

- Git (2.) anklicken.

- Stelle sicher, dass die update method "Merge" (3.) ausgewählt ist.

- Prüfe durch klicken des Buttons "Test" (4.), ob Android Studio den Pfad zu git.exe automatisch ermitteln kann.

  ![Einstellungen für Android Studio](../images/AndroidStudio361_09.png)

- Wenn die automatische Einstellung möglich ist, wird die Git-Version angezeigt.

- Klicke im Dialogfenster auf "OK" (1.) und dann im Einstellungsfenster nochmals auf "OK" (2.).

  ![Automatische Git-Installation erfolgreich](../images/AndroidStudio361_10.png)

- Falls git.exe nicht gefunden werden kann, schließe das Dialogfenster mit "OK" (1.) und klicke dann auf den Button mit den drei Punkten (2.).

- Du kannst auch die [Suchfunktion](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html)  im Windows Explorer verwenden, um "git.exe" zu finden wenn Du Dir nicht sicher bist, wo diese gespeichert ist. Du brauchst die git.exe, die im Ordner bin gespeichert ist.

- Wähle den Pfad zu git.exe aus, stelle sicher, dass Du den Ordner \*\* \\bin\\\*\* ausgewählt hast (3.), und klicke auf "OK" (4.).

- Schließe das Einstellungs-Fenster durch Klick auf "OK" (5.).

  ![Automatische Git-Installation fehlgeschlagen](../images/AndroidStudio361_11.png)

### 3. Starte den Rechner neu

- Starte Deinen PC neu, um die Systemumgebung zu aktualisieren.

(git-install-check-git-settings-in-android-studio)=
### 4. Prüfe die Einstellungen in Android Studio

- Öffne das Terminal-Fenster in Android Studio

- Gib `git --version` (ohne Anführungszeiten und ohne das Leerzeichen zwischen den zwei - \[Minuszeichen\]!) und drücke Return

  ![git - -version](../images/AndroidStudio_gitversion1.png)

- Wenn git installiert und richtig verbunden ist, erhältst Du eine Information über die installierte Version, die wie folgt aussieht:

  ![result git-version](../images/AndroidStudio_gitversion2.png)

## Mac

- Jede git Version sollte funktionieren. Zum Beispiel [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
- Verwende homebrew um git zu installieren: `` `$ brew install git` ``.
- Details zur Installation von git findest Du in der [offiziellen git Dokumentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- Wenn Du git über homebrew installierst, musst Du keine Einstellungen ändern. Im Fall der Fälle findest Du diese unter Android Studio - Preferences.
