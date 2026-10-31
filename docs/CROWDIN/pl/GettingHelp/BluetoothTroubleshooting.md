(bluetoothtroubleshooting-bluetooth-related-issues)=

# Rozwiązywanie problemów z Bluetooth

Niektórzy użytkownicy mają problemy z nieudaną aktywacją Omnipod DASH, z połączeniem z Medtrum Nano oraz inne błędy podów związane z Bluetooth. Wiele z tych problemów ma jedną z przyczyn opisanych poniżej.

Część z tych problemów dotyczy prawdopodobnie także innych pomp insulinowych z Bluetooth. Medtrum Nano, tak jak Omnipod DASH, ma znane problemy z uprawnieniem „Urządzenia w pobliżu”.

---

(bluetoothtroubleshooting-cannot-start-omnipod-with-android-16)=

## Nie można uruchomić Omnipod na Androidzie 16
- Omnipod DASH na Androidzie 16 działa poprawnie dopiero od wersji **AAPS** 3.3.2.1, bo ta wersja zawiera poprawki znanych problemów, które Android 16 wprowadził dla Omnipod.

---

(bluetoothtroubleshooting-bluetooth-battery-optimisation)=

## Optymalizacja baterii dla Bluetooth

Newer versions of Android have enabled Battery optimisation for the system Bluetooth app. Wiadomo, że powoduje to problemy z pompami i systemami CGM na Bluetooth.

If you followed the [Setup Wizard](../SettingUpAaps/SetupWizard.md) and followed the configuration settings in the [Bluetooth Battery Optimisation](#setup-wizard-bluetooth-battery-optimisation) section then this setting should be correct, however if you followed an older version of this guide it's possible you have not changed this setting.

Verify this is correctly configured if you have pump and CGM disconnections.

---

(bluetoothtroubleshooting-apps-using-nearby-device-permission)=

## Aplikacje z uprawnieniem Androida „Urządzenia w pobliżu” mogą powodować utratę połączenia i problemy z aktywacją poda

Android pozwala Ci kontrolować, co każda aplikacja może robić lub do czego ma dostęp w telefonie. Służą do tego uprawnienia. Dla każdej zainstalowanej aplikacji możesz zezwolić na konkretne uprawnienia albo ich odmówić, np. dostęp do plików na urządzeniu, dostęp do Bluetooth, wyszukiwanie urządzeń w pobliżu itd.

**AAPS** requires a number of specific permissions to function, one which is required to ensure that Pods work is the "Nearby devices" permission. Wiele innych aplikacji też potrzebuje tego uprawnienia. Społeczność zauważyła, że niektóre aplikacje z tym uprawnieniem mogą na niektórych urządzeniach powodować problemy z aktywacją nowych podów.

(bluetoothtroubleshooting-apps-using-nearby-device-permission-known-apps)=

### Aplikacje z uprawnieniem „Urządzenia w pobliżu”, o których wiadomo, że powodowały problemy:

Aplikacje z tej listy były w społeczności wskazywane w jednym lub kilku miejscach jako przyczyna problemów z Omnipod DASH, a czasem także z Medtrum Nano.

```{admonition} Updating the list
:class: note
Napisz do @XiTatiON na kanale Discord #omnipod-dash, aby omówić aplikacje, które warto dodać do tej listy.
```

- **myBMW** Aplikacja MyBMW zakłócała pracę Medtrum Nano i Omnipod DASH. Aplikacja MyBMW pyta o uprawnienie „znajdowanie urządzeń w pobliżu” tylko raz. Jeśli go nie przyznasz, nadal działa zupełnie dobrze.

- **Amazon Alexa**  Usunięcie uprawnienia „Urządzenia w pobliżu” dla aplikacji Alexa rozwiązało problem u części osób, ale wyłącza możliwość parowania urządzeń IoT Matter.

- **MINI app**  Appears the app is based on myBMW app and might mirror its behavior as a result

- **BM2** Aplikacja do monitorowania akumulatora solarnego, używana w niektórych kamperach i zestawach solarnych na kemping. Gdy aplikacja działała, nie dało się aktywować nowego poda. Obejściem problemu jest wymuszenie zatrzymania aplikacji na czas aktywacji nowego poda. Późniejsze uruchomienie aplikacji nie zakłócało pracy Dash (na Pixel 8 Pro z Androidem 16).

(bluetoothtroubleshooting-revoke-nearby-device-permission)=

### Jak odebrać uprawnienie „Urządzenia w pobliżu” innym aplikacjom:
If you are facing issues activating a new Pod and you are running on the correct supported version of **AAPS** for your version of Android, it may be necessary to revoke the permission for other apps while activating a new Pod.

Follow this procedure to revoke the "Nearby device" permission for all apps except **AAPS**:

```{admonition} Menus and settings
:class: note
Zrzuty ekranu i instrukcje w tym przewodniku pochodzą z czystego Androida 16 (Vanilla) na Google Pixel 8 Pro. U innych producentów i na innych urządzeniach menu i opisy ustawień prawdopodobnie nie będą dokładnie takie same. Dostosuj kroki do swojego urządzenia. Jeśli utkniesz, zajrzyj do sekcji [Gdzie uzyskać pomoc dla Dash](#omnipod-dash-where-to-get-help-for-dash), aby dowiedzieć się, jak poprosić społeczność o pomoc.
```

1. Otwórz ustawienia Androida w telefonie, przewiń w dół i naciśnij **Bezpieczeństwo i prywatność (1)** (Security and privacy).

    ![android_settings_sec_priv](../images/android_16/android_settings_sec_priv.png)

2. Przewiń w dół i naciśnij **Ustawienia prywatności (1)** (Privacy controls).

   ![android_sec_priv](../images/android_16/android_sec_priv.png)

3. Naciśnij **Menedżer uprawnień (1)** (Permission manager).

   ![android_priv_control](../images/android_16/android_priv_control.png)

3. Przewiń w dół i naciśnij **Urządzenia w pobliżu (1)** (Nearby devices).

   ![android_perm_man_nearby_dev](../images/android_16/android_perm_man_nearby_dev.png)

4. Przejrzyj listę aplikacji i naciśnij aplikację, której chcesz odebrać uprawnienie **Urządzenia w pobliżu**.

   W tym przewodniku odbieramy uprawnienie aplikacji **Android Auto (1)**.

   Aby nie zniszczyć kolejnych podów, radzimy wszystkim na początek odebrać to uprawnienie wszystkim aplikacjom oprócz **AAPS**.

```{admonition} Which app to select?
:class: tip
Jeśli nie wiesz, która aplikacja powoduje problem, wyłącz uprawnienie wszystkim (sprawdź też listę znanych problematycznych aplikacji i zacznij od nich). Jeśli możesz poświęcić kilka zniszczonych podów, przed każdą aktywacją nowego poda włączaj uprawnienie jednej kolejnej aplikacji, aż ustalisz, która dokładnie aplikacja powoduje problemy z podem. Jeśli znajdziesz nowe problematyczne aplikacje, daj nam znać na kanale Discord #omnipod-dash.
```

   ![android_nearby_dev](../images/android_16/android_nearby_dev.png)

5. Aby odebrać uprawnienie, naciśnij **Nie zezwalaj (1)** (Don't allow), a potem **Nie zezwalaj mimo to (2)** (Don't allow anyway). Jeśli wszystko zrobisz poprawnie, zobaczysz zaznaczoną opcję **Nie zezwalaj (3)**. Teraz możesz wrócić do menu **Urządzenia w pobliżu**, naciskając **strzałkę wstecz (4)**, i w razie potrzeby zmienić to ustawienie dla innych aplikacji.

   ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dev.png) ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow_anyway.png)  ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow.png)

(bluetoothtroubleshooting-re-enable-nearby-device-permission)=

### Jak ponownie włączyć uprawnienie „Urządzenia w pobliżu” dla aplikacji systemowych i innych aplikacji:

1. W razie potrzeby zajrzyj do sekcji **„Jak odebrać uprawnienie „Urządzenia w pobliżu” innym aplikacjom”**, aby dowiedzieć się, jak dojść do ustawień prywatności aplikacji. Gdy będziesz w ustawieniach **Urządzenia w pobliżu**, przejdź do kroku 2.

2. Przejrzyj listę aplikacji i naciśnij aplikację, której chcesz przyznać uprawnienie **Urządzenia w pobliżu**.

   W tym przewodniku przyznajemy uprawnienie aplikacji **Android Auto (1)**.

   Zauważysz, że po odebraniu uprawnienia aplikacji **Android Auto (1)** nie ma na liście. Dzieje się tak, bo **Android Auto** jest **aplikacją systemową**, a aplikacje systemowe są domyślnie ukryte.

   ![android_auto_nearby_dev_missing](../images/android_16/android_auto_nearby_dev_missing.png)

3. Aby pokazać ukryte aplikacje systemowe, naciśnij **menu z trzema kropkami (⋮) (1)** w prawym górnym rogu, a potem **„Pokaż systemowe” (2)** (Show system). Teraz na liście powinna być widoczna ukryta aplikacja systemowa **Android Auto (3)**.

```{admonition} Find your app
:class: tip
Jeśli aplikacja ma odebrane uprawnienie, przewiń w dół, aż zobaczysz listę aplikacji bez uprawnienia niżej na liście.
```

   ![android_auto_nearby_dev_missing_hamburger](../images/android_16/android_auto_nearby_dev_missing_hamburger.png) ![android_auto_nearby_show_system](../images/android_16/android_auto_nearby_show_system.png) ![android_nearby_dev_system](../images/android_16/android_nearby_dev_system.png)

5. Aby ponownie przyznać uprawnienia każdej aplikacji, wykonaj kroki z sekcji **„Jak odebrać uprawnienie „Urządzenia w pobliżu” innym aplikacjom”** w odwrotnej kolejności.

---

(bluetoothtroubleshooting-android-15-bluetooth-connection-problems)=

## Android 15: częste problemy z połączeniem Bluetooth

Po aktualizacji Androida lub przejściu na nowszy telefon **AAPS** często traci połączenie Bluetooth z pompą. Problem na chwilę znika po ponownym uruchomieniu telefonu. Jeśli używasz **Omnipod DASH**, a Twój telefon ma Androida 15, włączenie ustawienia **Parowanie Bluetooth** może poprawić stabilność połączenia Bluetooth. Aby je włączyć:

```{admonition} Android 16
:class: warning
Włączaj **Parowanie Bluetooth** tylko na Androidzie 15 i tylko wtedy, gdy masz problemy z połączeniem. NIE włączaj parowania (bonding) na Androidzie 16.
```

1. Otwórz [ustawienia Dash](#omnipod-dash-settings): otwórz ekran pompy DASH przez **Zarządzaj** > **Pompa** i naciśnij ikonę **Ustawienia** (koło zębate) w prawym górnym rogu.

   ![Ekran pompy DASH](../images/v4/Pumps/dash_pump_screen.png)

2. Otwórz sekcję **Ustawienia zaawansowane** i włącz **Parowanie Bluetooth**.

   ![Parowanie Bluetooth w sekcji Ustawienia zaawansowane](../images/v4/Pumps/dash_settings_advanced.png)

3. Jeśli telefon pokaże prośbę o sparowanie, zaakceptuj ją.

4. Uruchom ponownie telefon.
