# Så ställer du in en Huawei-telefon

**Telefoner som sidan gäller:** Huawei-telefoner med **EMUI 12 till EMUI 15**. Alla dessa bygger på Android 12, som är minimikravet för den aktuella versionen av **AAPS**. På en telefon med en äldre EMUI-version kan du bara använda en [äldre AAPS-version](#maintenance-android-version-aaps-version).

```{admonition} Telefoner med HarmonyOS NEXT / HarmonyOS 5 :class: warning

Nya Huawei-telefoner som säljs i Kina kör HarmonyOS NEXT (HarmonyOS 5 och senare). Det systemet är inte längre Android och kan inte köra **AAPS**. ```

Huawei-telefoner stänger appar som körs i bakgrunden mycket aggressivt. Gör alla inställningar nedan för **AAPS** och för din CGM-app (till exempel xDrip+ eller Juggluco), annars kan loopen och glukosvärdena stoppa när skärmen är avstängd.

Menynamnen kan skilja sig något mellan modeller. Om du inte hittar en inställning, skriv dess namn i sökfältet högst upp i **Inställningar**.

Skärmbilderna nedan kommer från en äldre EMUI-version. Inställningarna är desamma i EMUI 12 till 15.

## Ignorera batterioptimering

1. Öppna **Inställningar > Appar > Appar**.
2. Tryck på menyn **⋮** uppe till höger och välj **Särskild åtkomst > Batterioptimering**.
3. Tryck på pilen högst upp i listan och välj **Alla appar**.
4. Välj **AAPS** och sedan **Tillåt inte**. Huawei optimerar inte längre appar i den här listan.
5. Gör samma sak för din CGM-app.

![Huawei - ignorera batterioptimering](../images/Huawei_BatteryOptimization.png)

## Appstart: tillåt körning i bakgrunden

1. Öppna **Inställningar > Batteri > Appstart** (eller **Inställningar > Appar > Appar >** välj appen **> Batteri > Appstart**).
2. Leta upp **AAPS** och stäng av **Hantera automatiskt**.
3. I fönstret **Hantera manuellt** slår du på alla tre alternativen: 
    - **Automatisk start**
    - **Sekundär start** (kan startas av andra appar)
    - **Kör i bakgrunden**
4. Gör samma sak för din CGM-app.

![Huawei - batterialternativ](../images/Huawei_BatteryOptions.png)

## Lås AAPS i listan med senaste appar

Låsta appar stängs inte när du rensar listan med senaste appar.

1. Öppna listan med senaste appar.
2. Svep nedåt på kortet för **AAPS**. En låssymbol visas på kortet.
3. Gör samma sak för din CGM-app.

![Huawei - lås appen](../images/Huawei_LockApp.png)

## Energisparläge

Håll **Energisparläge** och **Ultraenergisparläge** avstängda (**Inställningar > Batteri**). De stänger appar i bakgrunden oavsett inställningarna ovan.

## Om AAPS ändå stoppar i bakgrunden

Se [Don't kill my app](https://dontkillmyapp.com/huawei) för fler lösningar som gäller Huawei.

## Honor-telefoner

Honor är nu ett eget varumärke och dess telefoner kör MagicOS i stället för EMUI. Bakgrundsinställningarna är mycket lika: leta efter **Appstart** i appens batteriinställningar, stäng av **Hantera automatiskt** och tillåt alla tre alternativen. Ta sedan bort appen från batterioptimering.