# Автономный замкнутый цикл

```{contents} In this page
:backlinks: entry
:depth: 2
```

Привлекательность технологии Автономного замкнутого цикла **FCL ** в том, что она потенциально может имитировать искусственную поджелудочную железу и упрощать повседневную компенсацию без необходимости введения болюсов на еду.

Несмотря на то, что ** гибридный замкнутый цикл ** ("HCL") имеет собственный алгоритм работы, он, тем не менее требует, чтобы пользователь самостоятельное вводил болюсы на прием пищи. В результате цикл может временно прекратить подачу (временный нулевой базал), чтобы предотвратить избыточную подачу инсулина.

В Автономном замкнутом цикле **FCL** больше не требуются болюсы на еду: алгоритм производит все расчеты самостоятельно!  **AAPS** can handle meals without the user giving any bolus, and without making carb inputs, in a mode called ‘un-announced meals’ **(‘UAM’)**. Режим **UAM** позволяет алгоритму **AAPS** лучше справляться с неверно введенными углеводами за счет большей агрессивности.

## Чего ожидать?

Существует множество публикаций, посвященных позитивным результатам, достижимым при помощи автономного замкнутого цикла **FCL**. С ними можно ознакомиться в этих работах:

1) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ![PubMed](../images/US-NLM-PubMed-Logo.png) National Library of Medicine, PubMed [First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALL Randomized Pilot Study](https://pubmed.ncbi.nlm.nih.gov/36826996/);

2) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ClinicalTrials.gov National Library of Medicine, Clinical Trial [Feasibility and Safety Study of the Automated Insulin Delivery Closed Loop System Pancreas4ALL (ASAP)](https://www.clinicaltrials.gov/study/NCT04835350?term=Feasibility%20and%20Safety%20Study%20of%20the%20Automated%20Insulin%20Delivery%20Closed%20Loop%20System%20Pancreas4ALL%20(ASAP)&rank=1)

Для успешного применения автономного замкнутого цикла **FCL** от пользователей требуется:

- проверить, соответствуют ли они требованиям **FCL**;
- настроить **автоматизации**, адаптированные к потребностям повседневного контроля; и
- выполнить более тонкую настройку и подгонку всех параметров **AAPS** (особенно **Автоматизаций**).


## Общие соображения, почему (не) переходить с неполного на автономный замкнутый цикл

Автономный замкнутый цикл (**FCL**) не для всех:

- Некоторые пользователи **АЗЦ** добиваются TIR (70–180) около 90% и HbA1c ниже 6%, однако другие предпочитают более жесткий контроль. Notably, minimizing values over 140 mg/dL at diets with rapid carbs probably requires pre-bolusing.
- Тонкая настройка **AAPS** может быть сложной. It is not for those users who feel overwhelmed by AAPS.  Для полноценной настройки **Автономного ЗЦ** понадобится несколько недель. Потраченное время не пропадет зря: вы получите лучшие результаты и лучший контроль **ГК**.
- Справляться с едой может стать проще, однако физическая нагрузка в **АЗЦ** по-прежнему может быть сложной. Многие любят ограничивать себя в количестве спортивных перекусов чтобы контролировать массу тела.
- Организация **АЗЦ** для детей по-прежнему представляет сложности (обсуждаются ниже).


## Правильно настроенный гибридный замкнутый цикл

It is advisable to first establish a well-tuned **HCL** before considering the transition to **FCL**.  Для успешной работы **АЗЦ** требуются точные индивидуальные настройки, чтобы ** AAPS** мог полноценно имитировать именно ВАШ гибридный режим замкнутого цикла.

**АЗЦ** требует настройки режимов **Автоматизации**. Прежде чем переходить на **АЗЦ**, пользователь должен иметь четкое представление о своих потребностях в инсулинотерапии. Ошибки могут маскироваться другими ошибками. Это может создать нестабильную систему **АЗЦ**, которую будет трудно откорректировать. Следует стремиться к достижению целевых показателей времени в диапазоне %TIR, сопоставимых с теми, которые вы уже имеете в гибридном цикле **HCL**.

**FCL is a DIY set up of Automations determined by the user by analyzing their data from both their successful HCL and  initial FCL experience when tuning your settings.**

## Инсулины короткого действия (Lyumjev, Fiasp)

Для корректной работы **АЗЦ** требуется быстродействующий инсулин.  This is so that at the start of meal-related **BG** rise, **FCL** is able to keep **BG** in range (by common definition, under 180 mg/dL (10 mmol/L)).

Моделирующее исследование (подробности см по ссылке Full Loop V2/Март 2023; там же раздел 2.2) показывает, что *инсулины короткого действия*

Источник:

![IEEEControlSystemsMagazine](../images/IEEE_Control_Systems_Society_Logo_RGB.jpg) ![ResearchGate](../images/researchgate-logo-white.svg)



EEE Control Systems Magazine, ResearchGate [The Artificial Pancreas and Meal Control: An Overview of Postprandial Glucose Regulation in Type 1 Diabetes](https://www.researchgate.net/publication/322866519_The_Artificial_Pancreas_and_Meal_Control_An_Overview_of_Postprandial_Glucose_Regulation_in_Type_1_Diabetes);

- will result in significantly lower **BG** peaks than slower insulins;
- справляются с задержкой подачи болюса в пару минут, не допуская при этом пиков; и
- minimize the effect on **BG** peak from different carb loads (meal sizes).

**АЗЦ** вряд ли будет эффективен при применении иных инсулинов кроме Lyumjev или Fiasp, если только пользователь не придерживается диеты с очень умеренным или низким содержанием углеводов.

However, Fiasp or Lyumjev can result in frequent pump occlusions, even after optimizing things like needle length. Важно следить за временем использования катетера или Pod. Многие пользователи считают, что примерно через 48 часов инсулин теряет эффективность и возникает сбой катетера/Pod.

## Предварительные требования

**BG** values and stable Bluetooth connectivity are required to ensure **AAPS** can optimally perform without losing valuable time. **АЗЦ** требует технически стабильной системы 24/7:

- your **CGM’s performance**. Your CGM should not produce jumpy **BG** values that could be misinterpreted by **FCL** as a sign of a starting meal. Аналогично, калибровки **CGM** могут давать скачущие значения.
- как и где выполняется сглаживание данных **CGM** и что это может значить для ваших настроек. Notably how delta is defined, and AAPS recognizing this as being sign of a starting meal.
- Bluetooth stability for the pump and CGM;
- недопущение (или по крайней мере раннее распознавание окклюзии помпы);
- поток данных и используемые приложения телефона, а также разница между днями использования сенсора;
- поддержание всех компонентов **AAPS** в хорошо заряженном состоянии и в непосредственной близости от запасных частей; и
- заблаговременная замена катетера (или Pod) для снижения риска окклюзии;

Всё вышеперечисленное варьируется в зависимости от компонентов **AAPS** и образа жизни пользователя.

## Ограничения, относящиеся к приему пищи

- Настройка **АЗЦ** проще для людей, чей рацион состоит из компонентов, не оказывающих влияние на быстрое и значительное колебание **ГК**, и питание которых не сильно меняется изо дня в день. Это не обязательно означает низкоуглеводную диету.

- Диета, богатая жирами или белками, или гастропарез (замедленное переваривание пищи), скорее облегчают, чем усложняют работу **АЗЦ**, потому что запоздалые углеводы хорошо маскируют неизбежные “хвосты” болюса, вводимого в пиковое время.

### Glycemic index and effect on blood glucose

The challenge for the **UAM** mode rises with rising 'Effect on Blood Glucose' ('EBG')

- Начните с пищи с умеренным/низким воздействием и подстройте **Профиль** соответствующим образом. Только после этого пробуйте "тестировать" пищу с более высоким воздействием на гликемию **EBG**.
- Если вы едите блюда с очень высоким **EBG**, подумайте о начальном болюсе < 50%.

1) **С нулевым EBG **: например, у таких продуктов как свежее мясо, рыба, яйца, ветчина, растительные масла, сыр. 2) **С низким воздействием на гликемию **: например, у свежих овощей и ягод, грибов, орехов, молока, йогурта, творога. 3) **С умеренным воздействием на гликемию**: например, у хлеба из цельного зерна/лапши, картофеля, дикорастущего риса, овсяных хлопьев, сухофруктов. 4) **High EBG**: e.g. wheat breads, baguette, toast, waffles, cookies, mash potatoes, noodles, rice. 5) **С очень высокой степенью воздействия на уровень сахара в крови**: например, сахар, сладкие напитки, фруктовые соки, кукурузные хлопья, конфеты, помадки, картофельные чипсы, соленые крендельки.

![Glycemic index and effect on blood glucose](../images/fullClosedLoop01.png)

Самыми сложными блюдами для **АЗЦ** являются продукты с очень высоким воздействием на гликемию **EBG** (см. красный цвет на рисунке): происходит не только быстрый подъем **ГК**, но и отсутствуют жировые/белково-волокнистые компоненты, уравновешивающие неизбежный “хвост” активности инсулина при попытках контролировать высокий уровень глюкозы на ранних стадиях.

Несбалансированное потребление закусок и сладких напитков, содержащих быстро усваиваемые углеводы, приводит к некорректной работе **АЗЦ**.


## Подготовка к физическим нагрузкам

При физических нагрузках или занятиях спортом на помпе или гибридном замкнутом цикле перед нагрузкой рекомендуется уменьшить значение **IOB**.

При работе **АЗЦ** алгоритм настроен на обнаружение непредвиденного приема пищи **UAM** и автоматическую подачу инсулина для противодействия повышению **ГК**.  Задолго до начала любой нагрузки следует установить высокую ** временную цель TT** и низкий ** процент профиля** (который вступит в силу уже перед началом приема пищи).

Необычные или неустойчивые уровни физической активности создают трудности для **АЗЦ**. Перед тренировкой необходимо заранее планировать свои действия (особенно если хотите уменьшить потребность в дополнительных углеводах / перекусах на купирование гипогликемии). After an active day it is recommended that a lower  **Percentage Profile** is set for overnight after the evening meal is fully digested: set in **Automations** an elevated (>100 mg/dL) **BG**  target, with **Enable SMB with high temp target** switched off in **AAPS** **Settings**.

## Сложности для детей

**АЗЦ** может создавать дополнительные трудности для детей, в том числе:

- Lyumjev or Fiasp may not be available or well tolerated.
- Hourly basal rate may be very low, providing a poor basis for big **SMBs**.
- Диета может быть богата сладкими компонентами. При низком объеме крови в теле ребёнка очевидна тенденция к высоким скачкам уровня **ГК**.
- Гормоны роста и заметные изменения чувствительности к инсулину затрудняют точную настройку **АЗЦ**.


## Включение повышенного SMB; безопасность

В гибридных **ЗЦ** реализованы ограничения безопасности в отношении размера болюсов автоматически вводимых циклом.

Пользователям **АЗЦ** больше не нужно вводить большую дозу перед началом приема пищи. Это означает, что ограничения размера **SMB** нужно расширить, чтобы цикл мог вводить достаточно большие **SMB**.

If you are operating with **AAPS** in the Master release, it is suggested **AAPS**' **Settings** are set up with the maximum allowed **SMB** size so that **FCL** can give (maxUAMSMBBasalMinutes=120, i.e. 2 hours worth of basal at that daytime).

Если ваша базальная скорость очень низкая, то пределы **SMB** могут также оказаться слишком низкими и не обеспечить достаточный контроль над повышением **ГК** после приема пищи. One possible solution is to avoid diets that cause strong **BG** spikes. The [Auto ISF](#Open-APS-features-auto-isf) algorithm (only available in a dev build with engineering mode) has a **SMB max range extension** setting that expands the standard maximum of 2 hours worth of basal by a factor of >1, and lets you raise the default 50% **SMB delivery ratio**.

Чтобы позволить AAPS имитировать обычные болюсы при помощи введения нескольких микроБолюсов (SMB) **следуйте этой инструкции**.

Check the **APS** plugin screen (**Configuration → APS → Open plugin**) periodically to see whether your **SMBs** are allowed to be sufficient enough to deliver the required insulin needed for the loop around meal starts.

Иначе, все усилия по настройке параметров могут оказаться бесполезными!


```{admonition} Boosting **ISF** can become dangerous
:class: danger

Carefully observe/analyze the **SMB** sizes shortly after your meal commences. Настраивайте пошагово и никогда не меняйте более 1 или 2 параметров одновременно.

Настройки **AAPS'** должны быть достаточно эффективны для того, чтобы справляться с разнообразием потребляемых вами (!) блюд.
```

## Обнаружение приёма пищи/ Автоматизация для повышения эффективности

Для успешной работы **АЗЦ** ключевым параметром настройки является чувствительность к инсулину **ISF**. При использовании **AAPS** Master + **Автоматизаций** **изменение профиля > 100% должно автоматически запускаться при распознавании приема пищи** (по дельтам глюкозы) и давать усиленный **ISF**.

**AAPS** Master allows up to 130% temporary **Profile** in **HCL** mode. Увеличение **ISF** осуществляется в 3 этапа:

- Step 1 -  review the **ISF** applicable for this meal time hour within the **Profile**, and see whether e.g. Autosens suggest a modification that takes care of the current (last few hours’) insulin sensitivity status of the body.
- Шаг 2 – применение коэффициента (1/процент профиля, заданный в **Автоматизации**) для усиления **ISF**.
- Шаг 3 - проверка, не выходит ли предлагаемый **ISF** за ограничители безопасности.

### Шаблоны автоматизации АЗЦ

Поля для галочек вверху. Имеются следующие варианты:

- В списке **Автоматизаций** можно снять флажок (слева от каждого пункта)=> Это деактивирует данную **автоматизацию**. Это можно сделать для всех **Автоматизаций** **АЗЦ**, связанных с завтраком(ами), для перехода на **Гибридный ЗЦ**.

- Для каждого правила **Автоматизации** можно поставить галочку напротив пункта «Действие пользователя» => тогда определенные действия не будут автоматически выполняться при появлении Условий. Вместо этого на главном экране **AAPS** будет оповещение каждый раз, когда алгоритм **АЗЦ** вводит микроболюс **SMB**. У вас есть возможность принять или отклонить его. Это очень удобно на стадии отладки.

This feature can be useful for certain situations like “foot to floor” syndrome where there is a sudden rise in **BG** when getting up in the morning, but the user wants to prevent a fully automatic “breakfast started” response.

В разделе ниже описано, как объединять условия **автоматизаций** и как справляться с ситуациями, в которых **AAPS** должен увеличить (или уменьшить) подачу инсулина. Так как **ISF** нельзя настроить напрямую, для наших целей то же самое делает повышение **процента профиля** выше 100%.

### Автоматические большие SMB при росте ГК

The key to successful **FCL**: **at the beginning of BG increases from meals, very large automatic SMBs must be given by the loop as quickly as possible** “to catch up” with the required **IOB** needed (compare with your typical administered bolus for similar meal in **HCL**!)

To achieve this, data from your **HCL** should be analyzed to determine which **deltas** might not be meal-related and which might be.

- As you can define the **Automation** within a pre-defined time-window, you need only to analyze there.
- Если ваши приемы пищи очень разные (например, завтрак с довольно большим количеством углеводов, а обед с малым), можно сделать два разных (набора) **автоматизаций** для каждого временного интервала.
- Если в ночное время у вас случаются скачки ГК из-за сдавливания сенсора во сне, исключите ночное время из настроек автоматизации
- Обычно достаточно пользоваться изменениями / дельтой последних 5 минут.
- Но можете использовать одно из усредненных изменений /приращений. Сравнивая дельты в условиях ваших **автоматизаций**, можно даже задать действия разной агрессивности в зависимости от того, растет ли **ГК** с ускорением или нет.

> ( delta – short avg delta )>n   — это выражение, которое можно использовать для обнаружения ускорения, чтобы запустить первый **SMB** при самом раннем признаке роста **ГК**. -                                                                             
> Caution: not possible to use with poor or highly smoothened **CGM** values!

**CGM** с неровными данными ставит пользователя в плохое положение: чтобы перестраховаться, вам приходится «завышать» дельту, которая точно означает начало приема пищи. Это означает:

- **АЗЦ** теряет дополнительное время, что приводит к более высоким пикам **ГК** и более низкому %**TIR**;
- вы не можете использовать более раннюю или меньшую дельту, которая могла бы и без еды запустить **SMB**, заменяющие в **АЗЦ** болюс пользователя.

Кроме того, первые подъемы после еды характеризуются **низким уровнем активного инсулина IOB**. С учетом этого, Автоматизация(#1) для ужина может выглядеть следующим образом:

![Automation #1: delta of 8 or more and IOB below 4 in the evening starts profile 130% for 12 min](../images/fullClosedLoop02.png)

Автоматизация #1

Если условия выполняются, **AAPS** в ближайшие 12 минут даст 1 или 2 **SMB** с усиленным **ISF** согласно заданному повышенному **проценту профиля** (в примере это усиление insulinReq на 30%). Пока эти условия выполняются, правило **автоматизации** продлевается еще на 12 минут. При еде с малым количеством углеводов **ГК** может расти медленнее. Для такой пищи полезна еще одна Автоматизация (#2), которая срабатывает при более низкой дельте и дает более слабую подачу инсулина.

![Automation #2: delta of 5 or more and IOB below 5.5 starts profile 115% for 12 min](../images/fullClosedLoop03.png)

Та же **автоматизация**, вероятно, сработает и при еде с большим количеством углеводов, когда закончится крутой подъем, заданный в автоматизации #1.

Эти две (и, может быть, третью) **автоматизации** нужно «выстроить по ступеням» так, чтобы они подходили к тому, что вы видите при ваших (разных) приемах пищи => подбор подходящих размеров скачков, критериев **IOB** и усилений будет пошаговым процессом настройки.  Кроме того, если в Условия добавить соответствующие временные интервалы, вы сможете легко создавать различные автоматизации для разных приемов пищи (завтрак, обед, ужин).

Учтите, что еще в фазе роста (!) нужно заблокировать «перелив» **IOB**, чтобы позднее действие **инсулина** («**хвост**» через 3–5 часов) не превысило тормозные возможности цикла через нулевой временный базал («отбирание» базала для снижения риска гипо).

При большом приёме пищи **иногда наблюдается вторичное увеличение уровня глюкозы**. К этому времени, обычно, уровень активного инсулина немного падает, и более агрессивная Автоматизация снова вступает в силу. (Check that your iob condition in Automation #2 is not set too low for this to happen).

Вскоре после нескольких первых **SMB** наступает **сбалансированная фаза**, в которой умеренная подача инсулина должна покрывать дополнительно усвоенные углеводы. (Except in low carb meals, where the loop might see too weak of a **BG** rise, and go into zero-temping right away already now).

Главный экран **AAPS** (где в режиме **UAM** АЗЦ вы видите cob=0) в этой фазе может запрашивать дополнительные углеводы. В режиме **UAM** это просто означает, что можно сделать очень грубую проверку правдоподобия: может ли такое количество углеводов из еды примерно час назад (о которой вы не дали циклу никакой информации) еще оставаться неусвоенным в вашем теле?


### iob threshold

Часто **автоматизации** #1 и/или #2 поднимают IOB до уровня, которого обычно достаточно для **ваших** приемов пищи. Для индивидуальной настройки посмотрите в данных вашего **гибридного ЗЦ** максимальные значения IOB при хорошо компенсированной еде (часто это ваш болюс на еду), а также выше какого значения в конце возникала гипо (или потребность в дополнительных углеводах).

Разумные **ограничения активного инсулина IOB**, при которых следует снизить агрессивность цикла, могут не совпадать для разных видов пищи. Но особенно в первый час после начала еды, который очень важен в режиме **UAM**. It will differ for each user. У некоторых пользователей усваивается всего около 30 г/час, и тогда можно задать разумный **IOB**, не зависящий от конкретной еды.

Для особой еды или чтобы снизить его перед спортом, порог **IOB** можно быстро изменить в вашей **автоматизации**.

Automation (#3), "iobTH reached => **SMBs** off”, is defined to end (or pause, until another wave of carb-related rise hits) the aggressive **SMB** boosting.

![Automation #3: IOB of 5.5 or more with no temp target running starts a temp target of 111 mg/dL](../images/fullClosedLoop04.png)

Автоматизация #3

Она сообщает циклу, что выше заданного вами **порога IOB** лучше больше не использовать **SMB**

- The given example does that by setting TT=111 (which is kind of arbitrary; pick a number>100 that you easy recognize as your automated **SMB** shut-off)
- In **AAPS**' [Settings → OpenAPS SMB](#Preferences-openaps-smb-settings), generally do not allow **SMB** at elevated target.                                                                                                                   
  The insulin required will then have to be delivered with much more caution through the bottleneck of **TBRs**

**Внимание: Автоматизация #3 работает только при отсутствии временной цели TT.** Поэтому, если ранее устанавливалась "Временная цель TT Ожидаемый прием пищи", она должна быть завершена к этому времени, обычно спустя 30-40 минут после начала еды.

Один из способов — создать условие **автоматизации**, которое завершает работающую ВЦ «Ожидаемый прием пищи» при условии **IOB**>65% * iobTH.
> Способы работы с ВЦ «Ожидаемый прием пищи» Некоторые пользователи устанавливают ВЦ «Ожидаемый прием пищи» примерно за час или больше до начала еды (кнопкой ВЦ или автоматически через пониженную целевую **ГК** в **профиле**, если время еды довольно постоянное), чтобы гарантировать низкую начальную **ГК** и немного повышенный **IOB**. But, assuming the **FCL** is always en route towards target, this might not yield much and you may prefer to define an **Automation** that sets an EatingSoonTT at recognition of meal start (glucose delta, or acceleration = delta > avg delta). Низкая **ВЦ** важна на этом этапе, так как цикл рассчитывает любой **SMB** по формуле (прогнозируемая глюкоза минус ВЦ)/sens, поэтому низкая ВЦ делает итоговый insulinReq больше.

After the first boosted **SMB**s were given, your set iobTH and **Automation** #3 should strike a good balance of limiting the glucose peak, but also not leading to a hypo after the meal.

Если ваш завтрак по количеству углеводов сильно отличается от обычного ужина, вам могут помочь **автоматизации**, которые действуют в соответствующее время суток и имеют разный **iobTH** (возможно, также разные дельты и разный **процент профиля**). И вы, задавая спектр своей еды и настройки (особенно **iobTH**), и цикл, управляя растущей кривой **ГК**, должны принять определенную высоту пиков, чтобы снизить риск гипо в конце **DIA** от **SMB**.

### Stagnation at high bg values

In case, after a “rich” meal, a long-lasting stagnation with **high BG** value is seen, **Automation** #4 (below), “post-meal High”, helps deal with fatty acid resistance: After multi-course meals, large greasy pizza, raclette evening, the glucose curve can form two humps or, very often, an elongated high plateau.

![Automation #4: glucose above 160 mg/dL and Autosens below 120% starts profile 120% for 15 min](../images/fullClosedLoop05.png)

Автоматизация #4

![Automation #5: profile at 120% and glucose below 150 mg/dL switches back to the normal profile](../images/fullClosedLoop06.png)

Автоматизация #5

Автоматизация #4, "Высокая ГК после еды", подходит и для гибридного цикла.

Кроме того, Автоматизация #5, “Stop post-meal High”, применяется для снижения агрессивности подачи инсулина как только начинает падать уровень глюкозы. (Однако часто алгоритм всё равно ограничивает количество инсулина для предотвращения гипогликемии, поскольку прогнозируемый уровень глюкозы уже снижается).

## Hypo prevention

Главная проблема в том, что **UAM** **АЗЦ** (без ввода углеводов) **не может знать, сколько граммов углеводов еще осталось** для усвоения, которые могли бы израсходовать этот «хвост» инсулина, не вызывая у вас гипо.

С помощью усиленных **SMB** **АЗЦ** «догнал» то, что раньше делал болюс на еду. Но **в конце периода активности инсулина, на первое место выходит профилактика гипогликемии**.

Готовясь к **АЗЦ**, пользователь должен внимательно посмотреть на **изменение IOB во времени** при типичной еде и оценить, **когда его становится слишком много и как это поймать настройкой ваших автоматизаций**. Это возможно, потому что у нас есть несколько «регулировочных винтов». Сделать это правильно может быть непросто

Generally, it makes no sense to keep optimizing settings for one kind of meal. Как только появятся хорошие настройки для любимого обеда, следует проверить, как они работают с другими продуктами, а где потребуются «компромиссы».

Чтобы предотвратить гипогликемию в послеобеденные 3 – 5 часов, уменьшите агрессивность алгоритма и не допускайте избытка активного инсулина. Конкретные способы:

- Делайте **ISF** все мягче уже во время роста глюкозы, как в приведенных примерах автоматизаций #1 и #2.
- Задайте порог IOB, начиная с которого **AAPS** становится заметно осторожнее (автоматизация #3, выше). Note this **iob** can be exceeded, by the last **SMB** before it went into effect; and then further by TBRs if the loop sees insulinReq. Carbs getting absorbed will provide a counter-movement towards lower iob.
- Порог IOB можно задавать по-разному для разной еды: клонируя автоматизации, легко сделать разные значения для завтрака, обеда и ужина (или даже для мест, например столовой на работе или в гостях у тещи и т. д.)
> Внутри этих интервалов можно различать еще больше, задавая разные ВЦ для еды с малым количеством углеводов и для быстрых углеводов и т. д. Так можно «закодировать» разные классы еды, которые бывают в это время суток, и вызывать их с помощью специально настроенных для них **автоматизаций**. Вероятно, это не нужно, если ваши привычки питания не очень сильно меняются.

Before a special meal challenge, you can raise your **iob** threshold, or make another change in any of your Automations within under 5 seconds, right on your AAPS phone (**Manage → Automation**).

Опасность гипогликемии через несколько часов после еды, по существу, зависит от того, будет ли **оставшийся инсулин** **расходоваться на покрытие «пролонгированных углеводов»** (излишних/замедленных углеводов/белков/жиров/клетчатки).

Со временем вы изучите закономерности, настроите свои автоматизации и, возможно, даже немного измените привычки питания. Например, можно иногда позволить себе поздний маленький(!) перекус, который поможет сохранить хороший **баланс между активностью инсулина и усвоением углеводов** на **все** время приема пищи (переваривание, усвоение) и тем самым облегчит жизнь вашему циклу (и вам).

### Order of programmed Automations

Проблемы могут возникать при пересекающихся условиях в **автоматизациях**. Пример: проблема в том, что дельта >8 — это также дельта >5, т. е. могут быть две конкурирующие **автоматизации**. Что тогда делает цикл? It always decides according to the sequence in which your **Automations** appear in **Manage → Automation**.  Пример: Правило дельта > +8 должно быть первым в списке (и если все правила активны, запускать самый сильный ответ); потом алгоритм проверяет значение дельты >5 (соответственно более мягкий ответ). Если отсортировать список наоборот, правило дельта>8 никогда не вступит в силу, поскольку правило дельта>5 уже применяется первым.
> Совет по автоматизациям: изменить порядок очень легко. In **Manage → Automation**, touch and hold the **=** handle on the right of a rule and drag it to another position.

Можно очень быстро подстраиваться к любым условия или действиям, прямо на экране AndroidAPS; например, если вы отправляетесь на праздничный ужин. (Но не забудьте вернуть очерёдность списка в нормальное состояние на следующий день).

(full-closed-loop-troubleshooting)=

## Устранение неполадок

### How to get back into Hybrid Closed Loop

You can untick the checkboxes of the **Automations** related to your **FCL**, and go back to bolusing for meals and make carb inputs again. If you had removed the **Insulin** or **Calculator** buttons from your main screen, add them back in the [QuickLaunch toolbar](#quicklaunch) configuration (they always remain available under **Treatments** in the bottom navigation). Be aware that now it is again up to you to bolus for meals.

It may be wise to do **FCL** only for meals (time slots) where **Automations** are fully defined and clicked on, and un-click only those for the other meal times when you like to do **HCL** (or have none defined yet, in your transition period).

For instance, it is perfectly possible, without any extra steps after **Automations** for dinner time slots are defined, to do **FCL** only for dinners, while breakfast and lunch are done in a **HCL** as you are used to.



### Выполняются ли еще предварительные условия для АЗЦ?

- Базовый **профиль** все еще правильный?
- Ухудшилось ли качество данных **CGM**
- См. предварительные требования (выше).

### Glucose goes too high

- Момент приёма пищи не распознается вовремя
    - Проверьте стабильность Bluetooth-соединений
    - Проверьте, можно ли задать меньшие дельты для запуска первого **SMB**
    - Experiment with an aperitif, soup a couple of minutes before meal start
- Слишком малые дозы микроболюсов SMB
    - Проверьте порядок **автоматизаций** (например: большая дельта перед малой)
    - Check (real-time) in the **APS** plugin screen whether hourly profile basal and set minutes (max 120) limit allowed SMB size
    - Check (real-time) in the **APS** plugin screen whether %profile must  be set bigger
- Если все настройки достигли лимитов, возможно, вам придется жить с временным высоким или применить диету.
> If you are ready to test a dev build, [Auto ISF](#Open-APS-features-auto-isf) also allows further expanded SMB sizes. Некоторые пользователи также делают небольшой преболюс в своем «АЗЦ». Однако это влияет на поведение кривой глюкозы, а значит, и на обнаружение роста и запуск **SMB**, поэтому это непросто сделать с убедительной общей пользой.
- Важное наблюдение пилотных пользователей: то, как ваши кривые глюкозы и IOB подходят к началу еды, сильно влияет на пик от углеводов: Снижение ГК (например, к заданной ВЦ «Ожидаемый прием пищи»), небольшой запас IOB и кривая, которая уже поворачивает к сильному положительному ускорению, по-видимому, очень помогают держать пики низкими.

### Glucose goes too low

- Некорректно определяется время начала приёма пищи
    - Проверьте, можно ли задать большие дельты для запуска первого **SMB**
    - Click “User action” in the related Automation, so in the future you can ad hoc decide to block execution of the Automation if not meal-related
    - Чтобы перекусы не запускали **SMB** как для еды, установите ВЦ>100 во время перекуса (как вы и так делаете при спорте и для перекусов против гипо)
- SMB вводят слишком много инсулина
    - Check (real-time) in the **APS** plugin screen whether **SMB max range extension** must be set smaller
    - Check (real-time) in the **APS** plugin screen whether **Percentage Profile** must  be set smaller
    - Коэффициент SMB вероятно должен быть меньше, чем установлен. Учтите, что в этом случае это действует на все **SMB** (во всех временных интервалах),
- Проблемы с инсулиновым «хвостом» после еды
    - Возможно, потребуется перекус (из-за прогноза гипогликемии) или прием таблеток декстрозы (если вы уже в зоне гипогликемии). Но учтите: углеводы, которые цикл в какой-то момент может запросить, скорее всего, сильно завышены, так как у цикла нет совсем никакой информации о том, сколько съеденных углеводов еще ждет усвоения (вы же можете это примерно оценить, включая жиры и белки).
    - Полезно было бы знать, возникает ли проблема в основном уже в фазе роста ГК. В этом случае простым решением может быть установка более низкого порога iobTH.
    - Если потребность в дополнительных углеводах возникает слишком часто, запишите, сколько граммов потребовалось (не считая того, что вы в итоге переборщили и вам снова потребовался дополнительный инсулин).  Затем по значению IC в профиле оцените, на сколько меньше инсулина должен был ввести **SMB**, и используйте эту информацию при настройке (**процента профиля** в **автоматизациях** или, может быть, заданного iobTH). This may relate to the **SMBs** given when glucose was high, or also to the **SMBs** during the **BG** rise.
    - Вполне может быть, что вам просто придется принять более высокие пики **ГК**, чтобы не уходить в гипо. Or change diet to something with lower amounts of carbs, and higher amount of protein and fats.


### More info

Make sure you stay in touch with other **FCL** users.

Discussion Full Closed Loop using Automations:

- На английском:   [Discord Channel](https://discord.gg/ChXj8BaKwA)

- На немецком:  [German Looper Community](https://de.loopercommunity.org/t/ueber-die-kategorie-full-loop/10107)
