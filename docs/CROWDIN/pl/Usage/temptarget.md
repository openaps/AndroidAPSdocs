# Cele tymczasowe

## Czym są Cele tymczasowe, gdzie mogę je ustawić i skonfigurować?

Za pomocą celów tymczasowych "Temp-Targets" (lub krótko TT) możesz zmienić docelowy poziom glukozy we krwi na określony czas. Ponieważ są one najczęściej potrzebne do aktywności, hipo (niedoboru węglowodanów) lub jedzenia wkrótce, możesz skonfigurować wartości domyślne. Aby skonfigurować cele tymczasowe, możesz wejść do menu w prawym górnym rogu i przejść do Ustawienia -> Inne-> Domyślne tymczasowe wartości docelowe. Aby wybrać "Domyślną tymczasową wartości docelowe", na zakładce Przegląd naciśnij i przytrzymaj przycisk celu w prawym górnym rogu lub nacisnąć pomarańczowy przycisk "WĘGLOWOD". Aby ustawić niestandardowy cele tymczasowy, możesz również zrobić to przez długie naciśnięcie przycisku "Cel Tymczasowy" w zakładce "AKCJE".

## Hipo Cel tymczasowy

Ten cel tymczasowy można uznać za najważniejszy. Jest kilka powodów: 1. Zdając sobie sprawę, że poziom cukru może spaść: zwykle pętla powinna sobie z tym poradzić, ale czasami wiesz lepiej i szybciej niż pętla, więc pętla może reagować szybciej, gdy cel tymczasowy ma ustawioną wyższą wartość stężenia glukozy we krwi. 2. Kiedy jesz dodatkowe węglowodany przy hipo, poziom glukozy we krwi wzrośnie bardzo szybko. Pętla będzie przeciwdziałać takiemu wzrostowi a w sytuacji korzystania z SMB poda mikro bolusa. "Hipo cel tymczasowy" może temu zapobiec. 3. (zaawansowane, zadanie 8): Możesz włączyć "Wysoki cel tymczasowy zwiększa wrażliwość" dla celu tymczasowego 100 mg/dl lub 5,5mmol/l lub większego w OpenAPS SMB, w związku z tym AndroidAPS jest bardziej wrażliwy. 4. (zaawansowane, zadanie 8): Możesz dezaktywować "Włącz SMB z wysokim celem tymczasowym", więc nawet jeśli masz COB> 0, aktywne "Włącz SMB z tymczasowym poziomem docelowym" lub "Włącz SMB (Super Mikro Bolus) zawsze" i OpenAPS SMB także włączone, AndroidAPS nie będzie podawać SMB, gdy aktywne są wysokie cele tymczasowe.

Uwaga: jeśli wpiszesz węglowodany z przyciskiem WĘGLOWOD., a poziom glukozy we krwi jest mniejszy niż 72 mg/dl lub 4 mmol/l, funkcja Hipo cel tymczasowy zostanie automatycznie włączona.

## Ćwiczenia Cel tymczasowy

Przed i w trakcie aktywności możesz chcieć mieć wyższy cel, aby uniknąć spadku. Aby uprościć ustawienie celu tymczasowego, możesz skonfigurować domyślną wartość dla "Ćwiczenia cel tymczasowy".

Zaawansowane, zadanie 8: Zalety dotyczące "Ćwiczenia cel tymczaoswoy", to to, że możesz włączyć "Wysoki tymczasowy cel zwiększy wrażliwość" dla celi tymczasowych wyższych lub równych 100mg/dl lub 5.5mmol/L w OpenAPS SMB. Z tego względy AndroidAPS jest bardziej wrażliwy. Niektórzy ludzie zamiast tego zmieniają profil przed/podczas aktywności TT, jednak każdy jest inny. Jeśli " Włącz SMB z wysokkim celem tymczaoswym" jest dezaktywowane, AndroidAPS nie będzie używał SMB, nawet z COB > 0, "Włącz SMB z tymczasowym poziomem docelowym" lub "Wlącz SMB (Super Mikro Bolusy) zawsze" aktywne i OpenAPS SMB także aktywne.

## Wkrótce posiłek Cel tymczasowy

Jeśli wiesz, że chcesz wkrótce zjeść, możesz włączyć ten cel tymczasowy, więc dzięki temu będzie więcej IOB przed jedzeniem. Specjalnie dla tych, którzy nie robią pre-bolusów, może to być dobra alternatywa, aby obniżyć poziom glukozy we krwi. Więcej informacji na temat "Tryb szybkiego jedzenia" można znaleźć w artykule [ ""Jak zrobić" tryb szybkiego jedzenia"](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) lub [ tutaj ](https://diyps.org/tag/eating-soon-mode/).

Zaawansowane, zadanie 8: Jeśli korzystasz z OpenAPS SMB i masz włączone "Niski tymczasowy cel zmniejszy wrażliwość", AndroidAPS działa trochę agresywniej. Wymaganie dla tej opcji to cel tymczasowy mniejszy niż 100 mg/dl lub 5,5 mmol/l.

## Niestandardowy Cel tymczasowy

Czasami po prostu chcesz mieć cel tymczasowy inny niż domyślny. Możesz go ustawić przez naciśnięcie i przytrzymanie przycisku cel (zakres) w prawym górnym rogu w zakładce Przegląd lub w zakładce Akcje.