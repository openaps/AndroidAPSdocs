(github-cherry-pick)=

# Compilação no navegador: cherry-pick de um commit

```{note}
Esta é uma operação opcional e avançada. Ela só funciona se você compila com um **fork** ([etapas 1–4 da compilação no navegador](../SettingUpAaps/BrowserBuild.md)). Os repositórios do **AAPS Builder** não incluem este workflow.
```

Use isto só quando um desenvolvedor pedir para você testar uma mudança específica (ele passa um ou mais hashes de commit) antes de ela estar em uma versão lançada.

## Before you start

- [Sincronize seu fork](#Update-to-new-version-update-your-repo): este workflow compila o estado atual da sua branch, não uma versão que você escolhe em uma lista.
- O Google Drive deve estar autorizado ([Etapa 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): o app compilado é salvo lá, como em uma compilação normal.

## Executar o workflow

1. No seu fork do AndroidAPS no GitHub, abra **Actions**.
2. Expanda **All workflows** e selecione **Cherry Pick CI (Pre-release Feature Backport)**.
3. Toque em **Run workflow** e preencha:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Use workflow from** (usar o workflow de): a branch onde os commits serão adicionados, normalmente `master`.
   - **Upstream repository** (repositório de origem): de onde vêm os commits. Mantenha `nightscout/AndroidAPS`, a menos que o desenvolvedor diga outra coisa.
   - **Commit hash(es) to cherry-pick** (hashes de commit para o cherry-pick): o(s) hash(es) que você recebeu, separados por espaços.
   - **Select Build Variant** (selecionar a variante de compilação): veja as [variantes](#browserbuild-variant) (normalmente `fullRelease`).
4. Tap **Run workflow**. Quando terminar, o app estará no seu Google Drive, como depois de uma [compilação normal](../SettingUpAaps/BrowserBuildAPK.md).
