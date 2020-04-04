## Версия разработчиков

<font color="#FF0000"><strong> Внимание: </strong></font>
Версия разработчиков -только для дальнейшего развития AndroidAPS. Она должен использоваться на отдельном телефоне для тестирования <font color="#FF0000"><strong> а не для реального цикла!</strong></font>

Самая стабильная версия AndroidAPS для обычного пользователя - [ Master branch ](https://github.com/MilosKozak/AndroidAPS/tree/master). Рекомендуется оставаться на версии Master для реального использования.

Версия dev AndroidAPS - только для разработчиков и тестировщиков, которые умеют работать с stacktraces, просматривать файлы журналов, запускать отладчик для создания отчетов об ошибках, которые помогают разработчикам (короче говоря: для людей, которые знают, что делают без посторонней помощи!). Поэтому многие незавершенные функции отключены. Чтобы включить эти функции, войдите в ** режим разработчика**, создав файл ` engineering_mode ` в том же каталоге, где находятся файлы журналов. Включение инженерного режима может полностью нарушить работу цикла.

However, the Dev branch is a good place to see what features are being tested and to help iron out the bugs and give feedback on how the new features work in practice. Often people will test the Dev branch on an old phone and pump until they are confident it is stable - any use of it is at your own risk. When testing any new features, remember that you are choosing to test a still-in-development feature. Do so at your own risk & with due diligence to keep yourself safe.

If you find a bug or think something wrong has happened when using the Dev branch, then view the [issues tab](https://github.com/MilosKozak/AndroidAPS/issues) to check whether anyone else has found it, or add it yourself if not. The more information you can share here the better (don't forget you may need to share your [log files](../Usage/Accessing-logfiles.md). The new features can also be discussed in the [gitter room](https://gitter.im/MilosKozak/AndroidAPS).