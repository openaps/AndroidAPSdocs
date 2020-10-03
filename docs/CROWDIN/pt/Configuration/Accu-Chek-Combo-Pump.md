# Bomba de Insulina Accu Chek Combo

**Este software é parte de uma solução DIY (faça você mesmo) e não é um produto, no entanto é necessário que VOCÊ leia, aprenda e compreenda o sistema, incluindo a forma de o usar. Não é algo que faz a gestão total da sua diabetes, mas permite melhorá-la bem como a sua qualidade de vida se estiver disposto a dar-lhe o tempo necessário para isso. Não tenha demasiada pressa, permita-se ter tempo para aprender. Você é o responsável como utiliza e configura o sistema.**

## Requisitos de hardware

- Uma Accu-Chek Combo da Roche (qualquer firmware serve, todos funcionam)
- Um dispositivo Smartpix ou Realtyme, juntamente com o software 360 Configuration Software para configurar a bomba. A Roche, em alguns países, envia gratuitamente os dispositivos Smartpix e o software de configuração aos seus clientes, mediante pedido.
- Um telefone compatível: telemóvel Andoid com o sistema LineageOS 14.1 ( anteriormente chamado CyanogenMod) ou Android 8.1 (Oreo). O LineageOS 14.1 tem de ser uma versão recente, pelo menos de Junho de 2017, dado que a alteração necessária para emparelhar com a bomba Combo só foi introduzida nessa altura. Poderá encontrar uma lista de telefones compatíveis no documento [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). Por favor tenha em atenção que isto não é uma lista completa e reflecte apenas a experiência pessoal dos utilizadores. Encorajamos-o a também introduzir a sua experiência para que possa ajudar os outros (estes projectos baseiam-se na solidariedade da comunidade).

- Tenha atenção de que apesar do Android 8.1 permitir comunicar com a Combo, ainda existem problemas com AAPS no 8.1. Para utilizadores avançados, é possível realizar o emparelhamento num telefone com root e transferi-lo para outro telefone com root para utilizar ruffy/AAPS. Isto permite usar telefones com Android <8.1 mas ainda não foi totalmente testado: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Limitações

- Bolus prolongado e bolus multi onda não são suportados ( ver [Extended Carbs](../Usage/Extended-Carbs.rst))
- Apenas é suportado um perfil de basal.
- Programar mais do que 1 perfil de basal na bomba, ou dar bolus prolongado ou multi onda desde a bomba interfere com as TBRs e irá forçar o LOOP a entrar em modo de suspensão por 6 horas dado que o LOOP não consegue funcionar em segurança nestas condições.
- Actualmente não é possível programar tempo e hora na bomba, então as alterações horárias têm de ser efectuadas manualmente (poderá desactivar as actualizações de horário automáticas no telefone de noite e voltar a activar de manhã e ao mesmo tempo alterar o relógio da bomba e assim evitar alarmes nessas duas noites do ano).
- Actualmente apenas basais desde 0.05 até 10u/h são suportadas. Isto também se aplica a quando modifica um perfil, i.e. ao aumentar para para 200% a basal temporária, o valor da basal máxima não deve exceder 5U/h ou duplicada ultrapassará o limite de 10U/h. Do mesmo modo, ao reduzir para 50%, a taxa menor da basal deverá ser no mínimo 0.10 U/h.
- Se o Loop solicitar o cancelamento duma basal temporária em funcionamento, para cancelar a Combo irá programar uma DBT de 90% ou 110% durante 15 minutos. Isto porque ao cancelar uma DBT a bomba emitirá um alerta o que causa imensas vibrações.
- Ocasionalmente (a cada dois ou três dias) AAPS pode falhar no cancelamento automático do alerta de DBT CANCELADA. O utilizador neste caso terá de lidar com isso premindo o botão actualizar na AAPS para transferir o aviso da AAPS ou confirmar o alerta na bomba.
- A estabilidade da conexão Bluetooth varia de acordo com os diferentes telefones, causando alertas de 'bomba não localizada', quando a ligação à bomba for perdida. Se esse erro ocorrer, certifique-se de que o Bluetooth está activo, prima o botão actualizar no separador Combo para verificar se a causa foi temporária ou se continua sem conexão. Reiniciar o telemóvel normalmente resolve o problema. Há uma outra questão onde o reiniciar do telefone não ajuda mas um botão na bomba pode ser pressionado ( que faz um reset ao Bluetooth da bomba), antes da bomba aceitar de novo ligações ao telemóvel. Neste momento muito pouco poderá ser feito para corrigir qualquer um destes problemas. Assim, se verificar estes erros com frequência a única opção nesta altura será arranjar outro telefone que trabalhe correctamente com AndroidAPS e a Combo (ver acima).
- A emissão dum bolus apartir da bomba nem sempre será detectado a tempo (apenas quando o AAPS de conecta à bomba) e em pior caso poderá demorar 20 minutos. Os bolus na bomba são sempre verificados antes de uma DBT alta ou um bolus efectuado pela AAPS e dos limites de segurança da AAPS irão recusar a DBT/Bolus dada a nova informação retirada da bomba. (-> Não dê bolus a partir da bomba! Ver capítulo *Utilização*)
- É de evitar programar uma DBT na bomba dado que o Loop assume o controlo das DBTs. Detectar uma nova DBT na bomba pode levar até 20 minutos e o efeito da DBT só será tido em conta a partir do momento em que é detectado, no pior dos casos poderão haver 20 minutos de DBT que não será reflectida na IOB (insulina activa). 

## Instalação

- Configurar a bomba usando o software de configuração 360. Se não tiver o software, entre em contacto com a sua linha de apoio ao cliente Accu-Check. Eles normalmente enviam aos utilizadores registados um CD com o ''360º configuração de software'' e um aparelho de conexão por infravermelhos USB SmartPix (o Realtyme também funciona). 
  - Necessário ( marcado a verde nas capturas de ecrã): 
    - Programar/sair do menu de configuração como 'Standard', irá mostrar apenas os menus/acções suportadas na bomba e omitir os que não são suportados ( bolus prolongado/multi onda, múltiplos perfis de basal) o que torna a funcionalidade do Loop restrita dado que ao utilizar não é possível que o Loop trabalhe de maneira segura.
    - Verifique se o *Texto de informação rápida * está programado para ''Informação Rápida'' ( sem as aspas, encontra em *Opções da bomba de insulina *).
    - Programar a DBT *Ajuste máximo* a 500%
    - Desactivar *aviso de fim de Dbt*
    - Programar DBT *aumento de duração * para 15 min
    - Activar bluetooth
  - Recomendado ( marcado a azul nas capturas de ecran) 
    - Programar aviso de cartuxo vazio á sua escolha
    - Configurar o bolus máximo adequado á sua terapia para se proteger contra bugs do software
    - Da mesma forma, configure a duração máxima da DBT para sua segurança. Permita no mínimo 3 horas, desde que a opção para desligar a bomba por 3 horas defina 0% por 3 horas.
    - Active a opção de bloqueio de teclas na bomba para prevenir eventuais bolus não desejados a partir da bomba, esp. quando a bomba era usada antes e o bolus rápido era habitual.
    - Programe o tempo limite do écran e do menu para no minimo 5.5 e 5 respectivamente. Isto permite que AAPS possa recuperar mais rapidamente de situações de erro e reduzir a quantidade de vibrações que poderão ocorrer durante esses erros

![Captura de écran das configurações de utilizador](../images/combo/combo-menu-settings.png)

![Captura de écran das configurações da DBT](../images/combo/combo-tbr-settings.png)

![Captura de écran das configurações de bolus](../images/combo/combo-bolus-settings.png)

![Captura de ecran das configurações do cartucho de insulina](../images/combo/combo-insulin-settings.png)

- Install AndroidAPS as described in the [AndroidAPS docs](../Installing-AndroidAPS/Building-APK.html).
- Certifique se de que leu o wiki para entender como se programa o AndroiAPS.
- Seleccione o plugin MDI em AndroidAPS, não o plugin Combo nesta altura para evitar que o plugin Combo interfira com ruffy durante o processo de emparelhamento.
- Clone [ruffy](https://github.com/MilosKozak/ruffy) from github via git.
- Instale ruffy e use- o para emparelhar com a bomba. Se não trabalhar após múltiplas tentativas, troque para o branch `emparelhamento`, emparelhe a bomba e regresse depois ao branch original. Note que o processo de emparelhamento é delicado ( mas só tem de ser feito uma única vez) e poderão ser necessárias algumas tentativas; reconheça rapidamente os alertas e ao iniciar de novo remova a bomba das configurações de blutooth antes de recomeçar. Outra opção a tentar é ir ao menu Bluetooth após inicializar o processo de emparelhamento ( isto mantém o Blutooth do telefone visível enquanto o menu for exibido) e voltar para o ruffy após confirmar o emparelhamento na bomba quando aparecer no écran o código de autorização. Se não conseguir emparelhar a bomba ( após 10 tentativas), tente aguardar 10 segundos antes de confirmar o emparelhamento na bomba ( quando o nome do telefone aparecer na bomba). Se configurou o tempo limite de menu para 5s ou mais, terá de aumentar de novo. Alguns utilizadores relataram a necessidade de fazer isto. Por último, considere mover-se de uma divisão para outra no caso de interferências de rádio locais. Pelo menos um utilizador ultrapassou os problemas de emparelhamento simplesmente mudando de divisão.
- Quando AAPS está a usar ruffy, a app Ruffy não pode ser usada. A maneira mais simples é simplesmente reiniciar o telefone após o processo e deixar AAPS iniciar ruffy em segundo plano.
- Se a bomba for completamente nova, precisará de fazer um bólis na bomba para que a bomba crie uma primeira entrada no histórico.
- Antes de permitir o plugin Combo no AAPS certifique-se de que o seu perfil está correctamente configurado e activado (!) e o seu perfil de basal está actualizado já que a AAPS irá sincronizar-se com o perfil de basal da bomba. Em seguida active o plugin Combo. Prima o botão *actualizar* no separador Combo para inicializar a bomba.
- Para verificar a sua configuração, com a bomba **desligada**, use AAPS para programar uma DBT de 500% por 15mn e administr eum bolus. A bomba deve ter agora uma DBT activa e o bolus no histórico. AAPS deverá tambem mostrar a DBT activa e os bolus administrados.

## Porque é que o emparelhar com a bomba não funciona com a app "ruffy"?

Há várias razões possiveis. Tente os seguintes passos:

1. Insira **pilha nova** na bomba. Para detalhes consulte a secção bateria. Certifique-se de que a bomba está muito perto do smartphone.

![Combo deverá estar proximo do telefone](../images/Combo_next_to_Phone.png)

2. Desligue ou retire quaisquer equipamento blutooth para que não possa causar conflitos enquanto o emparelhamento do telefone está em progresso. Qualquer comunicação paralela blutooth ou conexões de emparelhamento rápido poderão interferir no processo de emparelhamento.

3.     Apague dispositivos já conectados no menu blutooth da bomba: **DEFINIÇÕES BLUETOOTH / LIGAÇÕES / REMOVER** até que 
      **SEM DISPOSITIVOS** apareça.
      

4. Apague uma bomba previamente ligada ao telemóvel via blutooth: definiçoes/blutooth, remover dispositivo emparelhado "**SpiritCombo**"
5. Certifique se de que AAPS não está em background a correr o loop. Desactive Loop no AAPS.
6. Inicie agora ruffy no telefone. Pode premir Reset! e remover a ligação antiga. Prima Connect!.
7. No menu blutooth da bomba, ir a **Adicionar dispositivo / Adicionar ligação**. Pressione *CONNECT!** *Os passos 5 e 6 têm de ser realizados rapidamente.
8. Agora a bomba deve mostrar o nome de BT do telefone para selecionar para emparelhar. Aqui é importante que espere pelo menos 5s antes de premir o botão de seleção na bomba. Caso contrário a bomba não irá enviar o pedido de emparelhamento ao telefone.

* Se o écran d a bomba estiver configurado para estar ligado 5s deverá testar com 40s ( configuração original). Habitualmente o tempo entre a bomba aparecer no telefone até selecionar a mesma será cerca de 5-10s. Em muitos outros casos o emparelhamento expira sem ser corretamente efectuado. Mais tarde deverá voltar a definir 5s, para estar de acordo com as configurações do AAPS. * Se a bomba não aparecer no telefone como dispositivo emparelhado, provavelmente o Bluetooth do seu telefone não é compativel com a bomba. Certifique-se de estar executando uma versão ** LineageOS ≥ 14,1 ** ou ** Android ≥ 8,1 (Oreo) **. Se possível tente com outro smartphone. Poderá encontrar uma lista de smartphones testados com sucesso em \[AAPS telefones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435).

9. De seguida a bomba deverá indicar um código de segurança de 10 dígitos. E Ruffy um écran para introduzir esse código. Introduza-o no Ruffy e deverá estar tudo pronto.
10. Reinicie o telemóvel.
11. Poderá agora iniciar o loop AAPS.

## Utilização

- Tenha em conta de que isto não é um produto, esp. no inicio o utilizador necessita de monitorizar e perceber o sistema, as suas limitações e como pode falhar. É altamente recomendável não utilizar este sistema quando a pessoa que o vai utilizar não o entende na totalidade.
- Leia a documentação OpenAPS https://openaps.org para perceber o algoritmo. loop em que o AndroiAPS se baseia.
- Leia o wiki para perceber mais a Android Aps http://wiki.AndroidAPS.org
- A integração usa a mesma funcionalidade do que o medidor que é fornecido com a Combo. O medidor permite espelhar o ecrã da bomba e passar informação para a bomba. A conexão á bomba e este encaminhamento é o que a app ruffy faz. Um componente `scripter` lê o ecrã e automaticamente introduz bolus, DBTs, etc e certifica-se de que os dados são processados correctamente. AAPS interage com o scripter para aplicar comandos loop e administrar bolus. Este modo tem algumas restrições: é comparativamente lento ( mas bem rápido para a sua finalidade), e programar um DBT ou dar um bolus causa a vibração da bomba.
- A integração da Combo com AndroiAPS é concebida tendo em conta de que todas as entradas são feitas através da AndroidAPS. Bólus introduzidos directamente na bomba serão detectados pelo AAPS, mas poderá levar até 20mn a detecção desse bolus pela AndroidAPS. A leitura dos bolus dados directamente na bomba é uma norma de segurança e não deve ser usado com regularidade ( o loop requer conhecimento dos hidratos de carbono consumidos, que não poderão ser introduzidos na bomba, o que é outra razão pela qual todas as entradas devem ser feitas em AndroidAPS. 
- Não programe ou cancele uma DBT na bomba. O loop assume o controlo da DBT e não pode trabalhar em segurança, dado que não é possível determinar a hora de inicio da DBT que foi programada pelo utilizador na bomba.
- O perfil inicial da taxa basal da bomba é lido no inicio da aplicação e vai sendo actualizado pela AAPS. A taxa basal não deverá ser manualmente alterada na bomba, mas será detectada e corrigida como medida de segurança ( não confie em medidas de segurança por defeito, isto foi concebido para detectar alterações involuntárias na bomba).
- É recomendado activar o bloqueio de teclas na bomba para evitar eventuais bolus nao desejados, esp. quando a bomba foi usada anteriormente e o 'bolus padrão' era habitual. Além disso, com o bloqueio ativado, acidentalmente pressionar uma tecla não irá interromper comunicação ativa entre AAPS e bomba.
- Quando um alerta de bolus/dbt cancelada surge na bomba durante o bolus ou a programação da DBT, isto é causado por uma desconexão entre a bomba e o telefone, o que acontece de tempos a tempos. AAPS irá tentar reconectar e confirmar o alerta e em seguida repetir a última acção ( bolus NÃO são repetidos por razões de segurança). Portanto, esse alarme poderá ser ignorado já que AAPS irá confirmar automaticamente, normalmente em 30 segundos ( cancelamento não é problema, mas irá conduzir para que a acção actual da bomba tenha de esperar até o ecrã se desligar antes de poder reconectar a bomba). Se o alarme da bomba continuar, a confirmação automática falou e neste caso o utilizador necessita de confirmar o alarme manualmente.
- Quando um alarme de cartucho vazio ou bateria fraca soa durante um bolus, ele é confirmado e mostrado como notificação em AAPS. Se ocorrerem enquanto não houver ligação aberta á bomba, ir ao separador Combo e carregar no botão refresh irá fazer com que uma notificação seja apresentado em AAPS.
- Quando a AAPS falhar na confirmação de um alerta de DBT cancelado, ou um alerta surgir por diferentes razões, premindo Refresh no separador Combo irá estabelever uma conexão, permite confirmar o alerta e mostrar uma notificação na AAPS. Isto pode facilmente ser feito, desde que esses alertas sejam benignos- uma DBT apropriada será novamente programada durante a próxima iteração Loop.
- Para outros alertas gerados pela bomba: a ligação á bomba irá mostrar a mensagem de alerta no separador Combo, por exemplo "Erro: E4: Oclusão" assim como uma notificação será mostrada no écran. Um erro irá criar uma notificação urgente. AAPS nunca confirma erros graves na bomba, mas permite que a bomba vibre e toque para ter a certeza de que o utilizador é informado desta situação critica que precisa de intervenção.
- Após emparelhar, ruffy não deverá ser usado directamente (AAPS irá iniciar em background como necessário), dado que usando ruffy em AAPS ao mesmo tempo não é suportado.
- Se AAPS avariar ( ou for parada pelo depurador) enquanto AAPS e a bomba estiverem em comunicação ( usando ruffy), poderá ser necessário forçar o fecho do ruffy. Reiniciando a AAPS ruffy irá recomeçar. Reiniciar o telefone é também uma maneira simples de resolver esta situação se não souber como fazer para forçar o fecho da app.
- Não prima quaisquer botões na bomba enquanto AAPS comunica com a bomba ( o logotipo blutooth aparece na bomba).