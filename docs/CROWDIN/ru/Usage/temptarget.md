(temptarget-temp-targets)=

# Временные цели

## Что такое временные цели и где можно их задать и сконфигурировать?

С помощью "Временной цели" (TT) можно изменить целевое значение уровня глюкозы в крови на определенный период времени. Так как временные цели в основном нужны при нагрузке, гипогликемии (углеводы на купирование) или приближающемся приеме пищи, можно установить некоторые из них по умолчанию. Чтобы их сконфигурировать, перейдите в меню в правом углу сверху и выберите Настройки-> Другое-> Временные цели по умолчанию.

![Задать временные цели по умолчанию](../images/TempTarget_Default.png)

Чтобы активировать одну из "Предустановленных временных целей TT", следует долго нажать на кнопку целевых значений в правом углу главного окна и выбрать Ожидаемый прием пищи, Нагрузка или Гипо или использовать соответствующие ярлыки в оранжевой кнопке "Углеводы". Чтобы вручную задать [ "Произвольную временную цель TT "](temptarget-custom-temp-target) (значение ГК и/или продолжительность), выберите" Пользовательская "после долгого нажатия на цель в верхнем правом углу или воспользуйтесь кнопкой "Временная цель "на вкладке ["Действия "](Config-Builder-actions).

![Set temp target](../images/TempTarget_Set2.png)

- Если вы хотите немного отрегулировать значения временной цели по умолчанию, вы можете долго нажать на кнопку Ожидаемый прием пищи, Действия или Hypo и затем отредактировать значения в полях Цель или Продолжительность.
- Если запущена временная цель, в диалоговом окне появится дополнительная кнопка "Отмена", чтобы отменить ее

## Временная цель Гипо 

This can be considered as the most important Temp-Target. There are several reasons for it:

1. Когда гликемия чрезмерно понижается: Обычно, алгоритм AAPS должен сам справиться с этим, но иногда вам виднее, а цикл ИПЖ будет реагировать быстрее, если он нацелен на более высокое значение глюкозы в крови.
2. Когда вы принимаете углеводы для купирования гипогликемии, уровень глюкозы в крови будет расти очень быстро. Алгоритм AAPS будет стремиться устранить подъем или давать микроболюсы SMB (если активированы). Временная цель Гипо может корректировать ситуацию. 
3. (для опытных пользователей, [ цель 9 ](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): Можно включить "Высокая временная цель повышает чувствительность" для временных целей 100мг/дл / 5.5 ммоль/л или выше в настройках SMB, чтобы повысить чувствительность AAPS.
4. (для опытных пользователей, [ цель 9 ](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)): Можно деактивировать "микроболюсы SMB при высоких временных целях", так что даже при активных углеводах COB > 0, "SMB при временных целях", "SMB всегда" и действующих микроболюсах SMB, AAPS не будет вводить микроболюсы SMB, пока активны высокие временные цели.

Примечание: если вы вводите углеводы с помощью кнопки углеводы, а уровень глюкозы в крови меньше 72мг/дл или 4ммоль/л, то автоматически включается временная цель Гипо.

(temptarget-activity-temp-target)=

## Временная цель Нагрузка

Before and during activity, you might want to have a higher target to prevent getting low. To simplify setting the Temp-Target, you can configure a default "Activity Temp-Target". Based on DIA, IOB and your experience you might want to set TT prior to activity. See also [sports section in FAQ](FAQ-sports).

Advanced, [objective 9](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): The advantages about “Activity Temp-Target”, is that you can enable “High Temp-Targets raises sensitivity” for Temp-Targets higher or equal 100mg/dl or 5.5mmol/L in OpenAPS SMB. В этом случае чувствительность AAPS повышается. Some people do instead a profile switch before/while activity TT, but everybody is different. Если "SMB с высокой временной целью Temp-Target" отключен, AAPS не будет использовать SMB даже при активных углеводах COB > 0, "SMB с Temp-Target" или "SMB всегда" включены и OpenAPS SMB активен.

## Временная цель Ожидаемый прием пищи

If you know, that you want to eat soon, you can enable this Temp-Target, so there is already more IOB before eating. Especially for those who don’t do prebolusing, it might be a good alternative to already get the blood glucose to a lower target. You can read more about the "Eating soon mode" in the article ['How to do “eating soon” mode'](https://diyps.org/2015/03/26/how-to-do-eating-soon-mode-diyps-lessons-learned/) or [here](https://diyps.org/tag/eating-soon-mode/).

Для опытных пользователей, [ цель 9 ](Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb): Если вы включили OpenAPS SMB и активировали режим "низкая временная цель понижает чувствительность" AAPS будет работать более агрессивно. Для этой опции требуется значение временной цели TT менее 100мг/дл или 5,5 ммоль/л.

## Настраиваемая временная цель

Sometimes, you just want to have a temp target other than the default ones. Ее можно задать, нажав на целевой диапазон в правом углу главного экрана или на вкладке "Действия".

![Set temp target through Action tab](../images/TempTarget_ActionTab.png)