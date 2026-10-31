(Sensitivity-detection-and-COB-sensitivity-detection)=

# Detekcja wrażliwości (sensitivity)

## Algorytm wrażliwości

**AAPS** ma obecnie 3 modele wykrywania wrażliwości:

* Wrażliwość AAPS
* Wrażliwość ŚredniaWażona
* Wrażliwość Oref1

### Wrażliwość AAPS

Wrażliwość jest obliczana tak samo jak w Oref1, ale możesz ustawić, z jakiego okresu wstecz brane są dane. Minimalne wchłanianie węglowodanów jest obliczane z maksymalnego czasu wchłaniania węglowodanów ustawionego w ustawieniach.

### Wrażliwość ŚredniaWażona

Wrażliwość jest obliczana jako średnia ważona odchyleń. Możesz ustawić, z jakiego okresu wstecz brane są dane. Nowsze odchylenia mają większą wagę. Minimalne wchłanianie węglowodanów jest obliczane z maksymalnego czasu wchłaniania węglowodanów ustawionego w ustawieniach. Ten algorytm najszybciej reaguje na zmiany wrażliwości.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Wrażliwość Oref1

Wrażliwość jest obliczana z danych z ostatnich 8 godzin albo od ostatniej zmiany miejsca wkłucia, jeśli była mniej niż 8 godzin temu. Węglowodany (jeśli nie zostały wchłonięte) są usuwane po czasie ustawionym w ustawieniach. Tylko algorytm Oref1 obsługuje niezgłoszone posiłki (UAM, un-announced meals). Oznacza to, że okresy z wykrytym UAM są pomijane przy obliczaniu wrażliwości. Jeśli więc używasz SMB z UAM, musisz wybrać algorytm Oref1, aby to działało poprawnie. Więcej informacji o UAM znajdziesz w sekcji [Super Mikro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

Oref1 jest zalecaną opcją: tylko on potrafi wykrywać UAM i działać z [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), nowszym algorytmem.

## Równoczesne węglowodany

Gdy kilka posiłków nakłada się na siebie, jest duża różnica między algorytmami Wrażliwość AAPS i Wrażliwość ŚredniaWażona z jednej strony a Oref1 z drugiej.

* Oref1 zakłada, że w danym czasie wchłania się tylko jeden posiłek: drugi posiłek zaczyna się wchłaniać dopiero, gdy pierwszy całkowicie się wchłonie.
* Wrażliwość AAPS i Wrażliwość ŚredniaWażona zaczynają wchłanianie od razu po wpisaniu węglowodanów. Jeśli w organizmie jest więcej niż jeden posiłek, minimalne wchłanianie węglowodanów dostosuje się do wielkości posiłku i maksymalnego czasu wchłaniania. Minimalne wchłanianie będzie więc większe niż w Oref1.