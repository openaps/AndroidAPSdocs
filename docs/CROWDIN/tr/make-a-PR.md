# Dokümanlar nasıl düzenlenir

**Bu açıklama yalnızca İngilizce belgeleri düzenlemek içindir. Tüm yeni bilgiler önce İngilizce olarak eklenmelidir. Diğer dillere çeviri yapmak istiyorsanız (teşekkür ederim), lütfen [crowdin](https://crowdin.com/project/androidapsdocs) kullanın.**

Metnin nasıl biçimlendirileceğine (başlık, kalın...) ve bağlantıların ayarlanmasına ilişkin ipuçları için lütfen bu sayfanın ["code syntax"](make-a-PR-code-syntax) bölümüne bakın.

## Genel

Herhangi bir sorunuz, geri bildiriminiz veya yeni fikirleriniz için [discord](https://discord.gg/4fQUWHZ4Mw) aracılığıyla dokümantasyon ekibiyle iletişime geçebilirsiniz. Çekme isteği yapmak zor değil, belgeleri düzenlemenize yardımcı olabiliriz.

Bir noktada bir çekme isteği (PR) yapmanız önerilecektir. PR, çekme isteğinin kısaltmasıdır ve GitHub'da depolanan bilgileri eklemenin veya düzenlemenin bir yoludur. Aslında bir tane yapmak çok zor değil ve katkıda bulunmak için harika bir yol. Bu dokümantasyonlar, sizin gibi insanlar PR'lar yaptığı için burada. Bir hata yapmaktan veya bir şekilde yanlış dokümantasyonu düzenlemekten endişe etmeyin. Değişiklikler "resmi" AAPS belge deposunda birleştirilmeden önce her zaman bir inceleme süreci vardır. PR sürecindeki herhangi bir kazayla orijinalleri bozamazsınız. Genel PR prosesi:

- Mevcut içeriği düzenleyerek kod veya dokümanlarda düzenlemeler ve iyileştirmeler yapın.
- Düzenlemelerinizin iyi görünüp görünmediğini bir kez daha kontrol edin.
- İnsanların düzenlemeleri anlayabilmesi için nelerin değiştiğine dair birkaç not alın.
- Yöneticilerden değişikliklerinizi kullanmalarını isteyen bir çekme isteği oluşturun.
- Bir inceleme yapacaklar ve (1) değişikliklerinizi birleştirecekler, (2) değişiklikleriniz hakkında size geri dönüş yapacaklar veya (3) değişikliklerinizle yeni bir doküman başlatacaklar.

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

- the writer should think about the text and not the formating first,
- the markdown text is open for exchange between different markdown tools instead of e.g. proprietray tools like Mircosoft Windows and
- you can generate several output formats from one markdown file.

Markdown is not a 100% fixed standard and we try to stay as near as possible to the standard to

- stay flexible to change markdown tools as needed or forced in the further innovation of markdown tools and markdown SaaS services and
- enable us to use a transaltion services to translate the english language in a target language like French or German because they can work on markdown but not complex formating codes because they can't separate there content from layout which might be fatal.

### Headlines

- Headline 1: `# headline`
- Headline 2: `## headline`
- Headline 3: `### headline`
- Headline 4: `#### headline`

We try to avoid further leveles of headlines.

### Text format

- bold: `**text**`
- italic: `*text*`

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

- bir öğe
- başka bir öğe
- va başka bir öğe :::

- bir öğe

- başka bir öğe
- ve başka bir öğe

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

- images: `![alt text](../images/file.png)`

The type of image should be PNG or JPEG.

Images names should confirm to one of following naming rules. In the example I use png as suffix. In case you use JPEG please replace it with jpeg.

- `filename-image-xx.png` where xx is a unique double digit number for the images in this file.
- `filename-image-xx.png` where xx is a meaning full name for the author of the md file.

Images are located in the images folder for the english language and propagated to the other languages automatically by Crowdin. You have nothing to do for this!

We are not translating images at the moment.

(make-a-PR-image-size)= Use a reasonable size for the images which must be readable on PC, tablet and mobiles.

- Screenshots from web pages images should be up to **1050 pixels wide**.
- Diagramms of process flows should be up to **1050 pixels wide**.
- Screenshots from the app should be up to **300 to 400 pixels wide**.

### Links

#### External links

External links are links to external web sites.

- external link: `[alt text](www.url.tld)`

#### Internal links to the start of a md file

Internal links to pages are links to the start of a md file which is hosted on our own server.

- internal link to .md page: `[alt text](../folder/file.md)`

#### Internal links to named inline refernces

Internal links to named inline refernces are links to any point in a md file which is hosted on our own server and where a reference was set to link to.

Add a named reference at the location in the target md file you want to jump to.

`(name-of-my-md-file-this-is-my-fancy-named-reference)=`

The named reference must be unique in the whole AndroidAPSDocs md files and not only the own md file it resides in!

Therefore it is a good practice to start with the filename and then the reference name you select.

Use only lowercase letters and hyphenate words.

Then link this refernce in the text you are writing with the following kind of link.

- Internal links to named inline refernces: `[alt text](name-of-my-md-file-this-is-my-fancy-named-reference)`

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

## Style Guide

### Contents

1. English language writing tips

2. AAPS-specific writing notes

3. Useful references

### ![Görsel](./images/styleguide01.png) 1\. English language writing tips

#### Use language that is appropriate for the reader

Use plain English wherever possible. This helps non-native readers and also aids translation of AAPS documents into other languages. Write in a conversational way with the user, imagine you are sitting across the desk from the person you are writing for. Remember - most AAPS users do not have programming backgrounds. Diabetes itself also has a lot of jargon and abbreviations. Bear in mind that some people may be recently diagnosed, may not be as experienced as you with diabetes, or may have been given different diabetes training. If you use shorthand or an abbreviation, write it out in full the first time you use it, giving the abbreviation directly after it in brackets, like “super micro bolus (SMB)”. Also, link to the glossary. Technical terms which might not be familiar to the reader can be also be added in brackets.

Instead of: *“What causes high postprandial BG peaks in closed loop?"*

Use: *“What causes a high BG peak **after lunch** (postprandial) in closed loop?"*

##### Use plain words that everyone can understand

Find an A-Z of alternative words to make your writing easier to understand here:

<https://www.plainenglish.co.uk/the-a-z-of-alternative-words.html>

#### Privacy/licensing concerns:

Particularly if you record video or screenshots, make sure not to disclose your private details (API key, passwords). Make sure Youtube content is not openly listed, and needs a link from the documentation to view. Avoid drawing attention to infringed copyrighted materials (BYODA etc).

#### Keep sentences short, get to the point

- Clear writing should have an average sentence length of 15 to 20 words.

- This does not mean making every sentence the same length. Be punchy. Vary your writing by mixing short sentences (like the last one) with longer ones (like this one).

- Stick to one main idea in a sentence, plus perhaps one other related point.

- You may still find yourself writing the odd long sentence, especially when trying to explain a complicated point. But most long sentences can be broken up in some way.

- Remove weak words: “you can”, “there is/are/were”, “in order to”.

- Place keywords near the beginning of titles, sentences and paragraphs.

- Be visual! Wherever possible provide a brief diagram, screenshot or video.

#### Don't be afraid to give instructions

Commands are the fastest way to give instructions, but writers sometimes fear giving commands, writing “you should do this” instead of just “do this”. Perhaps people worry that commands sound too harsh. You can often solve this by putting the word 'please' in front. However, if something must be done, it is best not to say ‘please’ as it gives the reader the option to refuse.

Instead of: *“You should just think of it as a complete statement."*

Use: *“Think of it as a complete statement.”*

#### Mostly use active verbs, rather than passive verbs

Example of an **active verb**:

- *“The pump (subject) delivers (verb) the insulin (object).”*

“delivers” is an active verb here. The sentence says what is doing the delivering before it says what is being delivered.

Example of a **passive verb**:

- *“The insulin (subject) is delivered (verb) by the pump (object)”*

*“delivered”* a passive verb here. The subject and object are switched around, compared to the active verb sentence. We have had to make the sentence longer by introducing “is” and “by the”. Also consider starting with the active verb.

Instead of: *“You can connect your pump with the phone through the AAPS pump menu, and there are a number of pumps available for you to connect with.”*

Use: *“Connect your desired pump to the phone through the AAPS pump menu.”*

Passive verbs can cause problems:

- They can be confusing.

- They often make writing more long-winded.

- They make writing less lively.

##### Good uses of passives

There are times when it might be appropriate to use a passive.

- To make something less hostile - 'this bill has not been paid' (passive) is softer than 'you have not paid this bill' (active).

- To avoid taking the blame - 'a mistake was made' (passive) rather than 'You made a mistake' (active).

- When you don't know who or what the doer is - 'the England team has been picked'.

- If it simply sounds better.

#### Avoid nominalisations

A nominalisation is the name of something that isn't a physical object, such as a process, technique or emotion. Nominalisations are formed from verbs.

For example:

| Verb      | Nominalisation |
| --------- | -------------- |
| complete  | completion     |
| introduce | introduction   |
| provide   | provision      |
| fail      | failure        |

They are often used **instead** of the verbs they come from, but they can sound as if nothing is actually happening. Too many of them can make writing very dull and heavy-going.

Instead of: *“The implementation of the method has been done by a team.”*

Use: *“A team has implemented the method.”*

#### Use lists where appropriate

Lists are excellent for splitting information up. There are two main types of list:

- A continuous sentence with several listed points picked out at the beginning, middle or end.

- Separate bullet points with an introductory statement.

In the bulleted list above, each point is a complete sentence so they each start with a capital letter and end with a full stop. Use bullet points rather than numbers or letters, as they draw your attention to each point without giving you extra information to take in.

#### Mythbusting

- You can start a sentence with **and, but, because, so or however**.

- You can split infinitives. So you can say **“to boldly go”**.

- You can end a sentence with a preposition. In fact, it is something **we should stand up for**.

- And **you** can use the same **word** twice in a sentence if **you** can't find a better **word**.

#### Optimising writing style by purpose

To keep the documentation clear and short, we write different sections of the documentation in different styles.

An “explanation” style is used for the introduction, background and knowledge development sections.

A “How-to-guide” style (with minimal explanation) is used for building, configuring AAPS, and some of the troubleshooting sections.

A tutorial helps the pupil acquire basic competence. The user will **learn by doing**.

![Görsel](./images/styleguide02.png)

##### ![Görsel](./images/styleguide03.png) Tutorials (e.g. teaching a kid to beat egg whites)

- narrator directly talks to the reader: In this tutorial **you** will (we) could be used to convey “we are in this together” frame-of-thought in some rare cases

- Future Tense -> to show the final target

- Imperative Tense -> to do the tasks -> Concrete steps - avoid abstract concepts

- Past Tense -> to show accomplished tasks -> Quick and immediate visible results

- Minimum Explanations -> strict necessary to complete the task - **what and why**

- Ignore options/alternatives/…. No ambiguity

- Step Transitions: finish a step with a sentence leading to the next step as a logical progression flow. Example: *You have now installed the Let’s Encrypt client, but before obtaining certificates, you need to make sure that all required ports are open. To do this, you will update your firewall settings in the next step.*

- **Tutorial** Title (Level 1 heading)

- Introduction (no heading)

- Prerequisites (Level 2 heading)

- Steps:

- Step 1 — Doing the First Thing (Level 2 heading)

- Step 2 — Doing the Next Thing (Level 2 heading)

- Step n — Doing the Last Thing (Level 2 heading)

- Conclusion (Level 2 heading)

![Görsel](./images/styleguide04.png)

##### ![Görsel](./images/styleguide05.png) How-To Guides (e.g. a recipe)

A how-to guide’s purpose is to help the already-competent user perform a particular task correctly.

- HOW-to

- narrator directly talks to the reader: In this tutorial **you** will

- Future Tense -> to show the final target

- Conditional Imperative Tense -> to get X do y -> Concrete steps - avoid abstract concepts

- Minimum Explanations -> strict necessary to complete the task -> **what and why**

- Ignore options/alternatives/…. No ambiguity, but you can link to the reference entry or explanation entry

- **How-to**: Title (Level 1 heading)

- Introduction paragraph

- Optional Prerequisites (paragraph or Level 2 heading if more than 1)

- Steps:

- Step 1 — Doing the First Thing (Level 2 heading)

- Step 2 — Doing the Next Thing (Level 2 heading)

- Step n — Doing the Last Thing (Level 2 heading)

- Conclusion paragraph

![Görsel](./images/styleguide06.png)

##### ![Görsel](./images/styleguide07.png) Explanation (e.g. Science behind why egg whites stiffen when you beat them)

An explanation clarifies, deepens and broadens the reader’s understanding of a subject.

- WHY

- Start with **About**

- Provide context, link ALL relevant references

- Discuss options/alternatives

- Don’t instruct or provide reference (link to them)

- State the unknown/moving targets etc…

- **About** Title (Level 1 heading)

- Introduction (no heading)

- Optional Prerequisites (Level 2 heading)

- Subtopic 1 (level 2 heading)

- Conclusion (Level 2 heading)

![Görsel](./images/styleguide08.png)

### 2\. AAPS-specific writing/updating notes

#### Author & Editor

For writing/updating the AAPS documentation, consider the process as consisting of two stages. These can be carried out by the same person at different points, or more than one person.

An **author (e.g. you!)** writes/edits a section of the documentation in a concise conversational tone, then passes it to the editor.

The **editor (e.g. a fellow AAPS user, or the person who receives the pull request)** reviews adherence to the style guide, edits the section for clarity and accessibility, removing as many words as possible (especially for tutorial/how-to sections). Reading the text out loud may help.

#### General AAPS points

- For glucose values, state both mg/dl and mmol/l in each occurrence (also consider this for screenshots, if possible).

- For consistency, use “AAPS” rather than “Android APS”.

- Clearly state the version of Android Studio/AAPS you are writing for, or that the screenshots are taken from.

### 3\. Useful References

<https://dev.readthedocs.io/en/latest/style-guide.html>

[Diátaxis (diataxis.fr)](https://diataxis.fr/)

[Technical Writer Style Guide Examples | Technical Writer HQ](https://technicalwriterhq.com/writing/technical-writing/technical-writer-style-guide/)

[DigitalOcean's Technical Writing Guidelines | DigitalOcean](https://www.digitalocean.com/community/tutorials/digitalocean-s-technical-writing-guidelines)

[Top 10 tips for Microsoft style and voice - Microsoft Style Guide | Microsoft Learn](https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice?source=recommendations)

<https://www.plainenglish.co.uk/how-to-write-in-plain-english.html>

<https://developers.google.com/style>

<https://www.mongodb.com/docs/meta/style-guide/screenshots/screenshot-guidelines/>