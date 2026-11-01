# Open Humans Uploader

## Doe os seus dados para a ciência

Você pode ajudar a comunidade doando os seus dados para projetos de pesquisa! This helps scientists to pay it forward, develop new scientific ideas and make open source closed loop systems better known. O AAPS está pronto para sincronizar os seus dados com o [Open Humans](https://www.openhumans.org), uma plataforma que permite enviar, conectar e guardar os seus dados pessoais – como dados genéticos, de atividade e de saúde.

Você mantém o controle total sobre o que acontece com os seus dados e sobre quais projetos você quer apoiar, dando a eles acesso aos seus dados. Dependendo do projeto em que você entrou, os dados são avaliados e usados por ele de formas e em medidas diferentes.

Os seguintes dados serão enviados para a sua conta do Open Humans:

- Valores de glicose
- Eventos do Careportal (exceto notas)
- Bólus estendidos
- Trocas de perfil
- Doses diárias totais
- Basais temporárias
- Alvos temporários
- Preferências
- Versão do aplicativo
- Modelo do dispositivo
- Dimensões da tela

Informações secretas ou privadas, como a URL do Nightscout ou a API secret, não serão enviadas.

## Configuração

1. Crie a sua conta no [Open Humans](https://www.openhumans.org), se ainda não tiver uma. Se quiser, você pode usar as suas contas existentes do Google ou do Facebook.
2. Ative o plugin **Open Humans** em [**Configuração** > **Comunicação**](../SettingUpAaps/ConfigBuilder.md).

![Open Humans ativado em Configuração > Comunicação](../images/OHUploader1.png)

3. Toque em **Configurações** no cartão **Open Humans**. Você pode limitar os envios aos momentos em que o telefone usa Wi-Fi (**Somente Wi-Fi**) e/ou está carregando (**Somente durante o carregamento**).

![Configurações do Open Humans com Somente Wi-Fi e Somente durante o carregamento](../images/OHUploader_settings.png)

4. Toque em **Abrir plugin** no cartão **Open Humans** e depois toque em **Configuração**.

![Tela do plugin Open Humans com o botão Configuração](../images/OHUploader_setup.png)

5. Na tela **Bem-vindo(a) ao Open Humans**, toque em **Seguinte**. Leia com atenção a tela **Consentimento**: ela mostra os termos de uso e quais dados são enviados e quais não são enviados.
6. Ative **Eu compreendo e concordo.** (1) e toque em **Login no Open Humans** (2).

![Telas de boas-vindas e de consentimento do Open Humans no AAPS](../images/OHUploader2.png)

7. O site do Open Humans será aberto. Faça login com os seus dados de acesso.
8. Decida se você quer esconder a sua participação no AAPS Uploader no seu perfil público do Open Humans (1).
9. Clique em **Authorize project** (2).

![Login e autorização do projeto no site do Open Humans](../images/OHUploader_web.png)

```{admonition} Older screenshot
:class: note
As capturas de tela acima mostram uma versão antiga do site do Open Humans e ainda usam o nome antigo do projeto, **AndroidAPS Uploader**. Os passos são os mesmos.
```

10. De volta ao **AAPS**, a tela **Toques finais** pergunta se você quer prosseguir. Toque em **Prosseguir**.
11. Espere até aparecer **Estamos prontos!** e depois toque em **Fechar**. A partir de agora, o seu telefone envia dados em segundo plano de tempos em tempos.
12. A tela do plugin **Open Humans** agora mostra o seu **ID de Membro do Projeto**. Toque em **Enviar agora** se quiser começar um envio imediatamente.
13. Toque em **Sair da sua conta** se quiser parar de enviar dados para o Open Humans.
14. Uma notificação do Android informa você quando um envio está em andamento.

![Open Humans: concluir a configuração](../images/OHUploader3.png)

```{admonition} Older screenshot
:class: note
A captura de tela acima é de uma versão anterior do **AAPS**. No **AAPS** 4, as telas de confirmação são **Toques finais** e **Estamos prontos!**, não há tamanho de fila, e os botões são **Enviar agora** e **Sair da sua conta**.
```

15. Você pode gerenciar os seus dados fazendo login no [site do Open Humans](https://www.openhumans.org).

![Open Humans: gerenciar os dados](../images/OHWeb.png)

## Oportunidades de compartilhamento

### [O projeto 'OPEN'](https://www.open-diabetes.eu/)

O projeto 'OPEN' reúne um consórcio internacional e intersetorial de pacientes inovadores, médicos, cientistas sociais, cientistas da computação e organizações de defesa de pacientes, para estudar vários aspectos dos sistemas de pâncreas artificial "faça você mesmo" (DIY APS), que são usados por um número cada vez maior de pessoas com diabetes. Para mais detalhes, veja o [site](https://www.open-diabetes.eu/) deles.

In September 2020 the 'OPEN' project launched a [survey](https://survey.open-diabetes.eu/) including the option to donate data you uploaded to Open Humans. Um [tutorial](https://open-diabetes.eu/en/open-survey/survey-tutorials/) sobre como doar os seus dados para o projeto 'OPEN' está disponível no site deles e dentro da própria pesquisa.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

O OpenAPS Data Commons foi criado para oferecer uma forma simples de compartilhar conjuntos de dados da comunidade DIYAPS para pesquisa. Os dados são compartilhados tanto com pesquisadores tradicionais, que farão estudos de pesquisa tradicionais, quanto com grupos ou pessoas da comunidade que querem analisar dados como parte dos seus próprios projetos de pesquisa. O OpenAPS Data Commons usa a plataforma 'Open Humans' para que as pessoas possam enviar e compartilhar facilmente os seus dados de DIYAPS, incluindo AAPS, Loop e OpenAPS.

Você pode colocar os seus dados no Open Humans de uma destas três formas:

1. usar a opção de envio do AAPS (AAPS Uploader) para colocar os seus dados no Open Humans
2. usar o Nightscout Data Transfer para colocar os seus dados no Open Humans
3. enviar arquivos de dados manualmente para o Open Humans.

Depois de criar uma conta e começar a enviar os seus dados para o Open Humans, entre também no OpenAPS Data Commons para doar os seus dados para pesquisa, se você quiser.

## Termos de Uso

Esta é uma ferramenta open source que copia os seus dados para o [Open Humans](https://www.openhumans.org). Não temos nenhum direito de compartilhar os seus dados com terceiros sem a sua autorização explícita. Os dados que o projeto e o app recebem são identificados por um ID de usuário aleatório e só serão transmitidos de forma segura para uma conta do Open Humans com a sua autorização. Você pode parar o envio e apagar os dados enviados a qualquer momento em [www.openhumans.org](https://www.openhumans.org). Atenção: alguns projetos que recebem os dados podem não permitir isso.

Veja também os [Termos de Uso do Open Humans](https://www.openhumans.org/terms/).

## Privacidade dos dados

O Open Humans protege a sua privacidade dando a você um ID numérico para cada projeto. Isso permite que os projetos reconheçam você, mas não identifiquem quem você é. O ID do aplicativo enviado pelo AAPS é parecido e serve apenas para administrar os dados. Mais informações aqui:

- [Política de uso de dados do Open Humans](https://www.openhumans.org/data-use/)
- [GDPR do Open Humans](https://www.openhumans.org/gdpr/)
