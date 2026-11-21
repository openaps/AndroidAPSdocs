# Atualizar para uma nova versão ou branch

## Compilar em vez de transferir

O **AAPS** não está disponível para transferência, devido às regras sobre dispositivos médicos. É legal compilar a app para uso próprio, mas não pode dar uma cópia a outras pessoas! Veja a [página FAQ](../UsefulLinks/FAQ.md) para mais detalhes.

## Notas importantes

- Atualize para a nova versão do **AAPS** o mais cedo possível depois de sair uma nova versão.
- Quando houver uma nova versão, recebe na própria app **AAPS** uma faixa de informação sobre a nova versão.
- A nova versão também é anunciada no Facebook no momento da publicação.
- Depois da publicação, leia as [Notas das Versões](ReleaseNotes.md) com atenção e esclareça as suas dúvidas com a comunidade no Facebook ou no Discord antes de fazer a atualização.
- Vai atualizar a partir do **AAPS** 3.x? Leia primeiro [O que mudou no AAPS v4](V4Changes.md): indica as funções que mudaram de lugar, mudaram de nome ou foram removidas.
- Não se esqueça de [exportar as suas definições](ExportImportSettings.md). Quando as importar outra vez depois da atualização, escolhe se as definições da bomba também são substituídas.

## Atualizar o AAPS com a compilação no navegador

Já compilou a sua app AAPS com um navegador? Siga as instruções do método que usou:

- **AAPS Builder**: compila a partir da página **Build AAPS** do seu repositório privado (normalmente chamado `my-aaps`) e descarrega a app do GitHub. Siga [Atualizar o AAPS com o AAPS Builder](#aaps-builder-updates). Não há fork para sincronizar.
- **Fork e ficheiro de preparação**: executa o workflow **AAPS-CI** na sua própria cópia (fork) do AndroidAPS, um repositório chamado `AndroidAPS` na sua conta GitHub, e a app fica no seu Google Drive. Siga [Atualizar com um navegador (fork)](./UpdateBrowserBuild.md).

## Atualizar o AAPS com o Android Studio

Siga [estas instruções](./UpdateComputerBuild.md).

## Atualizar o AAPS com a linha de comandos

Use as [mesmas instruções](../SettingUpAaps/CLIBuild.md) da compilação anterior do AAPS, mas obtenha as novas alterações com o git.

(Update-to-new-version-check-aaps-version-on-phone)=

## Depois da atualização

Estes passos são os mesmos para todos os métodos de compilação. Veja nas [Notas das Versões](../Maintenance/ReleaseNotes.md) se há instruções específicas depois da atualização.

Depois de instalar o novo apk:

- pode ver a versão do **AAPS** no seu telefone abrindo o **menu** (☰) no canto superior esquerdo e depois **Sobre** (como na captura de ecrã abaixo). Pode ver a versão atual do **AAPS**;
- confirme que importou as suas definições; e
- verifique as suas definições do **AAPS** em **Definições** e confirme que continuam corretas.

![Janela Sobre com a versão do AAPS instalada](../images/update/about_dialog_version.png)