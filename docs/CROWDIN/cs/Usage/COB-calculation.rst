Kalkulace COB
**************************************************

Jak AndroidAPS počítá COB hodnotu?
==================================================

Oref0 / Oref1
--------------------------------------------------

Nestrávené sacharidy jsou odříznuty po určené době

.. image:: ../images/cob_oref0_orange_II.png
  :alt: Oref0 / Oref1

AAPS, Vážený průměr
--------------------------------------------------

absorpce je vypočtena tak, aby bylo "COB == 0" po stanoveném čase

.. image:: ../images/cob_aaps2_orange_II.png
  :alt: AAPS, Vážený průměr

Jestliže je použitá minimální absorpce sacharidů (min_5m_carbimpact) namísto hodnoty vypočtené z odchylek, tak se v COB grafu objeví oranžová tečka.

Zjišťování nesprávných hodnot COB
==================================================

Počínaje verzí 2.4 vás AAPS varuje, pokud se chystáte počítat bolus s COB z předchozího jídla a algoritmus si myslí, že aktuální výpočet COB může být chybný. V takovém případě Vám bude po použití bolusové kalkulačky zobrazen dodatečný pokyn na obrazovce s potvrzením. 

Jak AndroidAPS zjistí nesprávné hodnoty COB? 
--------------------------------------------------

Obvykle AAPS detekuje absorpci sacharidů prostřednictvím odchylek glykémií. V případě, že jste zadali sacharidy, ale AAPS nevidí jejich odhadovanou absorpci prostřednictvím odchylek glykémií, bude používat metodu `min_5m_carbimpact <../Configuration/Config-Builder.html?highlight=min_5m_carcarimpact#sapution-settings>`_ jako náhradu pro výpočet absorpce místo (tzv. "fallback"). Protože tato metoda počítá pouze minimální absorbci sacharidů, aniž by zvážila odchylky glykémií, může to vést k chybným hodnotám COB.

.. image:: ../images/Calculator_SlowCarbAbsorbtion.png
  :alt: Pokyn pro chybnou hodnotu COB

Na obrázku výše, 41 % času absorpce sacharidů byla počítána pomocí min_5m_carbimpact místo hodnoty zjištěné odchylkami.  To znamená, že možná máte méně zbývajících sacharidů, než vypočteno. 

Jak se vypořádat s tímto varováním? 
--------------------------------------------------

- Zvážit zrušení bolusu - stiskněte tlačítko Zrušit namísto OK.
- Vypočítejte znovu nachystané jídlo bez zatrhnutého COB.
- V případě, že jste si jisti, že potřebujete podat korekční bolus, zadejte jej ručně.
- Ale buďte opatrní, aby nedošlo k předávkování!

Proč algoritmus nedetekuje COB správně? 
--------------------------------------------------

- Možná jste přecenil sacharidy při jejich vkládání.  
- Aktivita / cvičení po předchozím jídle
- Inzulínovosacharidový poměr vyžaduje úpravu
- Hodnota pro min_5m_carbimpact je chybná (doporučeno je 8 s SMB, 3 s AMA)

Ruční korekce zadaných sacharidů
==================================================
If you over- or underestimated carbs you can correct this though treatments tab and actions tab / menu as described `here <../Getting-Started/Screenshots.html#carb-correction>`_.
