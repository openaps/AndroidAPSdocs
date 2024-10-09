# Git yükleyin

## Windows

### 1. Git'i indir

- **Android Studio çeşitli güncellemeler indirdiği için her zaman çevrimiçi olmanız gerekir!**
- Any git version should work. Örneğin [https://git-scm.com/download/win](https://git-scm.com/download/win).
- Kurulum yerini not ettiğinizden emin olun. Bir sonraki adımda ihtiyacınız olacak.

```{admonition} make git.exe available via Windows PATH
:class: note

Make sure that you can call git.exe without the prefing path as Android Studio needs this to find git.exe. It will then automatically sets the path to git.exe correct in the Android Studio settings.

```

![Git installation path](../images/Update_GitPath.png)

### 2. Android Studio'da git yolunu ayarla

- Dosyayı Aç > Ayarlar

  ![Android Studio - open settings](../images/Update_GitSettings1.png)

- Alt menüyü açmak için Sürüm Kontrolü (1.) yanındaki küçük üçgene tıklayın.

- Git'e tıklayın (2.).

- Güncelleme yönteminin "Merge" (3.) seçili olduğundan emin olun.

- "Test" düğmesine tıklayarak Android Studio'nun git.exe yolunu otomatik olarak bulup bulamayacağını kontrol edin (4.)

  ![Android Studio settings](../images/AndroidStudio361_09.png)

- Otomatik ayar başarılı olursa git versiyonu görüntülenecektir.

- İletişim kutusunda (1.) "OK" ve ayarlar penceresinde (2.) "OK" düğmesini tıklayın.

  ![Automatic git installation succeeded](../images/AndroidStudio361_10.png)

- Git.exe dosyasının bulunamaması durumunda iletişim kutusundaki (1.) "OK" ve ardından üç noktalı (2.) düğmeyi tıklayın.

- Git'in nereye kurulduğundan emin değilseniz, "git.exe"yi bulmak için Windows Gezgini'nde [arama işlevini](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) kullanın. \bin\ klasöründe bulunan git.exe'yi arıyoruz.

- git.exe yolunu seçin ve **\\bin\\** klasöründeki yolu (3.) seçtiğinizden emin olun ve "OK"e (4.) tıklayın.

- "OK" butonuna (5.) tıklayarak ayarlar penceresini kapatın.

  ![Automatic git installation failed](../images/AndroidStudio361_11.png)

### 3. Yeniden başlat

- Sistemi güncellemek için bilgisayarınızı yeniden başlatın.

(git-install-check-git-settings-in-android-studio)=
### 4. Android Studio'da git ayarlarını kontrol edin

- Android Studio'da Terminal penceresini açın

- `git --version` girin (tırnak işaretleri olmadan ve iki - \[eksi işareti\]! arasında boşluk bırakmadan!) ve Return tuşuna basın

  ![git - -version](../images/AndroidStudio_gitversion1.png)

- Git düzgün bir şekilde kurulur ve bağlanırsa, kurulu sürüm hakkında aşağıdaki gibi görünen bir bilgi alacaksınız:

  ![result git-version](../images/AndroidStudio_gitversion2.png)

## Mac

- Any git version should work. Örneğin [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
- Git'i kurmak için homebrew kullanın: `` `$ brew install git` ``.
- For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- If you install git via homebrew there is no need to change any preferences. Just in case: They can be found here: Android Studio - Preferences.
