(Устранение неполадок - NSClient-устранение неполадок - nsclient)=

# Устранение неисправностей AAPSClient (старые названия- Клиент NS, NSClient - прим. перев.)

Для правильной работы AAPSClient требуется стабильное соединение с сайтом Nightscout. Нестабильная связь приводит к ошибкам синхронизации и высокой интенсивности использования данных.

Если никто не следит за вами на Nightscout - вы можете приостановить AAPSClient для экономии заряда аккумулятора или вы можете настроить NSClient таким образом, чтобы он подключался только по Wi-Fi и/или во время зарядки.

* Как обнаружить нестабильную связь?

Open the NSClient screen (**Configuration** > **Communication** > **NSClientV3** > **Open plugin**) and watch the **Status** and the log. With websockets enabled, the status should stay "connected", with almost no reconnection messages in the log. Если вы видите много повторных попыток соединения, то это свидетельство проблем со связью.

* перезапуск

As a first step, restart Nightscout and then your phone to see if the issue is permanent.

Если Nightscout размещен на Heroku, вы можете перезапустить Nightscout так: зайдите в Heroku, нажмите на имя приложения, нажмите в меню «More», затем «Restart all dynos».

На других хостингах следуйте документации хостинга.

* Проблемы с телефоном

Android может перевести телефон в спящий режим. Убедитесь, что AAPS в опциях питания имеет разрешение на постоянную работу в фоновом режиме.

Проверьте Клиент NS заново, находясь в зоне с хорошим уровнем сигнала.

Попробуйте другой телефон.

* Nightscout

Если ваш сайт размещен на Azure: Многие люди обнаружили, что проблемы подключения уменьшились после перехода на Heroku.

Для решения проблем подключения в Azure необходимо ВКЛЮЧИТЬ в настройках приложения HTTP протокол 2.0 и Websockets

* Нет данных ГК из Nightscout

If **AAPS** connects to Nightscout correctly but BG displays as N/A: in the [NSClientV3 settings](#Preferences-nsclient), open **Synchronization** and turn on **Receive CGM data from NS**. This option is hidden while client control is on ([hardened mode](#client-master-control-hardened-mode)); in that case check that **NSClient BG** is selected in **Configuration** → **BG Source**.

* Если все еще приходят сообщения об ошибке...

Проверьте размер вашей базы данных в MongoDB (или через плагин размера базы данных в NS). Если вы используете бесплатный платежный план в MongoDB, то 496MB означает, что база заполнена и ее следует очистить. [Follow these Nightscout instructions for checking the size of your database and clearing out data](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

Перед очисткой данных из базы данных и подумайте о передаче своих данных AAPS в проект Open Humans (для исследований). Инструкции находятся на странице конфигурации [OpenHumans](../SupportingAaps/OpenHumans.md).