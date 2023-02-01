# Profilio pagalbininkas

Profile helper offers two functions:

1. Rasti profilį vaikams
2. Palyginti du profilius arba profilio pakeitimus, kad būtų galima klonuoti naują profilį

## Vaikų, iki 18 metų, profilis

**Important note:**

**Profile helper is intended to support you finding the initial profile for your kid. Even though it is based on data sets of two different hospitals always discuss with your medical team before using a new profile!**

Profilio pagalbininkas siūlo dviejų skirtingų vaikų ligoninių duomenų rinkinius. Tai yra pagalba jums kuriant pradinį profilį jūsų vaikui (iki 18 metų).

```{image} ../images/ProfileHelperKids1.png
:alt: Profilio pagalbininkas Vaikams 1
```

1. Trijų taškų meniu dešinėje ekrano dešinėje pusėje pasirinkite "Profilio pagalbininkas".
2. Adjust Default profile (based on hospital data set) by entering kids age and either TDD Total **or** weight.
3. Perjunkite ekranus spustelėdami pilką mygtuką dešinėje, pažymėtą „2“.
4. Ilgai paspauskite „Dabartinis profilis“ ir pasirinkite standartinį profilį.

```{image} ../images/ProfileHelperKids2.png
:alt: Profilio pagalbininkas Vaikams 2
```

5. Adjust DPV Default profile (based on another hospital data set) by entering kids age, percentage of basal and either TDD Total **or** weight.
6. Ekrano viršuje paspauskite mygtuką "PALYGINTI PROFILIUS".
7. Bus parodytas dviejų koreguotų profilių palyginimas.

Once you are fine with the profile adjustments you can [clone the profile](../Configuration/profilehelper.md#clone-profile) as described below.

## Dviejų profilių palyginimus

You can use profile helper also to compare to different profiles or profile switches (percentage of one of your profiles used in a [profile switch](../Usage/Profiles.md) before).

```{image} ../images/ProfileHelper1.png
:alt: Profilio pagalbininkas 1
```

1. Trijų taškų meniu dešinėje ekrano dešinėje pusėje pasirinkite "Profilio pagalbininkas".
2. Ilgai paspauskite ant „Numatytasis profilis“ ir pasirinkite „Galimas profilis“ esamų profilių sąrašui arba „Profilio pakeitimai“ - naujausių naudotų profilių pakeitimų sąrašui.
3. Ilgai paspauskite ant profilio/profilio keitimo pavadinimo („Aktuell_LP“ - aktualus profilis ekrano nuotraukoje) ir pasirinkite profilio / profilio pakeitimą iš sąrašo.
4. Perjunkite ekranus spustelėdami pilką mygtuką dešinėje, pažymėtą „2“.

```{image} ../images/ProfileHelper2.png
:alt: Profilio pagalbininkas 2
```

5. Pagal numatytuosius nustatymus „Dabartinis profilis“ siūlomas kaip kandidatas palyginimui.
6. Jei norite naudoti kitą profilio / profilio keitimą, palaikykite nuspaudę „Dabartinis profilis“ ir pasirinkite „Galimas profilis“ arba „Profilio pakeitimas“.
7. Ilgai paspauskite ant profilio/profilio keitimo pavadinimo („Aktuell_LP“ - aktualus profilis ekrano nuotraukoje) ir pasirinkite profilio / profilio pakeitimą iš sąrašo.
8. Ekrano viršuje paspauskite mygtuką "PALYGINTI PROFILIUS".
9. Bus parodytas dviejų koreguotų profilių palyginimas.

(clone-profile)=
## Profilio klonavimas

If you use [local profiles](../Configuration/Config-Builder.md#local-profile) you can clone a profile / profile switch directly from profile helper.

```{image} ../images/ProfileHelperClone.png
:alt: Profilio pagalbininko profilio klonavimas / profilio perjungimas
```

1. Pasirinkite norimą profilį / profilio pakeitimą, kaip aprašyta aukščiau.
2. Jei naudojate „Numatytąjį profilį“ arba „DPV numatytąjį profilį“ (remiantis vaikų ligoninių duomenimis), turite įsitikinti, kad įvedėte teisingus amžiaus, bazinio insulino procento ir bendros paros dozės/ svorio nustatymus.
3. Paspauskite mygtuką "KLONUOTI" ekrano apačioje.
4. Patvirtinkite paspausdami "GERAI".
5. Skirtuke „Vietinis profilis“ suaktyvinkite naują profilį.
