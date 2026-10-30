# Tidepool

Tidepool is a third party tool that collects data regarding BG, insulin and carbs (and the notes you add to your treatments) and can be used to analyze and share this data with your clinical team. Since AAPS version 3.2 it can be used as an alternative to Nightscout for satisfying part of Objective 1. Poate fi utilizat, de asemenea, în asociere cu Nightscout, ca o platformă alternativă de raportare care se integrează bine în contexte clinice. Aceasta poate fi opțiunea dorită pentru copiii care utilizează AAPS care doresc să aibă capacitățile de monitorizare și control la distanță ale Nightscout, dar care doresc o platformă de raportare cu care echipa lor clinică se simte mai confortabil.

It is important to understand that Tidepool is for reporting only. NU este o aplicație de urmărire în timp real. If you need to have followers apart from the main AAPS phone, you must set up Nightscout as well.

Note: the Tidepool organization has brought the iOS Loop product to market with FDA approval. Acest efort nu are nimic de-a face cu platforma lor de raportare a datelor sau cu AAPS.


## Step 1 - Set up a Tidepool account

- Navigate to [tidepool.org](https://www.tidepool.org/)

- Select “Personal Sign Up” or “Sign Up”

- Create and document an email and password

- Select “Personal Account” and click “Continue”

- Complete the patient information section and accept the terms of use

- Verify your email address via the instructions received to your email


## Step 2 - Connect AAPS to Tidepool

- Open the **menu** (☰) in the top-left corner of the main screen and select "**Configuration**"

- Open the "**Communication**" category and enable "**Tidepool**":

![Enable Tidepool](../images/v4/Tidepool/tidepool_enable.png)

- Tap "**Open plugin**" underneath Tidepool, then tap the **Login** icon (an arrow going into a door) in the top-right corner

- A browser window opens on the Tidepool login page. Log in with the email address and password you created in Step 1 above:

![Tidepool login page](../images/v4/Tidepool/tidepool_login.png)

- After a successful login the browser closes and the Tidepool screen shows the status "**Connected**"; the log below documents the data uploads. If the login fails, confirm your credentials are correct and that you have verified your email address with Tidepool.

![Tidepool connected](../images/v4/Tidepool/tidepool_status.png)

- In the "**Settings**" of the Tidepool plugin, open "**Connection settings**". By default "**Use Nightscout connection settings**" is on, so Tidepool uploads under the same conditions you set for Nightscout. Turn it off if you want separate conditions for Tidepool, for example to upload to Tidepool only on Wi-Fi and while charging, while Nightscout also uses mobile data.

![Connection settings with Use Nightscout connection settings on](../images/v4/Tidepool/tidepool_connection_settings.png) ![Separate connection settings for Tidepool](../images/v4/Tidepool/tidepool_connection_settings_separate.png)

Pentru mai multă asistență despre cum să folosiți datele dumneavoastră odată ce sunt încărcate în Tidepool vă rugăm să vizitați: [https://www.tidepool.org/viewing-your-data](https://www.tidepool.org/viewing-your-data)

(tidepool-menu)=
## The Tidepool buttons

In the top-right corner of the Tidepool screen:

- The **Login** or **Logout** icon — connect to or disconnect from your Tidepool account. Only one of them is shown: **Login** while you are logged out, **Logout** while you are logged in. **AAPS** asks you to confirm before it logs you out.
- The gear icon — the Tidepool settings.

The buttons at the bottom of the Tidepool screen:

- "**Upload now**" — upload new data straight away instead of waiting for the next automatic upload.
- "**Full synchronization**" — upload all data stored in **AAPS** again.
- "**Purge all data**" — delete **all** data that **AAPS** has uploaded to your Tidepool account. This cannot be undone. Use it only to remove wrong or duplicate data, then run "**Full synchronization**" to upload your data again.
- "**Clear log**" — empty the log shown on the Tidepool screen.

![The Tidepool screen and its buttons](../images/v4/Tidepool/tidepool_menu.png)

In Tidepool, the data uploaded by **AAPS** 4 is shown under the device name **AAPS**. See [What changed in AAPS v4](#v4changes-tidepool) if you used Tidepool with an older version. 
