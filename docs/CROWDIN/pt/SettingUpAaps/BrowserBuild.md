(browser-build)=

# Compilação no navegador

Compilar o AAPS com o GitHub Actions.

**A versão mínima do AAPS suportada é a 3.3.2.1.**

## Compilar em vez de transferir

**A app AAPS (um ficheiro apk) não está disponível para transferência, por causa das regras sobre dispositivos médicos. É legal compilar a app para uso próprio, mas não pode dar uma cópia a outras pessoas!**

Veja a [página FAQ](../UsefulLinks/FAQ.md) para mais detalhes.

(Building-APK-without-a-computer)=

## Escolher como compilar

Escolha o método que corresponde ao dispositivo a partir do qual compila:

### Num telefone Android: AAPS Builder (recomendado)

Uma página de configuração guia-o na criação do seu próprio repositório privado de compilação no GitHub. Não há nada para instalar, nem ficheiro de preparação, e é o próprio utilizador que inicia cada compilação. Transfere a app diretamente do GitHub. O Google Drive é opcional.

Isto também funciona a partir do navegador de um computador.

**→ [Compilar com o AAPS Builder](BrowserBuildAapsBuilder.md)**

### Num computador ou num iPhone / iPad: fork e ficheiro de preparação

Faz uma cópia (fork) do código-fonte do AAPS no GitHub, cria a sua keystore com um ficheiro de preparação, e a app compilada é guardada no seu Google Drive. Siga os quatro passos abaixo.

```{note}
**Já compila com um fork?** Continue a atualizá-lo como descrito em [Atualizar com um navegador (fork)](../Maintenance/UpdateBrowserBuild.md), ou mude para o AAPS Builder. Para mudar, obtenha primeiro uma cópia da sua keystore a partir do seu fork: veja [Vindo da compilação no navegador anterior](#aaps-builder-from-fork).
```

Vai ter de usar vários separadores no seu navegador e passar de um para o outro. Exemplo no Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
Vai ter de passar de um separador para outro: comece com todos os separadores fechados, para não se perder ao mudar de um para outro.
```

#### O que vai precisar

- Uma **conta Google**, para que a app compilada possa ser guardada no seu Google Drive.
- Uma **conta GitHub** (gratuita) – cria-a no Passo 1.
- Um **navegador web** que consiga manter vários separadores abertos ao mesmo tempo (abaixo assume-se o Chrome).
- Um pequeno **auxiliar para executar o ficheiro de preparação**. O auxiliar de que precisa depende do dispositivo a partir do qual compila – agora não há nada para instalar, o Passo 2 guia-o para o seu dispositivo:
  - **Computador (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** nenhuma app extra – usa a app Ficheiros e o navegador incluídos no dispositivo.

#### Os passos

A compilação no navegador é uma série de escolhas. Siga estes passos por ordem:

1. **[Criar o seu fork no GitHub](BrowserBuildFork.md)** – faça a sua cópia pessoal do código-fonte do AAPS.
2. **[Criar a sua keystore de assinatura](BrowserBuildKeystore.md)** – a decisão principal: gerar uma nova keystore (Opção 1) ou enviar a sua keystore existente (Opção 2); depois siga a página para o seu dispositivo.
3. **[Autorizar o Google Drive](BrowserBuildGoogleDrive.md)** – permita que o GitHub guarde a app compilada no seu Google Drive.
4. **[Compilar o APK](BrowserBuildAPK.md)** – execute o workflow do GitHub Actions e escolha a sua versão e variante.

Se tiver problemas, veja **[Compilação no navegador: resolução de problemas](../GettingHelp/BrowserBuildTroubleshooting.md)**. Para operações opcionais com um fork, veja [exportar a sua keystore](#ci-keystore-export) ou [aplicar (cherry-pick) um commit](#github-cherry-pick).

----

**Comece pelo [Passo 1 – Criar o seu fork no GitHub](BrowserBuildFork.md) →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
Passo 1: Criar o seu fork <BrowserBuildFork.md>
Passo 2: Criar a sua keystore <BrowserBuildKeystore.md>
Passo 3: Autorizar o Google Drive <BrowserBuildGoogleDrive.md>
Passo 4: Compilar o APK <BrowserBuildAPK.md>
```
