# Futuros (possíveis) controladores de bombas

Esta é uma lista de algumas bombas que existem no mercado, com o estado do seu suporte nos sistemas de loop em geral e depois no AAPS. No fim há alguma informação sobre o que uma bomba precisa para poder ser usada em loop («Loop capable»).

    {contents} Índice
    :depth: 1
    :local: true

## Bombas em fase de integração no AAPS

**Em breve:** os controladores destas bombas estão em desenvolvimento e já funcionam em versões de teste.

Omnipod 5 ([Página inicial](https://www.omnipod.com/))

![Controlador do Omnipod 5 em desenvolvimento](../images/future-pumps/omnipod5-driver.png)

Tandem: t:Mobi ([Página inicial](https://www.tandemdiabetes.com/))

![Controlador da Tandem t:Mobi em desenvolvimento](../images/future-pumps/tandem-mobi-driver.png)

## Bombas que podem ser usadas em loop

### Kaleido ([Página inicial](https://www.hellokaleido.com/))

**Estado do loop:** A bomba é candidata a loop, mas o protocolo ainda não é conhecido. O fabricante não tem interesse em código aberto.

**Requisito de hardware para o AAPS:** nenhum. Parece ter Bluetooth.

### Tandem: t:slim X3 ([Página inicial](https://www.tandemdiabetes.com/about-us/pipeline))

**Estado do loop:** Possível futura candidata a loop. Espera-se que a t:slim X3 permita o controlo total a partir de um telefone, o que tornaria possível o suporte no AAPS, mas o calendário e as funções ainda não são conhecidos.

**Requisito de hardware para o AAPS:** nenhum. Espera-se que tenha Bluetooth.

**Comentários:** Ainda não foi lançada. A t:slim X3 parece ser repetidamente adiada no plano da Tandem, a favor da t:Mobi (incluindo uma versão sem tubo) e da Sigi (a sua bomba patch).

### Twiist ([Página inicial](https://www.twiist.com/))

**Estado do loop:** Candidata a loop.

**Requisito de hardware para o AAPS:** nenhum. Tem Bluetooth.

### Bomba de insulina Willcare ([Página inicial](http://shinmyungmedi.com/en/))

**Estado do loop:** Neste momento não é candidata a loop, mas fomos contactados pela equipa da empresa e estão interessados em adaptar a bomba para poder ser usada em loop (neste momento, penso que só faltam os comandos para obter/definir o perfil).

**Requisito de hardware para o AAPS:** nenhum. Parece ter Bluetooth.

**Comentários:** Como a empresa está interessada na integração com o AAPS, poderá fazer ela própria a implementação.

### Ypsopump ([Página inicial](https://www.ypsomed.com/))

**Estado do loop:** Candidata a loop. O protocolo Bluetooth da bomba foi descodificado pela comunidade (engenharia inversa); por isso, em princípio, é possível comunicar com ela.

**Requisito de hardware para o AAPS:** nenhum. Tem Bluetooth.

**Comentários:** A Ypsopump protege a sua comunicação Bluetooth com uma encriptação forte de terceiros. Trabalhar com ela é tecnicamente exigente, o que torna difícil criar e manter um controlador fiável. Ainda não existe nenhum controlador do AAPS pronto para uso real.

## Bombas que já não são vendidas (empresas que já não estão em atividade)

### Animas Vibe

### Animas Ping

### Cellnovo

### Accu-Chek Insight

**Comentários:** Fim do suporte em março de 2025.

## Bombas que não podem ser usadas em loop

### Medtronic Bluetooth

**Comentários:** A Medtronic [desistiu](https://www.tidepool.org/blog/tidepool-loop-partner-update-ace-pumps).

### Tandem: t:slim X2 ([Página inicial](https://www.tandemdiabetes.com/))

**Comentários:** O protocolo Bluetooth da Tandem foi descodificado (engenharia inversa), mas na t:slim X2 só é possível administrar bólus — a administração basal não pode ser controlada — e, por isso,, não pode ser usada em loop com segurança. É pouco provável que isto mude, a não ser que a Tandem permita o controlo total da X2 a partir de um telefone, o que deverá chegar antes com a t:slim X3.

### Accu-Chek Solo

**Comentários:** A comunidade ainda não conseguiu comunicar com a bomba Solo.

## Requisitos para uma bomba poder ser usada em loop

**Pré-requisito**

- A bomba tem de suportar algum tipo de controlo remoto. (BT, radiofrequência, etc.)
- O protocolo foi descodificado (hacked), está documentado, etc.

**Requisito mínimo**

- Definir taxa basal temporária
- Obter Estado
- Cancelar taxa basal temporária

**Para oref1 (SMB) ou para dar bólus:**

- Definir Bólus

**Bom ter**

- Cancelar Bólus
- Obter perfil basal (quase obrigatório)
- Definir perfil basal (bom ter)
- Ler histórico 

**Outros (não obrigatórios, mas bom ter)**

- Definir bólus prolongado
- Cancelar Bólus Prolongado
- Ler histórico
- Ler TID

### Suporte de outras bombas

Se houver outras bombas cujo estado gostaria de conhecer, contacte-nos no Discord.