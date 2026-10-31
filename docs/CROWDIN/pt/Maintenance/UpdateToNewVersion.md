# Atualizar para uma nova versão ou branch

## Compilar em vez de transferir

O **AAPS** não está disponível para transferência, devido às regras sobre dispositivos médicos. É legal compilar a app para uso próprio, mas não pode dar uma cópia a outras pessoas! Veja a [página FAQ](../UsefulLinks/FAQ.md) para mais detalhes.

## Notas importantes

- Atualize para a nova versão do **AAPS** o mais cedo possível depois de sair uma nova versão.
- Quando houver uma nova versão, recebe na própria app **AAPS** uma faixa de informação sobre a nova versão.
- A nova versão também é anunciada no Facebook no momento da publicação.
- Depois da publicação, leia as [Notas das Versões](ReleaseNotes.md) com atenção e esclareça as suas dúvidas com a comunidade no Facebook ou no Discord antes de fazer a atualização.
- Não se esqueça de exportar as definições do **AAPS**.

## Atualizar o AAPS com a compilação no navegador

Já compilou a sua app AAPS com um navegador? Siga as instruções do método que usou:

- **AAPS Builder** (o seu repositório privado, normalmente chamado `my-aaps`): [Atualizar o AAPS com o AAPS Builder](#aaps-builder-updates). Não há fork para sincronizar.
- **Fork e ficheiro de preparação** (a sua própria cópia do AndroidAPS): [Atualizar com um navegador (fork)](./UpdateBrowserBuild.md).

## Atualizar o AAPS com o Android Studio

Siga [estas instruções](./UpdateComputerBuild.md).

## Atualizar o AAPS com a linha de comandos

Use as [mesmas instruções](../SettingUpAaps/CLIBuild.md) da compilação anterior do AAPS, mas obtenha as novas alterações com o git.

(Update-to-new-version-check-aaps-version-on-phone)=

### Verifique a versão do AAPS no telefone

Veja nas [Notas das Versões](../Maintenance/ReleaseNotes.md) se há instruções específicas depois da atualização.

Depois de instalar o novo apk:

- pode ver a versão do **AAPS** no seu telefone: abra o **menu** (☰) no canto superior esquerdo e depois **Sobre** (como na captura de ecrã abaixo). Pode ver a versão atual do **AAPS**;
- confirme que as definições foram importadas; e
- verifique as definições do **AAPS** em **Definições** e confirme que continuam corretas.

![Janela Sobre com a versão do AAPS instalada](../images/about_dialog_version.png)