# Strefy czasowe podróżowanie z pompami

## DanaR, Korean DanaR

Nie ma problemu ze zmianą strefy czasowej w telefonie, ponieważ te pompy nie używają historii

## DanaRv2, DanaRS

Te pompy wymagają specjalnej uwagi, ponieważ AndroidAPS używa historii z pompy, ale rekordy w pompie nie mają stempla strefy czasowej. Oznacza to, że jeśli zmienisz strefę czasową w telefonie, zapisy będą czytane z inną strefą czasową i zostaną podwojone. Aby tego uniknąć, wykonaj następujące czynności przy każdej zmianie strefy czasowej:

* ustaw w telefonie, ręczną zmianę strefy czasowej przed podróżą

Po wyjściu z samolotu:

* wyłącz pompę
* zmień strefę czasową w telefonie
* wyłącz telefon, włącz pompę
* wyczyść historię w pompie
* zmień czas w pompie
* włącz telefon
* pozwól telefonowi połączyć się z pompą i dostosować czas

## Combo

## Insight

Sterownik automatycznie dostosowuje czas pompy do czasu telefonu.

Insight rejestruje również wpisy historii, w którym momencie zmieniono czas i od którego (starego) czasu, do którego (nowego) czasu. Tak więc poprawny czas można określić w AAPS pomimo zmiany czasu.

Może to powodować niedokładności w TDD. Ale to nie powinno być problemem.

Użytkownik Insight nie musi się martwić o zmiany strefy czasowej i zmiany czasu. Jest jeden wyjątek od tej reguły: pompa Insight ma małą wewnętrzną baterię do zasilania, itp. podczas zmiany głównej baterii. Jeśli wymiana baterii trwa zbyt długo, bateria wewnętrzna może się wyczerpać, zegar zostanie zresetowany, a po włożeniu nowej baterii zostaniesz poproszony o wprowadzenie nowej godziny i daty. W takim przypadku wszystkie wpisy przed wymianą baterii są pomijane w obliczeniach w APPS, ponieważ prawidłowy czas nie może być prawidłowo zidentyfikowany.

# Zmiana czasu z i na czas letni (DST)

W zależności od konfiguracji pompy i CGM, skokowe zmiany czasu mogą prowadzić do problemów. W Combo np. historia pompy zostanie ponownie odczytana i może prowadzić do duplikowania wpisów. Z tego względu przygotuj się wcześniej do zmiany, w trakcie dnia a nie w nocy.

Jeśli używasz kalkulatora bolusa, nie używaj COB i IOB, chyba że upewnisz się, że są one całkowicie poprawne - lepiej nie używaj ich przez kilka godzin po przełączeniu DST.

## Accu-Chek Combo

AndroidAPS wyemituje alarm, jeśli czas między pompą a telefonem różni się znacznie. W przypadku regulacji czasu DST byłoby to w środku nocy. Aby temu zapobiec i cieszyć się snem, wykonaj następujące kroki:

1) Wyłącz automatyczną strefę czasową w telefonie. 2) Znajdź strefę czasową, która ma docelowy czas, ale nie używa czasu letniego. Dla czasu środkowoeuropejskiego (CET) może to być „Brazzaville” (Kongo). Zmień strefę czasową telefonu na Kongo. 3) W systemie AndroidAPS odśwież pompę. 4) Sprawdź kartę Leczenie ... Jeśli widzisz zduplikowane zabiegi:

* NIE WCISKAJ "Usuń przyszłe zabiegi"
* Wciśnij "usuń" we wszystkich przyszłych zabiegach i duplikatach. To powinno unieważnić zabiegi, a nie ich usunięcie, aby nie były już brane pod uwagę w IOB. 5) Jeśli stan pracy jest niejasny - wyłącz pętlę dla co najmniej jednego DIA i Max-Carb-Time - którykolwiek jest większy.

Dobrym momentem na dokonanie przełączenia jest stan z niskim IOB. Na przykład na godzinę przed posiłkiem.

## Pompa Accu-Chek Insight

* Zmiana na DST jest wykonywana automatycznie. Żadne działanie nie jest wymagane.

## Inne pompy - nowe od wersji AAPS 2.2

<b><font color="#FF0000">Musisz zaktualizować APPS, aby korzystać z tej funkcji!</font></b>

* Aby zapobiec trudnościom, pętla zostanie wyłączona na 3 godziny PO przełączeniu DST. Odbywa się to ze względów bezpieczeństwa (IOB zbyt wysokie z powodu powielonego bolusa przed zmianą DST).
* Na ekranie głównym otrzymasz powiadomienie 24 godziny przed zmianą czasu letniego, która zostanie tymczasowo wyłączona. Ten komunikat pojawi się bez sygnału dźwiękowego, wibracji lub czegokolwiek.