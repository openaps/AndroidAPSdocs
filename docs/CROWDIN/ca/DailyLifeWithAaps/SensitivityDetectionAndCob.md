(Sensitivity-detection-and-COB-sensitivity-detection)=

# Detecció de sensibilitat

## Algoritme de sensibilitat

Ara mateix **AAPS** ofereix 3 models de detecció de sensibilitat:

* Sensibilitat AAPS
* Sensibilitat: mitjana ponderada
* Sensibilitat Oref1

### Sensibilitat AAPS

La sensibilitat es calcula de la mateixa manera que a Oref1, però podeu indicar el període de temps cap enrere que es té en compte. L'absorció mínima de carbohidrats es calcula a partir del temps màxim d'absorció de carbohidrats definit a la configuració.

### Sensibilitat: mitjana ponderada

La sensibilitat es calcula com una mitjana ponderada de les desviacions. Podeu indicar el període de temps cap enrere que es té en compte. Les desviacions més noves tenen més pes. L'absorció mínima de carbohidrats es calcula a partir del temps màxim d'absorció de carbohidrats definit a la configuració. Aquest algoritme és el més ràpid a seguir els canvis de sensibilitat.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Sensibilitat Oref1

La sensibilitat es calcula a partir de les dades de les últimes 8 hores, o des de l'últim canvi de cànula si va ser fa menys de 8 hores. Els carbohidrats (si no s'han absorbit) es tallen després del temps indicat a la configuració. Només l'algoritme Oref1 admet els àpats no anunciats (UAM). Això vol dir que els períodes amb UAM detectat s'exclouen del càlcul de la sensibilitat. Per tant, si feu servir SMB amb UAM, heu de triar l'algoritme Oref1 perquè funcioni correctament. Per a més informació sobre UAM, vegeu la secció [Super Micro Bolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

Oref1 és l'opció recomanada: és l'única que pot detectar UAM i funcionar amb [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), l'algoritme més recent.

## Carbohidrats simultanis

Quan diversos àpats se superposen, hi ha una diferència important entre els algoritmes Sensibilitat AAPS i mitjana ponderada, per una banda, i Oref1, per l'altra.

* Oref1 espera que només es consumeixi un àpat alhora: el segon àpat comença a consumir-se quan el primer s'ha consumit del tot.
* Sensibilitat AAPS i mitjana ponderada comencen a consumir els carbohidrats immediatament quan els introduïu. Si hi ha més d'un àpat a bord, el consum mínim de carbohidrats s'ajustarà segons la mida de l'àpat i el temps màxim d'absorció. Per tant, l'absorció mínima serà més alta en comparació amb Oref1.