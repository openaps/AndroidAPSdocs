# Wybór pompy

AndroidAPS currently works with

* Accu-Chek Combo
* Pompa Accu-Chek Insight
* DanaR
* DanaRS 

pumps. Szczegóły możliwości wykorzystania innych pomp, które mogą zostać w przyszłości użyte do pracy z AndroidAPS są wymienione na stronie [ Przyszłość (możliwe) Pompy ](Future-possible-Pump-Drivers.md).

Jeśli chcesz wybrać pompę, którą możesz ulepszyć lub kupić, często pytasz, którą wybrać. Szczegóły dotyczące różnych dystrybutorów znajdują się w [tym arkuszu kalkulacyjnym](https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0), proszę udostępnić szczegóły swoich dystrybutorów, jeśli jeszcze nie zostali wymienieni w arkuszu.

The Combo and the Insight are solid pumps, and loopable. The advantages of the DanaR/RS as the pump of choice however are:

* Dana * R/RS łączy się z prawie każdym telefonem z Androidem >= 5.1 bez potrzeby flashowania do lineage. Jeśli Twój telefon się zepsuje, możesz łatwo znaleźć dowolny telefon współpracujący z pompami Dana * R/RS jako szybką wymianę... nie tak łatwo jest z Combo. (Może się to zmienić w przyszłości, gdy Android 8.1 stanie się bardziej popularny)

* Wstępne parowanie jest prostsze z Dana* RS. Ale zwykle robisz to tylko raz, więc ma to wpływ tylko wtedy, gdy chcesz przetestować nową funkcję za pomocą różnych pomp.

* Do tej pory Combo działa z parsowaniem ekranu. Generalnie działa to świetnie, ale jest powolne. Dla pętli nie ma to znaczenia, ponieważ wszystko działa w tle. Potrzeba więcej czasu na połączenie AAPS z pompą przez co istnieje prawdopodobieństwo zerwania istniejącego połączenia Bluetooth. Może to być niewygodne, jeśli podczas procesu podawania bolusa odejdziesz zbyt daleko od smartfonu (np. podczas gotowania).

* Combo wibruje na końcu TBR, Dana * R wibruje (lub wydaje krótkie dźwięki) podczas podawania SMB. W nocy prawdopodobnie będziesz używać częściej TBRs niż SMB. Dana * RS można skonfigurować tak, aby nie emitowała ani dźwięku ani wibracji.

* W pompie Dana RS historię można odczytać w kilka sekund za pomocą COB. Dlatego smartfony mogą być łatwo zastąpione w trybie offline. Po udostępnieniu niektórych danych CGM używanie pętli może być kontynuowane.

* Wszystkie pompy powiązane z AndroidAPS mają wodoodporne zestawy do infuzji. Tylko pompy Dana mają "gwarancję wodoszczelności" ze względu na zamknięty przedział baterii i przedział zbiornika.

Combo jest oczywiście bardzo dobrą pompą i nadaje się do pętli. Zaletą tej pompy jest również to że ma kilka typów zestawów infuzyjnych do wyboru oraz posiada złącze typu luer lock. Baterie są łatwo dostępne na dowolnej stacji benzynowej, całodobowym sklepie spożywczym, a jeśli naprawdę ich potrzebujesz, możesz je wymienić z pilota do TV w pokoju hotelowym ;-)