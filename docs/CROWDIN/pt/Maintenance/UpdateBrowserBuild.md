# Atualizar com um navegador (fork)

```{tip}
Compilou o AAPS com o **AAPS Builder**? Não precisa desta página: veja [Atualizar o AAPS com o AAPS Builder](#aaps-builder-updates).
```

## Compilar em vez de transferir

O **AAPS** não está disponível para transferência, devido às regras sobre dispositivos médicos. É legal compilar a app para uso próprio, mas não pode dar uma cópia a outras pessoas! Veja a [página FAQ](../UsefulLinks/FAQ.md) para mais detalhes.

```{note}
Se quiser atualizar o **AAPS** com um navegador pela primeira vez: copie o ficheiro de cópia de segurança da sua keystore para o seu Google Drive. Depois siga o [procedimento de compilação do **AAPS** no navegador](../SettingUpAaps/BrowserBuild.md) em vez deste guia. Em vez de criar uma nova keystore, tem de selecionar a que copiou do seu computador.
Este passo só é obrigatório na primeira vez. Nas atualizações seguintes pode seguir este guia.
```

```{tip}
**Vai mudar para o AAPS Builder?** O [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) é a compilação no navegador mais simples: não há fork para sincronizar, e transfere a app diretamente do GitHub. Não é obrigado a mudar: este guia continua a funcionar. Se mudar, obtenha primeiro uma cópia da sua keystore a partir do seu fork, como explicado em [Vindo da compilação no navegador anterior](#aaps-builder-from-fork). Caso contrário, a nova compilação não consegue atualizar o AAPS no seu telefone.
```

## Visão geral da atualização para uma nova versão do AAPS com um navegador

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Se tiver problemas, veja a página separada [Compilação no navegador: resolução de problemas](../GettingHelp/BrowserBuildTroubleshooting.md).

### Exporte as suas definições

Exporte as suas definições a partir da versão do **AAPS** que já tem no telefone. Pode não precisar delas, mas é melhor prevenir do que remediar.

Veja a página [Exportar e importar definições](ExportImportSettings.md) se não se lembrar de como se faz.

(Update-to-new-version-update-your-repo)=
### Atualize o seu repositório GitHub

[Inicie sessão no GitHub](https://github.com/login).

1. Selecione Repositories.
2. Desça e selecione o seu próprio repositório AndroidAPS.

![Selecionar o repositório AndroidAPS](../images/update/CI/GitHubUpdate1.png)

3. Verifique se está a usar a sua própria cópia do AndroidAPS (Forked from nightscout/AndroidAPS)
4. Toque em Sync Fork para o atualizar (o número de commits em atraso pode ser diferente da imagem)



![Sincronizar o repositório AndroidAPS](../images/update/CI/GitHubUpdate2.png)

5. Toque em Update Branch

![Atualizar o repositório AndroidAPS](../images/update/CI/GitHubUpdate3.png)

Nota: se alterou a sua cópia do AndroidAPS por engano, vai ver este ecrã. Descarte todas as alterações (commits) para voltar à versão publicada.

![Descartar alterações indesejadas](../images/update/CI/GitHubUpdate4.png)

Sincronizou (atualizou) agora a sua própria cópia com a versão mais recente do Android APS. Bom trabalho.

![Repositório sincronizado](../images/update/CI/GitHubUpdate5.png)

### Execute o workflow para compilar o APK assinado

1. Na sua cópia do AndroidAPS no GitHub, selecione Actions.
2. Expanda All Workflows.
3. Selecione AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Desça e toque em Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Keep the branch set to master. In **Select AAPS Version**, check that **4.0.0**, the newest version at the top of the list, is selected. If your fork is not up to date, the preselected version is an older one: if you run the workflow with the form as it opens, you rebuild that older version and your app is not updated. Choose the [variant](#browserbuild-variant) (fullRelease), and then tap Run workflow.

   ```{note}
   The list of versions is part of the workflow in your fork. If **4.0.0** is missing, your fork is not synchronized yet: go back to [Update your GitHub repository](#Update-to-new-version-update-your-repo).
   ```



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Vai ver a mensagem Workflow run was successfully requested. Atualize a página do navegador e vai poder acompanhar o progresso da compilação. Quando a ação terminar, a ação AAPS CI mostra um visto verde. Compilou com sucesso a versão atualizada do Android APS. Isto significa que o apk principal e o apk Wear são agora guardados diretamente no seu Google Drive (como mostrado abaixo). O apk do AAPSClient pode ser transferido em Github > nightscout > AndroidAPS [aqui](https://github.com/nightscout/AndroidAPS/releases)


![Acompanhar o workflow](../images/update/CI/GitHubActions4.png)


### Instale o APK do AAPS

1. Abra o seu Google Drive
2. Abra a pasta AAPS, selecione a pasta da nova versão e vai encontrar a versão para o telefone e a versão Android Wear.

![Localização no Google Drive](../images/update/CI/GitHubActions5.png)

```{note}
A partir de setembro de 2026, a [verificação de programadores Android](#android-developer-verification) da Google pode bloquear a instalação do APK com um toque no ficheiro, conforme o seu país. Essa página explica soluções gratuitas.
```

Continue [aqui](#Update-to-new-version-check-aaps-version-on-phone)

(update-browser-build-troubleshooting)=

## Resolução de Problemas

Se algo correr mal, não entre em pânico.

Respire fundo!

Depois veja se o seu problema já está documentado: veja [Resolução de problemas do AAPS Builder](#aaps-builder-troubleshooting) se compila com o **AAPS Builder**, ou [Compilação no navegador: resolução de problemas](#aaps-ci-troubleshooting) nos outros casos.

Se precisar de mais ajuda, contacte outros utilizadores do **AAPS** no [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) ou no [Discord](https://discord.gg/4fQUWHZ4Mw).
