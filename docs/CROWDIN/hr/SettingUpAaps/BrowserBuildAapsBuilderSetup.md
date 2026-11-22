(aaps-builder-setup)=

# Stranica postavki AAPS Buildera

Izradite vlastitu aplikaciju **AAPS** na GitHubu. Ne trebate instalirati programe ni koristiti terminal. Prvi put traje oko 10 minuta, a zatim svaku izradu pokrećete sami.

Svaki je korak detaljnije objašnjen, sa snimkama zaslona, na stranici [Izrada u pregledniku s AAPS Builderom](#aaps-builder). Držite tu stranicu otvorenom u drugoj kartici.

Gumbi ispod otvaraju GitHub u novoj kartici Chromea. Za povratak na ovu stranicu dodirnite gumb kartica pokraj adresne trake Chromea (kvadrat s brojem) i odaberite ovu stranicu.

(aaps-builder-setup-step1)=

## Korak 1 – Izradite svoj privatni repozitorij za izradu

Time se u vašem GitHub računu izrađuje vaša vlastita privatna kopija AAPS Buildera: repozitorij u kojem je workflow za izradu već spreman. Samo ga vi možete vidjeti, kao i aplikacije koje izrađuje. **Ne** trebate izraditi fork AndroidAPS-a: izvorni kod AAPS-a preuzima se iz službenog repozitorija AndroidAPS pri svakoj izradi.

<label class="aapsb-label" for="aapsb-user">Vaše GitHub korisničko ime</label>
<input class="aapsb-input" type="text" id="aapsb-user" autocomplete="username" spellcheck="false" placeholder="my-github-name" />
<span class="aapsb-msg" id="aapsb-userMsg"></span>

Najprije se u ovom pregledniku prijavite na github.com (nemate račun? izradite ga besplatno). Zatim se vratite ovamo. Upišite svoje korisničko ime (prikazano je u vašem GitHub profilu), a ne e-mail adresu: stranica pita GitHub postoji li to korisničko ime.

<label class="aapsb-label" for="aapsb-repo">Naziv vašeg repozitorija</label>
<input class="aapsb-input" type="text" id="aapsb-repo" spellcheck="false" placeholder="my-aaps" />

Zadržite predloženi naziv. Već ste izradili repozitorij s drugim nazivom? Ovdje upišite točno taj naziv.

```{note}
**Već imate repozitorij AAPS Buildera** (izrađen ranijom verzijom ove stranice)? Nemojte izrađivati novi: ovdje upišite točno njegov naziv, preskočite gumb ispod i jednom ažurirajte njegov workflow: pogledajte **Ažuriranje vaše kopije** na kraju ovog koraka. Vaše tajne ostaju kakve jesu.

Ako ipak želite novi repozitorij, odaberite naziv koji još nemate, na primjer `my-aaps-2`, i u koraku 2 koristite isto spremište ključeva.

Nemojte upisati naziv svog forka AndroidAPS-a: fork je javan i već se izrađuje vlastitim workflowom **AAPS CI**.
```

Vaš repozitorij:<code class="aapsb-repoUrl"></code>

Provjerite ovaj naziv prije nego što upotrijebite gumbe ispod: stranica pamti naziv iz vašeg zadnjeg posjeta.

<a class="aapsb-btn" id="aapsb-createRepo" target="_blank" rel="noopener">Izradi moj privatni repozitorij</a>

Na GitHub stranici koja se otvori sve je već ispunjeno: predložak `nightscout/aaps-builder`, vaš račun kao vlasnik, naziv vašeg repozitorija i **Private**. Ništa ne mijenjajte i ostavite **Include all branches** neoznačeno.

1. Kliknite zeleni gumb **Create repository**.
2. GitHub prikazuje vaš novi repozitorij s mapom `.github` i datotekom `README.md`: u njima je workflow za izradu. Vratite se na ovu stranicu za korak 2.

```{admonition} Your new repository is empty (no files)?
:class: warning

Nije izrađen iz predloška. Izbrišite ga (**Settings** → dno stranice → **Delete this repository**), a zatim ponovno dodirnite **Izradi moj privatni repozitorij**.
```

```{admonition} GitHub says "my-aaps already exists in this account"?
:class: tip

Repozitorij već imate: zatvorite karticu GitHuba i nastavite s ovom stranicom. Ako je vaš ključ već u njemu, nastavite s [korakom 4](#aaps-builder-setup-step4). Pogledajte [rješavanje problema](#aaps-builder-ts-repo-exists).
```

```{admonition} Updating your copy (existing AAPS Builder repository)
:class: dropdown

Koraci izrade ažuriraju se umjesto vas: pri svakoj izradi vaš repozitorij pokreće verziju koju su AAPS programeri objavili u nightscout/aaps-builder, a u vašem se repozitoriju ništa ne mijenja. Datoteku workflowa zamjenjujete samo kada to najavi [Ažuriranja i promjene dokumentacije](../Maintenance/DocumentationUpdate.md) (na primjer za novu varijantu izrade) ili jednom ako je vaš repozitorij izrađen ranijom verzijom ove stranice ili iz starog predloška. Vaša tajna `KEYSTORE_SET` ostaje kakva jest.

1. <a class="aapsb-btn aapsb-secondary" href="https://github.com/nightscout/aaps-builder/blob/main/.github/workflows/build.yml" target="_blank" rel="noopener">Otvori najnoviji workflow</a>

   Na računalu kliknite **ikonu za kopiranje** („Copy raw file“) gore desno iznad datoteke. Na telefonu umjesto toga otvorite <a href="https://raw.githubusercontent.com/nightscout/aaps-builder/main/.github/workflows/build.yml" target="_blank" rel="noopener">verziju s običnim tekstom</a>, pritisnite i držite tekst → **Odaberi sve** → **Kopiraj**.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openWorkflowFile" target="_blank" rel="noopener">Otvori moju datoteku workflowa</a>

   Otvara `.github/workflows/build.yml` u <code class="aapsb-repoUrl"></code>. Dodirnite izbornik **⋯** gore desno iznad datoteke, a zatim **Edit file… In place** (na računalu kliknite olovku).
3. Zamijenite cijeli tekst kopiranim workflowom (na telefonu: pritisnite i držite → **Odaberi sve** → **Zalijepi**), a zatim dvaput kliknite **Commit changes…**. Prvi redak datoteke prikazuje njezinu verziju.
```

(aaps-builder-setup-step2)=

## Korak 2 – Vaš ključ za potpisivanje

Aplikacija mora biti potpisana vašim vlastitim ključem. Uvijek koristite isti ključ, inače za ažuriranje morate deinstalirati AAPS (i izgubiti njegove postavke). Odaberite jednu od dvije kartice.

`````{tab-set}

````{tab-item} Već imam spremište ključeva
Na primjer iz Android Studija (.jks).

<label class="aapsb-label" for="aapsb-ksFile">Datoteka spremišta ključeva</label>
<input type="file" id="aapsb-ksFile" accept=".jks,.keystore,.p12,.pfx,application/octet-stream">

<label class="aapsb-label" for="aapsb-ksPass">Lozinka spremišta ključeva</label>
<input class="aapsb-input" type="password" id="aapsb-ksPass" autocomplete="off">

<label class="aapsb-label" for="aapsb-ksAlias">Alias ključa</label>
<select class="aapsb-input" id="aapsb-ksAliasSel" hidden></select>
<input class="aapsb-input" type="text" id="aapsb-ksAlias" autocomplete="off" spellcheck="false" placeholder="key0">

<label class="aapsb-check"><input type="checkbox" id="aapsb-samePass" checked> Lozinka ključa ista je kao lozinka spremišta ključeva</label>

<div id="aapsb-keyPassWrap" hidden>

<label class="aapsb-label" for="aapsb-keyPass">Lozinka ključa</label>
<input class="aapsb-input" type="password" id="aapsb-keyPass" autocomplete="off">

</div>

<button class="aapsb-btn" type="button" id="aapsb-haveGo">Provjeri i nastavi</button> <span class="aapsb-msg" id="aapsb-haveMsg"></span>
````

````{tab-item} Izradi novi ključ
Prvi put izrađujete AAPS? Novi ključ izrađuje se ovdje, u vašem pregledniku. Ništa se nikamo ne šalje.

<label class="aapsb-label" for="aapsb-newPass">Odaberite lozinku (najmanje 8 znakova, bez slova s dijakritičkim znakovima)</label>
<input class="aapsb-input" type="password" id="aapsb-newPass" autocomplete="new-password">

<label class="aapsb-label" for="aapsb-newPass2">Ponovite lozinku</label>
<input class="aapsb-input" type="password" id="aapsb-newPass2" autocomplete="new-password">

<button class="aapsb-btn" type="button" id="aapsb-newGo">Izradi ključ</button> <span class="aapsb-msg" id="aapsb-newMsg"></span>

<div class="aapsb-box" id="aapsb-backupBox" hidden>

**Spremite sigurnosnu kopiju svog ključa!**

Preuzmite datoteku. Čuvajte ove tri stvari zajedno, na sigurnom mjestu izvan telefona (npr. u vlastitoj pohrani u oblaku):

- datoteku `aaps-keystore.jks`
- svoju lozinku
- alias ključa: **`key0`**

Sve tri trebat će vam ako ikada budete izrađivali AAPS na drugi način, npr. s Android Studiom.

<button class="aapsb-btn" type="button" id="aapsb-downloadKs">Preuzmi sigurnosnu kopiju (aaps-keystore.jks)</button>

</div>
````

`````
(aaps-builder-setup-step3)=
## Korak 3 – Dajte ključ svom repozitoriju
<span id="aapsb-s3wait">Najprije završite korak 2.</span>

<div id="aapsb-s3ready" hidden>
  1. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets" target="_blank" rel="noopener">Otvori stranicu s tajnama</a> Otvara: <code class="aapsb-repoUrl"></code> Dobivate „Page not found“ (404)? Najprije provjerite jeste li u ovom pregledniku prijavljeni na github.com: GitHub prikazuje 404 za privatne repozitorije kada niste prijavljeni. Inače se vaše korisničko ime ili naziv repozitorija iz koraka 1 ne podudaraju s vašim repozitorijem: provjerite ih na github.com i upišite ih u koraku 1. 2. Dodirnite „Kopiraj naziv“, a zatim ga zalijepite u malo polje „Name“: `KEYSTORE_SET` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="name">Kopiraj naziv</button> 3. Dodirnite „Kopiraj tajnu“, a zatim zalijepite dugi kod u veliko polje „Secret“: <code id="aapsb-secretPreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="secret">Kopiraj tajnu</button> <span class="aapsb-msg" id="aapsb-copyMsg"></span> Tajna je vrlo dugi kod (tisuće znakova), a NE riječ KEYSTORE_SET. Najprije kopirajte i zalijepite naziv, a zatim dugi kod. 4. Dodirnite „Add secret“. Gotovo, ovo više nikada ne morate raditi.
</div>
(aaps-builder-setup-step4)=
## Korak 4 – Izradite aplikaciju

1. <a class="aapsb-btn" id="aapsb-openActions" target="_blank" rel="noopener">Otvori stranicu za izradu</a>

   Otvara: <code class="aapsb-repoUrl"></code>

   Dobivate „Page not found“ (404)? Najprije provjerite jeste li u ovom pregledniku prijavljeni na github.com: GitHub prikazuje 404 za privatne repozitorije kada niste prijavljeni. Inače se vaše korisničko ime ili naziv repozitorija iz koraka 1 ne podudaraju s vašim repozitorijem: provjerite ih na github.com i upišite ih u koraku 1. Umjesto toga otvorila se aplikacija GitHub? Dodirnite „RUN WORKFLOW“, provjerite verziju i varijantu i ponovno dodirnite „RUN WORKFLOW“. Ako aplikacija i dalje prikazuje „Nothing to see here“, povucite popis prema dolje da vidite svoju izradu.
2. Ako se zatraži, kliknite zeleni gumb da omogućite workflowe.
Popis workflowa prikazuje dva unosa: koristite „Build AAPS“. Zanemarite „AAPS Builder“: on sadrži korake izrade i nema gumb „Run workflow“.
3. Kliknite „Run workflow“, a zatim zeleni gumb „Run workflow“. „latest“ izrađuje najnoviju verziju AAPS-a. ***savjet:*** *drugu verziju možete izraditi tako da umjesto „latest“ upišete naziv njezine [oznake (tag)](https://github.com/nightscout/AndroidAPS/tags)*
4. Pričekajte oko 15–30 minuta. Zelena kvačica znači da je izrada gotova.
Želite li e-mail kada je izrada gotova? GitHub vam šalje e-mail samo kada izrada ne uspije. Da biste ga dobili i kada uspije: na github.com otvorite svoju profilnu sliku → Settings → Notifications → System → Actions i uklonite kvačicu s „Only notify for failed workflows“.

```{admonition} No "Build AAPS" / "Run workflow" button?
:class: warning

1. Otvorite svoj repozitorij i provjerite ima li mapu `.github` s datotekom `workflows/build.yml`. Ako je repozitorij prazan, nije izrađen iz predloška: izbrišite ga (**Settings** → dno stranice → **Delete this repository**) i ponovno napravite [korak 1](#aaps-builder-setup-step1) s gumbom.
2. Datoteka postoji, ali GitHub prikazuje „This workflow does not exist“: pogledajte [rješavanje problema](#aaps-builder-ts-workflow-not-found).
3. Otvorite karticu Actions. Ako piše da su workflowi onemogućeni, kliknite zeleni gumb da ih omogućite. Zatim na popisu kliknite „Build AAPS“.
```

(aaps-builder-setup-step5)=

## Korak 5 – Instalirajte na telefon

```{admonition} Before every update: back up your settings!
:class: warning

1. U AAPS-u: Održavanje → Izvezi postavke. (To ionako radite redovito, npr. nakon promjene profila ili jednom mjesečno.)
2. Kopirajte izvezenu datoteku IZVAN telefona, npr. na Google Drive ili Dropbox. Sigurnosna kopija koja postoji samo na telefonu izgubi se zajedno s telefonom.
3. Ondje čuvajte i APK datoteke i nekoliko starijih izvoza. Tada se uvijek možete vratiti.

[Kako izvesti postavke](#ExportImportSettings-Settings-Export) · [Česta pitanja o AAPS-u: kako organizirati sigurnosne kopije](#FAQ-organize-backups)
```

1. Otvorite ovu stranicu na telefonu, u web pregledniku (Chrome). Ako se to zatraži, prijavite se na github.com.
2. <a class="aapsb-btn aapsb-secondary" id="aapsb-openRuns" target="_blank" rel="noopener">Otvori moje izrade</a>

   Umjesto toga otvorila se aplikacija GitHub? Ona ne može preuzimati izrade. U aplikaciji otvorite najnoviju izradu i dodirnite „Artifacts ↗“ ili dodirnite ikonu za dijeljenje i odaberite Chrome (ili „Copy link“, a zatim zalijepite poveznicu u adresnu traku Chromea). Nastavite u Chromeu.

   Dobivate „Page not found“ (404)? Najprije provjerite jeste li u ovom pregledniku prijavljeni na github.com: GitHub prikazuje 404 za privatne repozitorije kada niste prijavljeni. Inače se vaše korisničko ime ili naziv repozitorija iz koraka 1 ne podudaraju s vašim repozitorijem: provjerite ih na github.com i upišite ih u koraku 1.

   Da se GitHub poveznice ne otvaraju u aplikaciji: Android Postavke → Aplikacije → GitHub → Zadano otvaranje → isključite „Otvaranje podržanih veza“.
3. Dodirnite najnoviju izradu sa zelenom kvačicom ✅.
4. Pomaknite se prema dolje do sažetka izrade i dodirnite veliku poveznicu „📱 Download AAPS …“ (ili se pomaknite još niže do „Artifacts“ i dodirnite aaps-….apk). Pomičite se prstom po tekstu, a ne po dijagramu koraka izrade.
5. Kada se preuzimanje završi, dodirnite datoteku i odaberite Instaliraj. Ako se to zatraži, dopustite instaliranje aplikacija iz ovog izvora.
6. aaps-wear-….apk je za pametni sat. Preskočite ga ako ne koristite sat.

APK nije prikazan pod „Code“ u vašem repozitoriju, nego samo na stranici izrade. Čuva se 14 dana.

Nova verzija AAPS-a? Napravite sigurnosnu kopiju postavki, a zatim je izradite u [koraku 4](#aaps-builder-setup-step4). Vaš repozitorij nikada ništa ne izrađuje sam.

(aaps-builder-setup-step6)=

## Korak 6 – Neobavezno: aplikacija na Google Driveu

Želite li da se APK pojavi na vašem Google Driveu (gdje se čuva zauvijek)? Dodajte još jednu tajnu, GDRIVE_OAUTH2. Ova stranica je dobiva od Googlea umjesto vas. AAPS tada na vašem Google Driveu može vidjeti i mijenjati samo datoteke koje sam izradi, ništa drugo.

1. <a class="aapsb-btn" id="aapsb-googleAuth" target="_blank" rel="noopener">Poveži Google Drive</a>

   Google se otvara u novoj kartici. Odaberite svoj Google račun i dopustite AAPS-u da vidi i mijenja datoteke koje sam izradi. Ako Google kaže da aplikacija nije potvrđena, dodirnite „Advanced“, a zatim „Go to …“.
2. Zatim nova kartica prikazuje pogrešku kao **„This site can't be reached“** ili **„127.0.0.1 refused to connect“**. **To je očekivano.** Googleov odgovor nalazi se u adresi te kartice.

   Dodirnite adresnu traku te kartice, a zatim ikonu za kopiranje pokraj adrese (na računalu: označite cijelu adresu i kopirajte je). Adresa počinje s `http://127.0.0.1:47913/`. Vratite se na ovu stranicu u roku od nekoliko minuta: odgovor vrijedi samo kratko.
3. <label class="aapsb-label" for="aapsb-googleUrl">Ovdje zalijepite kopiranu adresu</label> <input class="aapsb-input" type="url" id="aapsb-googleUrl" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:47913/aaps-builder?…" /> <button class="aapsb-btn" type="button" id="aapsb-googleGo">Dohvati GDRIVE_OAUTH2</button> <span class="aapsb-msg" id="aapsb-googleMsg"></span>

<div id="aapsb-gdriveReady" hidden>

4. <a class="aapsb-btn aapsb-secondary" id="aapsb-openSecrets2" target="_blank" rel="noopener">Otvori stranicu s tajnama</a>

   Otvara: <code class="aapsb-repoUrl"></code>

   Dobivate „Page not found“ (404)? Najprije provjerite jeste li u ovom pregledniku prijavljeni na github.com: GitHub prikazuje 404 za privatne repozitorije kada niste prijavljeni. Inače se vaše korisničko ime ili naziv repozitorija iz koraka 1 ne podudaraju s vašim repozitorijem: provjerite ih na github.com i upišite ih u koraku 1.
5. Dodirnite „Kopiraj naziv“, a zatim ga zalijepite u malo polje „Name“: `GDRIVE_OAUTH2` <button class="aapsb-btn aapsb-secondary" type="button" data-aapsb-copy="gdrive">Kopiraj naziv</button>
6. Dodirnite „Kopiraj tajnu“, a zatim zalijepite kod u veliko polje „Secret“: <code id="aapsb-gdrivePreview"></code> <button class="aapsb-btn" type="button" data-aapsb-copy="gdriveValue">Kopiraj tajnu</button> <span class="aapsb-msg" id="aapsb-gdriveCopyMsg"></span>
7. Dodirnite „Add secret“.

</div>

```{admonition} Already have a GDRIVE_OAUTH2 value?
:class: dropdown

Radi i vrijednost sa stranice za pripremu AAPS-a druge metode izrade u pregledniku: otvorite stranicu s tajnama, dodajte naziv `GDRIVE_OAUTH2` i zalijepite svoju vrijednost. Pogledajte [Spremanje izrada na Google Drive](#aaps-builder-google-drive).
```

Pri sljedećoj izradi APK datoteke spremaju se i na Google Drive, u mapu AAPS/&lt;version&gt;.

Ako ne izrađujete 6 mjeseci ili promijenite lozinku za Google, Google prekida pristup. Izrada vam to tada javlja: ponovite ovaj korak.

----

Sve na ovoj stranici radi u vašem pregledniku. Vaš ključ i lozinke nikada se nikamo ne šalju, osim tamo gdje ih sami zalijepite. GitHubu se šalje samo vaše GitHub korisničko ime, kako bi se provjerilo postoji li. U koraku 6 Googleov odgovor šalje se samo Googleu, kako bi se dobio GDRIVE_OAUTH2. Workflow za izradu održavaju AAPS programeri u [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder), a temelji se na AAPS Builderu (AGPL-3.0).

<div id="aapsb-msgs" hidden>

- <span data-aapsb-msg="copied">Dugi kod je kopiran: zalijepite ga u veliko polje „Secret“, a zatim dodirnite „Add secret“.</span>
- <span data-aapsb-msg="copiedName">Naziv je kopiran: zalijepite ga u malo polje „Name“.</span>
- <span data-aapsb-msg="userOk">✓ GitHub korisnik pronađen.</span>
- <span data-aapsb-msg="userBad">✗ Ne postoji GitHub korisnik s tim imenom. Upišite svoje korisničko ime (prikazano je u vašem GitHub profilu), a ne e-mail adresu.</span>
- <span data-aapsb-msg="copiedShort">Kopirano ✓</span>
- <span data-aapsb-msg="needUser">Najprije u koraku 1 upišite svoje GitHub korisničko ime.</span>
- <span data-aapsb-msg="errPipe">Lozinke i alias ne smiju sadržavati znak |</span>
- <span data-aapsb-msg="errNoFile">Odaberite datoteku spremišta ključeva.</span>
- <span data-aapsb-msg="errEmpty">Upišite lozinku i alias.</span>
- <span data-aapsb-msg="errPass">Pogrešna lozinka spremišta ključeva.</span>
- <span data-aapsb-msg="errKeyPass">Pogrešna lozinka ključa.</span>
- <span data-aapsb-msg="errAlias">Alias nije pronađen u spremištu ključeva. Dostupno: {aliases}</span>
- <span data-aapsb-msg="errFormat">Ovo ne izgleda kao datoteka spremišta ključeva.</span>
- <span data-aapsb-msg="okHave">Spremište ključeva je u redu! Nastavite s korakom 3.</span>
- <span data-aapsb-msg="okHaveUnchecked">Spremište ključeva je pročitano. Lozinka će se provjeriti kada pokrenete izradu. Nastavite s korakom 3.</span>
- <span data-aapsb-msg="errShort">Lozinka mora imati najmanje 8 znakova.</span>
- <span data-aapsb-msg="errAscii">Koristite samo a–z, A–Z, 0–9 i simbole kao što su ! ? # – bez razmaka, bez slova s dijakritičkim znakovima i bez |</span>
- <span data-aapsb-msg="errMatch">Lozinke se ne podudaraju.</span>
- <span data-aapsb-msg="working">Izrađujem ključ…</span>
- <span data-aapsb-msg="okNew">Ključ je izrađen. Preuzmite sigurnosnu kopiju ispod, a zatim nastavite s korakom 3.</span>
- <span data-aapsb-msg="gNoUrl">Najprije zalijepite cijelu adresu Googleove kartice.</span>
- <span data-aapsb-msg="gNoCode">U ovoj adresi nema odgovora od Googlea. Kopirajte cijelu adresu kartice koja prikazuje pogrešku, počevši s http://127.0.0.1:47913/</span>
- <span data-aapsb-msg="gDenied">Pristup Googleu nije dopušten. Ponovno dodirnite „Poveži Google Drive“ i dopustite pristup.</span>
- <span data-aapsb-msg="gOldUrl">Ova adresa pripada starijem pokušaju. Ponovno dodirnite „Poveži Google Drive“ i upotrijebite novu adresu.</span>
- <span data-aapsb-msg="gWorking">Pitam Google…</span>
- <span data-aapsb-msg="gFailed">Google to nije prihvatio ({error}). Odgovor vrijedi samo nekoliko minuta i samo jednom: ponovno dodirnite „Poveži Google Drive“.</span>
- <span data-aapsb-msg="gNoRefresh">Google nije poslao dugoročni pristup. Ponovno dodirnite „Poveži Google Drive“.</span>
- <span data-aapsb-msg="gOk">GDRIVE_OAUTH2 je spreman. Dodajte ga kao tajnu ispod.</span>
- <span data-aapsb-msg="gCopied">Kod je kopiran: zalijepite ga u veliko polje „Secret“, a zatim dodirnite „Add secret“.</span>

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
