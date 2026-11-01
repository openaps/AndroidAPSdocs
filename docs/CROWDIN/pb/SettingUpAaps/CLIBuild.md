# Instruções de compilação pela linha de comando

```{admonition} For users familiar with the command-line and git
:class: note

A opção mais simples para compilar o AAPS é a alternativa [Compilação no navegador](./BrowserBuild.md).
```

Testado com Fedora e Debian Linux; outros sistemas devem funcionar com poucos ajustes.

## Requisitos

Veja a versão mínima necessária do Java [nesta tabela](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Instale o pacote OpenJDK adequado com o gerenciador de pacotes do sistema. Por exemplo, no Debian os pacotes têm nomes como `openjdk-21-jdk`. Ele deve incluir os binários `javac` e `keytool`.

Baixe o pacote *Android Command line tools* da [página do Android Studio](https://developer.android.com/studio#command-line-tools-only). O próprio Android Studio não é necessário. Mais informações sobre a instalação deste pacote estão na [documentação do sdkmanager](https://developer.android.com/tools/sdkmanager). Depois de instalar o pacote, você deve definir manualmente duas [variáveis de ambiente](https://developer.android.com/tools/variables): `ANDROID_HOME` e `PATH`. Por fim, execute `sdkmanager --licenses` para terminar a instalação.

## Compilar o AAPS com o Gradle wrapper

### 1. Gerar um arquivo de keystore Java para assinar o AAPS

Se você já tem um arquivo de keystore para assinar o AAPS, reutilize esse arquivo.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Você vai precisar do arquivo de keystore e da senha sempre que atualizar o AAPS.

### 2. Compilar o arquivo APK do AAPS

Clone o [repositório git](https://github.com/nightscout/AndroidAPS), se ainda não tiver feito isso. O AAPS usa a branch master para a versão estável mais recente; verifique se você está na branch/tag que deseja compilar.

Execute `./gradlew :app:assembleFullRelease` no repositório. Ele baixa automaticamente o Gradle e as dependências e depois compila o código. Quando a compilação terminar com sucesso, você terá um APK não assinado em `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Ele também deve ter instalado um binário `apksigner` em `$ANDROID_HOME`. Atualize o seu `PATH` de novo.

### 3. Criar um arquivo APK assinado a partir do não assinado

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Vá para o seu diretório pessoal (home) e crie um arquivo APK assinado:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Agora você tem o `app-full-release-signed.apk` pronto para instalar ou atualizar.
