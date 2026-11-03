(github-fork)=

# Tarayıcı ile oluşturma – Adım 1: GitHub fork'unuzu oluşturun

```{note}
Bu, [Tarayıcı ile oluşturma](BrowserBuild.md) yönteminin **Adım 1**'idir.
```

Kişisel Android Java anahtarınızı ve Google Drive bilgilerinizi GitHub'da gizli bilgi (secret) olarak saklamanız gerekecek (bunun nasıl yapılacağını ilerleyen adımlarda açıklayacağız).

Bu, AndroidAPS'in herkese açık deposunda yapılamaz. Bu yüzden kaynak kodun size ait bir kopyasını (fork) oluşturmanız gerekir.

## GitHub hesabı

Henüz bir GitHub hesabınız yoksa [bir GitHub hesabı oluşturmanız](https://github.com/signup) gerekir.  
E-posta adresinizle veya Google ile kaydolabilirsiniz. Kayıt ve doğrulama adımlarını izleyin.

Hesabınız olduğunda [GitHub'da oturum açın](https://github.com/login).

## AndroidAPS'in fork'unu oluşturun

Resmî AndroidAPS deposunu [bu bağlantıdan](https://github.com/nightscout/AndroidAPS) açın.

Fork simgesine dokunun. Bu, kendi hesabınızda bir kopya oluşturur.

![fork_aaps](../images/Building-the-App/CI/ForkAAPS.png)

Sonraki ekranda aşağı kaydırın ve **Create Fork** (fork oluştur) düğmesine dokunun.

![fork_aaps_confirm](../images/Building-the-App/CI/ForkAAPS2.png)

*Not: Geliştirici sürümleri veya özelleştirmeler oluşturmak isterseniz "Copy the master branch only" (yalnızca master dalını kopyala) seçeneğinin **işaretini kaldırabilirsiniz**.*

![fork_aaps_main](../images/Building-the-App/CI/ForkAAPS3.png)

```{note}
Fork oluşturamıyor ve bunu mu görüyorsunuz?<br/><br/>
**`No available destinations to fork this repository.`**<br/><br/>
![Zaten fork'unuz var](../images/Building-the-App/CI/ForkAAPS3b.png)<br/><br/>
Bu, AndroidAPS'in bir fork'una zaten sahip olduğunuz anlamına gelir.<br/>
Fork'unuzun güncel olduğundan emin olun ve hazırlık adımlarıyla devam edin.
```

```{warning}
**Secret'larınızın yedeğini almadan fork'unuzu asla silmeyin!**
```

GitHub artık AndroidAPS'in size ait kopyasını gösterir. Bu tarayıcı sekmesini açık bırakın.

![forked_aaps](../images/Building-the-App/CI/ForkAAPS4.png)

----

**Sonraki: [Adım 2 – İmzalama anahtar deponuzu oluşturun](BrowserBuildKeystore.md) →**
