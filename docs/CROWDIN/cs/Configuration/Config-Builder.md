# Konfigurace

Konfigurace (Conf) je záložka, kde si zapínáte, nebo vypínáte jednotlivé moduly. Boxy (čtverečky) po levé straně vybíráte, které chcete použít, boxy po pravé straně vybírate, které z nich budou v záložkách v AndroidAPS. Tam kde je dostupné podrobnější nastavení modulu, můžete ťuknout na ozubené kolečko abyste se dostali do podrobnějšího nastavení bez vstupu do Nastavení.

**First configuration:** Since AAPS 2.0 a Setup wizard guides you through the process of setting up AndroidAPS. Push 3-dots-menu on the upper right hand side of the screen and select 'Setup Wizard' to use it.

## Profil

Select the basal profile you wish to use:

* **NS profil** používá profily, které jste uložili na webu nightscout (https://[adresavašehoprofilu]/profile). Můžete použít Přepnout profil pro změnu profilu, který je aktivní. Ten bude zapsán do pumpy v případě výpadku AndroidAPS.
* **Jednoduchý profil** profil s jedním časovým blokem (to znamená žádné změny bazálu během dne)
* **Local Profile** uses the basal profile manually entered in phone. See [[Profiles]] page for more setup information.

## Inzulín

Select the type of insulin curve you are using. Basic AndroidAPS options are bilinear 'Fast Acting Insulin' for an insulin with DIA of less than 5 hours, or 'Fast Acting Insulin Prolonged' for an insulin with DIA of greater than 5 hours. These curves will only vary based on the duration of the DIA. The Oref options 'Rapid-Acting Oref', Ultra-Rapid Oref' and 'Free-Peak Oref' are exponential and more information is listed in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves), the curves will vary based on the DIA and the time to peak. You will need to enter additional settings for these. You can view the insulin curve graph on the Insulin (Ins) tab to help you understand which curve fits you.

## Zdroj glykémií

Select the blood glucose source you are using - see [[BG Source]] page for more setup information.

## Pumpy

Select the pump you are using. For people wanting to open loop this needs to be 'Virtual Pump'. See [[DanaR Insulin Pump]], [[DanaRS Insulin Pump]] or [[Accu Chek Combo Pump]] pages for more setup information.

## Detekce citlivosti

Select the type of sensitivity detection. This will analyse historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. Details about the Sensitivity Oref0 algorithm can be read in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode). You can view your sensistivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 6](../Usage/Objectives) in order to use Sensitivity Detection/autosens.

## APS

Select either OpenAPS MA (meal assist) or OpenAPS AMA (advanced meal assist). More detail about OpenAPS AMA can be found in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama); in simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab. Note you need to be in [Objective 7](../Usage/Objectives) in order to use OpenAPS AMA.

## Smyčka

If you wish to use open or closed looping you will need to enable this here. You can see the active request and success of enactment in the Loop tab.

## Omezení

If you view the Objectives (Obj) tab, you can see more information about how far you have progressed and what actions you still need to complete. See [[Objectives]] page for more information.

## Ošetření

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the Careportal (CP) tab.

## Obecné

* **Akce** umožňuje přepnutí profilu (Viz stránka [[Profiles]] pro další informace o nastavení), změnu dočasného cíle, a pro ty kteří využívají pumpu DanaR/RS nebo Combo nastavení TBR nebo plnění kanyly.
* **Péče** umožňuje zaznamenávat všechny konkrétní položky týkající se péče a zobrazit stáří senzoru, zásobníku inzulínu, kanyly a baterie v pumpě v záložce Péče.
* **SMS komunikátor** umožňuje vzdálené ovládání některých funkcí AndroidAPS prostřednictvím SMS, viz [[SMS Commands]] pro další informace o nastavení.
* **Jídlo** umožňuje prohlížet a používat databázi potravin uloženou na Nightscoutu, viz [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) pro další informace o nastavení nebo http://[adresavašehoprofilu]/food pro přístup k databázi.
* **Wear** allows you to view and control AndroidAPS from the Android Wear watch, see [[watchfaces]] for more setup information.
* **xDrip Statusline (watch)** Display loop information on your xDrip+ watchface
* **Ongoing Notification** displays a summary of current BG, delta, active TBR%, active basal u/hr and profile, IOB and split into bolus IOB and basal IOB on the phones dropdown screen and phonelock screen.
* **NS Client** Setup sync of your AndroidAPS data with Nightscout