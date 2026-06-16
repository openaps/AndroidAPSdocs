# Configuration (formerly Config Builder)

In **AAPS** v4 the **Config Builder** has been renamed **Configuration** and moved into the **top-left menu**. This is still the place where you choose which plugins are active (CGM, pump, APS algorithm, sensitivity, sync, …) and open each plugin and its settings.

```{contents} Table of contents
:depth: 1
:local: true
```

---

## Opening Configuration

Tap the **menu** (☰) in the **top-left** corner of the main screen and choose **Configuration** (*“Set up your configuration (CGM, pump, …) and enable features”*).

![The top-left menu with the Configuration entry](../images/v4/Configuration/configuration_menu.png)

---

## The Configuration screen

Plugins are grouped by **category** — for example *Smoothing*, *Calibration*, *Sensitivity detection*, *APS*, *Communication* and *General*. Each row shows the category name and the **currently active** plugin (e.g. *APS → OpenAPS SMB*).

![The Configuration screen, listing plugin categories](../images/v4/Configuration/configuration_plugins.png)

Tap the arrow **>** (or the row) to open a category.

---

## Opening a plugin and its settings

Inside a category you see the plugins available for it. For single-choice categories you pick the active one; some categories are multi-select (*“Choose any that apply”*). Each plugin offers two actions:

- **Open plugin** — opens the plugin's own screen (its tab/content).
- **Settings** — opens the plugin's preferences.

![A category showing its plugins, each with “Open plugin” and “Settings”](../images/v4/Configuration/configuration_open_plugin.png)

Tapping **Settings** opens that plugin's preference list; settings may be grouped into expandable sections (tap a section to expand it, then tap an individual setting to change it).

---

## The mobile icon — “synced from the master”

(configuration_sync_icon)=
A small **mobile (phone) icon** next to a category or setting means that item is **synchronised from the master** — its value/selection is delivered to this device over the NSClient (Nightscout) channel.

On a **client** (**AAPSClient**) these items are **kept in sync with the master**: in the screenshot above the icon appears on *Smoothing*, *Calibration*, *Sensitivity detection* and *APS*. Exactly how the master and clients stay aligned — and which settings you can change from either side — is covered under [Master ↔ Client control](ClientMasterCommunication.md#changing-configuration-and-preferences).

The same icon also appears **inside a plugin's settings**, next to the individual preferences that are synced. In the example below *Use dynamic sensitivity* and *DynamicISF adjustment factor* carry the icon, while device-local settings such as *Maximum basal rate* and *Max IOB for SMB* do not:

![A plugin's settings — the mobile icon marks the synced preferences](../images/v4/Configuration/setting_synced_icon.png)

Items **without** the icon are configured **per device**. The most important example is the **NSClient (Communication)** connection itself — the **Nightscout URL**, **access token** and **websockets** are set on each phone individually, so they do **not** show the mobile icon.

```{admonition} Why some things sync and others don't
:class: note
Plugin *selection* and many shared preferences are kept consistent across master and clients (so everyone uses the same algorithm, units, etc.). Connection-specific details that are unique to a device — such as the NSClient URL/token — stay local and must be entered on each phone.
```

---

<!-- =====================================================================
     Screenshots captured from a real AAPSClient (client) device:
       - configuration_menu.png        (top-left menu → Configuration)
       - configuration_plugins.png     (Configuration screen + mobile "synced" icons)
       - configuration_open_plugin.png (a category with Open plugin / Settings)
       - setting_synced_icon.png       (a plugin's settings — mobile icon on synced preferences)
     NOT included on purpose: the NSClientV3 settings screen, because it shows a
       real Nightscout URL — capture a redacted/demo one if a screenshot is wanted there.
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
