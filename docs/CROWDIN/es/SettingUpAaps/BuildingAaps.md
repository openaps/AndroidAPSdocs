# Compilar AAPS

## Compílala tú en lugar de descargarla

**La app AAPS (un archivo apk) no está disponible para descargar, debido a las normas sobre dispositivos médicos. Es legal compilar la app para tu propio uso, ¡pero no debes dar una copia a otras personas!**

Consulta la página de [preguntas frecuentes](../UsefulLinks/FAQ.md) para más detalles.

---

Hay tres métodos para compilar la app AAPS:

### Compilar con un navegador (recomendado)

Puedes compilar la app con tu teléfono usando GitHub Actions. Desde un teléfono Android, la página de configuración de [AAPS Builder](#aaps-builder) te guía paso a paso, y tú inicias cada compilación. Desde un ordenador o un iPhone, también puedes compilar con un fork y guardar la app en tu Google Drive.

**[Sigue estas instrucciones.](./BrowserBuild.md)**

----

### Compilar con Android Studio

Puedes compilar la app en tu ordenador con Android Studio. Antes era la única opción para compilar; hoy Android Studio lo usan sobre todo los desarrolladores que quieren hacer cambios en el código.

**[Sigue estas instrucciones.](./ComputerBuild.md)**

----

### Compilar con la línea de comandos

Esta opción es para quienes prefieren compilar AAPS en la línea de comandos local, sin instalar Android Studio.

**[Sigue estas instrucciones.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## Si la compilación falla

Cada método de compilación tiene su propia sección de solución de problemas:

* **AAPS Builder**: [solución de problemas de AAPS Builder](#aaps-builder-troubleshooting)
* **Compilación en el navegador** desde un ordenador o un iPhone: [Compilación en el navegador: solución de problemas](#aaps-ci-troubleshooting)
* **Android Studio**: [Solución de problemas para Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

¿Has perdido tu almacén de claves o su contraseña? Mira [Reinstalar AAPS con un nuevo almacén de claves](#reinstall-aaps).

Si la app se compila pero no se instala en tu teléfono, consulta [Transferir e instalar AAPS en tu teléfono](TransferringAndInstallingAaps.md).

Si tu problema no aparece aquí, consulta [¿Dónde puedo obtener ayuda?](../GettingHelp/WhereCanIGetHelp.md).
