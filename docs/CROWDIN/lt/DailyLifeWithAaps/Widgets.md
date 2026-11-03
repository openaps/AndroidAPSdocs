(widgets)=
# Pagrindinio ekrano valdikliai

**AAPS** turi valdiklius, kuriuos galite pridėti į telefono pagrindinį ekraną. Valdiklis rodo dabartinius duomenis neatidarius programėlės. Bakstelėkite valdiklį, kad atidarytumėte **AAPS**.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Galimi valdikliai

Yra penki valdikliai. Android valdiklių sąraše jie pateikiami po **AAPS**:

![AAPS valdikliai Android valdiklių sąraše](../images/widgets/widget_picker_aaps.png)

| Valdiklis                                    | Numatytasis dydis | Ką rodo                                                                                                                                                                                                                                                    |
| -------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AAPS valdiklis**                           | 5 × 2             | The status block of the main screen: BG with trend and delta, the loop mode as an icon beside the profile name, target, sensitivity (shown as on the main screen), IOB and COB. The texts shrink to fit the size you give the widget instead of being cut. |
| **AAPS gliukozės apskritimas**               | 2 × 2             | Pagrindinio ekrano KG apskritimas: KG spalvos žiedas, tendencijos lankas, pokytis, KG reikšmė ir laikas nuo paskutinio rodmens.                                                                                                                            |
| **Mažas AAPS valdiklis**                     | 2 × 2             | Profilio pavadinimas, KG su tendencijos rodykle, laikas nuo paskutinio rodmens, pokytis, AIO ir AAO.                                                                                                                                                       |
| **AAPS gliukozė + AIO + AAO (kompaktiškas)** | 4 × 1             | Viena eilutė su KG ir tendencijos rodykle, AIO ir AAO.                                                                                                                                                                                                     |
| **AAPS gliukozės grafikas**                  | 3 × 1             | KG reikšmė su mažu paskutinių rodmenų grafiku.                                                                                                                                                                                                             |

**AAPS valdiklis**, **gliukozės apskritimas** ir **Mažas** valdiklis pagrindiniame ekrane:

![AAPS valdiklis, gliukozės apskritimas ir Mažas valdiklis pagrindiniame ekrane](../images/widgets/home_widgets_full_circle_small.png)

**Kompaktiškas** valdiklis ir **gliukozės grafiko** valdiklis:

![Kompaktiškas valdiklis ir gliukozės grafiko valdiklis pagrindiniame ekrane](../images/widgets/home_widgets_compact_graph.png)

KG reikšmės rodomos tokiomis pačiomis spalvomis kaip **AAPS**: žalia – intervale, geltona – virš intervalo, raudona – žemiau intervalo.

---

## Valdiklio pridėjimas

Tikslūs veiksmai priklauso nuo jūsų telefono ir jo paleidimo programos (launcher). Daugumoje telefonų:

1. Ilgai palaikykite tuščią pagrindinio ekrano vietą ir pasirinkite **Widgets** (valdikliai).

   ![Valdiklių sąrašas](../images/widgets/widget_picker_list.png)

2. Sąraše atidarykite **AAPS** ir bakstelėkite norimą valdiklį.
3. Paspauskite **Add** (pridėti) arba nuvilkite valdiklį į norimą vietą.

   ![Mygtukas Add po pasirinktu valdikliu](../images/widgets/widget_picker_add_button.png)

Valdiklis padedamas pagrindiniame ekrane. Iškart po pridėjimo jis rodomas su rankenėlėmis: vilkite rankenėlę, kad **pakeistumėte** valdiklio dydį, arba vilkite valdiklį, kad jį perkeltumėte. Gliukozės apskritimą galima padaryti bet kokio dydžio.

![Ką tik pridėtas valdiklis su dydžio keitimo rankenėlėmis ir nustatymų mygtuku](../images/widgets/widget_glucose_circle_added.png)

Jei pagrindinio ekrano puslapyje nebėra vietos, telefonas valdiklį padeda naujame puslapyje.

---

## Valdiklio konfigūracija

Bakstelėkite **pieštuko** mygtuką, kuris rodomas ant valdiklio iškart po jo pridėjimo. Vėliau ilgai palaikykite valdiklį, kad vėl pasirodytų rankenėlės ir pieštukas.

Lange **Valdiklio konfigūracija** yra du nustatymai:

- **Derinti nepermatomumą** – kiek valdiklio fonas nepermatomas. Kai reikšmė maža, pro foną matosi ekrano užsklanda.
- **Naudoti juodą spalvą** – naudoti juodą foną vietoj numatytojo.

![Valdiklio konfigūracija](../images/widgets/widget_configuration.png)

Kiekvienas valdiklis turi savo konfigūraciją.

---

## Naudinga žinoti

- Valdiklis tik **rodo** duomenis. Per valdiklį negalima leisti boluso ar ką nors keisti.
- Valdiklį atnaujina **AAPS**. Jei **AAPS** neveikia arba Android riboja programėlės veikimą fone, valdiklis gali rodyti senus duomenis. Patikrinkite laiką nuo paskutinio rodmens ir įsitikinkite, kad **AAPS** netaikomas [baterijos optimizavimas](#SetupWizard-StoragePermission).
- Naudojant **AAPSClient**, **AAPSClient2** ir **AAPSClient3**, valdiklio fonas yra geltonas, mėlynas arba žalias, kad galėtumėte atskirti programėles. Jei spalvą sunku įžiūrėti, valdiklio konfigūracijoje padidinkite nepermatomumą. Žr. [Apie AAPSClient, AAPSClient2 ir AAPSClient3](#remotecontrol-aapsclient-versions).
