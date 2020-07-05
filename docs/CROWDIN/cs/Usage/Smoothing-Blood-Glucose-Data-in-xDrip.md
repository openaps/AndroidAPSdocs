# Vyhlazování zarušených dat glykémií

Pokud glykémie poskakují, může AAPS nesprávně poslat dávku inzulinu vedoucí k vysoké nebo nízké glykémii. Z tohoto důvodu je důležité deaktivovat smyčku, dokud se problém nevyřeší. V závislosti na Vašem CGM mohou být tyto problémy způsobeny konfigurací CGM nebo problémy se senzorem/umístěním. You may need to replace your CGM sensor to resolve this. Některé funkce, jako je "Vždy povolit SMB" a "Povolit SMB po jídle" lze použít pouze s filtrovaným zdrojem glykémií.

## Dexcom G5 aplikace (upravená)

Používáte-li aplikaci upravenou aplikaci Dexcom G5 data jsou vyrovnaná a konsistentní. V tom případě nejsou žádná omezení v použití SMB.

## xDrip+ s Dexcom G5

Smooth enough data is only delivered if you use xDrip+ G5 'OB1 collector in native mode'.

## xDrip+ s Freestyle Libre

Při použití xDrip+ zdroje dat z Freestyle Libre nelze aktivovat funkce "Vždy povolit SMB" a "Povolit SMB po jídle" do SMB, protože hodnoty BG nejsou dostatečně vyrovnané. Existuje několik způsobů, jak snížit šum v BG datech.

**Smooth Sensor Noise.** v xDrip+ Nastavení > xDrip+ Nastavení zobrazení se ujistěte, že je Smooth Sensor Noise volba zapnutá. Tímto se xDrip+ pokusí vyhladit data s velkým šumem.

**Smooth Sensor Noise (Ultrasensitive).** Jestliže v xDrip+ stále vidíte data s velkým šumem, můžete použít agresivnější vyhlazování použitím nastavení Smooth Sensor Noise (Ultrasensitive). Tímto se xDrip+ pokusí použít vyhlazování i pro velmi nízké hodnoty detekovaného šumu. To provedete tak, že nejprve [povolíte Engineering mode v xDrip+](https://github.com/MilosKozak/AndroidAPS/wiki/Enabling-Engineering-Mode-in-xDrip). Pak jděte v xDrip+ do Nastavení > Nastavení zobrazení a zapněte Smooth Sensor Noise (Ultrasensitive).