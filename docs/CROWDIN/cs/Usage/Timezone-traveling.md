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

The driver automatically adjusts the time of the pump to the time of the phone.

The Insight also records the history entries in which moment time was changed and from which (old) time to which (new) time. So the correct time can be determined in AAPS despite the time change.

It may cause inaccuracies in the TDDs. But it shouldn't be a problem.

So the Insight user doesn't have to worry about timezone changes and time changes. There is one exception to this rule: The Insight pump has a small internal battery to power time etc. while you are changing the "real" battery. If changing battery takes to long this internal battery runs out of energy, the clock is reset and you are asked to enter time and date after inserting a new battery. In this case all entries prior to the battery change are skiped in calculation in AAPS as the correct time cannot be identified properly.

# Time adjustment daylight savings time (DST)

Depending on pump and CGM setup, jumps in time can lead to problems. With the Combo e.g. the pump history gets read again and it would lead to duplicate entries. So please do the adjustment while awake and not during the night.

1) Switch off automatic time zone in your phone. 2) Find a time zone that has the target time but doesn't use DST. For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo. 3) In AndroidAPS refresh you pump. (hit BT symbol for Dana pumps; "refresh" for the Combo). 4) Check the Treatments tab... If you see duplicate treatments:

* DON'T press "delete future treatments"
* Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore. 5) If the state is unclear - please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.

A good time to make this switch would be with low IOB. E.g. an hour before a meal.

This definitely affects the Combo, maybe the Dana Rv2 and RS - and most likely not the Dana R and Insight. But as it is not tested, please be cautions. This is DIY!