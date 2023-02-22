# Pomocník s profilem

Profile helper offers two functions:

1. Najít profil pro děti
2. Porovnání dvou profilů nebo přepnutí profilů za účelem naklonování nového profilu

## Profil pro děti (do 18 let)

**Important note:**

**Profile helper is intended to support you finding the initial profile for your kid. Even though it is based on data sets of two different hospitals always discuss with your medical team before using a new profile!**

Pomocník s profilem nabízí datové sady dětských pacientů do 18 let ze dvou různých nemocnic, aby vám pomohly najít úvodní nastavení profilu.

```{image} ../images/ProfileHelperKids1.png
:alt: Pomocník profilu pro děti 1
```

1. Vyberte "Pomocník s profilem" z třítečkového menu v pravém horním rohu obrazovky.
2. Adjust Default profile (based on hospital data set) by entering kids age and either TDD Total **or** weight.
3. Přepněte stránku kliknutím na šedivé podlouhlé tlačítko s nápisem 2, které je na pravé straně obrazovky.
4. Dlouze stiskněte "Aktuální profil" a vyberte "Výchozí profil DVP".

```{image} ../images/ProfileHelperKids2.png
:alt: Pomocník profilu pro děti 2
```

5. Adjust DPV Default profile (based on another hospital data set) by entering kids age, percentage of basal and either TDD Total **or** weight.
6. Klikněte na tlačítko "POROVNAT PROFILY" nahoře na obrazovce.
7. Zobrazí se porovnání dvou upravených profilů.

Once you are fine with the profile adjustments you can [clone the profile](../Configuration/profilehelper.md#clone-profile) as described below.

## Porovnání dvou profilů

You can use profile helper also to compare to different profiles or profile switches (percentage of one of your profiles used in a [profile switch](../Usage/Profiles.md) before).

```{image} ../images/ProfileHelper1.png
:alt: Pomocník profilu 1
```

1. Vyberte "Pomocník s profilem" z třítečkového menu v pravém horním rohu obrazovky.
2. Dlouze stiskněte "Výchozí profil" a vyberte "Dostupný profil", zobrazí se seznam existujících profilů. Pokud vyberete "Přepnutí profilu", zobrazí se seznam naposledy použitých změn profilů.
3. Dlouze stiskněte název profilu / přepnutí profilu ('Aktuell_LP' na obrázku níže) a vyberte profil nebo přepnutí profilu ze seznamu.
4. Přepněte stránku kliknutím na šedivé podlouhlé tlačítko s nápisem 2, které je na pravé straně obrazovky.

```{image} ../images/ProfileHelper2.png
:alt: Pomocník profilu 2
```

5. Standardní "Aktuální profil" je nabízen jako kandidát pro porovnání.
6. Pokud chcete jiný profil / přepnutí profilu dlouze stiskněte "Aktuální profil" a vyberte buďto "Dostupný profil" nebo "Přepnutí profilu".
7. Dlouze stiskněte název profilu / přepnutí profilu ('Aktuell_LP' na obrázku níže) a vyberte profil / přepnutí profilu ze seznamu.
8. Klikněte na tlačítko "POROVNAT PROFILY" nahoře na obrazovce.
9. Zobrazí se porovnání dvou upravených profilů.

(clone-profile)=
## Klonování profilu

If you use [local profiles](../Configuration/Config-Builder.md#local-profile) you can clone a profile / profile switch directly from profile helper.

```{image} ../images/ProfileHelperClone.png
:alt: Pomocník profilu Klonování profilu / přepnutí profilu
```

1. Vyberte požadovaný profil / přepnutí profilu dle popisu výše.
2. Pokud používáte "Výchozí profil" nebo "Výchozí profil DVP" (připravený z nemocničních dat dětských pacientů), ujistěte se, že jste zadali správně věk, procenta bazálu a CDD / váhu.
3. Stiskněte tlačítko "KLONOVAT" ve spodní části obrazovky.
4. Potvrďte kliknutím na "OK".
5. Aktivujte nový profil v přehledu místních profilů.
