(browser-build)=

# Compilação no navegador

Compilar o AAPS com o GitHub Actions.

**A versão mínima do AAPS suportada é a 3.3.2.1.**

## Compile você mesmo em vez de baixar

**O app AAPS (um arquivo apk) não está disponível para download, por causa das regras sobre dispositivos médicos. É legal compilar o app para uso próprio, mas você não deve dar uma cópia para outras pessoas!**

Veja a página [FAQ para loopers](../UsefulLinks/FAQ.md) para mais detalhes.

(Building-APK-without-a-computer)=

## Escolha como compilar

Escolha o método que corresponde ao dispositivo em que você compila:

### Em um telefone Android: AAPS Builder (recomendado)

Uma página de configuração guia você na criação do seu próprio repositório de compilação privado no GitHub. Nada para instalar, nenhum arquivo de preparação, e você mesmo inicia cada compilação. Você baixa o app diretamente do GitHub. O Google Drive é opcional.

Isso também funciona no navegador de um computador.

**→ [Compilar com o AAPS Builder](BrowserBuildAapsBuilder.md)**

### Em um computador ou em um iPhone / iPad: fork e arquivo de preparação

Você faz uma cópia (fork) do código-fonte do AAPS no GitHub, cria a sua keystore com um arquivo de preparação, e o app compilado é salvo no seu Google Drive. Siga as quatro etapas abaixo.

```{note}
**Você já compila com um fork?** Continue atualizando-o como descrito em [Atualizar pelo navegador (fork)](../Maintenance/UpdateBrowserBuild.md), ou mude para o AAPS Builder. Para mudar, primeiro pegue uma cópia da sua keystore do seu fork: veja [Vindo da compilação no navegador anterior](#aaps-builder-from-fork).
```

Você vai precisar usar várias abas no seu navegador e trocar de uma para outra. Exemplo no Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
Você vai precisar pular de uma aba para outra: comece com todas as abas fechadas para não se perder quando trocar de uma para outra.
```

#### Do que você vai precisar

- Uma **conta Google**, para que o app compilado possa ser salvo no seu Google Drive.
- Uma **conta GitHub** (grátis) – você a cria na Etapa 1.
- Um **navegador web** que consiga manter várias abas abertas ao mesmo tempo (abaixo usamos o Chrome).
- Um pequeno **ajudante para executar o arquivo de preparação**. Qual você precisa depende do dispositivo em que você compila – não há nada para instalar agora, a Etapa 2 guia você para o seu dispositivo:
  - **Computador (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** nenhum app extra – você usa o app Arquivos e o navegador que já vêm no aparelho.

#### As etapas

A compilação no navegador é uma série de escolhas. Siga estas etapas na ordem:

1. **[Crie o seu fork no GitHub](BrowserBuildFork.md)** – faça a sua cópia pessoal do código-fonte do AAPS.
2. **[Crie a sua keystore de assinatura](BrowserBuildKeystore.md)** – a decisão principal: gerar uma nova keystore (Opção 1) ou enviar a que você já tem (Opção 2), depois seguir a página do seu dispositivo.
3. **[Autorize o Google Drive](BrowserBuildGoogleDrive.md)** – permita que o GitHub salve o app compilado no seu Google Drive.
4. **[Compile o APK](BrowserBuildAPK.md)** – execute o workflow do GitHub Actions e escolha a sua versão e variante.

Se tiver problemas, veja **[Compilação no navegador: resolução de problemas](../GettingHelp/BrowserBuildTroubleshooting.md)**. Para operações opcionais com um fork, veja [exportar a sua keystore](#ci-keystore-export) ou [fazer cherry-pick de um commit](#github-cherry-pick).

----

**Comece pela [Etapa 1 – Crie o seu fork no GitHub](BrowserBuildFork.md) →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
Etapa 1: Crie o seu fork <BrowserBuildFork.md>
Etapa 2: Crie a sua keystore <BrowserBuildKeystore.md>
Etapa 3: Autorize o Google Drive <BrowserBuildGoogleDrive.md>
Etapa 4: Compile o APK <BrowserBuildAPK.md>
```
