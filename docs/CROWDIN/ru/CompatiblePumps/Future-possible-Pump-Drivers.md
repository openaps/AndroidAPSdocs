# Вероятные будущие драйверы для помп

Это список некоторых помп и состояние их поддержки в системах ИПЖ, а затем статус в AAPS. В конце есть перечень того, что требуется, чтобы помпа стала совместимой с системами ИПЖ

    {contents} Table of contents
    :depth: 1
    :local: true

## Pumps in AAPS integration phase

**Coming soon:** drivers for these pumps are in development and already running in test builds.

Omnipod 5 ([Homepage](https://www.omnipod.com/))

![Omnipod 5 driver in development](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([Homepage](https://www.tandemdiabetes.com/))

![Tandem t:Mobi driver in development](../images/future-pumps/tandem-mobi-driver.png)

## Помпы, способные к работе в качестве компонента ИПЖ

### Kaleido ([Домашняя страница](https://www.hellokaleido.com/))

**Loop status:** Pump is a Loop candidate, but protocol is unknown at the time. No interest in open source from the vendor.

**Требования к оборудованию для AAPS:** Никаких. It seems to be BT enabled.

### Tandem: t:slim X3 ([Homepage](https://www.tandemdiabetes.com/about-us/pipeline))

**Loop status:** Possible future Loop candidate. The hope is that t:slim X3 will allow full control from a phone, which would enable AAPS support, but the timeline and features are still unknown.

**Требования к оборудованию для AAPS:** Никаких. It is expected to be Bluetooth enabled.

**Comments:** Not yet released. t:slim X3 appears to be repeatedly deprioritized on Tandem's roadmap in favour of t:Mobi (including a tubeless version) and Sigi (their patch pump).

### Twiist ([Homepage](https://www.twiist.com/))

**Loop status:** Loop candidate.

**Требования к оборудованию для AAPS:** Никаких. It is Bluetooth enabled.

### Инсулиновая помпа Willсare ([ Домашняя страница ](http://shinmyungmedi.com/en/))

**Статус реализации:** В настоящий момент не является кандидатом, но их сотрудники связывались с нами, и они заинтересованы в том, чтобы сделать помпу пригодной для ИПЖ (на данный момент в помпе отсутствуют команды get/set profile).

**Требования к оборудованию для AAPS:** Никаких. It seems to be BT enabled.

** Комментарии: ** Поскольку компания заинтересована в интеграции с AAPS, они могут сами предпринять необходимые действия.

### Ypsopump ([Homepage](https://www.ypsomed.com/))

**Loop status:** Loop candidate. The pump's Bluetooth protocol has been reverse-engineered by the community, so communicating with it is possible in principle.

**Требования к оборудованию для AAPS:** Никаких. It is Bluetooth enabled.

**Comments:** The Ypsopump protects its Bluetooth communication with heavy third-party encryption. Working with it is technically demanding, which makes building and maintaining a reliable driver hard. There is no production-ready AAPS driver yet.

## Помпы, снятые с производства (компании больше не работают)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Comments:** End of support March 2025.

## Помпы, неспособные к работе в качестве компонента ИПЖ

### Medtronic Bluetooth

**Комментарии:** Medtronic [отказался](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([Домашняя страница](https://www.tandemdiabetes.com/))

**Comments:** The Tandem Bluetooth protocol has been reverse-engineered, but on the t:slim X2 only boluses can be delivered — basal delivery cannot be controlled — so it cannot be used safely for looping. This is unlikely to change unless Tandem allows full control of the X2 from a phone, which would more probably arrive with the t:slim X3 instead.

### Accu-Chek Solo

**Comments:** No community success in communicating with the Solo pump.

## Требования к пригодности помп для ИПЖ

**Предварительные условия**

- Помпа должна поддерживать дистанционное управление. (блутус, радио и т. п.)
- Протокол взломан/документирован/и т. д.

**Минимальные требования**

- Устанавливать временную скорость базала
- Получать сведения о состоянии
- Отменять временную базальную скорость

**Для oref1(SMB) или болюсов:**

- Настраивать ввод болюса

**Желательно иметь**

- Отмену болюса
- Получать профиль базала (почти требование)
- Устанавливать профиль базала (хорошо иметь)
- Чтение истории 

**Другое (не обязательно, но желательно)**

- Настраивать пролонгированный болюс
- Отменять пролонгированный болюс
- Чтение истории
- Чтение суммарной суточной дозы инсулина TDD

### Поддержка других помп

Если у вас есть какие-либо другие помпы, для которых вы хотите увидеть статус, пожалуйста, свяжитесь со мной (@andyrozman на gitter).