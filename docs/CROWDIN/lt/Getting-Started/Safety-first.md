# Saugumas - svarbiausia

**When you decide to build your own artificial pancreas, it's always important to think about security and safety, and to understand the impact of all your actions**

## Bendrieji

- AndroidAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
- Do not assume that AndroidAPS will never make mistakes. AndroidAPS kontroliuoja jūsų insulino tiekimą: visada stebėkite ją, suvokite, kaip ji veikia, ir mokykitės interpretuoti jos veiksmus.
- Remember that, once paired, the phone can instruct the pump to do anything. Naudokite išmanųjį telefoną tik AndroidAPS ir, jei vaikas jį naudoja, tik būtiniausiam bendravimui. Neįdiekite nereikalingų programų ar žaidimų (!!!!!), kurie galėtų privilioti kenkėjiškas programas, pvz., Trojos arklius, virusus ar botus, kurie gali sutrikdyti jūsų sistemą.
- Install all security updates provided by your phone manufacturer and Google.
- You might also need to change your diabetes habits as you change your therapy by using a closed loop system. pvz.,  kai kurie žmonės pranešė, kad jie turi mažiau hipoglikemijos atvejų, nes naudojantis AndroidAPS sumažinamos insulino dozės.

## SMS komunikatorius

- AndroidAPS allows you to control a child's phone remotely via text message. Jei įgalinate šį SMS komunikatorių, visada prisiminkite, kad telefonas, duodantis nuotolinio valdymo komandas, gali būti pavogtas. Todėl visada jį apsaugokite bent PIN kodu.
- AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Patartina tai nustatyti taip, kad patvirtinimo tekstai būtų siunčiami bent dviem skirtingais telefono numeriais, jei pavogtas vienas iš priimančių telefonų.

## AndroidAPS can also be used by blind people

On Android devices TalkBack is part of the operating system. It is a program for screen orientation via voice output. With TalkBack you can operate your smartphone as well as AndroidAPS blind.

We users create the AndroidAPS app ourselves with Android Studio. Many use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the "Java Access Bridge" component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

To do this, please proceed as follows:

- Press WINDOWSTASTE and enter "Control Panel" in the search field, open with Enter. It opens: "All Control Panel Items".
- Press the letter C to get to "Center for Ease of Use", open with Enter.
- Then open "Use computer without a screen" with Enter.
- There, at the bottom, you will find the checkbox "Enable Java Access Bridge", select it.
- Done, just close the window! The screen reader should work now.

```{note}
**IMPORTANT SAFETY NOTICE**

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. Labai svarbu, kad insulino pompa ir CGM sistema, naudojama uždaro ciklo sistemai su automatiniu insulino tiekimu, būtų tinkamai išbandytos ir visiškai veikiančios, pažymėtos CE ženklu (Europoje) kaip medicinos prietaisai. Šių komponentų aparatinės ar programinės įrangos pakeitimai gali sukelti netikėtą insulino tiekimą ir taip sukelti didelę riziką vartotojui. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Be to, ne mažiau svarbu naudoti tik originalius priedus, tokius kaip įšovikliai, kateteriai ir insulino rezervuarai, patvirtinti jūsų pompos ar CGM gamintojo. Nepatikrintų ar modifikuotų priedų naudojimas gali sukelti CGM sistemos netikslumus ir insulino tiekimo klaidas. Insulinas yra labai pavojingas, jei jis neteisingai dozuotas. Nežaisk su savo gyvenimu naudodamas neišbandytus ar modifikuotus priedus.

Galiausiai, jūs neturėtumėte vartoti SGLT-2 inhibitorių (glifozinų), nes jie nenuspėjamai sumažina cukraus kiekį kraujyje.  Ypač pavojingas derinys su sistema, kuri sumažina bazę siekdama pakelti glikemiją, nes dėl gliflozinų šis glikemijos padidėjimas gali neįvykti ir gali grėsmingai pritrūkti insulino.
```
