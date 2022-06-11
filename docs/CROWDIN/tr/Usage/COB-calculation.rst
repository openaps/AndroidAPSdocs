COB (Aktif Karbonhidrat) hesaplaması

**************************************************

AndroidAPS COB değerini nasıl hesaplar?
==================================================

Oref1
--------------------------------------------------

Emilmeyen karbonhidratlar belirtilen süreden sonra kesilir.

.. image:: ../images/cob_oref0_orange_II.png
  :alt: Oref1

AAPS, Ağırlıklı Ortalama
--------------------------------------------------

Emilim, belirtilen süreden sonra ``COB == 0`` olarak hesaplanır

.. image:: ../images/cob_aaps2_orange_II.png
  :alt: AAPS, WheitedAverage

KŞ sapmalarından hesaplanan değer yerine minimum karbonhidrat emilimi (min_5m_carbimpact) kullanılırsa, COB grafiğinde turuncu bir nokta görünür.

Yanlış COB değerlerinin tespiti
==================================================

AAPS, bir önceki öğünden COB ile bolus yapmak üzereyseniz, algoritma mevcut COB hesaplamasının yanlış olabileceğini düşünür ve sizi uyarır. Bu durumda bolus sihirbazından sonraki onay ekranında size ek bir ipucu verecektir. 

AndroidAPS, yanlış COB değerlerini nasıl tespit eder? 
--------------------------------------------------

Normalde AAPS, karbonhidrat emilimini KŞ sapmaları yoluyla tespit eder. Karbonhidratları girdiyseniz, ancak AAPS bunların KŞ sapmaları aracılığıyla tahmini emilimini göremezse, bunun yerine emilimi hesaplamak için `min_5m_carbimpact <../Configuration/Config-Builder.html?highlight=min_5m_carbimpact#absorpsiyon-settings>`_ yöntemini kullanır. ('fallback' olarak adlandırılır). Bu yöntem, KŞ sapmalarını dikkate almadan yalnızca minimum karbonhidrat emilimini hesapladığı için yanlış COB değerlerine yol açabilir.

.. image:: ../images/Calculator_SlowCarbAbsorption.png
  :alt: Yanlış COB değerine ilişkin ipucu

Yukarıdaki ekran görüntüsünde, karbonhidrat emiliminin %41'i sapmalardan tespit edilen değer yerine min_5m_carbimpact tarafından matematiksel olarak hesaplanmıştır.  Bu, belki de algoritma tarafından hesaplanandan daha az aktif karbonhidratınız olduğu anlamına gelir. 

Bu uyarı ile nasıl başa çıkılır? 
--------------------------------------------------

- Tedaviyi iptal etmeyi düşünün - Tamam yerine İptal'e basın.
- Bolus sihirbazı ile COB'u dikkate almadan (tiki kaldırıp hesaplamaya dahil etmeyerek) yaklaşan öğününüzü tekrar hesaplayın.
- Düzeltme bolusuna ihtiyacınız olduğundan, eminseniz manuel olarak girin.
- Her durumda aşırı doz almamaya dikkat edin!

Algoritma neden COB'u doğru algılamıyor? 
--------------------------------------------------

- Belki karbonhidratları fazla tahmin ederek girdiniz.  
- Bir önceki öğünden sonra aktivite / egzersiz yaptınız.
- I:C oranının ayarlanması gerekiyor
- min_5m_carbimpact değeri yanlış (SMB ile 8, AMA ile 3 önerilir)

Girilen karbonhidratların manuel olarak düzeltilmesi
==================================================
Karbonhidratları gereğinden fazla veya az girdiyseniz, bunu `burada <../Getting-Started/Screenshots.html#carb-correction>` açıklandığı gibi tedaviler sekmesi ve eylemler sekmesi aracılığıyla düzeltebilirsiniz.
