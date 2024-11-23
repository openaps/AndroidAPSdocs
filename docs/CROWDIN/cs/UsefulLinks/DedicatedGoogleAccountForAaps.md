# Vyhrazený Google účet pro AAPS (volitelné)

Some **AAPS** users prefer to use their main email account for **AAPS** as well. Alternatively, some **AAPS** users (or their caregivers) set-up a dedicated **AAPS** email account - this is optional, we give an example of how to do it below.

If you don't want to set up an **AAPS**-dedicated Gmail account, you can just go straight to the next section, [building AAPS](../SettingUpAaps/BuildingAaps.md).

```{admonition} Advantages of a dedicated Google account for AAPS
:class: dropdown

- Dedicated Google drive space means you will not risk filling up your personal Google drive limit with **Export Preferences**.
- Each version of **AAPS** (and supporting apps like xDrip+, BYODA, etc) will be stored in one single place which is independent of your computer hardware. If your PC or phone is stolen/lost/broken you will still have access.
- By harmonizing the setup, it will make online support simpler across users with similar folder structure.
- Depending on the setup (see below), you will have a separate identity as an alias to communicate within the community which can protect your privacy. 
- Children with T1D can preserve their own “everyday” email account as minors while using **AAPS** and associated features which require an adult account.
- Gmail allows you to register up to 4 accounts under the same phone number.
```

## Jak nastavit Google účet určený pouze pro AAPS

(⌛Asi 10 minut)

![](../images/Building-the-App/building_0001.png)

Požadavky:

* You have a Windows’ PC (Windows 10 or newer) and a Android phone (Android 9 or newer) which will host the **AAPS** app. Obě tato zařízení mají nainstalované všechny nejnovější bezpečnostní aktualizace, přístup k Internetu a administrátorská oprávnění, protože některé kroky vyžadují stažení a instalaci programů.
* The Android phone is already set-up with your personal ”everyday” email address, such as a Gmail account.

```{admonition} Things to consider when setting up your new account
:class: dropdown
- You could use a name different to your own, which has relevance to the account (like t1dsuperstar) for privacy reasons. You can then use it in **AAPS** public forums while keeping your own identity private. Since Google requires a recovery email and phone number, it is still traceable.
- The new **AAPS** account will use the same phone number for verification as your “_everyday_” one. It will use the “everyday” email address for verification;
- We will setup email forwarding such that any email sent to the new dedicated AAPS account will be forwarded to the primary one (so there is no need to check two different mailboxes);
- Use separate passwords for your _everyday_ Gmail account and the AAPS-dedicated Gmail account
- If you use google “2-step verification” (aka multifactor) authentication for one Gmail account, you might as well do it for both Gmail accounts.
- If you plan to use Google “Passkeys”, make sure you register multiple devices. This is so you don’t lock yourself out. Only do it on devices that nobody else can access (_i.e._ not on a PC with a shared account that other people can unlock).
```


```{admonition}  Video Walkthrough! 
:class: Note
Click [here](<https://drive.google.com/file/d/1dMZTIolO-kd2eB0soP7boEVtHeCDEQBF/view?usp=drive_link>) for a video walkthrough of how to set up a dedicated Google account.
```

 Toto jsou kroky nastíněné ve videu:

In this example: 
- Your existing “_Everyday_” Google account is <donald.muck42@gmail.com> ; ![](../images/Building-the-App/building_0002.png)
- Your new “_AAPS_” Gmail account will be: <donald.muck42.aaps@gmail.com>; ![](../images/Building-the-App/building_0003.png)


### Go to <https://account.google.com> 

 If you are already logged into Google, this will direct you to your “Everyday” **My Account** page. (1) Click on the top right of the page on your profile picture (in this case, a simple ![](../images/Building-the-App/building_0002.png) (2) select “_add another account_”.

![](../images/Building-the-App/building_0005.png)


### Enter your NEW dedicated account details: 

- Enter the new account: 
- Vytvořit účet
- for my personal use. 


### Zadejte vaše osobní údaje:
 - Vložte křestní jméno
 - Příjmení
 - datum narození (musí být zadán věk dospělého)

### Choose your NEW email address & password

This example appends “.AAPS” to Donald Muck’s existing one…\
Set a password

### Enter a phone number which can receive the SMS verification

Gmail vám nyní odešle jedinečný kód pro ověření.

### Enter the recovery email address

In this case it will be your existing “_everyday_” email…

### Dokončete nastavení vašeho účtu

Gmail zobrazí název účtu. It will ask you to accept Gmail’s terms and conditions & confirm your personalization settings.

### Přizpůsobte zobrazení nového profilu

At this point you should be on Gmail’s MyAccount page showing your new **AAPS**-dedicated email account. Profilový obrázek bude ve výchozím nastavení zobrazovat první písmeno vašeho jména. Change it to something unique to avoid confusion… in this example, Donald.Muck.AAPS has replaced ![](../images/Building-the-App/building_0002.png) with ![](../images/Building-the-App/building_0003.png)

![](../images/Building-the-App/building_0007.png)\
![](../images/Building-the-App/building_0008.png)

### Pro nastavení nového účtu otevřete webovou stránku Gmail v obou oknech

So that you don’t need to monitor a separate email account, forward all the emails from the new **AAPS**-dedicated account to your everyday account\
This part can be a bit confusing, since you will have to switch back and forth between both accounts. Chcete-li si to usnadnit, otevřete si v prohlížeči dvě samostatná okna nad sebou:

1. Move your existing browser to the top of your screen and resize it such that it only takes about half of the top of the screen…
2. Right click on your Browser logo in your taskbar
3. From the menu select “New Window”... and adjust it so it only takes the bottom half of the screen.

Open <https://gmail.com> in each browser window. Make sure your personal account is on top and the new dedicated **AAPS** account is on the bottom, and is easily identifiable by the profile picture in the top right corner. Pokud je to potřeba, můžete vždy přepnout účty kliknutím na profilový obrázek a výběrem správného.

![](../images/Building-the-App/building_0009.png)

Your Gmail homepages screen should look like this:\
![](../images/Building-the-App/building_0010.png)

 ### In the new Gmail account (bottom window), open Gmail settings…

- Click on the gear on the left of the profile picture
- then select “**See all Settings**”

![](../images/Building-the-App/building_0011.png)

### Nastavení přeposílání…

- Klikněte na záložku "Nastavení přeposlání a POP/IMAP"
- Klikněte na "Přidat adresu pro přeposílání"
- Zadejte vaši "každodenní" e-mailovou adresu
- Gmail will send a verification code to your “everyday” email address.
- Přepněte se zpět na svůj každodenní profil a klikněte na odkaz, abyste potvrdili, že přijímáte přeposílání (nebo vezměte kód z ověřovacího e-mailu ve svém „každodenním“ Gmail okně a vložte ho do „nového vyhrazeného AAPS“ Gmail okna).

Budete muset docela přepínat tam a zpět mezi okny, ale zajistíte tak, že kdykoli zkontrolujete e-maily na vašem "každodenním" účtu, uvidíte zároveň e-maily přeposlané z vašeho účtu vyhrazeného pro AAPS, jako například upozornění Gmailu.

![](../images/Building-the-App/building_0012.png)

### Ověření přeposlané e-mailové adresy

- In the “Everyday” gmail (top window), you will get the “Gmail forwarding Confirmation” email.
- Otevřete jej a „klikněte na odkaz pro potvrzení požadavku“

### Archivace přeposílaných e-mailů ve vyhrazeném Gmail účtu (dolní okno)

<!---->

1. Obnovte dolní okno
2. Zkontrolujte "přesměrování příchozích e-mailů"
3. A archivovujte kopii Gmailu (aby vaše nová vyhrazená poštovní schránky byla čistá)
4. Scroll all the way to the bottom to save your changes\
   ![](../images/Building-the-App/building_0013.png)

![](../images/Building-the-App/building_0014.png)

Congratulations! Nyní máte vytvořený dedikovaný AAPS Google účet. The next step is to [build the AAPS app](../SettingUpAaps/BuildingAaps.md).