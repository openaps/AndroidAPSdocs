# Segurança primeiro

**When you decide to build your own artificial pancreas, it's always important to think about security and safety, and to understand the impact of all your actions**

## Geral

- AndroidAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
- Do not assume that AndroidAPS will never make mistakes. Este dispositivo está a assumir o controlo da administração da sua insulina: observe-o constantemente, entenda como ele funciona e aprenda a interpretar as suas ações.
- Remember that, once paired, the phone can instruct the pump to do anything. Só use um telefone para a AndroidAPS e, se sendo usado por uma criança, para comunicações essenciais. Evite usar a app no seu telemóvel do dia a dia, reduzindo os erros possíveis. Não instale aplicações ou jogos desnecessários (!!!) o que pode introduzir malwares como trojans, vírus ou bots que podem interferir no seu sistema.
- Install all security updates provided by your phone manufacturer and Google.
- You might also need to change your diabetes habits as you change your therapy by using a closed loop system. Por exemplo algumas pessoas relatam que têm menor necessidade de corrigir hipoglicemias, ou prevenir as mesmas, já que a AndroidAPS já reduziu a insulina.

## Comunicador SMS

- AndroidAPS allows you to control a child's phone remotely via text message. Se os comandos por SMS estiverem ativos, lembre-se sempre de que o telemóvel configurado para estes comandos remotos pode ser roubado. Então, proteja-o sempre, pelo menos, através de um código PIN.
- AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Ao configurar é aconselhável que as mensagens de confirmação sejam enviados para, pelo menos, dois números de telefone distintos, para o caso de um dos telefones ser roubado.

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

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. It is critically important that you only use a tested, fully functioning FDA or CE approved insulin pump and CGM for closing an automated insulin dosing loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.

Por último, mas não menos importante, você não deve tomar inibidores SGLT-2 (gliflozins), pois eles reduzem incalculavelmente os níveis de açúcar no sangue.  A combinação com um sistema que reduz as taxas basais a fim de aumentar a GLIC é especialmente perigosa já que devido ao gliflozin esse aumento na GLIC pode não acontecer e um estado perigoso de falta de insulina pode acontecer.
```
