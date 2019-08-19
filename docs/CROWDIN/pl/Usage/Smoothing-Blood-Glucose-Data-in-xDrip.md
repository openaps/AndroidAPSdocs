# Wygładzanie danych dotyczących poziomu glukozy we krwi

AAPS działa najlepiej, jeśli otrzymane dane dotyczące poziomu glukozy we krwi są "gładkie" i spójne. Niektóre funkcje, takie jak "Wlącz SMB (Super Mikro Bolusy) zawsze" i "Włącz SMB po węglowodanach", mogą być używane tylko z silnie filtrującym źródłem BG.

## DexcomG5 App (patched)

Podczas korzystania z aplikacji Dexcom G5 (patched) twoje dane BG są gładkie i spójne. Nie ma ograniczeń w korzystaniu z SMB.

## xDrip+ z Dexcom G5

Odpowiednio wygładzone dane są dostarczane tylko wtedy, gdy korzystasz z xDrip G5 "OB1 collector in native mode".

## xDrip + z Freestyle Libre

Używając xDrip+ jako źródła danych z Freestyle Libre jak dotąd nie możesz aktywować opcji "Wlącz SMB (Super Mikro Bolusy) zawsze" i "Włącz SMB po węglowodanach", ponieważ wartości BG nie są wystarczająco wygładzone. Jednak istnieje kilka sposobów, dzięki którym możesz zmniejszyć poziom szumu w danych.

**Smooth Sensor Noise.** W xDrip+ Settings > xDrip+ Display Settings Upewnij się, że Smooth Sensor Noise jest włączony. To ustawienie pozwala zastosować wygładzanie zaszumionych danych.

**Smooth Sensor Noise (Ultrasensitive).** Jeśli nadal widzisz zaszumione dane w xDrip_ możesz zastosować bardziej agresywne wygładzanie, używając ustawienia Smooth Sensor Noise (Ultrasensitive). To spróbuje zastosować wygładzanie nawet przy bardzo niskim poziomie wykrytego szumu. Aby to zrobić najpierw [włącz tryb inżynieryjny w xDrip+](../Enabling-Engineering-Mode-in-xDrip.md). Następnie przejdź do Ustawienia> xDrip + Ustawienia wyświetlania i włącz Smooth Sensor Noise (Ultrasensitive).