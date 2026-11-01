# Tidssonebytte og sommertid

Når tidssonen på telefonen endres, beregner **AAPS** **IOB**, basal og sensitivitet for den siste tiden på nytt fra bunnen av, omtrent 10 sekunder etter endringen. Mens dette kjører, kan det ta et øyeblikk før grafene og verdiene på hovedskjermen oppdateres.

(timezone-traveling-with-pumps)=

## Tidssonebytte for Omnipod Dash

* Oppdater pumpestatusen i **Administrer → Pumpe**
* Velg midlertidig en annen **Profil**, og bytt så tilbake til din opprinnelige eller ønskede **Profil**

## Tidssonebytte for DanaR, koreansk DanaR

Det er ikke noe problem å bytte tidssone på telefonen, fordi pumpen ikke bruker historikk

(timezone-traveling-danarv2-danars)=

## Tidssonebytte for DanaRv2, DanaRS, Dana-i

Disse pumpene krever ekstra forsiktighet, fordi **AAPS** bruker historikk fra pumpen, men oppføringene i pumpen har ikke tidssonestempel. **Det betyr at hvis du bytter tidssone på telefonen, leses oppføringene med en annen tidssone og blir dobbelt registrert.**

For å unngå dette finnes det to muligheter:

### Alternativ 1: Behold hjemmetiden og tidsforskyv profilen

* Slå av «Automatisk dato og klokkeslett» i telefonens innstillinger (manuelt tidssonebytte).

* Telefonen må beholde din vanlige hjemmetid under hele reisen.

* Tidsforskyv din **Profil** etter tidsforskjellen mellom hjemmetid og tiden på reisemålet.
   
   * Trykk på **Profil**-navnet på hovedskjermen for å åpne [Profil-skjermen](#ProfileSwitch-manage-v4)
   * Velg din **Profil** og trykk på **▶ Aktiver**
   * Sett «**Tidsforskyving**» etter reisemålet ditt og trykk på **Aktiver**.
   
   ![Profilbytte med tidsforskyving](../images/ProfileSwitchTimeShift2.png)
   
   * f.eks. Wien -> New York: **Profilbytte** +6 timer
   * f.eks. Wien -> Sydney: **Profilbytte** -8 timer

### Alternativ 2: Slett pumpehistorikken

* Slå av «Automatisk dato og klokkeslett» i telefoninnstillingene (manuelt tidssonebytte)

Når du går av flyet:

* slå av pumpen
* bytt tidssone på telefonen
* slå av telefonen, slå på pumpen
* slett historikken i pumpen
* endre tiden i pumpen
* slå på telefonen
* la telefonen koble til pumpen og finjustere tiden

(timezone-traveling-insight)=

## Tidssonebytte for Insight

Driveren justerer automatisk tiden i pumpen til tiden på telefonen.

Insight registrerer også i historikken når tiden ble endret, og fra hvilken (gammel) tid til hvilken (ny) tid. Dermed kan riktig tid fastslås i **AAPS** selv om tiden er endret.

Det kan gi unøyaktigheter i **TDD**-verdiene. Men det bør ikke være noe problem.

Så en Insight-bruker trenger ikke bekymre seg for tidssonebytter og tidsendringer. Det er ett unntak fra denne regelen: Insight-pumpen har et lite internt batteri som driver klokken osv. mens du bytter det «ekte» batteriet. Hvis batteribyttet tar for lang tid, går dette interne batteriet tomt, klokken nullstilles, og du blir bedt om å angi tid og dato etter at du har satt inn et nytt batteri. I så fall hopper AAPS over alle oppføringer fra før batteribyttet i beregningene, fordi riktig tid ikke kan fastslås.

## Tidssonebytte for Accu-Chek Combo

[Combo-driveren](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) justerer automatisk tiden i pumpen til tiden på telefonen. Combo kan ikke lagre tidssoner, bare lokal tid, og det er nettopp det driveren programmerer inn i pumpen. I tillegg lagrer den tidssonen i de lokale AAPS-innstillingene, slik at pumpens lokale tid kan gjøres om til et fullt tidsstempel med tidssoneforskyvning. Brukeren trenger ikke gjøre noe; hvis tiden på Combo avviker for mye fra telefonens tid, justeres pumpens tid automatisk.

Merk at dette tar litt tid, siden det bare kan gjøres i fjernterminal-modus, som generelt er treg. Dette er en begrensning i Combo som ikke kan omgås.

## Tidssonebytte for Medtrum

Driveren justerer automatisk tiden i pumpen til tiden på telefonen.

Tidssonebytter beholder historikken intakt, bare TDD kan bli påvirket. Å endre tiden manuelt på telefonen kan gi problemer med historikken og **IOB**. Hvis du endrer tiden manuelt, dobbeltsjekk **IOB**.

Når tidssonen eller tiden endres, stoppes aktive **TBR-er** (midlertidige basaler).

(time-adjustment-daylight-savings-time-dst)=

## SOMMERTID (DST)

Tidsjustering ved sommertid.

Avhengig av pumpe- og CGM-oppsettet ditt kan hopp i tiden føre til at **AAPS** ikke fungerer riktig. For noen pumper er det bedre å gjøre tidssonejusteringer mens du er våken, før sommertiden slår inn, og ikke om natten.

### Automatisk justering for sommertid for de fleste pumper

* **Loop** blir likevel deaktivert i 3 timer ETTER at sommertidsbyttet (vanligvis fra kl. 01:00) har skjedd, og **AAPS** går tilbake til bakgrunnsbasalen som er valgt i din **Profil**. Dette gjøres av sikkerhetsgrunner – **IOB** kan bli for høy på grunn av en dobbelt registrert bolus fra før sommertidsbyttet.
* Etter at sommertidsbyttet har skjedd, gjør du et **Profilbytte** til ønsket **Profil** for å aktivere **Loop** igjen: trykk på profilnavnet på hovedskjermen, og så på den runde **▶**-knappen (se [Aktivere en profil](#ProfileSwitch-manage-v4)).
* Du får også et varsel på hovedskjermen i **AAPS** før sommertidsbyttet om at **Loop** er midlertidig deaktivert. Denne meldingen vises uten pipelyd, vibrasjon eller lignende lyd.

Hvis du gir bolus med kalkulatoren i **AAPS**, ikke bruk **COB**- og **IOB**-dataene med mindre du er sikker på at de er helt riktige. Vær forsiktig, og ikke bruk denne funksjonen de første timene etter at sommertidsbyttet har skjedd.

### Sommertid for Accu-Chek Insight

* Byttet til sommertid skjer automatisk. Du trenger ikke gjøre noe.

### Sommertid for Accu-Chek Combo

* Byttet til sommertid skjer automatisk. Du trenger ikke gjøre noe.

### Sommertid for Medtrum

* Byttet til sommertid skjer automatisk. Du trenger ikke gjøre noe.

### Sommertid for Omnipod Dash

* Enten lar du **AAPS** midlertidig gå tilbake til bakgrunnsbasal etter at sommertidsbyttet har skjedd, som forklart ovenfor.
* Ellers, hvis du ikke vil at **AAPS** midlertidig skal gå tilbake til bakgrunnsbasal om natten, kan du bytte tidssone dagen før sommertidsbyttet skal skje, for å unngå avbrudd om natten. MERK AT DETTE ALTERNATIVET KAN FØRE TIL AT PODEN UTLØPER FOR TIDLIG. HA FORBRUKSMATERIELL MED DEG HVIS DU VELGER FUNKSJONEN NEDENFOR.

#### Dette gjør du før klokken stilles

1. Slå AV alle innstillinger på telefonen som setter tidssonen automatisk, slik at du kan bytte til en ønsket tidssone som ikke bruker sommertid. Hvordan du slår på dette, avhenger av telefonen og Android-versjonen din.
   
   * Noen telefoner har to innstillinger, én for automatisk innstilling av tiden (som helst bør stå på) og én for automatisk innstilling av tidssonen (som du må slå AV: **Angi automatisk** under **Tidssone** på skjermbildet nedenfor).
   * Dessverre har noen Android-versjoner bare én bryter som slår på automatisk innstilling av både tid og tidssone. Dette må du slå av inntil videre.

![Screenshot_20260329-110315 (1)](../images/570963727-ca40c1c6-1697-4832-ae10-5cf6a1dc0bce.png)

2. Finn en tidssone som har samme tid som der du er nå, men som ikke bruker sommertid.
   
   * En liste over disse landene finner du på [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * For sentraleuropeisk tid (CET) kan dette være «Brazzaville» (Kongo). Bytt telefonens tidssone til Kongo.

![Screenshot_20260329-111830](../images/570966323-b7b7f738-f91e-40df-ad79-f404fbfb9ae6.png)

3. Oppdater pumpen i **AAPS** og bytt til ønsket **Profil**.

4. Sjekk **IOB** og **COB** i **AAPS**, og hvis de er unøyaktige, deaktiver **Loop** i minst én DIA og maksimal karbotid – den som er lengst.

5. Dette gjør du etter at klokken er stilt. Et godt tidspunkt for å gå tilbake til lokal tidssone er når **IOB** er lav. F.eks. en time før et måltid, som frokost. Ideelt sett bør både **COB** og **IOB** være nær null.