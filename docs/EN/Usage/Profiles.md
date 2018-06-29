# Profile switch

On starting your AndroidAPS and selecting your profile, you will need to do a "Profile switch" event with zero duration (explained later). By doing this AAPS starts tracking history of profiles and every new profile change requires another "Profile switch" even when you change content of the profile in NS. Updated profile is pushed to AAPS immediately but you need to switch the same profile again (in NS or AAPS) to start using these changes.

Internaly AAPS creates snapshot of profile with start date and duration and is using it within selected period. Duration of zero means infinite. Such profile is valid until new "Profile switch".

If you use "Profile switch" with duration profile is switched back to previous valid "Profile switch"

If you use local AAPS profiles (Simple, Local, CPP) you have to press button there to apply these changes (it creates proper "Profile switch" event).

Within the "profile switch" you can choose two changes which used to be part of the Circadian Percentage Profile:
  *  Percentage - this applies the same percentage to all parameters. If you set it to 130% (meaning you are 30% more insulin resistant), it will up the basal rate by 30%. It will also lower the ISF and IC accordingly (divide by 1.3 in this example). It will be sent to the pump and then be the default basal rate. The loop algorithm (open or closed) will continue to work on top of the selected percentage profile. So for example separate percentage profiles can be set up for different stages of the hormone cycle.
  *  Timeshift - this moves everything round the clock by the number of hours entered. So for example, when working night shifts change the number of hours to how much later/earlier you go to bed or wake up.

This mechanism allows much precise calculations to the past and track profile changes.

In closed loop mode is recommended to turn on automatic update of profile in pump (in settings), this will mean any updated you make to your profile will be copied locally to the pump in case of failure.

<b>Troubleshooting Profile Errors</b><br>
*  'Invalid profile' or 'Basal Profile not aligned to hours' error message will appear if you have any basal rates or I:C rates not on the hour.  The DanaR and DanaRS pumps do not support changes on the half hour.
*  'Received profile switch from NS but profile does not exist locally' or 
Go either to Treatments tab in AndoridAPS and select Profile Switch, 'remove' the date and time that was mentioned in the error message.  Or go to your mlab collection, search in the treatments for profile switch and delete the date and time that was mentioned in the error message.
![mlab](https://files.gitter.im/MilosKozak/AndroidAPS/I5am/image.png)
*  'DIA 3hr too short' error message will appear if your duration of insulin action in your profile is listed at a value that AndroidAPS doesn't believe will be accurate.  Read about [selecting the right DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), and edit it in your profile then do a Profile Switch to continue.
