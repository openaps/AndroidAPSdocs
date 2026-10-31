# Instruções de compilação na linha de comandos

```{admonition} For users familiar with the command-line and git
:class: note

A opção mais simples para compilar o AAPS é a alternativa [Compilação no navegador](./BrowserBuild.md).
```

Testado com Fedora e Debian Linux; outros sistemas devem funcionar com poucos ajustes.

## Requisitos

Veja a versão mínima de Java necessária [nesta tabela](#Building-APK-recommended-specification-of-computer-for-building-apk-file). Instale o pacote OpenJDK adequado com o gestor de pacotes do sistema. Por exemplo, no Debian, os pacotes têm nomes como `openjdk-21-jdk`. Deve incluir os binários `javac` e `keytool`.

Transfira o pacote *Android Command line tools* da [página do Android Studio](https://developer.android.com/studio#command-line-tools-only). O Android Studio em si não é necessário. Encontra mais informações sobre a instalação deste pacote na [documentação do sdkmanager](https://developer.android.com/tools/sdkmanager). Depois de instalar o pacote, tem de definir manualmente duas [variáveis de ambiente](https://developer.android.com/tools/variables): `ANDROID_HOME` e `PATH`. Por fim, execute `sdkmanager --licenses` para terminar a instalação.

## Compilar o AAPS com o Gradle wrapper

### 1. Gerar um ficheiro keystore Java para assinar o AAPS

Se já tem um ficheiro keystore para assinar o AAPS, use-o de novo.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

Vai precisar do ficheiro keystore e da frase-passe sempre que atualizar o AAPS.

### 2. Compilar o ficheiro APK do AAPS

Clone o [repositório git](https://github.com/nightscout/AndroidAPS), se ainda não o clonou. O AAPS usa o branch master para a versão estável mais recente; confirme que está no branch/tag que quer compilar.

Execute `./gradlew :app:assembleFullRelease` no repositório. Este comando transfere automaticamente o Gradle e as dependências e depois compila o código. Quando a compilação terminar com sucesso, terá um APK não assinado em `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`. Também deve ter instalado um binário `apksigner` em `$ANDROID_HOME`. Atualize de novo a sua variável `PATH`.

### 3. Criar um ficheiro APK assinado a partir do não assinado

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

Mude para a sua pasta pessoal (home) e crie um ficheiro APK assinado:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

Agora tem o `app-full-release-signed.apk` pronto para instalar ou atualizar.
