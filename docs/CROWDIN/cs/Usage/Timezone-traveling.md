# Cestování s pumpou mezi časovými pásmy

## DanaR, Korejská DanaR

Se změnou časového pásma v telefonu není žádný problém, protože tyto pumpy nepoužívají historii

## DanaRv2, DanaRS

Tyto pumpy vyžadují zvláštní péči, protože AndroidAPS z nich používá historické údaje, ale tyto záznamy v pumpě nemají údaj o časovém pásmu. To znamená, že pokud prostě změníte časové pásmo na telefonu, historické záznamy se z pumpy načtou v jiném pásmu a zdvojí se. Abyste tomu předešli, tak při každé změně časového pásma proveďte tyto kroky:

* přepněte telefon na ruční zadávání časového pásma, než začnete cestovat

Když vysednete z letadla:

* vypněte pumpu
* změňte časové pásmo na telefonu
* vypněte telefon, zapněte pumpu
* vymažte historii v pumpě
* změňte čas na pumpě
* zapněte telefon
* nechejte telefon spojit se s pumpu a sladit se s jejím časem

## Combo

## Insight