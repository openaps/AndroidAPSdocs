# Устранение неисправностей клиента Nightscout

Для правильной работы NSClient требуется стабильная коммуникация с сайтом Nightscout. Нестабильная связь приводит к ошибками синхронизации и высокой интенсивности использования данных.

Если никто не следит за вами на Nightscout вы можете приостановить NSClient для экономии заряда аккумулятора или вы можете настроить NSClient таким образом, чтобы он подключался только по Wi-Fi и/или во время зарядки.

* Как обнаружить нестабильную связь?

Перейдите на вкладку NSClient в AAPS и просмотрите журнал событий. Обычно отклик PING происходит каждые ~ 30 секунд и сообщения о повторном подключении не поступают. Если вы видите много повторных попыток соединения, то это свидетельство проблемы связи.

Начиная с версии AndroidAPS 2.0, при обнаружении такого поведения, происходит приостановка NSClient на 15 минут и на главном экране появляется сообщение "Сбой (ошибка) NSClient".

* перезапуск

В качестве первого шага попробуйте перезапустить Nightcout и затем телефон, чтобы понять, сохраняется ли проблема.

Если Nightscout размещен на Heroku, вы можете перезапустить Nightscout так: зайдите в Heroku, нажмите на имя приложения, нажмите в меню «More », затем «Restart all dynos».

На других хостингах следуйте документации хостинга.

* Проблемы с телефоном

Android может перевести телефон в спящий режим. Убедитесь, что AndroidAPS в опциях питания имеет разрешение на постоянную работу в фоновом режиме.

Проверьте NSClient заново в надежном месте сетевого сигнала.

Попробуйте другой телефон.

* Nightscout

Если ваш сайт размещен на Azure: Многие люди обнаружили, что проблемы подключения уменьшились после перехода на Heroku.

Для решения проблем подключения в Azure необходимо ВКЛЮЧИТЬ в настройках приложения HTTP протокол 2.0 и Websockets

* Если все еще приходят сообщения об ошибке...

Check the size of your database in MongoDB (or via the database size plugin in nightscout). If you are using the free tier in MongoDB, 496MB means it is full and needs to be cleaned up. [Follow these Nightscout instructions for checking the size of your database and clearing out data](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Before clearing data from your database and if you haven't already set it up, you should consider donating your AndroidAPS data to the Open Humans project (for research). The instructions are on the [OpenHumans configuration page](../Configuration/OpenHumans).