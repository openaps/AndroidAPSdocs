# Atualizar para uma nova versão ou branch

## Compile você mesmo em vez de baixar

O **AAPS** não está disponível para download por causa das regras para dispositivos médicos. É legal compilar o app para uso próprio, mas você não deve dar uma cópia para outras pessoas! Veja a página [FAQ para loopers](../UsefulLinks/FAQ.md) para mais detalhes.

## Observações importantes

- Atualize para a nova versão do **AAPS** o mais rápido possível depois que uma nova versão for lançada.
- Quando uma nova versão estiver disponível, você receberá no próprio app **AAPS** um aviso sobre a nova versão.
- A nova versão também será anunciada no Facebook no momento do lançamento.
- Depois do lançamento, leia com atenção as [Notas de versão](ReleaseNotes.md) e tire suas dúvidas com a comunidade no Facebook ou no Discord antes de fazer a atualização.
- Está atualizando a partir do **AAPS** 3.x? Primeiro leia [O que mudou no AAPS v4](V4Changes.md): a página lista os recursos que mudaram de lugar, foram renomeados ou foram removidos.
- Não se esqueça de [exportar suas configurações](ExportImportSettings.md). Quando você importá-las de novo depois da atualização, você escolhe se as configurações da bomba também serão substituídas.

## Atualizar o AAPS com a compilação no navegador

Você já compilou o seu app AAPS pelo navegador? Siga as instruções do método que você usou:

- **AAPS Builder**: você compila pela página **Build AAPS** do seu repositório privado (normalmente chamado `my-aaps`) e baixa o app do GitHub. Siga [Atualizar o AAPS com o AAPS Builder](#aaps-builder-updates). Não há fork para sincronizar.
- **Fork e arquivo de preparação**: você executa o workflow **AAPS-CI** na sua própria cópia (fork) do AndroidAPS, um repositório chamado `AndroidAPS` na sua conta do GitHub, e o app é salvo no seu Google Drive. Siga [Atualizar pelo navegador (fork)](./UpdateBrowserBuild.md).

## Atualizar o AAPS com o Android Studio

Siga [estas instruções](./UpdateComputerBuild.md).

## Atualizar o AAPS pela linha de comando

Use as [mesmas instruções](../SettingUpAaps/CLIBuild.md) de quando você compilou o AAPS antes, mas baixe as novas alterações com o git (pull).

(Update-to-new-version-check-aaps-version-on-phone)=

## Depois da atualização

Estes passos são os mesmos para todos os métodos de compilação. Verifique nas [Notas de versão](../Maintenance/ReleaseNotes.md) se há instruções específicas depois da atualização.

Depois de instalar o novo apk:

- você pode ver a versão do **AAPS** no seu telefone abrindo o **menu** (☰) no canto superior esquerdo e depois **Sobre** (como na captura de tela abaixo). A versão atual do **AAPS** pode ser vista;
- verifique se você importou suas configurações; e
- confira as configurações do **AAPS** em **Configurações** e garanta que elas continuam corretas.

![Diálogo Sobre com a versão do AAPS instalada](../images/update/about_dialog_version.png)