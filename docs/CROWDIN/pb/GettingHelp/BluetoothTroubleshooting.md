(bluetoothtroubleshooting-bluetooth-related-issues)=

# Problemas relacionados ao Bluetooth

Alguns usuários têm tido problemas com falhas na ativação do Omnipod DASH, problemas de conexão com o Medtrum Nano e outros erros de pod relacionados ao Bluetooth. Muitos desses problemas podem ser causados por um dos problemas a seguir.

Alguns desses problemas provavelmente também se aplicam a outras bombas de insulina Bluetooth; o Medtrum Nano, assim como o Omnipod DASH, tem problemas conhecidos com a permissão de dispositivos por perto.

---

(bluetoothtroubleshooting-cannot-start-omnipod-with-android-16)=

## Não é possível iniciar o Omnipod com o Android 16
- O Android 16 precisa no mínimo da versão 3.3.2.1 do **AAPS** para que o Omnipod DASH funcione corretamente, pois essa versão tem correções feitas especificamente para os problemas conhecidos que o Android 16 trouxe para o Omnipod.

---

(bluetoothtroubleshooting-bluetooth-battery-optimisation)=

## Otimização da bateria do Bluetooth

As versões mais novas do Android ativaram a otimização da bateria para o app de sistema Bluetooth. Isso causa alguns problemas conhecidos com bombas e CGMs Bluetooth.

Se você seguiu o [Assistente de configuração do AAPS](../SettingUpAaps/SetupWizard.md) e as configurações da seção [Otimização da bateria do Bluetooth](#setup-wizard-bluetooth-battery-optimisation), esta configuração deve estar correta; mas, se você seguiu uma versão mais antiga deste guia, é possível que não tenha mudado esta configuração.

Verifique se isso está configurado corretamente caso a bomba e o CGM se desconectem.

---

(bluetoothtroubleshooting-apps-using-nearby-device-permission)=

## Apps que usam a permissão "Nearby devices" (Dispositivos por perto) do Android podem causar quedas de conexão e problemas na ativação do Pod

O Android permite controlar o que cada app pode fazer ou acessar no seu telefone por meio de um modelo de permissões. Para cada app instalado, você pode permitir ou negar permissões específicas, por exemplo acessar arquivos no dispositivo, acessar o Bluetooth, procurar dispositivos por perto etc.

O **AAPS** precisa de várias permissões específicas para funcionar; uma delas, necessária para que os Pods funcionem, é a permissão "Nearby devices" (Dispositivos por perto). Há muitos outros aplicativos que também exigem essa permissão. A comunidade tem percebido que vários aplicativos, quando recebem essa permissão, podem causar problemas na ativação de novos Pods em alguns dispositivos.

(bluetoothtroubleshooting-apps-using-nearby-device-permission-known-apps)=

### Apps que usam a permissão "Nearby device" (Dispositivos por perto) e que já causaram problemas conhecidos:

Os apps desta lista foram citados em um ou mais lugares da comunidade como causadores de problemas com o Omnipod DASH e, em alguns casos, também com o Medtrum Nano.

```{admonition} Updating the list
:class: note
Fale com @XiTatiON no canal #omnipod-dash do Discord para discutir apps a serem adicionados a esta lista.
```

- **myBMW** O MyBMW interrompeu o Medtrum Nano e o Omnipod DASH. O app MyBMW pede a permissão "find nearby devices" (encontrar dispositivos por perto) apenas uma vez; se você não a conceder, ele continua funcionando perfeitamente

- **Amazon Alexa**  Remover a permissão "Nearby devices" do app Alexa resolveu o problema para algumas pessoas, mas impede o pareamento de dispositivos IoT Matter

- **MINI app**  Parece que o app é baseado no app myBMW e, por isso, pode ter o mesmo comportamento

- **BM2** App de monitoramento de bateria solar, usado em alguns motorhomes e instalações solares de camping: quando o app estava em execução, ele impediu a ativação de um novo Pod. Forçar a parada do app durante a ativação de um novo pod contorna o problema. Executar o app depois disso não pareceu atrapalhar o funcionamento do Dash (em um Pixel 8 Pro com A16).

(bluetoothtroubleshooting-revoke-nearby-device-permission)=

### Como remover a permissão "Nearby device" de outros apps:
Se você tem problemas para ativar um novo Pod e está usando a versão do **AAPS** correta e suportada para a sua versão do Android, pode ser necessário remover a permissão de outros apps durante a ativação de um novo Pod.

Siga este procedimento para remover a permissão "Nearby device" (Dispositivos por perto) de todos os apps, exceto do **AAPS**:

```{admonition} Menus and settings
:class: note
As capturas de tela e as instruções deste guia são de uma instalação Android 16 padrão (vanilla) em um Google Pixel 8 Pro. Outros fabricantes e dispositivos provavelmente não terão exatamente os mesmos menus e descrições de configurações; adapte os passos ao seu dispositivo e, se não conseguir continuar, veja a seção [Onde obter ajuda para o Dash](#omnipod-dash-where-to-get-help-for-dash) para saber como pedir ajuda à comunidade.
```

1. Abra as configurações do Android no seu telefone, role para baixo e toque em **Security and privacy (1)** (Segurança e privacidade).

    ![android_settings_sec_priv](../images/android_16/android_settings_sec_priv.png)

2. Role para baixo e toque em **Privacy controls (1)** (Controles de privacidade).

   ![android_sec_priv](../images/android_16/android_sec_priv.png)

3. Toque em **Permission manager (1)** (Gerenciador de permissões).

   ![android_priv_control](../images/android_16/android_priv_control.png)

3. Role para baixo e toque em **Nearby devices (1)** (Dispositivos por perto).

   ![android_perm_man_nearby_dev](../images/android_16/android_perm_man_nearby_dev.png)

4. Percorra a lista de apps e toque no app do qual você quer remover a permissão **Nearby devices** (Dispositivos por perto).

   Neste guia, **Android Auto (1)** é o app do qual vamos remover a permissão.

   Para não perder mais pods, recomendamos a todos que, no início, removam a permissão de todos os apps, exceto do **AAPS**.

```{admonition} Which app to select?
:class: tip
Se você não sabe qual app está causando o problema, desative todos (lembre-se de verificar também a lista de apps com problemas conhecidos e comece por eles). Se puder perder alguns pods no caminho, ative a permissão em um novo app antes de cada nova ativação de Pod, até descobrir qual app causa especificamente os problemas com o seu Pod. Se você identificar novos apps problemáticos, avise-nos no canal #omnipod-dash do Discord.
```

   ![android_nearby_dev](../images/android_16/android_nearby_dev.png)

5. Para remover a permissão, toque em **Don't allow (1)** (Não permitir) e depois em **Don't allow anyway (2)** (Não permitir mesmo assim). Se tudo foi feito corretamente, você verá **Don't allow (3)** (Não permitir) como a opção selecionada. Agora você pode voltar ao menu **Nearby device** (Dispositivos por perto) tocando na **seta Voltar (4)** e mudar esta configuração em outros apps, se necessário.

   ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dev.png) ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow_anyway.png)  ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow.png)

(bluetoothtroubleshooting-re-enable-nearby-device-permission)=

### Como reativar a permissão "Nearby device" para apps do sistema e outros apps:

1. Se necessário, consulte a seção **"Como remover a permissão "Nearby device" de outros apps"** para saber como chegar às configurações de privacidade dos apps; depois, já na configuração **Nearby device** (Dispositivos por perto), siga para o passo 2.

2. Percorra a lista de apps e toque no app ao qual você quer conceder a permissão **Nearby devices** (Dispositivos por perto).

   Neste guia, **Android Auto (1)** é o app ao qual vamos conceder a permissão.

   Você vai notar que o **Android Auto (1)** não aparece na lista de apps depois que a permissão é removida. Isso acontece porque o app **Android Auto** é um **app do sistema**, e os apps do sistema ficam ocultos por padrão.

   ![android_auto_nearby_dev_missing](../images/android_16/android_auto_nearby_dev_missing.png)

3. Para mostrar os apps do sistema ocultos, toque no **menu de três pontos (⋮) (1)** no canto superior direito e depois em **"Show system" (2)** (Mostrar sistema). Agora você deve ver o app do sistema oculto na lista: **Android Auto (3)**.

```{admonition} Find your app
:class: tip
Se a permissão de um app foi removida, você precisará rolar para baixo até ver a lista de apps sem permissão, mais abaixo na lista.
```

   ![android_auto_nearby_dev_missing_hamburger](../images/android_16/android_auto_nearby_dev_missing_hamburger.png) ![android_auto_nearby_show_system](../images/android_16/android_auto_nearby_show_system.png) ![android_nearby_dev_system](../images/android_16/android_nearby_dev_system.png)

5. Siga as orientações de **"Como remover a permissão "Nearby device" de outros apps"** na ordem inversa para reativar as permissões de cada app.

---

(bluetoothtroubleshooting-android-15-bluetooth-connection-problems)=

## Android 15: problemas frequentes de conexão Bluetooth

Depois de atualizar o Android ou mudar para um telefone recente, o **AAPS** perde com frequência a conexão Bluetooth com a bomba. O problema desaparece temporariamente ao reiniciar o telefone. Se você usa um **Omnipod DASH** e o seu telefone tem Android 15, ativar a configuração **Vínculo Bluetooth** pode ajudar a deixar a conexão Bluetooth mais estável. Para ativar:

```{admonition} Android 16
:class: warning
Ative o **Vínculo Bluetooth** apenas no Android 15, e apenas se você tiver problemas de conexão. NÃO ative o vínculo no Android 16.
```

1. Abra as [configurações do Dash](#omnipod-dash-settings): abra a tela da bomba DASH com **Gerenciar** > **Bomba** e toque no ícone de **Configurações** (engrenagem) no canto superior direito.

   ![A tela da bomba DASH](../images/v4/Pumps/dash_pump_screen.png)

2. Abra a seção **Configurações Avançadas** e ative **Vínculo Bluetooth**.

   ![Vínculo Bluetooth na seção Configurações Avançadas](../images/v4/Pumps/dash_settings_advanced.png)

3. Se o telefone mostrar um pedido de pareamento, aceite.

4. Reinicie o seu telefone.
