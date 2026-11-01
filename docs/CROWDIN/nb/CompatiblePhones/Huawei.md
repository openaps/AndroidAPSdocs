# Slik setter du opp en Huawei-telefon

**Hvilke telefoner denne siden dekker:** Huawei-telefoner med **EMUI 12 til EMUI 15**. Alle disse er basert på Android 12, som er minstekravet for den gjeldende versjonen av **AAPS**. På en telefon med en eldre EMUI-versjon kan du bare bruke en [eldre AAPS-versjon](#maintenance-android-version-aaps-version).

```{admonition} Telefoner med HarmonyOS NEXT / HarmonyOS 5 :class: warning

Nyere Huawei-telefoner som selges i Kina, kjører HarmonyOS NEXT (HarmonyOS 5 og nyere). Dette systemet er ikke lenger Android og kan ikke kjøre **AAPS**. ```

Huawei-telefoner lukker apper som kjører i bakgrunnen, svært aggressivt. Bruk alle innstillingene nedenfor på **AAPS** og på CGM-appen din (for eksempel xDrip+ eller Juggluco). Ellers kan loopen og glukosemålingene stoppe når skjermen er av.

Menynavnene kan variere litt mellom modeller. Hvis du ikke finner en innstilling, skriv navnet på den i søkefeltet øverst i **Innstillinger**.

Skjermbildene nedenfor er fra en eldre EMUI-versjon. Innstillingene er de samme på EMUI 12 til 15.

## Ignorer batterioptimalisering

1. Åpne **Innstillinger > Apper > Apper**.
2. Trykk på menyen **⋮** øverst til høyre, og velg **Spesialtilgang > Batterioptimalisering**.
3. Trykk på pilen øverst i listen, og velg **Alle apper**.
4. Velg **AAPS**, og velg **Ikke tillat**. Huawei vil ikke lenger optimalisere appene i denne listen.
5. Gjenta for CGM-appen din.

![Huawei – ignorer batterioptimalisering](../images/Huawei_BatteryOptimization.png)

## Appstart: tillat kjøring i bakgrunnen

1. Åpne **Innstillinger > Batteri > Appstart** (eller **Innstillinger > Apper > Apper >** velg appen **> Batteri > Appstart**).
2. Finn **AAPS**, og slå av **Administrer automatisk**.
3. I vinduet **Administrer manuelt**, slå på alle tre valgene: 
    - **Automatisk start**
    - **Sekundær start** (kan startes av andre apper)
    - **Kjør i bakgrunnen**
4. Gjenta for CGM-appen din.

![Huawei – batterialternativer](../images/Huawei_BatteryOptions.png)

## Lås AAPS i listen over nylige apper

Låste apper lukkes ikke når du tømmer listen over nylige apper.

1. Åpne listen over nylige apper.
2. Sveip ned på **AAPS**-kortet. Et låsesymbol vises på kortet.
3. Gjør det samme for CGM-appen din.

![Huawei – lås app](../images/Huawei_LockApp.png)

## Strømsparingsmodus

La **Strømsparingsmodus** og **Ultra strømsparing** være slått av (**Innstillinger > Batteri**). De lukker bakgrunnsapper uansett innstillingene ovenfor.

## Hvis AAPS fortsatt stopper i bakgrunnen

Se [Don't kill my app](https://dontkillmyapp.com/huawei) for flere løsninger som gjelder Huawei.

## Honor-telefoner

Honor er nå et eget merke, og telefonene deres kjører MagicOS i stedet for EMUI. Bakgrunnsinnstillingene er svært like: se etter **Appstart** i batteriinnstillingene til appen, slå av **Administrer automatisk** og tillat alle tre valgene, og fjern så appen fra batterioptimalisering.