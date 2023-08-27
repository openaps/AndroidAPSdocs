# Remote control of AAPS
There are four highly effective tools for remotely managing **AAPS**:
 
1) **[SMS commands]**(link to section below) (follower phone can be either Android or iOS), 
2) [**NS Client**](link to section below) (follower phone is Android)
3) [**Nightscout**](link to section below) (Android, iOS or other computer/device).  
4) **Smartwatches** (link to section below).  

The first three are mostly appropriate for carers/parents, but smartwatches are very useful _both_ for carers/parents, and for adults with diabetes themselves. 


![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/36a73018-7856-4ef8-81c5-f5b1515e8eaa)


### Things to consider when setting up remote control of **AAPS** for a child

1.	Think about how you will keep the child’s phone in range of their pump and CGM. This can be challenging with children who are too young to be responsible for a phone. Ensuring you select an AAPS phone with a good bluetooth connection range and finding a comfortable way for the child to carry the pump and phone - if they are old/big enough to have the phone on them -  (_e.g._ a [SPI Belt](https://spibelt.com/collections/kids-belts) may help.
2.	Take your time to set-up and test commands with your child next to you, before starting remote treatment and monitoring. Many parents choose school holidays or weekends.
3.	Make sure other caregivers/teachers are aware of your child's treatment plan and work out how adding in remote control is going to work with/enhance the existing plan. 
4.	Many parents find it helpful to have a separate line of communication with childcare providers, for example a cheap small teacher “follow” phone. 
5.	Examples for school care plans for children of different ages can be found in the [“files section”](https://www.facebook.com/groups/AndroidAPSUsers/files/) of the **AAPS** Facebook page. 
6.	What is your emergency plan for when remote control does not work (_i.e._ network problems or lost bluetooth connection)?  Always consider what will happen if you can’t send a new command, for whatever reason. **AAPS** overwrites the pump basal, ISF and ICR with the current profile values. Only use _temporary_ profile switches (_i.e._ with a set time duration) if switching to a stronger insulin profile, in case your remote connection is disrupted. Then the pump will revert to the original profile when the time expires.

## 1) SMS Commands

You can control **AAPS** remotely via text (SMS) message through a feature known as **SMS Commands**. SMS commands can be sent to **AAPS**  by _any_ type of phone (iPhone/Android). 

**SMS commands are really useful:** 
1. For routine remote control
   
2. If you want to remotely bolus insulin
   
3. In a region of poor internet reception, where text messages are able to get through, but data/internet phone reception is limited. This is very useful when going to remote areas (e.g. camping, skiing).
  
4. If your other methods of remote control (Nightscout/NSClient) are temporarily not working

### **SMS command safety**
If you enable **SMS Communicator** in **AAPS**, consider that the phone which is set up to give remote commands could be stolen, and/or used by someone else. Always lock your phone handset with at least a PIN. A strong password and/ or biometric lock are highly recommended, and ensure this is different from your APK Master password (the password which is required to change **AAPS** settings) .
A second phone number must be enabled for SMS commands to work, even if you only have one primary caregiver/follower. You can then use the second number to temporarily disable SMS communicator (with the command **“SMS stop”**) if your main caregiver/parent phone is compromised. Versions of **AAPS** 2.7 and newer also use an **authenticator app** (link to below for more details). 

### Different types of SMS commands
The [SMS Commands Table] below shows all the possible SMS commands. _Example values_ are given, to aid understanding. The commands have the same range of possible values (targets, percent profile etc.) which are allowable in the AAPS app itself. The commands below have been listed by how commonly used they are likely to be, the first two tables should have most of the SMS commands you need with full looping. 

### SMS commands tables


![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/46a1c9f1-1798-419d-8b45-6de3f8696348)

 

![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/14fff8b8-d9cd-4371-8531-bfb8aea6affd)

 
![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/6c261591-dda7-410a-b665-a08a049c55a3)

 

![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/52c84c90-2770-49a2-99f3-3c23dd2a7bef)


### Authentication or not?

You may notice from the table above that some SMS commands give an immediate response, and some SMS commands require **authenticating** with a security code from an additional app and a PIN (see below (link for more detail). A simple enquiry like “**bg**” (which requests an update on current glucose) is quick to type, doesn’t need authenticating, and returns the **AAPS** status information shown below: 
  
![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/cbece9b9-9363-4a4d-bf58-422bcea6bb2a)


Commands which need more security require a code to be entered, for example:  

![SMS authenticated for markdown](https://github.com/openaps/AndroidAPSdocs/assets/94044064/ffcecb0e-fc2b-457c-92f0-1debb4aa1667)



### **How to set up SMS commands**

The overall process is as follows: 

**1)	Download an authenticator (caregiver phone)**

**2)	Phone settings (AAPS phone)**

**3)	Date and time synching (caregiver and AAPS phone)**

**4)	AAPS settings (APPS phone)**

**5)	Testing SMS commands works (caregiver and AAPS phone)**

   
**Let's get started!** 



1) Download (from the App store or Google play) and install one authenticator of your choice from the list below on the caregiver phone:
  
[**Authy**](https://authy.com/download/)

[**Google Authenticator - Android / iOS**](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&pli=1)

[**LastPass Authenticator**](https://www.lastpass.com/solutions/authentication)

[**FreeOTP Authenticator**](https://freeotp.github.io/)

These Authenticator apps produce a time-limited, one-time 6-digit password, similar to mobile banking or shopping. You can use an alternative Authenticator app, as long as it supports RFC 6238 TOTP tokens. The Microsoft Authenticator does not work.


2) In the **AAPS** phone settings go to Apps > AndroidAPS > Permissions  > SMS  > Allow SMS
 
![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/7c0fcf07-66bf-4093-adc2-2673df5cd4a2)



 
3. In both the **AAPS** phone and the caregiver phone, check the date and time are synched. Exactly how you do this depends on your specific handsets, you may need to try out different settings.
4. 
Example (for Samsung S23): Settings – general management – date and time- automatic date and time 



Some options may be greyed out, due to needing admin via a family account if the phone has been set up as a child account. This date and time setting is called “set automatically” on a caregiver/parent iPhone. If you are not sure if you have synched the handsets, don’t worry, you can set up the SMS commands and troubleshoot afterwards if it seems to be causing problems (ask for help if needed). 
 
![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/c4b3f896-9762-4ada-b270-f2ae2b63eb9b)




 
4a. Now that the phone settings have been checked, in the **AAPS** app itself, use the left hand hamburger menu to navigate to Config Builder: 

 ![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/d8fd556d-6245-45a9-923a-78ea508539af)



4b. Enable “SMS communicator” by checking the boxes, then click the “cog” to get to the SMS communicator preferences screen:

![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/87386eac-252c-4dde-bcd2-203f2b5b1356)


 
Note - as an alternative route to Config Builder, you can also use the new “SMS Communicator tab” at the top of the AAPS screen, then right click on the custom right hand hamburger menu for that page, to get to the SMS communicator preferences screen. 


4c. On the preferences screen enable “allow remote commands via SMS”: 


![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/7321685b-28d5-4de5-b868-1ad0c46e9088)


 
4d. Enter the caregiver phone number(s). Include the country code and exclude the first “0” of the phone number, as shown in these examples:
UK phone number: +447976304596

US phone number: +11234567890

FR phone number:  +33612344567

_etc._ 
Note that the “+” in front of the number may or may not be required based on your location. To determine this, send a sample text which will show the received format in the SMS Communicator tab. 

If you have more than one phone number to add, separate them by semicolons, with NO space between numbers (this is critical!). Select “OK”:  

![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/651d706e-6b9a-4af2-9e9f-0dd6284dfc9b)



 
4e. Choose a PIN which you (and any other caregivers) are going to use at the end of the authenticator code when the SMS command is sent. 
PIN requirements are:
•3 to 6 digits
•not the same digits (_i.e._ 1111 or 1224)
•not sequential numbers (_i.e._ 1234) 

![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/241a6aab-15f4-4579-a97f-b67773b0b192)






 
4e. On the preferences screen select “Authenticator setup”
●	Follow the step-by-step instructions on the screen.
●	Open your installed authenticator app on the _caregiver’s phone_ set up a new connection and
●	Use the caregiver phone to scan the QR code provided by AAPS, when prompted.

5. Test the one-time passcode from the authenticator app on the caregiver phone followed by your pin:
Example:
The token from the authenticator app is 457051
Your mandatory PIN is 2401
Code to check: 4570512401

If the entry is correct, the red text “WRONG PIN” will change automatically to a green “OK”. The process is now complete, there is no “OK” button you need to press after entering the code:

 ![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/49c311fb-d1c8-4622-a4f6-345cedc896fe)



You should now be set up with SMS commands.

### **First steps with using SMS commands**

1)	To check you have set the authenticator up correctly, test the connection by typing “bg” as an SMS message from the caregiver phone to the AAPS phone. You should get a response similar to that shown here: 

![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/652affff-ab61-499d-ad0d-d5cd423e6000)





 
2)	Now try an SMS command that requires the authenticator. To do this, send a text from the caregiver’s phone with the required command to the**AAPS** phone (_e.g._ “target hypo”). The caregiver’s phone will receive a text back, prompting you to enter the **six-digit authenticator password** from the authenticator app, followed by an additional secret **PIN** known only to caregivers/followers (a string of ten digits in total, assuming your PIN is only 4 digits). 
This example is shown below, with the SMS command “target hypo” to set a hypo temp target:
○	In this example, your PIN is 1289
○	Code from your authenticator app is 274127
○	When prompted, text 2741271289

Commands must be sent in English. The response should be in your local language.
When you try sending an SMS command for the first time, try it in the presence of the AAPS phone, to see how it works: 

![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/8794f74a-a17b-41cf-a3e9-636485c0395b)




 
The caregiver’s phone will receive a SMS in reply from **AAPS** to confirm if the remote SMS command has been carried out successfully. There are several possible reasons the command may not be successful:
●	SMS commands setup isn’t complete/correct
●	You sent a command which had an incorrect format (like “disconnect pump 45” instead of “pump disconnect 45”)
●	You used an incorrect, or expired authenticator code (it is usually good to wait a few seconds for a fresh code, if the current one is about to expire)
●	The code+PIN was OK, but there was a delay in the SMS leaving/arriving, which led AAPS to calculate that the authenticator code had expired
●	The AAPS phone is out of range/contact with the pump
●	The system is already busy delivering a bolus
If your command is successful, you will receive a reply to confirm this. If there is a problem you will receive an error message.
Common errors are shown in the examples below: 

![image](https://github.com/openaps/AndroidAPSdocs/assets/94044064/26567167-4816-4e46-ab47-9e12d4c05567)






  
#### **Additional safety notes on SMS commands**
●	The default minimum time delay between bolus commands is 15 minutes. For safety reasons, you have to add at least two authorised phone numbers to change this to a shorter time delay. If you try to remotely bolus again within 15 minutes of the previous bolus, you will receive the response “Remote bolus not available. Try again later”
●	If you want to remove the ability of a caregiver phone to send SMS commands, use the emergency button “RESET AUTHENTICATORS” in AAPS (see preferences screenshot above, link) or send the SMS command “SMS stop”. By resetting authenticators you make ALL the caregivers' phones invalid. You will need to set them up again.

## **Delivering mealtime boluses through SMS commands**
Remote bolusing of insulin can _only_ be done via SMS Command, it cannot be actioned through NightScout or NSClient. Carbs however, can be announced through any of the three methods. It is not possible to send both carbs and insulin commands in one single SMS message. These commands must be sent separately as follows: 
1)	Send the insulin bolus (_e.g._“bolus 2” will command a bolus of 2 units) through SMS commands is equivalent to using the “syringe” icon in **AAPS**. 
2)	Send the carbs (_e.g._ “carbs 20” will announce 20g of carbs). This is equivalent to using the “carbs” tab in **AAPS**.
   
**The order in which you send these commands is important**. If you announce a large amount of carbs by any route, and have SMBs enabled, **AAPS** may immediately respond by giving a partial bolus of insulin. So, if you then try to send an insulin bolus _after_ announcing the carbs, you may have a frustrating delay and a “bolus in progress” message, and you then need to check what has been given as an SMB. Or, if you do not realise an SMB is being delivered, and your own subsequent bolus is also successful, too much insulin may be delivered for the meal overall. Therefore, if bolusing for meals remotely, always send the insulin bolus _before_ the carb announcement. If you prefer, you can use a combination of Nightscout or NSClient with SMS commands. Carbs can be announced through Nightscout without any authentication (see instructions sub section below) , and are therefore quicker than SMS commands. 

### SMS commands troubleshooting and FAQ

**Q: What _can’t_ we do with SMS commands?**

1)	**You cannot set a _temporary_ profile switch** (so for example, setting “profile exercise“ for 60 minutes), although you can permanently switch to “profile exercise”. Temporary profiles switches can instead be set through Nightscout or NSClient.

2)	**You cannot cancel automations** or **set user-defined targets** but there are approximate solutions: 
As an example, imagine the normal profile target is 5.5. You have set an automation in AAPS, to always set a high target of 7.0 between 2.30pm and 3.30pm because of a sports class in school, and a condition of the automation is that “no temp target exists”. This week, you have been told at short notice that the sports class is cancelled, and is being replaced by a pizza-eating session, but your kid is already at school with the AAPS phone. If the high temporary target of 7.0 is started by the automation and you cancel it (on the AAPS phone, or remotely) the conditions for the automation are still met and **AAPS** will simply set the high target again, a minute later.

**If you did have access to the AAPS phone**, you could uncheck/modify the automation, or, if you don’t want to do that, you could simply set a new temp target of 5.6 for 60 min under the Actions Tab or by pressing on the target tab. This would prevent the automation from setting the high target of 7.0.   

**If you don’t have access to the AAPS phone** SMS commands can be used for an approximate fix: for example, by using the command “target meal” to set a target of 5.0 for 45 mins (other default targets are 8.0 for activity or hypo, see Table). However, with SMS commands you cannot specify a _specific_ value target value (of 5.6 for 60 minutes, for example), you would need to use NSClient or Nightscout to do this.   

**Q: What happens if I change my mind about a command I have just sent?**

**AAPS** will only deliver on the most recent command. So, if you type “bolus 1.5”, and then, without authenticating, you send a new command “bolus 1”, it will ignore the earlier 1.5 command. AAPS will always send the caregiver's phone a response to confirm what the SMS command is before you are prompted to enter the authentication code, as well as a response following the action. 

If you don’t get a response to an SMS command it could be for one of these reasons: 

1)	The message has not got through to the phone (network issues).
2)	**AAPS** is still in the process of processing the request (_e.g._ a bolus, which can take some time to deliver depending on your bolus rate).
3)	The AAPS phone does not have good bluetooth connection to the pump when the command is received, and the command has failed (this usually creates an alarm on the AAPS phone). 
You cannot stop a command once it has been authenticated. Many commands (apart from bolusing and carb announcements) can be easily reversed, or actions taken to mitigate the effects. For errors in bolusing and carb announcements, you can still take action. For example, if you have announced 20g carbs but your child only eats 10g and you (or an onhand caregiver) is unable to delete the treatment in the **AAPS** phone directly, you could set a high temporary target, or set a reduced profile, to encourage **AAPS** to be less aggressive.

Q. Why am I getting multiple SMS texts of the same message?

If you receive the same message repeatedly (_e.g._ a profile switch) you may have accidentally set up a looping condition with other apps. This could be xDrip+, for example. If so, please ensure that xDrip+ (or any other app) does not upload treatments to NightScout. 

Q. I’ve just set up SMS commands and I am now getting far too many text messages. Can I reduce the frequency, or make them stop?

Using SMS commands may generate a lot of automated messages from the AAPS phone to the caregiver’s phone. You will also receive messages, for example “basal profile in pump updated” if you have automations set up in **AAPS**. It can be useful to have unlimited SMS allowance on your AAPS phone plan (and for each caregiver phone used) if a lot of SMS will be sent, and to deactivate SMS notifications, alarms or vibrations on all phones. It is not possible to use SMS commands and not receive these updates. 
Because of this, you may want an alternative way to communicate directly with your child (if they are old enough), instead of SMS. Common alternative communication apps used by **AAPS** caregivers include Whatsapp, Lime, Telegram, and Facebook Messenger. 

Q. Why are SMS commands not working on my Samsung phone?

There was a report of SMS commands stopping after an update on a Samsung Galaxy S10 phone. This was solved by disabling ‘send as chat message’.

![Uploading image.png…]()




 

**Q. How can I fix issues with the Android Messages App?**

If you are having issues sending or receiving SMS commands with the Android Messages app, disable end-to-end encryption on both caregiver and dependent’s phones.
●	open the specific SMS conversation in Messages
●	Select the options ellipsis in the top right corner
●	select “Details”
●	Activate “Only send SMS and MMS messages”
   
