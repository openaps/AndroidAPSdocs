(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Αντιμετώπιση προβλημάτων του NSClient

NSClient relies on stable communication with Nightscout. An unstable connection leads to synchronization errors and high data usage.

If nobody is following you on Nightscout you can choose to pause NSClient to save battery life or you can choose to setup NSClient so that it only connects when on Wi-Fi and/or during charging.

* How to detect an unstable connection?

Go to NSClient tab in AAPS and watch the log. The expected behavior is to receive a PING every ~30s and almost no reconnection messages. If you see many reconnections, then there is a problem.

Since AndroidAPS version 2.0, when such behavior is detected, NSClient is paused for 15 minutes and the message "NSClient malfunction" is displayed on the main Overview screen.

* Επανεκκίνηση

What you should try as a first step is restart both: Nightscout and then phone to see if the issue is permanent

If your Nightscout is hosted on Heroku, you can restart Nightscout by: Logging into Heroku, click on your nightscout app name, click on the 'More' menu, then 'Restart all dynos'.

For other hosts, please follow your hosts guidance documentation.

* Θέματα τηλεφώνου

Android may put your phone into a sleep mode. Check if you have an exception for AndroidAPS in your phones power options to allow it to run in the background all the time.

Check the NSClient again when in strong network signal location.

Try another phone.

* Nightscout

If your site is hosted on Azure, many people have found that connection issues have improved since moving to Heroku.

A workaround to connection issues in Azure is to set in Application settings HTTP protocol to 2.0 and Websockets to ON

* Εάν εξακολουθείτε να έχετε κάποιο σφάλμα...

Check the size of your database in MongoDB (or via the database size plugin in nightscout). If you are using the free tier in MongoDB, 496MB means it is full and needs to be cleaned up. [Follow these Nightscout instructions for checking the size of your database and clearing out data](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Before clearing data from your database and if you haven't already set it up, you should consider donating your AndroidAPS data to the Open Humans project (for research). The instructions are on the [OpenHumans configuration page](../Configuration/OpenHumans).