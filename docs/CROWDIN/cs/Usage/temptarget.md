# Dočasné cíle

## Dočasné cíle a jejich nastavení

Použitím dočasných cílů (DC) lze na přechodnou dobu změnit cílovou hodnotu glykémie. Funkcionalita je využívána nejčastěji ve spojitosti s vyšší tělesnou aktivitou, hypoglykémií nebo s blížícím se jídlem a v systému lze provést nastavení hodnot pro jejich opakované použití. Toto nastavení lze provést v menu v části Nastavení -> Jiné -> Výchozí nastavení dočasných cílů. Samotnou změnu dočasného cíle lze provést stisknutím a přidržením políčka zobrazujícím aktuální cíl v pravém horním rohu hlavní obrazovky AAPS nebo pomocí tlačítka Sacharidy v dolní části téže obrazovky a nebo na záložce Akce tlačítkem Dočasný cíl. Vzhledem k tomu, že dočasné cíle jsou většinou potřebné pro aktivitu, hypoglykémii (dokrmové sacharidy) nebo blížící se jídlo, můžete pro ně nastavit výchozí hodnoty. Chcete-li je nakonfigurovat, přejděte pomocí nabídky v horním pravém rohu do Nastavení -> Jiné -> Výchozí nastavení dočasných cílů.

![Nastavit výchozí dočasné cíle](../images/TempTarget_Default.png)

Chcete-li nastavit „Výchozí dočasný cíl“, můžete tak učinit přidržením cíle v pravém horním rohu hlavní obrazovky nebo pomocí oranžového tlačítka „Sacharidy“. To manually set a [“Custom Temp-Target”](../Usage/temptarget#custom-temp-target) (BG value and/or duration) use “Custom“ after long-pressing your target in the top right corner or use the “Temporary Target“ button in the [actions tab / menu](../Configuration/Config-Builder#actions).

![Spustit dočasný cíl](../images/TempTarget_Set2.png)

## Dočasný cíl při hypoglykémii

Jde o nejdůležitější dočasný cíl. A to hned z několika důvodů:

1. Uvědomíte si, že vaše glykémie bude klesat: Obvykle by si s tím měla smyčka poradit, ovšem někdy to budete vědět dříve než smyčka, takže smyčka bude moci reagovat rychleji, když se bude opírat o vyšší cílovou hodnotu glykémie.
2. Když sníte dokrmové sacharidy, vaše glykémie bude rychle stoupat. Smyčka se bude snažit tento vzestup korigovat nebo vám dokonce vydá SMB, jsou-li povoleny. „Dočasný cíl při hypoglykémii“ takovému chování dokáže zabránit. 
3. (advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): You can enable “High Temp-Targets raises sensitivity” for Temp-Targets of 100mg/dl or 5.5mmol/l or higher in OpenAPS SMB, so AndroidAPS is more sensitive.
4. (advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): You can deactivate “SMB with high temp target”, so that even if you have COB > 0, "SMB with Temp-Target" or "SMB always" enabled and OpenAPS SMB active, AndroidAPS won’t give SMBs while high temp targets are active. 

Poznámka: při přídavku sacharidů pomocí tlačítka Sacharidy na hlavní obrazovce AAPS a současně glykémii pod 4 mmol/l (72 mg/dl) je dočasný cíl při hypoglykémii aktivován automaticky.

## Dočasný cíl při pohybové aktivitě

Před pohybovou aktivitou a během ní můžete předcházet poklesu glykémie nastavením vyššího dočasného cíle. Pro zjednodušení spuštění dočasného cíle lze hodnotu cíle v systému předdefinovat v Nastavení -> Výchozí nastavení dočasných cílů -> Cíl při aktivitě spolu s trváním aktivity. Chcete-li si zjednodušit nastavení dočasného cíle, můžete nastavit výchozí „Dočasný cíl při aktivitě“. Based on DIA, IOB and your experience you might want to set TT prior to activity. See also [sports section in FAQ](../Getting-Started/FAQ#sports).

Advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): The advantages about “Activity Temp-Target”, is that you can enable “High Temp-Targets raises sensitivity” for Temp-Targets higher or equal 100mg/dl or 5.5mmol/L in OpenAPS SMB. AndroidAPS pak bude citlivější. Někdo místo dočasného cíle před aktivitou nebo během ní přepíná profil, ale každý jsme jiný. Pokud jsou SMB s vyšším dočasným cílem deaktivovány, AAPS nepoužije SMB, přestože bude COB > 0, budou povoleny SMB s dočasnými cíli, povoleny SMB obecně a funkce OpenAPS SMB budou aktivovány.

## Dočasný cíl pro blížící se jídlo

Pokud víte, že budete brzy jíst, můžete zvolit tento dočasný cíl, abyste měli již před jídlem vyšší IOB. Zejména pro ty, kdo neaplikují bolus s předstihem, může být dobrou alternativou snížit glykémii před jídlem pomocí dočasného cíle. Více informací o „Blížícím se jídle“ najdete v článku ['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) nebo [zde](https://diyps.org/tag/eating-soon-mode/).

Advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): If you use OpenAPS SMB and have “Low temptarget lowers sensitivity”, AndroidAPS works a little bit more aggressive. Chcete-li tuto možnost využít, dočasný cíl musí být nižší než 5,5 mmol/l.

## Vlastní dočasný cíl

Někdy je vhodné si nastavit vlastní dočasné cíle. Tento cíl můžete nastavit přidržením cíle (rozsah) v pravém horním rohu obrazovky Přehled nebo na kartě „Akce“.

![Nastavit dočasný cíl přes kartu Akce](../images/TempTarget_ActionTab.png)