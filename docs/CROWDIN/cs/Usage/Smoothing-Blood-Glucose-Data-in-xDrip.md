# Vyhlazování zarušených dat glykémií

If BG data is jumpy/noisy, AAPS may dose insulin incorrectly resulting in high or low BG. For this reason it’s important to disable the loop until the problem is resolved. Depending on your CGM such issues may be due to the CGM’s configuration or sensor problems/site issues. Some features like 'Enable SMB always' and 'Enable SMB after carbs' can only be used with a nice-filtering BG source.

## Dexcom G5 aplikace (upravená)

Používáte-li aplikaci upravenou aplikaci Dexcom G5 data jsou vyrovnaná a konsistentní. V tom případě nejsou žádná omezení v použití SMB.

## xDrip+ s Dexcom G5

Dostatečně plynulá data jsou doručena jedině v případě, že používáte xDrip G5 OB1 kolektor v nativním módu (OB1 collector in native mode).

## xDrip+ s Freestyle Libre

Při použití xDrip+ zdroje dat z Freestyle Libre nelze aktivovat funkce "Vždy povolit SMB" a "Povolit SMB po jídle" do SMB, protože hodnoty BG nejsou dostatečně vyrovnané. Existuje několik způsobů, jak snížit šum v BG datech.

**Smooth Sensor Noise.** v xDrip+ Nastavení > xDrip+ Nastavení zobrazení se ujistěte, že je Smooth Sensor Noise volba zapnutá. Tímto se xDrip+ pokusí vyhladit data s velkým šumem.

**Smooth Sensor Noise (Ultrasensitive).** Jestliže v xDrip+ stále vidíte data s velkým šumem, můžete použít agresivnější vyhlazování použitím nastavení Smooth Sensor Noise (Ultrasensitive). Tímto se xDrip+ pokusí použít vyhlazování i pro velmi nízké hodnoty detekovaného šumu. To provedete tak, že nejprve [povolíte Engineering mode v xDrip+](https://github.com/MilosKozak/AndroidAPS/wiki/Enabling-Engineering-Mode-in-xDrip). Pak jděte v xDrip+ do Nastavení > Nastavení zobrazení a zapněte Smooth Sensor Noise (Ultrasensitive).