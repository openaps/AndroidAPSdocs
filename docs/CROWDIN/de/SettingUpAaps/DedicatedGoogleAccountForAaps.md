# Ein separates Google-Konto für AAPS (optional)

Einige **AAPS**-Nutzende verwenden ihr Haupt-E-Mail-Konto [Standard-E-Mail-Konto] auch für **AAPS**. Andere **AAPS**-Nutzende (oder deren betreuende Person) richten ein spezielles **AAPS**-E-Mail-Konto ein. Das ist optional. Wie man das machen kann, beschreiben wir unten beispielhaft.

If you don't want to set up an **AAPS**-dedicated Gmail account, you can just go straight to the next section, [building AAPS](../SettingUpAaps/BuildingAaps.md).

```{admonition} Advantages of a dedicated Google account for AAPS
:class: dropdown

- Dedicated Google drive space means you will not risk filling up your personal Google drive limit with **Export Preferences**.
- Each version of **AAPS** (and supporting apps like xdrip+, BYODA, etc) will be stored in one single place which is independent of your computer hardware. If your PC or phone is stolen/lost/broken you will still have access.
- By harmonizing the setup, it will make online support simpler across users with similar folder structure.
- Depending on the setup (see below), you will have a separate identity as an alias to communicate within the community which can protect your privacy. 
- Children with T1D can preserve their own “everyday” email account as minors while using **AAPS** and associated features which require an adult account.
- Gmail allows you to register up to 4 accounts under the same phone number.
```

## Wie Du ein dediziertes Google-Konto für AAPS einrichtest

(⌛Ungefähr 10 Minuten)

![](../images/Building-the-App/building_0001.png)

Voraussetzungen:

- Du hast einen Windows-PC (Windows 10 oder neuer) und ein Android-Smartphone (Android 9 oder neuer), auf dem die **AAPS**-App installiert wird. Beide Geräte haben die neuesten Sicherheitsupdates, Internetzugang und Administrator-Rechte, da einige Schritte das Herunterladen und die Installation von Programmen erfordern.
- Das Android-Smartphone ist bereits mit Deiner persönlichen „Alltags“-E-Mail-Adresse [Standard-E-Mail-Adresse], wie z. B. einem Gmail-Konto, eingerichtet.

```{admonition} Things to consider when setting up your new account
:class: dropdown
- You could use a name different to your own, which has relevance to the account (like t1dsuperstar) for privacy reasons. You can then use it in **AAPS** public forums while keeping your own identity private. Since Google requires a recovery email and phone number, it is still traceable.
- The new **AAPS** account will use the same phone number for verification as your “_everyday_” one. It will use the “everyday” email address for verification;
- We will setup email forwarding such that any email sent to the new dedicated AAPS account will be forwarded to the primary one (so there is no need to check two different mailboxes);
- Use separate passwords for your _everyday_ Gmail account and the AAPS-dedicated Gmail account
- If you use google “2-step verification” (aka multifactor) authentication for one Gmail account, you might as well do it for both Gmail accounts.
- If you plan to use Google “Passkeys”, make sure you register multiple devices. This is so you don’t lock yourself out. Only do it on devices that nobody else can access (_i.e._ not on a PC with a shared account that other people can unlock).
```



```{admonition} Video Walkthrough! 
:class: Note
Klicke [hier](<https://drive.google.com/file/d/1dMZTIolO-kd2eB0soP7boEVtHeCDEQBF/view?usp=drive_link>), um einen Video Walkthrough zum Setup eines dedizierten Google-Kontos zu starten.
```

Im Video werden drei Schritte beschrieben:

In diesem Beispiel: 

- Dein bestehendes „_Standard_“-Google-Konto ist <donald.muck42@gmail.com> ; ![](../images/Building-the-App/building_0002.png)
- Dein neues “_AAPS_”-Gmail-Konto wird <donald.muck42.aaps@gmail.com>; ![](../images/Building-the-App/building_0003.png) sein

#### Gehe zu <https://account.google.com> 

Wenn Du bereits bei Google angemeldet bist, wirst Du direkt auf Deine „Standard“-**Mein Konto**-Seite weitergeleitet.
(1) Klicke oben rechts auf der Seite auf Dein Profilbild (in diesem Fall ein simples ![](../images/Building-the-App/building_0002.png)
(2) Wähle “_Konto hinzufügen_”.

![](../images/Building-the-App/building_0005.png)

#### Gib die Details zu Deinem NEUEN dedizierten Konto ein: 

- Gib das neue Konto ein 
- Konto erstellen
- Für meine private Nutzung. 

#### Gib Deine persönlichen Daten ein:

- Vorname eingeben
- Nachname
- Geburtsdatum (muss volljährig sein)

#### Wähle Deine NEUE E-Mail-Adresse & Passwort

Dieses Beispiel fügt „.AAPS“ zu Donald Mucks vorhandener hinzu…\
Lege Dein Passwort fest

####  Gib eine Telefonnummer ein, mit der Du SMS-Verifizierungen empfangen kannst

Gmail sendet Dir jetzt einen eindeutigen Code, der zur Validierung eingegeben werden kann.

#### Gib die Wiederherstellungs-E-Mail-Adresse ein 

In diesem Fall ist es Deine bestehende “_Standard_”-E-Maill…

#### Einrichtung Deines Kontos abschließen

Gmail wird den Kontonamen anzeigen. Du wirst gebeten, die Gmail-AGBs zu akzeptieren und Deine Personalisierungseinstellungen zu bestätigen.

#### Passe die Anzeige des neuen Profils an

An diesem Punkt solltest Du auf Gmails Mein-Konto-Seite, auf der Dein neues (dem **AAPS** gedachten) E-Mail-Konto angezeigt wird, sein. Das Profilbild wird standardmäßig auf den ersten Buchstaben Deines Namens gesetzt. Ändere es in etwas Eindeutiges, um Verwechslungen zu vermeiden… in diesem Beispiel hat Donald.Muck.AAPS ![](../images/Building-the-App/building_0002.png) ![](../images/Building-the-App/building_0003.png) ersetzt

![](../images/Building-the-App/building_0007.png)\
![](../images/Building-the-App/building_0008.png)

#### Öffne die Gmail-Website in beiden Fenstern, um das neue Konto zu konfigurieren

Um nicht ein weiteres E-Mail-Konto monitoren zu müssen, leite alle unter der neuen, mit **AAPS**-verbundenen E-Mail-Adresse, an Deine Standard-E-Mail-Konto weiter \
Dieser Teil kann etwas verwirrend sein, da Du hier zwischen den beiden Konten hin und her springen musst. Um es zu vereinfachen, öffne zwei separate Browserfenster übereinander:

1. Bewege Deinen bereits geöffneten Browser auf dem Bildschirm nach oben und passe die Größe so an, dass er ungefähr die Hälfte des oberen Bildschirmbereichs einnimmt… 
2. Klicke mit der rechten Maustaste auf das Browser-Logo in Deiner Taskleiste 
3. Wähle aus dem Menü “Neues Fenster” aus... und passe es so an, dass es nur die untere Hälfte des Bildschirms einnimmt.

Öffne in beiden Browserfenstern <https://gmail.com> . Stelle sicher, dass Dein persönliches Konto oben und das neue spezielle **AAPS**-Konto unten ist und durch das Profilbild in der rechten oberen Ecke leicht identifiziert werden kann. (falls erforderlich, kannst Du durch das Klicken auf das Profilbild und die Auswahl des richtigen Kontos zwischen Konten wechseln).

![](../images/Building-the-App/building_0009.png)

Deine Gmail- Übersicht sollte wie folgt aussehen:\
![](../images/Building-the-App/building_0010.png)

#### Öffne die Einstellungen des neuen Gmail-Kontos (unteres Fenster)… 

- Klicke auf das Zahnrad links vom Profilbild 
- Wähle dann „**Alle Einstellungen anzeigen**“

![](../images/Building-the-App/building_0011.png)

#### Weiterleitung einrichten…

- Klicke auf die Registerkarte „Weiterleitung und POP/IMAP-Einstellungen“
- Klicke auf „Weiterleitungsadresse hinzufügen“
- Gib Deine "Standard"-E-Mail-Adresse ein
- Gmail sendet einen Bestätigungscode an Deine „Standard“-E-Mail-Adresse. 
- Du wirst zu Deinem Standardprofil zurückkehren und dort auf den Link klicken, um die Weiterleitung zu bestätigen (oder den Code aus der Bestätigungs-E-Mail von Gmail in Deinem "Standard"-Gmail-Fenster zu erhalten und ihn in Dein "neues dediziertes AAPS"-Gmail-Fenster zu kopieren und einzufügen).

Es gibt ziemlich viel Hin und Her zwischen den Fenstern, aber dies stellt sicher, dass Du beim Prüfen Deiner Standard-Kontomails auch die E-Mails (wie z. B. Gmail-Benachrichtigungen) siehst, die von Deinem dedizierten AAPS-Konto weitergeleitet wurden.

![](../images/Building-the-App/building_0012.png)

#### Bestätige die E-Mail-Adresse für Weiterleitungen

- In der "Standard"-Gmail (oberes Fenster) erhältst Du die E-Mail "Gmail-Weiterleitungsbestätigung". 
- Öffne sie und "klicke auf den Link, um die Anfrage zu bestätigen"

#### Archiviere weitergeleitete E-Mails im neuen dedizierten Gmail-Konto (unteres Fenster)

<!---->

1. Aktualisiere das untere Fenster
2. Prüfe "E-Mails weiterleiten"
3. Und archiviere die Kopie der Gmail (um das neue dedizierte Postfach sauber zu halten)
4. Scrolle bis ganz nach unten, um die Änderungen zu speichern\
   ![](../images/Building-the-App/building_0013.png)

![](../images/Building-the-App/building_0014.png)

Glückwunsch! Du hast jetzt ein spezielles Google-Konto für AAPS erstellt. The next step is to [build the AAPS app](../SettingUpAaps/BuildingAaps.md).
