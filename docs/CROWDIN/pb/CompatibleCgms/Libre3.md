# **Freestyle Libre 3** e 3+

O Freestyle Libre 3 (FSL3) precisa de uma configuração especial para enviar valores de glicose (BG) ao AAPS. Há duas formas possíveis de enviar os valores do Freestyle Libre 3 (FSL3) ao AAPS.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

Os métodos abaixo usam o app separado Juggluco. Ele usa o Juggluco para receber do sensor dados brutos em intervalos de 1 minuto, que depois são enviados ao xDrip ou ao AAPS. Novos sensores podem ser iniciados com o app Libre 3 ou diretamente no Juggluco. O guia abaixo mostra como iniciar um sensor com o app Juggluco. Se o sensor foi iniciado com uma conta Libreview conectada, também é possível alternar entre o Juggluco e o app Libre 3 como receptor.

O Juggluco também pode enviar dados ao LibreView para compartilhar com profissionais de saúde, quando o sensor foi iniciado com o app Libre 3.

No xDrip, o sensor pode ser calibrado na faixa de -40 mg/dl a +20 mg/dl (-2,2 mmol/l a +1,1 mmol/l) para compensar diferenças entre uma medição manual no glicosímetro e as leituras do sensor.

## Método 1: usar leituras de 1 minuto diretamente
O **AAPS** foi feito para leituras de 5 minutos. Por isso, o uso de valores de 1 minuto tem algumas limitações às vezes.

Veja [aqui](#juggluco-to-aaps).


## Método 2: converter leituras de 1 minuto em valores de 5 minutos com o xDrip
Este método usa o Juggluco para receber do sensor dados brutos em intervalos de 1 minuto, que depois são enviados ao xDrip. O xDrip os suaviza em dados de intervalos de 5 minutos e os envia ao AAPS.

### Passo 1: Configurar o Juggluco
Baixe e instale o app Juggluco [aqui](https://www.juggluco.nl/Juggluco/download.html). Siga as instruções [aqui](https://www.juggluco.nl/Juggluco/libre3/)

Certifique-se de enviar os valores de glicose ao xDrip: nas configurações do Juggluco, você pode configurá-lo para enviar o valor de glicose a outros apps. Juggluco can send three types of such broadcasts: The **Patched Libre broadcast** was originally used by the patched Librelink app and can be used to send glucose values to xDrip.

### Passo 2: Configurar o xDrip

Os valores de glicose são recebidos pelo app xDrip no celular.

- Se ainda não estiver configurado, baixe o [xDrip](https://github.com/NightscoutFoundation/xDrip) e siga as instruções na página [Configurações do xDrip](../CompatibleCgms/xDrip.md).
- No xDrip, selecione "Libre2 (patched app)" como fonte de dados.
- Se necessário, digite "BgReading:d,xdrip libre_receiver:v" em Less Common Settings → Extra Logging Settings → Extra tags for logging. Isso vai registrar mensagens de erro adicionais para a resolução de problemas.

![Registro do LibreLink no xDrip](../images/Libre2_Tags.png)

- Tecnicamente, o valor atual de glicose é enviado ao xDrip a cada minuto. Por padrão, um filtro de média ponderada calcula um valor suavizado dos últimos 25 minutos. Você pode mudar o período no menu NFC Scan features.

  → Menu hambúrguer → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

  ![xDrip advanced settings Libre 2 & raw values](../images/xDrip_Libre3_Smooth.png)



### Passo 3: Iniciar o sensor no xDrip

No xDrip, inicie o sensor com "Start Sensor" e "not today". Não é necessário segurar o celular sobre o sensor. Na verdade, "Start Sensor" não inicia fisicamente nenhum sensor Libre 3 e não interage com eles de forma alguma. Isso serve apenas para informar ao xDrip que um novo sensor está enviando valores de glicose. Se possível, digite dois valores medidos no sangue para a calibração inicial. Agora os valores de glicose devem aparecer no xDrip a cada 5 minutos. Valores perdidos, por exemplo porque você estava longe demais do seu celular, não serão preenchidos depois.

Se ainda não houver dados, espere pelo menos 15–20 minutos.

Depois de uma troca de sensor, o xDrip vai detectar o novo sensor automaticamente e vai apagar todos os dados de calibração. Você pode verificar a sua glicose depois da ativação e fazer uma nova calibração inicial.

### Passo 4: Configurar o AAPS

- Veja [aqui](#juggluco-to-xdrip) e depois volte.

- Se o **AAPS** não receber valores de glicose quando o celular estiver em modo avião, use "Identify receiver"
- Desligue a Suavização (já é feita no xDrip)

## Trocas de sensor seguintes

1. Abra o Juggluco e anote o número de série do sensor atual

![Número de série do Libre](../images/libre3/step_13.jpg)

2. Agora simplesmente escaneie o seu novo sensor com o leitor NFC do seu celular. O Juggluco vai mostrar um aviso se o processo foi iniciado com sucesso.
3. Quando estiver pronto para desativar o sensor antigo, abra o menu do Juggluco tocando em qualquer lugar no espaço vazio no canto superior esquerdo da tela.
4. Selecione o sensor vencido e toque em "Terminate"

![Encerrar o sensor](../images/libre3/step_14.jpg)

Observação: quando dois sensores estão ativos, o Juggluco envia ao xDrip o valor mais recente de qualquer um dos sensores. If the sensors are not calibrated to read BG similarly, this may result in jumpy BG values being reported to xDrip. Se você encerrar o sensor errado, pode reativá-lo simplesmente escaneando o sensor.

## Alternar o sensor entre o app Libre 3 e o Juggluco

Se o sensor foi iniciado com uma conta Libreview conectada, também é possível alternar entre o Juggluco e o app Libre 3 como receptor. Para isso, siga estes passos:

1. Instale o app Libre 3 da Google Play Store
2. Configure o app Libre 3 com a conta Libreview com a qual o sensor foi ativado.
3. Force a parada do app Juggluco nas configurações do Android.
4. No menu do Libre 3, toque em "Start Sensor", selecione "Yes", "Next" e escaneie o seu sensor.
5. Depois de alguns minutos, os valores de glicose (BG) devem aparecer no app Libre 3.

Para mudar do app Libre 3 para o Juggluco, você precisa forçar a parada do app Libre 3 nas configurações do Android e seguir os passos 1 e 2.

(libre3-experiences-and-troubleshooting)=
## Experiências e resolução de problemas

### Resolução de problemas da conexão Libre3 -> Juggluco

- Verifique se você está usando uma versão atual do app Juggluco
- Verifique as suas configurações de acordo com este guia
- Às vezes pode ser necessário forçar a parada do app Libre 3 e do Juggluco e reiniciá-los.
- Desative o Bluetooth e ative-o novamente
- Espere um pouco ou tente fechar o Juggluco
- Versões antigas do Juggluco (abaixo de 2.9.6) não enviam os dados seguintes do sensor Libre3 para dispositivos conectados (por exemplo, Juggluco no WearOS). Pode ser necessário tocar em "Resend data" no app Libre3 modificado (menu do Juggluco).

### Mais ajuda

Instruções originais: [site de jkaltes](https://www.juggluco.nl/Juggluco/libre3/)

Additional GitHub repo: [GitHub link](https://github.com/maheini/FreeStyle-Libre-3-patch)
