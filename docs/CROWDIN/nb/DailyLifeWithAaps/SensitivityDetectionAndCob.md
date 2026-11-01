(Sensitivity-detection-and-COB-sensitivity-detection)=

# Sensitivitetsdeteksjon

## Sensitivitetsalgoritme

**AAPS** tilbyr i dag 3 modeller for sensitivitetsdeteksjon:

* Sensitivitet AAPS
* Sensitivitet vektet middelverdi
* Sensitivitet Oref1

### Sensitivitet AAPS

Sensitiviteten beregnes på samme måte som i Oref1, men du kan selv angi hvor langt tilbake i tid den skal se. Det minste karbohydratopptaket beregnes ut fra den maksimale opptakstiden for karbohydrater som er satt i innstillingene.

### Sensitivitet vektet middelverdi

Sensitiviteten beregnes som et vektet gjennomsnitt av avvikene. Du kan selv angi hvor langt tilbake i tid den skal se. Nyere avvik har høyere vekt. Det minste karbohydratopptaket beregnes ut fra den maksimale opptakstiden for karbohydrater som er satt i innstillingene. Denne algoritmen er den raskeste til å følge endringer i sensitivitet.

(SensitivityDetectionAndCob-sensitivity-oref1)=

### Sensitivitet Oref1

Sensitiviteten beregnes ut fra de siste 8 timene med data, eller fra siste stedsbytte hvis det er mindre enn 8 timer siden. Karbohydrater (som ikke er tatt opp) kuttes etter tiden som er satt i innstillingene. Bare Oref1-algoritmen støtter ikke-varslede måltider (UAM). Det betyr at perioder med oppdaget UAM holdes utenfor sensitivitetsberegningen. Så hvis du bruker SMB med UAM, må du velge Oref1-algoritmen for at det skal fungere riktig. Mer informasjon om UAM finner du i avsnittet [Supermikrobolus (SMB)](#Open-APS-features-super-micro-bolus-smb).

Oref1 er det anbefalte valget: det er den eneste som kan oppdage UAM og fungere sammen med [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb), den nyere algoritmen.

## Flere måltider samtidig

Det er en vesentlig forskjell mellom algoritmene Sensitivitet AAPS og vektet middelverdi på den ene siden, og Oref1 på den andre, når flere måltider overlapper.

* Oref1 regner med bare ett måltid som brytes ned om gangen: det andre måltidet begynner å brytes ned først når det første er helt nedbrutt.
* Sensitivitet AAPS og vektet middelverdi begynner nedbrytingen med en gang du registrerer karbohydratene. Hvis det er mer enn ett måltid aktivt, justeres den minste nedbrytingen av karbohydrater etter størrelsen på måltidet og den maksimale opptakstiden. Det minste opptaket blir dermed høyere sammenlignet med Oref1.