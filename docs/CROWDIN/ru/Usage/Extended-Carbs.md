(Extended-Carbs-extended-carbs-ecarbs)=
# Пролонгированные (расширенные) углеводы / "eCarbs"

## Что такое eCarbs и когда они полезны?

При обычной помповой терапии пролонгированные болюcы-хороший способ справиться с жирной или медленно усваиваемой пищей, которая увеличивает уровень глюкозы в крови дольше, чем работает инсулин. Однако в контексте алгоритма ИПЖ пролонгированные болюсы не имеют большого смысла (и создают технические трудности), поскольку они представляют собой по сути, фиксированную высокую временную базальную скорость, которая идет вразрез с тем, как работает цикл ИПЖ, который должен динамически корректировать базальную скорость. For details see [extended bolus](Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment) below.

Однако необходимость работать с такой едой все же существует. Именно поэтому AndroidAPS начиная с версии 2.0 поддерживает так называемые расширенные углеводы или eCarbs.

eCarbs-это углеводы, которые растягиваются на несколько часов. Для стандартного питания с бОльшим содержанием углеводов, чем жира/белка, введение углеводов заранее (и при необходимости уменьшение начального болюса), как правило, достаточно для предотвращения преждевременной подачи инсулина.  Но для медленно поглощающейся еды, при которой предварительное введение углеводов приводит к слишком большой величине активного инсулина IOB из-за микроболюсов SMB, eCarbs могут применяться для более точного моделирования того, как усваиваются углеводы и влияют на уровень глюкозы в крови. С помощью этой информации алгоритм может управлять микроболюсами SMB которые выступают как пролонгированный болюс на такие углеводы ( должно работать и без SMB, но, возможно, менее эффективно).

**Note:** eCarbs aren't limited to fatty / protein heavy meals: they can be also be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like corticosteroids.

## Механизмы использования eCarbs

To enter eCarbs, set a duration in the *Carbs* dialog on the overview tab, the total carbs and optionally a time shift (*numbers below are just examples, you will need to try your own values to arrive at satisfactory glucose response for your use-cases*):

```{image} ../images/eCarbs_Dialog.png
:alt: Введение углеводов
```

ECarbs на вкладке обзора, обратите внимание на углеводы в скобках в поле COB, в котором показаны углеводы в будущем:

```{image} ../images/eCarbs_Graph.png
:alt: eCarbs на графике
```

Углеводы в будущем окрашены в темно-оранжевый цвет на вкладке Терапии:

```{image} ../images/eCarbs_Treatment.png
:alt: eCarbs в будущем на вкладке лечения
```

______________________________________________________________________

A way to handle fat and protein with that feature is described here: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Рекомендуемая настройка, пример сценария и важные заметки

The recommended setup is to use the OpenAPS SMB APS plugin, with SMBs enabled as well as the *Enable SMB with COB* preference being enabled.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the *calculator* and then use the *carbs* button to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours.

**Important notes:** You'll need to try out and see which concrete values work for you of course. You might also carefully adjust the setting *max minutes of basal to limit SMB to* to make the algorithm more or less aggressive. При низком содержании углеводов, высоким содержании жиров и белков, eCarbs может быть достаточен, чтобы обойтись без дополнительного контроля болюсов (см. пост блога выше). При создании eCarbs в портале терапии создается также запись для документирования, упрощающая итерацию и ввод данных.

(Extended-Carbs-extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Пролонгированный болюс и почему он не будет работать в среде замкнутого цикла?

Как упоминалось выше, пролонгированные или многоволновые болизы не работают в замкнутом цикле. [See below](Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Пролонгированный болюс и переключение на незамкнутый цикл - только для помп Dana и Insight

Некоторые пользователи просили предусмотреть пролонгированные болюсы в ААПС, так как хотели бы компенсировать специфические продукты питания привычным для себя образом.

Поэтому, начиная с версии 2.6, существует опция пролонгированного болюса для пользователей помп Dana и Insight.

- Closed loop will automatically be stopped and switched to open loop mode for the time running extended bolus.
- Bolus units, remaining and total time will be shown on homescreen.
- On Insight pump extended bolus is *not available* if [TBR emulation](Accu-Chek-Insight-Pump-settings-in-aaps) is used.

```{image} ../images/ExtendedBolus2_6.png
:alt: Пролонгиованный болюс в AAPS 2.6
```

(Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Почему пролонгированные болюсы не будут работать в среде замкнутого цикла

1. Цикл определяет, что скорость базала должна быть 1.55 ед/ч. Для алгоритма неважно подается ли при этом пролонгированный болюс или обычный временный базал TBR. На самом деле, на некоторых помпах возможен пролонгированный болюс. Что должно произойти в этом случае? Most pump drivers then stop the extended bolus -> You didn't even need to start it.

2. Если в качестве входных данных задан пролонгированный болюс, что должно произойти?

   1. Будет ли алгоритм считать базу нейтральной и работать невзирая на нее? Он также должен уметь уменьшать болюс, например, при низкой ГК, когда "нейтральный" инсулин уже израсходован?
   2. Следует ли просто добавить пролонгированный болюс? То есть, алгоритму петли нужно просто позволить продолжить? Даже при жесточайшей гипо? Не думаю, что это правильно: предвидится гипогликемия, но не предотвращается?

3. Активный инсулин IOB, который создается пролонгированным болюсом, материализуется через 5 минут при следующем прохождении. Соответственно, цикл снизил бы базал. So not much changes... except that the possibility of hypo avoidance is taken.
