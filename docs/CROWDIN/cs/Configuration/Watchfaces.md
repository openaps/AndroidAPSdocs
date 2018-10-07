# Hodinky

AndroidAPS je navržený, aby ho bylo možné *ovládat* hodinkami Android Wear. Abyste toho dosáhli, potřebujete nejdříve zvolit variantu sestavení "fullRelease" při sestavování APK [odkaz](../Installing-AndroidAPS/Building-APK.md) (nebo "pumpRelease", což vám umožní jenom vzdáleně ovládat pumpu bez smyčky). V rámci aplikace AndroidAPS v záložce "Konfigurace" pak povolte plugin "Wear". Nastavení si můžete zpřístupnit kliknutím na ozubené kolo. Pokud chcete z hodinek posílat bolusy apod., pak v rámci Wear nastavení potřebujete povolit "Řízení z hodinek Wear".

Na výběr je několik watchface, které zahrnují průměrnou změnu glykémie, IOB, právě aktivní dočasnou bazální dávku a bazální profil + graf glykémií přečtených ze senzoru. AAPS aplikaci na hodinkách můžete použít také pro nastavení dočasného cíle, odeslání bolusu, využití bolusového kalkulátoru, plnění kanyly/setu a také pro kontrolu stavu smyčky a pumpy. Ujistěte se, že notifikace od AndroidAPS nejsou na hodinkách blokované. Potvrzování akcí (např. bolusu, dočasného cíle) přichází skrze notifikace, které je nutné odsunout (swipe) a potvrdit klepnutím (tick). Abyste se rychleji dostali do menu AAPS, dvakrát klepněte na hodnotu vaši glykémie. Když budete dvakrát klepat na glykemickou křivku, budou se ukazovat staré/nové hodnoty glykémií.

## Troubleshooting the wear app:

* Na Android Wear 2.0 se watchface už neinstaluje automaticky. Nyní je nutné přejít do playstore na hodinkách (odlišný playstore od toho na telefonu) a najít kategorii aplikací nainstalovaných na telefonu, ze které pak můžete watchface aktivovat. Také povolte automatické aktualizace. 
* Někdy pomůže znovu sesynchronizovat aplikace do hodinek, i když to ručně může být poněkud zdlouhavé: Android wear > Ikona ozubeného kola > Název hodinek > Synchronizovat aplikace.
* Povolte ADB ladění ve vývojářských možnostech (na hodinkách), připojte hodinky k počítači přes USB a spusťte Wear aplikaci, až budete mít na počítači otevřené Android Studio.

## Legend AndroidAPSv2 watchface

![Legend AndroidAPSv2 watchface](../images/AAPSv2_Watchface_legend.png)

A - time since last loop run

B - CGM reading

C - minutes since last CGM reading

D - change compared to last CGM reading (in mmol or mg/dl)

E - average change CGM reading last 15 minutes

F - phone battery

G - BGI (blood glucose interaction) -> the degree to which BG “should” be rising or falling based on insulin activity alone.

H - basal rate (shown in U/h during standard rate and in % during TBR)

I - carbs (carbs on board | e-carbs in the future)

J - insulin on board (from bolus | from basal)

## View Nightscout data

If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". Na výběr je několik watchface, které zahrnují průměrnou změnu glykémie, IOB, právě aktivní dočasnou bazální dávku a bazální profil + graf glykémií přečtených ze senzoru.

## Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.