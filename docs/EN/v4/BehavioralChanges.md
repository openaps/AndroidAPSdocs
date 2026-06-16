# AAPS v4 — behavioural changes

This page collects the notable **changes in behaviour** between **AAPS** v3 and v4 — things that work differently, have moved, or have been removed — so existing users know what to expect when they update.

```{contents} Table of contents
:depth: 1
:local: true
```

---

## NSClient v1 has been removed

**AAPS** v3 shipped **two** Nightscout synchronisation plugins:

- **NSClient** — the legacy client (the old Nightscout REST / socket.io API, also called *“v1”*), and
- **NSClientV3** — the client for the newer Nightscout **API v3**.

In **AAPS** v4 the legacy **NSClient (v1)** plugin has been **removed**. Only **NSClientV3** remains for synchronising with Nightscout.

```{admonition} What you need to do
:class: important
If you (or your **AAPSClient** follower) were still synchronising with the old **NSClient (v1)** plugin, switch to **NSClientV3** before/after updating:

- Open **[Configuration](Configuration.md) → Communication → NSClientV3**.
- Enter your **Nightscout URL** and an **access token** (NSClientV3 uses an access token, *not* the old API secret — see [creating a token](https://nightscout.github.io/nightscout/security/#create-a-token)).
- Your Nightscout site must support the **API v3** (Nightscout 15 or newer).
- If you use **websockets**, enable or disable them on **both** the master and the follower — never on only one.
```

This affects only how the app talks to Nightscout; your data on Nightscout is unchanged.

---

## Actions, Automation and Food are no longer plugins — they moved to *Manage*

In **AAPS** v3, **Actions**, **Automation** and **Food** were **plugins**: you enabled them in the Config Builder and opened them from their own tab or the hamburger menu. The **Actions** tab in particular held the quick buttons for temp target, profile switch, eCarbs, extended bolus, temp basal, prime/fill, and the various site/CGM/battery changes.

In **AAPS** v4 they are **no longer plugins** — there is nothing to enable in [Configuration](Configuration.md) (the renamed Config Builder) anymore. Everything has moved into the **Manage** bottom sheet, opened from the bottom navigation:

- The **action** items that used to live on the *Actions* tab — Temp Target, Profile, Extended Bolus, cancel temp basal, Prime/Fill, Sensor Insert, Pump Battery Change, etc. — are now entries in **Manage**.
- **Manage → Automation** — *“Create rules that run actions automatically based on triggers.”*
- **Manage → Food** — *“Manage food database entries.”*

![The Manage bottom sheet, which replaces the Actions, Automation and Food plugins](../images/v4/BehavioralChanges/manage_sheet.png)

All of your existing automation rules and food entries are kept; only the way you reach these features has changed.

---

<!-- =====================================================================
     This page is a growing list of v4 behavioural changes.
     Add new changes as their own "## " section, newest grouping as agreed.
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
