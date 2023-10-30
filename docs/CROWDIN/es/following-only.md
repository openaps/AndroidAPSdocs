# Following AAPS (no interaction with the AAPS system)

In addition to the range of possibilities available for remotely controlling _and_ following **AAPS** which are described at [remote control](docs/EN/remote-control.md), there are several additional apps and devices which the community has developed, to simply follow numbers (glucose levels and other information), without interacting with AAPS.

A good overview of the extensive options available for following **AAPS** is at [Nightscout follower](https://nightscout.github.io/nightscout/downloaders/#) webpage; if you expand the menu on the left-hand side:

![imagen](https://github.com/openaps/AndroidAPSdocs/assets/94044064/dfa981c1-5a15-4498-88d2-0fd1462d8242)

The most common strategies used in combination with **AAPS** are explained in more detail below.

### Smartphone apps

These are some of the main “follower” apps used by **AAPS** users. All of these apps are “free”:

1)  Dexcom Follow (Android/iOs) 2)  Nightguard (iOs) 3)  Nightwatch (Android) 4)  xDrip+ (Android) 5)  Shuggah (iOs) 6)  Sugarmate (iOs) 7)  Spike (iOs)


#### 1) Dexcom Follow (compatible with both Android and iOs devices)

![imagen](https://github.com/openaps/AndroidAPSdocs/assets/94044064/ded350b0-6012-4104-b21c-5d5bfd91aa65)

●   Dexcom Follow is compatible with a wide range of handsets (both Android and iPhone). Dexcom Follow can be used even if you are not using the official Dexcom app to receive sensor data.

●   Many caregivers are familiar with Dexcom Follow, preferring its clear interface over something more complicated.

●   Dexcom Follow is very good for teachers/grandparents and people who know very little about diabetes and sugar levels. It has customisable alerts (BG level, what sound to play etc). Alarms can be completely switched off if needed, which is very useful if you have a sensor which is still settling down and creating multiple fake lows.

#### setting up Dexcom Follow: how-to-guide

If you use the unofficial Dexcom app BYODA for receiving sensor data, you may be able to send invites to followers from within the BYODA app. You should also be able to send invitations to Dexcom Follow from Xdrip+ (settings - cloud upload-Dexcom share server upload, see instructions here:

https://xdrip.readthedocs.io/en/latest/use/cloud/?h=#dexcom-share-server-upload

However, some users have reported not being able to send invite emails to Dexcom followers from these third-party apps. In Xdrip+ the invite request may just result in the message “invite not sent”.

If you find it difficult to invite new Dexcom Followers from these 3rd party apps, then one solution is to install the official Dexcom G6 app, send the invite, and then uninstall the official app.

The steps to do this are as follows:

1)  Install the official “Dexcom G6” app on _any_ smartphone (Android/iPhone), this can be the Follower phone, if it is more convenient. 2)  Log in with your Dexcom username and password, this is the same login details you would use for Dexcom Clarity, if you are already a current Dexcom/Clarity customer. If you don’t have a Dexcom login, there is the option to create a new login at this point.   
3)  Swipe through the introduction menus. 4)  Add “no code” for the sensor code. 5)  Under Transmitter SN select “enter manually” and enter any valid transmitter code (use one of your expired transmitter codes, if you know one, so it doesn’t interfere with the running of your current transmitter, they follow a specific format of certain numbers and letters: “NLNNNL” and only use certain combinations, so it’s easiest to use one you already know is valid). 6)  Once the app is trying to find the transmitter and sensor, you will be able to invite followers: select the small three dots in the top left of the app, and add new follower. You can also use this if one of your followers has changed their handset and needs a fresh invite, here you can delete them from the follower list and resend a new invite email for them to use on their new handset. 7)  On the Follower phone, install Dexcom Follow by downloading it from the App Store (iPhone) or Play (Android). Set up the Dexcom Follow app, and you will be prompted to open your email to find the invite to be a Follower.    
8)  You can now delete the official Dexcom G6 app.

For Dexcom Follow, the sensor data is then exported from the AAPS phone either directly from BYODA, or from Xdrip+, depending on which app you are using.


#### 2) Nightguard (iOs only)

![imagen](https://github.com/openaps/AndroidAPSdocs/assets/94044064/f2c7d330-9889-4526-9a5c-bbb012d804ab)

Pros (as reported by users):

●   simple, user-friendly interface.

●   Swipe button or shake phone to snooze alarms at different intervals ranging from 5 mins to 24 hours

●   Customise alarms (high, low alerts, missed readings when no data for 15-45 minutes.

●   Fast rise/drop over 2-5 consecutive readings (you choose). Can also choose the delta between two individual readings

●   Smart snooze so doesn't alert if levels are moving in right direction

●   There is a Care tab which appears to enable you to set a new temp target for a certain duration, delete the temp target or enter carbs.

Cons (as reported by users)

●   Only available for iOS

●   The TT shows as 5 mmol regardless of which TT level is set

●   Never shows Temp Basal rate even though it shows TB

#### 3) Nightwatch (Android only)

![imagen](https://github.com/openaps/AndroidAPSdocs/assets/94044064/855c3a74-e612-4a6f-8b63-18d286ea0a3f)


●   Nightwatch markets itself as a Nightscout client and monitors the user’s Nightscout glucose levels on either Android phone or tablet.

●   The app can be downloaded from Google play and displays BG data in real time.

●   The user can be alerted with customised noisy low and high alarms set.

●   BG data can be viewed in either mmol/L or mg/dL.

●   It requires Android 5.0 and up.

●   It has a dark Ul, large readings and buttons, designed for usage at night.

### 4) xDrip+ (Android only)

Followers can be alarmed by using the xDrip+ in follower mode.  [xDrip+](../Configuration/xdrip.md). (mainly BG values and **alarms**)


### 5) Shuggah (iOs only)

Historically, it has been difficult to get hold of the app of the iOs or "Apple" version of xDrip+ (known as **xDrip4iOS**), in order to follow **AAPS**.

A free, modified version of xDrip+4iOs** has become available as **Shuggah**. This can be downloaded directly from the Apple App store on iPhone or tablet.

:::{admonition} Further detail about how to attempt to obtain the original **xDrip4iOS** app
:class: dropdown


 [**xDrip4iOS**](https://xdrip4ios.readthedocs.io/en/latest/?fbclid=IwAR3lmPR2O9lgZW7xLi1GHdH8SeeMRtekmBiZFlEBCrM13BoJph0uezao_gQ) is an Apple version of **xDrip+**, and the [XdripiOs Facebook group](https://www.facebook.com/groups/853994615056838/announcements) is the main community support. **xDrip4iOS** can connect to many different CGM systems and transmitters and display blood glucose values, charts and statistics as well as provide alarms. It can also upload to Nightscout or act as a [follower app for Nightscout](https://xdrip4ios.readthedocs.io/en/latest/connect/follower/). However, it is difficult to actually _get_ the **xDrip4iOS** app for your phone.

"How can I get **xDrip4iOS** on my iPhone?" There are two options:
1. If you have a Mac and an Apple Developer account (99 EUR/USD per year) then you can build your own xDrip4iOS by following the instructions below:

https://xdrip4ios.readthedocs.io/en/latest/install/build/

If you want, you can then become a "releaser" and share a Personal Testflight with up to 100 other people to help them: https://xdrip4ios.readthedocs.io/.../personal_testflight/

2. You join the [XdripiOs Facebook group](https://www.facebook.com/groups/853994615056838/announcements) and monitor the posts… wait for somebody to offer an invitation to their Personal Testflight releases in the group._**You are not permitted to ask for the app**_ (read their group rules).

An easier solution is therefore to download the **Shuggah** app.

:::

#### [Shuggah](https://apps.apple.com/sa/app/shuggah/id1586789452)

App:

![imagen](https://github.com/openaps/AndroidAPSdocs/assets/94044064/03fc0c6a-067a-40ea-8be3-c66d4ce8b5d9)

![imagen](https://github.com/openaps/AndroidAPSdocs/assets/94044064/fae3ec63-2c2c-4152-ab42-97f9744a8f36)


"What is Shuggah?" A group of Ukrainian developers took the project code for xDrip4iOS (which is shared publicly on Github) and released it on the App Store under a business account (the app is free, and their intentions are good). The app had to be slightly modified to add a privacy statement and disclaimer to get past the review, but the rest of the app should be the same as xDrip4iOS. The Shuggah release is not officially managed by the xDrip4iOS developers so it cannot be guaranteed that it will function in the same way as xDrip4iOS, or that Apple won't remove it from the App Store at some point.

The [XdripiOs Facebook group](https://www.facebook.com/groups/853994615056838/announcements) supports xDrip4iOS, Shuggah, as well as the Apple Watch app.


### 6) Sugarmate (iOs)

![imagen](https://github.com/openaps/AndroidAPSdocs/assets/94044064/340cd555-a9e0-4a20-a131-36c078f5b8ea)

![imagen](https://github.com/openaps/AndroidAPSdocs/assets/94044064/21b83c41-85c6-4619-a702-a65450768855)


[Sugarmate](https://sugarmate.io/) is available to download onto iPhones from the App store. Sugarmate is compatible with: ●   Apple iPhone (Requires software version 13.0 or later) ●   Apple iPad (Requires software version 13.0 or later) ●   Google Android (Save web app to your homescreen)

It has been reported by users of Sugarmate that it can be used with Apple CarPlay in the USA to display glucose readings when driving. It is not yet established if this is possible in countries outside the USA. If you know more about this, please add details in here to the documentation by completing a pull-request (link) which is quick and easy to do.


### 7)  [Spike](https://spike-app.com/) on iOS

![imagen](https://github.com/openaps/AndroidAPSdocs/assets/94044064/1129ba00-8159-4940-936e-76fd4ae45a2d)

Spike can be used as a primary receiver or as a follower app, providing BG, alarms and IOB and more. Whilst the website is no longer biDetails are [here](https://spike-app.com/#features2). Details and support can be found on [Facebook](https://www.facebook.com/groups/1973791946274873) and Gitter](https://gitter.im/SpikeiOS/Lobby).

To install Spike, see [here](https://spike-app.com/#installation)

### Devices for following AAPS

Devices include:
1.  M5 stack/M5 stickC
2.  Sugarpixel
3.  PC (Teamviewer)

#### 1. M5 stack


![imagen](https://github.com/openaps/AndroidAPSdocs/assets/94044064/061edb52-56d2-45f4-b3da-82b2036d7bc6)




The [M5Stack](https://github.com/mlukasek/M5_NightscoutMon) is a small box which can be programmed for many applications, one of which is displaying sensor glucose values and trends, IOB and COB. It is in a plastic box, equipped with a colour display, micro SD card slot, 3 buttons, speaker and internal battery. It is a great blood sugar monitor and is relatively easy to set-up if you have a Nightscout account. Users typically run it on their home wifi, but some users report using it as a display when motorbiking, by running it off a phone wifi hotspot.

#### 2. Sugarpixel

SugarPixel is a device for secondary glucose display alert system for continuous glucose monitoring that connects with Dexcom app or Nightscout app on the user’s smartphone. The device displays real time blood sugar readings. This CGM hardware monitor benefits from random tone generation audio alerts (which are incredibly loud), vibration alerts for hearing impaired, customisable display options and native multi-user following.

![imagen](https://github.com/openaps/AndroidAPSdocs/assets/94044064/39137beb-17cc-4c87-98b7-cf1831d484cb)

![imagen](https://github.com/openaps/AndroidAPSdocs/assets/94044064/87883ebb-9683-4aa8-8014-49c2ca902c93)

●   SugarPixel has multiple display options in mg/dL and mmol/L to suit the user’s needs with colour-coded glucose values. ●   The standard face displays BG, Trend Arrow, and Delta. Delta is the change + or - from the last reading. ●   SugarPixel can be customised for use in low brightness with the BG and Time face to see the user’s BG reading and current time on the user’s nightstand. ●   SugarPixel’s xolour face utilises the entire display to show a single colour representing the BG value. This enables the user to see BG readings at a distance through the window while outside playing in the backyard, patio, or pool. ●   The Big BG face is useful for nightstand users who wear glasses or contact lenses.


#### 3. PC(Teamviwer)
Some users find a full remote access tool like [TeamViewer](https://www.teamviewer.com/) to be helpful for advanced remote troubleshooting.


 





