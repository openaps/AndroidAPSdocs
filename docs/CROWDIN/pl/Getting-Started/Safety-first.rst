Najważniejsze jest bezpieczeństwo
===========

**When you decide to build your own artificial pancreas, it's always important to think about security and safety, and to understand the impact of all your actions**

General
------------

* AndroidAPS is a just a tool to help you manage diabetes, it is not a fully automated system you can install and forget!
* Do not assume that AndroidAPS will never make mistakes. To urządzenie przejmuje kontrolę nad podawaniem insuliny: oglądaj je cały czas, zrozum, jak działa i naucz się interpretować jego działanie.
* Remember that, once paired, the phone can instruct the pump to do anything. Używaj tego telefonu tylko do obsługi systemu AndroidAPS i, jeśli jest używany przez dziecko, tylko do koniecznej, niezbędnej komunikacji z dzieckiem. Nie instaluj niepotrzebnych aplikacji lub gier (!!!), które mogłyby wprowadzać złośliwe oprogramowanie, takie jak trojany, wirusy lub boty, które mogłyby zakłócać działanie systemu.
* Install all security updates provided by your phone manufacturer and Google.
* You might also need to change your diabetes habits as you change your therapy by using a closed loop system. I.e. some people report, they need less hypo treatments as AndroidAPS has already reduced insulin.  
   
SMS Communicator
-----------------

* AndroidAPS allows you to control a child's phone remotely via text message. Jeśli włączysz ten komunikator SMS, zawsze pamiętaj, że telefon skonfigurowany do wydawania poleceń zdalnych może zostać skradziony. Dlatego zawsze chroń go przynajmniej kodem PIN.
* AndroidAPS will also inform you by text message if your remote commands, such as a bolus or a profile change, have been carried out. Zaleca się takie ustawienie funkcji sterowania pompą poprzez sms, aby teksty potwierdzające były wysyłane na co najmniej dwa różne numery telefonów, w przypadku kradzieży jednego z telefonów odbierających drugi telefon odbierze informację o zmianach.

.. note:: 
   **IMPORTANT SAFETY NOTICE**

   The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. It is critically important that you only use a tested, fully functioning FDA or CE approved insulin pump and CGM for closing an automated insulin dosing loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

   Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.
