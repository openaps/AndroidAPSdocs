# Watchfaces

AndroidAPS is designed to be _controlled_ by Android Wear watches.  To achieve this you needed to select the build variant "fullRelease" when [building the APK](/docs/Installing-AndroidAPS/Building-APK) (or "pumpRelease" will allow you to just remote control the pump without looping).  Within AndroidAPS, in the ConfigBuilder you need to enable Wear.  You can access the setting by clicking on the cog.  If you want to bolus etc from the watch then within Wear Setting you need to enable "Controls from Watch".

There are several watchfaces to choose from that include average delta, IOB, currently active temp basal rate and basal profiles + CGM readings graph.  You can also use the AAPS app on the watch to set a temporary target, administer a bolus, use the bolus wizard, prime/fill, and check the status of loop and pump.  Ensure notifications from AndroidAPS are not blocked on the watch. Confirmation of action (e.g. bolus, tempt target) comes via notification which you will need to swipe and tick. To get faster to the AAPS menu, do a double tap on your BG. When doing a double tap onto the BG curve, it will show older/ just newer BG's.

Troubleshooting the wear app: 
*  On Android Wear 2.0 the watch screen does not install by itself anymore.  You need to go into the playstore on the watch (not the same as the phone playstore) and find it in the category apps installed on your phone, from there you can activate it.  Also enable auto update.  
*  Sometimes it helps to re-sync the apps to the watch as it can be a bit slow to do it itself: Android Wear > Cog icon > Watch name > Resync apps.
*  Enable ADB debugging in Developer Options (on watch), connect the watch via USB and start the Wear app once in Android Studio.

If you are using another looping system and want to _view_ your looping detail on an AndroidWear watch, or want to watch your child's looping, then you can build/download just the NSClient APK.  To do this follow the [build APK instructions](/docs/Installing-AndroidAPS/Building-APK) selecting the build variant "NSClientRelease".  There are several watchfaces to choose from that include average delta, IOB, currently active temp basal rate and basal profiles + CGM readings graph.

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to _view_ looping data (if uploaded to nightscout), but you will not be able to interact with AndroidAPS through the watch.  You can choose fields to display such as IOB and currently active temp basal rate and predictions.  If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.
