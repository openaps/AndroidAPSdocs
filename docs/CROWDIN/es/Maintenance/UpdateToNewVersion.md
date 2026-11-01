# Actualizar a una nueva versión o rama

## Compílala tú en lugar de descargarla

**AAPS** no está disponible para descargar, debido a la normativa sobre productos sanitarios. Es legal compilar la app para tu propio uso, ¡pero no debes dar una copia a otras personas! Consulta la página de [preguntas frecuentes](../UsefulLinks/FAQ.md) para más detalles.

## Notas importantes

- Actualiza a la nueva versión de **AAPS** lo antes posible cuando salga una nueva versión.
- Cuando haya una nueva versión, recibirás en la propia app **AAPS** un aviso con información sobre la nueva versión.
- La nueva versión también se anunciará en Facebook en el momento de su publicación.
- Tras la publicación, lee con detalle las [notas de la versión](ReleaseNotes.md) y aclara cualquier duda con la comunidad en Facebook o Discord antes de hacer la actualización.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## Actualizar AAPS con la compilación en el navegador

¿Ya compilaste tu app AAPS con un navegador? Sigue las instrucciones del método que usaste:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). No hay ningún fork que sincronizar.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## Actualizar AAPS con Android Studio

Sigue [estas instrucciones](./UpdateComputerBuild.md).

## Actualizar AAPS con la línea de comandos

Usa las [mismas instrucciones](../SettingUpAaps/CLIBuild.md) que cuando compilaste AAPS antes, pero descarga los nuevos cambios con git.

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. Consulta en las [notas de la versión](../Maintenance/ReleaseNotes.md) si hay instrucciones específicas para después de la actualización.

Después de instalar el nuevo APK:

- puedes comprobar la versión de **AAPS** en tu teléfono abriendo el **menú** (☰) arriba a la izquierda y luego **Acerca de** (como en la captura de pantalla de abajo). Puedes ver la versión actual de **AAPS**;
- asegúrate de que la importación de los ajustes se ha realizado; y
- revisa los ajustes de **AAPS** en **Ajustes** y asegúrate de que siguen siendo correctos.

![Diálogo «Acerca de» con la versión de AAPS instalada](../images/about_dialog_version.png)