Bezpečnost především
===========

**When you decide to build your own artificial pancreas, it's always important to think about security and safety, and to understand the impact of all your actions**

Obecné
------------

* AndroidAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
* Do not assume that AndroidAPS will never make mistakes. Toto zařízení přebírá kontrolu nad vaším podáváním inzulinu: Vždy jej kontrolujte, snažte se porozumět tomu, jak funguje a naučte se interpretovat jeho akce.
* Remember that, once paired, the phone can instruct the pump to do anything. Používejte tento telefon pouze pro systém AndroidAPS a, je-li používán dítětem, pouze na nezbytnou komunikaci. Neinstalujte nepotřebné aplikace nebo hry (!!!), které by mohly do vašeho telefonu zavléci malware, jako jsou trojské koně, viry nebo boty, které by mohly zasahovat do vašeho systému.
* Install all security updates provided by your phone manufacturer and Google.
* You might also need to change your diabetes habits as you change your therapy by using a closed loop system. I.e. some people report, they need less hypo treatments as AndroidAPS has already reduced insulin.  
   
SMS komunikátor
-----------------

* AndroidAPS allows you to control a child's phone remotely via text message. Pokud povolíte SMS komunikátor, vždy pamatujte na to, že telefon nastavený k vydávání vzdálených příkazů, může být ukraden. Proto vždy chraňte telefon alespoň pomocí kódu PIN.
* AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Je proto vhodné nastavit, aby byly potvrzovací zprávy odesílány alespoň na dvě různá telefonní čísla pro případ, že by došlo ke zcizení jednoho z rodičovských telefonů.

.. poznámka:: 
   **IMPORTANT SAFETY NOTICE**

   The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. It is critically important that you only use a tested, fully functioning FDA or CE approved insulin pump and CGM for closing an automated insulin dosing loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

   Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.
