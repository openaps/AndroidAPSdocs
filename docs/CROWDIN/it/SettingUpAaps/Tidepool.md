# Tidepool

Tidepool is a third party tool that collects data regarding BG, insulin and carbs (and the notes you add to your treatments) and can be used to analyze and share this data with your clinical team. Since AAPS version 3.2 it can be used as an alternative to Nightscout for satisfying part of Objective 1. Può anche essere usato insieme a Nightscout come piattaforma di report alternativa, che si integra bene con l'ambiente clinico. Può essere l'opzione giusta per i bambini che usano AAPS e vogliono le funzioni di monitoraggio e controllo remoto di Nightscout, ma con una piattaforma di report che il loro team medico conosce meglio.

È importante capire che Tidepool serve solo per i report. NON è un'app per seguire i dati in tempo reale. Se hai bisogno di follower oltre al telefono principale con AAPS, devi configurare anche Nightscout.

Note: the Tidepool organization has brought the iOS Loop product to market with FDA approval. Questo lavoro non ha nulla a che fare con la loro piattaforma di report o con AAPS.


## Step 1 - Set up a Tidepool account

- Vai su [tidepool.org](https://www.tidepool.org/)

- Select “Personal Sign Up” or “Sign Up”

- Create and document an email and password

- Select “Personal Account” and click “Continue”

- Complete the patient information section and accept the terms of use

- Verify your email address via the instructions received to your email


## Step 2 - Connect AAPS to Tidepool

- Apri il **menu** (☰) in alto a sinistra nella schermata principale e seleziona "**Configurazione**"

- Open the "**Communication**" category and enable "**Tidepool**":

![Enable Tidepool](../images/v4/Tidepool/tidepool_enable.png)

- Tocca "**Apri plugin**" sotto Tidepool, poi tocca l'icona **Login** (una freccia che entra in una porta) in alto a destra

- A browser window opens on the Tidepool login page. Log in with the email address and password you created in Step 1 above:

![Tidepool login page](../images/v4/Tidepool/tidepool_login.png)

- After a successful login the browser closes and the Tidepool screen shows the status "**Connected**"; the log below documents the data uploads. If the login fails, confirm your credentials are correct and that you have verified your email address with Tidepool.

![Tidepool connesso](../images/v4/Tidepool/tidepool_status.png)

- In the "**Settings**" of the Tidepool plugin, open "**Connection settings**". By default "**Use Nightscout connection settings**" is on, so Tidepool uploads under the same conditions you set for Nightscout. Disattivalo se vuoi condizioni separate per Tidepool, per esempio per caricare su Tidepool solo con il Wi-Fi e durante la ricarica, mentre Nightscout usa anche i dati mobili.

![Connection settings with Use Nightscout connection settings on](../images/v4/Tidepool/tidepool_connection_settings.png) ![Impostazioni connessione separate per Tidepool](../images/v4/Tidepool/tidepool_connection_settings_separate.png)

For more assistance on how to use your data once it is uploaded to Tidepool please visit: [https://www.tidepool.org/viewing-your-data](https://www.tidepool.org/viewing-your-data)

(tidepool-menu)=
## I pulsanti di Tidepool

In the top-right corner of the Tidepool screen:

- The **Login** or **Logout** icon — connect to or disconnect from your Tidepool account. Only one of them is shown: **Login** while you are logged out, **Logout** while you are logged in. **AAPS** asks you to confirm before it logs you out.
- The gear icon — the Tidepool settings.

The buttons at the bottom of the Tidepool screen:

- "**Upload now**" — upload new data straight away instead of waiting for the next automatic upload.
- "**Full synchronization**" — upload all data stored in **AAPS** again.
- "**Purge all data**" — delete **all** data that **AAPS** has uploaded to your Tidepool account. This cannot be undone. Use it only to remove wrong or duplicate data, then run "**Full synchronization**" to upload your data again.
- "**Clear log**" — empty the log shown on the Tidepool screen.

![The Tidepool screen and its buttons](../images/v4/Tidepool/tidepool_menu.png)

In Tidepool, the data uploaded by **AAPS** 4 is shown under the device name **AAPS**. Se usavi Tidepool con una versione precedente, vedi [Cosa è cambiato in AAPS v4](#v4changes-tidepool). 
