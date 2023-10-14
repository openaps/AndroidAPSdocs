## Версия разработчиков

<font color="#FF0000"><strong>Attention:</strong></font>
Dev branch is for the further development of AAPS only. Она должен использоваться на отдельном телефоне для тестирования <font color="#FF0000"><strong> а не для реального цикла!</strong></font>

The most stable version of AAPS to use is that in the [Master branch](https://github.com/nightscout/AndroidAPS/tree/master). Рекомендуется оставаться на версии Master для реального использования.

The dev version of AAPS is only for developers and testers comfortable dealing with stacktraces, looking through log files and maybe firing up the debugger to produce bug reports that are helpful to the developers (in short: people that know what they are doing without being assisted!). Поэтому многие незавершенные функции отключены. To enable these features enter **Engineering Mode** by creating a file named `engineering_mode` in directory /AAPS/extra . Включение инженерного режима может полностью нарушить работу цикла.

Тем не менее, версия разработчиков-хорошее место для того, чтобы понять, какие функции тестируются, помочь исправлению ошибок и дать отзыв о том, как работают новые функции. Часто люди тестируют версию Dev на старом телефоне и помпе до тех пор, пока они не уверены, что версия стабильна -любое ее использование на их собственный риск. При тестировании новых функций помните, что они по-прежнему в процессе разработки. Делайте это на свой страх и риск & с должной осмотрительностью, чтобы сохранить себя в безопасности.

Если вы нашли ошибку или думаете, что что-то пошло не так в версии dev, просмотрите [вкладку проблемы](https://github.com/nightscout/AndroidAPS/issues) и проверьте, не столкнулся ли с проблемой кто-либо еще, и, если нет, добавьте ее сами. Чем больше информации вы можете здесь разместить, тем лучше (не забывайте, что от вас могут понадобиться [лог-файлы](../Usage/Accessing-logfiles.md). Новые функции можно также обсудить в [ discord ](https://discord.gg/4fQUWHZ4Mw).

A dev version has an expiration date. This seems inconvenient when using it satisfactorily, but serves a purpose. When a single dev version doing the rounds, it is easier to keep track of bugs that people are reporting. The developers do not want to be in a position where there are three versions of dev in the wild where bugs are fixed in some and not others, and people continue to report the fixed ones.