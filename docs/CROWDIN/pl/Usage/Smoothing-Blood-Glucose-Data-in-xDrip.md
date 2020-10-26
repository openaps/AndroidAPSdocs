# Wygładzanie danych dotyczących poziomu glukozy we krwi

If BG data is jumpy/noisy, AAPS may dose insulin incorrectly resulting in high or low BG. For this reason it’s important to disable the loop until the problem is resolved. Depending on your CGM such issues may be due to the CGM’s configuration or sensor problems/site issues. You may need to replace your CGM sensor to resolve this. Some features like 'Enable SMB always' and 'Enable SMB after carbs' can only be used with a nice-filtering BG source.

## DexcomG5 App (patched)

Podczas korzystania z aplikacji Dexcom G5 (patched) twoje dane BG są gładkie i spójne. Nie ma ograniczeń w korzystaniu z SMB.

## xDrip+ z Dexcom G5

Smooth enough data is only delivered if you use xDrip+ G5 'OB1 collector in native mode'.

## xDrip + z Freestyle Libre

Używając xDrip+ jako źródła danych z Freestyle Libre jak dotąd nie możesz aktywować opcji "Wlącz SMB (Super Mikro Bolusy) zawsze" i "Włącz SMB po węglowodanach", ponieważ wartości BG nie są wystarczająco wygładzone. Jednak istnieje kilka sposobów, dzięki którym możesz zmniejszyć poziom szumu w danych.

**Smooth Sensor Noise.** W xDrip+ Settings > xDrip+ Display Settings Upewnij się, że Smooth Sensor Noise jest włączony. To ustawienie pozwala zastosować wygładzanie zaszumionych danych.

**Smooth Sensor Noise (Ultrasensitive).** Jeśli nadal widzisz zaszumione dane w xDrip_ możesz zastosować bardziej agresywne wygładzanie, używając ustawienia Smooth Sensor Noise (Ultrasensitive). To spróbuje zastosować wygładzanie nawet przy bardzo niskim poziomie wykrytego szumu. To do this, first enable engineering mode in xDrip+. Następnie przejdź do Ustawienia> xDrip + Ustawienia wyświetlania i włącz Smooth Sensor Noise (Ultrasensitive).