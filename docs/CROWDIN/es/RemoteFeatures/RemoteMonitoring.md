# Seguimiento remoto

![Seguimiento de niños](../images/KidsMonitoring.png)

__AAPS__ ofrece varias funciones para el seguimiento remoto de niños con diabetes tipo 1, y también permite comandos remotos que envían instrucciones a __AAPS__ a distancia. Del mismo modo, __AAPSClient__ también se puede usar para el seguimiento remoto del __AAPS__ de tu pareja o de un amigo.

## Funciones

- La bomba del niño la controla el teléfono del niño con __AAPS__.
- Los cuidadores pueden seguir a distancia todos los datos importantes, como la glucosa, los carbohidratos activos, la insulina activa, etc., con la **apk AAPSClient** en su teléfono Android (hay una versión de **AAPSClient** para iPhone en desarrollo, consulta [AAPSClient](AapsClient.md)). Los ajustes cambiados en __AAPS__ se sincronizan con __AAPSClient__ y al revés.
- Los cuidadores pueden recibir alarmas con la **app xDrip en modo seguidor** en su teléfono Android, si está configurado el modo complementario de xDrip.
- El control remoto de __AAPS__ con [Comandos SMS](../RemoteFeatures/SMSCommands.md) está protegido con autenticación de dos factores.
- El control remoto con __AAPSClient__ usa el canal de comandos firmados que llegó con **AAPS** 4: primero hay que **emparejar** el cliente con el máster (con un código QR o un PIN), y el máster confirma y ejecuta cada comando. El teléfono de cada cuidador puede tener su propio [rol](#client-master-control-roles), desde solo lectura hasta control total; consulta [Control máster ↔ cliente](#client-master-control).

## Herramientas y aplicaciones para el seguimiento remoto

- [Nightscout](https://nightscout.github.io/) en el navegador web (sobre todo para ver datos).
- [__AAPSClient__](AapsClient.md) es una versión reducida de __AAPS__ que puede seguir al __AAPS__ máster y, una vez **emparejada**, enviar comandos remotos: carbohidratos, __Objetivos temporales__, __Cambios de perfil__ e incluso bolos (consulta [Control máster ↔ cliente](#client-master-control)). Hay 3 apps: [AAPSClient, AAPSClient2 y AAPSClient3 para descargar](https://github.com/nightscout/AndroidAPS/releases/), así un cuidador puede seguir hasta a tres personas distintas desde el mismo teléfono (p. ej., dos niños con tipo 1, cada uno con su propia cuenta de Nightscout y su propio __AAPS__ máster).
- Dexcom Follow, si usas la app original de Dexcom (solo valores de glucosa).
- [xDrip](../CompatibleCgms/xDrip.md) en modo seguidor (sobre todo valores de glucosa y **alarmas**).
- [Sugarmate](https://sugarmate.io/) o [Spike](https://spike-app.com/) en iOS (sobre todo valores de glucosa y **alarmas**).
- Algunos usuarios usan una herramienta completa de acceso remoto como [TeamViewer](https://www.teamviewer.com/) para resolver problemas avanzados a distancia.

## Opciones de reloj inteligente

Un reloj inteligente puede ser una herramienta muy útil para manejar __AAPS__ con niños con DT1. Hay varias opciones posibles:

- Opción 1: si __AAPSClient__ está instalado en el teléfono del cuidador, se puede instalar la [app AAPSClient para WearOS](https://github.com/nightscout/AndroidAPS/releases/) en un reloj inteligente compatible conectado al teléfono del cuidador. Muestra la __glucosa__ actual, el estado del lazo y el historial de bolos, y permite introducir carbohidratos, __Objetivos temporales__ y cambios de __Perfil__. Si el cliente está **emparejado** con el máster, el reloj también puede iniciar un **bolo**: el comando pasa por el cliente hasta el máster, que lo confirma y lo administra (consulta [Control máster ↔ cliente](#client-master-control)).
- Opción 2: la [app AAPS para WearOS](../WearOS/WearOsSmartwatch.md) también se puede compilar e instalar en un reloj inteligente compatible, conectado al teléfono del niño pero que lleva puesto el cuidador. Esto incluye todas las funciones de arriba y además permite poner un bolo de insulina directamente, sin tener que quitarle el teléfono al niño.
- Opción 3: solo pantalla. Un reloj que **AAPS** no admite directamente (Xiaomi, Amazfit o un reloj Wear OS que muestra una complicación) puede mostrar la glucosa, la IOB, los COB y el estado del lazo con una app complementaria como WatchDrip+ o GlucoDataHandler. Esta app recibe los datos del complemento **Aplicaciones complementarias externas** del teléfono con **AAPS** o **AAPSClient** al que está conectado. Consulta [Aplicaciones complementarias externas](#watches-external-companion-apps).

## Cosas a tener en cuenta

- Ten en cuenta el retraso entre el máster y el seguidor por el tiempo de subida y descarga, y también que el teléfono máster con __AAPS__ solo sube datos después de cada ejecución del lazo.
- ¿Cuál es tu plan de emergencia si el control remoto no funciona (_p. ej.,_ problemas de red o pérdida de la conexión Bluetooth)? Piensa siempre qué pasará con **AAPS** si de repente no puedes enviar un nuevo comando. **AAPS** sobrescribe la basal, el ISF y el IC de la bomba con los valores del perfil actual. Usa solo cambios de perfil temporales (_es decir,_ con una duración fija) si cambias a un perfil de insulina más fuerte, por si se corta tu conexión remota. Así la bomba volverá al perfil original cuando se acabe el tiempo.
