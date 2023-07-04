# Dokümanlar nasıl düzenlenir

**Bu açıklama yalnızca İngilizce belgeleri düzenlemek içindir. Tüm yeni bilgiler önce İngilizce olarak eklenmelidir. Diğer dillere çeviri yapmak istiyorsanız (teşekkür ederim), lütfen [crowdin](https://crowdin.com/project/androidapsdocs) kullanın.**

Metnin nasıl biçimlendirileceğine (başlık, kalın...) ve bağlantıların ayarlanmasına ilişkin ipuçları için lütfen bu sayfanın ["code syntax"](make-a-PR-code-syntax) bölümüne bakın.

## Genel

Herhangi bir sorunuz, geri bildiriminiz veya yeni fikirleriniz için [discord](https://discord.gg/4fQUWHZ4Mw) aracılığıyla dokümantasyon ekibiyle iletişime geçebilirsiniz. Çekme isteği yapmak zor değil, belgeleri düzenlemenize yardımcı olabiliriz.

Bir noktada bir çekme isteği (PR) yapmanız önerilecektir. PR, çekme isteğinin kısaltmasıdır ve GitHub'da depolanan bilgileri eklemenin veya düzenlemenin bir yoludur. Aslında bir tane yapmak çok zor değil ve katkıda bulunmak için harika bir yol. Bu dokümantasyonlar, sizin gibi insanlar PR'lar yaptığı için burada. Bir hata yapmaktan veya bir şekilde yanlış dokümantasyonu düzenlemekten endişe etmeyin. Değişiklikler "resmi" AAPS belge deposunda birleştirilmeden önce her zaman bir inceleme süreci vardır. PR sürecindeki herhangi bir kazayla orijinalleri bozamazsınız. Genel PR prosesi:

* Mevcut içeriği düzenleyerek kod veya dokümanlarda düzenlemeler ve iyileştirmeler yapın.
* Düzenlemelerinizin iyi görünüp görünmediğini bir kez daha kontrol edin.
* İnsanların düzenlemeleri anlayabilmesi için nelerin değiştiğine dair birkaç not alın.
* Yöneticilerden değişikliklerinizi kullanmalarını isteyen bir çekme isteği oluşturun.
* Bir inceleme yapacaklar ve (1) değişikliklerinizi birleştirecekler, (2) değişiklikleriniz hakkında size geri dönüş yapacaklar veya (3) değişikliklerinizle yeni bir doküman başlatacaklar.

(Yan not: Görsel öğrenen biriyseniz, [burada](https://youtu.be/4b6tsL0_kzg) PR iş akışını gösteren bir YouTube videosu mevcuttur.)

Örneğimizde AndroidAPSdocs'ta bir düzenleme yapacağız. Bunun sadece bilgisayarınızdaki linux ortamında yapılması GEREKMEZ. Bu, herhangi bir Windows PC, Mac, vb. üzerinde yapılabilir. (İnternet erişimi olan herhangi bir bilgisayar).

1. https://github.com/openaps/AndroidAPSdocs adresine gidin ve havuzun kendi kopyasını oluşturmak için sağ üstteki Fork'a basın.

![çatal deposu](./images/PR0.png)

2. Herhangi bir sayfaya giderek ve düzenlemek istediğiniz dokümana ulaşın. Sayfanın sol alt kısmında yeşil "v: en son" veya benzeri bir kelime bulunan kara kutuya tıklayın. Görünen açılır pencerede GitHub'da düzenlemek için "düzenle" kelimesini tıklayın. 

![dokümanı düzenle](./images/PR1.png)

Veya sağ üst köşedeki "GitHub'da Düzenle" bağlantısına tıklayabilir ve ardından düzenlenecek sayfa içeriğinin üst çubuğunda görünen kalem simgesine tıklayabilirsiniz.

![RTD io](./images/PR2.png)

3. Adım 2'deki seçeneklerden biri veya diğeri, düzenlemelerinizin kaydedileceği deponuzda yeni bir dal oluşturacaktır. Bu dosyada düzenlemelerinizi yapabilirsiniz.

We are using markdown for the docs pages. The file have got the suffix ".md".The Markdown specification is not fixed and we use at the moment the myst_parser for our markdown files. Take care to use the correct syntax as [described below](make-a-PR-code-syntax).

![Edit branch](./images/PR3.png)

4. "<>Dosyayı düzenle" sekmesinde çalışıyorsunuz. Değiştirdiğiniz her şeyin istediğiniz gibi göründüğünden emin olmak için yeni bir görünüm için "Preview changes" "Değişiklikleri önizle" sekmesini seçin (yazım hataları vs.). Gerekli bir iyileştirme görürseniz, daha fazla iyileştirme yapmak için düzenleme sekmesine geri dönün. 

![preview mode](./images/PR5.png)

5. Düzenlemelerinizi bitirdiğinizde, sayfanın en altına gidin. Alttaki kutuda, "İsteğe bağlı bir genişletilmiş açıklama ekleyin..." yazan metin alanına yorumlarınızı girin. Varsayılan başlık dosya adıdır. Değişikliğin **nedenini** açıklayan bir cümle eklemeye çalışın. Nedeni ilişkilendirmek, gözden geçirenlerin PR ile ne yapmaya çalıştığınızı anlamasına yardımcı olur.

![commit comments](./images/PR4.png)

6. Yeşil "Dosya değişiklikleri öner" veya "Değişiklikleri kabul et" düğmesini tıklayın. Açılan sayfada "Create Pull Request" "Çekme Talebi Oluştur" u tıklayın ve sonraki sayfada tekrar "Çekme Talebi Oluştur" u tıklayın.

![create pull request](./images/PR6.png)

7. Bu, bir çekme isteğinin (PR) açılmasını tamamlar. GitHub, PR'ye başlıktan sonra bulunan bir sayı ve bir kare işaret atar. Geri bildirimi kontrol etmek için bu sayfaya dönün (veya size e-postayla GitHub bildirimleri gönderildiyse, PR ile ilgili herhangi bir etkinlik hakkında bilgilendiren e-postalar alacaksınız). Düzenleme şimdi, ekibin AAPS için ana belgelere geçmeden önce gözden geçireceği ve potansiyel olarak geri bildirimde bulunacağı bir PR listesinde olacak! PR'nin ilerlemesini kontrol etmek isterseniz, GitHub hesabınızın sağ üst köşesindeki zil logosuna tıklayıp tüm PR'lerinizi görebilirsiniz.

![PR tracking](./images/PR7.png)

Not: Çatalınız (fork) ve şubeniz (branch) hala kendi kişisel GitHub hesabınızda kalıyor olacak. PR'nizin birleştiğine dair bir bildirim aldıktan sonra, işiniz bittiyse şubenizi silebilirsiniz (Adım 8'in bildirim alanı, kapatıldığında veya birleştiğinde şubeyi silmek için bir bağlantı sağlayacaktır). Gelecekteki düzenlemeler için, bu prosedürü izlerseniz, düzenlemeler her zaman AndroidAPSdocs depolarının güncellenmiş bir sürümüyle başlayacaktır. Bir PR isteği başlatmak için başka bir yöntem kullanmayı seçerseniz (örneğin, başlangıç noktası olarak çatallı deponuzun ana dalından başlayarak düzenleme), önce bir "karşılaştırma" gerçekleştirerek ve çatalınızı en son güncellemenizden bu yana gerçekleşen tüm güncellemeleri birleştirerek deponuzun güncel olduğundan emin olmanız gerekir. İnsanlar depolarını güncellemeyi unutmaya meyilli olduğundan, "karşılaştırma" yapmaya alışana kadar yukarıda özetlenen PR sürecini kullanmanızı öneririz.

(make-a-PR-code-syntax)=

## Sözdizimi kodları

We are using markdown for the docs pages. The files have got the suffix ".md".

Markdown is a very simple text formating language which separates text content from text formating.

The writer only e.g. marks a headline as level 1 headline and the markdown processor generate during processing the necessary HTML code to render the heading in HTML.

The idea behind this is that

* the writer should think about the text and not the formating first,
* the markdown text is open for exchange between different markdown tools instead of e.g. proprietray tools like Mircosoft Windows and
* you can generate several output formats from one markdown file.

Markdown is not a 100% fixed standard and we try to stay as near as possible to the standard to

* stay flexible to change markdown tools as needed or forced in the further innovation of markdown tools and markdown SaaS services and
* enable us to use a transaltion services to translate the english language in a target language like French or German because they can work on markdown but not complex formating codes because they can't separate there content from layout which might be fatal.

### Headlines

* Headline 1: `# headline`
* Headline 2: `## headline`
* Headline 3: `### headline`
* Headline 4: `#### headline`

We try to avoid further leveles of headlines.

### Text format

* bold: `**text**`
* italic: `*text*`

### ordered list

:::

1. birinci
2. ikinci
3. üçüncü :::

4. birinci

5. ikinci
6. üçüncü

### sırasız liste

:::

* bir öğe
* başka bir öğe
* va başka bir öğe :::

* bir öğe

* başka bir öğe
* ve başka bir öğe

### çok seviyeli liste

Bir sonraki düzeyi bir öncekinden 4 boşluk daha sağda girintileyerek listelere ilave liste ekleyebilirsiniz.

:::

1. birinci
2. ikinci
3. üçüncü 
    1. bir öğe
    2. başka bir öğe
    3. ve başka bir öğe
4. dört
5. beş
6. six :::

7. birinci

8. ikinci
9. üçüncü 
    1. bir öğe
    2. başka bir öğe
    3. ve başka bir öğe
10. dört
11. beş
12. altı

### Görseller

Görüntüleri dahil etmek için bu işaretleme sözdizimini kullanırsınız.

* images: `![alt text](../images/file.png)`

The type of image should be PNG or JPEG.

Images names should confirm to one of following naming rules. In the example I use png as suffix. In case you use JPEG please replace it with jpeg.

* `filename-image-xx.png` where xx is a unique double digit number for the images in this file.
* `filename-image-xx.png` where xx is a meaning full name for the author of the md file.

Images are located in the images folder for the english language and propagated to the other languages automatically by Crowdin. You have nothing to do for this!

We are not translating images at the moment.

(make-a-PR-image-size)= Use a reasonable size for the images which must be readable on PC, tablet and mobiles.

* Screenshots from web pages images should be up to **1050 pixels wide**.
* Diagramms of process flows should be up to **1050 pixels wide**.
* Screenshots from the app should be up to **300 to 400 pixels wide**.

### Links

#### External links

External links are links to external web sites.

* external link: `[alt text](www.url.tld)`

#### Internal links to the start of a md file

Internal links to pages are links to the start of a md file which is hosted on our own server.

* internal link to .md page: `[alt text](../folder/file.md)`

#### Internal links to named inline refernces

Internal links to named inline refernces are links to any point in a md file which is hosted on our own server and where a reference was set to link to.

Add a named reference at the location in the target md file you want to jump to.

`(name-of-my-md-file-this-is-my-fancy-named-reference)=`

The named reference must be unique in the whole AndroidAPSDocs md files and not only the own md file it resides in!

Therefore it is a good practice to start with the filename and then the reference name you select.

Use only lowercase letters and hyphenate words.

Then link this refernce in the text you are writing with the following kind of link.

* Internal links to named inline refernces: `[alt text](name-of-my-md-file-this-is-my-fancy-named-reference)`

### Notes, Warnings, Collapsing Notes

You can add notes and warning boxes to documentation.

Furthermore you can add collapsing notes for detailed information which would users who are not interested in the details quench to read the text at all. Please use these carefully as the documentation should be as easy to read as possible.

#### Notes

:::: :::{admonition} Note :class: note

This is a note. ::: ::::

:::{admonition} Note :class: note

This is a note. :::

#### Uyarılar

:::: :::{admonition} Warning :class: warning

This is a warning. ::: ::::

:::{admonition} Warning :class: warning

This is a warning. :::

#### Collapsing Notes

:::: :::{admonition} further detailed readings for interested readers :class: dropdown

This admonition has been collapsed, meaning you can add longer form content here, without it taking up too much space on the page. ::: ::::

:::{admonition} further detailed readings for interested readers :class: dropdown

This admonition has been collapsed, meaning you can add longer form content here, without it taking up too much space on the page. :::