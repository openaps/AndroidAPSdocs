(aaps-ci-option2)=

# Seçenek 2 – Mevcut anahtar deponuzu yükleyin

```{note}
Bu, [Tarayıcı ile oluşturma](BrowserBuild.md) sürecindeki [Adım 2 – İmzalama anahtar deponuzu oluşturun](BrowserBuildKeystore.md) adımının bir parçasıdır. [Seçenek 1 ile Seçenek 2 arasındaki kararı](#aaps-ci-preparation) okuduğunuzdan emin olun.
```

Seçenek 2, daha önce bir bilgisayarda Android Studio ile AAPS oluştururken yaptığınız JKS dosyasını yeniden kullanır. Zaten bir JKS dosyası olan ve JKS parolasını ve takma adını (alias) bilen kullanıcılar için uygundur.

`KEYSTORE_PASSWORD`, `KEY_ALIAS` ve `KEY_PASSWORD` için GitHub'a gerçek parolanızı ve takma adınızı girin: Android Studio'da kullandıklarınızı. Bunları nerede kullandığınızı aşağıda görebilirsiniz.

```{warning}
**Özel karakter içeren parolalar.** Parolalarınızı tam olarak oldukları gibi girin. Ters eğik çizgi (backslash) veya başka bir kaçış karakteri eklemeyin: oluşturma iş akışı her karakteri olduğu gibi korur ve eklenen ters eğik çizgi parolanın bir parçası olur.

Oluşturma yine de imzalama adımında başarısız olursa ve parolanızda `$`, ters tırnak (backtick), `"` veya `\` varsa, fork'unuzdaki iş akışı dosyası eskidir. [Fork'unuzu en son dev dalı ile eşitleyin](#Update-to-new-version-update-your-repo) ve oluşturmayı yeniden çalıştırın. Bkz. [Tarayıcı ile oluşturma: sorun giderme](#aaps-ci-password-special-characters).
```

```{admonition} KEY + PASSWORDS
:class: dropdown

![Parolaları hatırlama](../images/Building-the-App/044_RememberPwd.png)
```

## Cihazınızı seçin

```{tip}
**Android telefondan** mı oluşturuyorsunuz? Bunun yerine [AAPS Builder](BrowserBuildAapsBuilder.md) kullanın: hazırlık dosyası gerektirmez.
```

Oluşturmayı yaptığınız cihaza uyan sayfayı izleyin:

- **[Bilgisayar](BrowserBuildO2Computer.md)** – Windows, Mac veya Linux.

```{tip}
Cihazı istediğiniz zaman değiştirebilirsiniz: yalnızca uygun sayfayı açın.
```

```{toctree}
:hidden:

Bilgisayar <BrowserBuildO2Computer.md>
```
