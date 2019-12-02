# Troubleshooting NSClient

NSClient rely on stable communication with Nightscout. Unstable connection leads to synchronization errors and high data usage.

If nobody is following you on Nightscout you can pause NSClient to save (a lot) battery life or setup connection only on wifi and during charging.

* How to detect unstable connection?

Go to NSClient tab in AAPS and watch the log. Common behavior is to receive PING every ~30s and almost none reconnection messages. If you see many reconnections there is a problem. Since AndroidAPS 2.0 when such behavior is detected NSClient is paused for 15 minutes and message "NSClient malfunction" on Overview is displayed.

* Restart

What you should try as a first step is restart both: Nightscout and then phone to see if the issue is permanent

* Phone issues

Android may put your phone into a sleep. Check you have exception for AndroidAPS in power options to allow run it on background all the time. Check it again on strong network signal. Try another phone.

* Nightscout

If you are on Azure for many people helped to move to Heroku. Recently was reported Azure workaround to set in Application settings HTTP protocol to 2.0 and Websockets to ON

* If you still get an error...

Check the size of your database in mLab. 496MB means it is full and needs to be compacted. [Follow these OpenAPS instructions for checking the size of your database](https://openaps.readthedocs.io/en/latest/docs/Troubleshooting/Rig-NS-communications-troubleshooting.html#mlab-maintenance). If compacting does not work, you should consider donating your AndroidAPS data to the Data Commons (for research) before deleting any data collections. There are [instructions in the OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Give%20Back-Pay%20It%20Forward/data-commons-data-donation.html) for how to accomplish this.