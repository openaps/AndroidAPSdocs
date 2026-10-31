# Android Auto

**AAPS** może wysyłać informacje o Twoim aktualnym stanie jako wiadomość bezpośrednio do Android Auto w samochodzie.

## Wymagania

**AAPS** używa funkcji Android Auto, która przekazuje wiadomości z aplikacji w telefonie na ekran systemu audio w samochodzie.

To oznacza, że:

* Android musi pozwalać **AAPS** na pokazywanie powiadomień oraz
* **AAPS** nie jest oficjalną aplikacją, więc zezwól w Android Auto na „nieznane źródła”.

![Dane CGM z AAPS w Android Auto](../images/android_auto_01.png)

(androidauto-check-that-aaps-can-show-notifications)=

## Sprawdź, czy AAPS może pokazywać powiadomienia

**AAPS** zawsze pokazuje powiadomienie o stanie z aktualną glikemią, IOB i COB. To jest powiadomienie, które Android Auto wyświetla w samochodzie. W **AAPS** nie trzeba niczego włączać, ale Android musi pozwalać **AAPS** na pokazywanie powiadomień.

W telefonie otwórz **Ustawienia** > **Aplikacje** > **AAPS** > **Powiadomienia** i upewnij się, że **Wszystkie powiadomienia AAPS** są włączone.

![Wszystkie powiadomienia AAPS włączone](../images/android_auto_notifications_all.png)

Przewiń w dół i upewnij się, że **Bieżący status** jest włączony: to kanał powiadomienia o stanie.

![Kanał powiadomień „Bieżący status” włączony](../images/android_auto_ongoing_channel.png)

Zanim pójdziesz do samochodu, sprawdź, czy widzisz w telefonie powiadomienie o stanie **AAPS**!

![Powiadomienie AAPS w telefonie](../images/android_auto_04.png)

(androidauto-allow-the-use-of-unknown-sources-with-android-auto)=

## Zezwól w Android Auto na „nieznane źródła”

**AAPS** nie jest oficjalną aplikacją Android Auto, więc w Android Auto trzeba włączyć powiadomienia z „nieznanych źródeł”. Robi się to przez tryb programisty, który tutaj pokażemy.

Wejdź do samochodu i połącz telefon z systemem audio samochodu.

Powinien pojawić się ekran podobny do tego.

![Włącz tryb programisty](../images/android_auto_05.png)

Naciśnij ikonę **ustawień**, aby rozpocząć konfigurację.

Przewiń w dół do końca strony i wybierz **więcej ustawień w telefonie** (see more in the phone).

![Włącz tryb programisty](../images/android_auto_06.png)

Teraz włączymy tryb programisty w telefonie.

Pierwszy ekran wygląda tak. Przewiń w dół do końca strony.

![Włącz tryb programisty](../images/android_auto_07.png)

Tam zobaczysz numer wersji Android Auto. Dotknij 10 razy (słownie: dziesięć) wersji Android Auto. Tą ukrytą kombinacją włączyłeś tryb programisty.

![Włącz tryb programisty](../images/android_auto_08.png)

Potwierdź w oknie „Zezwolić na ustawienia programisty?” (Allow development settings?), że chcesz włączyć tryb programisty.

![Włącz tryb programisty](../images/android_auto_09.png)

W **ustawieniach programisty** włącz „Nieznane źródła” (Unknown sources).

![Włącz tryb programisty](../images/android_auto_10.png)

Teraz możesz wyjść z trybu programisty, jeśli chcesz. Aby to zrobić, wejdź w menu z trzema kropkami w prawym górnym rogu.

## Pokazywanie powiadomień w samochodzie

Dotknij **ikony z liczbą** w prawym dolnym rogu Android Auto w samochodzie.

![ikona z liczbą – Android Auto w samochodzie](../images/android_auto_11.png)

Dane CGM będą wyświetlane tak:

![Dane CGM z AAPS w Android Auto](../images/android_auto_01.png)

(android-auto-troubleshooting)=

## Rozwiązywanie problemów:

* If you don't see the notification, check if you [allowed AAPS to show notifications](#androidauto-check-that-aaps-can-show-notifications) in Android and if [Android Auto has access rights to notifications](#androidauto-allow-the-use-of-unknown-sources-with-android-auto).