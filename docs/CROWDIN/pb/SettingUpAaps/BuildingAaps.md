# Building AAPS

## Compile você mesmo em vez de baixar

**O app AAPS (um arquivo apk) não está disponível para download, por causa das regras sobre dispositivos médicos. É legal compilar o app para uso próprio, mas você não deve dar uma cópia para outras pessoas!**

Veja a página [FAQ para loopers](../UsefulLinks/FAQ.md) para mais detalhes.

---

Há três métodos para compilar o app AAPS:

### Compilar com um navegador (recomendado)

Você pode compilar o app no seu smartphone com o GitHub Actions. Em um telefone Android, a página de configuração do [AAPS Builder](#aaps-builder) guia você passo a passo, e você mesmo inicia cada compilação. Em um computador ou em um iPhone, você também pode compilar com um fork e salvar o app no seu Google Drive.

**[Siga estas instruções.](./BrowserBuild.md)**

----

### Compilar com o Android Studio

Você pode compilar o app no seu computador com o Android Studio. Antes, esta era a única opção de compilação; hoje o Android Studio é usado principalmente por desenvolvedores que pensam em fazer mudanças no código.

**[Siga estas instruções.](./ComputerBuild.md)**

----

### Compilar pela linha de comando

Esta opção é para quem prefere compilar o AAPS localmente pela linha de comando, sem instalar o Android Studio.

**[Siga estas instruções.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## Se a compilação falhar

Cada método de compilação tem a sua própria seção de resolução de problemas:

* **AAPS Builder**: [Resolução de problemas do AAPS Builder](#aaps-builder-troubleshooting)
* **Compilação no navegador** em um computador ou em um iPhone: [Compilação no navegador: resolução de problemas](#aaps-ci-troubleshooting)
* **Android Studio**: [Resolução de problemas do Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Perdeu a sua keystore ou a senha dela? Veja [Reinstalar o AAPS com uma nova keystore](#reinstall-aaps).

Se o app foi compilado, mas não é instalado no seu telefone, veja [Transferir e instalar o AAPS](TransferringAndInstallingAaps.md).

Se o seu problema não estiver na lista, veja [Onde posso obter ajuda?](../GettingHelp/WhereCanIGetHelp.md)
