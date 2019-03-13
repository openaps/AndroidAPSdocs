# Verzögerte Kohlenhydrate / "eCarbs"

Im Rahmen einer normalen Pumpen-Therapie sind verzögerte Boli ein guter Weg, um mit fettigen oder sonstigen langsam absorbierenden Mahlzeiten zurecht zu kommen, die die Glukosewerte im Blut länger erhöhen als das Insulin wirkt. Im Zusammenhang mit dem Loopen sind jedoch verzögerte Boli wenig sinnvoll (und werfen technische Schwierigkeiten auf), da sie im Grunde eine feste hohe temporäre Basalrate darstellen, was der normalen Funktionsweise des Loops - der die Basalraten dynamisch anpasst - widerspricht. Es gibt aber trotzdem das Bedürfnis, mit solchen Mahlzeiten umzugehen. Deshalb unterstützt AndroidAPS ab der Version 2.0 so genannte erweiterte Kohlenhydrate oder eCarbs.

eCarbs sind Kohlenhydrate, die sich über mehrere Stunden verteilen. Bei einer Standardmahlzeit, die mehr Kohlenhydrate enthält als Fett/Eiweiß, ist die Eingabe der Kohlenhydrate vor dem Verzehr (ggf. unter Reduzierung des Mahlzeiten-Bolus) normalerweise ausreichend, um eine zu frühe Insulinabgabe zu verhindern. Aber bei langsamer absorbierenden Mahlzeiten, bei denen eine auf einmal eingegebene Kohlenhydratmenge dazu führen würde, dass der SMB zu viel IOB aufbaut, können eCarbs verwendet werden, um besser zu simulieren, wie die Kohlenhydrate (und alle anderen blutzuckersteigernden Faktoren) wirklich absorbiert werden und sich auf den Blutzuckerspiegel auswirken. Mit diesen Informationen kann der Loop den SMB zur Bewältigung dieser Kohlenhydrate besser einsetzen, was als eine Art dynamischer verzögerter Bolus zu sehen ist (dies sollte auch ohne SMB funktionieren, ist dann aber wahrscheinlich nicht so effektiv).

eCarbs beschränken sich nicht auf fett-/eiweißlastige Mahlzeiten: sie können auch eingesetzt werden, um in anderen Situationen zu helfen, in denen es blutzuckererhöhende Einflüsse gibt, z.B. andere Medikamente wie Kortison.

Um eCarbs einzugeben, musst du auf dem Homescreen im Dialogfeld "*Kohlenhydrate*" die Dauer, die Kohlenhydratmenge und optional eine Zeitverschiebung festlegen:

<img src="https://1.bp.blogspot.com/-gnWKSBIBO2g/WuTPV0Rya3I/AAAAAAAAAEg/BvqiZYrsuKcgbny5t1sHWlPS6feWq-xEwCLcBGAs/s1600/Screenshot_20180427-144305.png" width=400>

Die eCarbs auf dem Homescreen, beachte die Kohlenhydrate in Klammern im COB-Feld, was die für die Zukunft verbliebenen Kohlenhydrate zeigt:

<img src="https://4.bp.blogspot.com/-sgc9XdUeaoQ/WuTPXxfaIuI/AAAAAAAAAEk/p7toa_aq_oIWWTnzoQFUPHt4JdPkaXrwwCLcBGAs/s1600/Screenshot_20180427-144324.png" width=400>

Kohlenhydrat-Einträge, die in der Zukunft liegen, sind auf dem Behandlungen-Reiter dunkelorange:

<img src="https://user-images.githubusercontent.com/1732305/38613978-e6d1748e-3d8b-11e8-9d62-154fe73443da.png" width=400>

* * *

Ein konkretes Beispiel zum Umgang mit Fett und Eiweiß im Rahmen dieser Funktion wird hier beschrieben: https://adriansloop.blogspot.co.at/2018/04/page-margin-0.html

* * *

Es wird empfohlen, das APS-Plugin "OpenAPS SMB" zu nutzen, SMB zu aktivieren und die Einstellung *Aktiviere SMB während aktiver Kohlenhydrate* zu aktivieren.

Eine Szenario z. B. für eine Pizza wäre, einen anfänglichen (Teil-)Bolus über den *Rechner* zu geben und dann die Schaltfläche "*Kohlenhydrate*" zu verwenden, um die restlichen Kohlenhydrate für eine Dauer von ca. 4-6 Stunden, beginnend nach 1 oder 2 Stunden, einzugeben. Du musst natürlich selbst ausprobieren, welche konkreten Werte bei dir am besten funktionieren. Du könntest auch die Einstellung *SMB-Basal-Limit in Minuten* vorsichtig anpassen, um den Algorithmus mehr oder weniger aggressiv zu einzustellen. Bei Low-Carb-Ernährung und fett-/eiweißreichen Mahlzeiten reicht es möglicherweise aus, nur eCarbs ohne manuellem Mahlzeitenbolus einzugeben (mehr dazu im Blogbeitrag oben).

Wenn eCarbs eingegeben werden, wird im Careportal automatisch eine Notiz angelegt, damit es einfacher ist, die Eingaben zu überprüfen und zu verbessern.