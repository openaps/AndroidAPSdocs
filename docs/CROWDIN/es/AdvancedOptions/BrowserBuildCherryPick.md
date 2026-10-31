(github-cherry-pick)=

# Compilación en el navegador: aplicar un commit con cherry-pick

```{note}
Esta es una operación opcional y avanzada. Solo funciona si compilas con un **fork** ([pasos 1–4 de la compilación en el navegador](../SettingUpAaps/BrowserBuild.md)). Los repositorios de **AAPS Builder** no incluyen este workflow.
```

Úsalo solo cuando un desarrollador te pida probar un cambio concreto (te da uno o más hashes de commit) antes de que esté en una versión publicada.

## Antes de empezar

- [Sincroniza tu fork](#Update-to-new-version-update-your-repo): este workflow compila el estado actual de tu rama, no una versión que eliges de una lista.
- Google Drive debe estar autorizado ([paso 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): la app compilada se guarda allí, como en una compilación normal.

## Ejecutar el workflow

1. En tu fork de AndroidAPS en GitHub, abre **Actions**.
2. Expande **All workflows** y selecciona **Cherry Pick CI (Pre-release Feature Backport)**.
3. Toca **Run workflow** y rellena:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from**: la rama a la que se añaden los commits, normalmente `master`.
   - **Upstream repository**: de dónde vienen los commits. Deja `nightscout/AndroidAPS` salvo que el desarrollador te diga otra cosa.
   - **Commit hash(es) to cherry-pick**: el o los hashes que te dieron, separados por espacios.
   - **Select Build Variant**: consulta las [variantes](#browserbuild-variant) (normalmente `fullRelease`).
4. Toca **Run workflow**. Cuando termine, la app estará en tu Google Drive, como después de una [compilación normal](../SettingUpAaps/BrowserBuildAPK.md).
