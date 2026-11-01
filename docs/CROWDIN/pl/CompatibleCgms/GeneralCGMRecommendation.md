# Ogólne zasady używania systemów CGM

## Higiena CGM

Niezależnie od tego, jakiego systemu CGM używasz, jeśli zamierzasz korzystać z kalibracji opartej na krwi, istnieją pewne bardzo jasne zasady, które powinieneś zastosować, niezależnie od tego, czy używasz oprogramowania DIY CGM, czy oficjalnych aplikacji.

-   Upewnij się, że ręce i zestaw są czyste.
-   Kalibruj, gdy masz serię kropek z płaską strzałką (zwykle wystarcza 15–30 minut)
-   Unikaj kalibracji, gdy poziom glukozy zmienia się w górę lub w dół.
-   Wykonuj „wystarczająco dużo” kalibracji – oficjalne aplikacje poproszą Cię o sprawdzenie raz lub dwa razy dziennie. Systemy DIY mogą o to nie prosić, więc uważaj, jeśli używasz ich dalej bez kalibracji.
-   Przy sensorach, które nie wymagają kalibracji albo jej nie pozwalają, co najmniej raz dziennie sprawdzaj prawdziwą glikemię z krwi. AAPS jest tak bezpieczny, jak wiarygodne są odczyty Twojego sensora.
-   If at all possible, calibrate with some of your readings in a lower range (4-5mmol/L or 72-90mg/dL) and some at a slightly higher level (7-9mmol/L or 126-160mg/dL) as this provides a better range for the point/slope calibration.

## Zakładanie sensora (G6)

Przy zakładaniu sensora zalecamy nie dociskać aplikatora zbyt mocno, aby uniknąć krwawienia. Styki sensora nie powinny mieć kontaktu z krwią.

Po założeniu sensora możesz wpiąć nadajnik w uchwyt sensora. Uwaga! Najpierw wepnij stronę kwadratową, a potem dociśnij stronę okrągłą.

(general-cgm-troubleshooting)=
## Rozwiązywanie problemów

### Problemy z połączeniem

Połączenie Bluetooth mogą zakłócać inne urządzenia Bluetooth w pobliżu, np. glukometry, słuchawki, tablety, a także urządzenia kuchenne, takie jak kuchenki mikrofalowe czy płyty ceramiczne. W takim przypadku xDrip nie pokazuje żadnych wartości BG. Gdy połączenie Bluetooth wróci, brakujące dane zostaną uzupełnione.

### Błędy sensora

Jeśli błędy sensora się powtarzają, spróbuj założyć sensor w innym miejscu na ciele. Styki sensora nie powinny mieć kontaktu z krwią.

Często „Sensor Error” (błąd sensora) można naprawić, od razu pijąc wodę i masując okolice sensora!

### Skokowe zmiany wartości

Możesz spróbować zmienić ustawienia blokowania szumów w xDrip (Settings - Inter-App Settings - Noise Blocking), np. na „Block Very High noise and worse”. Zobacz też [Wygładzanie danych dotyczących poziomu glukozy we krwi](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Ujemny wiek sensora

![Wiek sensora w wierszu Sensor rozwiniętego panelu stanu](../images/main/main_status_row_expanded.png)

Wiek sensora jest widoczny w wierszu **Sensor** panelu stanu na ekranie głównym (stuknij strzałkę, aby go rozwinąć). A negative age occurs if there is either a double "Sensor Insert" [careportal entry](#aaps-screens-careportal) or a sensor insert with wrong date. Otwórz **Historia leczenia** (menu ☰), wybierz kartę **Portal opieki** i usuń błędny wpis.
