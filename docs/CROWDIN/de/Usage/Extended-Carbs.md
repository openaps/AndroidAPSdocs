(Extended-Carbs-extended-carbs-ecarbs)=
# Verzögerte Kohlenhydrate / "eCarbs"

## Was sind eCarbs und wann sind sie nützlich?

Im Rahmen einer normalen Pumpen-Therapie sind verzögerte Boli ein guter Weg, um mit fettigen oder sonstigen langsam absorbierenden Mahlzeiten zurecht zu kommen, die die Glukosewerte im Blut länger erhöhen als das Insulin wirkt. Im Zusammenhang mit dem Loopen sind jedoch verzögerte Boli wenig sinnvoll (und werfen technische Schwierigkeiten auf), da sie im Grunde eine feste hohe temporäre Basalrate darstellen, was der normalen Funktionsweise des Loops - der die Basalraten dynamisch anpasst - widerspricht. For details see [extended bolus](Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment) below.

Es gibt aber trotzdem das Bedürfnis, mit solchen Mahlzeiten umzugehen. Deshalb unterstützt AndroidAPS ab der Version 2.0 so genannte erweiterte Kohlenhydrate oder eCarbs.

eCarbs sind Kohlenhydrate, die sich über mehrere Stunden verteilen. Bei einer Standardmahlzeit, die mehr Kohlenhydrate enthält als Fett/Eiweiß, ist die Eingabe der Kohlenhydrate vor dem Verzehr (ggf. unter Reduzierung des Mahlzeiten-Bolus) normalerweise ausreichend, um eine zu frühe Insulinabgabe zu verhindern.  Aber bei langsamer absorbierenden Mahlzeiten, bei denen eine auf einmal eingegebene Kohlenhydratmenge dazu führen würde, dass der SMB zu viel IOB aufbaut, können eCarbs verwendet werden, um besser zu simulieren, wie die Kohlenhydrate (und alle anderen blutzuckersteigernden Faktoren) wirklich absorbiert werden und sich auf den Blutzuckerspiegel auswirken. Mit diesen Informationen kann der Loop den SMB zur Bewältigung dieser Kohlenhydrate besser einsetzen, was als eine Art dynamischer verzögerter Bolus zu sehen ist (dies sollte auch ohne SMB funktionieren, ist dann aber wahrscheinlich nicht so effektiv).

**Note:** eCarbs aren't limited to fatty / protein heavy meals: they can be also be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like corticosteroids.

## Methoden der Verwendung von eCarbs

To enter eCarbs, set a duration in the *Carbs* dialog on the overview tab, the total carbs and optionally a time shift (*numbers below are just examples, you will need to try your own values to arrive at satisfactory glucose response for your use-cases*):

```{image} ../images/eCarbs_Dialog.png
:alt: Eingabe Kohlenhydrate
```

Die eCarbs auf dem Homescreen, beachte die Kohlenhydrate in Klammern im COB-Feld, was die für die Zukunft verbliebenen Kohlenhydrate zeigt:

```{image} ../images/eCarbs_Graph.png
:alt: eCarbs im Diagramm
```

Kohlenhydrat-Einträge, die in der Zukunft liegen, sind auf dem Behandlungen-Reiter dunkelorange:

```{image} ../images/eCarbs_Treatment.png
:alt: eCarbs in der Zukunft im Reiter Behandlungen
```

______________________________________________________________________

A way to handle fat and protein with that feature is described here: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## Empfohlene Einrichtung, Beispielszenario und wichtige Hinweise

The recommended setup is to use the OpenAPS SMB APS plugin, with SMBs enabled as well as the *Enable SMB with COB* preference being enabled.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the *calculator* and then use the *carbs* button to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours.

**Important notes:** You'll need to try out and see which concrete values work for you of course. You might also carefully adjust the setting *max minutes of basal to limit SMB to* to make the algorithm more or less aggressive. Bei Low-Carb-Ernährung und fett-/eiweißreichen Mahlzeiten reicht es möglicherweise aus, nur eCarbs ohne manuellem Mahlzeitenbolus einzugeben (mehr dazu im Blogbeitrag oben). Wenn eCarbs eingegeben werden, wird im Careportal automatisch eine Notiz angelegt, damit es einfacher ist, die Eingaben zu überprüfen und zu verbessern.

(Extended-Carbs-extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## Verzögerter Bolus und warum dieser nicht mit Closed Loop funktioniert?

Wie oben bereits erwähnt sind verzögerte oder sog. Multi-Wave-Boli beim Loopen nicht sinnvoll. [See below](Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### Verzögerter Bolus und Wechsel zum Open Loop - nur für Dana- und Insight-Pumpe

Es kam immer wieder der Wunsch auf, verzögerte Boli auch in AAPS zu nutzen, um spezielle Mahlzeiten wie gewohnt behandeln zu können.

Daher gibt es ab Version 2.6 für Nutzer der Dana- und Insight-Pumpe eine Option für einen verzögerten Bolus.

- Der Closed Loop wird automatisch gestoppt und für die Laufzeit des verzögerten Bolus zum Open Loop gewechselt.
- Bolus units, remaining and total time will be shown on homescreen.
- On Insight pump extended bolus is *not available* if [TBR emulation](Accu-Chek-Insight-Pump-settings-in-aaps) is used.

```{image} ../images/ExtendedBolus2_6.png
:alt: Verzögerter Bolus in AAPS 2.6
```

(Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### Warum ein verzögerter Bolus beim Loopen nicht funktioniert

1. Der Loop bestimmt, dass jetzt 1,55 IE/Std. abgegeben werden soll. Ob das als verzögerter Bolus oder TBR abgegeben wird, ist dem Algorithmus egal. In der Tat verwenden einige der Pumpen den verzögerten Bolus. Was soll dann geschehen? Most pump drivers then stop the extended bolus -> You didn't even need to start it.

2. Wenn man den verzögerten Bolus als Eingabe hätte, was soll dann damit im Modell geschehen?

   1. Soll er zusammen mit der BR als neutral angesehen werden und darauf geloopt werden? Dann müsste der Loop auch den Bolus verringern können, wenn man z.B. zu niedrig gerät und das gesamte "neutrale" Insulin weggenommen wird?
   2. Soll der verzögerte Bolus einfach dazugezählt werden? Dann soll der Loop in also einfach weiterlaufen lassen? Selbst in der ärgsten Hypo? Das halte ich für nicht so gut: Es wird eine Hypo vorhergesehen aber sie darf nicht verhindert werden?

3. Das IOB, dass der verzögerte Bolus aufbaut materialisiert sich beim nächsten Durchlauf nach 5 Minuten. Entsprechend würde der Loop weniger Basal geben. So not much changes... except that the possibility of hypo avoidance is taken.
