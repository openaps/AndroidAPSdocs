# Atualizar para uma nova versão ou branch

## Compilar em vez de transferir

O **AAPS** não está disponível para transferência, devido às regras sobre dispositivos médicos. É legal compilar a app para uso próprio, mas não pode dar uma cópia a outras pessoas! Veja a [página FAQ](../UsefulLinks/FAQ.md) para mais detalhes.

## Notas importantes

- Atualize para a nova versão do **AAPS** o mais cedo possível depois de sair uma nova versão.
- Quando houver uma nova versão, recebe na própria app **AAPS** uma faixa de informação sobre a nova versão.
- A nova versão também é anunciada no Facebook no momento da publicação.
- Depois da publicação, leia as [Notas das Versões](ReleaseNotes.md) com atenção e esclareça as suas dúvidas com a comunidade no Facebook ou no Discord antes de fazer a atualização.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## Atualizar o AAPS com a compilação no navegador

Já compilou a sua app AAPS com um navegador? Siga as instruções do método que usou:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). Não há fork para sincronizar.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## Atualizar o AAPS com o Android Studio

Siga [estas instruções](./UpdateComputerBuild.md).

## Atualizar o AAPS com a linha de comandos

Use as [mesmas instruções](../SettingUpAaps/CLIBuild.md) da compilação anterior do AAPS, mas obtenha as novas alterações com o git.

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. Veja nas [Notas das Versões](../Maintenance/ReleaseNotes.md) se há instruções específicas depois da atualização.

Depois de instalar o novo apk:

- you can check the **AAPS** version on your phone by opening the **menu** (☰) on the top left and then **About** (as per the screenshot below). The current **AAPS** version can be viewed;
- make sure you have imported your settings; and
- please check your **AAPS** settings under **Settings** and ensure these remain accurate.

![Janela Sobre com a versão do AAPS instalada](../images/about_dialog_version.png)