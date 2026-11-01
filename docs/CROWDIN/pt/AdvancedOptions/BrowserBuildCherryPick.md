(github-cherry-pick)=

# Compilação no navegador: aplicar (cherry-pick) um commit

```{note}
Esta é uma operação opcional e avançada. Só funciona se compilar com um **fork** ([passos 1–4 da compilação no navegador](../SettingUpAaps/BrowserBuild.md)). Os repositórios do **AAPS Builder** não incluem este workflow.
```

Use isto apenas quando um programador lhe pedir para testar uma alteração específica (ele indica um ou mais hashes de commit) antes de esta estar numa versão lançada.

## Antes de começar

- [Sincronize o seu fork](#Update-to-new-version-update-your-repo): este workflow compila o estado atual do seu branch, não uma versão que escolhe numa lista.
- O Google Drive tem de estar autorizado ([Passo 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): a app compilada é guardada lá, como numa compilação normal.

## Executar o workflow

1. No seu fork do AndroidAPS no GitHub, abra **Actions**.
2. Expanda **All workflows** e selecione **Cherry Pick CI (Pre-release Feature Backport)**.
3. Toque em **Run workflow** e preencha:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from**: o branch ao qual adicionar os commits, normalmente `master`.
   - **Upstream repository**: de onde vêm os commits. Mantenha `nightscout/AndroidAPS`, a não ser que o programador lhe tenha dito outra coisa.
   - **Commit hash(es) to cherry-pick**: o(s) hash(es) que recebeu, separados por espaços.
   - **Select Build Variant**: consulte [variantes](#browserbuild-variant) (normalmente `fullRelease`).
4. Toque em **Run workflow**. Quando terminar, a app está no seu Google Drive, como depois de uma [compilação normal](../SettingUpAaps/BrowserBuildAPK.md).
