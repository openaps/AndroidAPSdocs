# Документация AAPS по драйверам для помп Omnipod

Эти инструкции для настройки помп Omnipod Eros (**НЕ Omnipod DASH**). Драйвер для Omnipod доступен как составная часть AAPS начиная с версии 2.8.

**Это программное обеспечение - часть алгоритма самостоятельно настраиваемой ИПЖ; она не является коммерческим продуктом, но требует, чтобы вы прочитали, узнали и поняли, как ей пользоваться. Только вы несете ответственность за то, что делаете.**

```{contents}
:backlinks: entry
:depth: 2
```

## Hardware and Software Requirements

- **Устройство связи с Pod**

> Компонент, позволяющий AAPS общаться с подами Eros.
> 
> > - ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Website](https://getrileylink.org/product/orangelink)
> > - ![RileyLink / РайлиЛинк](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
> > - ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Website](https://github.com/sks01/EmaLink) - [Contact Info](mailto:getemalink@gmail.com)
> > - ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Contact Info](mailto:Boshetyn@ukr.net)
> > - ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink Website](https://www.getlooplink.org/) - [Contact Info](https://jameswedding.substack.com/) - Untested

- ![Android_phone](../images/omnipod/Android_phone.png)  **Мобильный Телефон**

> Компонент, который будет работать с AAPS и отправлять команды управления устройству Pod.
> 
> > - Поддерживаемый [телефон на Android с драйвером Omnipod](https://docs.google.com/spreadsheets/d/1eNtXAWwrdVtDvsvXaR_72wgT9ICjZPNEBq8DbitCv_4/edit) версии AAPS 2.8 и позднее с соответствующими [настройками компонентов](index-component-setup)

- ![Omnipod_Pod](../images/omnipod/Omnipod_Pod.png)  **Устройство подачи инсулина**

> Компонент, который интерпретирует команды, полученные от коммуникационного устройства Pod, для AAPS.
> 
> > - Новый Omnipod (поколения Eros - **НЕ DASH**)

В этих инструкциях предполагается, что вы начинаете новую сессию пода; если это не так, дождитесь замены и начните этот процесс со следующего пода.

## Подготовка к работе

**БЕЗОПАСНОСТЬ на первом месте** Не пытайтесь выполнять этот процесс в среде, где нет возможности исправить ошибку (дополнительные поды, инсулин, устройства управления помпой обязательны).

**Your Omnipod PDM will no longer work after the AAPS Omnipod driver activates your pod**. Раньше вы использовали Omnipod PDM для отправки команд на Omnipod Eros. Под Omnipod Eros позволяет коммуникацию только с одним устройством. Устройство, которое успешно активирует под - единственное устройство, которому с этого момента будет разрешено с ним общаться. Это означает, что после активации пода с телефона через драйвер AAPS Eros, **вы больше не сможете пользоваться пультом PDM с этим подом**. Драйвер AAPS Omnipod с RileyLink теперь является вашим действующим PDM. *Это НЕ означает, что вы должны выкинуть PDM, рекомендуется хранить его в резерве и для чрезвычайных ситуаций, если ААПС работает неправильно.*

**Можно настроить несколько устройств RileyLink, но только один RileyLink будет обмениваться с подом** Драйвер AAPS Omnipod поддерживает возможность добавления нескольких RileyLink в конфигурацию RileyLink, однако, можно выбрать только один RileyLink, который будет использоваться для коммуникации.

**Ваш Pod не будет отключится, когда RileyLink находится вне диапазона.** Когда RileyLink находится вне диапазона или сигнал заблокирован от связи с активным pod, ваш под будет продолжать давать базальный инсулин. После активации Pod базальный профиль, заданный в AAPS, будет запрограммирован в новый Pod. Если вы потеряете контакт с Pod, он обратится к этому базальному профилю. Вы не сможете выдавать новые команды до тех пор, пока RileyLink не вернется в диапазон и не восстановит соединение.

**30 -минутные профили базала НЕ поддерживаются в AAPS.** Если вы новичок в AAPS и устанавливаете базальный профиль впервые, имейте в виду, что получасовые базальные скорости не поддерживаются в AAPS, и следует настроить свой базальный профиль на часовые интервалы. Например, если ваша базальная скорость 1,1 ед., начинается в 09:30, длится 2 часа и заканчивается в 11:30, такие настройки работать не будут.  Следует изменить базал в 1,1 единицы на диапазон времени с 9:00 до 11:00 или с 10:00 до 12:00.  Несмотря на то, что расширение профиля базисной скорости в 30 минут поддерживается аппаратным обеспечением Omnipod, в настоящее время AAPS не в состоянии учесть их с помощью своих алгоритмов.

## Enabling the Omnipod Driver in AAPS

You can enable the Omnipod driver in AAPS in **two ways**:

### Вариант 1: Мастер настройки

После установки новой версии AAPS **Мастер Настройки** запустится автоматически.  Это также произойдет во время обновления системы.  Если вы уже экспортировали настройки из предыдущей установки, можно выйти из мастера установки и импортировать старые настройки.  Для новых установок смотрите ниже.

Через ** Мастер настройки AAPS (2)** расположенный в правом верхнем углу **трехточечное меню (1)** и через меню мастера, пока не дойдете до экрана выбора помпы ****. Затем выберите **радио кнопку Omnipod (3)**.

> ![Enable_Omnipod_Driver_1](../images/omnipod/Enable_Omnipod_Driver_1.png)  ![Enable_Omnipod_Driver_2](../images/omnipod/Enable_Omnipod_Driver_2.png)

На экране выбора помпы отображаются **Настройки драйвера Omnipod**, под конфигурацией **RileyLink Configuration** добавьте устройство RileyLink, нажав текст **не выбрано**.

На экране **конфигурация RileyLink** нажмите кнопку **Сканировать** и выберите RileyLink, просканировав доступные Bluetooth устройства и выбрав RileyLink из списка. При правильном выборе вы возвращаетесь на экран выбора драйвера помпы с отображением параметров драйвера Omnipod и указанием выбранного вами мак-адреса RileyLink.

Нажмите кнопку **Далее**, чтобы перейти к остальной части **мастера настройки**  Для инициализации выбранного устройства RileyLink может потребоваться до минуты, после чего кнопка **Далее** станет активной.

Подробные шаги по настройке устройства связи Pod приведены ниже в разделе [Настройка RileyLink](OmnipodEros-rileylink-setup).

**ИЛИ**

### Вариант 2: Конфигуратор

В левом верхнем углу из **выпадающего меню** выберите **Конфигуратор(1)** ➜**Помпа** ➜ **Omnipod**, включив **радио кнопку(2)** под названием **Omnipod**. Поставив **флажок(4)** напротив **шестеренки настроек(3)** вы активируете вкладку меню Omnipod в интерфейсе AAPS, которая называется **POD**. В документации эта вкладка называется **Omnipod (POD)**.

> **ПРИМЕЧАНИЕ:** Более быстрый способ доступа к настройкам **Omnipod** можно найти ниже в разделе [Настройки Omnipod](OmnipodEros-omnipod-settings) в документации.
> 
> ![Enable_Omnipod_Driver_3](../images/omnipod/Enable_Omnipod_Driver_3.png) ![Enable_Omnipod_Driver_4](../images/omnipod/Enable_Omnipod_Driver_4.png)

### Верификация выбора драйвера Omnipod

*Примечание: Если вы уже вышли из мастера настройки без выбора RileyLink, драйвер Omnipod будет включен, но вам все равно нужно выбрать RileyLink.  Вы увидите вкладку Omnipod (POD) как показано ниже*

Чтобы убедиться, что вы активировали драйвер Omnipod в AAPS **смахните экран влево** из вкладки **Начало** и вы увидите вкладку **Omnipod** или **POD**.

![Enable_Omnipod_Driver_5](../images/omnipod/Enable_Omnipod_Driver_5.png)

## Конфигурация Omnipod

**Смахните главный экран влево** до появления вкладки **Omnipod(POD)**, на которой вы можете управлять всеми функциями пода (некоторые из них неактивны или невидимы вне действующей сессии пода):

> ![refresh_pod_status](../images/omnipod/ICONS/omnipod_overview_refresh_pod_status.png) Обновление соединения и статуса Pod
> 
> ![pod_management](../images/omnipod/ICONS/omnipod_overview_pod_management.png) Управление подом (Активация, Деактивация, проверка звукового сигнала, журнал помпы)

(OmnipodEros-rileylink-setup)=

### Настройка RileyLink

Если RileyLink был успешно сопряжен в мастере установки или на шагах выше, то перейдите к разделу [активации Pod](OmnipodEros-activating-a-pod) ниже.

*Примечание: Визуальным индикатором того, что RileyLink не подключен, является то, что на главном экране не появятся кнопки инсуллина и калькулятора болюса. Это произойдет примерно в течение первых 30 секунд после запуска AAPS, так как он активно подключается к RileyLink.*

1. Убедитесь, что RileyLink полностью заряжен и включен.

2. После выбора драйвера Omnipod, определите и выберите RileyLink в **Конфигураторе (1)** ➜**Помпа**➜**Omnipod**➜**Иконка шестеренки (Настройки) (2)** ➜**Конфигурация RileyLink (3)**, нажав на текст**Не настроен** или **Адрес MAC (если есть)**.

   > Убедитесь, что аккумулятор RileyLink заряжен и он [расположен в непосредственной близости от](OmnipodEros-optimal-omnipod-and-rileylink-positioning) (~30 см или менее от телефона) для идентификации AAPS по его MAC-адресу. Сделав выбор, можете перейти к активации первого сеанса Pod. Нажмите кнопку "Назад" на телефоне, чтобы вернуться к основному интерфейсу AAPS.
   > 
   > ![RileyLink_Setup_1](../images/omnipod/RileyLink_Setup_1.png) ![RileyLink_Setup_2](../images/omnipod/RileyLink_Setup_2.png)

3. На экране **Выбор RileyLink ** нажмите кнопку **Сканировать (4)** для запуска сканирования bluetooth. **Выберите RileyLink (5)**  из списка доступных устройств. Bluetooth.

   > ![RileyLink_Setup_3](../images/omnipod/RileyLink_Setup_3.png) ![RileyLink_Setup_4](../images/omnipod/RileyLink_Setup_4.png)

4. После успешного выбора вы возвращаетесь на страницу настроек Omnipod с указанием mac-адреса **выбранного RileyLink (6)**

   > ![RileyLink_Setup_5](../images/omnipod/RileyLink_Setup_5.png)

5. Убедитесь, что на вкладке **Omnipod (POD)** состояние **RileyLink (1)** отображается как **подключено.** Поле **статус помпы (2)** должно показывать **Нет активных Pod**; если нет, пожалуйста, попробуйте предыдущий шаг или выйдите из AAPS для проверки обновления соединения.

   > ![RileyLink_Setup_6](../images/omnipod/RileyLink_Setup_6.png)

(OmnipodEros-activating-a-pod)=

### Активация Pod

Перед активацией Pod убедитесь, что вы правильно настроили и подключили RileyLink в настройках Omnipod

*ПРЕДУПРЕЖДЕНИЕ: Коммуникация для активации Pod происходит на ограниченной дистанции, что вызвано мерами безопасности. Перед сопряжением радиосигнал Pod более слабый, однако после подключения связь будет работать при полной мощности сигнала. В ходе этих процедур убедитесь, что Pod* [находится в непосредственной близости ](OmnipodEros-optimal-omnipod-and-rileylink-positioning) (~30 см или менее), но не поверх или совсем рядом с RileyLink.\*

01. Перейдите на вкладку **Omnipod (POD)**, нажмите кнопку **УПРАВЛЕНИЕ помпой (1)**, затем нажмите **Активировать Pod (2)**.

    > ![Активировать Pod_1](../images/omnipod/Activate_Pod_1.png) ![Активировать Pod_2](../images/omnipod/Activate_Pod_2.png)

02. Появится экран **Заполнить Pod**. Заполните новый Pod по меньшей мере 80 единицами инсулина и дождитесь двух звуковых сигналов, подтверждающих, что Pod готов к первичному заполнению катетера. При подсчете общего количества инсулина на 3 дня, учитывайте, что первичное заполнение катетера Pod потребует 12-15 единиц инсулина.

    > ![Активировать Pod_3](../images/omnipod/Activate_Pod_3.png)
    > 
    > Убедитесь, что новый Pod и телефон с запущенным AAPS находятся в непосредственной близости друг от друга и нажмите кнопку **Далее**.

03. На экране **Инициализация Pod**, Pod начнет первичное заполнение ( вы услышите щелчок с серией последующих тикающих звуков пока заполняется под). Если RileyLink при активации находится вне диапазона, вы получите сообщение об ошибке **Нет ответа от Pod**. В этом случае [переместите RileyLink ближе](OmnipodEros-optimal-omnipod-and-rileylink-positioning) (на расстоянии примерно 30 см или меньше) к Pod, но не сверху или прямо рядом с ним, и нажмите кнопку **Повторить (1)**.

    > ![Активировать Pod_4](../images/omnipod/Activate_Pod_4.png) ![Активировать Pod_5](../images/omnipod/Activate_Pod_5.png)

04. После успешного заполнения катетера появится зеленая галочка, и станет активной кнопка **Далее**. Нажмите на кнопку **Далее** для завершения инициализации и появления экрана **Подключить Pod**.

    > ![Активировать Pod_6](../images/omnipod/Activate_Pod_6.png)

05. Затем подготавливаем инфузионный отсек нового пода. Снимите пластмассовый колпачок с иглы, белую бумажную защиту с клеевого слоя и прижмите к обычно выбранному месту на теле. По завершении нажмите кнопку **Далее**.

    > ![Activate_Pod_7](../images/omnipod/Activate_Pod_7.png)

06. Теперь появится диалоговое окно **Подключить Pod**. **нажимайте на кнопку OK ТОЛЬКО если вы готовы к установке катетера**.

    > ![Активировать Pod_8](../images/omnipod/Activate_Pod_8.png)

07. После нажатия **OK**, понадобится некоторое время для реакции Pod и введения катетера (1-2 минуты максимум), так что наберитесь терпения.

    > Если RileyLink при активации находится вне диапазона, вы получите сообщение об ошибке **Нет ответа от Pod**. Если это происходит, переместите RileyLink ближе (30 см или менее) но не поверх или совсем рядом с Pod и нажмите кнопку **Повторить**.
    > 
    > Если RileyLink находится вне диапазона Bluetooth или не имеет активного подключения к телефону, вы получите сообщение об ошибке **Нет ответа от RileyLink**. Если это происходит, передвиньте RileyLink ближе к телефону и нажмите кнопку **Повторить**.
    > 
    > *ПРИМЕЧАНИЕ: Перед установкой катетера рекомендуется ущипнуть кожу рядом с местом ввода катетера. Это уменьшает болевые ощущения при вводе иглы и снижает шансы на развитие окклюзий.*
    > 
    > ![Активировать Pod_9](../images/omnipod/Activate_Pod_9.png)
    > 
    > ![Активировать Pod_10](../images/omnipod/Activate_Pod_10.png) ![Активировать Pod_11](../images/omnipod/Activate_Pod_11.png)

08. При успешном вводе катетера появляется зеленая галочка и активируется кнопка **Далее**. Нажмите на кнопку **Далее**.

    > ![Активировать Pod_12](../images/omnipod/Activate_Pod_12.png)

09. Появится экран **Pod активирован**. Нажмите на зеленую кнопку **Завершено**. Поздравляем! Вы начали новую активную сессию Pod.

    > ![Активировать Pod_13](../images/omnipod/Activate_Pod_13.png)

10. На экране меню **управления Pod** кнопка **Активировать Pod (1)** теперь *выключена* и **Деактивировать Pod (2)** *включена*. Это потому, что под активен и вы не можете активировать дополнительный под без деактивации текущего.

    Нажмите на кнопку Назад на телефоне, чтобы вернуться на вкладку **Omnipod (POD)**, которая теперь отображает текущую информацию с Pod, включая скорость базала, заполненность резервуара, введенный инсулин, ошибки и предупреждения.

    Более подробно о показываемой информации в разделе [](OmnipodEros-omnipod-pod-tab)Вкладка Omnipod (POD) этого документа.

    ![Активировать Pod_14](../images/omnipod/Activate_Pod_14.png) ![Активировать Pod_15](../images/omnipod/Activate_Pod_15.png)

### Деактивация Pod

При нормальных условиях ожидаемое время жизни пода 3 дня (72 часа) и дополнительно 8 часов после предупреждения об истечении срока действия, в общей сложности 80 часов.

Для деактивации пода (либо по истечении срока действия, либо из-за сбоя в работе):

1. Зайдите на вкладку **Omnipod (POD)**, нажмите на кнопку **УПРАВЛЕНИЕ ПОМПОЙ(1)** на экране **Управление помпой Omnipod** нажмите кнопку **Деактивировать Pod(2)**.

   > ![Деактивировать Pod_1](../images/omnipod/Deactivate_Pod_1.png) ![Деактивировать Pod_2](../images/omnipod/Deactivate_Pod_2.png)

2. На экране **Деактивировать Pod** сначала убедитесь, что RileyLink находится в непосредственной близости от Pod, но не на самом устройстве или совсем рядом с ними, затем нажмите на кнопку **Далее** для начала процесса деактивации Pod.

   > ![Деактивировать Pod_3](../images/omnipod/Deactivate_Pod_3.png)

3. Появится экран **Деактивация Pod**, и мы получим подтверждение от Pod, что деактивация прошла успешно.

   > ![Отключить Pod_4](../images/omnipod/Deactivate_Pod_4.png)
   > 
   > **Если деактивация не удалась** и звуковое подтверждение не прозвучало, может появиться сообщение **Нет ответа от RileyLink** или **Нет ответа от Pod **. Нажмите на кнопку **Повторить (1)** для повторной попытки деактивации. Если деактивация по-прежнему не удается, пожалуйста, нажмите на кнопку **Завершить пользование Подом(2)** для утилизации Pod. Теперь вы можете удалить свой pod так как активная сессия завершена. If your Pod has a screaming alarm, you may need to manually silence it (using a pin or a paperclip) as the **Discard Pod (2)** button will not silence it.
   > 
   > > ![Деактивировать Pod_5](../images/omnipod/Deactivate_Pod_5.png)  ![Деактивировать Pod_6](../images/omnipod/Deactivate_Pod_6.png)

4. После успешной деактивации на экране появится зеленая галочка. Нажмите на кнопку **Далее**, чтобы отобразился экран Pod деактивирован. Теперь вы можете удалить свой pod так как активная сессия завершена.

   > ![Деактивировать Pod_7](../images/omnipod/Deactivate_Pod_7.png)

5. Для возврата на экран **Управление помпой Omnipod** нажмите на зеленую кнопку.

   > ![Деактивировать Pod_8](../images/omnipod/Deactivate_Pod_8.png)

6. Теперь вы оказались в меню **Управление помпой Omnipodt**; нажмите кнопку "Назад" на телефоне, чтобы вернуться на вкладку **Omnipod (POD)**. Убедитесь, что в поле **Статус RileyLink:** отображается **Подключено**, а поле **Статус помпы:** поле отображает сообщение**Нет активных Pod**.

   > ![Deactivate_Pod_9](../images/omnipod/Deactivate_Pod_9.png)  ![Deactivate_Pod_10](../images/omnipod/Deactivate_Pod_10.png)

### Приостановка и возобновление подачи инсулина

Приведенный ниже процесс покажет вам, как приостановить и возобновить подачу инсулина.

*ПРИМЕЧАНИЕ - если вы не видите кнопку ПРИОСТАНОВИТЬ*, то отображение функции не было включено на вкладке Omnipod (POD). Включите кнопку **Показать приостановку инсулина на вкладке Omnipod** в настройках [Omnipod](OmnipodEros-omnipod-settings) в разделе **Другое**.

#### Suspending Insulin Delivery

Используйте эту команду, чтобы перевести активный Pod в приостановленное состояние. В этом приостановленном состоянии Pod больше не подает инсулин. Эта команда имитирует функцию приостановки, которую подает оригинальный пульт Omnipod PDM на активный Pod.

1. Перейдите на вкладку **Omnipod (POD)** и нажмите кнопку **ОСТАНОВ (1)**. Команда приостановки отправляется из RileyLink в активный Pod. При этом кнопка **ОСТАНОВ(3)** становится серой. **Состояние Pod (2)** отображается как **ОСТАНОВ ПОДАЧИ**.

   > ![Suspend_Insulin_Delivery_1](../images/omnipod/Suspend_Insulin_Delivery_1.png) ![Suspend_Insulin_Delivery_2](../images/omnipod/Suspend_Insulin_Delivery_2.png)

2. Когда команда остановить подачу прошла успешно, в диалоговом окне подтверждения будет показано сообщение **Введение инсулина приостановлено**. Нажмите **OK** для подтверждения и продолжения.

   > ![Suspend_Insulin_Delivery_3](../images/omnipod/Suspend_Insulin_Delivery_3.png)

3. Активный под теперь приостановил любые подачи инсулина. Вкладка **Omnipod (POD)** обновит статус **Pod (1)** до **приостановлено**. Кнопка **ОСТАНОВ** изменится на новую **Возобновить подачу (2)**

   > ![Suspend_Insulin_Delivery_4](../images/omnipod/Suspend_Insulin_Delivery_4.png)

#### Возобновление подачи инсулина

Применяйте эту команду, чтобы приостановленный Pod возобновил подачу инсулина. После успешной обработки команды, нормальная подача инсулина возобновится в соответствии с текущим активным профилем базала. Pod снова будет принимать команды на болюс, TBR и SMB.

1. Перейдите на вкладку **Omnipod (POD** и убедитесь, что поле **статус помпы (1)** отображает **ПОМПА ОСТАНОВЛЕНА (ПРИОСТАНОВЛЕНО)**, затем нажмите кнопку **ВОЗОБНОВИТЬ ПОДАЧУ(2)** для передачи команды на Pod о возобновлении подачи инсулина. Сообщение **Возобновить подачу** будет отображаться в поле **Статус Pod (3)**, показывая, что RileyLink активно отправляет команду на остановленный Pod.

   > ![Resume_Insulin_Delivery_1](../images/omnipod/Resume_Insulin_Delivery_1.png) ![Resume_Insulin_Delivery_2](../images/omnipod/Resume_Insulin_Delivery_2.png)

2. Когда команда Возобновить подачу прошла успешно, в диалоговом окне подтверждения появится сообщение **Введение инсулина возобновлено**. Нажмите **OK** для подтверждения и продолжения.

   > ![Resume_Insulin_Delivery_3](../images/omnipod/Resume_Insulin_Delivery_3.png)

3. Вкладка **Omnipod (POD)** обновит поле **статус помпы (1)**и отобразит **ВЫПОЛНЯЕТСЯ,** а кнопка **Возобновить подачу** примет вид **ОСТАНОВ(2)**.

   > ![Resume_Insulin_Delivery_4](../images/omnipod/Resume_Insulin_Delivery_4.png)

### Подтверждение оповещений Pod

*ПРИМЕЧАНИЕ - если вы не видите кнопку "ОПОВЕЩЕНИЕ ПРИНЯТО", то только потому, что оно отображается на вкладке Omnipod (POD), когда срабатывает оповещение о завершении срока действия или низком уровне инсулина в резервуаре.*

Процесс, описанный ниже, поможет подтверждать получение и убирать звуковые сигналы, когда активное время Pod достигнет 72 часов (3‑х суток). Этот предел времени для оповещения определен в настройках сигналов **Времени до выключения** Omnipod. Максимальная продолжительность работы Pod составляет 80 часов (3‑е суток + 8 часов), однако производитель (Insulet) рекомендует не превышать 72 часа (3‑х суток).

*ПРИМЕЧАНИЕ - Если вы включили опцию "Автоматически принимать предупреждения Pod" в Omnipod Alerts, это уведомление будет обработано автоматически после первого вхождения и вам НЕ нужно вручную удалить оповещение.*

1. По достижении заданного времени предупреждения об ** отключении**, под начнет издавать сигналы о сроке отключения и приближении времени замены. You can verify this on the **Omnipod (POD)** tab, the **Pod expires: (1)** field will show the exact time the pod will expire (72 hours after activation) and the text will turn **red** after this time has passed, under the **Active Pod alerts (2)** field where the status message **Pod will expire soon** is displayed. This trigger will display the **ACK ALERTS (3)** button. **системное уведомление (4)** также сообщит о предстоящем истечении срока работы пода

   > ![Acknowledge_Alerts_1](../images/omnipod/Acknowledge_Alerts_1.png) ![Acknowledge_Alerts_2](../images/omnipod/Acknowledge_Alerts_2.png)

2. Перейдите на вкладку **Omnipod (POD)** и нажмите кнопку **ПОДТВЕРДИТЬ ПОЛУЧЕНИЕ ОПОВЕЩЕНИЯ(1)**). RileyLink отправляет команду на Pod, чтобы деактивировать предупреждение об истечении срока действия Pod, и обновляет состояние **Pod (1)** на ** ОПОВЕЩЕНИЕ ПРИНЯТО**.

   > ![Acknowledge_Alerts_3](../images/omnipod/Acknowledge_Alerts_3.png)

3. После **успешного отключения** оповещений активный Pod издаст **два сигнала** и на экране появится подтверждающее сообщение **активные оповещения заглушены**. Нажмите кнопку **OK** для того, чтобы подтвердить действие и убрать диалоговое окно.

   > ![Acknowledge_Alerts_4](../images/omnipod/Acknowledge_Alerts_4.png)
   > 
   > Если RileyLink находится за пределами диапазона приема Pod в то время, пока команда подтверждения оповещений обрабатывается, могут появиться 2 варианта оповещений. **Mute (1)** will silence this current warning. **OK (2)** will confirm this warning and allow the user to try to acknowledge alerts again.
   > 
   > ![Acknowledge_Alerts_5](../images/omnipod/Acknowledge_Alerts_5.png)

4. На вкладке **Omnipod (POD)** в поле **оповещения активного Pod ** больше не будет отображаться предупреждение об истечении срока действия.

(OmnipodEros-view-pod-history)=

### Просмотр истории Pod

В этом разделе показано, как просмотреть историю активного пода и отфильтровать ее по различным категориям. Инструмент истории пода позволяет просматривать действия текущего активного пода за трое суток его жизни (72 - 80 часов).

Эта функция полезна для проверки болюсов, TBR, изменений базала, но без уверенности в завершении. Остальные категории полезны для решения проблем, а также для определения хода событий, приводящих к сбою.

*ПРИМЕЧАНИЕ:* В логах Pod появятся **Не подтверждено**, однако из-за характера таких сообщений невозможно опредилить их точность.

1. Перейдите на вкладку **Omnipod (POD)**, нажмите на кнопку **УПРАВЛЕНИЕ ПОМПОЙ(1)** чтобы вызвать меню **Управление помпой Omnipod** и нажмите на кнопку **История Pod(2)** для вызова экрана истории.

   > ![Pod_History_1](../images/omnipod/Pod_History_1.png) ![Pod_History_2](../images/omnipod/Pod_History_2.png)

2. На экране **Журнал Pod** по умолчанию отображается категория **Все (1)** и показываетcz **Дата и время (2)** **Действий (3)** всех Pod и **Результаты (4)** в обратном хронологическом порядке,. Нажмите кнопку назад **на телефоне 2 раза** для возврата на вкладку **Omnipod (POD)** в главном интерфейсе AAPS.

   > ![Pod_History_3](../images/omnipod/Pod_History_3.png) ![Pod_History_4](../images/omnipod/Pod_History_4.png)

### Просмотр настроек и журнала RileyLink

В этом разделе показано, как просмотреть настройки активного пода и RileyLink, а также историю их коммуникаций. Эта функция разделена на два раздела: **Настройки** и **История**.

Основное использование этой функции происходит ткогда устройство Bluetooth выходит из диапазона связи с телефоном и через некоторое времяи в поле **RileyLink** появляется сообщение **RileyLink недоступен**. Кнопка **ОБНОВИТЬ** на главной вкладке **Omnipod (POD)** при нажатии позволит попытаться восстановить связь Bluetooth с текущим устройством RileyLink.

В случае если кнопка **ОБНОВИТЬ** на главной вкладке **Omnipod (POD)** не восстанавливает соединение, выполните дополнительные шаги, перечисленные ниже для переподключения вручную.

#### Восстановление передачи данных с устройства Bluetooth

1. С вкладки **Omnipod (POD)**, когда **Статус RileyLink (1)** отображается как **RileyLink недоступен** нажмите кнопку **УПРАВЛЕНИЕ ПОМПОЙ (2)** и перейдите в соответствующее меню. В меню **Управление помпой** вы увидите уведомление о поиске соединения с RileyLink, нажмите кнопку **Статистика RileyLink (3)** и перейдите в экран **настроек RileyLink**.

   > ![RileyLink_Bluetooth_Reset_1](../images/omnipod/RileyLink_Bluetooth_Reset_1.png) ![RileyLink_Bluetooth_Reset_2](../images/omnipod/RileyLink_Bluetooth_Reset_2.png)

2. На экране **Настройки RileyLink (1)** в разделе **RileyLink (2)** отображается статус Bluetooth-соединения, а также ошибки в поле **состояние соединения и ошибки (3)**. Должен быть показан статус *Ошибка Bluetooth* и *RileyLink недоступен*. Запустите ручное соединение Bluetooth, нажав кнопку **обновить (4)** в правом нижнем углу.

   > ![RileyLink_Bluetooth_Reset_3](../images/omnipod/RileyLink_Bluetooth_Reset_3.png)
   > 
   > Если Pod не отвечает или находится вне диапазона телефона во время выполнения команды Bluetooth-обновить, предупреждения могут иметь 2 варианта.

   - **Mute (1)** will silence this current warning.
   - **OK (2)** подтвердит получение этого предупреждения и позволит пользователю повторно произвести сопряжение Bluetooth.

   > ![RileyLink_Bluetooth_Reset_4](../images/omnipod/RileyLink_Bluetooth_Reset_4.png)

3. If the **Bluetooth connection** does not re-establish, try manually turning **off** and then back **on** the Bluetooth function on your phone.

4. After a successful RileyLink Bluetooth reconnection the **Connection Status: (1)** field should report **RileyLink ready**. Congratulations, you have now reconnected your configured pod communication device to AAPS!

   > ![RileyLink_Bluetooth_Reset_5](../images/omnipod/RileyLink_Bluetooth_Reset_5.png)

#### Pod Communication Device and Active Pod Settings

This screen will provide information, status, and settings configuration information for both the currently configured pod communication device and the currently active Omnipod Eros pod.

1. Go to the **Omnipod (POD)** tab and press the **POD MGMT (1)** button to access the **Pod management** menu, then press the **RileyLink stats (2)** button to view your currently configured **RileyLink (3)** and active pod **Device (4)** settings.

   > ![RileyLink_Statistics_Settings_1](../images/omnipod/RileyLink_Statistics_Settings_1.png) ![RileyLink_Statistics_Settings_2](../images/omnipod/RileyLink_Statistics_Settings_2.png)
   > 
   > ![RileyLink_Statistics_Settings_3](../images/omnipod/RileyLink_Statistics_Settings_3.png)

##### RileyLink (3) fields

> - **Address:** MAC address of the selected pod communication device defined in the Omnipod Settings.
> - **Name:** Bluetooth identification name of the selected pod communication device defined in your phone's Bluetooth settings.
> - **Battery Level:** Displays the current battery level of the connected pod communication device
> - **Connected Device:** Model of the Omnipod pod currently communicating with the pod communication device
> - **Connection Status**: The current status of the Bluetooth connection between the pod communication device and the phone running AAPS.
> - **Connection Error:** If there is an error with the pod communication device Bluetooth connection details will be displayed here.
> - **Firmware Version:** Current firmware version installed on the actively connected pod communication device.

##### Device (4) fields - With an Active Pod

> - **Device Type:** The type of device communicating with the pod communication device (Omnipod pod pump)
> - **Device Model:** The model of the active device connected to the pod communication device (the current model name of the Omnipod pod, which is Eros)
> - **Pump Serial Number:** Serial number of the currently activated pod
> - **Pump Frequency:** Communication radio frequency the pod communication device has tuned to enable communication between itself and the pod.
> - **Last Used frequency:** Last known radio frequency the pod used to communicate with the pod communication device.
> - **Last Device Contact:** Date and time of the last contact the pod made with the pod communication device.
> - **Refresh button** manually refresh the settings on this page.

#### RileyLink and Active Pod History

This screen provides information in reverse chronological order of each state or action that either the RileyLink or currently connected pod is in or has taken. The entire history is only available for the currently active pod, after a pod change this history will be erased and only events from the newly activated pod will be recorded and shown.

1. Go to the **Omnipod (POD)** tab and press the **POD MGMT (1)** button to access the **Pod Management** menu, then press the **Pod History (2)** button to view the **Settings** and **History** screen. Click on the **HISTORY (3)** text to display the entire history of the RileyLink and currently active pod session.

   > ![RileyLink_Statistics_History_1](../images/omnipod/RileyLink_Statistics_History_1.png) ![RileyLink_Statistics_History_2](../images/omnipod/RileyLink_Statistics_History_2.png)
   > 
   > ![RileyLink_Statistics_History_3](../images/omnipod/RileyLink_Statistics_History_3.png)

##### Поля

> - **Date & Time**: In reverse chronological order the timestamp of each event.
> - **Device:** The device to which the current action or state is referring.
> - **State or Action:** The current state or action performed by the device.

(OmnipodEros-omnipod-pod-tab)=

## Omnipod (POD) Tab

Below is an explanation of the layout and meaning of the icons and status fields on the **Omnipod (POD)** tab in the main AAPS interface.

*NOTE: If any message in the Omnipod (POD) tab status fields report (uncertain) then you will need to press the Refresh button to clear it and refresh the pod status.*

> ![Omnipod_Tab](../images/omnipod/Omnipod_Tab.png)

### Поля

- **RileyLink Status:** Displays the current connection status of the RileyLink

- *RileyLink Unreachable* - pod communication device is either not within Bluetooth range of the phone, powered off or has a failure preventing Bluetooth communication.
- *RileyLink Ready* - pod communication device is powered on and actively initializing the Bluetooth connection
- *Connected* - pod communication device is powered on, connected and actively able to communicate via Bluetooth.

- **Pod address:** Displays the current address in which the active pod is referenced

- **LOT:** Displays the LOT number of the active pod

- **TID:** Displays the serial number of the pod.

- **Firmware Version:** Displays the firmware version of the active pod.

- **Time on Pod:** Displays the current time on the active pod.

- **Pod expires:** Displays the date and time when the active pod will expire.

- **Pod status:** Displays the status of the active pod.

- **Last connection:** Displays the last time communication with the active pod was achieved.

- *Только что* - меньше 20 секунд назад.
- *Менее минуты назад* - более 20, но менее 60 секунд назад.
- *1 минуту назад* - более 60, но менее 120 секунд (2 мин)
- *XX минут назад* - более 2 минут назад, определяется величиной XX

- **Last bolus:** Displays the dosage of the last bolus sent to the active pod and how long ago it was issued in parenthesis.

- **Базовая скорость базала:** Отображает базовую скорость, запрограммированную на текущее время из профиля базала.

- **Временная скорость базала:** Отображает текущую временную скорость базала в следующем формате

- Units / hour @ time TBR was issued (minutes run / total minutes TBR will be run)
- *Пример:* 0.00ед./ч. @18:25 ( 90/120 мин.)

- **Резервуар:** Показывает 50+ед. когда в резервуаре остается более 50 ед. Below this value the exact units are displayed in yellow text.

- **Всего подано** Отображает общее количество единиц инсулина, доставленных из резервуара. *Note this is an approximation as priming and filling the pod is not an exact process.*

- **Ошибки:** Отображает последнюю возникшую ошибку. Review the [Pod history](OmnipodEros-view-pod-history), [RileyLink history](OmnipodEros-rileylink-and-active-pod-history) and log files for past errors and more detailed information.

- **Активные оповещения Pod** зарезервировано для текущих оповещений на активном Pod. Normally used when pod expiration is past 72 hours and native pod beep alerts are running.

### Icons

- **REFRESH:**

  > ![refresh_pod_status](../images/omnipod/ICONS/omnipod_overview_refresh_pod_status.png)
  > 
  > Sends a refresh command to the active pod to update communication
  > 
  > Используйте для обновления статуса pod и сброса полей статуса, содержащих текст (не подтверждено).
  > 
  > See the [Troubleshooting section](OmnipodEros-troubleshooting) below for additional information.

- **POD MGMT:**

  > ![pod_management](../images/omnipod/ICONS/omnipod_overview_pod_management.png)
  > 
  > Navigates to the Pod management menu

- **ACK ALERTS:**

  > ![ack_alerts](../images/omnipod/ICONS/omnipod_overview_ack_alerts.png)
  > 
  > When pressed this will disable the pod expiration beeps and notifications.
  > 
  > Button is displayed only when pod time is past expiration warning time Upon successful dismissal, this icon will no longer appear.

- **SET TIME:**

  > ![set_time](../images/omnipod/ICONS/omnipod_overview_set_time.png)
  > 
  > When pressed this will update the time on the pod with the current time on your phone.

- **SUSPEND:**

  > ![suspend](../images/omnipod/ICONS/omnipod_overview_suspend.png)
  > 
  > Suspends the active pod

- **RESUME DELIVERY:**

  > ![resume](../images/omnipod/ICONS/omnipod_overview_resume.png)
  > 
  > > Resumes the currently suspended, active pod

### Меню управления помпой

Below is an explanation of the layout and meaning of the icons on the **Pod Management** menu accessed from the **Omnipod (POD)** tab.

> ![Omnipod_Tab_Pod_Management](../images/omnipod/Omnipod_Tab_Pod_Management.png)

- **Активация Pod**

  > ![activate_pod](../images/omnipod/ICONS/omnipod_overview_pod_management_activate_pod.png)
  > 
  > Primes and activates a new pod

- **Деактивация Pod**

  > ![deactivate_pod](../images/omnipod/ICONS/omnipod_overview_pod_management_deactivate_pod.png)
  > 
  > Deactivates the currently active pod.
  > 
  > A partially paired pod ignores this command.
  > 
  > Use this command to deactivate a screaming pod (error 49).
  > 
  > If the button is disabled (greyed out) use the Discard Pod button.

- **Play test beep**

  > ![play_test_beep](../images/omnipod/ICONS/omnipod_overview_pod_management_play_test_beep.png)
  > 
  > Plays a single test beep on the pod when pressed.

- **Discard pod**

  > ![discard_pod](../images/omnipod/ICONS/omnipod_overview_pod_management_discard_pod.png)
  > 
  > Deactivates and discards the pod state of an unresponsive pod when pressed.
  > 
  > Button is only displayed when very specific cases are met as proper deactivation is no longer possible:
  > 
  > > - A **pod is not fully paired** and thus ignores deactivate commands.
  > > - A **pod is stuck** during the pairing process between steps
  > > - A **pod simply does not pair at all.**

- **Pod history**

  > ![pod_history](../images/omnipod/ICONS/omnipod_overview_pod_management_pod_history.png)
  > 
  > Displays the active pod activity history

- **RileyLink stats:**

  > ![rileylink_stats](../images/omnipod/ICONS/omnipod_overview_pod_management_rileylink_stats.png)
  > 
  > Navigates to the RileyLink Statistics screen displaying current settings and RileyLink Connection history
  > 
  > > - **Settings** - displays RileyLink and active pod settings information
  > > - **History** - displays RileyLink and Pod communication history

- **Reset RileyLink Config**

  > ![reset_rileylink_config](../images/omnipod/ICONS/omnipod_overview_pod_management_reset_rileylink_config.png)
  > 
  > When pressed this button resets the currently connected pod communication device configuration.
  > 
  > > - When communication is started, specific data is sent to and set in the RileyLink > - Memory Registers are set > - Communication Protocols are set > - Tuned Radio Frequency is set 
  > > - See [additional notes](OmnipodEros-reset-rileylink-config-notes) at the end of this table

- **Read pulse log:**

  > ![pulse_log](../images/omnipod/ICONS/omnipod_overview_pod_management_pulse_log.png)
  > 
  > > Sends the active pod pulse log to the clipboard

(OmnipodEros-reset-rileylink-config-notes)=

#### *Reset RileyLink Config Notes*

- The primary usage of this feature is when the currently active pod communication device is not responding and communication is in a stuck state.
- If the pod communication device is turned off and then back on, the **Reset RileyLink Config** button needs to be pressed, so that it sets these communication parameters in the pod communication device configuration.
- If this is NOT done then AAPS will need to be restarted after the pod communication device is power cycled.
- This button **DOES NOT** need to be pressed when switching between different pod communication devices

(OmnipodEros-omnipod-settings)=

## Omnipod Settings

The Omnipod driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder**➜**Pump**➜**Omnipod**➜**Settings Gear (2)** by selecting the **radio button (1)** titled **Omnipod**. Selecting the **checkbox (3)** next to the **Settings Gear (2)** will allow the Omnipod menu to be displayed as a tab in the AAPS interface titled **OMNIPOD** or **POD**. В документации эта вкладка называется **Omnipod (POD)**.

![Omnipod_Settings_1](../images/omnipod/Omnipod_Settings_1.png)

**NOTE:** A faster way to access the **Omnipod settings** is by accessing the **3 dot menu (1)** in the upper right hand corner of the **Omnipod (POD)** tab and selecting **Omnipod preferences (2)** from the dropdown menu.

![Omnipod_Settings_2](../images/omnipod/Omnipod_Settings_2.png)

Группы настроек перечислены ниже; вы можете включить или отключить их через переключатель большинства функций описанных ниже:

![Omnipod_Settings_3](../images/omnipod/Omnipod_Settings_3.png)

*NOTE: An asterisk (\*) denotes the default for a setting is enabled.*

### RileyLink / РайлиЛинк

Allows for scanning of a pod communication device. The Omnipod driver cannot select more than one pod communication device at a time.

- **Show battery level reported by OrangeLink/EmaLink/DiaLink:** Reports the actual battery level of the OrangeLink/EmaLink/Dialink. It is **strongly recommended** that all OrangeLink/EmaLink/DiaLink users enable this setting.

- DOES NOT work with the original RileyLink.
- May not work with RileyLink alternatives.
- Enabled - Reports the current battery level for supported pod communication devices.
- Disabled - Reports a value of n/a.

- **Enable battery change logging in Actions:** In the Actions menu, the battery change button is enabled IF you have enabled this setting AND the battery reporting setting above.  Some pod communication devices now have the ability to use regular batteries which can be changed.  This option allows you to note that and reset battery age timers.

### Звуковые сигналы подтверждения

Обеспечивает звуковые сигналы подтверждения от Pod об успешной подаче болюса, изменении базала, SMB и TBR.

- **\*Bolus beeps enabled:** Enable or disable confirmation beeps when a bolus is delivered.
- **\*Basal beeps enabled:** Enable or disable confirmation beeps when a new basal rate is set, active basal rate is canceled or current basal rate is changed.
- **\*SMB beeps enabled:** Enable or disable confirmation beeps when a SMB is delivered.
- **Звуковой сигнал временного базала TBR включен** Включить или отключить подтверждающие сигналы при установке или отмене TBR.

### Оповещения

Provides AAPS alerts and Nightscout announcements for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Примечание: уведомления AAPS выдаются ВСЕГДА для любого оповещения после связи с pod с момента срабатывания оповещения. Сброс уведомления НЕ удалит оповещение, ЕСЛИ НЕ включено автоматическое подтверждение получения оповещений. To MANUALLY dismiss the alert you must visit the Omnipod (POD) tab and press the ACK ALERTS button.*

- **\*Expiration reminder enabled:** Enable or disable the pod expiration reminder set to trigger when the defined number of hours before shutdown is reached.
- **Время до выключения**.
- **\*Low reservoir alert enabled:** Enable or disable an alert when the pod's remaining units low reservoir limit is reached as defined in the Number of units field.
- **Количество единиц:** Количество единиц, на которые можно вызывать предупреждение о низком резервуаре резервуара.
- **Automatically acknowledge Pod alerts:** When enabled a notification will still be issued however immediately after the first pod communication contact since the alert was issued it will now be automatically acknowledged and the alert will be dismissed.

### Уведомления

Provides AAPS notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus events were successful.

*ПРИМЕЧАНИЕ: Это только уведомления, звуковые оповещения об ошибках не производится.*

- **Звук для неопределенных уведомлений TBR включен:** Включите или отключите этот параметр, чтобы вызвать звуковое оповещение и визуальное уведомление, когда AAPs неизвестно, был ли установлен TBR.
- **\*Sound for uncertain SMB notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if an SMB was successfully delivered.
- **\*Sound for uncertain bolus notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if a bolus was successfully delivered.

### Другое

Provides advanced settings to assist debugging.

- **Show Suspend Delivery button in Omnipod tab:** Hide or display the suspend delivery button in the **Omnipod (POD)** tab.
- **Show Pulse log button in Pod Management menu:** Hide or display the pulse log button in the **Pod Management** menu.
- **Show RileyLink Stats button in Pod Management menu:** Hide or display the RileyLink Stats button in the **Pod Management** menu.
- **\*DST/Time zone detect on enabled:** allows for time zone changes to be automatically detected if the phone is used in an area where DST is observed.

### Switching or Removing an Active Pod Communication Device (RileyLink)

With many alternative models to the original RileyLink available (such as OrangeLink or EmaLink) or the need to have multiple/backup versions of the same pod communication device (RileyLink), it becomes necessary to switch or remove the selected pod communication device (RileyLink) from Omnipod Setting configuration.

The following steps will show how to **Remove** and existing pod communication device (RileyLink) as well as **Add** a new pod communication device.  Executing both **Remove** and **Add** steps will switch your device.

1. Access the **RileyLink Selection** menu by selecting the **3 dot menu (1)** in the upper right hand corner of the **Omnipod (POD)** tab and selecting **Omnipod preferences (2)** from the dropdown menu. On the **Omnipod Settings** menu under **RileyLink Configuration (3)** press the **Not Set** (if no device is selected) or **MAC Address** (if a device is present) text to open the **RileyLink Selection** menu.

   > ![Omnipod_Settings_2](../images/omnipod/Omnipod_Settings_2.png) ![RileyLink_Setup_2](../images/omnipod/RileyLink_Setup_2.png)

### Remove Currently Selected Pod Communication Device (RileyLink)

This process will show how to remove the currently selected pod communication device (RileyLink) from the Omnipod Driver settings.

1. Under **RileyLink Configuration** press the **MAC Address (1)** text to open the **RileyLink Selection** menu.

   > ![RileyLink_Setup_Remove_1](../images/omnipod/RileyLink_Setup_Remove_1.png)

2. On the **RileyLink Selection** menu the press **Remove (2)** button to remove **your currently selected RileyLink (3)**

   > ![RileyLink_Setup_Remove_2](../images/omnipod/RileyLink_Setup_Remove_2.png)

3. At the confirmation prompt press **Yes (4)** to confirm the removal of your device.

   > ![RileyLink_Setup_Remove_3](../images/omnipod/RileyLink_Setup_Remove_3.png)

4. You are returned to the **Omnipod Setting** menu where under **RileyLink Configuration** you will now see the device is **Not Set (5)**.  Congratulations, you have now successfully removed your selected pod communication device.

   > ![RileyLink_Setup_Remove_4](../images/omnipod/RileyLink_Setup_Remove_4.png)

### Add Currently Selected Pod Communication Device (RileyLink)

This process will show how to add a new pod communication device to the Omnipod Driver settings.

1. Under **RileyLink Configuration** press the **Not Set (1)** text to open the **RileyLink Selection** menu.

   > ![RileyLink_Setup_Add_1](../images/omnipod/RileyLink_Setup_Add_1.png)

2. Press the **Scan (2)** button to start scanning for all available Bluetooth devices.

   > ![RileyLink_Setup_Add_2](../images/omnipod/RileyLink_Setup_Add_2.png)

3. Select **your RileyLink (3)** from the list of available devices and you will be returned to the **Omnipod Settings** menu displaying the **MAC Address (4)** of your newly selected device.  Congratulations you have successfully selected your pod communication device.

   > ![RileyLink_Setup_Add_3](../images/omnipod/RileyLink_Setup_Add_3.png) ![RileyLink_Setup_Add_4](../images/omnipod/RileyLink_Setup_Add_4.png)

## Вкладка Действия (ACT)

This tab is well documented in the main AAPS documentation but there are a few items on this tab that are specific to how the Omnipod pod differs from tube based pumps, especially after the processes of applying a new pod.

1. Перейдите на вкладку **Действия (ACT)** в главном интерфейсе AAPS.
2. Under the **Careportal (1)** section the following 3 fields will have their **age reset** to 0 days and 0 hours **after each pod change**: **Insulin** and **Cannula**. Это происходит из-за устройства и принципа работы Omnipod. **Батарея помпы** и **резервуар инсулина** в каждом поде свои. Так как Pod вводит катетер непосредственно в кожу на месте установки, в помпах Omnipod не применяется традиционная трубка. *Поэтому после замены пода значение каждой из этих величин автоматически сбрасывается на ноль***Возраст батареи помпы**не отображается поскольку он всегда больше срока работы пода (максимум 80 часов).

> ![Actions_Tab](../images/omnipod/Actions_Tab.png)

### Levels

**Уровень инсулина**

Reporting of the amount of insulin in the Omnipod Eros Pod is not exact.  This is because it is not known exactly how much insulin was put in the pod, only that when the 2 beeps are triggered while filling the pod that over 85 units have been injected. A Pod can hold a maximum of 200 units. Priming can also introduce variance as it is not and exact process.  With both of these factors, the Omnipod driver has been written to give the best approximation of insulin remaining in the reservoir.

> - **Above 50 Units** - Reports a value of 50+U when more than 50 units are currently in the reservoir.
> - **Below 50 Units** - Reports an approximate calculated value of insulin remaining in the reservoir.
> - **SMS** - В SMS сообщается реальный остаток в ед. или 50+ед
> - **Nightscout** - при более чем 50 единиц в Nightscout выгружается значение 50 ед.(версия 14.07 и старше).  Более новые версии покажут 50 + когда более 50 единиц.

**Battery Level**

Battery level reporting is a setting that can be enabled to return the current battery level of pod communication devices, such as the OrangeLink, EmaLink or DiaLink.  The RileyLink hardware is not capable of reporting its battery level.  The battery level is reported after each communication with the pod, so when charging a linear increase may not be observed.  A manual refresh will update the current battery level.  When a supported Pod communication device is disconnected a value of 0% will be reported.

> - **RileyLink hardware is NOT capable of reporting battery level**
> - **"Show battery level reported by OrangeLink/EmaLink/DiaLink" Setting MUST be enabled in the Omnipod settings to report battery level values**
> - **Battery level reporting ONLY works for OrangeLink, EmaLink and DiaLink Devices**
> - **Battery Level reporting MAY work for other devices (excluding RileyLink)**
> - **SMS** - Returns current battery level as a response when an actual level exists, a value of n/a will not be returned
> - **Nightscout** - Battery level is reported when an actual level exists, a value of n/a will not be reported

(OmnipodEros-troubleshooting)=

## Устранение неполадок

### Сбои в работе Pod

Поды иногда подводят из-за различных проблем, включая аппаратные неполадки в самих Pod. В Insulet с этим лучше не обращаться в, поскольку приложение AAPS пока не получила официального одобрения. A list of fault codes can be found [here](https://github.com/openaps/openomni/wiki/Fault-event-codes) to help determine the cause.

### Предотвращение ошибки 49 при сбоях Pod

Эта неисправность связана с некорректным состоянием Pod во время команды или ошибки при подаче инсулина. We recommend users to switch to the Nightscout client to *upload only (Disable sync)* under the **Config Builder**➜**General**➜**NSClient**➜**cog wheel**➜**Advanced Settings** to prevent possible failures.

### Оповещения о недоступности помпы

It is recommended that pump unreachable alerts be configured to **120 minutes** by going to the top right-hand side three-dot menu, selecting **Preferences**➜**Local Alerts**➜**Pump unreachable threshold \[min\]** and setting this to **120**.

(OmnipodEros-import-settings-from-previous-aaps)=
### Import Settings from previous AAPS

Please note that importing settings has the possibility to import an outdated Pod status. As a result, you may lose an active Pod. It is therefore strongly recommended that you **do not import settings while on an active Pod session**.

1. Deactivate your pod session. Verify that you do not have an active pod session.
2. Экспортируйте ваши настройки и храните копию в надежном месте.
3. Uninstall the previous version of AAPS and restart your phone.
4. Install the new version of AAPS and verify that you do not have an active pod session.
5. Import your settings and activate your new pod.

### Оповещения драйвера Omnipod

please note that the Omnipod driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action to take to resolve the cause of the triggered alert. Ниже приводится краткая информация об основных оповещениях:

#### No active Pod

No active Pod session detected. Это предупреждение можно временно отклонить, нажав **УБРАТЬ**, но оно будет продолжать срабатывать до тех пор, пока не активирован новый Pod. Once activated this alert is automatically silenced.

#### Pod suspended

Informational alert that Pod has been suspended.

#### Setting basal profile failed. Delivery might be suspended! Обновите статус Pod вручную на вкладке Omnipod и, при необходимости, возобновите подачу..

Информационное оповещение о неудачной настройке базального профиля, необходимо нажать *Обновить* на вкладке Omnipod.

#### Не удалось проверить, успешна ли подача болюса SMB. Если вы уверены, что болюс не подан, следует вручную удалить запись о СМБ из терапии.

Alert that the SMB bolus success could not be verified, you will need to verify the *Last bolus* field on the Omnipod tab to see if SMB bolus succeeded and if not remove the entry from the Treatments tab.

#### Неопределено, если "задача bolus/TBR/SMB" завершена, пожалуйста, проверьте правильность выполнения.

Due to the way that the RileyLink and Omnipod communicate, situations can occur where it is *uncertain* if a command was successfully processed. The need to inform the user of this uncertainty was necessary.

Below are a few examples of when an uncertain notification can occur.

- **Boluses** - Uncertain boluses cannot be automatically verified. The notification will remain until the next bolus but a manual pod refresh will clear the message. *By default alerts beeps are enabled for this notification type as the user will manually need to verify them.*
- **TBRs, Pod Statuses, Profile Switches, Time Changes** - a manual pod refresh will clear the message. By default alert beeps are disabled for this notification type.
- **Pod Time Deviation -** When the time on the pod and the time your phone deviates too much then it is difficult for AAPS loop to function and make accurate predictions and dosage recommendations. If the time deviation between the pod and the phone is more than 5 minutes then AAPS will report the pod is in a Suspended state under Pod status with a HANDLE TIME CHANGE message. An additional **Set Time** icon will appear at the bottom of the Omnipod (POD) tab. Clicking Set Time will synchronize the time on the pod with the time on the phone and then you can click the RESUME DELIVERY button to continue normal pod operations.

## Best Practices

(OmnipodEros-optimal-omnipod-and-rileylink-positioning)=

### Optimal Omnipod and RileyLink Positioning

The antenna used on the RileyLink to communicate with an Omnipod pod is a 433 MHz helical spiral antenna. Due to its construction properties it radiates an omni directional signal like a three dimensional doughnut with the z-axis representing the vertical standing antenna. This means that there are optimal positions for the RileyLink to be placed, especially during pod activation and deactivation routines.

![Toroid_w_CS](../images/omnipod/Toroid_w_CS.png)

> *(Fig 1. Graphical plot of helical spiral antenna in an omnidirectional pattern*)

Because of both safety and security concerns, pod *activation* has to be done at a range *closer (~30 cm away or less)* than other operations such as giving a bolus, setting a TBR or simply refreshing the pod status. Due to the nature of the signal transmission from the RileyLink antenna it is NOT recommended to place the pod directly on top of or right next to the RileyLink.

The image below shows the optimal way to position the RileyLink during pod activation and deactivation procedures. The pod may activate in other positions but you will have the most success using the position in the image below.

*Note: If after optimally positioning the pod and RileyLink communication fails, this may be due to a low battery which decreases the transmission range of the RileyLink antenna. To avoid this issue make sure the RileyLink is properly charged or connected directly to a charging cable during this process.*

![Omnipod_pod_and_RileyLink_Position](../images/omnipod/Omnipod_pod_and_RileyLink_Position.png)

## Where to get help for Omnipod driver

All of the development work for the Omnipod driver is done by the community on a volunteer basis; we ask that you please be considerate and use the following guidelines when requesting assistance:

- **Уровень 0:** Прочитайте соответствующий раздел этой документации, чтобы удостовериться, что вы понимаете, как должна работать функция, с которой вы испытываете трудности.
- **Level 1:** If you are still encountering problems that you are not able to resolve by using this document, then please go to the *#androidaps* channel on **Discord** by using [this invite link](https://discord.gg/4fQUWHZ4Mw).
- **Level 2:** Search existing issues to see if your issue has already been reported; if not, please create a new [issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../Usage/Accessing-logfiles.md).
- **Будьте терпеливы - решения проблем часто требуют времени и терпения как от пользователей, так и от разработчиков.**
