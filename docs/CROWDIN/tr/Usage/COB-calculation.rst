COB calculation
**************************************************

How does AndroidAPS calculate the COB value?
==================================================

Oref1
--------------------------------------------------

Emilmeyen karbonhidratlar belirtilen süreden sonra kesilir.

.. image:: ../images/cob_oref0_orange_II.png
  :alt: Oref1

AAPS, Ağırlıklı Ortalama
--------------------------------------------------

absorption is calculated to have ``COB == 0`` after specified time

.. image:: ../images/cob_aaps2_orange_II.png
  :alt: AAPS, WheitedAverage

If minimal carbs absorption (min_5m_carbimpact) is used instead of value calculated from BG deviations, an orange dot appears on COB graph.

Detection of wrong COB values
==================================================

AAPS warns you if you are about to bolus with COB from a previous meal and the algorithm thinks that current COB calculation could be wrong. Bu durumda bolus sihirbazından sonraki onay ekranında size ek bir ipucu verecektir. 

How does AndroidAPS detect wrong COB values? 
--------------------------------------------------

Normalde AAPS, karbonhidrat emilimini KŞ sapmaları yoluyla tespit eder. Karbonhidratları girdiyseniz, ancak AAPS bunların KŞ sapmaları aracılığıyla tahmini emilimini göremezse, bunun yerine emilimi hesaplamak için `min_5m_carbimpact <../Configuration/Config-Builder.html?highlight=min_5m_carbimpact#absorpsiyon-settings>`_ yöntemini kullanır. ('fallback' olarak adlandırılır). As this method calculates only the minimal carb absorption without considering BG deviations, it might lead to incorrect COB values.

.. image:: ../images/Calculator_SlowCarbAbsorption.png
  :alt: Hint on wrong COB value

Yukarıdaki ekran görüntüsünde, karbonhidrat emiliminin %41'i sapmalardan tespit edilen değer yerine min_5m_carbimpact tarafından matematiksel olarak hesaplanmıştır.  Bu, belki de algoritma tarafından hesaplanandan daha az aktif karbonhidratınız olduğu anlamına gelir. 

Bu uyarı ile nasıl başa çıkılır? 
--------------------------------------------------

- Tedaviyi iptal etmeyi düşünün - Tamam yerine İptal'e basın.
- Calculate your upcoming meal again with bolus wizard leaving COB unticked.
- Düzeltme bolusuna ihtiyacınız olduğundan, eminseniz manuel olarak girin.
- Her durumda aşırı doz almamaya dikkat edin!

Why does the algorithm not detect COB correctly? 
--------------------------------------------------

- Belki karbonhidratları fazla tahmin ederek girdiniz.  
- Bir önceki öğünden sonra aktivite / egzersiz yaptınız.
- I:C oranının ayarlanması gerekiyor
- min_5m_carbimpact değeri yanlış (SMB ile 8, AMA ile 3 önerilir)

Girilen karbonhidratların manuel olarak düzeltilmesi
==================================================
Karbonhidratları gereğinden fazla veya az girdiyseniz, bunu `burada <../Getting-Started/Screenshots.html#carb-correction>` açıklandığı gibi tedaviler sekmesi ve eylemler sekmesi aracılığıyla düzeltebilirsiniz.
