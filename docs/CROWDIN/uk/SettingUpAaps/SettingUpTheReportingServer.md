# Налаштування сервера звітів

Зараз для **AAPS** доступні два сервери звітів:

- [Nightscout](https://nightscout.github.io/)
- [Tidepool](https://www.tidepool.org/)

![Сервери звітів](../images/Building-the-App/ReportingServer.png)

We recommend using Nightscout.

(SettingUpTheReportingServer-nightscout)=
## Nightscout

Nightscout – це вебзастосунок, який записує й показує ваші дані CGM і дані **AAPS** та створює звіти. Це потужна платформа, яка вже багато років інтегрована в **AAPS**. It enables users and caregivers to track the patient's diabetes data in near real-time (only a few seconds may pass between data reception and data provision if there is a sufficient Internet connection between all components involved). Через нього також передаються віддалені команди, які доглядачі надсилають в **AAPS** з **AAPSClient** (див. [Керування «основний телефон ↔ клієнт»](#client-master-control)).

Nightscout is provided as open-source software. Anyone can create and operate a Nightscout server, using either free or paid-for services.

Більше інформації ви знайдете на [вебсайті проєкту Nightscout](http://nightscout.github.io/).

### Option 1 - Set up your Nightscout server yourself

Creating your Nightscout reporting server can require one or more web-based applications that will require maintenance. In order to have a completely free service, you may need to migrate your Nightscout site and data, if and when providers remove the free tier.

Опис того, як налаштувати Nightscout, з перевагами й недоліками різних варіантів роботи, а також з оцінкою витрат, можна знайти [тут](https://nightscout.github.io/nightscout/new_user/#free-diy).

### Option 2 - Pay for a hosted Nightscout service

There are also options from different service providers who host Nightscout for you, with a monthly fee. The costs are manageable, and the advantage of a hosted option is that you do not need to be IT-literate, or have any operating infrastructure.


Existing Nightscout users can reconsider where and how their Nightscout server is hosted from time to time, and change to a different option if it becomes more suitable.

Деякі сервіси хостингу Nightscout перелічені [тут](https://nightscout.github.io/nightscout/new_user/#vendors-comparison-table).

### Further configuration of Nightscout

Коли ваш екземпляр Nightscout запущено і він працює, перегляньте [сторінку налаштування Nightscout](../SettingUpAaps/Nightscout.md), щоб дізнатися про додаткові моменти.

(SettingUpTheReportingServer-tidepool)=
## Tidepool

Tidepool доступний в **AAPS** з версії 3.2, яка вийшла наприкінці 2023 року.

```{admonition} Tidepool with **AAPS** is only for reporting
:class: danger  
Оскільки з **AAPS** між надходженням даних і їх появою у звітах минає три години, Tidepool не підходить для того, щоб ділитися інформацією в реальному часі з доглядачами.  
З іншого боку, Tidepool може бути чудовим рішенням, щоб ділитися звітами з ендокринологом пацієнта, якщо Nightscout для нього не підходить.  
```

Tidepool – це проєкт з [відкритим кодом](https://github.com/tidepool-org). It offers to run an account free of charge on the Tidepool servers.

Більше інформації про налаштування Tidepool з AAPS – [тут](../SettingUpAaps/Tidepool.md).

```{admonition} **AAPS** has the uploader for Tidepool integrated
:class: note
Вам **не** потрібен застосунок-вивантажувач для Tidepool: **AAPS** сам вивантажить глюкозу крові, записи терапії та базал. Вам потрібен лише особистий обліковий запис у Tidepool. Не вивантажуйте свої дані окремим інструментом Tidepool uploader, бо це призведе до дублювання значень.  
```

## Next step

Коли ви налаштуєте свій сервер звітів, ви можете налаштувати **AAPS** на телефоні за допомогою [Майстра налаштування AAPS](./SetupWizard.md), який також підключить **AAPS** до вашого сервера звітів.