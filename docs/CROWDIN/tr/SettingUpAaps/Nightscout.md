# Nightscout

(Nightscout-security-considerations)=

## Güvenlik Hususları

Nightscout, **AAPS**'in raporlama ve izleme sunucusudur: **AAPS** verilerinizi buraya yükler, siz veya bakım verenleriniz de bu verilere Nightscout web sitesinden veya takipçi uygulamalarından bakarsınız. Nightscout tıbbi verilerinizi, profillerinizi ve tedavilerinizi içerir. Bu yüzden Nightscout web sitenizi güvenli hale getirmeyi düşünmeniz önemlidir.

**AAPS** 4'te uzaktan kontrol Nightscout web sitesi üzerinden yapılmaz. İstemci kontrolü açıkken ([güçlendirilmiş mod](#client-master-control-hardened-mode)), doğrudan Nightscout'a girilen tedaviler veya hedefler **AAPS** tarafından **uygulanmaz**. Uzaktan komutlar bunun yerine eşleştirilmiş bir **AAPSClient**'tan gelir — bkz. [Ana birim ↔ İstemci kontrolü](#client-master-control).

Nightscout'u AAPS KŞ veri kaynağınız olarak kullanıyorsanız son derece dikkatli olun.

### Nightscout ayarları

[Kimlik doğrulama rollerini](https://nightscout.github.io/nightscout/security) kullanarak Nightscout sitenize genel erişimi engelleyebilirsiniz: URL'nizi yalnızca `readable` belirteciyle paylaşın, asla `admin` belirteciyle paylaşmayın.

Nightscout `API_SECRET`, sitenizin ana parolasıdır: bunu herkesle paylaşmayın.

(Nightscout-aaps-settings)=

### AAPS settings

Nightscout'tan veri kabul etmek (profil değişiklikleri, tedaviler, ...) isteğe bağlıdır ve varsayılan olarak kapalıdır. Aşağıda anlatılan anahtarlar, istemci kontrolü açıkken (güçlendirilmiş mod) ve [basit modda](#preferences-simple-mode) gizlenir.

* NSClientV3 eklentisinin **Senkronizasyon** ayarlarına şu yollardan biriyle ulaşın: 1) **Ayarlar** (ana ekrandaki dişli simgesi) -> **NSClientV3** -> **Senkronizasyon** veya 2) **Konfigürasyon** (☰ menüsü) -> **İletişim** -> NSClientV3 altındaki "**Ayarlar**".
* "Verileri NS'ye yükle" seçeneğini etkinleştirin.
* "KŞ verilerini Nightscout'a yükle" seçeneği KŞ kaynağınızın ayarlarındadır (**Konfigürasyon → KŞ kaynağı → Ayarlar**). AAPS KŞ veri kaynağınız Nightscout değilse bu seçeneği etkinleştirin. KŞ veri kaynağınız Nightscout ise bu seçeneği **etkinleştirmeyin**.
* Nightscout KŞ veri kaynağınız değilse "NS'den CGM verilerini al" seçeneğini etkinleştirmeyin.

#### Nightscout'tan senkronizasyon yapmayın

Tüm "NS'den … al" seçeneklerini kapalı tutmak, hiçbir Nightscout değişikliğinin AAPS tarafından kullanılmamasını sağlar:

![Nightscout upload only](../images/preferences/settings_nsclient_sync.png)

#### Nightscout'tan gelen değişiklikleri kabul edin

Bu seçenekleri etkinleştirmek, AAPS ayarlarını Nightscout üzerinden değiştirmenize olanak tanır. Örneğin profil düzenlemeleri ve profil değişimi, geçici hedefler ve karbonhidrat ekleme AAPS tarafından dikkate alınır. Bu seçenekler yalnızca istemci kontrolü ve basit mod kapalıyken gösterilir.  
İnsülin tedavilerinin yalnızca "Bolus yalnızca kaydedilecektir (pompa ile iletilmez)" gibi hesaplamalar için kullanılacağını unutmayın.

![Nightscout alma seçenekleri etkin](../images/NSsafety3.png)

### Diğer güvenlik ayarları

Telefonunuzu [önce güvenlik](#preparing-safety-first) bölümünde anlatıldığı gibi güncel tutun.

(Nightscout-manual-nightscout-setup)=

## Manuel Nightscout kurulumu

Zaten bir Nightscout siteniz olduğu varsayılır. Yoksa, kurulumla ilgili tüm talimatlar için [Nightscout](http://nightscout.github.io/nightscout/new_user/) sayfasını ziyaret edin. Aşağıdaki talimatlar, Nightscout sitenize ayrıca eklemeniz gereken ayarlardır. Nightscout sitenizin en az 15. sürüm olması gerekir. Bu yüzden [en son sürümü](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) kullandığınızı kontrol edin, aksi halde AAPS uygulamanızda bir hata mesajı alırsınız.

* [Değişkenlerinizi düzenleyin](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* Değişkenleri aşağıdaki gibi ekleyin veya düzenleyin:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * [Pompayı izlemek](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring) için çeşitli alarmlar ayarlanabilir, özellikle pil yüzdesi önerilir: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* Değişiklikleri kaydedin. Nightscout siteniz artık bilgi kutucuklarını (pills) gösterebilmelidir. Bunları `SHOW_PLUGINS` içine ekleyerek varsayılan olarak gösterilmelerini sağlayabilirsiniz.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Nightscout bilgi kutucukları (pills)](../images/nightscout1.png)

## Ücretli SaaS (Hizmet Olarak Yazılım) olarak Nightscout

Değişkenleri ayarlamak için hizmet sağlayıcının web arayüzünü kullanın. Gerekirse hizmet sağlayıcının destek servisiyle iletişime geçin.