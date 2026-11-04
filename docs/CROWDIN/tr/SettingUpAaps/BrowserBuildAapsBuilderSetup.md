(aaps-builder-setup)=

# AAPS Builder kurulum sayfası

Kendi **AAPS** uygulamanızı GitHub'da oluşturun. Yüklenecek program yok, terminal yok. İlk seferde yaklaşık 10 dakika sürer, sonra her oluşturmayı kendiniz başlatırsınız.

Her adım, ekran görüntüleriyle birlikte [AAPS Builder ile tarayıcıda oluşturma](#aaps-builder) sayfasında daha ayrıntılı açıklanır. O sayfayı başka bir sekmede açık tutun.

Aşağıdaki düğmeler GitHub'ı yeni bir Chrome sekmesinde açar. Bu sayfaya geri dönmek için Chrome'un adres çubuğunun yanındaki sekme düğmesine (içinde sayı olan kare) dokunun ve bu sayfayı seçin.

(aaps-builder-setup-step1)=

## Adım 1 – Özel oluşturma deponuzu oluşturun

Bu, GitHub hesabınızda AAPS Builder'ın size ait özel bir kopyasını oluşturur: oluşturma iş akışı zaten içinde olan bir depo. Onu ve oluşturduğu uygulamaları yalnızca siz görebilirsiniz. AndroidAPS'i fork etmeniz **gerekmez**: AAPS kaynak kodu her oluşturmada resmi AndroidAPS deposundan indirilir.

<label class="aapsb-label" for="aapsb-user">Your GitHub username (GitHub kullanıcı adınız)</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Önce bu tarayıcıda github.com'da oturum açın (hesabınız yok mu? ücretsiz bir hesap oluşturun). Sonra buraya geri dönün. E-posta adresinizi değil, kullanıcı adınızı (GitHub profilinizde gösterilir) kullanın: sayfa, bu kullanıcı adının var olup olmadığını GitHub'a sorar.

<label class="aapsb-label" for="aapsb-repo">Name of your repository (Deponuzun adı)</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Öneriyi olduğu gibi bırakın. Deponuzu daha önce başka bir adla mı oluşturdunuz? Buraya tam olarak o adı yazın.

```{note}
**Zaten bir AAPS Builder deponuz var mı** (bu sayfanın önceki bir sürümüyle oluşturulmuş)? Yeni bir tane oluşturmayın: tam adını buraya yazın, aşağıdaki düğmeyi atlayın ve iş akışını bir kez güncelleyin: bu adımın sonundaki **Updating your copy** (kopyanızı güncelleme) bölümüne bakın. Secret'larınız olduğu gibi kalır.

Yine de yeni bir depo istiyorsanız henüz sahip olmadığınız bir ad seçin, örneğin `my-aaps-2`, ve 2. adımda aynı anahtar deposunu kullanın.

AndroidAPS fork'unuzun adını yazmayın: fork herkese açıktır ve zaten kendi **AAPS CI** iş akışıyla oluşturma yapar.
```

Your repository (Deponuz): <code class="aapsb-repoUrl"></code>

Aşağıdaki düğmeleri kullanmadan önce bu adı kontrol edin: sayfa, son ziyaretinizdeki adı hatırlar.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Create my private repository (Özel depomu oluştur)</a>

Açılan GitHub sayfasında her şey zaten doldurulmuştur: `nightscout/aaps-builder` şablonu, sahip olarak hesabınız, deponuzun adı ve **Private** (özel). Hiçbir şeyi değiştirmeyin ve **Include all branches** (tüm dalları dahil et) seçeneğini işaretsiz bırakın.

1. Yeşil **Create repository** (depo oluştur) düğmesine tıklayın.
2. GitHub yeni deponuzu bir `.github` klasörü ve bir `README.md` dosyasıyla gösterir: oluşturma iş akışı bu klasörün içindedir. 2. adım için bu sayfaya geri dönün.

```{admonition} Your new repository is empty (no files)?
:class: warning

Depo şablondan oluşturulmamış. Onu silin (**Settings** → sayfanın en altı → **Delete this repository**), ardından yeniden **Create my private repository** düğmesine dokunun.
```

```{admonition} GitHub says "my-aaps already exists in this account"?
:class: tip

You already have your repository: close the GitHub tab and go on with this page. If your key is already in it, continue with [step 4](#aaps-builder-setup-step4). See [troubleshooting](#aaps-builder-ts-repo-exists).
```

```{admonition} Updating your copy (existing AAPS Builder repository)
:class: dropdown

Oluşturma adımları sizin için güncellenir: deponuz her oluşturmada AAPS geliştiricilerinin nightscout/aaps-builder içinde yayınladığı sürümü çalıştırır ve deponuzda hiçbir şey değişmez. İş akışı dosyanızı yalnızca [Doküman güncellemeleri & değişiklikleri](../Maintenance/DocumentationUpdate.md) bunu duyurduğunda (örneğin yeni bir oluşturma varyantı için) değiştirirsiniz; ya da deponuz bu sayfanın önceki bir sürümüyle veya eski şablondan oluşturulduysa bir kez değiştirirsiniz. `KEYSTORE_SET` secret'ınız olduğu gibi kalır.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Open the newest workflow (En yeni iş akışını aç)</a>

   Bilgisayarda, dosyanın sağ üst köşesindeki **kopyalama simgesine** ("Copy raw file") tıklayın. Telefonda bunun yerine <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">düz metin sürümünü</a> açın, metne basılı tutun → **Tümünü seç** → **Kopyala**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Open my workflow file</a>

   Opens `.github/workflows/build.yml` in <code class="aapsb-repoUrl"></code>. Tap the **⋯** menu at the top right of the file, then **Edit file… In place** (on a computer, click the pencil).
3. Tüm metni kopyaladığınız iş akışıyla değiştirin (telefonda: basılı tutun → **Tümünü seç** → **Yapıştır**), ardından **Commit changes…** düğmesine iki kez tıklayın. Dosyanın ilk satırı sürümünü gösterir.
```

(aaps-builder-setup-step2)=

## Adım 2 – İmzalama anahtarınız

Uygulama kendi anahtarınızla imzalanmalıdır. Her zaman aynı anahtarı kullanın, aksi halde güncellemek için AAPS'i kaldırmanız gerekir (ve ayarlarını kaybedersiniz). İki sekmeden birini seçin.

`````{tab-set}

````{tab-item} I already have a keystore (Zaten bir anahtar deposum var)
Örneğin Android Studio'dan (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Keystore file (Anahtar deposu dosyası)</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Keystore password (Anahtar deposu parolası)</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Key alias (Anahtarın takma adı)</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Key password is the same as the keystore password (Anahtar parolası, anahtar deposu parolasıyla aynı)</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Key password (Anahtar parolası)</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Check and continue (Kontrol et ve devam et)</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Create a new key (Yeni bir anahtar oluştur)
AAPS'i ilk kez mi oluşturuyorsunuz? Yeni bir anahtar burada, tarayıcınızda oluşturulur. Hiçbir yere bir şey gönderilmez.

<label class="aapsb-label" for="aapsb-newPass">Choose a password (at least 8 characters, no accented letters) (Bir parola seçin: en az 8 karakter, aksanlı harf yok)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Repeat the password (Parolayı tekrarlayın)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Create key (Anahtar oluştur)</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Anahtarınızın bir yedeğini kaydedin!**

Dosyayı indirin. Bu üçünü birlikte, telefonunuzun dışında güvenli bir yerde saklayın (örneğin kendi bulut depolamanızda):

- `aaps-keystore.jks` dosyası
- parolanız
- anahtarın takma adı (alias): **`key0`**

AAPS'i bir gün başka bir yolla, örneğin Android Studio ile oluşturursanız bu üçüne de ihtiyacınız olacak.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Download backup (aaps-keystore.jks) (Yedeği indir)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## Adım 3 – Anahtarı deponuza verin
<span id="aapsb-s3wait">Önce 2. adımı bitirin.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Open the secrets page (Secrets sayfasını aç)</a> Açılacak adres: <code class="aapsb-repoUrl"></code> "Page not found" (Sayfa bulunamadı, 404) hatası mı alıyorsunuz? Önce bu tarayıcıda github.com'da oturum açtığınızı kontrol edin: oturum açmadığınızda GitHub, özel depolar için 404 gösterir. Aksi halde 1. adımdaki kullanıcı adınız veya depo adınız deponuzla eşleşmiyordur: bunları github.com'da kontrol edin ve 1. adıma yazın. 2. "Copy name" (Adı kopyala) düğmesine dokunun, sonra adı küçük "Name" (Ad) alanına yapıştırın: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Copy name (Adı kopyala)</button> 3. "Copy secret" (Secret'ı kopyala) düğmesine dokunun, sonra uzun kodu büyük "Secret" kutusuna yapıştırın: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Copy secret (Secret'ı kopyala)</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Secret çok uzun bir koddur (binlerce karakter), KEYSTORE_SET kelimesi DEĞİLDİR. Önce adı, sonra uzun kodu kopyalayıp yapıştırın. 4. "Add secret" (Secret ekle) düğmesine dokunun. Bitti, bunu bir daha yapmanız gerekmez.
</div>
(aaps-builder-setup-step4)=
## Adım 4 – Uygulamayı oluşturun

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Open the build page (Oluşturma sayfasını aç)</a>

   Açılacak adres: <code class="aapsb-repoUrl"></code>

   "Page not found" (Sayfa bulunamadı, 404) hatası mı alıyorsunuz? Önce bu tarayıcıda github.com'da oturum açtığınızı kontrol edin: oturum açmadığınızda GitHub, özel depolar için 404 gösterir. Aksi halde 1. adımdaki kullanıcı adınız veya depo adınız deponuzla eşleşmiyordur: bunları github.com'da kontrol edin ve 1. adıma yazın. Onun yerine GitHub uygulaması mı açıldı? "RUN WORKFLOW" düğmesine dokunun, sürümü ve varyantı kontrol edin ve yeniden "RUN WORKFLOW" düğmesine dokunun. Uygulama hâlâ "Nothing to see here" (burada görülecek bir şey yok) gösteriyorsa, oluşturmanızı görmek için listeyi aşağı çekin.
2. İstenirse, iş akışlarını etkinleştirmek için yeşil düğmeye tıklayın.
İş akışları listesinde iki öğe vardır: "Build AAPS" öğesini kullanın. "AAPS Builder" öğesini dikkate almayın: oluşturma adımlarını içerir ve "Run workflow" düğmesi yoktur.
3. "Run workflow" seçeneğine, ardından yeşil "Run workflow" düğmesine tıklayın. "latest" en yeni AAPS sürümünü oluşturur. ***ipucu:*** *"latest" yerine başka bir sürümün [etiket (tag)](https://github.com/nightscout/AndroidAPS/tags) adını yazarak o sürümü oluşturabilirsiniz*
4. Yaklaşık 15–30 dakika bekleyin. Yeşil onay işareti, oluşturmanın bittiği anlamına gelir.
Oluşturma bitince e-posta almak ister misiniz? GitHub size yalnızca bir oluşturma başarısız olduğunda e-posta gönderir. Başarılı olduğunda da e-posta almak için: github.com'da profil resminizi açın → Settings → Notifications → System → Actions ve "Only notify for failed workflows" (yalnızca başarısız iş akışları için bildir) işaretini kaldırın.

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Deponuzu açın ve `workflows/build.yml` dosyasını içeren bir `.github` klasörü olduğunu kontrol edin. Depo boşsa şablondan oluşturulmamıştır: onu silin (**Settings** → sayfanın en altı → **Delete this repository**) ve düğmeyle [1. adımı](#aaps-builder-setup-step1) yeniden yapın.
2. The file is there, but GitHub shows "This workflow does not exist": see [troubleshooting](#aaps-builder-ts-workflow-not-found).
3. Actions sekmesini açın. İş akışlarının devre dışı olduğunu söylüyorsa, onları etkinleştirmek için yeşil düğmeye tıklayın. Ardından listede "Build AAPS" öğesine tıklayın.
```

(aaps-builder-setup-step5)=

## Adım 5 – Telefonunuza yükleyin

```{admonition} Before every update: back up your settings!
:class: warning

1. AAPS'te: Bakım → Ayarları dışa aktar. (Bunu zaten düzenli olarak yapın, örneğin bir profil değişikliğinden sonra veya ayda bir.)
2. Dışa aktarılan dosyayı telefonun DIŞINA kopyalayın, örneğin Google Drive'a veya Dropbox'a. Yalnızca telefonda duran bir yedek, telefonla birlikte kaybolur.
3. APK dosyalarını ve birkaç eski dışa aktarma dosyasını da orada saklayın. Böylece her zaman geri dönebilirsiniz.

[Ayarlar nasıl dışa aktarılır](#ExportImportSettings-Settings-Export) · [AAPS SSS: yedekler nasıl düzenlenir](#FAQ-organize-backups)
```

1. Bu sayfayı telefonunuzda, web tarayıcısında (Chrome) açın. İstenirse github.com'a giriş yapın.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Open my builds (Oluşturmalarımı aç)</a>

   Onun yerine GitHub uygulaması mı açıldı? Uygulama oluşturmaları indiremez. Uygulamada en yeni oluşturmayı açın ve "Artifacts ↗" öğesine dokunun ya da paylaş simgesine dokunup Chrome'u seçin (veya "Copy link" (bağlantıyı kopyala) seçeneğine dokunup bağlantıyı Chrome'un adres çubuğuna yapıştırın). Chrome'da devam edin.

   "Page not found" (Sayfa bulunamadı, 404) hatası mı alıyorsunuz? Önce bu tarayıcıda github.com'da oturum açtığınızı kontrol edin: oturum açmadığınızda GitHub, özel depolar için 404 gösterir. Aksi halde 1. adımdaki kullanıcı adınız veya depo adınız deponuzla eşleşmiyordur: bunları github.com'da kontrol edin ve 1. adıma yazın.

   GitHub bağlantılarının uygulamada açılmasını durdurmak için: Android Ayarlar → Uygulamalar → GitHub → Varsayılan olarak aç → "Desteklenen bağlantıları aç" seçeneğini kapatın.
3. Yeşil onay işaretli ✅ en yeni oluşturmaya dokunun.
4. Oluşturma özetine kadar aşağı kaydırın ve büyük "📱 Download AAPS …" bağlantısına dokunun (veya "Artifacts" bölümüne kadar daha aşağı kaydırıp aaps-….apk dosyasına dokunun). Parmağınızla oluşturma adımlarının şeması üzerinde değil, metin üzerinde kaydırın.
5. İndirme bitince dosyaya dokunun ve Install (Yükle) seçeneğini seçin. İstenirse bu kaynaktan uygulama yüklenmesine izin verin.
6. aaps-wear-….apk bir akıllı saat içindir. Akıllı saat kullanmıyorsanız onu atlayın.

APK, deponuzda "Code" altında gösterilmez, yalnızca oluşturma sayfasında gösterilir. 14 gün boyunca saklanır.

Yeni AAPS sürümü mü çıktı? Ayarlarınızı yedekleyin, ardından yeni sürümü [4. adımla](#aaps-builder-setup-step4) oluşturun. Deponuz kendi kendine hiçbir şey oluşturmaz.

(aaps-builder-setup-step6)=

## Adım 6 – İsteğe bağlı: uygulamayı Google Drive'a da kaydedin

APK'nın Google Drive'ınızda da görünmesini (süresiz saklanır) ister misiniz? Bir secret daha ekleyin: GDRIVE_OAUTH2. Bu sayfa onu sizin için Google'dan alır. Böylece AAPS, Google Drive'ınızda yalnızca kendi oluşturduğu dosyaları görebilir ve değiştirebilir, başka hiçbir şeyi değil.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Connect Google Drive (Google Drive'ı bağla)</a>

   Google yeni bir sekmede açılır. Google hesabınızı seçin ve AAPS'in kendi dosyalarını görmesine ve değiştirmesine izin verin. Google uygulamanın doğrulanmadığını söylerse "Advanced" (Gelişmiş), ardından "Go to …" (… sitesine git) seçeneğine dokunun.
2. Ardından yeni sekme **"This site can't be reached"** (bu siteye ulaşılamıyor) veya **"127.0.0.1 refused to connect"** (127.0.0.1 bağlanmayı reddetti) gibi bir hata gösterir. **Bu beklenen bir durumdur.** Google'ın yanıtı o sekmenin adresindedir.

   Tap the address bar of that tab, then the copy icon next to the address (on a computer: select the whole address and copy it). Adres `http://127.0.0.1:47913/` ile başlar. Birkaç dakika içinde bu sayfaya geri dönün: yanıt yalnızca kısa bir süre geçerlidir.
3. <label class="aapsb-label" for="aapsb-googleUrl">Paste the copied address here (Kopyalanan adresi buraya yapıştırın)</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Get GDRIVE_OAUTH2 (GDRIVE_OAUTH2'yi al)</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Open the secrets page (Secrets sayfasını aç)</a>

   Açılacak adres: <code class="aapsb-repoUrl"></code>

   "Page not found" (Sayfa bulunamadı, 404) hatası mı alıyorsunuz? Önce bu tarayıcıda github.com'da oturum açtığınızı kontrol edin: oturum açmadığınızda GitHub, özel depolar için 404 gösterir. Aksi halde 1. adımdaki kullanıcı adınız veya depo adınız deponuzla eşleşmiyordur: bunları github.com'da kontrol edin ve 1. adıma yazın.
5. "Copy name" (Adı kopyala) düğmesine dokunun, sonra adı küçük "Name" (Ad) alanına yapıştırın: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Copy name (Adı kopyala)</button>
6. "Copy secret" (Secret'ı kopyala) düğmesine dokunun, sonra kodu büyük "Secret" kutusuna yapıştırın: <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Copy secret (Secret'ı kopyala)</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. "Add secret" (Secret ekle) düğmesine dokunun.

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

Diğer tarayıcı ile oluşturma yönteminin AAPS hazırlık sayfasından alınan bir değer de çalışır: secrets sayfasını açın, `GDRIVE_OAUTH2` adını ekleyin ve değerinizi yapıştırın. Bkz. [Oluşturmaları Google Drive'a kaydetme](#aaps-builder-google-drive).
```

Bir sonraki oluşturmada APK'lar Google Drive'da AAPS/&lt;version&gt; klasörüne de kaydedilir.

6 ay boyunca oluşturma yapmazsanız veya Google parolanızı değiştirirseniz Google erişimi durdurur. Oluşturma bunu size bildirir: bu adımı yeniden yapın.

----

Bu sayfadaki her şey tarayıcınızda çalışır. Anahtarınız ve parolalarınız, kendiniz yapıştırdığınız yerler dışında hiçbir yere gönderilmez. GitHub'a yalnızca GitHub kullanıcı adınız gönderilir; bu, kullanıcı adının var olup olmadığını kontrol etmek içindir. 6. adımda Google'ın yanıtı yalnızca Google'a, GDRIVE_OAUTH2'yi almak için gönderilir. Oluşturma iş akışı, AAPS geliştiricileri tarafından [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder) içinde, AAPS Builder (AGPL-3.0) temel alınarak sürdürülür.

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Long code copied: paste it in the big "Secret" box, then tap "Add secret". (Uzun kod kopyalandı: büyük "Secret" kutusuna yapıştırın, sonra "Add secret" düğmesine dokunun.)</span>
- <span data-aapsb-msg="copiedName">Name copied: paste it in the small "Name" field. (Ad kopyalandı: küçük "Name" alanına yapıştırın.)</span>
- <span data-aapsb-msg="userOk">✓ GitHub user found. (GitHub kullanıcısı bulundu.)</span>
- <span data-aapsb-msg="userBad">✗ No GitHub user with this name. (Bu adla bir GitHub kullanıcısı yok.) Use your username (shown in your GitHub profile), not your e-mail. (E-posta adresinizi değil, GitHub profilinizde gösterilen kullanıcı adınızı kullanın.)</span>
- <span data-aapsb-msg="copiedShort">Copied ✓ (Kopyalandı)</span>
- <span data-aapsb-msg="needUser">Enter your GitHub username in step 1 first. (Önce 1. adımda GitHub kullanıcı adınızı girin.)</span>
- <span data-aapsb-msg="errPipe">Passwords and alias cannot contain the character | (Parolalar ve takma ad | karakterini içeremez)</span>
- <span data-aapsb-msg="errNoFile">Choose your keystore file. (Anahtar deposu dosyanızı seçin.)</span>
- <span data-aapsb-msg="errEmpty">Fill in password and alias. (Parolayı ve takma adı doldurun.)</span>
- <span data-aapsb-msg="errPass">Wrong keystore password. (Anahtar deposu parolası yanlış.)</span>
- <span data-aapsb-msg="errKeyPass">Wrong key password. (Anahtar parolası yanlış.)</span>
- <span data-aapsb-msg="errAlias">Alias not found in the keystore. (Takma ad anahtar deposunda bulunamadı.) Available (Mevcut olanlar): {aliases}</span>
- <span data-aapsb-msg="errFormat">This does not look like a keystore file. (Bu bir anahtar deposu dosyasına benzemiyor.)</span>
- <span data-aapsb-msg="okHave">Keystore OK! (Anahtar deposu tamam!) Continue with step 3. (3. adımla devam edin.)</span>
- <span data-aapsb-msg="okHaveUnchecked">Keystore read. (Anahtar deposu okundu.) The password will be checked when you build. (Parola, oluşturma sırasında kontrol edilecek.) Continue with step 3. (3. adımla devam edin.)</span>
- <span data-aapsb-msg="errShort">The password must be at least 8 characters. (Parola en az 8 karakter olmalıdır.)</span>
- <span data-aapsb-msg="errAscii">Use only a–z, A–Z, 0–9 and symbols such as ! ? # – no spaces, no accented letters and not | (Yalnızca a–z, A–Z, 0–9 ve ! # gibi simgeler kullanın: boşluk, aksanlı harf ve | olmamalı.)</span>
- <span data-aapsb-msg="errMatch">The passwords do not match. (Parolalar eşleşmiyor.)</span>
- <span data-aapsb-msg="working">Creating key… (Anahtar oluşturuluyor…)</span>
- <span data-aapsb-msg="okNew">Key created. (Anahtar oluşturuldu.) Download the backup below, then continue with step 3. (Aşağıdaki yedeği indirin, sonra 3. adımla devam edin.)</span>
- <span data-aapsb-msg="gNoUrl">Paste the whole address of the Google tab first. (Önce Google sekmesinin adresinin tamamını yapıştırın.)</span>
- <span data-aapsb-msg="gNoCode">This address has no answer from Google. (Bu adreste Google'dan bir yanıt yok.) Copy the whole address of the tab that shows the error, starting with http://127.0.0.1:47913/ (Hatayı gösteren sekmenin adresinin tamamını, en baştan başlayarak kopyalayın)</span>
- <span data-aapsb-msg="gDenied">Google access was not allowed. (Google erişimine izin verilmedi.) Tap "Connect Google Drive" again and allow access. ("Connect Google Drive" düğmesine yeniden dokunun ve erişime izin verin.)</span>
- <span data-aapsb-msg="gOldUrl">This address belongs to an older attempt. (Bu adres daha eski bir denemeye ait.) Tap "Connect Google Drive" again and use the new address. ("Connect Google Drive" düğmesine yeniden dokunun ve yeni adresi kullanın.)</span>
- <span data-aapsb-msg="gWorking">Asking Google… (Google'a soruluyor…)</span>
- <span data-aapsb-msg="gFailed">Google did not accept it ({error}). (Google bunu kabul etmedi.) The answer is valid only for a few minutes and only once: tap "Connect Google Drive" again. (Yanıt yalnızca birkaç dakika ve yalnızca bir kez geçerlidir: "Connect Google Drive" düğmesine yeniden dokunun.)</span>
- <span data-aapsb-msg="gNoRefresh">Google sent no long-term access. (Google uzun süreli erişim göndermedi.) Tap "Connect Google Drive" again. ("Connect Google Drive" düğmesine yeniden dokunun.)</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2 is ready. (GDRIVE_OAUTH2 hazır.) Add it as a secret below. (Aşağıda secret olarak ekleyin.)</span>
- <span data-aapsb-msg="gCopied">Code copied: paste it in the big "Secret" box, then tap "Add secret". (Kod kopyalandı: büyük "Secret" kutusuna yapıştırın, sonra "Add secret" düğmesine dokunun.)</span>

</div>

<style>
  .rst-content .aapsb-label { display: block; font-weight: 700; margin: 14px 0 4px; }
  .rst-content .aapsb-input { display: block; width: 100%; max-width: 480px; padding: 8px 10px; font: inherit; border: 1px solid #ccc; border-radius: 4px; }
  .rst-content .aapsb-check { display: flex; gap: 8px; align-items: center; margin-top: 10px; }
  .rst-content .aapsb-btn, .rst-content a.aapsb-btn:visited {
    display: inline-block; margin: 4px 0; padding: 8px 16px; border-radius: 4px; border: 1px solid #2980b9; cursor: pointer;
    background: #2980b9; color: #fff; font: inherit; font-weight: 700; text-decoration: none;
  }
  .rst-content .aapsb-btn:hover { background: #1f6391; color: #fff; }
  .rst-content .aapsb-btn.aapsb-secondary, .rst-content a.aapsb-btn.aapsb-secondary:visited { background: transparent; color: #2980b9; }
  .rst-content .aapsb-btn.aapsb-secondary:hover { background: #e7f2fa; }
  .rst-content .aapsb-btn:disabled { opacity: .45; cursor: not-allowed; }
  .rst-content .aapsb-msg { display: inline-block; margin-left: 6px; }
  .rst-content .aapsb-msg.ok { color: #1a7f37; } .rst-content .aapsb-msg.err { color: #cf222e; } .rst-content .aapsb-msg.warn { color: #9a6700; }
  .rst-content .aapsb-box { background: #e7f2fa; border-radius: 4px; padding: 12px 14px; margin: 12px 0; }
  .rst-content section.aapsb-done > h2::after { content: " ✓"; color: #1a7f37; }
  .rst-content [hidden] { display: none !important; }
</style>

<script src="../_static/aaps-builder/aaps-builder.forge.min.js"></script>
<script>
// AAPS Builder setup page logic. Walks the user through creating a private copy of the
// github.com/nightscout/aaps-builder template (the build workflow is in it) and creating the
// KEYSTORE_SET secret. The repository then builds AAPS from the official source,
// github.com/nightscout/AndroidAPS, with GitHub Actions.
//
// The keystore and passwords never leave this browser. The only requests are asking GitHub's
// public API whether the typed username exists (only the name is sent) and, in the optional
// Google Drive step, sending Google's one-time answer to Google's token endpoint. The page's
// Content-Security-Policy (set in docs/shared.conf.py) allows only the AAPS documentation site
// itself, https://api.github.com and https://oauth2.googleapis.com/token.
//
// Based on AAPS Builder by the AAPS Builder authors (github.com/dio99/aaps-builder), GNU Affero
// General Public License v3.0 (AGPL-3.0). Modified for the AAPS documentation: texts in the page
// so they can be translated, workflow maintained in github.com/nightscout/aaps-builder.
// Vendor library: _static/aaps-builder/aaps-builder.forge.min.js = node-forge 1.3.1
// (BSD-3-Clause or GPL-2.0), https://github.com/digitalbazaar/forge, the unmodified
// dist/forge.min.js of the npm package node-forge@1.3.1.
(() => {
  const TEMPLATE = { owner: 'nightscout', name: 'aaps-builder' };
  const REPO_NAME = 'my-aaps';
  const WORKFLOW_PATH = '.github/workflows/build.yml';       // where the template puts it

  const $ = id => document.getElementById('aapsb-' + id);
  // The texts are in the page (hidden list above), so they are translated with it.
  const M = {};
  document.querySelectorAll('[data-aapsb-msg]').forEach(el => { M[el.dataset.aapsbMsg] = el.textContent.trim(); });
  const t = (key, vars = {}) => M[key].replace(/\{(\w+)\}/g, (all, k) => k in vars ? vars[k] : all);
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
  };
  const done = step => { const el = document.getElementById('aaps-builder-setup-step' + step); if (el) el.closest('section').classList.add('aapsb-done'); };

  // ---------- step 1: links ----------
  const userInput = $('user');
  userInput.value = store.get('ghUser') || '';
  const user = () => userInput.value.trim().replace(/^@/, '');
  const repoInput = $('repo');
  repoInput.value = store.get('ghRepo') || REPO_NAME;
  const repo = () => repoInput.value.trim() || REPO_NAME;

  const LINKS = [
    ['openWorkflowFile', '/blob/HEAD/' + WORKFLOW_PATH],
    ['openSecrets', '/settings/secrets/actions/new'],
    ['openSecrets2', '/settings/secrets/actions/new'],
    ['openActions', '/actions/workflows/build.yml'],
    ['openRuns', '/actions/workflows/build.yml']
  ];

  function updateLinks() {
    const u = user();
    store.set('ghUser', u);
    store.set('ghRepo', repo());
    // GitHub's own "Use this template" page, with its documented prefill parameters: the copy is
    // private and contains the build workflow. owner=@me is the signed-in user.
    const p = new URLSearchParams({ template_owner: TEMPLATE.owner, template_name: TEMPLATE.name,
                                    owner: '@me', name: repo(), visibility: 'private' });
    $('createRepo').href = 'https://github.com/new?' + p;
    document.querySelectorAll('.aapsb-repoUrl').forEach(el => { el.textContent = `github.com/${u || '…'}/${repo()}`; });
    const base = `https://github.com/${encodeURIComponent(u)}/${encodeURIComponent(repo())}`;
    for (const [id, path] of LINKS) $(id).href = u ? base + path : '#aaps-builder-setup-step1';
  }
  userInput.addEventListener('input', updateLinks);
  // Check that the username exists (GitHub's public API, sends only the name)
  let userTimer;
  async function checkUser() {
    const u = user();
    if (!u) { $('userMsg').textContent = ''; return; }
    try {
      const r = await fetch(`https://api.github.com/users/${encodeURIComponent(u)}`);
      if (u !== user()) return;
      if (r.status === 200) msg('userMsg', t('userOk'), 'ok');
      else if (r.status === 404) msg('userMsg', t('userBad'), 'err');
      else $('userMsg').textContent = '';
    } catch { $('userMsg').textContent = ''; }
  }
  userInput.addEventListener('input', () => { clearTimeout(userTimer); userTimer = setTimeout(checkUser, 600); });
  repoInput.addEventListener('input', updateLinks);
  for (const [id] of LINKS) {
    $(id).addEventListener('click', e => { if (!user()) { e.preventDefault(); userInput.focus(); alert(t('needUser')); } });
  }
  $('createRepo').addEventListener('click', () => done(1));

  // ---------- helpers ----------
  const utf8 = s => new TextEncoder().encode(s);
  function bytesToB64(bytes) {
    let s = '';
    for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(s);
  }
  const binStrToBytes = s => Uint8Array.from(s, c => c.charCodeAt(0));
  const sha1 = async (...parts) => {
    const all = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
    let o = 0; for (const p of parts) { all.set(p, o); o += p.length; }
    return new Uint8Array(await crypto.subtle.digest('SHA-1', all));
  };
  const eq = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
  // JKS uses the password as UTF-16BE bytes
  const utf16be = s => { const b = new Uint8Array(s.length * 2); for (let i = 0; i < s.length; i++) { b[2*i] = s.charCodeAt(i) >> 8; b[2*i+1] = s.charCodeAt(i) & 255; } return b; };

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); }
    catch {
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy'); ta.remove();
    }
  }
  function msg(id, text, cls) { const el = $(id); el.className = 'aapsb-msg ' + cls; el.textContent = text; }

  let secretValue = null;
  function setSecret(ksBytes, storePass, alias, keyPass) {
    const raw = [bytesToB64(ksBytes), storePass, alias, keyPass].join('|');
    secretValue = bytesToB64(utf8(raw));
    $('secretPreview').textContent = secretValue.slice(0, 16) + '…';
    done(2);
    $('s3wait').hidden = true;
    $('s3ready').hidden = false;
  }

  // ---------- step 2a: existing keystore ----------
  function parseJks(bytes) {
    const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    if (v.getUint32(0) !== 0xFEEDFEED) return null;
    let o = 12; const n = v.getUint32(8); const entries = [];
    const readUtf = () => { const len = v.getUint16(o); o += 2; const s = new TextDecoder().decode(bytes.subarray(o, o + len)); o += len; return s; };
    const skipCert = () => { if (v.getUint32(4) === 2) readUtf(); const len = v.getUint32(o); o += 4 + len; };
    for (let i = 0; i < n; i++) {
      const tag = v.getUint32(o); o += 4;
      const alias = readUtf(); o += 8;
      if (tag === 1) {
        const len = v.getUint32(o); o += 4;
        const key = bytes.subarray(o, o + len); o += len;
        const chain = v.getUint32(o); o += 4;
        for (let c = 0; c < chain; c++) skipCert();
        entries.push({ alias, key });
      } else { skipCert(); }
    }
    return { entries, body: bytes.subarray(0, o), digest: bytes.subarray(o, o + 20) };
  }

  // Sun JKS KeyProtector: verify key password without fully decrypting
  async function jksKeyPassOk(encKeyInfo, pass) {
    // EncryptedPrivateKeyInfo: SEQ { AlgId, OCTET STRING data }
    const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, encKeyInfo)));
    const data = binStrToBytes(asn.value[1].value);
    const salt = data.subarray(0, 20), enc = data.subarray(20, data.length - 20), check = data.subarray(data.length - 20);
    const pw = utf16be(pass);
    const plain = new Uint8Array(enc.length);
    let d = salt;
    for (let off = 0; off < enc.length; off += 20) {
      d = await sha1(pw, d);
      for (let j = 0; j < 20 && off + j < enc.length; j++) plain[off + j] = enc[off + j] ^ d[j];
    }
    return eq(await sha1(pw, plain), check);
  }

  let haveBytes = null, haveKind = null, haveJks = null;
  $('ksFile').addEventListener('change', async () => {
    const f = $('ksFile').files[0]; $('haveMsg').textContent = '';
    if (!f) return;
    haveBytes = new Uint8Array(await f.arrayBuffer());
    haveJks = null; haveKind = null;
    try { haveJks = parseJks(haveBytes); } catch { haveJks = null; }
    if (haveJks) {
      haveKind = 'jks';
      const sel = $('ksAliasSel');
      sel.innerHTML = '';
      haveJks.entries.forEach(e => sel.add(new Option(e.alias, e.alias)));
      if (haveJks.entries.length > 0) {
        sel.hidden = false; $('ksAlias').hidden = true; $('ksAlias').value = haveJks.entries[0].alias;
        sel.onchange = () => { $('ksAlias').value = sel.value; };
      }
    } else if (haveBytes[0] === 0x30) {
      haveKind = 'p12';
      $('ksAliasSel').hidden = true; $('ksAlias').hidden = false;
    } else {
      msg('haveMsg', t('errFormat'), 'err');
    }
  });
  $('samePass').addEventListener('change', () => { $('keyPassWrap').hidden = $('samePass').checked; });

  $('haveGo').addEventListener('click', async () => {
    const pass = $('ksPass').value, alias = $('ksAlias').value.trim();
    const keyPass = $('samePass').checked ? pass : $('keyPass').value;
    if (!haveBytes) return msg('haveMsg', t('errNoFile'), 'err');
    if (!haveKind) return msg('haveMsg', t('errFormat'), 'err');
    if (!pass || !alias || !keyPass) return msg('haveMsg', t('errEmpty'), 'err');
    if ([pass, alias, keyPass].some(s => s.includes('|'))) return msg('haveMsg', t('errPipe'), 'err');

    try {
      if (haveKind === 'jks') {
        const d = await sha1(utf16be(pass), utf8('Mighty Aphrodite'), haveJks.body);
        if (!eq(d, haveJks.digest)) return msg('haveMsg', t('errPass'), 'err');
        const entry = haveJks.entries.find(e => e.alias.toLowerCase() === alias.toLowerCase());
        if (!entry) return msg('haveMsg', t('errAlias', { aliases: haveJks.entries.map(e => e.alias).join(', ') }), 'err');
        if (!(await jksKeyPassOk(entry.key, keyPass))) return msg('haveMsg', t('errKeyPass'), 'err');
        setSecret(haveBytes, pass, entry.alias, keyPass);
        return msg('haveMsg', t('okHave'), 'ok');
      }
      // PKCS12
      let p12;
      try {
        const asn = forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, haveBytes)));
        p12 = forge.pkcs12.pkcs12FromAsn1(asn, pass);
      } catch (e) {
        if (/password|MAC/i.test(String(e && e.message))) return msg('haveMsg', t('errPass'), 'err');
        // Could not parse locally; let the build validate it
        setSecret(haveBytes, pass, alias, keyPass);
        return msg('haveMsg', t('okHaveUnchecked'), 'warn');
      }
      const names = [...new Set(p12.safeContents.flatMap(sc => sc.safeBags.flatMap(b => (b.attributes.friendlyName || []))))];
      if (names.length && !names.some(n => n.toLowerCase() === alias.toLowerCase())) {
        return msg('haveMsg', t('errAlias', { aliases: names.join(', ') }), 'err');
      }
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHave'), 'ok');
    } catch (e) {
      console.error(e);
      setSecret(haveBytes, pass, alias, keyPass);
      msg('haveMsg', t('okHaveUnchecked'), 'warn');
    }
  });

  // ---------- step 2b: new keystore ----------
  // Use the browser's cryptographic RNG for everything forge needs (salts, IVs, serial)
  forge.random.getBytesSync = n => String.fromCharCode.apply(null, crypto.getRandomValues(new Uint8Array(n)));
  forge.random.getBytes = (n, cb) => cb ? cb(null, forge.random.getBytesSync(n)) : forge.random.getBytesSync(n);
  let newKsBytes = null;
  $('newGo').addEventListener('click', async () => {
    const p1 = $('newPass').value, p2 = $('newPass2').value;
    if (p1.length < 8) return msg('newMsg', t('errShort'), 'err');
    if (p1 !== p2) return msg('newMsg', t('errMatch'), 'err');
    if (!/^[\x21-\x7e]+$/.test(p1) || p1.includes('|')) return msg('newMsg', t('errAscii'), 'err');
    $('newGo').disabled = true;
    msg('newMsg', t('working'), '');
    try {
      const kp = await crypto.subtle.generateKey(
        { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
        true, ['sign', 'verify']);
      const pkcs8 = new Uint8Array(await crypto.subtle.exportKey('pkcs8', kp.privateKey));
      const key = forge.pki.privateKeyFromAsn1(forge.asn1.fromDer(forge.util.createBuffer(String.fromCharCode.apply(null, pkcs8))));
      const cert = forge.pki.createCertificate();
      cert.publicKey = forge.pki.setRsaPublicKey(key.n, key.e);
      cert.serialNumber = '01' + forge.util.bytesToHex(forge.random.getBytesSync(8));
      cert.validity.notBefore = new Date();
      cert.validity.notAfter = new Date(); cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 50);
      const subject = [{ name: 'commonName', value: 'AAPS' }];
      cert.setSubject(subject); cert.setIssuer(subject);
      cert.sign(key, forge.md.sha256.create());
      const asn = forge.pkcs12.toPkcs12Asn1(key, [cert], p1, { algorithm: '3des', friendlyName: 'key0', generateLocalKeyId: true });
      newKsBytes = binStrToBytes(forge.asn1.toDer(asn).getBytes());
      setSecret(newKsBytes, p1, 'key0', p1);
      $('backupBox').hidden = false;
      msg('newMsg', t('okNew'), 'ok');
    } catch (e) {
      console.error(e);
      msg('newMsg', String(e), 'err');
      $('newGo').disabled = false;
    }
  });
  $('downloadKs').addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([newKsBytes], { type: 'application/octet-stream' }));
    a.download = 'aaps-keystore.jks';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  // ---------- step 6: Google Drive access (GDRIVE_OAUTH2) ----------
  // The same Google OAuth client, scope and PKCE flow as the AAPS preparation page
  // (github.com/nightscout/aaps-ci-preparation), so the build workflow reads the value the same
  // way: base64(client_id|refresh_token). Google sends the browser to a loopback address where
  // nothing listens: the tab shows an error, but its address holds the answer. The user copies that
  // address here, and this page sends the code to Google's token endpoint, and nowhere else.
  // The PKCE verifier stays in this tab, so the code is useless to anything else that sees it.
  const GOOGLE_CLIENT_ID = '705061051276-5ssikkg2ag39l7hj9t63saq549n3s2n5.apps.googleusercontent.com';
  const GOOGLE_REDIRECT = 'http://127.0.0.1:47913/aaps-builder';
  const session = {
    get: k => { try { return sessionStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { sessionStorage.setItem(k, v); } catch {} }
  };
  const randomHex = n => [...crypto.getRandomValues(new Uint8Array(n))].map(b => b.toString(16).padStart(2, '0')).join('');
  const b64url = bytes => bytesToB64(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  // The link is ready before the tap, so the browser opens it as a normal link and does not
  // block it as a pop-up.
  async function setGoogleLink(verifier, state) {
    const challenge = b64url(new Uint8Array(await crypto.subtle.digest('SHA-256', utf8(verifier))));
    const p = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID, redirect_uri: GOOGLE_REDIRECT, response_type: 'code',
      scope: 'https://www.googleapis.com/auth/drive.file', access_type: 'offline',
      // consent: Google sends a refresh token only when the user is asked, also after an earlier grant
      prompt: 'consent', code_challenge_method: 'S256', code_challenge: challenge, state
    });
    $('googleAuth').href = 'https://accounts.google.com/o/oauth2/v2/auth?' + p;
  }
  // A new attempt: new verifier and state
  function newGoogleAttempt() {
    const verifier = randomHex(32), state = randomHex(16);
    session.set('gVerifier', verifier);
    session.set('gState', state);
    return setGoogleLink(verifier, state);
  }
  // Keep the attempt of this tab if the page is reloaded while the user is in the Google tab
  if (session.get('gVerifier') && session.get('gState')) setGoogleLink(session.get('gVerifier'), session.get('gState'));
  else newGoogleAttempt();

  let gdriveValue = null;
  $('googleGo').addEventListener('click', async () => {
    const text = $('googleUrl').value.trim();
    if (!text) return msg('googleMsg', t('gNoUrl'), 'err');
    let params;
    try { params = new URL(text).searchParams; } catch { return msg('googleMsg', t('gNoCode'), 'err'); }
    if (params.get('error')) return msg('googleMsg', t('gDenied'), 'err');
    const code = params.get('code');
    if (!code) return msg('googleMsg', t('gNoCode'), 'err');
    if (params.get('state') !== session.get('gState')) return msg('googleMsg', t('gOldUrl'), 'err');
    $('googleGo').disabled = true;
    msg('googleMsg', t('gWorking'), '');
    try {
      const r = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: GOOGLE_CLIENT_ID, code, code_verifier: session.get('gVerifier'),
          grant_type: 'authorization_code', redirect_uri: GOOGLE_REDIRECT
        })
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        msg('googleMsg', t('gFailed', { error: data.error || r.status }), 'err');
        await newGoogleAttempt();
        return;
      }
      if (!data.refresh_token) { msg('googleMsg', t('gNoRefresh'), 'err'); await newGoogleAttempt(); return; }
      gdriveValue = bytesToB64(utf8(GOOGLE_CLIENT_ID + '|' + data.refresh_token));
      $('gdrivePreview').textContent = gdriveValue.slice(0, 16) + '…';
      $('gdriveReady').hidden = false;
      $('googleUrl').value = '';
      msg('googleMsg', t('gOk'), 'ok');
      done(6);
      await newGoogleAttempt();      // the code is used up; a new tap starts a new attempt
    } catch (e) {
      console.error(e);
      msg('googleMsg', t('gFailed', { error: String(e) }), 'err');
    } finally {
      $('googleGo').disabled = false;
    }
  });

  // ---------- step 3 / 6: copy secret names and values ----------
  document.querySelectorAll('[data-aapsb-copy]').forEach(b => b.addEventListener('click', async () => {
    const kind = b.dataset.aapsbCopy;
    const values = { name: 'KEYSTORE_SET', gdrive: 'GDRIVE_OAUTH2', secret: secretValue, gdriveValue };
    await copyText(values[kind]);
    if (kind === 'secret') msg('copyMsg', t('copied'), 'ok');
    if (kind === 'name') msg('copyMsg', t('copiedName'), 'ok');
    if (kind === 'gdriveValue') msg('gdriveCopyMsg', t('gCopied'), 'ok');
    const label = b.textContent;
    b.textContent = t('copiedShort');
    setTimeout(() => { b.textContent = label; }, 2000);
  }));

  updateLinks();
  checkUser();
})();
</script>
