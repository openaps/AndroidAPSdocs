
# About this documentation

Initial conten bwelow was based on [a rough draft on Google docs](https://docs.google.com/document/d/1iONZ_uvilgS7yrVDgwNSTiFN1qOLfBiikjL4KbHgvJ0/edit)

Just use this Github page for typing text. Use some kind of whitecard for images (i.e. [Dash001.jpg])

Collect images to be send for final documentation so things can be arranged on the page easily.
Layout can be done later by @Achim.

# Omnipod DASH Patch Pump

## AndroidAPS Omnipod DASH pump Driver Documentation

These instructions are for configuring the Omnipod DASH generation pump (NOT Omnipod Eros). The Omnipod driver is available as part of AndroidAPS (AAPS) as of version X.X

**This software is part of a DIY artificial pancreas solution and is not a product but requires YOU to read, learn, and understand the system, including how to use it. You alone are responsible for what you do with it.**

## Omnipod DASH vs. EROS Differences

These are the main differences between the Omnipod DASH (introduced in 2019) and the current Omnipod EROS pods (introduced in 2013):

  - DASH is identified by blue needle cap (EROS has a clear needle cap), pods are otherwise identical in terms of physical dimensions
  - No need for separate Omnipod to BLE link/bridge device (NO RileyLink, OrangeLink, or EmaLink needed)
  - BT LE connection only when needed
  - May take longer to send commands to DASH (phone dependant)
  - No "no connection to link device / pod" errors.
  - AAPS will wait pod accessibility to send commands
  - On activation AAPS will find and connect a new DASH pod.
  - Expected range: 5-10 meters (YMMV)

## Hardware/Software Requirements (bold items are required)

A new **Omnipod DASH pump** pod (identified by blue needle cap) 

  - **Compatible Android phone** with a BLE bluetooth connection 
Not all phone hardware and Android versions are guaranteed to work.
Please check DASH Tested phones or just try with your phone and tell us the result (phone reference and geographical region, Android version, worked / some difficulties / did not work)
  - **AAPS APK  with DASH driver compiled** using the instructions at AndroidAPS ReadtheDocs- building the APK
If testing Dev version Theo’s Building AndroidAPS for testers
  - **Continuous Glucose Monitor (CGM)** blood glucose (see AAPS CGM/FGM Instructions for supported hardware)

These instructions will assume that you are starting a new pod session; if this is not the case, please be patient and attempt to begin this process on your next pod change.


### Enabling the Omnipod DASH Driver in AAPS

### Omnipod Configuration

### Omnipod (POD) Tab

### Omnipod Settings

### Actions (ACT) Tab

## Troubleshooting

## Best Practices

## Where to get help for Omnipod DASH driver

## Enabling the Dash Driver

## Omnipod DASH Configuration

## Omnipod DASH tab

## Activating a pod

## Commands

  - Bolus
  - Profile change, profile % change
  - Temporary basal
  -  "Disconnect" pod
  -  Deactivating a pod

## Troubleshooting 

  1. Can't connect to pod / Pod in activation with different MAC address
 
## Best Practices 

  1.
  2.

## Where to get help for the DASH driver

  1. The AAPS Documentation [link].
  2. Discord: #androidaps (Dash/usage, [link])
  3. Discord: #omnipos-dash-testing (Dash/technical, [link])
