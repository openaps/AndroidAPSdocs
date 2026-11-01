# Tworzenie i przywracanie kopii zapasowych

Gdy zainstalujesz AAPS w telefonie, staje się on „urządzeniem medycznym”, na którym polegasz każdego dnia. Zdecydowanie zalecamy mieć awaryjny plan na wypadek, gdy telefon się zepsuje, zostanie skradziony lub zgubiony. Therefore, it is essential to prepare by asking yourself: "What if?"

Aby przywrócić konfigurację AAPS na obecnym lub nowym telefonie, ważne jest przechowywanie poniższych rzeczy w bezpiecznym miejscu (czyli nie w telefonie). Najlepiej mieć co najmniej dwie osobne kopie zapasowe: na lokalnym dysku, pendrivie i (najlepiej) w chmurze, np. Google Drive lub Microsoft 365 OneDrive. Gdy przechowujesz kopie zapasowe w chmurze, zawsze masz z telefonu dostęp do wszystkiego, czego potrzebujesz, by przywrócić konfigurację w dowolnym miejscu i czasie.

Rozważ zakup zapasowego telefonu i przećwicz na nim przywracanie AAPS, aby mieć pewność, że działa tak, jak trzeba. Ten krok da Ci pewność, że Twój plan awaryjny działa i że możesz bez przerwy dalej używać AAPS, jeśli Twój główny telefon stanie się niedostępny.

```{admonition} Android backups and phone-transfer tools do not carry your AAPS settings
:class: warning
Since **AAPS** 4.0 the settings are kept in an encrypted store on the phone, and they are left out of the Google backup and of the phone-to-phone transfer of a new phone. A settings export, as described on this page, is the only way to carry them over.
```

Aby móc przywrócić AAPS, ważne jest, by mieć pod ręką:

- **Plik magazynu kluczy (keystore) z Android Studio** i jego **hasło**: potrzebne do (ponownego) budowania pliku instalacyjnego AAPS .APK.
- Aktualną kopię **pliku instalacyjnego AAPS .APK**
- Aktualny plik **eksportu ustawień**: do przywrócenia ważnych ustawień (także stanu Twoich zadań!).
- Twoje **hasło główne AAPS**
- Kopie zapasowe dodatkowych aplikacji: np. BYODA i/lub xDrip.
- Własne notatki o Twojej konfiguracji.

Poniżej znajdziesz rzeczy, których kopie zapasowe zalecamy przechowywać.

## Tworzenie kopii zapasowych

### Plik magazynu kluczy (keystore) z komputera, na którym zbudowano APK
Gdy budujesz plik instalacyjny .APK w Android Studio, używasz **pliku magazynu kluczy i hasła do podpisania pliku instalacyjnego .APK**. Aby zaktualizować obecną instalację AAPS, plik instalacyjny .APK z aktualizacją musi być podpisany tym samym magazynem kluczy, którego użyto przy pierwszej instalacji. Przy aktualizacji wszystkie ustawienia i baza danych AAPS zostają zachowane. Bez tego musisz najpierw odinstalować obecną aplikację, a potem [ponownie zainstalować](#reinstall-aaps) i skonfigurować AAPS od nowa.

Zachowanie magazynu kluczy i jego hasła bardzo ułatwi przyszłe aktualizacje APK, zwłaszcza gdy będziesz musiał zbudować aplikację na nowym komputerze. Szczegóły używania magazynu kluczy przy budowaniu nowego APK znajdziesz w sekcji [Aktualizacja AAPS](../Maintenance/UpdateToNewVersion.md).

**Kiedy zrobić kopię:** Kopię zapasową magazynu kluczy zrób po pierwszym zbudowaniu pliku instalacyjnego **AAPS** .APK.

**Jak zrobić kopię:** Znajdź ścieżkę do magazynu kluczy. Jeśli jej nie pamiętasz, znajdziesz ją w Android Studio, wybierając **Build > APK > Next**. Ścieżka będzie widoczna w polu „Key store path”. W menedżerze plików przejdź do tej ścieżki i zrób kopię pliku magazynu kluczy (z rozszerzeniem `.jks`). Zapisz go w bezpiecznym miejscu w chmurze, na wypadek gdyby Twój komputer przestał być dostępny. Zapisz też hasło magazynu kluczy (key store password), alias klucza (key alias) i hasło klucza (key password).

### Kopie najnowszego APK
Jeśli Twój główny telefon z **AAPS** zostanie zgubiony lub uszkodzony, kopia APK pozwoli Ci szybko wrócić do używania **AAPS** na nowym telefonie. Uwaga: potrzebujesz też kopii zapasowej ustawień, jak opisano poniżej.

**Kiedy zrobić kopię:** Przechowuj kopię zapasową najnowszego APK, który zainstalowałeś na głównym telefonie z **AAPS**. Możesz też zachować jedną starszą wersję, na wypadek gdyby z jakiegoś powodu trzeba było do niej wrócić.

**Jak zrobić kopię:** Trzymaj kopię na komputerze, na którym budujesz APK w Android Studio. Dodatkowo zalecamy przechowywać kopię instalacyjnego APK w chmurze. Upewnij się, że w razie potrzeby wiesz, gdzie znaleźć obie kopie. Rozważ utworzenie osobnych folderów na te kopie zapasowe.

### Plik ustawień AAPS (nazywany też „Preferences”)

```{admonition} Where are preferences stored on my phone?
:class: tip
Swoje ustawienia znajdziesz w **katalogu AAPS** wybranym podczas [konfiguracji AAPS](#SetupWizard-StoragePermission).</br>
**Katalog AAPS** możesz też zmienić na ekranie **Konserwacja** (**menu** (☰) > **Konserwacja**), patrz [Ustawianie lokalnego katalogu AAPS](#preferences-maintenance-logdirectory).
```

Mając kopię pliku instalacyjnego APK (patrz wyżej) i plik **Ustawień**, możesz szybko zacząć działać na obecnym lub nowym telefonie.

Plik **Ustawień** służy do dopasowania aplikacji AAPS do Twojej konfiguracji. Obejmują one m.in. ustawienia **Konfiguracji**, stan zadań, ustawienia komunikacji z innymi usługami (np. Nightscout, Tidepool), automatyzacje i profile.

Eksport ustawień AAPS do pliku pozwala przywrócić konfigurację z określonego momentu. Jak wspomniano, oprócz wszystkich ustawień konfiguracji plik eksportu zawiera też stan Twoich zadań, który musisz przywrócić przy **(ponownej) instalacji** AAPS. Bez niego, aby włączyć zamkniętą pętlę, musisz przejść wszystkie zadania od początku. Pliki ustawień pozwalają też przywrócić „ostatnie dobre” ustawienia i cofnąć zmiany w konfiguracji.

**Kiedy robić kopię zapasową ustawień AAPS:**
* Po ukończeniu każdego zadania, aby nie stracić postępów. _Bez kopii **Ustawień** musisz ponownie ukończyć wszystkie zadania, jeśli trzeba będzie ponownie zainstalować AAPS lub wymienić telefon._

* Zawsze, gdy planujesz większe zmiany w konfiguracji (zmiana ustawień SMB, zmiana rodzaju insuliny, zmiana pompy, zmiany w automatyzacjach), zrób kopię zapasową **Ustawień** przed zmianami i po nich. Dzięki temu masz najnowsze ustawienia oraz kopię ustawień sprzed zmian, gdybyś musiał do nich wrócić.

* Tubeless pumps (Such as Omnipod and Medtrum) users only: the **Settings** file contains connection details on your current pod and can be used to restore connection to that pod with a new phone. Jeśli nie masz kopii ustawień wyeksportowanej po uruchomieniu obecnego poda, to przy wymianie telefonu musisz uruchomić nowy pod.

**Jak zrobić kopię ręcznie:**

1. If this is your first time importing or exporting **Settings** you will need to set a master password in [Settings > Protection](#Preferences-master-password). Ustaw hasło i zapisz je w bezpiecznym miejscu. _Bez tego hasła nie będziesz mieć dostępu do kopii zapasowych **Ustawień**._

2. Na ekranie głównym **AAPS** otwórz **menu** (☰) > **Konserwacja**. Wybierz, gdzie zapisać plik, elementami **Lokalnie** i **Chmura** obok **Eksport ustawień** (patrz **Eksport lub import ustawień** poniżej), a potem dotknij **Eksport ustawień**. **AAPS** pokazuje, gdzie trafi plik: nazwę pliku dla opcji **Lokalnie**, **Dysk Google** dla opcji **Chmura**. Dotknij **OK**.

   ![Eksport ustawień do pliku lokalnego](../images/Maintenance/export_settings_confirm_local.png)

   ![Eksport ustawień na Dysk Google](../images/Maintenance/export_settings_confirm_cloud.png)

   Wpisz ustawione wcześniej hasło główne i dotknij **OK**.

   ![Hasło główne do eksportu](../images/Maintenance/export_settings_password.png)

   Komunikat **Ustawienia wyeksportowane** (lokalnie) lub **Eksport do chmury pomyślny** (chmura) potwierdza eksport.

   ![Komunikat „Ustawienia wyeksportowane”](../images/Maintenance/export_settings_done_local.png)

   ![Komunikat „Eksport do chmury pomyślny”](../images/Maintenance/export_settings_done_cloud.png)

3. W menedżerze plików w telefonie (zwykle nazywa się „Pliki” albo „Moje pliki”) przejdź do Pamięć wewnętrzna > AAPS > preferences. Tutaj zobaczysz kopię wszystkich wyeksportowanych plików ustawień. Nazwa pliku powinna mieć postać `YYYY-MM-DD_Time_appname.json`. Prześlij ten plik do wybranej usługi w chmurze. Następnie pobierz z chmury także kopię na swój komputer.

(ExportImportSettings-Settings-Export)=

## Eksport ustawień

```{admonition} Where are preferences stored on my phone?
:class: tip
Swoje ustawienia znajdziesz w **katalogu AAPS** wybranym podczas [konfiguracji AAPS](#SetupWizard-StoragePermission).</br>
**Katalog AAPS** możesz też zmienić na ekranie **Konserwacja** (**menu** (☰) > **Konserwacja**), patrz [Ustawianie lokalnego katalogu AAPS](#preferences-maintenance-logdirectory).
```

Zalecamy regularny eksport ustawień, zwłaszcza przed zmianami w konfiguracji i po nich. Eksport możesz robić **ręcznie albo (lepiej) przez automatyzację**. Zapisz hasło główne AAPS i zrób kopię zapasową plików ustawień, kopiując je z telefonu np. do chmury.

**Uwaga**: _Wyeksportowane ustawienia są szyfrowane hasłem głównym AAPS: bez hasła głównego użytego przy eksporcie nie zaimportujesz pliku ustawień!_

### Eksport lub import ustawień
Aby wyeksportować lub zaimportować ustawienia, otwórz **menu** (☰) i wybierz **Konserwacja**. W sekcji **Zarządzanie plikami** elementy **Lokalnie** i **Chmura** obok **Eksport ustawień** i **Importuj ustawienia** określają, gdzie plik ustawień jest zapisywany lub skąd jest czytany: **Lokalnie** to katalog AAPS w Twoim telefonie, **Chmura** jest dostępna, gdy ustawisz [Katalog w chmurze](#preferences-maintenance-cloud). Dotknięcie elementu włącza go lub wyłącza; co najmniej jeden jest zawsze wybrany, a oba wiersze mają ten sam wybór. Następnie dotknij samego **Eksport ustawień** lub **Importuj ustawienia**, aby zacząć.

![Menu Konserwacja z wierszami Eksport ustawień i Importuj ustawienia](../images/Maintenance/maintenance_export_import.png)

(ExportImportSettings-Automating-Settings-Export)=
### Automatyczny eksport ustawień

To automate settings exports [(**see Automation**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) open [**Settings** > **Maintenance**](#preferences-maintenance-settings), expand **Unattended Settings Export** and switch on **Enable automated settings export**.

Możesz teraz ustawić [Automatyzację](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export), aby eksportowała ustawienia regularnie (_np._ co tydzień) albo po wymianie poda.

_**Note:** On importing settings, the user always needs to enter the AAPS master password!_

![Ustawienia > Konserwacja > Automatyczny Eksport Ustawień z przełącznikiem Włącz automatyczny eksport ustawień](../images/Maintenance/settings_unattended_export.png)

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## Przywracanie z kopii zapasowych na nowym telefonie lub po nowej instalacji AAPS

```{admonition} Where are preferences stored on my phone?
:class: tip
Swoje ustawienia znajdziesz w **katalogu AAPS** wybranym podczas [konfiguracji AAPS](#SetupWizard-StoragePermission).</br>
**Katalog AAPS** możesz też zmienić na ekranie **Konserwacja** (**menu** (☰) > **Konserwacja**), patrz [Ustawianie lokalnego katalogu AAPS](#preferences-maintenance-logdirectory).</br>
Jeśli **AAPS** straci dostęp do tego katalogu (może się to zdarzyć po ponownej instalacji lub po wyczyszczeniu pamięci aplikacji), pokaże powiadomienie **Utracono dostęp do katalogu AAPS** i przestanie zapisywać ustawienia w telefonie, dopóki [nie wybierzesz katalogu ponownie](#preferences-maintenance-logdirectory).
```

Użyj tych instrukcji, jeśli masz kopię zapasową APK i **Ustawień**, którą chcesz wczytać na nowy telefon, albo jeśli z jakiegoś powodu musiałeś usunąć i ponownie zainstalować APK na obecnym telefonie.

_Jeśli aktualizujesz **AAPS** plikiem APK zbudowanym z tym samym magazynem kluczy, nie musisz wykonywać tej procedury. Mimo to przed instalacją aktualizacji zalecamy zrobić kopię zapasową._

Jeśli aktualizujesz **AAPS** po utracie lub wymianie oryginalnego magazynu kluczy (np. budujesz na nowym komputerze bez przeniesienia magazynu kluczy), najpierw zrób kopię zapasową wszystkich ustawień, jak opisano wyżej, a potem odinstaluj obecną wersję **AAPS** z telefonu. Pełną procedurę znajdziesz w [Ponowna instalacja AAPS z nowym magazynem kluczy](#reinstall-aaps).

W razie potrzeby przed wykonaniem poniższych kroków [skonfiguruj odbiornik danych z CGM/glikemii](../Getting-Started/CompatiblesCgms.md)

(ExportImportSettings-tubeless-pumps)=
```{admonition} Tubeless pumps (Omnipod and Medtrum) users
:class: warning
Plik **Ustawień** zawiera sesję poda lub pompy typu patch, która była aktywna w chwili eksportu.
- **Eksportuj zaraz po każdej aktywacji poda lub pompy typu patch** i skopiuj plik poza telefon.
- **Ten sam telefon, pod nadal działa:** pozostaw **Także zastąp ustawienia pompy** niezaznaczone. Twój obecny pod zostaje zachowany, a importowane są tylko pozostałe ustawienia.
- **Nowy telefon przejmuje pod:** zaznacz **Także zastąp ustawienia pompy** i użyj tylko pliku wyeksportowanego w czasie noszenia obecnego poda. Plik z wcześniejszego poda zastąpi sesję Twojego obecnego poda i będziesz musiał uruchomić nowy pod.
- **Przez pomyłkę zaimportowano sesję starego poda:** **AAPS** wciąż próbuje połączyć się z tym podem i nie możesz aktywować nowego. Dezaktywuj go; jeśli to się nie uda, porzuć go (patrz np. [Porzucanie poda](#omnipod-dash-discard-pod) dla Omnipod DASH).
```

```{admonition} Pump settings are kept unless you say otherwise
:class: note
Domyślnie import nie zmienia ustawień pompy: pompa wybrana w **Konfiguracji**, jej parowanie i wszystkie inne jej ustawienia pozostają takie, jak na tym telefonie. Zaznacz **Także zastąp ustawienia pompy** na ekranie importu tylko wtedy, gdy przywracasz ustawienia na nowym telefonie, który ma przejąć tę samą pompę. Import nigdy nie usuwa ustawień, których nie ma w pliku.
```

1. Użyj kopii zapasowej APK (patrz wyżej) i postępuj według instrukcji dla [nowej instalacji](../SettingUpAaps/TransferringAndInstallingAaps.md)

2. Uruchom **AAPS** i zezwól na wszystkie wymagane uprawnienia

3. Wyjdź z kreatora konfiguracji. Zaimportujemy wszystkie potrzebne ustawienia z kopii zapasowej **Ustawień**

4. From the **AAPS** main screen press **Grant** and allow all permissions listed in the **Permissions Required** panel on the top

5. Na ekranie głównym **AAPS** ustaw hasło główne w [Ustawienia > Ochrona aplikacji](#Preferences-master-password) na to samo hasło, którego użyłeś przy kopiach zapasowych.

6. Jeśli jeszcze tego nie zrobiłeś, [ustaw **katalog AAPS**](#preferences-maintenance-logdirectory): na ekranie głównym **AAPS** otwórz **menu** (☰) > **Konserwacja** > **katalog AAPS**.

7. Na ekranie głównym **AAPS** otwórz **menu** (☰) > **Konserwacja** > **Eksport ustawień** > wpisz ustawione wcześniej hasło główne > **OK**. Jeśli w telefonie nie ma jeszcze folderu preferences, zostanie on utworzony.

8. Pobierz z chmury kopię zapasową pliku **ustawień**.

9. Jeśli **Katalog AAPS** ustawiono na `/internal storage/AAPS`, w menedżerze plików (zwykle nazywa się „Pliki” albo „Moje pliki”) przenieś plik z folderu pobranych plików do `/internal storage/AAPS/preferences`

10. Na ekranie głównym **AAPS** otwórz **menu** (☰) > **Konserwacja** i dotknij **Importuj ustawienia**. Wybierz plik ustawień, z którego chcesz przywrócić dane (najnowszy jest na górze). Upewnij się, że wybierasz właściwy plik ustawień: wyświetlone zostaną wszystkie pliki .json z folderu preferences (albo z katalogu w chmurze, gdy wybrano **Chmura**).

    ![Lista plików ustawień do importu](../images/Maintenance/import_settings_files.png)

    **AAPS** pokazuje szczegóły pliku. Wpisz ustawione wcześniej hasło główne i dotknij **Odszyfruj i sprawdź**.

11. Gdy plik zostanie odszyfrowany, zdecyduj, co zrobić z ustawieniami pompy. Na nowym telefonie, który przejmuje tę samą pompę, zaznacz **Także zastąp ustawienia pompy**, aby parowanie i ustawienia pompy zostały wzięte z pliku. Pozostaw pole niezaznaczone, aby zachować pompę, z którą ten telefon jest już sparowany. Następnie dotknij **Importuj**.

    ![Odszyfrowany plik ustawień z polem Także zastąp ustawienia pompy i przyciskiem Importuj](../images/Maintenance/import_settings_review.png)

12. **AAPS** pyta **Zastosować zaimportowane ustawienia?** i podaje, ile ustawień się zmieni oraz, jeśli pole pozostało niezaznaczone, ile ustawień pompy zostanie zachowanych. Nic nie zostało jeszcze zapisane, więc **Anuluj** pozostawia telefon dokładnie w takim stanie, w jakim był. Dotknij **OK**, aby zastosować.

    ![Apply imported settings dialog](../images/Maintenance/import_settings_apply.png)

13. **AAPS** od razu stosuje zaimportowane ustawienia, bez ponownego uruchamiania. Ponownie uruchamiane są tylko wtyczki, których ustawienia się zmieniły. W tym czasie **AAPS** pokazuje **Stosowanie ustawień…**; jeśli pompa jest zajęta, pokazuje **Oczekiwanie na pompę…** i stosuje ustawienia, gdy pompa będzie wolna. Jeśli pompa po minucie nadal jest zajęta, **AAPS** proponuje ponowną próbę. Komunikat **Ustawienia zastosowane** potwierdza, że zaimportowane ustawienia są w użyciu. Każde leczenie, które było w kolejce w czasie importu, zostaje usunięte, a **AAPS** informuje Cię, że zostało anulowane, więc nic nie zostanie wysłane do pompy dwa razy.

    ![Komunikat „Ustawienia zastosowane”](../images/Maintenance/import_settings_applied.png)

Jeśli w pliku wybrano pompę, której ta wersja **AAPS** nie ma, **AAPS** przełącza się na **Pompa wirtualna** i informuje Cię o tym. Wybierz ponownie swoją pompę w **Konfiguracji** i sprawdź jej ustawienia.

14. Tylko dla użytkowników pomp bezdrenowych (Omnipod i Medtrum) – jeśli zaznaczyłeś **Także zastąp ustawienia pompy**, a kopia **Ustawień** nie pochodzi z poda, którego teraz używasz, musisz uruchomić nowy pod, aby zacząć podawanie insuliny.

**Rozwiązywanie problemów:** jeśli na ekranie głównym **AAPS** nie możesz ustawić aktywnego profilu, otwórz **menu** (☰) w lewym górnym rogu > **Konfiguracja** > **Pompa** > przełącz na **Pompa wirtualna** > a potem przełącz z powrotem na swój typ pompy

### Uwaga dla użytkowników Dana RS

- Jeśli zaznaczyłeś **Także zastąp ustawienia pompy**, ustawienia połączenia z pompą też zostaną zaimportowane: **AAPS** na nowym telefonie będzie już „znał” pompę, więc nie rozpocznie skanowania Bluetooth.
- Sparuj ręcznie nowy telefon z pompą.