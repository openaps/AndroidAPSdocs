(bluetoothtroubleshooting-bluetooth-related-issues)=

# Problémy související s Bluetooth

Někteří uživatelé narazili na problémy s Bluetooth: selhání aktivace Omnipod DASH, potíže s připojením Medtrum Nano a další chyby podů. Mnoho z těchto problémů má příčinu v jedné z následujících situací.

Některé z těchto problémů se pravděpodobně týkají i jiných inzulínových pump s Bluetooth. Medtrum Nano má známé problémy s oprávněním „Zařízení v okolí“, stejně jako Omnipod DASH.

---

(bluetoothtroubleshooting-cannot-start-omnipod-with-android-16)=

## Omnipod nelze spustit s Androidem 16
- Android 16 needs at a minimum **AAPS** version 3.3.2.1 for the Omnipod DASH to work correctly, as this version has fixes added to specifically address known problems introduced in Android 16 for Omnipod.

---

(bluetoothtroubleshooting-bluetooth-battery-optimisation)=

## Optimalizace baterie pro Bluetooth

Newer versions of Android have enabled Battery optimisation for the system Bluetooth app. O tomto nastavení je známo, že způsobuje některé problémy u pump a CGM s Bluetooth.

If you followed the [Setup Wizard](../SettingUpAaps/SetupWizard.md) and followed the configuration settings in the [Bluetooth Battery Optimisation](#setup-wizard-bluetooth-battery-optimisation) section then this setting should be correct, however if you followed an older version of this guide it's possible you have not changed this setting.

Verify this is correctly configured if you have pump and CGM disconnections.

---

(bluetoothtroubleshooting-apps-using-nearby-device-permission)=

## Aplikace, které používají oprávnění Androidu „Zařízení v okolí“, mohou způsobit výpadky spojení a problémy s aktivací Podu

Android vám pomocí oprávnění umožňuje určit, co může každá aplikace v telefonu dělat nebo k čemu má přístup. U každé nainstalované aplikace můžete povolit nebo zakázat konkrétní oprávnění, např. přístup k souborům v zařízení, přístup k Bluetooth, vyhledávání zařízení v okolí apod.

**AAPS** requires a number of specific permissions to function, one which is required to ensure that Pods work is the "Nearby devices" permission. Toto oprávnění vyžaduje i mnoho jiných aplikací. Komunita zjišťuje, že řada aplikací, když toto oprávnění dostane, může na některých zařízeních způsobit problémy s aktivací nových Podů.

(bluetoothtroubleshooting-apps-using-nearby-device-permission-known-apps)=

### Aplikace, které používají oprávnění „Zařízení v okolí“ a o kterých je známo, že způsobily problémy:

O aplikacích v tomto seznamu se v komunitě na jednom nebo více místech mluvilo jako o příčině problémů se zařízeními Omnipod DASH a v některých případech i s Medtrum Nano.

```{admonition} Updating the list
:class: note
Pokud chcete navrhnout další aplikace do tohoto seznamu, napište @XiTatiON na kanálu #omnipod-dash na Discordu.
```

- **myBMW** Aplikace MyBMW rušila Medtrum Nano a Omnipod DASH. Aplikace MyBMW žádá o oprávnění „najít zařízení v okolí“ jen jednou. Pokud ho neudělíte, funguje i tak naprosto v pořádku.

- **Amazon Alexa**  Removing "Nearby devices" for Alexa app resolved problem for some people but will break the ability to pair Matter IoT devices

- **MINI app**  Appears the app is based on myBMW app and might mirror its behavior as a result

- **BM2** Solar Battery Monitoring app, used in some camper van and camping solar setups: when the app was running, it prevented activation of a new Pod. Force Stopping the app while activating a new pod is a workaround to the issue. Spuštění aplikace potom už funkci Dash zřejmě nerušilo (na Pixelu 8 Pro s Androidem 16).

(bluetoothtroubleshooting-revoke-nearby-device-permission)=

### Jak odebrat oprávnění „Zařízení v okolí“ ostatním aplikacím:
If you are facing issues activating a new Pod and you are running on the correct supported version of **AAPS** for your version of Android, it may be necessary to revoke the permission for other apps while activating a new Pod.

Follow this procedure to revoke the "Nearby device" permission for all apps except **AAPS**:

```{admonition} Menus and settings
:class: note
Snímky obrazovky a pokyny v tomto návodu pocházejí z čistého Androidu 16 (Vanilla) na telefonu Google Pixel 8 Pro. Other manufacturers and devices will likely not exactly match these menus and settings descriptions, adjust the steps to suit the device you have and if you are stuck see [Where to get help for dash](#omnipod-dash-where-to-get-help-for-dash) section on how to reach out to the community for support.
```

1. V telefonu otevřete nastavení Androidu, posuňte se dolů a klepněte na **Zabezpečení a ochrana soukromí (1)**.

    ![android_settings_sec_priv](../images/android_16/android_settings_sec_priv.png)

2. Posuňte se dolů a klepněte na **Ovládací prvky ochrany soukromí (1)**.

   ![android_sec_priv](../images/android_16/android_sec_priv.png)

3. Klepněte na **Správce oprávnění (1)**.

   ![android_priv_control](../images/android_16/android_priv_control.png)

3. Posuňte se dolů a klepněte na **Zařízení v okolí (1)**.

   ![android_perm_man_nearby_dev](../images/android_16/android_perm_man_nearby_dev.png)

4. Projděte seznam aplikací a klepněte na aplikaci, které chcete oprávnění **Zařízení v okolí** odebrat.

   V tomto návodu odebereme oprávnění aplikaci **Android Auto (1)**.

   Abyste nezničili další pody, doporučujeme na začátku odebrat oprávnění všem aplikacím kromě **AAPS**.

```{admonition} Which app to select?
:class: tip
Pokud si nejste jistí, která aplikace problém způsobuje, zakažte oprávnění všem (podívejte se také na seznam známých problémových aplikací a začněte jimi). Pokud si můžete dovolit přijít o několik podů, povolte oprávnění vždy jedné další aplikaci před každou novou aktivací Podu, dokud nezjistíte, která aplikace problémy s Podem způsobuje. Pokud najdete nové problémové aplikace, dejte nám prosím vědět na kanálu #omnipod-dash na Discordu.
```

   ![android_nearby_dev](../images/android_16/android_nearby_dev.png)

5. Oprávnění odeberete klepnutím na **Nepovolovat (1)** a potom na **Přesto nepovolit (2)**. Pokud jste vše udělali správně, uvidíte jako vybranou možnost **Nepovolovat (3)**. Nyní se můžete vrátit do nabídky **Zařízení v okolí** klepnutím na **šipku Zpět (4)** a v případě potřeby změnit toto nastavení u dalších aplikací.

   ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dev.png) ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow_anyway.png)  ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow.png)

(bluetoothtroubleshooting-re-enable-nearby-device-permission)=

### Jak znovu povolit oprávnění „Zařízení v okolí“ systémovým a ostatním aplikacím:

1. If required Reference the **"How to revoke 'Nearby device' permissions for other apps"** section on how to get to the app privacy settings, then once in the **Nearby device** configuration proceed to 2.

2. Projděte seznam aplikací a klepněte na aplikaci, které chcete oprávnění **Zařízení v okolí** povolit.

   V tomto návodu povolíme oprávnění aplikaci **Android Auto (1)**.

   Všimnete si, že po odebrání oprávnění aplikace **Android Auto (1)** v seznamu aplikací chybí. Je to proto, že **Android Auto** je **systémová aplikace** a systémové aplikace jsou ve výchozím stavu skryté.

   ![android_auto_nearby_dev_missing](../images/android_16/android_auto_nearby_dev_missing.png)

3. Skryté systémové aplikace zobrazíte klepnutím na **nabídku se třemi tečkami (⋮) (1)** v pravém horním rohu a potom na **„Zobrazit systémové“ (2)**. Nyní byste měli v seznamu vidět skrytou systémovou aplikaci **Android Auto (3)**.

```{admonition} Find your app
:class: tip
Pokud bylo aplikaci oprávnění odebráno, musíte se posunout dolů, dokud neuvidíte seznam aplikací bez oprávnění níže v seznamu.
```

   ![android_auto_nearby_dev_missing_hamburger](../images/android_16/android_auto_nearby_dev_missing_hamburger.png) ![android_auto_nearby_show_system](../images/android_16/android_auto_nearby_show_system.png) ![android_nearby_dev_system](../images/android_16/android_nearby_dev_system.png)

5. Follow the guidance in **"How to revoke 'Nearby device' permissions for other apps"** in reverse to re-enable permissions for each app.

---

(bluetoothtroubleshooting-android-15-bluetooth-connection-problems)=

## Android 15: časté problémy s připojením Bluetooth

Po aktualizaci Androidu nebo přechodu na novější telefon **AAPS** často ztrácí spojení Bluetooth s pumpou. Po restartu telefonu problém na čas zmizí. Pokud používáte **Omnipod DASH** a váš telefon má Android 15, může zapnutí nastavení **Bluetooth párování** pomoci zlepšit stabilitu spojení Bluetooth. Jak ho zapnout:

```{admonition} Android 16
:class: warning
**Bluetooth párování** zapínejte jen na Androidu 15 a jen tehdy, když máte problémy se spojením. Na Androidu 16 párování (bonding) NEZAPÍNEJTE.
```

1. Otevřete [nastavení Dash](#omnipod-dash-settings): otevřete obrazovku pumpy DASH přes **Spravovat** > **Pumpa** a klepněte na ikonu **Nastavení** (ozubené kolo) v pravém horním rohu.

   ![Obrazovka pumpy DASH](../images/v4/Pumps/dash_pump_screen.png)

2. Otevřete část **Rozšířená nastavení** a zapněte **Bluetooth párování**.

   ![Bluetooth párování v části Rozšířená nastavení](../images/v4/Pumps/dash_settings_advanced.png)

3. Pokud telefon zobrazí žádost o spárování, přijměte ji.

4. Restartujte telefon.
