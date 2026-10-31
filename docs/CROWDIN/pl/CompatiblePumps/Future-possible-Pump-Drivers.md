# Sterowniki do pomp (prawdopodobne) w przyszłości

Poniżej znajduje się lista niektórych pomp, które mogą działać w pętli, status ich wsparcia w dowolnym systemie pętlowym, oraz status dla systemu AAPS. Na końcu jest trochę informacji, jakie są wymagania, aby pompa nadawała się do pracy w pętli.

    {contents} Spis treści
    :depth: 1
    :local: true

## Pompy w fazie integracji z AAPS

**Wkrótce:** sterowniki dla tych pomp są w trakcie tworzenia i działają już w wersjach testowych.

Omnipod 5 ([Strona domowa](https://www.omnipod.com/))

![Sterownik Omnipod 5 w trakcie tworzenia](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([Strona domowa](https://www.tandemdiabetes.com/))

![Sterownik Tandem t:Mobi w trakcie tworzenia](../images/future-pumps/tandem-mobi-driver.png)

## Pompy, które nadają się do pętli

### Kaleido ([Strona domowa](https://www.hellokaleido.com/))

**Status pętli:** Pompa może nadawać się do pętli, ale jej protokół jest na razie nieznany. Producent nie jest zainteresowany open source.

**Wymagany sprzęt dla AAPS:** brak. Wygląda na to, że ma obsługę BT.

### Tandem: t:slim X3 ([Strona domowa](https://www.tandemdiabetes.com/about-us/pipeline))

**Status pętli:** Możliwy przyszły kandydat do pętli. Mamy nadzieję, że t:slim X3 pozwoli na pełne sterowanie z telefonu, co umożliwi obsługę w AAPS, ale termin i funkcje wciąż nie są znane.

**Wymagany sprzęt dla AAPS:** brak. Prawdopodobnie będzie mieć Bluetooth.

**Uwagi:** Jeszcze nie wydana. Wygląda na to, że w planach Tandem t:slim X3 jest wciąż odsuwana na rzecz t:Mobi (także w wersji bez drenu) i Sigi (ich pompy typu patch).

### Twiist ([Strona domowa](https://www.twiist.com/))

**Status pętli:** Nadaje się do pętli.

**Wymagany sprzęt dla AAPS:** brak. Ma Bluetooth.

### Pompa insulinowa Willcare ([Strona domowa](http://shinmyungmedi.com/en/))

**Status pętli:** Na razie nie nadaje się do pętli, ale skontaktowali się z nami pracownicy firmy, którzy chcą rozwinąć pompę tak, aby nadawała się do pętli (myślę, że na razie brakuje tylko poleceń odczytu/ustawienia profilu).

**Wymagany sprzęt dla AAPS:** brak. Wygląda na to, że ma obsługę BT.

**Uwagi:** Firma jest zainteresowana integracją z AAPS, więc może sama wykonać implementację.

### Ypsopump ([Strona domowa](https://www.ypsomed.com/))

**Status pętli:** Nadaje się do pętli. Protokół Bluetooth tej pompy został odtworzony przez społeczność (inżynieria wsteczna), więc komunikacja z nią jest w zasadzie możliwa.

**Wymagany sprzęt dla AAPS:** brak. Ma Bluetooth.

**Uwagi:** Ypsopump chroni komunikację Bluetooth silnym szyfrowaniem firmy zewnętrznej. Praca z nim jest technicznie trudna, przez co zbudowanie i utrzymanie niezawodnego sterownika jest trudne. Nie ma jeszcze sterownika AAPS gotowego do codziennego użytku.

## Pompy, które nie są już sprzedawane (firmy już nie działają)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Uwagi:** Koniec wsparcia w marcu 2025.

## Pompy, które nie są odpowiednie dla pętli

### Medtronic Bluetooth

**Uwagi:** Medtronic [wycofał się](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([Strona domowa](https://www.tandemdiabetes.com/))

**Uwagi:** Protokół Bluetooth Tandem został odtworzony (inżynieria wsteczna), ale w t:slim X2 można podawać tylko bolusy — nie da się sterować podawaniem bazy — więc nie można jej bezpiecznie używać w pętli. Raczej się to nie zmieni, chyba że Tandem pozwoli na pełne sterowanie X2 z telefonu, co bardziej prawdopodobnie pojawi się dopiero w t:slim X3.

### Accu-Chek Solo

**Uwagi:** Społeczności nie udało się nawiązać komunikacji z pompą Solo.

## Wymagania, aby pompa nadawała się do pętli

**Wymagania wstępne**

- Pompa musi obsługiwać pewien rodzaj zdalnego sterowania. (BT, częstotliwość radiowa itp.)
- Protokół komunikacji jest złamany/udokumentowany itp.

**Minimalne wymagania**

- Ustawienie tymczasowej dawki bazowej
- Odczyt statusu
- Anulowanie tymczasowej dawki bazowej

**Dla oref1 (SMB) lub podawania bolusów:**

- Podanie bolusa

**Dodatkowe przydatne funkcje**

- Anulowanie bolusa
- Odczyt profilu bazowego (prawie wymagane)
- Ustawienie profilu bazowego (dobrze, gdy jest)
- Odczyt historii 

**Inne (niewymagane, ale przydatne)**

- Ustawienie bolusa przedłużonego
- Anulowanie bolusa przedłużonego
- Odczyt historii
- Odczyt TDD (całkowita dawka dobowa)

### Obsługa innych pomp

Jeśli chcesz poznać status innych pomp, skontaktuj się z nami na Discordzie.