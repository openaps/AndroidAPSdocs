# Nightscout

(Nightscout-security-considerations)=

## Питання безпеки

Nightscout – це сервер звітів і моніторингу для **AAPS**: **AAPS** вивантажує туди ваші дані, а ви або ваші доглядачі переглядаєте їх на сайті Nightscout або в застосунках для стеження. Там зберігаються ваші медичні дані, профілі та записи терапії, тому варто подумати про захист вашого сайту Nightscout.

В **AAPS** 4 віддалене керування не проходить через сайт Nightscout. Поки увімкнено керування з клієнтів ([захищений режим](#client-master-control-hardened-mode)), записи терапії або цілі, введені прямо в Nightscout, **не застосовуються** в **AAPS**. Натомість віддалені команди надходять зі спареного **AAPSClient** — див. [Керування «основний телефон ↔ клієнт»](#client-master-control).

Будьте дуже обережні, якщо використовуєте Nightscout як джерело даних ГК для AAPS.

### Налаштування Nightscout

Ви можете заборонити публічний доступ до свого сайту Nightscout за допомогою [ролей автентифікації](https://nightscout.github.io/nightscout/security): діліться своєю URL-адресою лише з токеном `readable`, ніколи з токеном `admin`.

`API_SECRET` Nightscout – це головний пароль вашого сайту: не публікуйте його.

(Nightscout-aaps-settings)=

### Налаштування AAPS

Приймання даних з Nightscout (зміни профілю, записи терапії, ...) необов'язкове і за замовчуванням вимкнене. Перемикачі, описані нижче, приховані, поки увімкнено керування з клієнтів (захищений режим), а також у [простому режимі](#preferences-simple-mode).

* Відкрийте налаштування **Синхронізація** плагіна NSClientV3 одним зі способів: 1) **Налаштування** (значок шестерні на головному екрані) -> **NSClientV3** -> **Синхронізація**, або 2) **Конфігурація** (меню ☰) -> **Звʼязок** -> «**Налаштування**» біля NSClientV3.
* Увімкніть «Вивантажувати дані в NS».
* «Вивантажувати дані ГК в NS» є в налаштуваннях вашого джерела ГК (**Конфігурація → Джерело ГК → Налаштування**). Увімкніть його, якщо тільки ваше джерело даних ГК для AAPS не Nightscout: у такому разі його **не вмикайте**.
* Не вмикайте «Отримувати дані CGM з NS», якщо тільки Nightscout не є вашим джерелом даних ГК.

#### Не синхронізувати з Nightscout

Keeping all the "Receive … from NS" options disabled makes sure no Nightscout change will be used by AAPS:

![Nightscout лише для вивантаження](../images/preferences/settings_nsclient_sync.png)

#### Приймати зміни з Nightscout

Якщо увімкнути ці параметри, можна змінювати налаштування AAPS через Nightscout, наприклад змінювати й перемикати профілі, задавати тимчасові цілі та додавати вуглеводи, які AAPS буде враховувати. Вони показуються, лише коли керування з клієнтів і простий режим вимкнені.  
Зверніть увагу: записи інсуліну використовуватимуться лише для розрахунків, як «Не вводити болюс, лише записати».

![Параметри отримання з Nightscout увімкнено](../images/NSsafety3.png)

### Інші налаштування безпеки

Оновлюйте свій телефон, як описано в [розділі про безпеку](#preparing-safety-first).

(Nightscout-manual-nightscout-setup)=

## Ручне налаштування Nightscout

Тут вважається, що у вас уже є сайт Nightscout. Якщо ні, відкрийте сторінку [Nightscout](http://nightscout.github.io/nightscout/new_user/) з повними інструкціями з налаштування. Нижче наведено налаштування, які вам також потрібно додати на ваш сайт Nightscout. Ваш сайт Nightscout має бути щонайменше версії 15, тому перевірте, що у вас [остання версія](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version), інакше в застосунку AAPS з'явиться повідомлення про помилку.

* [Змініть свої змінні](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* Додайте або змініть змінні так:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Можна налаштувати різні сповіщення для [моніторингу помпи](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), особливо радимо сповіщення про заряд батареї у %: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* Збережіть зміни. Тепер ваш сайт Nightscout має показувати «таблетки» (pills). Щоб вони показувалися за замовчуванням, додайте їх у `SHOW_PLUGINS`.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Таблетки (pills) Nightscout](../images/nightscout1.png)

## Nightscout як платна послуга SaaS (програмне забезпечення як послуга)

Задайте змінні у вебінтерфейсі постачальника. За потреби зверніться до служби підтримки постачальника.