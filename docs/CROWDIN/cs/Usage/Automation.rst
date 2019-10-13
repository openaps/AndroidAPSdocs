Automatizace
***************
Tato funkce bude k dispozici v příští verzi AndroidAPS (2.4). 

Co je automatizace
===================
Může se stát, že pro tytéž často se opakující události budete měnit tatáž nastavení. Chcete-li se vyhnout nadbytečným úkonům, můžete se pokusit tyto události zautomatizovat, pokud je dokážete dostatečně jasně specifikovat. Např. když je glykémie příliš nízká, můžete si nechat automaticky nastavit vyšší dočasný cíl. Nebo když se budete nacházet ve fitness centru, automaticky se nastaví dočasný cíl. Dříve než použijete Automatizaci, měli byste ovládat ruční nastavování dočasných cílů <./temptarget.html>`_ nebo přepínání profilu. 

.. image:: ../images/Automation_ConditionAction_RC3.png
  :alt: Automatizace – podmínka + akce

Jak to používat
================
Chcete-li nastavit automatizaci, musíte ji pojmenovat a vybrat alespoň jednu podmínku a jednu akci. 

Obecné
--------
Existují určitá omezení:

* Hodnota glykémie musí být v rozmezí 4 až 15 mmol/l.
* Procentuální hodnota profilu musí být mezi 70 % a 130%.
* Je tam 5 min. časový limit mezi provedeními (a prvním provedením).

**Buďte prosím opatrní:**

* **méně než -2 znamená: -3 a nižší (-4,-10 atd.)**
* **více než -2 znamená: -1 a vyšší (-1, 0, +10 atd.)**


Podmínka
------------
Můžete si vybrat mezi několika podmínkami. Některé věci jsou zde vysvětleny, ale většina z nich by měla být snadno srozumitelná a není zde popsána:

* spojování podmínek: můžete mít několik podmínek, které navzájem spojíte pomocí operátorů 

   * „A“
   * „Nebo“
   * „Exkluzivní nebo“ (což znamená, že pokud nastane jedna (a pouze jedna) z podmínek, bude provedena akce)
   
* Čas vs. opakující se čas

   * čas =  jednorázová událost
   * opakující se čas = něco, co se děje pravidelně (tj. jednou týdně, každý pracovní den apod.)
   
* poloha: na kartě Konfigurace (Automatizace) můžete vybrat, kterou službu určování polohy chcete používat:

  * Používat pasivní polohu: AAPS zjistí polohu pouze v případě, že ji budou požadovat ostatní aplikace
  * Používat zjištění polohy podle sítě: Poloha podle vaší sítě Wifi
  * Používat polohu GPS
  
Akce
------
Můžete si vybrat jednu nebo více akcí: 

* spustit dočasný cíl 

   * musí být v rozmezí 4 mmol/l a 15 mmol/l
   * funguje pouze tehdy, není-li již spuštěn jiný dočasný cíl
   
* zastavit dočasný cíl
* oznámení
* procento profilu

   * musí být mezi 70 % a 130 % 
   * funguje pouze v případě, že předchozí procento profilu bylo 100 %

Po přidání akce kliknutím na výchozí hodnoty **nezapomeňte změnit výchozí hodnoty** na to, co potřebujete.
 
.. image:: ../images/Automation_Default.png
  :alt: Výchozí hodnoty automatizace vs. nastavené hodnoty

Příklady
==========
Toto jsou jen příklady, žádné rady. Nesnažte se je reprodukovat, aniž byste si uvědomovali, co vlastně děláte nebo proč je potřebujete.

Dočasný cíl při nízké glykémii
------------------------------------
.. image:: ../images/Automation2.png
  :alt: Automatizace 2

Toto nastavení má osoba, která chce, aby se při hypoglykémii automaticky spustil dočasný cíl „Hypoglykémie“.

Dočasný cíl v době oběda
------------------------
.. image:: ../images/Automation3.png
  :alt: Automatizace 3
  
Toto je ukázkové nastavení osoby, která během týdne mívá oběd ve stejnou dobu. Pokud se v určitou dobu nachází na místě, kde obvykle obědvá, spustí se při čekání na oběd dočasný cíl „Před jídlem“. Vzhledem k použitému operátoru „A“ se tak stane pouze tehdy, když je splněna podmínka určitého času A polohy. Tato automatizace tedy nefunguje, pokud je osoba v nastaveném místě v jakoukoli jinou dobu, ani když je v nastavenou dobu někde jinde, např. pracuje z domu nebo pracuje přesčas. 


Alternativy
============

Pokročilí uživatelé mohou využít další možnosti pro automatizaci úloh pomocí IFTTT nebo externí aplikace pro Android zvané Automate. Některé příklady jsou uvedeny v části <./automationwithapp.html>`_.
