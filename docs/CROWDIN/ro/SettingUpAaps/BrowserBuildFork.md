(github-fork)=

# Browser build – Step 1: Create your GitHub fork

```{note}
This is **Step 1** of the [Browser build](BrowserBuild.md).
```

Va trebui să salvați în GitHub, ca secrete, cheia Android Java personală și informațiile Google Drive (vă explicăm mai târziu cum).

Since this cannot be done inside the public repository of AndroidAPS, you need to make your personal copy of the source code (called a fork).

## Cont GitHub

You need to [create a GitHub account](https://github.com/signup) if you don't have one yet.  
You can sign up with your email, or you can sign up with Google. Follow the registration and verification process.

Când aveți un cont, [conectați-vă la GitHub](https://github.com/login).

## Fork AndroidAPS

Deschideți depozitul oficial AndroidAPS folosind [acest link](https://github.com/nightscout/AndroidAPS).

Apăsați pictograma fork. This will create a copy inside your own account.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Scroll down the next screen and tap **Create Fork**.

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Notă: puteți **debifa** „Copy the master branch only” (copiați numai ramura master) dacă veți vrea să construiți versiuni pentru dezvoltatori sau versiuni personalizate.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
Nu puteți face fork și vedeți acest mesaj?<br/><br/>
**`No available destinations to fork this repository.`**<br/><br/>
![Fork existent](../images/Building-the-App/CI/ForkAAPS3b.png)<br/><br/>
Înseamnă că aveți deja un fork al AndroidAPS.<br/>
Asigurați-vă că este actualizat și continuați cu pașii de pregătire.
```

```{warning}
**Never delete your fork without having done a backup of your secrets!**
```

GitHub afișează acum copia dumneavoastră personală a AndroidAPS. Leave this web browser tab open.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Next: [Step 2 – Create your signing keystore](BrowserBuildKeystore.md) →**
