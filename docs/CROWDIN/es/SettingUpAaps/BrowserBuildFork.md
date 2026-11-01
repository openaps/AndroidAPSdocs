(github-fork)=

# Compilación en el navegador – Paso 1: crear tu fork de GitHub

```{note}
Este es el **Paso 1** de la [Compilación en el navegador](BrowserBuild.md).
```

You will need to store your personal Android Java Key and Google Drive information as secrets in GitHub (later in the process, we will explain how).

Como esto no se puede hacer en el repositorio público de AndroidAPS, necesitas hacer tu copia personal del código fuente (llamada fork).

## Cuenta de GitHub

Si todavía no tienes una cuenta de GitHub, [crea una cuenta de GitHub](https://github.com/signup).  
Puedes registrarte con tu correo electrónico o con Google. Sigue el proceso de registro y verificación.

Cuando tengas una cuenta, [inicia sesión en GitHub](https://github.com/login).

## Hacer un fork de AndroidAPS

Abre el repositorio oficial de AndroidAPS con [este enlace](https://github.com/nightscout/AndroidAPS).

Toca el icono de fork. Esto crea una copia dentro de tu propia cuenta.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Desplázate hacia abajo en la siguiente pantalla y toca **Create Fork**.

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Note: you can **unselect** "Copy the master branch only" if you will want to build developer versions or customizations.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
You cannot fork and you see this?<br/><br/>
**`No available destinations to fork this repository.`**<br/><br/>
![Already forked](../images/Building-the-App/CI/ForkAAPS3b.png)<br/><br/>
This means you already have an existing fork of AndroidAPS.<br/>
Make sure it's up to date and continue to Preparation Steps.
```

```{warning}
**¡Nunca borres tu fork sin haber hecho antes una copia de seguridad de tus secretos!**
```

Ahora GitHub muestra tu copia personal de AndroidAPS. Deja abierta esta pestaña del navegador.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Siguiente: [Paso 2 – Crear tu almacén de claves de firma](BrowserBuildKeystore.md) →**
