# Como configurar um telefone Huawei

**Telefones a que esta página se aplica:** telefones Huawei com **EMUI 12 a EMUI 15**. Todas estas versões são baseadas no Android 12, o mínimo para a versão atual do **AAPS**. Num telefone com uma versão mais antiga do EMUI, só pode usar uma [versão mais antiga do AAPS](#maintenance-android-version-aaps-version).

```{admonition} Telefones com HarmonyOS NEXT / HarmonyOS 5 :class: warning

Os telefones Huawei recentes vendidos na China usam o HarmonyOS NEXT (HarmonyOS 5 e superior). Este sistema já não é Android e não consegue executar o **AAPS**. ```

Os telefones Huawei fecham de forma muito agressiva as apps que estão a funcionar em segundo plano. Aplique todas as definições abaixo ao **AAPS** e à sua app do CGM (por exemplo xDrip+ ou Juggluco). Caso contrário, o loop e as leituras de glicose podem parar quando o ecrã está desligado.

Os nomes dos menus podem ser um pouco diferentes entre modelos. Se não encontrar uma definição, escreva o nome dela na barra de pesquisa no topo das **Definições**.

As capturas de ecrã abaixo são de uma versão mais antiga do EMUI. As definições são as mesmas no EMUI 12 a 15.

## Ignorar a otimização da bateria

1. Abra **Definições > Aplicações > Aplicações**.
2. Toque no menu **⋮** no canto superior direito e selecione **Acesso especial > Otimização da bateria**.
3. Toque na seta no topo da lista e selecione **Todas as aplicações**.
4. Selecione **AAPS** e escolha **Não permitir**. A Huawei deixa de otimizar as apps desta lista.
5. Repita para a sua app do CGM.

![Huawei – ignorar a otimização da bateria](../images/Huawei_BatteryOptimization.png)

## Arranque de aplicações: permitir a execução em segundo plano

1. Abra **Definições > Bateria > Arranque de aplicações** (ou **Definições > Aplicações > Aplicações >** selecione a app **> Bateria > Arranque de aplicações**).
2. Encontre o **AAPS** e desligue **Gerir automaticamente**.
3. Na janela **Gerir manualmente**, ligue as três opções: 
    - **Arranque automático**
    - **Arranque secundário** (pode ser iniciada por outras apps)
    - **Executar em segundo plano**
4. Repita para a sua app do CGM.

![Huawei – opções da bateria](../images/Huawei_BatteryOptions.png)

## Bloquear o AAPS nas apps recentes

As apps bloqueadas não são fechadas quando limpa a lista de apps recentes.

1. Abra a lista de apps recentes.
2. Deslize para baixo no cartão do **AAPS**. Aparece um símbolo de cadeado no cartão.
3. Faça o mesmo para a sua app do CGM.

![Huawei – bloquear a app](../images/Huawei_LockApp.png)

## Modo de poupança de energia

Mantenha o **Modo de poupança de energia** e a **Ultra poupança de energia** desligados (**Definições > Bateria**). Estes modos fecham as apps em segundo plano, independentemente das definições acima.

## Se o AAPS continuar a parar em segundo plano

Veja [Don't kill my app](https://dontkillmyapp.com/huawei) para mais soluções específicas da Huawei.

## Telefones Honor

A Honor é agora uma marca separada e os seus telefones usam o MagicOS em vez do EMUI. As definições de segundo plano são muito parecidas: procure **Arranque de aplicações** nas definições da bateria da app, desligue **Gerir automaticamente** e permita as três opções. Depois retire a app da otimização da bateria.