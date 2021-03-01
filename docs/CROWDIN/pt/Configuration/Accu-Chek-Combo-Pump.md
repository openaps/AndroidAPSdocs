# Bomba de Insulina Accu Chek Combo

**Este software é parte de uma solução DIY (faça você mesmo) e não é um produto, no entanto é necessário que VOCÊ leia, aprenda e compreenda o sistema, incluindo a forma de o usar. Não é algo que faça a gestão total da sua diabetes, mas permite melhorá-la, bem como a sua qualidade de vida, se estiver disposto a utilizar o seu tempo para isso. Não tenha demasiada pressa, permita-se ter tempo para aprender. Você é o ÚNICO responsável pela utilização e configuração deste sistema, e pelo que faz com ele.**

## Requisitos de hardware

* Uma bomba de insulina Accu-Chek Combo da Roche (qualquer firmware serve, todos funcionam)
* Um dispositivo Smartpix 1 ou um cabo 360 (Realtyme), juntamente com o software de configuração 360 poderão ser necessários para configurar a bomba. (A Roche, em alguns países, envia gratuitamente os dispositivos Smartpix e o software de configuração aos seus clientes, mediante pedido. Tal não se verifica em Portugal, mas a maioria das unidades de diabetes possuem-no.)
* Um telefone compatível: telemóvel Andoid com o sistema LineageOS 14.1 ( anteriormente chamado CyanogenMod) ou Android 8.1 (Oreo). 
* O LineageOS 14.1 tem de ser uma versão recente, pelo menos de Junho de 2017, dado que a alteração necessária para emparelhar com a bomba Combo só foi introduzida nessa altura. 
* Poderá encontrar uma lista de telefones compatíveis no documento [AAPS Telefones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit).
* Por favor tenha em atenção que isto não é uma lista completa e reflecte apenas a experiência pessoal dos utilizadores. Encorajamo-lo a também introduzir a sua experiência para que possa ajudar os outros (estes projectos baseiam-se na solidariedade da comunidade).
* Esteja consciente de que enquanto o Android 8.1 permite a comunicação com o Combo, ainda há problemas com a AAPS no dia 8.1.
* Para utilizadores avançados, com bons conhecimentos informáticos, é possível realizar o emparelhamento num telefone com root e transferi-lo para outro telefone com root para usar com ruffy / AAPS, que também deve estar com root. Isto permite usar telefones com Android inferior a 8.1 mas ainda não foi totalmente testado: https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Limitações

* Bólus prolongado e bólus multi onda não são suportados ( ver [Hidratos de carbono prolongados](../Usage/Extended-Carbs.rst)).
* Apenas é suportado um perfil de basal.
* Programar mais do que um perfil de basal na bomba, ou dar bólus prolongado ou multi onda a partir da bomba interfere com as DBT e irá forçar o LOOP a entrar em modo de suspensão durante horas dado que o LOOP não consegue funcionar em segurança nestas condições.
* Actualmente não é possível programar tempo e hora na bomba, então [as alterações horárias](../Usage/Timezone-traveling#accu-chek-combo) têm de ser efectuadas manualmente (poderá desactivar as actualizações de horário automáticas no telefone de noite e voltar a activar de manhã e ao mesmo tempo alterar o relógio da bomba e assim evitar alarmes nessas duas noites do ano).
* Actualmente apenas basais desde 0.05 até 10u/h são suportadas. Isto também se aplica quando modifica um perfil, i.e. ao aumentar para 200% a basal temporária, o valor da basal máxima não deve exceder 5U/h ou duplicada ultrapassará o limite de 10U/h. Do mesmo modo, ao reduzir para 50%, a taxa menor da basal deverá ser no mínimo 0.10 U/h.
* Se o loop solicitar o cancelamento de uma DBT em execução a Combo definirá em vez disso uma DBT de 90% ou 110% durante 15 minutos. Isto porque ao cancelar uma DBT a bomba emite um alerta que causa imensas vibrações.
* Ocasionalmente (a cada dois ou três dias) a AAPS pode falhar no cancelamento automático do alerta de DBT CANCELADA. Nesta situação o utilizador terá de anulá-lo: premindo o botão actualizar na AAPS para transferir o aviso para a AAPS ou confirmar o alerta na bomba.
* A estabilidade da conexão Bluetooth varia de acordo com os diferentes telefones, causando alertas de 'bomba não localizada', quando a ligação à bomba for perdida. 
* Se esse erro ocorrer, certifique-se de que o Bluetooth está activo, prima o botão actualizar no separador Combo para verificar se a causa foi temporária ou se continua sem conexão. Reiniciar o telemóvel normalmente resolve o problema. 
* Há uma outra questão onde o reiniciar do telefone não ajuda mas um botão na bomba pode ser pressionado ( o que faz um reset ao Bluetooth da bomba), antes da bomba aceitar de novo ligações ao telemóvel. 
* Neste momento muito pouco poderá ser feito para corrigir qualquer um destes problemas. Assim, se verificar estes erros com frequência a única opção nesta altura será arranjar outro telefone que trabalhe correctamente com a AndroidAPS e a Combo (ver acima).
* A emissão de um bólus a partir da bomba nem sempre será detectado a tempo (apenas quando a AAPS se conecta à bomba) e na pior situação poderá demorar até 20 minutos. 
* Os bólus na bomba são sempre verificados antes de uma BT (basal temporária) alta ou um bólus efectuado pela AAPS, mas devido aos limites de segurança a AAPS irá recusar a BT/Bólus, dado que o mesmo foi calculado devido a falsas informações. (-> Não dê bólus a partir da bomba! Veja capítulo [Utilização](#usage) abaixo)
* É de evitar programar uma BT na bomba dado que o Loop assume o controlo das BTs. Detectar uma nova DBT na bomba pode levar até 20 minutos e o efeito da DBT só será tido em conta a partir do momento em que é detectado, no pior dos casos poderão haver 20 minutos de DBT que não será reflectida na IOB (insulina activa). 

## Instalação

* Configurar a bomba usando o software de configuração 360. 
* Se não tiver o software, entre em contacto com a sua linha de apoio ao cliente Accu-Check. Eles normalmente enviam aos utilizadores registados um CD com o ''360º configuração de software'' e um aparelho de conexão por infravermelhos USB SmartPix (o Realtyme também funciona).
* **Configurações obrigatórias** (marcado como verde nas capturas de ecrã):
    
    * Configure / deixe a configuração do menu como "Standard", isto mostrará apenas os menus / ações suportados na bomba e esconderá aqueles que não são suportados (bólus estendido/multionda, múltiplas taxas basais), que fazem com que a funcionalidade de loop seja restrita quando usada porque não é possível executar o loop de maneira segura quando usado.
    * Verifique se o *Texto de informação rápida * está programado para ''Informação Rápida'' ( sem as aspas, encontrado em *Opções da bomba de insulina *).
    * Programar a DBT *Ajuste máximo* a 500%
    * Desactivar *aviso de fim de DBT*
    * Programar DBT *aumento de duração * para 15 min
    * Activar bluetooth

* **Configurações obrigatórias** (marcadas com azul nas capturas de ecrã)
    
    * Programar aviso de cartuxo vazio à sua escolha
    * Configurar o bólus máximo adequado à sua terapia para se proteger contra bugs do software
    * Da mesma forma, configure a duração máxima da DBT para sua segurança. Deixe pelo menos 3 horas, uma vez que a opção de desconectar a bomba por 3 horas fixa um 0% por 3 horas.
    * Active a opção de bloqueio de teclas na bomba para prevenir eventuais bólus não desejados a partir da bomba. Por exemplo, quando a bomba era usada para dar bólus rápidos.
    * Programe o tempo limite do ecrã e do menu para no mínimo 5.5 e 5, respectivamente. Isto permite que AAPS possa recuperar mais rapidamente de situações de erro e reduzir a quantidade de vibrações que poderão ocorrer durante esses erros

![Captura de ecrã das configurações de utilizador](../images/combo/combo-menu-settings.png)

![Captura de ecrã das configurações da DBT](../images/combo/combo-tbr-settings.png)

![Captura de ecrã das configurações de bólus](../images/combo/combo-bolus-settings.png)

![Captura de ecrã das configurações do cartucho de insulina](../images/combo/combo-insulin-settings.png)

* Instalar a AndroidAPS conforme descrito no [AndroidAPS docs](../Installing-AndroidAPS/Building-APK.md).
* Certifique-se de ler toda a documentação para entender como configurar a AndroidAPS.
* Selecione o plugin **MDI** na AndroidAPS, não o plugin Combo neste ponto para evitar que o plugin Combo interfira com a ruffy durante o processo de emparelhamento.
* Clone a [ruffy](https://github.com/MilosKozak/ruffy) do github via git.
* Instale a aplicação ruffy e use-a para emparelhar com a bomba.
    
    * Se não trabalhar após múltiplas tentativas, troque para o branch `emparelhamento`, emparelhe a bomba e regresse depois ao branch original.
    * Note que o processo de emparelhamento é delicado ( mas só tem de ser feito uma única vez) e poderão ser necessárias algumas tentativas; confirme rapidamente as instruções e ao iniciar de novo remova a bomba das configurações de bluetooth antes de recomeçar. 
    * Outra opção para tentar é ir até ao menu Bluetooth após iniciar o processo de emparelhamento (isso mantém o Bluetooth do telemóvel visível enquanto o menu é exibido) e alternar de volta para ruffy após confirmar o emparelhamento na bomba, quando a bomba exibe o código de autorização.
    * Se você não conseguir emparelhar a bomba (digamos após 10 tentativas), tente aguardar até 10s antes de confirmar o emparelhamento na bomba (quando o nome do telefone estiver exibido na bomba). 
    * Se configurou o tempo limite do menu para 5s acima, você precisa aumentá-lo novamente. Alguns utilizadores relataram que precisavam fazer isso. 
    * Por último, considere mudar para outra sala, para o caso de haver interferências de algum tipo de ondas. Há mais do que um utilizador que ultrapassou os problemas de emparelhamento simplesmente mudando de sala.

* Quando a AAPS está a usar ruffy, a app Ruffy não pode ser usada. A maneira mais simples é simplesmente reiniciar o telefone após o processo e deixar a AAPS iniciar a ruffy em segundo plano.

* Se a bomba for completamente nova, precisará ** fazer um bólus na bomba** para que a mesma crie uma primeira entrada no histórico.
* Antes de ativar o plugin Combo na AAPS certifique-se de que o seu perfil está correctamente configurado e activado (!) e o seu perfil de basal está actualizado já que a AAPS irá sincronizar-se com o perfil de basal da bomba.
* Então ative o [plugin Combo](../Configuration/Config-Builder#pump). 
* Prima o botão *actualizar* no separador Combo para inicializar a bomba.
* Para verificar a sua configuração, com a bomba **desligada**, use a AAPS para programar uma DBT de 500% por 15min e administre um bólus.
* A bomba deve ter agora uma DBT activa e o bólus no histórico. AAPS deverá também mostrar a DBT activa e os bólus administrados.

## Porque é que emparelhar com a bomba não funciona com a app "ruffy"?

Há várias razões possiveis. Tente os seguintes passos:

1. Insira **pilha nova** na bomba. Para detalhes consulte a secção bateria. Certifique-se de que a bomba está muito perto do smartphone.

![Combo deverá estar próxima do telefone](../images/Combo_next_to_Phone.png)

2. Desligue ou retire quaisquer equipamento bluetooth para que não possa causar conflitos enquanto o emparelhamento do telefone está em progresso. Qualquer comunicação paralela bluetooth ou conexões de emparelhamento rápido poderão interferir no processo de emparelhamento.
3. Apague dispositivos já conectados no menu bluetooth da bomba: **DEFINIÇÕES BLUETOOTH / LIGAÇÕES / REMOVER** até que apareça **SEM DISPOSITIVOS** .
4. Apague uma bomba previamente ligada ao telemóvel via bluetooth: definições/bluetooth, remover dispositivo emparelhado "**SpiritCombo**"
5. Certifique se de que AAPS não está em background a correr o loop. Desactive Loop no AAPS.
6. Inicie agora ruffy no telefone. Pode premir Reset! e remover a ligação antiga. Prima Connect!.
7. No menu bluetooth da bomba, ir a **Adicionar dispositivo / Adicionar ligação**. Pressione *CONNECT! **
    
    * A etapa 6 e 7 têm de ser feitas num curto espaço de tempo.

8. Agora a bomba deve mostrar o nome de Bluetooth do telefone para selecionar para emparelhar. Neste momento é importante esperar pelo menos 5 s antes de clicar no botão de seleção na Bomba. Caso contrário a bomba não irá enviar o pedido de emparelhamento ao telefone.

* Se o ecrã da bomba estiver configurado para estar ligado 5s, deverá testar com 40s ( configuração original). Habitualmente o tempo entre a bomba aparecer no telefone até selecionar a mesma será cerca de 5-10s. Noutros casos o emparelhamento expira sem estar correctamente efectuado. 
* Mais tarde deverá voltar a definir para 5s, para ir ao encontro das configurações AAPS para a Combo.
* Se a bomba não mostrar o telefone como dispositivo emparelhado, provavelmente o bluetooth do seu telefone não é compatível com a bomba. Certifique-se de estar a executar uma versão ** LineageOS ≥ 14,1 ** ou ** Android ≥ 8,1 (Oreo) **. Se possível, tente com outro smartphone. Poderá encontrar uma lista de smartphones testados com sucesso em \[AAPS telefones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit). 

9. De seguida a bomba deverá indicar um código de segurança de 10 dígitos. E Ruffy um écran para introduzir esse código. Introduza-o em Ruffy e deverá estar tudo pronto.
10. Reinicie o telemóvel.
11. Poderá agora iniciar o loop AAPS.

## Utilização

* Tenha em conta de que isto não é um produto, esp. no inicio o utilizador necessita de monitorizar e perceber o sistema, as suas limitações e como pode falhar. 
* É altamente recomendável não utilizar este sistema quando a pessoa que o vai utilizar não o entende na totalidade.
* Leia a documentação OpenAPS https://openaps.org para perceber o algoritmo do loop em que a AndroiAPS se baseia.
* Leia os [docs da AAPS](../index.rst) para aprender sobre, e entender, a AndroidAPS.
* A integração usa a mesma funcionalidade que o medidor que é fornecido com a Combo.
* O medidor permite visualizar o ecrã da bomba e passar informação para a bomba. 
* A conexão à bomba e esta passagem é o que a app ruffy faz. 
* Os componentes de um 'scripter' leem o ecrã e automatiza a entrada de bólus, DBTs, etc e certificando-se de que os inputs são processados corretamente.
* A AAPS interage com o scripter para aplicar comandos loop e administrar bólus.
* Este modo tem algumas restrições: é comparativamente lento ( mas bem rápido para a sua finalidade), e programar uma DBT ou dar um bólus causa a vibração da bomba.
* A integração da Combo com a AndroiAPS é concebida tendo em conta de que todas as entradas são feitas através da AndroidAPS. Bólus introduzidos directamente na bomba serão detectados pela AAPS, mas poderá levar até 20mn a detecção desse bólus pela AndroidAPS. 
* A leitura dos bólus dados directamente na bomba é uma norma de segurança e não deve ser usado com regularidade ( o loop requer conhecimento dos hidratos de carbono consumidos, que não poderão ser introduzidos na bomba, o que é outra razão pela qual **todas as entradas devem ser feitas na AndroidAPS**. 
* Não programe ou cancele uma DBT na bomba. O loop assume o controlo da DBT e não pode trabalhar em segurança de outra forma, dado que não é possível determinar a hora de inicio da DBT que foi programada pelo utilizador na bomba.
* O perfil inicial da taxa basal da bomba é lido no inicio da aplicação e vai sendo actualizado pela AAPS.
* As basais não deverão ser manualmente alteradas na bomba, mas será detetada e corrigida como medida de segurança ( não confie em medidas de segurança por defeito, isto foi concebido para detectar alterações involuntárias na bomba).
* É recomendado activar o bloqueio de teclas na bomba para evitar eventuais bólus não desejados, especialmente quando a bomba foi usada anteriormente e o 'bólus rápido' era habitual.
* Além disso, com o bloqueio ativado, acidentalmente pressionar uma tecla não irá interromper a comunicação ativa entre a AAPS e a bomba.
* Quando um alerta de BÓLUS/DBT CANCELADA surge na bomba durante o bólus ou a programação de uma DBT, isto é causado por uma desconexão entre a bomba e o telefone, o que acontece de tempos a tempos. A AAPS irá tentar reconectar e confirmar o alerta e em seguida repetir a última acção ( **bólus NÃO são repetidos**por razões de segurança). 
* Portanto, esse alarme poderá ser ignorado já que a AAPS irá confirmar automaticamente, normalmente em 30 segundos ( cancelamento não é um problema, mas irá levar a que a acção actual da bomba tenha de esperar até que o ecrã se desligue antes de poder reconectar a bomba). 
* Se o alarme da bomba continuar, a confirmação automática falhou e neste caso o utilizador necessita de confirmar o alarme manualmente.
* Quando um alarme de reservatório vazio ou bateria fraca soa durante um bólus, ele é confirmado e mostrado como notificação na AAPS. 
* Se ocorrerem enquanto não houver ligação aberta à bomba, ir ao separador Combo e carregar no botão ATUALIZAR irá fazer com que uma notificação seja apresentada na AAPS.
* Quando a AAPS falhar na confirmação de um alerta de DBT cancelada, ou um alerta surgir por diferentes razões, premir ATUALIZAR no separador Combo irá estabelecer uma ligação, confirma o alerta e mostra uma notificação na AAPS. Isto pode ser feito com segurança, uma vez que esses alertas são benignos-uma DBT apropriada será configurada novamente durante a iteração do próximo loop.
* Para todos os outros alertas gerados pela bomba: conectar à bomba mostrará a mensagem de alerta na aba Combo, por exemplo, "Estado: E4: Oclusão" bem como mostrando uma notificação na tela principal.
* Um erro irá criar uma notificação urgente. 
* A AAPS nunca confirma erros graves na bomba, mas deixa a bomba vibrar e tocar para garantir que o utilizador seja informado de uma situação crítica que precisa de ação.
* Após emparelhar, a ruffy não deve ser usada directamente (a AAPS irá iniciá-la em background), dado que usando a ruffy ao mesmo tempo que a AAPS não é suportado.
* Se AAPS crackar (ou for parada pelo depurador) enquanto AAPS e a bomba estavam em comunicação (usando ruffy), poderá ser necessário forçar o fecho da ruffy. Reiniciando a AAPS irá recomeçar a ruffy.
* Reiniciar o telefone é também uma maneira simples de resolver esta situação se não souber como fazer para forçar o fecho de uma app.
* Não prima quaisquer botões na bomba enquanto a AAPS comunica com a mesma ( o logotipo bluetooth aparece na bomba).