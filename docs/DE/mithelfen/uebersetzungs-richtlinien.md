# Übersetzungs-Richtlinien
## Abkürzungen
Abkürzungen sollten **nur** verwendet werden, wenn dies aus **Platzgründen** nicht anders möglich ist,
sofern die Abkürzung nicht sowieso schon die zu bevorzugende Begrifflichkeit ist, siehe in der Liste unten.

Die Titel von Einstellungen sollten z.B. die Länge einer Zeile nicht überschreiten,
da diese sonst **nicht vollständig dargestellt werden**, wohingegen in der Beschreibung
genügend Raum ist, um Dinge **in aller Ausführlichkeit** zu erklären.

Einige Abkürzungen wie z.B. `SMB` oder `AMA` haben sich mit der Zeit im Sprachgebrauch
zu **eigenständigen Namen** entwickelt und bedürfen **keines Artikels**,
genauso wurde mit der Zeit der Bezug von Abkürzungen zu deren ausgeschriebener Form verloren,
sodass sich deren **Artikel geändert** haben.

## Imperativ vs Infinitiv
Einige englische Sätze lassen sich sowohl als Imperativ als auch als Infinitiv übersetzen.
Dies ist häufig bei den Einstellungen der App der Fall.
Ist die Phrase eine **klare, direkte Aufforderungen** an den Nutzer (z.B. `Consider the following:`),
so wird der Imperativ gewählt (`Beachte folgendes:`), andernfalls der Infinitiv (z.B. `Enable SMB` -> `SMB aktivieren`),
wobei in den App-Einstellungen der Infinitiv häufig die bessere Wahl ist.

Zu beachten gilt des Weiteren, dass Imperativsätze einen **Punkt am Satzende** erfordern und Infinitive **nicht**.

## Zusammengesetzte Wörter
Im Gegensatz zum Englischen werden im Deutschen zusammengesetzte Wörter auch tatsächlich **zusammengeschrieben**.
Aus `Blood glucose` wird dann z.B. `Blutzucker`.

Einige Wörter wie z.B. `Careportalereignisse` können
dadurch **unleserlich** werden, was durch ein gezieltes Setzen von **Bindestrichen** umgangen werden kann. -> `Careportal-Ereignisse`

## Nicht wortwörtliche Übersetzungen
Manchmal kann der Fall eintreten, dass sich eine englische Phrase **nur schwer übersetzen lässt**,
ohne dabei sehr gebrochen zu klingen. In einem solchen Fall kann es helfen,
eine **weniger wortwörtliche Übersetzung zu finden**, die aber dennnoch **denselben Ausdruck** vermittelt.

Aus `Max daily safety multiplier` ist beispielsweise `Sicherheitsmultiplikator des Basalhöchstwertes` geworden.

Schreibe dann aber noch einmal die **englische Version in Klammern dahinter**, um den Support nicht zu behindern.

## Anglizismen
Anglizismen sind Wörter, die eigentlich **aus dem Englischen stammen**, aber zunehmends auch **im deutschen Sprachgebrauch auftreten**.

Dies ist häufig bei **technischen Dingen** der Fall, da neue Entwicklungen schneller aufkommen als eine **passende deutsche Begrifflichkeit gefunden wird**.
Bei uns tritt dieses Phänomen verstärkt auf, da Menschen unterschiedlicher Nationalitäten aufeinander treffen.

Überlege also, ob es nicht besser wäre, bei einem bereits **etablierten englischen Begriff zu bleiben**
anstatt ein deutsches Äquivalent zu finden.

Ein gutes Beispiel dafür ist das Wort `Loop`, das in unserem Kontext **eher** verstanden wird als eine Übersetzung wie `Kreislauf`.

## Generelles zur deutschen Sprache
Beim Übersetzen sollte jeder **bemüht** sein, die Regeln der deutschen Sprache **nach bestem Wissen** Anwendung finden zu lassen.
Scheue dich also nicht, auch 'mal ein **Wörterbuch** zur Hand zu nehmen.
Häufige Fehlerquellen sind...

* Punkte, wo **keine** hingehören und fehlende Punkte, wo sie **eigentlich auftreten müssten**.
Wenn du dir nicht sicher bist, ob ein Punkt erforderlich ist, suche in deinem Satz nach einem **Subjekt** (also wer etwas tut)
und einem **Prädikat** (also was getan wird). Ein Beispiel für einen vollständigen deutschen Satz wäre `Er (Subjekt) übersetzt (Prädikat).`
Lassen sich jene finden, handelt es sich um einen **vollständigen Satz** und folglich ist ein Punkt **notwendig**.
Auch Sätze, die den **Imperativ** verwenden, erfordern am Ende einen Punkt (oder ein Ausrufezeichen).

* Fehlende Kommata bei erweiterten Infinitiven. Erweiterte Infinitive **lassen sich am Signalwort `zu` erkennen**,
das auch **inmitten eines Wortes** auftreten kann. Ein Beispiel dafür wäre der erste Satz dieses Abschnittes.

* Verwechslungen von `dass` und `das`. Als **Faustregel** gilt, dass das `das(s)` mit **einem** `s` geschrieben wird,
wenn es durch `dieses`, `welches` oder `jenes` ersetzt werden kann.

* Falsche Bildung des Imperatives. Imperative werden immer mit einem **`i`** gebildet!

## Begrifflichkeiten
**[Betrachte diese Seite auf GitHub für eine korrekte Darstellung der Tabelle.](https://github.com/openaps/AndroidAPSdocs/blob/master/docs/DE/mithelfen/uebersetzungs-richtlinien.md)**

Diese Tabelle listet eine Reihe von Begriffen und deren bevorzugten Schreibweisen **fett markiert** auf.
Desweiteren sind alle Schreibweisen, falls überhaupt nötig, mit dem jeweiligen Artikel gekennzeichnet.
Für `das temporäre Ziel` lautet diese `das Temp Target`, was bedeutet, dass die Letztere stattdessen genutzt werden sollte.

| Begriff                                    	| Abkürzung           	|
|--------------------------------------------	|---------------------	|
| **OpenAPS**                                	| OAPS                	|
| **AndroidAPS**                             	| AAPS                	|
| der Super Micro Bolus                      	| **SMB**             	|
| der Meal Assist                            	| **MA**              	|
| der Advanced Meal Assist                   	| **AMA**             	|
| das Un-announced meal                      	| **UAM**             	|
| die Carbs On Board                         	| **das COB**         	|
| das Insulin On Board                       	| **das IOB**         	|
| **das (High / Low) Temp Target**           	| das (High / Low) TT 	|
| die Open source reference implementation 0 	| **Oref0**           	|
| die Open source reference implementation 1 	| **Oref1**           	|
| **die Tagesgesamtmenge**                   	| die TGM             	|
| **der Blutzucker**                         	| der BZ              	|
| **das Careportal**                         	|                     	|
| **die temporäre Basalrate**                	| die TBR             	|
| **Autosens**                               	|                     	|
| **Rapid-Acting Oref**                      	|                     	|
| **Ultra-Rapid Oref**                       	|                     	|
| **Free-Peak Oref**                         	|                     	|
| **xDrip**                                  	|                     	|
| **Glimp**                                  	|                     	|
| **Poctech**                                	|                     	|
| **die Dana R**                             	|                     	|
| **die Dana RS**                            	|                     	|
| **die Accu-Chek Insight**                  	|                     	|
| **die Accu-Chek Combo**                    	|                     	|
| **der Dexcom G4**                          	|                     	|
| **der Dexcom G5**                          	|                     	|
| **der Dexcom G6**                          	|                     	|
