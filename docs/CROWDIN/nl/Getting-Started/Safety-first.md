# Allereerst de veiligheid

**When you decide to build your own artificial pancreas, it's always important to think about security and safety, and to understand the impact of all your actions**

## General

- AndroidAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
- Do not assume that AndroidAPS will never make mistakes. Dit systeem krijgt uiteindelijk de controle over jouw insuline toediening: kijk ernaar, leer hoe het systeem werkt en 'denkt'. En zorg dat je begrijpt hoe je zijn keuzes moet interpreteren.
- Remember that, once paired, the phone can instruct the pump to do anything. Wanneer AndroidAPS door een kind wordt gebruikt, gebruik deze telefoon dan alleen voor AndroidAPS en om te communiceren met je kind. Installeer geen onnodige apps of spelletjes (!!!) die malware zouden kunnen bevatten zoals trojans, virussen of bots die je systeem zouden kunnen verstoren.
- Install all security updates provided by your phone manufacturer and Google.
- You might also need to change your diabetes habits as you change your therapy by using a closed loop system. Bijv. sommige mensen merken dat ze minder hypo-koolhydraten nodig hebben omdat AndroidAPS de hoeveelheid toegediende insuline al heeft verminderd.

## SMS Communicator

- AndroidAPS allows you to control a child's phone remotely via text message. Bedenk wel, dat de telefoon die is ingesteld om externe commando's te geven, kan worden gestolen. Beveilig die telefoon dus goed, met op z'n minst een pincode.
- AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Het wordt aangeraden om ten minste 2 telefoonnummers te koppelen in de SMS communicator instellingen. Mocht één van de gekoppelde telefoons worden gestolen, dan zul je deze bevestigings-SMS'jes evengoed nog op het tweede telefoonnummer binnenkrijgen.

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

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. Het is daarom van cruciaal belang dat je alleen een volledig functionerende FDA of CE goedgekeurde insulinepomp en CGM gebruikt voor het bouwen van jouw eigen closed loop. Gebruik alleen insulinepompen en CGMs die in deze handleiding beschreven staan, waarvoor de AndroidAPS software is geschreven en getest. Hardware of software wijzigingen aan deze componenten kunnen voor onverwachte uitkomsten zorgen (denk aan het ongewenst afgeven van insuline), waardoor de gebruiker een aanzienlijk risico loopt. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Daarnaast is het belangrijk om alleen originele verbruiksartikelen te gebruiken, zoals infuussets, inschiethulpen en reservoirs die door de fabrikant zijn goedgekeurd voor gebruik met jouw pomp of CGM. Door het gebruik van niet-originele, niet-geteste verbruiksmaterialen kunnen CGM metingen onnauwkeurig worden en/of fouten optreden in de insulinedosering. Insuline is zeer gevaarlijk wanneer het verkeerd wordt gedoseerd - speel alstublieft niet met je leven door jouw hulpmiddelen aan te passen.

Tensotte een belangrijke opmerking: je mag géén SGLT-2 inhibitors (glifozines) gebruiken wanneer je loopt. Omdat deze medicatie ook de bloedsuiker verlaagt.  Deze medicatie in combinatie met een systeem dat de basale insuline verlaagt om BG te verhogen is bijzonder gevaarlijk, omdat deze stijging in BG mogelijk niet zal gebeuren en daardoor een gevaarlijk gebrek aan insuline kan ontstaan.
```
