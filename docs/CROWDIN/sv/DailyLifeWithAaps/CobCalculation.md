# Beräkning av COB

## Hur beräknar AAPS värdet för COB?

När du anger kolhydrater för en måltid eller som kolhydratkorrigering lägger **AAPS** till dem i aktuella kolhydrater ombord (**COB**). **AAPS** beräknar sedan hur kolhydraterna tas upp utifrån de avvikelser som syns i dina **BG**-värden. Hur snabbt kolhydraterna tas upp beror på kolhydratkänslighetsfaktorn (**CSF**). Detta är ingen inställning i din **Profil**. **AAPS** beräknar den utifrån inställningarna för **ISF/I:C**, och den anger hur många mg/dl 1 g kolhydrater höjer ditt **BG**.

## Kolhydratkänslighetsfaktor

Formeln som **AAPS** använder är:

- absorbed_carbs = deviation * ic / isf.

Effekten av din **Profil** blir:

- _öka_ **IC** - fler kolhydrater tas upp var 5:e minut, så den totala upptagningstiden blir kortare;

- _öka_ **ISF** - färre kolhydrater tas upp var 5:e minut, så den totala upptagningstiden blir längre; och

- _ändra_ **Procent av profil** - ökar/minskar båda värdena, så upptagningstiden för kolhydrater påverkas inte.

Exempel: om **ISF** i din **Profil** är 100 och **I:C** är 5, blir din kolhydratkänslighetsfaktor 20. För varje 20 mg/dl som ditt **BG** stiger räknar **AAPS** med att 1 g kolhydrater har tagits upp. Positiv **IOB** påverkar också beräkningen av **COB**. Om **AAPS** alltså förutser att ditt **BG** ska sjunka 20 mg/dl på grund av **IOB**, men det i stället ligger stilla, räknar **AAPS** också med att 1 g kolhydrater har tagits upp.

Kolhydrater tas också upp enligt metoderna nedan, beroende på vilken känslighetsalgoritm du har valt i **AAPS**.

## Kolhydratkänslighet - Oref1

Kolhydrater som inte har tagits upp tas bort efter angiven tid:

![Oref1](../images/cob_oref0_orange_II.png)

![COB-graf med Oref1-gräns](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
Skärmbilden ovan är från en äldre version av **AAPS**. I **AAPS** 4 ser graferna lite annorlunda ut, men **COB**-grafen visar samma information.
```


## Kolhydratkänslighet - WeightedAverage

Upptagningen beräknas så att COB = 0 efter angiven tid:

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

Om minimal kolhydratupptagning (min_5m_carbimpact) används i stället för ett värde som beräknats från avvikelser i **BG**, visas en orange punkt i **COB**-grafen.

(CobCalculation-detection-of-wrong-cob-values)=
## Upptäcka felaktiga COB-värden

**AAPS** varnar dig om du ska ge en bolus med **COB** från en tidigare måltid och algoritmen bedömer att den aktuella beräkningen av **COB** är fel. I så fall får du ett extra tips på bekräftelseskärmen när du har använt kalkylatorn.

### Hur upptäcker AAPS felaktiga COB-värden?

Normalt upptäcker __AAPS__ kolhydratupptagning genom avvikelser i **BG**. Om du har angett kolhydrater men **AAPS** inte kan se den väntade upptagningen genom avvikelser i **BG**, används i stället metoden [min_5m_carbimpact](#Preferences-min_5m_carbimpact) för att beräkna upptagningen (så kallad ”fallback”). Eftersom denna metod bara beräknar den minimala kolhydratupptagningen utan att ta hänsyn till avvikelser i **BG**, kan den ge felaktiga COB-värden.

![Tips om felaktigt COB-värde](../images/Calculator_SlowCarbAbsorption.png)

I skärmbilden ovan beräknades kolhydratupptagningen 66 % av tiden med min_5m_carbimpact i stället för med värdet från avvikelserna. Det betyder att du kanske hade mindre **COB** än algoritmen beräknade.

### Hur hanterar du denna varning?

- Överväg att avbryta behandlingen - tryck på ”Avbryt” i stället för OK.
- Beräkna din kommande måltid igen med kalkylatorn, utan bock för **COB**.
- Om du behöver en korrigeringsbolus anger du den manuellt.
- Var försiktig så att du inte överdoserar eller staplar insulin!


### Varför upptäcker inte algoritmen COB korrekt?

Det kan bero på:
- Kanske har du överskattat kolhydraterna när du angav dem.
- Aktivitet / träning efter din förra måltid.
- KH-kvoten (I:C) behöver justeras.
- Värdet för min_5m_carbimpact är fel (rekommenderat är 8 med SMB, 3 med AMA).


## Manuell korrigering av angivna kolhydrater

Om kolhydraterna är över- eller underskattade kan du rätta det på skärmen **Behandlingshistorik** enligt beskrivningen [här](#screens-bolus-carbs).


## Kolhydratkorrigering - så tar du bort en kolhydratpost från Behandlingar


På skärmen **Behandlingshistorik** kan du rätta en felaktig kolhydratpost genom att ta bort den. Det kan bero på att du över- eller underskattade mängden kolhydrater:

![Ta bort en kolhydratpost i Behandlingshistorik](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. Kontrollera och kom ihåg aktuella **COB** och **IOB** på huvudskärmen i **AAPS**.
2. Öppna **Behandlingshistorik** (sidomenyn → *Behandlingshistorik*), fliken **Kolhydrater och bolus**. Beroende på pumpen kan kolhydraterna visas på samma rad som insulinet eller som en egen post (t.ex. med Dana RS).
3. **Tryck länge** på den felaktiga kolhydratposten. Listan byter till **markeringsläge** med en kryssruta på varje rad, och posten blir markerad (markering **1** ovan). Markera fler poster om du vill ta bort dem också.
4. Tryck på ikonen **🗑 Radera** i det övre fältet (markering **2**) och bekräfta. Bekräftelsedialogen visar exakt vad som tas bort.
5. Kontrollera att kolhydraterna har tagits bort genom att titta på **COB** på huvudskärmen i **AAPS** igen.
6. Gör samma sak för **IOB** om det bara finns en rad med både kolhydrater och insulin.
7. Om kolhydrater inte tas bort som avsett och fler kolhydrater läggs till enligt detta avsnitt, blir **COB** för högt. Då kan **AAPS** ge för mycket insulin.
8. Ange rätt mängd kolhydrater i dialogen **Kolhydrater** (**Behandlingar** → **Kolhydrater**) och ställ in rätt tid för händelsen.
9. Om det bara fanns en rad med både kolhydrater och insulin ska du också lägga till insulinmängden igen. Se till att ställa in rätt tid för händelsen och kontrollera **IOB** på huvudskärmen när du har bekräftat den nya posten.

