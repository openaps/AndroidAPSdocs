(temptarget-temp-targets)=

# Geçici-Hedefler

## Geçici Hedefler nedir ve bunları nerede ayarlayabilir ve yapılandırabilirim?

“Geçici-Hedefler” (veya kısa GH) ile belirli bir süre içinde kan şekeri hedefinizi değiştirebilirsiniz. Çoğunlukla aktivite, hipo (karbonhidrat tedavisi) veya yakında öğün zamanlarında geçici hedefe ihtiyaç duyulduğundan bunlar için önceden geçici hedefler belirleyebilirsiniz. Bunları yapılandırmak için sağ üst köşedeki menüye gidebilir ve Tercihler-> Diğer-> Varsayılan Geçici Hedefler'e gidebilirsiniz.

![Varsayılan geçici hedefleri ayarla](../images/TempTarget_Default.png)

"Varsayılan-Geçici-Hedefler"den birini kullanmak için, genel bakış sekmesinde sağ üst köşedeki hedefinize kısa bir süre tıklayarak Geçici Hedef iletişim kutusunu gösterebilir ve Yakında Öğün, Aktivite veya Hipo butonuna tıklayabilirsiniz. Turuncu “Karbonhidrat” düğmesindeki kısayolları da kullabilirsiniz. Manuel olarak bir ["Özel Geçici Hedef"](temptarget-custom-temp-target) (KŞ değeri ve/veya süre) ayarlamak için, sağ üst köşedeki hedefinize kısa tıklayın veya [eylemler sekmesi / menü](Config-Builder-actions) "Geçici Hedef" düğmesini kullanın.

![Geçici hedef ayarla](../images/TempTarget_Set2.png)

- Varsayılan bir geçici hedefin değerlerine yakın bir değer ayarlamak isterseniz, Yakında Yemek, Aktivite veya Hipo düğmesine uzun basarak bu değerleri ekrana aktarıp ardından Hedef veya Süre alanlarındaki değerleri düzenleyebilirsiniz.
- Bir Geçici hedefi çalışıyorsa, onu iptal etmek için iletişim kutusunda ek bir "İptal" düğmesi gösterilir

## Hipo Geçici-Hedefi

Bu en önemli Geçici-Hedef olarak kabul edilebilir. Bunun birkaç nedeni var:

1. Hipoalgı: Normalde döngü KŞ düşüşünü yakalamalıdır, ancak bazen bunu döngüden daha iyi tahmin edebilirsiniz. Daha yüksek bir KŞ hedefi belirlerseniz döngü daha hızlı tepki verebilir.
2. Hipo tedavi karbonhidratları yediğinizde, kan şekeriniz çok hızlı yükselecektir. Döngü, yükselişe karşı düzeltme yapar ve hatta SMB etkinse mikro boluslar verir. "Hipo Geçici-Hedef" bunu önleyebilir. 
3. (gelişmiş, [Görev 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): OpenAPS SMB'de 100mg/dl veya 5.5mmol/l veya daha yüksek Geçici Hedefler için “Yüksek Geçici-Hedefler duyarlılığı arttırır” seçeneğini etkinleştirebilirsiniz. Bu durumda AndroidAPS duyarlılığı artar.
4. (gelişmiş, [Görev 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): AKRB (Aktif karbonhidrat) > 0 ve "SMB'yi her zaman etkinleştir" seçili ise OpenAPS SMB etkin olsa bile, “Yüksek geçici hedeflerle SMB'yi etkinleştir"i devre dışı bırakarak geçici hedefler etkinken AndroidAPS'in SMB'leri vermesini engelleyebilirsiniz.

Not: Karbonhidrat butonu ile karbonhidrat girerseniz ve kan şekeriniz 72 mg/dl veya 4mmol/l'den düşükse, Hipo geçici hedefi otomatik olarak devreye girer.

(temptarget-activity-temp-target)=

## Aktivite Geçici-Hedefi

Aktivite öncesi veya spor yaparken, hipoyu önlemek için daha yüksek bir hedefiniz olmasını isteyebilirsiniz. Geçici Hedef ayarını basitleştirmek için varsayılan bir "Aktivite Geçici-Hedefi" yapılandırabilirsiniz. İES, AİNS ve deneyiminize dayanarak geçici hedefi etkinlikten önce ayarlamak isteyebilirsiniz. Ayrıca [SSS'deki spor bölümüne](FAQ-sports) bakın.

Gelişmiş, [Görev 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): “Aktivite Geçici Hedefi” ile ilgili avantajlar, OpenAPS SMB'de 100mg/dl veya 5.5mmol/L'ye eşit veya daha yüksek Geçici Hedefler için “Yüksek Geçici-Hedefler duyarlılığı arttırır”ı etkinleştirebilmenizdir. Bu durumda AndroidAPS duyarlılığı artar. Bazı insanlar bunun yerine GH etkinliğinden önce / sırasında bir profil değişikliği yapabilirler, ancak herkesin diyabet yönetimi farklıdır. "Yüksek geçici hedeflerle SMB'yi etkinleştir" devre dışı bırakılırsa, AndroidAPS, Aktif karbonhidrat > 0 ve "SMB'yi her zaman etkinleştir" ve OpenAPS SMB etkin olsa bile SMB'leri kullanmaz.

## Yakında Öğün Geçici-Hedefi

Yakında yemek yiyecekseniz, bu geçici hedefi etkinleştirebilirsiniz. Böylece yemekten önce daha fazla aktif insülin bulunur. Özellikle önbolus yapmayanlar için kan şekerini daha düşük bir hedefe almak iyi bir alternatif olabilir. "Yakında öğün modu" hakkında daha fazla bilgiyi ['"Yakında yemek" modu nasıl yapılır'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) makalesinde veya [buradan bulabilirsiniz](https://diyps.org/tag/eating-soon-mode/).

Gelişmiş, [Görev 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): OpenAPS SMB kullanıyorsanız ve “Düşük geçici hedefler duyarlılığı azaltır” seçili ise AndroidAPS biraz daha agresif çalışır. Bu seçenek için, 100mg/dl veya 5.5mmol/l'den düşük bir Geçici-Hedefe ihtiyaç vardır.

## Özel Geçici-Hedef

Bazen, varsayılanlardan başka bir geçici hedef belirlemek istersiniz. Genel bakışta hedefe veya “Eylem”-Sekmesinde sağ köşedeki geçici hedefe kısa basarak istediğiniz hedefi ayarlayabilirsiniz.

![Eylem sekmesi aracılığıyla geçici hedef belirleyin](../images/TempTarget_ActionTab.png)