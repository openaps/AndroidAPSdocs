# Development branch

<font color="#FF0000"><strong>Attention:</strong></font>
Dev branch is for the further development of AAPS only. Het hoort op een aparte telefoon te worden gebruikt om nieuwe softwareversies uit te testen <font color="#FF0000"><strong>niet voor het daadwerkelijke loopen!</strong></font>

The most stable version of AAPS to use is that in the [Master branch](https://github.com/nightscout/AndroidAPS/tree/master). Het wordt aangeraden om op de Master branch te blijven voor de loop die je in gebruik hebt.

The dev version of AAPS is only for developers and testers comfortable dealing with stacktraces, looking through log files and maybe firing up the debugger to produce bug reports that are helpful to the developers (in short: people that know what they are doing without being assisted!). Daarom zijn veel functies die nog niet voltooid zijn, uitgeschakeld in de app. To enable these features enter **Engineering Mode** by creating a file named `engineering_mode` in directory /AAPS/extra . Het inschakelen van de ontwikkelaarsmodus kan de loop volledig onbruikbaar maken.

In de Dev branch kun je zien welke functies worden getest, en je kunt er helpen met bugs ontdekken en feedback geven over hoe nieuwe functies in de praktijk werken. Vaak zullen mensen de Dev-branch testen met een oude telefoon en pomp totdat ze er vertrouwen in hebben dat die versie stabiel is - gebruik ervan is op jouw eigen risico. Bij het testen van nieuwe functies, vergeet niet dat je iets aan het testen bent dat nog middenin het ontwikkelingsproces is. Doe dit op je eigen risico & met de nodige voorzichtigheid om jezelf veilig te houden.

Als je een bug vindt of denkt dat er iets mis is gegaan terwijl je de Dev branch gebruikt, kijk dan op het tabblad [issues](https://github.com/nightscout/AndroidAPS/issues) om te zien of iemand anders al hetzelfde heeft gehad, of voeg het zelf toe als dat niet het geval is. The more information you can share here the better (don't forget you may need to share your [log files](../GettingHelp/AccessingLogFiles.md). Nieuwe functies kun je ook bespreken op [discord](https://discord.gg/4fQUWHZ4Mw).

A dev version has an expiration date. This seems inconvenient when using it satisfactorily, but serves a purpose. When a single dev version doing the rounds, it is easier to keep track of bugs that people are reporting. The developers do not want to be in a position where there are three versions of dev in the wild where bugs are fixed in some and not others, and people continue to report the fixed ones.