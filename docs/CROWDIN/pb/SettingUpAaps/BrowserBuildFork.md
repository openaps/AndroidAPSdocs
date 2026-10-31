(github-fork)=

# Compilação no navegador – Etapa 1: Crie o seu fork no GitHub

```{note}
Esta é a **Etapa 1** da [Compilação no navegador](BrowserBuild.md).
```

Você vai precisar guardar no GitHub, em segredo, a sua chave Java pessoal do Android e as informações do Google Drive (mais adiante explicamos como).

Como isso não pode ser feito dentro do repositório público do AndroidAPS, você precisa fazer a sua cópia pessoal do código-fonte (chamada fork).

## Conta GitHub

Você precisa [criar uma conta GitHub](https://github.com/signup) se ainda não tiver uma.  
Você pode se cadastrar com o seu e-mail ou com a sua conta Google. Siga o processo de cadastro e verificação.

Quando tiver uma conta, [entre no GitHub](https://github.com/login).

## Faça o fork do AndroidAPS

Abra o repositório oficial do AndroidAPS por [este link](https://github.com/nightscout/AndroidAPS).

Toque no ícone de fork. Isso cria uma cópia dentro da sua própria conta.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Role a próxima tela para baixo e toque em **Create Fork**.

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Observação: você pode **desmarcar** "Copy the master branch only" se quiser compilar versões de desenvolvimento ou personalizações.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
Você não consegue fazer o fork e vê isto?</br></br>
**`No available destinations to fork this repository.`**</br></br>
![Fork já existe](../images/Building-the-App/CI/ForkAAPS3b.png)</br></br>
Isso significa que você já tem um fork do AndroidAPS.</br>
Garanta que ele esteja atualizado e continue com os passos de preparação.
```

```{warning}
**Nunca apague o seu fork sem antes fazer um backup dos seus secrets!**
```

Agora o GitHub mostra a sua cópia pessoal do AndroidAPS. Deixe esta aba do navegador aberta.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Próxima etapa: [Etapa 2 – Crie a sua keystore de assinatura](BrowserBuildKeystore.md) →**
