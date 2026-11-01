(aaps-ci-preparation)=

# Compilación en el navegador – Paso 2: crear tu almacén de claves de firma

```{note}
Este es el **Paso 2** de la [Compilación en el navegador](BrowserBuild.md). Primero completa el [Paso 1 – Crear tu fork de GitHub](BrowserBuildFork.md).
```

AAPS must be signed with private keys stored in a **Java KeyStore (JKS)**. Esta es la decisión más importante de todo el proceso, porque determina si más adelante podrás **actualizar** AAPS sin reinstalarlo.

```{note}
En los próximos pasos guardarás información privada (tu almacén de claves y, más adelante, tu acceso a Google Drive) dentro de GitHub como **secretos** (secrets). Un secreto es simplemente un valor cifrado que solo tu propia compilación puede leer: nadie más puede verlo, ni siquiera las personas que miran tu fork. Así tu compilación sigue siendo solo tuya.
```

## Elige tu opción de almacén de claves

Lee las dos opciones y elige la que corresponde a tu situación.

### Opción 1 – Generar un nuevo almacén de claves (usuarios nuevos)

Elige esta opción si **cualquiera** de estas frases es cierta:

- Es la **primera vez** que compilas AAPS.
- No tienes un almacén de claves de una compilación anterior con Android Studio (en el ordenador).
- Has olvidado la contraseña o el alias de tu almacén de claves.

```{warning}
Compilar AAPS con la **Opción 1** crea un almacén de claves totalmente nuevo, así que **no te permitirá actualizar tu AAPS actual** sin reinstalarlo. Para pasar a esta nueva compilación debes exportar tus ajustes, desinstalar el AAPS antiguo, instalar el nuevo e importar tus ajustes otra vez. Sigue los pasos de [Reinstalar AAPS con un nuevo almacén de claves](#reinstall-aaps).
```

**→ [Continuar con la Opción 1 – Generar un nuevo almacén de claves](BrowserBuildO1.md)**

### Opción 2 – Subir tu almacén de claves existente (usuarios actuales o anteriores)

Elige esta opción si **ya tienes** el almacén de claves `.jks` que usaste en una compilación anterior de AAPS en un ordenador con Android Studio, **y** conoces su contraseña y su alias (normalmente `key0`).

Así tu instalación actual de AAPS se puede seguir actualizando: las próximas actualizaciones usarán el mismo almacén de claves.

**→ [Continuar con la Opción 2 – Subir tu almacén de claves existente](BrowserBuildO2.md)**

----

```{note}
En la siguiente página elegirás tu dispositivo (ordenador o iPhone). Después, cada página de dispositivo te guía para descargar y abrir el archivo de preparación de la forma correcta para ese dispositivo, y para crear tu almacén de claves. La app AAPS compilada se guardará en tu Google Drive.
```

**Siguiente: elige la [Opción 1](BrowserBuildO1.md) o la [Opción 2](BrowserBuildO2.md) de arriba y luego sigue la página de tu dispositivo.**

----

(ci-keystore-export)=

## Exportar tu almacén de claves (opcional)

Si quieres exportar tu almacén de claves guardado, usa este método.

Este script exportará la información de tu almacén de claves ya configurado (de la Opción 1 o de la Opción 2) como un archivo ZIP protegido con contraseña a la carpeta `/AAPS/KeyStore` de tu Google Drive.

```{warning}
Antes de usar este método de exportación, asegúrate de que has terminado la configuración del almacén de claves y de Google Drive.
```

### Pasos:

1. **Añadir el secreto con la contraseña del ZIP:**
   - Ve a **Settings** → **Secrets and variables** → **Actions** de tu repositorio
   - Haz clic en **New repository secret**
   - En el campo **Name**, escribe: `ZIP_PASSWORD`
   - En el campo **Secret**, escribe tu propia contraseña para cifrar el ZIP
   - Usa solo letras inglesas (sin tildes ni ñ) y números en la contraseña (sin símbolos especiales)
   - Haz clic en **Add secret**

   ![aaps_ci_zip_password.png](../images/Building-the-App/CI/aaps_ci_zip_password.png)

2. **Ejecutar el workflow de exportación:**
   - Ve a la pestaña **Actions** de tu repositorio
   - Select **CI Keystore Export**
   - Haz clic en **Run workflow**
   - El archivo ZIP con el almacén de claves exportado se guardará en tu Google Drive

   ![aaps_ci_keystore_export.png](../images/Building-the-App/CI/aaps_ci_keystore_export.png)

   ![aaps_ci_keystore_export_run.png](../images/Building-the-App/CI/aaps_ci_keystore_export_run.png)

```{toctree}
:hidden:

Opción 1 – Generar un nuevo almacén de claves <BrowserBuildO1.md>
Opción 2 – Subir tu almacén de claves existente <BrowserBuildO2.md>
```
