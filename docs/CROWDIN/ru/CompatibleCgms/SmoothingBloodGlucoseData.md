- - -
orphan: true
- - -

# Сглаживание данных гликемии

Если данные **СК** скачут/являются шумными, **AAPS** может дозировать инсулин неверно, что приведет к высокому или низкому СК. Если вы заметили ошибки в данных мониторинга CGM, важно отключить цикл до тех пор, пока проблема не будет решена. В зависимости от НМГ, такие проблемы могут возникнуть из-за конфигурации НМГ в **AAPS** (как описано ниже); или из-за некорректной работы сенсора (что может потребовать его замену).

## Smoothing data within AAPS

Начиная с версии 3.2, **AAPS** предлагает опцию сглаживания данных СК внутри самого **AAPS** вместо приложения НМГ. В [Конфигураторе > Сглаживание](../SettingUpAaps/ConfigBuilder.md) есть три опции.

![Сглаживание](../images/ConfBuild_Smoothing.png)

### Простое экспоненциальное сглаживание

In general, this is the recommended option to start with, as it is most aggressive in resolving noise and rewrites the most recent value. However, see the table below for other specific recommendations.

### Среднее сглаживание

Этот вариант схож с ретроспективным сглаживанием, который ранее был реализован на некоторых платформах мониторинга CGM. Оно более реактивно к новым изменениям и поэтому более подвержено неправильному реагированию на зашумленные данные CGM.

### Без сглаживания

Используйте данную опцию только в случае хорошего сглаживания данных вашим источником СК перед их отправкой в **AAPS**.

(smoothing-xdrip-dexcom-g6)=

## Предложения использовать сглаживание

|               |   Экспоненциальное    |  Среднее  |  Отсутствует  |
| ------------- |:---------------------:|:---------:|:-------------:|
| G5/G6/ONE     | При зашумлении данных |           | Рекомендуемое |
| G7/ONE+/Stelo | При зашумлении данных | If stable |               |

Libre sensors are noisy and can require smoothing. When using xDrip+ direct connection, or the patched app data source (receiving from another app, Juggluco included), [smoothing is already done inside the app](#libre2-value-smoothing-raw-values).

| Sensor / Data source | Juggluco | xDrip+ direct | xDrip+ bridge | xDrip+ patched app |
| -------------------- |:--------:|:-------------:|:-------------:|:------------------:|
| Libre 1/14 days/Pro  |   N.A.   |     N.A.      |    Среднее    |        N.A.        |
| Libre 2/2+ (EU)      | Среднее  |  Отсутствует  |    Среднее    |    Отсутствует     |
| Libre 2/2+/3/3+      | Среднее  |     N.A.      |     N.A.      |    Отсутствует     |
