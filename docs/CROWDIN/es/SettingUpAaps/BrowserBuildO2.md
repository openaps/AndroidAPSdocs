(aaps-ci-option2)=

# Opción 2 – Subir tu almacén de claves existente

```{note}
Esta página es parte del [Paso 2 – Crear tu almacén de claves de firma](BrowserBuildKeystore.md) de la [Compilación en el navegador](BrowserBuild.md). Asegúrate de que has leído la [decisión entre la Opción 1 y la Opción 2](#aaps-ci-preparation) y de que has descargado el archivo de preparación.
```

La Opción 2 reutiliza el JKS que ya creaste en una compilación anterior de AAPS desde un ordenador en Android Studio. Es adecuada para usuarios que ya tienen un JKS y conocen la contraseña y el alias del JKS.

Para `KEYSTORE_PASSWORD`, `KEY_ALIAS` y `KEY_PASSWORD`, introduce en GitHub tu contraseña y tu alias reales: los de Android Studio (mira abajo dónde los usaste).

```{warning}
**Contraseñas con caracteres especiales.** Introduce tus contraseñas exactamente como son. No añadas una barra invertida ni ningún otro carácter de escape: el workflow de compilación mantiene todos los caracteres sin cambios, y una barra invertida añadida pasa a formar parte de la contraseña.

Si la compilación sigue fallando en el paso de firma y tu contraseña contiene `$`, una comilla invertida, `"` o `\`, el archivo de workflow de tu fork está desactualizado. [Sincroniza tu fork](#Update-to-new-version-update-your-repo) con la última versión de dev y vuelve a ejecutar la compilación. Consulta [Compilación en el navegador: solución de problemas](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Recordar contraseñas](../images/Building-the-App/044_RememberPwd.png)
```

## Elige tu dispositivo

```{tip}
¿Compilas desde un **teléfono Android**? Usa [AAPS Builder](BrowserBuildAapsBuilder.md) en su lugar: no necesita archivo de preparación.
```

Sigue la página que corresponde al dispositivo desde el que compilas:

- **[Ordenador](BrowserBuildO2Computer.md)** – Windows, Mac o Linux.

```{tip}
Puedes cambiar de dispositivo en cualquier momento: solo abre la página correspondiente.
```

```{toctree}
:hidden:

Ordenador <BrowserBuildO2Computer.md>
```
