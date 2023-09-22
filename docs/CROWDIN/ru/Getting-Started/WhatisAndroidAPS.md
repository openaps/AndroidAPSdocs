# What is a closed loop system with AAPS?

AAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone. Что такое система искусственной поджелудочной железы? Это программа, которая призвана делать то, что делает живая поджелудочная: автоматически поддерживать уровень сахара в крови в допустимых пределах.

ИПЖ не может выполнять все функции биологической поджелудочной железы, но она может сделать диабет типа 1 более легким в управлении с использованием коммерчески доступных устройств и простого и безопасного ПО. Those devices include a continuous glucose monitor (CGM) to tell AAPS about your blood sugar levels and an insulin pump which AAPS controls to deliver appropriate doses of insulin. Приложение взаимодействует с этими устройствами через Bluetooth. Она производит расчет дозирования с использованием алгоритма или набора правил, разработанных для другой системы ИПЖ, OpenAPS, которая имеет тысячи пользователей и миллионы часов использования.

A note of caution: AAPS is not regulated by any medical authority in any country. Using AAPS is essentially carrying out a medical experiment on yourself. Настройка системы требует настойчивости и технических знаний. Если у вас нет технических знаний, вы их постепенно приобретете. Вся нужная информация есть в этих документах, на соответствующих сайтах интернете или у других пользователей, которые уже спостроили APS -вы можете спросить их в группах Facebook или на форумах. Many people have successfully built AAPS and are now using it entirely safely, but it is essential that every user:

- Builds the system themselves so that they thoroughly understand how it works
- Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
- Maintains and monitors the system to ensure it is working properly

```{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout в настоящее время не пытается соответствовать принципам конфиденциальности HIPAA. Use Nightscout and AAPS at your own risk, and do not use the information or code to make medical decisions.
- Use of code from github.com is without warranty or formal support of any kind. Пожалуйста, ознакомьтесь с ЛИЦЕНЗИЕЙ этого репозитория.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Их использование - в информационных целях и не подразумевает какой-либо принадлежности к ним или их одобрения.

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
```

Если вы готовы продолжать, читайте дальше.

## Primary goals behind AAPS

- An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (<https://openaps.org/reference-design/>)
- An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
- An app to which users can easily add or remove modules as needed
- An app with different versions for specific locations and languages.
- An app which can be used in open- and closed-loop mode
- An app that is totally transparent: users can input parameters, see results, and make the final decision
- An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves
- An app closely integrated with Nightscout
- An app in which the user is in control of safety constraints

## Как начать

Все, что здесь написано, очень важно, но поначалу может показаться довольно запутанным. A good orientation is given by the [Module Overview](../Module/module.md) and the [Objectives](../Usage/Objectives.html).
