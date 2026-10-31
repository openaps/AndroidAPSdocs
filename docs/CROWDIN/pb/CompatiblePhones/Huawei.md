# Como configurar um telefone Huawei

**Telefones cobertos por esta página:** telefones Huawei com **EMUI 12 a EMUI 15**. Todas essas versões são baseadas no Android 12, o mínimo para a versão atual do **AAPS**. Em um telefone com uma versão mais antiga do EMUI, você só pode usar uma [versão mais antiga do AAPS](#maintenance-android-version-aaps-version).

```{admonition} Telefones com HarmonyOS NEXT / HarmonyOS 5 :class: warning

Os telefones Huawei recentes vendidos na China usam o HarmonyOS NEXT (HarmonyOS 5 ou superior). Esse sistema não é mais Android e não pode executar o **AAPS**. ```

Os telefones Huawei fecham de forma muito agressiva os aplicativos que rodam em segundo plano. Aplique todas as configurações abaixo ao **AAPS** e ao seu aplicativo de CGM (por exemplo xDrip+ ou Juggluco); caso contrário, o loop e as leituras de glicose podem parar quando a tela estiver desligada.

Os nomes dos menus podem ser um pouco diferentes entre os modelos. Se você não encontrar uma configuração, digite o nome dela na barra de pesquisa no topo de **Configurações**.

As capturas de tela abaixo são de uma versão mais antiga do EMUI. As configurações são as mesmas no EMUI 12 a 15.

## Ignorar a otimização de bateria

1. Abra **Configurações > Aplicativos > Aplicativos**.
2. Toque no menu **⋮** no canto superior direito e selecione **Acesso especial > Otimização de bateria**.
3. Toque na seta no topo da lista e selecione **Todos os aplicativos**.
4. Selecione **AAPS** e escolha **Não permitir**. A Huawei não vai mais otimizar os aplicativos dessa lista.
5. Repita para o seu aplicativo de CGM.

![Huawei - ignorar a otimização de bateria](../images/Huawei_BatteryOptimization.png)

## Inicialização de apps: permitir execução em segundo plano

1. Abra **Configurações > Bateria > Inicialização de apps** (ou **Configurações > Aplicativos > Aplicativos >** selecione o aplicativo **> Bateria > Inicialização de apps**).
2. Encontre o **AAPS** e desligue **Gerenciar automaticamente**.
3. Na janela **Gerenciar manualmente**, ligue as três opções: 
    - **Inicialização automática**
    - **Inicialização secundária** (pode ser iniciado por outros aplicativos)
    - **Executar em segundo plano**
4. Repita para o seu aplicativo de CGM.

![Huawei - opções de bateria](../images/Huawei_BatteryOptions.png)

## Bloquear o AAPS nos aplicativos recentes

Os aplicativos bloqueados não são fechados quando você limpa a lista de aplicativos recentes.

1. Abra a lista de aplicativos recentes.
2. Deslize para baixo no cartão do **AAPS**. Um símbolo de cadeado aparece no cartão.
3. Faça o mesmo para o seu aplicativo de CGM.

![Huawei - bloquear o aplicativo](../images/Huawei_LockApp.png)

## Modo de economia de energia

Mantenha o **Modo de economia de energia** e a **Economia de energia ultra** desligados (**Configurações > Bateria**). Eles fecham os aplicativos em segundo plano, independentemente das configurações acima.

## Se o AAPS ainda parar em segundo plano

Veja [Don't kill my app](https://dontkillmyapp.com/huawei) para mais soluções específicas para Huawei.

## Telefones Honor

A Honor agora é uma marca separada, e os telefones dela usam o MagicOS em vez do EMUI. As configurações de segundo plano são muito parecidas: procure **Inicialização de apps** nas configurações de bateria do aplicativo, desligue **Gerenciar automaticamente** e permita as três opções; depois, remova o aplicativo da otimização de bateria.