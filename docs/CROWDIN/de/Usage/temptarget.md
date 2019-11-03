# Temporäre Ziele

## Was sind temporäre Ziele und wie nutzt und richtet man sie ein?

Mit temporären Zielen (oder kurz - aus dem Englischen - TT von temp Targets) kann man den Blutzuckerzielwert für eine selbst definierte Dauer verändern. Da diese meistens für Aktivität, Hypo-Kohlenhydrate oder vor dem Essen benötigt werden, kannst du dir temporäre Ziele dafür vordefinieren. Um solche einzurichten, kannst du im Menü in der rechten oberen Ecke zu Einstellungen-> Andere-> Vordefinierte Ziele gehen.

![Standards für temporäre Ziele festlegen](../images/TempTarget_Default.png)

Vordefinierte temporäre Ziele kannst du auswählen und aktivieren, indem du entweder lange auf das Zielbereich-Feld auf der "Home"-Seite drückst oder auf den orangen "Kohlenhydrate"-Button. Um manuell ein [ "Benutzerdefiniertes Temporäres Ziel" ](../Usage/temptarget#custom-temp-target) (BG-Wert und/oder Dauer) zu setzen, verwende "Benutzerdefiniert", nachdem Du Dein Ziel in der oberen rechten Ecke lang gedrückt hast oder verwende die Schaltfläche "Temporäres Ziel" auf der Registerkarte (Tab) "Aktionen".

![Temporäres Ziel (TT) setzen](../images/TempTarget_Set2.png)

## Hypo Temp-Target

Das ist wohl das wichtigste Temp Target. There are several reasons for it:

1. Realizing you will go low: Usually, the Loop should handle it, but sometimes you can see better in advance than the loop, so the loop can react faster when it targets a higher blood glucose value.
2. When you eat hypo treatments carbs, your blood glucose will rise very fast. The loop will correct against the rising or even give SMBs if enabled. A "Hypo Temp-Target" can prevent that. 
3. (advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): You can enable “High Temp-Targets raises sensitivity” for Temp-Targets of 100mg/dl or 5.5mmol/l or higher in OpenAPS SMB, so AndroidAPS is more sensitive.
4. (advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): You can deactivate “SMB with high temp target”, so that even if you have COB > 0, "SMB with Temp-Target" or "SMB always" enabled and OpenAPS SMB active, AndroidAPS won’t give SMBs while high temp targets are active. 

Hinweis: Wenn du Kohlenhydrate über den Carbs Button eingibst und dein BZ unter 72 mg/dl bzw. 4 mmol/l liegt, wird Hypo TT automatisch aktiviert.

## Aktivitäten Temp-Target

Vor und während sportlicher Aktivitäten kannst du einen höheren Zielwert setzen, um eine Unterzuckerung zu vermeiden. Um das Setzen des temporären Ziels zu vereinfachen, kannst du ein Standard Aktivitäten TT definieren.

Advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): The advantages about “Activity Temp-Target”, is that you can enable “High Temp-Targets raises sensitivity” for Temp-Targets higher or equal 100mg/dl or 5.5mmol/L in OpenAPS SMB. AndroidAPS reagiert dann sensibler. Manche machen stattdessen auch einen Profilwechsel vor/während der Aktivität. Das kann jeder halten wie er will. Wenn "SMB bei temporären Zielen oberhalb des regulären Ziels" deaktiviert ist, wird AndroidAPS auch bei COB > 0, "SMB bei aktiven temporären Zielen" und "SMB immer aktivieren" keine SMB abgeben.

## Bald essen Temp-Target

Wenn du weißt, dass du bald essen wirst, kannst du dieses TT aktivieren, damit vor dem Essen bereits mehr Insulin vorhanden ist. Vor allem für all diejenigen, die auf einen Spritz-Ess-Abstand verzichten, kann dies eine gute Alternative sein, den BZ vor dem Essen etwas zu senken. Mehr über den "Bald essen Modus" kannst du im Artikel ['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) oder [hier](https://diyps.org/tag/eating-soon-mode/) lesen.

Advanced, [objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): If you use OpenAPS SMB and have “Low temptarget lowers sensitivity”, AndroidAPS works a little bit more aggressive. Dies erfordert ein temporäres Ziel von weniger als 100 mg/dl bzw. 5,5 mmol/l.

## Benutzerdefiniertes Temp-Target

Manchmal benötigst du ein temporäres Ziel, das von den Standard-Tt abweicht. Dieses setzt du, indem du entweder lang auf den Zielwert oben rechts auf dem Startbildschirm drückst oder auf dem "Aktionen" Tab.

![Temporäres Ziel durch Registerkarte 'Aktion' festlegen](../images/TempTarget_ActionTab.png)