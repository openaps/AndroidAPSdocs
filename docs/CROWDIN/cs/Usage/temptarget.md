# Dočasné cíle

## Dočasné cíle a jejich nastavení

Použitím dočasných cílů (DC) lze na přechodnou dobu změnit cílovou hodnotu glykémie. Funkcionalita je využívána nejčastěji ve spojitosti s vyšší tělesnou aktivitou, hypoglykémií nebo s blížícím se jídlem a v systému lze provést nastavení hodnot pro jejich opakované použití. Toto nastavení lze provést v menu v části Nastavení -> Jiné -> Výchozí nastavení dočasných cílů. Samotnou změnu dočasného cíle lze provést stisknutím a přidržením políčka zobrazujícím aktuální cíl v pravém horním rohu hlavní obrazovky AAPS nebo pomocí tlačítka Sacharidy v dolní části téže obrazovky a nebo na záložce Akce tlačítkem Dočasný cíl. Vzhledem k tomu, že dočasné cíle jsou většinou potřebné pro aktivitu, hypoglykémii (dokrmové sacharidy) nebo blížící se jídlo, můžete pro ně nastavit výchozí hodnoty. Chcete-li je nakonfigurovat, přejděte pomocí nabídky v horním pravém rohu do Nastavení -> Jiné -> Výchozí nastavení dočasných cílů.

![Nastavit výchozí dočasné cíle](../images/TempTarget_Default.png)

Chcete-li nastavit „Výchozí dočasný cíl“, můžete tak učinit přidržením cíle v pravém horním rohu hlavní obrazovky nebo pomocí oranžového tlačítka „Sacharidy“. Chcete-li ručně nastavit položku ["Vlastní dočasný cíl"](../Usage/temptarget#custom-temp-target) (hodnota glykémie a/nebo dobu trvání), použijte tlačítko "Vlastní" po dlouhém stisku svého cíle v pravém horním rohu nebo použijte tlačítko "Dočasný cíl" na kartě Akce.

![Spustit dočasný cíl](../images/TempTarget_Set2.png)

## Dočasný cíl při hypoglykémii

Jde o nejdůležitější dočasný cíl. A to hned z několika důvodů: 1. Uvědomíte si, že vaše glykémie bude klesat: Obvykle by si s tím měla smyčka poradit, ovšem někdy to budete vědět dříve než smyčka, takže smyčka bude moci reagovat rychleji, když se bude opírat o vyšší cílovou hodnotu glykémie. 2. Když sníte dokrmové sacharidy, vaše glykémie bude rychle stoupat. Smyčka se bude snažit tento vzestup korigovat nebo vám dokonce vydá SMB, jsou-li povoleny. „Dočasný cíl při hypoglykémii“ takovému chování dokáže zabránit. 3. (pokročilé, cíl 8): Pro dočasné cíle vyšší než 5,5 mmol/l můžete v nastavení OpenAPS SMB povolit možnost „Vysoký dočasný cíl zvýší citlivost“, takže AndroidAPS bude citlivější. 4. (pokročilé, cíl 8): Můžete deaktivovat možnost „Povolit SMB s vysokými dočasnými cíli“, takže i když máte COB > 0, možnost „Povolit SMB s dočasnými cíli“ nebo „Vždy povolit SMB“ je povolena a OpenAPS SMB aktivní, AndroidAPS nebude spouštět SMB, je-li aktivní vysoký dočasný cíl.

Poznámka: při přídavku sacharidů pomocí tlačítka Sacharidy na hlavní obrazovce AAPS a současně glykémii pod 4 mmol/l (72 mg/dl) je dočasný cíl při hypoglykémii aktivován automaticky.

## Dočasný cíl při pohybové aktivitě

Před pohybovou aktivitou a během ní můžete předcházet poklesu glykémie nastavením vyššího dočasného cíle. Pro zjednodušení spuštění dočasného cíle lze hodnotu cíle v systému předdefinovat v Nastavení -> Výchozí nastavení dočasných cílů -> Cíl při aktivitě spolu s trváním aktivity. Chcete-li si zjednodušit nastavení dočasného cíle, můžete nastavit výchozí „Dočasný cíl při aktivitě“.

Pokročilé nastavení, po splnění 8. cíle: Výhodou dočasného cíle při pohybové aktivitě je možnost současného nastavení vyšší senzitivity pro dočasné cíle 5,5 mmol/l (100 mg/dl) a vyšší. Nastavení lze provést v záložce Konfigurace -> OpenAPS SMB. Někteří uživatelé namísto nastavení dočasného cíle před pohybovou aktivitou nebo během ní přepnou profil. AndroidAPS pak bude citlivější. Někdo místo dočasného cíle před aktivitou nebo během ní přepíná profil, ale každý jsme jiný. Pokud jsou SMB s vyšším dočasným cílem deaktivovány, AAPS nepoužije SMB, přestože bude COB > 0, budou povoleny SMB s dočasnými cíli, povoleny SMB obecně a funkce OpenAPS SMB budou aktivovány.

## Dočasný cíl pro blížící se jídlo

Pokud víte, že budete brzy jíst, můžete zvolit tento dočasný cíl, abyste měli již před jídlem vyšší IOB. Zejména pro ty, kdo neaplikují bolus s předstihem, může být dobrou alternativou snížit glykémii před jídlem pomocí dočasného cíle. Více informací o „Blížícím se jídle“ najdete v článku ['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) nebo [zde](https://diyps.org/tag/eating-soon-mode/).

Pokročilé nastavení, po splnění 8. cíle: Pokud v OpenAPS SMB povolíte volbu „Nízký dočasný cíl sníží senzitivitu“, AAPS bude více agresivní. Chcete-li tuto možnost využít, dočasný cíl musí být nižší než 5,5 mmol/l.

## Vlastní dočasný cíl

Někdy je vhodné si nastavit vlastní dočasné cíle. Tento cíl můžete nastavit přidržením cíle (rozsah) v pravém horním rohu obrazovky Přehled nebo na kartě „Akce“.

![Nastavit dočasný cíl přes kartu Akce](../images/TempTarget_ActionTab.png)