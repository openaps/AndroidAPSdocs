# Actualizar a una nueva versión o rama

## Compílala tú en lugar de descargarla

**AAPS** no está disponible para descargar, debido a la normativa sobre productos sanitarios. Es legal compilar la app para tu propio uso, ¡pero no debes dar una copia a otras personas! Consulta la página de [preguntas frecuentes](../UsefulLinks/FAQ.md) para más detalles.

## Notas importantes

- Actualiza a la nueva versión de **AAPS** lo antes posible cuando salga una nueva versión.
- Cuando haya una nueva versión, recibirás en la propia app **AAPS** un aviso con información sobre la nueva versión.
- La nueva versión también se anunciará en Facebook en el momento de su publicación.
- Tras la publicación, lee con detalle las [notas de la versión](ReleaseNotes.md) y aclara cualquier duda con la comunidad en Facebook o Discord antes de hacer la actualización.
- No olvides exportar los ajustes de **AAPS**.

## Actualizar AAPS con la compilación en el navegador

¿Ya compilaste tu app AAPS con un navegador? Sigue las instrucciones del método que usaste:

- **AAPS Builder** (tu repositorio privado, normalmente llamado `my-aaps`): [Actualizar AAPS con AAPS Builder](#aaps-builder-updates). No hay ningún fork que sincronizar.
- **Fork y archivo de preparación** (tu propia copia de AndroidAPS): [Actualizar con un navegador (fork)](./UpdateBrowserBuild.md).

## Actualizar AAPS con Android Studio

Sigue [estas instrucciones](./UpdateComputerBuild.md).

## Actualizar AAPS con la línea de comandos

Usa las [mismas instrucciones](../SettingUpAaps/CLIBuild.md) que cuando compilaste AAPS antes, pero descarga los nuevos cambios con git.

(Update-to-new-version-check-aaps-version-on-phone)=

### Comprobar la versión de AAPS en el teléfono

Consulta en las [notas de la versión](../Maintenance/ReleaseNotes.md) si hay instrucciones específicas para después de la actualización.

Después de instalar el nuevo APK:

- puedes comprobar la versión de **AAPS** en tu teléfono abriendo el **menú** (☰) arriba a la izquierda y luego **Acerca de** (como en la captura de pantalla de abajo). Puedes ver la versión actual de **AAPS**;
- asegúrate de que la importación de los ajustes se ha realizado; y
- revisa los ajustes de **AAPS** en **Ajustes** y asegúrate de que siguen siendo correctos.

![Diálogo «Acerca de» con la versión de AAPS instalada](../images/about_dialog_version.png)