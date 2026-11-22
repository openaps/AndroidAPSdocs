# Kako prevesti tekstove aplikacije AAPS ili dokumentacije

* Za tekstove koji se koriste u aplikaciji idite na <https://crowdin.com/project/androidaps> i prijavite se svojim GitHub računom
* Za dokumentaciju posjetite <https://crowdin.com/project/androidapsdocs> i prijavite se svojim GitHub računom

* Pošaljite zahtjev za pridruživanje timu za dokumentaciju. Za to kliknite zastavu željenog jezika, a zatim gumb „Join“ u gornjem desnom kutu sljedeće stranice. Navedite jezik, napišite nešto o sebi i svom iskustvu s AAPS-om te želite li biti prevoditelj ili lektor (samo osobe vješte u prevođenju + napredni korisnici AAPS-a).

```{admonition} Vrijeme za odobrenje :class: note

Odobrenje se radi ručno. Kao neprofitna organizacija ne jamčimo rokove (SLA), ali odobrenje je obično gotovo za manje od 1 dana. Ako nije, javite se timu za dokumentaciju putem Facebooka ili Discorda.

    <br />* Kada vas odobrimo, kliknite zastavu
       ![Kada vas odobrimo, kliknite zastavu](../images/translation_flags.png)
    
    ## Prijevod aplikacije
    
    (translations-translate-strings-for-AAPS-app)=
    ### Prevođenje tekstova aplikacije AAPS
    
    * Ako nemate posebnu želju koje tekstove prevodite, samo odaberite gumb „Translate All“ za početak. Prikazat će vam tekstove koje treba prevesti.
    
       ![Kliknite Translate All](../images/translations-click-translate-all.png)
    
    * Ako želite prevesti pojedinu datoteku, potražite je putem dijaloga za pretraživanje ili stabla mapa i kliknite naziv datoteke kako biste počeli prevoditi tekstove u toj datoteci.
    
       ![Kliknite strings.xml](../images/translations-click-strings.png)
    
    * Prevodite rečenice na lijevoj strani tako da dodate novi prevedeni tekst ili upotrijebite i uredite prijedlog
    
       ![Prevođenje aplikacije](../images/translations-translate.png)
    
    
    ### Lektoriranje tekstova aplikacije AAPS
    
    * Lektori počinju odabirom „Proofread“ na početnom zaslonu jezika.
    
       ![Način lektoriranja za aplikaciju](../images/translations-proofreading-mode.png)
    
    
      i odobrite prevedene tekstove
    
       ![odobravanje teksta](../images/translations-proofreading.png)
    
    Kada lektor odobri prijevod, on će biti dodan u sljedeću verziju AAPS-a.
    
    (translations-translation-of-the-documentation)=
    ## Prijevod dokumentacije
    
    * Kliknite naziv stranice dokumentacije koju želite prevesti
    
    ![Kliknite stranicu dokumentacije](../images/translation_WikiPage.png)
    
    
    * Prevodite rečenicu po rečenicu
    
        1. Žuti tekst je tekst na kojem trenutno radite.
    
        1. Zeleni tekst je već preveden. Ne morate ga ponovno prevoditi.
    
        1. Crveni tekst je preostali tekst koji treba prevesti.
    
        1. Ovo je izvorni tekst na kojem trenutno radite
    
        1. Ovo je prijevod koji pripremate. Možete kopirati tekst odozgo ili odabrati jedan od prijedloga ispod.
    
        1. Ovo su prijedlozi za prijevod. Posebno možete vidjeti koliko Crowdin ocjenjuje da prijedlog odgovara, ili je li tekst već bio preveden i vratio se samo zato što je premješten, a ne promijenjen.
        1. Pritisnite gumb „save“ kako biste spremili prijedlog prijevoda. Zatim će se proslijediti lektoru na završnu provjeru.
    
    ![Prevođenje dokumentacije](../images/translation_WikiTranslate.png)
    
    * Prevedena stranica neće biti objavljena u dokumentaciji prije nego što
    
        1. prijevod je lektoriran
    
        1. sinkronizacija između Crowdina i GitHuba je završena (jednom na sat) i ona izradi PR za GitHub.
    
        1. PR na GitHubu je odobren.
    
    Obično to traje 1 – 3 dana, ali tijekom praznika može potrajati malo duže.
    
    ### Prevođenje poveznica
    
    ```{admonition} Poveznice se više ne prevode
    :class: note
    
    Poveznice se više ne prevode. Ovdje je prije bila tema o tome, ali više je nema: s prelaskom na Markdown i myst_parser u engleskom tekstu izričito izrađujemo oznake (labels) i one se u pozadini prenose u druge jezike.
    
    

Prevodite tekst koji predstavlja poveznicu. Pazite da **ne** uklonite poveznicu, koja je prikazana parom oznaka `<0></0>` (ili drugim brojevima, ako je u odlomku više poveznica).

Lektori na to moraju posebno paziti!

### Lektoriranje

* Lektori se moraju prebaciti u način lektoriranja (Proofreading)
    
    ![Način lektoriranja za dokumentaciju](../images/translation_WikiProofreadingmode.png)
    
    i odobriti prevedene tekstove
    
    ![odobravanje teksta](../images/translations-proofreading.png)

* Kada lektor odobri prijevod, on će biti dodan u sljedeću izradu dokumentacije. Ona se radi po potrebi, bez stalnog rasporeda, ali otprilike jednom tjedno, osim tijekom praznika. Kako biste ubrzali postupak, možete obavijestiti tim za dokumentaciju o novim prijevodima.