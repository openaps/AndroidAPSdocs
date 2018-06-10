# Development branch 

**Attention:** The dev version of AndroidAPS is only for developers and testers comfortable dealing with stacktraces, looking through log files and maybe firing up the debugger to produce bug reports that are helpful to the developers (in short: people that know what they are doing without being assisted!). Therefore many unfinished features are disabled. To enable these features enter **Engineering Mode** by creating a file named `engineering_mode` in the same directory where you would find the log files. Enabling the engineering mode might break the loop entirely.

***

The most stable version of AndroidAPS to use is that in the [Master branch](https://github.com/MilosKozak/AndroidAPS/tree/master).  It is advised to stay on the Master branch while you complete the Objectives and get practiced at looping.

However, the [Dev branch](https://github.com/MilosKozak/AndroidAPS/tree/dev) is a good place to see what features are being tested and to help iron out the bugs and give feedback on how the new features work in practice.  Often people will test the Dev branch on an old phone and pump until they are confident it is stable - any use of it is at your own risk.  

A short summary of some of the changes to old features or development of new features currently in the Dev branch is listed below, and links to any key issues known will be shared (if applicable).

**Super Micro Bolus (SMB)**<br>
More can be read on [Super Micro Boluses (SMB) on OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-smb).<br><br>
Remember that you are choosing to test a still-in-development feature. Do so at your own risk & with due diligence to keep yourself safe.<br><br>
You should have run basic closed looping for more than four weeks (having completed Objective 7), and be very aware of all the types of situations in which your APS might fail.<br><br>
You may need to adjust your settings to allow SMB to work effectively.  A good place to start is increasing your max IOB to normal meal bolus + 3x max daily basal.  But remain vigilant and adjust settings with care.

<br><br><br>
As with all updates, previous code has been cleaned, improved and bugs fixed.
<br><br>
If you find a bug or think something wrong has happened when using the Dev branch, then view the [issues tab](https://github.com/MilosKozak/AndroidAPS/issues) to check whether anyone else has found it, or add it yourself if not.  The more information you can share here the better (don't forget you may need to share your [log files](https://github.com/MilosKozak/AndroidAPS/wiki/Accessing-logfiles)).  The new features can also be discussed in the [gitter room](https://gitter.im/MilosKozak/AndroidAPS).
<br><br>
If you would like to be up-to-date on the Dev Branch you can use the same steps as already outlined in the [[Update to new version|Update-to-new-version]] page. You just need to change to the corresponding "dev"-Branch in Android Studio. See [[Selecting Branch|Update to new version#selecting branch]] for details.
