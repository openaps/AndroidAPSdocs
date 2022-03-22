# Geçici-Hedefler

## Geçici Hedefler nedir ve bunları nerede ayarlayabilir ve yapılandırabilirim?

“Geçici-Hedefler” (veya kısa GH) ile belirli bir süre içinde kan şekeri hedefinizi değiştirebilirsiniz. Çoğunlukla aktivite, hipo (karbonhidrat tedavisi) veya yakında öğün zamanlarında geçici hedefe ihtiyaç duyulduğundan bunlar için önceden geçici hedefler belirleyebilirsiniz. Bunları yapılandırmak için sağ üst köşedeki menüye gidebilir ve Tercihler-> Diğer-> Varsayılan Geçici Hedefler'e gidebilirsiniz.

![Set default temp targets](../images/TempTarget_Default.png)

"Varsayılan-Geçici-Hedefler"den birini kullanmak için, genel bakış sekmesinde sağ üst köşedeki hedefinize kısa bir süre tıklayarak Geçici Hedef iletişim kutusunu gösterebilir ve Yakında Öğün, Aktivite veya Hipo butonuna tıklayabilirsiniz. Turuncu “Karbonhidrat” düğmesindeki kısayolları da kullabilirsiniz. Manuel olarak bir ["Özel Geçici Hedef"](../Usage/temptarget#custom-temp-target) (KŞ değeri ve/veya süre) ayarlamak için, sağ üst köşedeki hedefinize kısa tıklayın veya [eylemler sekmesi / menü](../Configuration/Config-Builder#actions) "Geçici Hedef" düğmesini kullanın.

![Set temp target](../images/TempTarget_Set2.png)

- Varsayılan bir geçici hedefin değerlerine yakın bir değer ayarlamak isterseniz, Yakında Yemek, Aktivite veya Hipo düğmesine uzun basarak bu değerleri ekrana aktarıp ardından Hedef veya Süre alanlarındaki değerleri düzenleyebilirsiniz.
- Bir Geçici hedefi çalışıyorsa, onu iptal etmek için iletişim kutusunda ek bir "İptal" düğmesi gösterilir

## Hipo Geçici-Hedefi

Bu en önemli Geçici-Hedef olarak kabul edilebilir. Bunun birkaç nedeni var:

1. Hipoalgı: Normalde döngü KŞ düşüşünü yakalamalıdır, ancak bazen bunu döngüden daha iyi tahmin edebilirsiniz. Daha yüksek bir KŞ hedefi belirlerseniz döngü daha hızlı tepki verebilir.
2. Hipo tedavi karbonhidratları yediğinizde, kan şekeriniz çok hızlı yükselecektir. Döngü, yükselişe karşı düzeltme yapar ve hatta SMB etkinse mikro boluslar verir. "Hipo Geçici-Hedef" bunu önleyebilir. 
3. (gelişmiş, [Görev 9](../Usage/Objectives#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): OpenAPS SMB'de 100mg/dl veya 5.5mmol/l veya daha yüksek Geçici Hedefler için “Yüksek Geçici-Hedefler duyarlılığı arttırır” seçeneğini etkinleştirebilirsiniz. Bu durumda AndroidAPS duyarlılığı artar.
4. (gelişmiş, [Görev 9](../Usage/Objectives#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): COB (Aktif karbonhidrat) > 0 ve "SMB'yi her zaman etkinleştir" seçili ise OpenAPS SMB etkin olsa bile, “Yüksek geçici hedeflerle SMB'yi etkinleştir"i devre dışı bırakarak geçici hedefler ekinken AndroidAPS'in SMB'leri vermesini engelleyebilirsiniz. 

Not: Karbonhidrat butonu ile karbonhidrat girerseniz ve kan şekeriniz 72 mg/dl veya 4mmol/l'den düşükse, Hipo geçici hedefi otomatik olarak devreye girer.

## Aktivite Geçici-Hedefi

Before and during activity, you might want to have a higher target to prevent getting low. To simplify setting the Temp-Target, you can configure a default "Activity Temp-Target". Based on DIA, IOB and your experience you might want to set TT prior to activity. See also [sports section in FAQ](../Getting-Started/FAQ#sports).

Advanced, [objective 9](../Usage/Objectives#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): The advantages about “Activity Temp-Target”, is that you can enable “High Temp-Targets raises sensitivity” for Temp-Targets higher or equal 100mg/dl or 5.5mmol/L in OpenAPS SMB. Then AndroidAPS is more sensitive. Some people do instead a profile switch before/while activity TT, but everybody is different. If “SMB with high Temp-Target” is deactivated, AndroidAPS won't use SMBs, even with COB > 0, "SMB with Temp-Target" or "SMB always" enabled and OpenAPS SMB active.

## Eating soon Temp-Target

If you know, that you want to eat soon, you can enable this Temp-Target, so there is already more IOB before eating. Especially for those who don’t do prebolusing, it might be a good alternative to already get the blood glucose to a lower target. You can read more about the "Eating soon mode" in the article ['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) or [here](https://diyps.org/tag/eating-soon-mode/).

Advanced, [objective 9](../Usage/Objectives#objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): If you use OpenAPS SMB and have “Low temptarget lowers sensitivity”, AndroidAPS works a little bit more aggressive. Requirement is a Temp-Target less than 100mg/dl or 5.5mmol/l for this option.

## Custom Temp-Target

Sometimes, you just want to have a temp target other than the default ones. You can set one by short pressing on the target (range) on the right corner in overview or in the “Action”-Tab.

![Set temp target through Action tab](../images/TempTarget_ActionTab.png)