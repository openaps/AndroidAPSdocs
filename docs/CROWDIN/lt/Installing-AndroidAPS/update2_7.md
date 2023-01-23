# Necessary checks after update coming from AndroidAPS 2.6

- Atnaujinant į AAPS 2.7, programos kodas buvo žymiai pakeistas.
- Todėl svarbu, kad atnaujinę atliktumėte keletą pakeitimų arba patikrintumėte nustatymus.
- Prašome peržiūrėti [Išleidimo pastabas](../Installing-AndroidAPS/Releasenotes#version-2-7-0) dėl detalių apie naujas ir išplėstines funkcijas.

## Tikrinti KG šaltinį

- Patikrinkite, ar po atnaujinimo KG šaltinis yra teisingas.
- Jei jūs naudojate [xDrip+](../Configuration/xdrip.md) gali atsitikti taip, kad KG šaltinis pakeistas į modifikuotą „Dexcom“ programą.
- Atidarykite [Konfigūratorių](../Configuration/Config-Builder#bg-source) (trijų linijų meniu pagrindinio ekrano viršuje kairėje)
- Slinkite žemyn į "KG šaltinis".
- Pasirinkite teisingą KG šaltinį, jei pakeitimai yra būtini.

```{image} ../images/ConfBuild_BG.png
:alt: "KG \u0161altinis"
```

## Baigti egzaminą

- AAPS 2.7 contains new objective 11 (in later versions renumbered to objective 10!) for [automation](../Usage/Automation.md).
- You have to finish exam ([objective 3 and 4](../Usage/Objectives#objective-3-prove-your-knowledge)) in order to complete [objective 11](../Usage/Objectives.md#objective-10-automation).
- If for example you did not finish the exam in [objective 3](../Usage/Objectives#objective-3-prove-your-knowledge) yet, you will have to complete the exam before you can start [objective 11](../Usage/Objectives.md#objective-10-automation).
- Tai nepaveiks kitų tikslų, kuriuos jau baigėte. Visi užbaigti tikslai bus išsaugoti!

## Pagrindinio slaptažodžio nustatymas

- Necessary to be able to [export settings](../Usage/ExportImportSettings.md) as they are encrypted as of version 2.7.
- Atidarykite Nustatymus (trijų taškų meniu dešinėje viršutinėje pagrindinio ekrano pusėje)
- Spustelėkite trikampį žemiau "Bendrieji"
- Spauskite "Pagrindinis Slaptažodis"
- Įveskite slaptažodį, patvirtinkite slaptažodį ir spustelėkite Ok.

```{image} ../images/MasterPW.png
:alt: "Nustatyti pagrindin\u012F slapta\u017Eod\u012F"
```

## Eksportuoti nustatymus

- AAPS 2.7 naudoja naują šifruotą atsarginės kopijos formatą.
- Jūs turite [eksportuoti savo nustatymus](../Usage/ExportImportSettings.md) po atnaujinimo į versiją 2.7.
- Parametrų failus iš ankstesnių versijų galima tik importuoti į AAPS 2.7. Eksporti bus nauju formatu.
- Įsitikinkite, kad saugojate savo eksportuotus nustatymus ne tik telefone, bet ir bent vienoje saugioje vietoje (jūsų kompiuteris, debesijos saugykla...).
- Jei sukursite AAPS 2.7 apk naudodami tą pačią raktų saugyklą kaip ir ankstesnėse versijose, galite įdiegti naują versiją nepašalinę ankstesnės versijos.
- Visi nustatymai ir įvykdyti tikslai liks tokie, kokie buvo ankstesnėje versijoje.
- Jei praradote raktų saugyklą, sukurkite 2.7 versiją naudodami nauja raktų saugykla ir importuokite nustatymus iš ankstesnės versijos, kaip aprašyta skyriuje [Trikčių šalinimas](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).

## Autosens (Užuomina - nėra būtina imtis konkrečių veiksmų)

- Autosens buvo pakeistas iš statinio į dinaminį modelį.
- Autosens jautrumui apskaičiuoti dabar persijungia tarp dviejų modulių: 24 valandų ir 8 valandų laikotarpius. Jis išsirinks vieną, kuris yra jautresnis.
- Vartotojai, kurie naudojo oref1, gali pastebėti, kad sistema gali būti mažiau dinamiška pokyčiams, dėl tuo metu pasirinkto 24 ar 8 valandas jautrumo.

## Danos RS slaptažodžio nustatymas (jei naudojate Dana RS)

- Pompos slaptažodis [Dana RS pompai](../Configuration/DanaRS-Insulin-Pump.md) buvo netikrinamas ankstesnėse versijose.
- Atidarykite Nustatymus (trijų taškų meniu dešinėje viršutinėje ekrano pusėje)
- Slinkite žemyn ir spustelėkite trikampį šalia "Dana RS".
- Paspauskite "Pompos slaptažodis (tik v1)"
- Įveskite pompos slaptažodį ([numatytasis slaptažodis](../Configuration/DanaRS-Insulin-Pump#default-password) skiriasi pagal programinės įrangos versiją) ir spustelėkite OK.

```{image} ../images/DanaRSPW.png
:alt: "Nustatyti Dana RS slapta\u017Eod\u012F"
```

Norėdami pakeisti Dana RS pompos slaptažodį, vykdykite nurodymus, aprašytus [DanaRS puslapyje](../Configuration/DanaRS-Insulin-Pump#change-password-on-pump).
