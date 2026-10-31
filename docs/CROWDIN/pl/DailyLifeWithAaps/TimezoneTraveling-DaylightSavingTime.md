# Zmiana strefy czasowej i czas letni

Gdy zmienia się strefa czasowa telefonu, **AAPS** około 10 sekund po zmianie od nowa oblicza **IOB**, bazę i wrażliwość dla przeszłości. W tym czasie wykresy i wartości na ekranie głównym mogą odświeżyć się z opóźnieniem.

(timezone-traveling-with-pumps)=

## Zmiana strefy czasowej dla Omnipod Dash

* Odśwież stan pompy w **Zarządzaj → Pompa**
* Wybierz na chwilę inny **Profil**, a potem wróć do swojego pierwotnego lub wybranego **Profilu**

## Zmiana strefy czasowej dla DanaR, koreańskiej DanaR

Nie ma problemu ze zmianą strefy czasowej w telefonie, ponieważ te pompy nie używają historii

(timezone-traveling-danarv2-danars)=

## Zmiana strefy czasowej dla DanaRv2, DanaRS, Dana-i

Te pompy wymagają szczególnej uwagi, ponieważ **AAPS** używa historii z pompy, ale wpisy w pompie nie mają znacznika strefy czasowej. **To oznacza, że jeśli zmienisz strefę czasową w telefonie, wpisy zostaną odczytane z inną strefą czasową i będą zdublowane.**

Aby tego uniknąć, masz dwie możliwości:

### Opcja 1: zachowaj czas domowy i przesuń profil w czasie

* Wyłącz „Automatyczna data i godzina” w ustawieniach telefonu (ręczna zmiana strefy czasowej).

* Przez całą podróż telefon musi mieć Twój standardowy czas, tak jak w domu.

* Przesuń w czasie swój **Profil** o różnicę między czasem w domu a czasem w miejscu docelowym.
   
   * Dotknij nazwy **Profilu** na ekranie głównym, aby otworzyć [ekran profilu](#ProfileSwitch-manage-v4)
   * Wybierz swój **Profil** i dotknij **▶ Aktywuj**
   * Ustaw „**Zmiana czasu**” zgodnie z miejscem docelowym i dotknij **Aktywuj**.
   
   ![Zmiana profilu z przesunięciem czasu](../images/ProfileSwitchTimeShift2.png)
   
   * np. Wiedeń -> Nowy Jork: **Zmiana profilu** +6 godzin
   * np. Wiedeń -> Sydney: **Zmiana profilu** -8 godzin

### Opcja 2: usuń historię pompy

* Wyłącz „Automatyczna data i godzina” w ustawieniach telefonu (ręczna zmiana strefy czasowej)

When you get off the plane:

* wyłącz pompę
* zmień strefę czasową w telefonie
* wyłącz telefon, włącz pompę
* wyczyść historię w pompie
* zmień czas w pompie
* włącz telefon
* pozwól telefonowi połączyć się z pompą i dostosować czas

(timezone-traveling-insight)=

## Zmiana strefy czasowej dla Insight

Sterownik automatycznie dostosowuje czas pompy do czasu telefonu.

Insight zapisuje też w historii wpisy o tym, w którym momencie zmieniono czas oraz z jakiego (starego) czasu na jaki (nowy) czas. Dzięki temu **AAPS** może ustalić poprawny czas mimo zmiany czasu.

Może to spowodować niedokładności w **TDD** (dziennych dawkach insuliny). Nie powinno to jednak być problemem.

Dlatego użytkownik pompy Insight nie musi martwić się zmianami strefy czasowej ani zmianami czasu. Od tej zasady jest jeden wyjątek: pompa Insight ma małą wewnętrzną baterię, która zasila m.in. zegar podczas wymiany „prawdziwej” baterii. If changing battery takes too long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. W takim przypadku wszystkie wpisy sprzed wymiany baterii są pomijane w obliczeniach AAPS, ponieważ nie da się ustalić ich poprawnego czasu.

## Zmiana strefy czasowej dla Accu-Chek Combo

[Sterownik Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) automatycznie dostosowuje czas pompy do czasu telefonu. Combo nie może zapisywać stref czasowych, tylko czas lokalny, i właśnie ten czas sterownik ustawia w pompie. Dodatkowo sterownik zapisuje strefę czasową w lokalnych ustawieniach AAPS, aby móc zamienić czas lokalny pompy na pełny znacznik czasu z przesunięciem strefy czasowej. Nie musisz nic robić. Jeśli czas w pompie Combo za bardzo różni się od aktualnego czasu telefonu, czas pompy zostanie automatycznie dostosowany.

Pamiętaj jednak, że trwa to chwilę, ponieważ można to zrobić tylko w trybie zdalnego terminala, który zwykle działa wolno. To ograniczenie pompy Combo, którego nie da się obejść.

## Zmiana strefy czasowej dla Medtrum

Sterownik automatycznie dostosowuje czas pompy do czasu telefonu.

Zmiana strefy czasowej nie narusza historii, może mieć wpływ tylko na TDD. Ręczna zmiana czasu w telefonie może spowodować problemy z historią i **IOB**. Jeśli zmieniasz czas ręcznie, dokładnie sprawdź **IOB**.

Gdy zmienia się strefa czasowa lub czas, trwające **TBR** są zatrzymywane.

(time-adjustment-daylight-savings-time-dst)=

## CZAS LETNI (DST)

Dostosowanie czasu przy zmianie na czas letni.

W zależności od Twojej pompy i CGM skoki czasu mogą przeszkadzać w poprawnym działaniu **AAPS**. W przypadku niektórych pomp lepiej zmienić strefę czasową przed zmianą czasu, gdy nie śpisz, a nie w nocy.

### Automatyczne dostosowanie do czasu letniego (DST) dla większości pomp

* Jednak **Pętla** zostanie wyłączona na 3 godziny PO zmianie czasu (zwykle od 1:00) i **AAPS** wróci do bazy z Twojego **Profilu**. Robi się to ze względów bezpieczeństwa – **IOB** może być za wysokie z powodu zdublowanego bolusa sprzed zmiany czasu.
* Po zmianie czasu wykonaj **Zmianę profilu** na wybrany **Profil**, aby włączyć **Pętlę**: dotknij nazwy profilu na ekranie głównym, a potem okrągłego przycisku **▶** (zobacz [Aktywacja profilu](#ProfileSwitch-manage-v4)).
* Przed zmianą czasu na ekranie głównym **AAPS** pojawi się też powiadomienie, że **Pętla** została tymczasowo wyłączona. Ten komunikat pojawi się bez sygnału dźwiękowego, wibracji ani podobnego dźwięku.

Jeśli podajesz bolus z kalkulatora **AAPS**, nie używaj danych **COB** i **IOB**, chyba że masz pewność, że te dane są w pełni poprawne. Zachowaj ostrożność i nie używaj tej funkcji przez kilka godzin po zmianie czasu.

### Czas letni (DST) dla Accu-Chek Insight

* Zmiana na czas letni (DST) odbywa się automatycznie. Nie musisz nic robić.

### Czas letni (DST) dla Accu-Chek Combo

* Zmiana na czas letni (DST) odbywa się automatycznie. Nie musisz nic robić.

### Czas letni (DST) dla Medtrum

* Zmiana na czas letni (DST) odbywa się automatycznie. Nie musisz nic robić.

### Czas letni (DST) dla Omnipod Dash

* Możesz pozwolić **AAPS** tymczasowo wrócić do bazy z profilu po zmianie czasu, jak opisano powyżej.
* Jeśli nie chcesz, aby **AAPS** w nocy tymczasowo wracał do bazy z profilu, możesz zmienić strefę czasową dzień przed zmianą czasu, aby uniknąć zakłóceń w nocy. UWAGA: TA OPCJA MOŻE SPOWODOWAĆ PRZEDWCZESNE WYGAŚNIĘCIE PODA. JEŚLI WYBIERZESZ PONIŻSZĄ FUNKCJĘ, MIEJ PRZY SOBIE ZAPASOWE MATERIAŁY.

#### Działania przed zmianą czasu

1. Wyłącz wszystkie ustawienia telefonu, które automatycznie ustawiają strefę czasową, aby móc wybrać strefę czasową bez czasu letniego. Sposób włączenia zależy od Twojego smartfona i wersji Androida.
   
   * Niektóre telefony mają dwa ustawienia: jedno do automatycznego ustawiania czasu (które najlepiej zostawić włączone) i jedno do automatycznego ustawiania strefy czasowej (które MUSISZ wyłączyć: **Ustaw automatycznie** (Set automatically) w sekcji **Strefa czasowa** (Time zone) na zrzucie ekranu poniżej).
   * Niestety niektóre wersje Androida mają jeden przełącznik, który włącza automatyczne ustawianie zarówno czasu, jak i strefy czasowej. Na razie musisz to wyłączyć.

![Screenshot_20260329-110315 (1)](../images/570963727-ca40c1c6-1697-4832-ae10-5cf6a1dc0bce.png)

2. Znajdź strefę czasową, która ma ten sam czas co Twoja obecna lokalizacja, ale nie używa czasu letniego.
   
   * Lista tych krajów jest dostępna tutaj: [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Dla czasu środkowoeuropejskiego (CET) może to być „Brazzaville” (Kongo). Zmień strefę czasową telefonu na Kongo.

![Screenshot_20260329-111830](../images/570966323-b7b7f738-f91e-40df-ad79-f404fbfb9ae6.png)

3. W **AAPS** odśwież pompę i przełącz na wybrany **Profil**.

4. Sprawdź **IOB** i **COB** w **AAPS**. Jeśli są niedokładne, wyłącz **Pętlę** co najmniej na czas jednego DIA albo maksymalnego czasu wchłaniania węglowodanów (Max-Carb-Time) – w zależności od tego, który jest dłuższy.

5. Działania po zmianie czasu. Dobry moment na powrót do lokalnej strefy czasowej to chwila, gdy **IOB** jest niskie. Na przykład godzinę przed posiłkiem, takim jak śniadanie. Najlepiej, aby **COB** i **IOB** były bliskie zera.