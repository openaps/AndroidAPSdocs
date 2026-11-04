(scenes)=
# Scenarii (presetări pentru situații)

A **scene** is a named preset that applies a **bundle of actions at once** — for example a *Sleep*, *Exercise* or *Sick Day* preset that switches your profile, sets a temporary target, toggles SMB and adds a care-portal note with a single tap, optionally for a set duration.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Ce este un scenariu

Instead of changing several things by hand every time a recurring situation comes up, you set them up once as a scene and activate it with one tap. A scene can bundle any of these actions:

- **Profile switch** — switch profile and/or scale it by percentage (e.g. 70 %).
- **Țintă temporară** — setați o țintă temporară (de ex. *Exercițiu fizic*, *Mănânc în curând* sau o valoare personalizată).
- **SMB pornit/oprit** — activați sau dezactivați super-micro-bolusurile cât timp scenariul este activ.
- **Loop mode** — change the running mode (e.g. to a more conservative mode).
- **Care-portal note** — log an event (e.g. *Exercise*, *Sickness*) so it shows on the graph and in Nightscout.

A scene also has a **duration** — a fixed time (minutes/hours/days) or *Indefinite (manual end)* — and an **end action** that runs when it finishes: either a **notification**, or it can **chain** into another scene (for example *Sick Day → Exercise*).

---

## Gestionarea scenariilor

Open **Manage → Scenes** to see, create, edit, enable/disable and reorder your scenes.

![Ecranul de gestionare a scenariilor](../images/v4/Scenes/scenes_list.png)

Fiecare card de scenariu arată:

- o **casetă de bifare** pentru a activa/dezactiva scenariul,
- o **pictogramă** și un **nume**,
- a summary — *“N actions, duration”*, and the **→ chained scene** if it chains into another one,
- and three buttons: **▶ activate**, **✏️ edit**, **🗑️ delete**.

Tap the **+** button to create a new scene.

---

## Crearea sau editarea unui scenariu

### Porniți de la un șablon

To **create** a scene, tap the **+** button on the Scenes screen. The first step is **Start from template**: pick a ready-made scene for a common situation — *Exercise*, *Sick Day*, *Sick Day — Vomiting*, *Sleep*, *Post-exercise Night*, *Pre-meal*, *Alcohol*, *Driving*, *Bathing*, *Luteal Phase*, *Hot Weather*, *Medical Procedure* — or start from a *Blank* scene. Each template **pre-fills the recommended actions** and you can adjust everything in the following steps.

![„Porniți de la șablon” — alegeți un punct de plecare](../images/v4/Scenes/templates_picker.png)

After you pick a template, its purpose is explained — *when* and *why* to use it — before you continue:

![Explicația unui șablon](../images/v4/Scenes/template_explanation.png)

### Step through the actions

Restul editorului este un asistent scurt, **pas cu pas**. Each step is one action type with an *“Include … in scene”* switch — turn it on only for the actions you want this scene to perform, and leave the rest off.

![The scene editor — the Profile switch step](../images/v4/Scenes/scene_editor.png)

Work through the steps with **Next**/**Back**: *Profile switch*, *Temporary target*, *SMB*, *Loop mode*, *Care-portal note*, then the **duration**, the **end action** (notify or chain into another scene), and finally the scene's **name and icon**. Salvați când ați terminat. (To **edit** an existing scene, tap its **✏️** button — you go straight into these steps.)

Each step starts with a short explanation of what the action does. Pașii arată astfel, aici cu șablonul *Activitate fizică*:

**Țintă temporară** — alegeți una dintre presetările dumneavoastră de țintă temporară:

![Pasul Țintă temporară](../images/v4/Scenes/scene_editor_step3.png)

**SMB** — activați sau dezactivați SMB cât timp scenariul este activ:

![Pasul SMB](../images/v4/Scenes/scene_editor_step4.png)

**Running mode** — optionally change the loop mode:

![Pasul Mod de funcționare](../images/v4/Scenes/scene_editor_step5.png)

**Careportal** — tipul de eveniment și nota de înregistrat:

![Pasul Careportal](../images/v4/Scenes/scene_editor_step6.png)

**Duration** — how long the scene stays active; 0 means until you end it yourself:

![Pasul Durată](../images/v4/Scenes/scene_editor_step7.png)

**Follow-up scene** — optionally the scene that starts when this one ends:

![Pasul Scenariu de continuare](../images/v4/Scenes/scene_editor_followup.png)

**Scenariu** — numele și pictograma. Apăsați **Finalizați** pentru a salva:

![Pasul nume și pictogramă](../images/v4/Scenes/scene_editor_step9.png)

---

## Activarea unui scenariu

Activate a scene from the **Scenes** list (the **▶** button) or from the **Scenes** entry in the bottom navigation. In the **Scenes** sheet of the bottom navigation, each scene shows the same summary as in the Scenes list, and the **pencil** at the top of the sheet opens **Manage → Scenes** to create or edit your scenes.

![The Scenes sheet of the bottom navigation](../images/v4/Scenes/scenes_sheet.png)

Dacă [protecția bolusului](#Preferences-protection) este activată, **AAPS** o cere înainte ca un scenariu să înceapă sau să se încheie. Pentru modificarea unui scenariu este nevoie în schimb de [protecția setărilor](#Preferences-settings-protection).

Before anything is applied you get a **confirmation** that lists exactly what the scene will do, so you can review it:

![Scene activation confirmation, listing the bundled actions](../images/v4/Scenes/scene_confirmation.png)

If the scene chains into another one, the confirmation ends with **→** and the name of that follow-up scene, the same way it is shown in the Scenes list.

When you start the scene from the **Scenes** entry of the bottom navigation, the confirmation is a simpler dialog with the same list of actions. Apăsați **OK** pentru a activa:

![Scene confirmation when started from the bottom navigation](../images/v4/Scenes/scene_confirmation_from_sheet.png)

After you confirm, the actions are applied and the **active scene** is shown at the top of the overview with an **End Scene** button. If the scene chains into another one, the banner also names that follow-up scene:

![The active-scene banner on the overview, with the End Scene button](../images/v4/Scenes/scene_active_banner.png)

Acțiunile scenariului rămân în vigoare până când:

- its **duration** ends (the **end action** runs — a notification, or it chains into the next scene), or
- you tap **End Scene** to end it manually. If the scene chains into another one, you get two choices: **Skip to** the follow-up scene (the active scene ends and the follow-up starts now), or **End Scene** (the active scene ends and the follow-up does not start).

Un scenariu fără continuare vă cere doar să confirmați:

![Dialogul Încheiați scenariul](../images/v4/Scenes/scene_end_dialog.png)

Ending a scene **reverts** the changes it made (for example the profile switch and temp target it started).

While a scene is active, the profile and the target on the main screen carry a small scene icon when the scene set them. The **Scenes** sheet of the bottom navigation stays available to start another scene:

![The Scenes sheet while a scene is active](../images/v4/Scenes/scenes_sheet_active.png)

Când durata se termină de la sine, modificările sunt anulate imediat, iar bannerul se schimbă în **Scenariu încheiat**, cu un buton **Renunțați**. Dismissing only clears the banner from the screen — the scene itself is already over, so automation rules and a chained scene carry on without waiting for it.

---

## Declanșarea scenariilor din Automatizare

A scene does not have to be started by hand — **Automation** can run it for you. When you add an action to an automation rule (**Manage → Automation**), the action picker has a **Scenes** category:

- **Run scene** — activate a scene when the rule's triggers fire (for example at a set time, when you arrive somewhere, or when glucose crosses a threshold).
- **Enable scene** / **Disable scene** — make a scene available (or unavailable) without activating it.

![The “Scenes” actions in the Automation action picker](../images/v4/Scenes/automation_scene_action.png)

Automation can also **react to** a scene: the trigger list includes a **Scene** trigger, so a rule can run only while a particular scene is active. Combined with a scene's **end action** (revert, notify, or chain into another scene), this lets scenes start, follow on and finish automatically.

---

## Scenes with Master/Client and a watch

The **currently active scene is synchronized** across all of your paired devices — activate it on one phone and the others show it too.

A paired **client** (**AAPSClient**) can also activate or end a scene: the request is sent to the **master**, which authors the confirmation and applies the scene on its own state. See [Master ↔ Client control](../RemoteFeatures/ClientMasterControl.md) for how that works.

(scenes-from-watch)=
### De pe un ceas Wear OS

Scenes are available on a **Wear OS watch** as a **Scene tile**. Swipe to the **Scene** tile in the watch's tile carousel (add it from the carousel's tile list first if it isn't there yet) and tap the scene you want to start:

![Panoul Scenariu pe un ceas Wear OS](../images/v4/Scenes/scene_watch_tile.png)

The tile has four slots. By default each slot fills itself **automatically** with the next of your enabled scenes, in the order they have on the phone. To choose yourself, **long-press the tile** and open its settings: for each of the four slots you can keep **Automatic**, pin a **specific scene**, or select **None** to leave the slot empty. A slot pinned to a scene that has since been deleted or disabled shows **Unavailable** — pick another scene for it.

The watch then shows a confirmation — tap **✓** to activate, or swipe back to cancel:

![Confirmarea unui scenariu pe ceas](../images/v4/Scenes/scene_watch_confirm.png)

La fel ca pe un client, **dispozitivul principal creează confirmarea și rulează scenariul**; ceasul doar transmite cererea (prin telefonul client, dacă ceasul este asociat cu un client).

While a scene is running — or its **Scene ended** banner is still showing on the phone — the tile shows an **End** button with the name of the scene under it. Tap it to end the active scene, or to clear the leftover banner, from your wrist.

If the running scene chains into another one, the tile also shows a **Skip** button with the name of the follow-up scene under it. These are the same two choices as on the phone:

- **End** — the active scene ends. Confirmarea vă spune că scenariul de continuare nu va porni.
- **Skip** — the active scene ends and the follow-up scene starts now. Confirmarea numește ambele scenarii.

The watch's [Loop Status screen](#WearOsSmartwatch-loop-status) also shows the active scene, the time it has left and its follow-up.

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - scenes_list.png        (Manage → Scenes management list)
       - templates_picker.png   (create: "Start from template" picker)
       - template_explanation.png (create: chosen template's explanation)
       - scene_editor.png       (scene editor, Profile switch step)
       - scene_confirmation.png (scene activation confirmation — also used on the Client/Master page)
       - scene_active_banner.png (overview active-scene banner with the End Scene button)
       - automation_scene_action.png (Automation action picker — Scenes category)
       - scene_watch_tile.png    (Wear OS Scene tile)
       - scene_watch_confirm.png (Wear OS scene confirmation)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
