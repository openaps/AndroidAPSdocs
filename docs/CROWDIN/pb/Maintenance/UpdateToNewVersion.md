# Atualizar para uma nova versão ou branch

## Compile você mesmo em vez de baixar

O **AAPS** não está disponível para download por causa das regras para dispositivos médicos. É legal compilar o app para uso próprio, mas você não deve dar uma cópia para outras pessoas! Veja a página [FAQ para loopers](../UsefulLinks/FAQ.md) para mais detalhes.

## Observações importantes

- Atualize para a nova versão do **AAPS** o mais rápido possível depois que uma nova versão for lançada.
- Quando uma nova versão estiver disponível, você receberá no próprio app **AAPS** um aviso sobre a nova versão.
- A nova versão também será anunciada no Facebook no momento do lançamento.
- Depois do lançamento, leia com atenção as [Notas de versão](ReleaseNotes.md) e tire suas dúvidas com a comunidade no Facebook ou no Discord antes de fazer a atualização.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## Atualizar o AAPS com a compilação no navegador

Você já compilou o seu app AAPS pelo navegador? Siga as instruções do método que você usou:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). Não há fork para sincronizar.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## Atualizar o AAPS com o Android Studio

Siga [estas instruções](./UpdateComputerBuild.md).

## Atualizar o AAPS pela linha de comando

Use as [mesmas instruções](../SettingUpAaps/CLIBuild.md) de quando você compilou o AAPS antes, mas baixe as novas alterações com o git (pull).

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. Verifique nas [Notas de versão](../Maintenance/ReleaseNotes.md) se há instruções específicas depois da atualização.

Depois de instalar o novo apk:

- você pode verificar a versão do **AAPS** no seu telefone abrindo o **menu** (☰) no canto superior esquerdo e depois **Sobre** (como na captura de tela abaixo). A versão atual do **AAPS** pode ser vista;
- verifique se a importação das configurações foi feita; e
- verifique as configurações do **AAPS** em **Configurações** e confirme que elas continuam corretas.

![Diálogo Sobre com a versão do AAPS instalada](../images/about_dialog_version.png)