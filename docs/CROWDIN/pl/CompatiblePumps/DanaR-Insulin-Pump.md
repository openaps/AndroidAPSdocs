# DanaR

*Te instrukcje opisują konfigurację aplikacji i pompy, jeśli masz pompę DanaR. Jeśli masz pompę DanaRS wprowadzoną w 2017 roku, przejdź do strony [DanaRS, Dana-i i Dana-i2](./DanaRS-Insulin-Pump.md).*

## Funkcje pompy w AAPS

* Komunikuje się z **AAPS** przez wbudowany Bluetooth telefonu, bez dodatkowego urządzenia komunikacyjnego.
* Zmiana strefy czasowej i czasu letniego nie wymaga żadnych specjalnych działań, ponieważ pompa nie używa własnej historii.

## Konfiguracja

* W pompie przejdź do Main Menu > Setting > User Option
* Włącz „8. Extended Bolus” (bolus przedłużony)

![Pompa DanaR](../images/danar1.png)

* Przejdź do Main Menu > Setting > Discovery
* In phone settings go to Bluetooth, scan for nearby devices, select your DanaR serial number and input your password (Pairing password is 0000). Jeśli DanaR nie pojawia się w wyszukiwaniu, uruchom ponownie telefon, wyjmij baterię z DanaR, włóż ją z powrotem i powtórz te dwa kroki.

* W **AAPS** otwórz **menu** (☰) w lewym górnym rogu, przejdź do **Konfiguracja** > **Pompa** i wybierz swój typ DanaR (**DanaR**, **DanaR wersja Koreańska** lub **DanaRv2**).
  
  ![Konfiguracja > Pompa z wtyczkami DanaR](../images/v4/Configuration/configuration_pump_list_1.png)

* Otwórz ekran pompy: dotknij **Otwórz wtyczkę** na karcie DanaR (lub przejdź do **Zarządzaj** > **Pompa**).

* Dotknij **Parowanie**. Na ekranie parowania: 
  * Wpisz hasło pompy w polu **Hasło pompy** (domyślne hasło to 1234).
  * W sekcji **Wybierz sparowane urządzenie** dotknij numeru seryjnego swojej DanaR. Jeśli lista jest pusta, dotknij **Otwórz ustawienia Bluetooth** i najpierw sparuj pompę z telefonem (patrz krok powyżej). Gdy wrócisz do **AAPS**, pompa pojawi się na liście. Jeśli się nie pojawi, dotknij ikony odświeżania.
  * Dotknij **Parowanie**. **AAPS** łączy się z pompą i sprawdza hasło.
* Aby zmienić ustawienia sterownika, dotknij **Ustawienia** na karcie DanaR w **Konfiguracja** > **Pompa**: 
  * **Prędkość podawania bolusa** (DanaR i DanaRv2): zmień domyślną prędkość podawania bolusa (12 s/U, 30 s/U lub 60 s/U).
  * **Używaj przedłużonych bolusów dla >200%** (DanaR i DanaR wersja Koreańska): włącz tę opcję, jeśli chcesz, aby **AAPS** pozwalał na dawkę bazową powyżej 200%. Pamiętaj, że wtedy nie możesz używać pętli z wysokimi bazami tymczasowymi (TBR), gdy używasz bolusów przedłużonych do jedzenia.
* Ustaw w pompie krok bazy na 0,01 U/h
* Ustaw w pompie krok bolusa na 0,1 U. **AAPS** odczytuje krok bolusa z pompy i używa go przy każdym bolusie.
* Uaktywnij bolusy przedłużone w pompie

## Zmiana strefy czasowej z pompą Dana R

Informacje o zmianie strefy czasowej znajdziesz w sekcji [Zmiana strefy czasowej z pompami](#timezone-traveling-danarv2-danars).

## Gdzie uzyskać pomoc

Sterownik DanaR jest rozwijany przez społeczność na zasadzie **wolontariatu**. Zanim poprosisz o pomoc:

1. **Przeczytaj** odpowiednią część tej dokumentacji, aby sprawdzić, jak funkcja ma działać.
2. **Zapytaj** na kanale *#AAPS* na [Discordzie](https://discord.gg/4fQUWHZ4Mw) lub na jednym z innych [kanałów społeczności](../GettingHelp/WhereCanIGetHelp.md).
3. **Zgłoś błąd**: przeszukaj [istniejące zgłoszenia](https://github.com/nightscout/AndroidAPS/issues); jeśli Twojego problemu tam nie ma, otwórz [nowe zgłoszenie](https://github.com/nightscout/AndroidAPS/issues) i dołącz [pliki logów](../GettingHelp/AccessingLogFiles.md).

Prosząc o pomoc, podaj markę i model telefonu, wersję Androida, wersję **AAPS** i prosty opis problemu po angielsku (co się zmieniło, kiedy ostatnio działało).