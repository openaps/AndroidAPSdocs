# Building AAPS

## Compilar em vez de transferir

**A app AAPS (um ficheiro apk) não está disponível para transferência, por causa das regras sobre dispositivos médicos. É legal compilar a app para uso próprio, mas não pode dar uma cópia a outras pessoas!**

Veja a [página FAQ](../UsefulLinks/FAQ.md) para mais detalhes.

---

Há três métodos para compilar a app AAPS:

### Compilar com um navegador (recomendado)

Pode compilar a app no seu smartphone com o GitHub Actions. Num telefone Android, a página de configuração do [AAPS Builder](#aaps-builder) guia-o passo a passo, e é o próprio utilizador que inicia cada compilação. Num computador ou num iPhone, também pode compilar com um fork e guardar a app no seu Google Drive.

**[Siga estas instruções.](./BrowserBuild.md)**

----

### Compilar com o Android Studio

Pode compilar a app no seu computador com o Android Studio. Antes, esta era a única opção de compilação; hoje, o Android Studio é usado sobretudo por programadores que pensam alterar o código.

**[Siga estas instruções.](./ComputerBuild.md)**

----

### Compilar com a linha de comandos

Esta opção é para quem prefere compilar o AAPS localmente na linha de comandos, sem instalar o Android Studio.

**[Siga estas instruções.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## Se a compilação falhar

Cada método de compilação tem a sua própria secção de resolução de problemas:

* **AAPS Builder**: [Resolução de problemas do AAPS Builder](#aaps-builder-troubleshooting)
* **Compilação no navegador** a partir de um computador ou de um iPhone: [Compilação no navegador: resolução de problemas](#aaps-ci-troubleshooting)
* **Android Studio**: [Resolução de problemas do Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

Perdeu a sua keystore ou a senha dela? Consulte [Reinstalar o AAPS com uma nova keystore](#reinstall-aaps).

Se a app foi compilada mas não se instala no seu telefone, veja [Transferir e instalar o AAPS](TransferringAndInstallingAaps.md).

Se o seu problema não estiver na lista, veja [Onde posso obter ajuda?](../GettingHelp/WhereCanIGetHelp.md).
