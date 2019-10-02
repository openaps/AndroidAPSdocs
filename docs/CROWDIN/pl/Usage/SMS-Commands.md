# Komunikator SMS

### Obejście błędu w wersji AndroidAPS 2.3

Ustawienia komend SMS są wyłączone w systemie AndroidAPS w wersji 2.3 z powodu błędu programu, ale mogą być ponownie używane w wersji 2.4.

Jeśli musisz używać komend SMS możesz użyć następującego rozwiązania:

- Eksport ustawień
- Downgrade do wersji AndroidAPS (poprzez zainstalowanie wersji 2.2 z pliku APK)
- Skonfiguruj komunikator SMS w AndroidAPS w wersji 2.2.
- Zaktualizuj AndroidAPS do wersji 2.3. Ustawienia komunikatora SMS nie będą dostępne w tej wersji.

## Bezpieczeństwo

- AndroidAPS umożliwia zdalne sterowanie telefonem dziecka za pomocą wiadomości tekstowej. Jeśli włączysz ten komunikator SMS, zawsze pamiętaj, że telefon skonfigurowany do wydawania poleceń zdalnych może zostać skradziony. Dlatego zawsze chroń go przynajmniej kodem PIN.
- AndroidAPS poinformuje Cię również SMS-em, jeśli Twoje polecenia zdalne, takie jak zmiana bolusa lub profilu, zostały wykonane. Zaleca się takie ustawienie funkcji sterowania pompą poprzez sms, aby teksty potwierdzające były wysyłane na co najmniej dwa różne numery telefonów, w przypadku kradzieży jednego z telefonów odbierających drugi telefon odbierze informację o zmianach.

## Jak to działa

W ustawieniach swojego telefonu z systemem Android wybierz Aplikacje > AndroidAPS > Uprawnienia i włącz SMS-y

W AndroidAPS przejdź do Preferencje > Komunikator SMS i wprowadź numer(y) telefonu, z którego będziesz mógł korzystać do wydawania poleceń SMS (oddzielone średnikami), a także włącz "Zezwalaj na zdalne polecenia przez SMS".

Wyślij SMS-a na telefon z uruchomionym AndroidAPS z któregokolwiek zatwierdzonego numeru telefonu używając dowolnego z poniższych **pogrubionych** poleceń, telefon odpowie, potwierdzając powodzenie żądanego polecenia lub jego status.

**Hint**: It can be useful to have SMS flat for both phones if a lot of SMS will be sent.

## Polecenia

### BG

- Ostatnia wartość glikemii np.: 120 4min ago, Delta: -2 mg/dl, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)

### LOOP STOP/DISABLE

- Pętla (Loop) została wyłączona

### LOOP START/ENABLE

- Pętla (Loop) została włączona

### LOOP STATUS

- Pętla (Loop) jest wyłączona
- Pętla (Loop) jest włączona
- Wstrzymana (10 min)

### LOOP SUSPEND 20

- Pętla wstrzymana na 20 minut

### LOOP RESUME

- Pętla wznowiona

### TREATMENTS REFRESH

- Odśwież zabiegi 1 odbiorca

### NSCLIENT RESTART

- NSCLIENT RESTART 1 odbiorca

### PUMP

- Ostatnie połączenie: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100

### BASAL STOP/CANCEL

- Aby anulować bazę tymczasową, odpowiedz za pomocą kodu EmF

### BASAL 0.3

- Aby rozpocząć dawkę bazową 0.3U/h odpowiedz kodem Swe

### BASAL 0.3 20

- Aby rozpocząć dawkę bazową 0.3U/h przez 20 min odpowiedz kodem Swe

### BASAL 30%

- Aby rozpocząć dawkę bazową 30% odpowiedz kodem Swe

### BASAL 30% 50

- Aby rozpocząć dawkę bazową 30% przez 50 min odpowiedz kodem Swe

### BOLUS 1.2

- Aby dostarczyć bolusa 1,2U odpowiedz z kodem Rrt
- Bolus zdalny jest niedozwolony (* w ciągu 15 minut po ostatnim bolusie lub jeśli zdalne poleceniach nie są dozwolone *)

### EXTENDED STOP/CANCEL

- Aby zatrzymać bolus przedłużony wprowadź kod EmF

### EXTENDED 2 120

- Aby rozpocząć przedłużony bolus 2U na 120 min, odpowiedz kodem EmF

### CAL 5.6

- Wysłanie kalibracji 5.6 odpowiedz kodem Rrt
- Kalibracja wysłana (*jeśli zainstalowano xDrip. Akceptacja kalibracji musi być włączona w xDrip+*)

### PROFILE STATUS

- Profil1

### PROFILE LIST

- 1.`Profile1` 2.`Profile2`

### PROFILE 1

- Aby zmienić profil na Profile1 100% odpowiedz kodem Any

### PROFILE 2 30

- Aby zmienić profil na Profile2 30% odpowiedz kodem Any

## Rozwiązywanie problemów

Pojawił się raport o zatrzymywaniu się poleceń SMS po aktualizacji telefonu Galaxy S10. Można to rozwiązać, wyłączając opcję „wyślij jako wiadomość czatu”.

![Wyłącz SMS jako wiadomość czatu](../images/SMSdisableChat.png)