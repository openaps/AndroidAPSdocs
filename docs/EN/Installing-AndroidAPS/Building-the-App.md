# **Building the App**

Prerequisites: 

- You have read the whole of this section “**3. Building the App**” before starting

- You have a windows’ PC and a Android phone (which will host the AAPS app) are running supported versions (windows 10+,  Android 9+)  and **all the latest security updates, have internet access and admin privileges**, since some steps require downloading and installing programs.

- The Android phone is already tied to your personal”everyday”  email such as a Gmail account.\
  In this tutorial we use an alias "Donald Muck" with email address: <donald.muck42@gmail.com> as an example

- In this  tutorial:

  - Your CGM will send data to **AAPS**
  - **AAPS** will control your pump 
  - **AAPS** will receive BG from the CGM
  - **AAPS** will send BG & Treatments to NightScout.

Note: There are several ways to build and configure an **AAPS** system. Here we provide a step-by-step guide for building and installing the AAPS app for the most common scenario (Windows PC). 

## **Windows PC setup & building AAPS**

This section will get you ready for building AAPS, by setting up a dedicated email account, and downloading and installing  **Android Studio** You will then download **AAPS** source code from the internet and  build the AAPS app This includes several steps to facilitate day-to-day use, any required maintenance, tracking and troubleshooting.

### **Create an AAPS dedicated google account**

(⌛ About 5 minutes)

![](https://lh7-us.googleusercontent.com/7bTK5XP7dIfA92fYcIV_MCabR3OauDwDiKDDvAE0DNs_v-E1p3n2ZGXsJucyrCLguVKKYV9c3OekFb3qbTjL0xCXtfaB1eo4MxiGQ63r_DUfmQQjY800M3M9AG-epNtasg9jIwpJRHnGs0q7aSTHzn0)

Since you are using an Android phone it is recommended to have a personal email account tied to your phone and which has access to an online drive (such as Gmail which has Google Drive). Some AAPS users have a dedicated email account and drive set up only for their AAPS usage (like parents or caregivers). Other AAPS users prefer to use their main email account (and online drive, if available) for AAPS as well.\
Potential advantages of using a dedicated Google account for AAPS: 

:::{admonition} why a dedicated google account?

:class: note

- Dedicated Google drive space means you will not risk filling up your personal Google drive limit with **Export Preferences**.
- Each version of **AAPS** (and supporting apps like xdrip+, BYODA, etc) will be stored in one single place which is independent of your computer hardware. If your PC or phone is stolen/lost/broken you will still have access.
- By harmonizing the setup, it will make online support simpler across users with similar folder structure.
- Depending on the setup (see below), you will have a separate identity as an alias to communicate within the community which can protect your privacy. 
- Children with T1D can preserve their own “everyday” email account as minors while using **AAPS** and associated features which require an adult account.
- Gmail also allows you to register up to 4 accounts under the same phone number.\
  :::

If you want to set up a dedicated Google account and backup Google drive for AAPS either watch the video below, or follow the step-by-step guide. If you don’t want to do this, you can jump straight to building the app (link).

## How to set up a dedicated Google account for AAPS

Video: <https://drive.google.com/file/d/1dMZTIolO-kd2eB0soP7boEVtHeCDEQBF/view?usp=drive_link> 

#### Step-by-step guide to setting up a separate Google account and drive: 

In this example: 

- Your existing “_Everyday_” Google account is <donald.muck42@gmail.com>  using Gmail; ![](https://lh7-us.googleusercontent.com/sG3XOLdX0ZRspnRNHJ-zmABDFXDImANywvfkHwmLhIyTDSfzhUCLRPP-e-iU-zrHtIdw6Qh59vPpe-jaBsYhT5h5CxrdoEitHvLEDh418vym4ovkDI_HbS5O_vSSnomBDl22hZ6aAji-C3LuLYRIMZQ)
- new “_AAPS_” email account will be: <donald.muck42.aaps@gmail.com>; ![](https://lh7-us.googleusercontent.com/GgLEy8NhW9bUExGzEX_T7c58KC1vu1SISbnqIvmbDBadRPXNJa0WWt49oh-GLHgGF3x_yQvhwFnJUVq0B2IfJPRRf37C7seRC30Di45rF_5INdlqGy95JFmzprydeKrZAP_aPciPpOCe9S86pE7bd50)

Things to consider:

- You could use a name different from your own name that has relevance to the account (like t1dsuperstar) for privacy reasons. That way you can use it in AAPS public forums as well while keeping your own identity private. Since Google requires a recovery email and phone number, it is still traceable.
- The new “_AAPS_” account will use the same phone number for verification as your “_everyday_” one. It will use the “everyday” email address for verification;
- We will setup email forwarding such that any email sent to the new dedicated AAPS account will be forwarded to the primary one (so there is no need to check two different mailboxes);
- Use separate passwords for your _everyday_ Gmail account and the AAPS-dedicated Gmail account
- If you use google “2-step verification” (aka multifactor) authentication for one Gmail account, you might as well do it for both Gmail accounts.
- If you plan to use Google “Passkeys”, make sure you register multiple devices. This is so you don’t lock yourself out. Only do it on devices that nobody else can access (ie: not on a PC with a shared account that other people can unlock).

 

#### Go <https://account.google.com> 

 If already logged into Google, the scenario below will redirect you to your “Everyday” **Myaccount** page. 
(1) Click on the top right of the page on your profile picture (in the case a simple ![](https://lh7-us.googleusercontent.com/sG3XOLdX0ZRspnRNHJ-zmABDFXDImANywvfkHwmLhIyTDSfzhUCLRPP-e-iU-zrHtIdw6Qh59vPpe-jaBsYhT5h5CxrdoEitHvLEDh418vym4ovkDI_HbS5O_vSSnomBDl22hZ6aAji-C3LuLYRIMZQ)) 
(2) select “_add another account_”.
![](https://lh7-us.googleusercontent.com/6hnRizhxJMvXBa4ooFmPsyuvdV1o4MvqvW95uCe03h05rTXxrLyGLaDOomPJcFZI8NQFip3GApyqFTBg3EcSpn9AqdH-7db68It6qiD4D_pGIY2p5Wio_BSwhR6OxWX0upkxpNJBRCPIIZaLH1umwag)


####  on the Gmail page enter your NEW dedicated account: 

- Enter the new account: 
- Create Account
- for my personal use. 


 #### Next enter:
 - Enter firstname
 - lastname
 - birthdate (needs to be an Adult age)

#### Choose your NEW email address

This examples appends “.AAPS” to Donald Muck’s existing one…\
Set a password

####  Enter a phone number which can receive Gmail’s SMS verification

Gmail will now send you a unique code to enter for validation.

#### Enter the recovery email address, 

In this case it will be your existing “_everyday_” email…

#### Finishing up the account.

Gmail will display the account name, 

it will ask you to accept Gmail’s terms and conditions & confirm your personalization settings

#### Customizing the new profile.

At this point you should be on Gmail’s MyAccount page showing your new AAPS dedicated email account… The profile picture will be set by default to the first letter of your name. Change it to something unique to avoid confusion… in this Donald.Muck.AAPS has replaced ![](https://lh7-us.googleusercontent.com/sG3XOLdX0ZRspnRNHJ-zmABDFXDImANywvfkHwmLhIyTDSfzhUCLRPP-e-iU-zrHtIdw6Qh59vPpe-jaBsYhT5h5CxrdoEitHvLEDh418vym4ovkDI_HbS5O_vSSnomBDl22hZ6aAji-C3LuLYRIMZQ) with ![](https://lh7-us.googleusercontent.com/GgLEy8NhW9bUExGzEX_T7c58KC1vu1SISbnqIvmbDBadRPXNJa0WWt49oh-GLHgGF3x_yQvhwFnJUVq0B2IfJPRRf37C7seRC30Di45rF_5INdlqGy95JFmzprydeKrZAP_aPciPpOCe9S86pE7bd50)

![](https://lh7-us.googleusercontent.com/iAFKUFfY40xlg_9DoUyuOihEeEisNw7Z6vPF9eimHybuY9KcQY-v6J7T_ArEOSNsCxAD8SG2O9lhY-51lMpXc6HP0CFLUO0QPdikqNqyGoPcMdVKBuHw4ZRhjb5aXWFRQ_qiZq1lIj9BBoe0EZlrDPk)\
![](https://lh7-us.googleusercontent.com/LxDBSbDv6kZbTX4j-ws2wb9sIj7hLXE3Mf57t6ZH26Yuov8b2NiNAkICID_gDBAgwEJiSVMWW_JEVUfDeTLKvGZip5Lx6sHoVdWaZCiAPeWel_XeIG8ceGoQ_rc4arDyCPxoXR2IabP8iADle3eeMlw)

#### Configuring the new Gmail account

So that you don’t need to monitor a separate email account, forward all the emails from the new dedicated AAPS’ account to your everyday account \
This part can be a bit confusing since you will have to switch back and forth between both accounts. In order to make it a bit easier, open 2 separate browser windows on top of each other:

1. Move your existing browser to the top of your screen and resize it such that it only takes about half of the top of the screen… 
2. Right click on your Browser logo in your taskbar 
3. From the menu select “New Window”... and adjust it so it only takes the bottom half of the screen.

<!---->

#### Open the Gmail website on both windows

Open <https://gmail.com>  in each browser window and make sure Donald Muck’s personal account is on top and the new dedicated **AAPS** account is on the bottom of the screen, and is easily identifiable by the profile picture in the top right corner. (if needed you can always switch accounts by clicking on the profile picture and selecting the proper one like you did earlier in step 6)

![](https://lh7-us.googleusercontent.com/xXYgAUBc9Og_n1lFDx8bvFNo2y4xbwsiIgDGX_H4x1nedYSGRYIrXqb7kERgqhXuXTIiw-arV_mGrqxPSbH9MAdkGp9IDfQhL7-M_aCCxVOwRYM5zwXkXoz6OQATLEbrLX260G68V8NDcIqFcWD0Auo)

Your Gmail homepages  screen should look like this:\
![](https://lh7-us.googleusercontent.com/kKhjbSym9E7zQyddn6Qy-B8r2QPOPcUjJXSJXL8My6W9QESbhGBy2lvByf3Ux9Prw3_2sgw7iCygWy9ZSWY-JT7MrSpK54_S42loyoIfehrfHodzMsH057gequsLsjfGtLp5r5KnwA_55YlLFoNVEDs)

 #### In the new Gmail account (bottom window) open Gmail settings… 

- Click on the gear on the left of the profile picture 
- then select “**See all Settings**”

![](https://lh7-us.googleusercontent.com/TdNjEESM4kqqVZya1FaERapnjOEdfWiHqgp7oTfs4_CEVL0cN12id5M6iZGpsrknX4pXCw699EByr47BLnazo6OU7DQFEh0xhaT67OoBUlYSbcljm2WJJAM0WxwbYLkxttoe4tvESvgPkCPx8xQC7J0)

#### Setup forwarding…

- Click on the “Forwarding and POP/IMAP” Setting tab
- Click on “add a forwarding address”
- Add your “everyday” email address
- Gmail will send a verification code to your “everyday” email address. 
- You will switch back to your everyday profile and click on the link to verify that you accept the forwarding (or get the code from Gmail’s verification email in your “everyday” gmail window and cut and paste it in your “new AAPS dedicated” gmail window… 

There is quite a bit of back and forth between the windows but this will ensure that when you check your “everyday” account emails you will also see the emails forwarded from your AAPS dedicated account such as Gmail alerts…  

![](https://lh7-us.googleusercontent.com/EOGKQcK_YwvjALqj5HxXAwAPWS4cESDFMFydMOsAPFCFq7mgIWmSgbM84HeqCmjdQjMEoOVyJ9RlZ824MwPCkWOrG96p8BFx8RqrZ-Y5Bdxt8eTCyVtRFcIFfkE817JnMsSdLmCRdAOp0nnsN_h0tHk)

#### Verify the forwarded email address…

- In the “Everyday” gmail (top window), you will get the “Gmail forwarding Confirmation” email. 
- Open it and “click the link to confirm the request”

14. #### Finally archive forwarded emails in the new dedicated account gmail(bottom window)

<!---->

1. Refresh the bottom window
2. Check “forward incoming email”
3. And archive Gmail’s copy (to keep your new dedicated mailbox clean)
4. Scroll all the way to the bottom to save your changes\
   ![](https://lh7-us.googleusercontent.com/owbjPH00UsjGmPEA3a9QlJUt3FwWkir_YvuHcbe4HhyruVgK2hK8oAgg-olyzvlUP1vuvcy7krPqRTmQ2v09flXj84_i71ye9HrMyVlm5PAglYJJiDDjxFuuBw2hPYh_p3vUOEqjvvxVNgrzg9sy5bI)

![](https://lh7-us.googleusercontent.com/NJhb_5xelm_vtlEQPww-MeYdWqgqmVBz5hAzQwWRdceRjZw8-KoqOCTL-irSWguOVn9tlqmE2eHRgxl0Z98PDde_hcVgcc5KvzS2ljrEuinjEI1Z-rUq2UaBKhAfTruvw6SVkl2LlcI44kGEu5a7cN0)

Now you have created a secondary Gmail account dedicated to **AAPS**\*. You will use it to safely store key information in its dedicated google drive later. 

2. ### **Fill googlesheet survey**
3. ### **Mount google drive(s) on your PC & Phone**

(⌛About 10 minutes )\
![](https://lh7-us.googleusercontent.com/t0CuY95P1jn5sMh6P06aWssBlEl-D9J9C_hkBT_R_E6OH6YrLEeniTEarAIbWpn__j9C9mgZRc55Jt9fKOYcqviCPw5g5MSreat2qkgST9eFoVDynvZnoasnGTbYHsNw1ltCoNd6WrlX6suRejlgm3k)

A Gmail account provides access to free cloud storage from Gdrive which can be accessed directly as a “virtual” drive from both your PC AND your phone. The scenario below will show you how to use this feature in order to simplify sharing files between the phone and the PC and backup important settings/files in Gdrive.

If you have not done so already, install Gdrive on your PC: 

1. #### Install Google drive (“Gdrive”) on your PC

Please see enclosed step-by-step 4 minutes guide here:\
<https://drive.google.com/file/d/1EnaQ7U8U7M84vOFjcMRoB43dNwqUuLty/view?usp=drive_link>

1. Go to <https://drive.google.com/> 

2. Use your new  “AAPS-dedicated” account to login, (if needed switch the account from the profile window)

3. From the gear icon next to your profile picture select “Get drive for desktop”  

4. Download & Install the Gdrive application on your PC

5. By default,Gdrive will appear on your PC as G:\My Drive, create 3 subfolders under My Drive:

   - AAPS\_APK  \
     (to store your own versions of the AAPS application as you build it and update it overtime)
   - AAPS\_CONFIG\_BACKUP\
     (where you will keep a backup of your AAPS phone configurations overtime)
   - AAPS\_SECRETS \
     (where you will keep passwords required to rebuild the application and facilitate updates over time)

6. It is advisable to share these folders with your significant others in case they need to re-access or re-build the app for you. 

   - (1) Right click on the folder 3 vertical dots menu
   - (2) Click Share 
   - (3) Click Share 
   - Enter the email address of the people you will want to grant access to…\
     ![](https://lh7-us.googleusercontent.com/ZXk9Qc2JHNAHxXqQCpvyTQAxWk-BDWLx267Ab1UhcHccSdvuxb7rTnCYq13Cz9KFEwnXTM2Jvc0v9SCmCohPtqWQvKkpV3KXFDUYiXCfxchZnWKxd-2a4fpccZUVVUi7yGqvl3LFKnpWd6qPbOU0CJk)

7. Download & install the “google drive” on your phone from the playstore link\
   If you need more details, you can see the step-by-step 2 minutes video here: <https://drive.google.com/file/d/1--qwxp95cG8pwCv1pDFZuuOl6ue22W4H/view?usp=drive_link> 

   - Make sure that you configure it to use your “_aaps dedicated account_” by clicking on the profile picture…  

<!---->

2. ### **Prepare Nightscout for integration with AAPS**

(⌛About 30 minutes to setup + 15 minutes to prepare for AAPS)

:::{admonition} why Nightscout?

:class: note

Nightscout is mainly used to correlate data collected from the CGM and the pump  and generate reports which can be viewed by you and your careteam. Nightscout also has a large set of additional features including for \[caregivers]\(https\://androidaps.readthedocs.io/en/rework-project/remote-control.html#nightscout) you can read more about Nightscout in general \[here]\(<https://nightscout.github.io/#>)  

:::

![](https://lh7-us.googleusercontent.com/y02CBnKpkFcP_3u7OC99PFVbUiKXOyUxL2I2V_D2TW18F0o1nhcVTuiyArJulXlSzaFfJ-NpYqEOzsMOmW4EFy1C6erP-PWJ_CopPAnyGouJ7IUP4xNd8-EMBOElhR0YLlTKIN5Qn4t6El42N02DvxY)

1. #### Purchase or build a Nightscout Server

If you don’t already have one, you will need a Nightscout server]\(link to AAPS docs about Nightscout options) to use **AAPS**.  

This can be done very simply by using a paid hosting service ($5-$15 per month), or you can do it for free using cloud providers (about 1h to setup with Azure) or \[Heroku]\(https\://nightscout.github.io/vendors/heroku/new\_user/) or self-hosting solutions.\
 

A Nightscout account is currently required to pass objective 1 of the AAPS setup, and for most AAPS users it is a key reporting/analysis tool for you and your careteam. 

Instructions are available here: [New Nightscout Users — Nightscout Documentation documentation](https://nightscout.github.io/nightscout/new_user/) Make sure to store all your custom parameters, passwords and API\_TOKENs in a file on your google drive (In your google drive/My drive/AAPS\_SECRETS create a new google doc; Rename it “AAPS\_parameters”). 

For example:\
As of July 2023 these are the steps to follow to create a free Nightscout cloud hosting solution with Azure:

1.  setup the free Atlas Mongo DB\
   [MongoDB Atlas Database — Nightscout Documentation documentation](https://nightscout.github.io/vendors/mongodb/atlas/#create-an-atlas-database)
2. setup a free Nightscout docker Azure server\
   [Nightscout in Azure (Docker) — Nightscout Documentation documentation](https://nightscout.github.io/vendors/azure/new_user/)
3. make sure to save your NightScout API Secret. 

<!---->

2. #### Preparing Nightscout to receive data from AAPS

In this example Donald Muck is hosting Nightscout in Azure and using the free MongoDB, depending on which option you have gone for, adapt the following guidance accordingly…)

Enable Nightscout roles and disable public access

1. **First read the doc!** \
   read the whole page in nightscout documentation: [Nightscout Security and Privacy — Nightscout Documentation documentation](https://nightscout.github.io/nightscout/security/)
2. **Second create a role for AAPS**\
   (this will used with newer versions of Nightscout 15+)\
   In Nightscout itself, create a role for **AAPS** to get access to Nightscout.  In this case, since it is required to upload BG and treatments to Nightscout, it  will be using an “**admin**” role.\
   <https://nightscout.github.io/nightscout/security/#create-authentication-tokens-for-users> 

Consider if you would like to add another few roles to grant read access to your careteam, yourself, an M5 stack device etc…\
![](https://lh7-us.googleusercontent.com/V95eWK6vRhj0VryRr0ICIaU0WdN92BsJHSxc7WprjbBZz5wBQeVLobRpElzErRP5QHiijLdKolZYEVWEPwlc7x6KWi4YCmx1p2oZC6zhQwYFVtD8XeRxzP_99bjc4yBmHVY2ktzrHApAMxu6WuS6EgA)

Take note of the Nightscout **AAPS** account name and access Token that you just created:

- In your google drive/My drive/AAPS\_SECRETS create a new Google doc
- Rename it “AAPS\_parameters”
- Enter “ Nightscout AAPS Name=...”
- Enter “Nightscout AAPS Access Token=...” 
- Enter “Nightscout URL= [https://XYZ…](about:blank) “
- Enter “Nightscout API Secret =...”  (saved earlier, you can also find it from your Azure configuration screen with the other environment variables, it is used by older versions of NightScout up to 14)

Here is an example of Donald Muck’s AAPS\_paramaters file, note that it has also created optional entries like an access Token for its doctor to have direct access to its nightscout instance and added links to remember its Azure portal URL and its MongoDB portal URL.

![](https://lh7-us.googleusercontent.com/Qx2Z-EMO6Pd-7DVC4Pu0zsns8wcycw0fMucBgHuPSBLa25s1HJXlXzOW5DlpeW5LJ3T2R9KPD6CN7516-r_6kQYVuApgVLxQMuul4npzmLDt5Va8bnjM_wHB3SeUoJsZiXhSaSTeovMkJKNH6zg4XS8)

3. **Save your NS API Secret  & disable public access**\
   In Donald Muck’s azure configuration page:\
   (1) it can display the API\_SECRET value and save into its AAPS\_parameters file it hasn’t done so yet.

(2) Add the _AUTH\_DEFAULT\_ROLES_ variable and set it up to “_denied_”\
Then click the “restart” option in Azure to restart the nightscout server.\
This is the documentation link:  [Nightscout Security and Privacy — Nightscout Documentation documentation](https://nightscout.github.io/nightscout/security/#how-to-turn-off-unauthorized-access)\
![](https://lh7-us.googleusercontent.com/DnQg4g7u3DX2YKQ80nJKSLNRfDGWto8RWfPNMs-P9rBkxv9DLK-Gc_KnJz6WZ0iyKi8D_4STj5uwNy1cHWy0C6dorYKYLRj4EA8js-NskHHKVM3j49EhLJKxO0-7_rT5NwaJGTMb7bEi7TX-e4ewZf8)

3. ### **Install Git on your computer**

(⌛About 4 minutes to setup)

:::{admonition} why git?

:class: note

Git is known as a “_Versioning control System_” (VCS).\
Git is a program that allows developers to track changes in their code and collaborate with each other. You will use Git to make a copy of the AAPS source code from the Github website to your local computer. Then you will use your local copy to build the AAPS phone application. You can also use Git to add your own enhancements in the code and send it back to the developer community etc… 

:::

![](https://lh7-us.googleusercontent.com/VbKzDTMRTvAlDZZ1W2bpd8AZ8t8ATC5Wf2ih4jqubhzXMQAd3hRuxnhup2E2NqTe0k6FZkeSagJDReFIB6-IHx4K-N4QMtuy1yj0WV1qdUN0XgFbmimBdMgJX3sPDLbSM25-CCaNC-_iWeOy4c64xeI)

A video recording of the installation is available here:\
<https://drive.google.com/file/d/1-fWdqT7HoplP2m5M9IxCAldlkwuOJbmG/view?usp=drive_link>

1. #### Download Git

<!---->

1. Any recent Git version should work for both Mac and Windows. For example <https://git-scm.com/download/win>.
2. Make sure to note down the installation path. You will need it in the next step.
3. The Git install program will ask you about many options, you should be fine picking the default to all options EXCEPT when asked about “**_Choosing the default editor for Git_**”.. Unless you are familiar with VIM, change the default to “**_notepad”_** (or any other preferred program that you are familiar with, personally I notepad++). In this tutorial, you will not  need the Git editor but if later on you have a need for it this will make life less difficult. 
4. After the install, check that everything is proper by starting a cmd prompt and confirm you can execute “**_git.exe –version_**”. You can also find the installation path of Git by running “**_where git_**” so you can save it in your AAPS\_parameters file. ![](https://lh7-us.googleusercontent.com/AhQHCz-Cz10x8zQRHlNjePHfi4aBm5dvIO3BAnOOXytRRDE68ABXrFT5DhmAs3isSHvrOlG1qdG1JRJ8pgjkjHzlD8TA69i1psT3F4bZYWpOacOwzFTGp6DWmdyb_4grRFKltkzO_QTLopOk2LHRhg8)
5. Save the git path and commands in your AAPS\_paramaters file as well. (This is useful when you need to reinstall Android Studio if it can’t detect it automatically).\
   ![](https://lh7-us.googleusercontent.com/bEfkzR_UxPMC2R60G0WYZTLHy0b7zRStc6jFXQa8vTiQw7I1wbqV_9G5FylqAIN3J3hBfFFr0eD_Ba98eIHYmvQq61WkW5ZdMF0Fo11_KKU72VVifzt-Mic0kDrC0oxnZzh35VUpbJaoQWCUYFnwFXA)
6. If you get an error try to reboot your computer before the next step.

<!---->

4. ### **Install Android Studio**

(⌛About 7 minutes to setup)

![](https://lh7-us.googleusercontent.com/rZ9ycNkwXHTopeGMhXjLm4mU7hOyw_4PN2aQMhuAu0Tqxe-ctA1t3Ht9kN_J-_PmxMtnUbrrVO3W125ar1CbDpaf0HjhlJfnu4mntC6MTBP6MsAj7jgnt0F59iiISel4Bk7CWnvhw9G3Ok8uwCjpnUk)

:::{admonition} why Android Studio?

:class: note

![](https://lh7-us.googleusercontent.com/Z9XObRDWRpwNZ8kwKJ5JS7ejYpWzNlWHRZ_cliSzWJgPpcJPXNKIQBHWSp27mFyoARbJ41Daqh0cH5PiCSP-YFIoZBZtjDZplmQNtwqJKjhvmd8UispAbk2_6t8mJuBFoZE-OcsteCNFtUbBETAb1Zo)

Android Studio is a programme to programme programmes!  Basically, it is a studio programme which runs on your computer and allows you to:

- Download source code from the internet (using git)
- Modify (aka programme) some programming language source code (typically in java, kotlin, python… )
- Upload source code to the internet (using Git)
- Translate (aka compile) the source code into a binary language which can get executed by a microprocessor
- Merge this binary with android libraries (aka link) into an Android Application Package programme (aka an apk file) which can be executed by an Android device. 

:::

As of July 2023, using Android Studio (version:_Giraffe 2022.3.1_) you can still follow these steps and screenshots taken originally from Android Studio (version: _Flamingo 2022.2.1)_. Screens can change in future versions of Android Studio. But you should be able to find your way through. [Help from the community](https://androidaps.readthedocs.io/en/rework-project/Where-To-Go-For-Help/Connect-with-other-users.html) is provided.\
If you need more assistance you can see a screen recording  of an install here: <https://drive.google.com/file/d/1-hi1UD1bsY5R-NzFJd20tPQTsulBjcOC/view?usp=drive_link> 

One of the most important things when installing Android Studio: **Be patient!** During installation and setup, Android Studio is downloading a lot of packages and this  takes time!.

Download [Android Studio from here](https://developer.android.com/studio/install.html) and install it on your computer.

On first start you will find the setup wizard:

Select “Do not import settings” as we don’t want to import settings from previous installations.

![Do not import settings](https://lh7-us.googleusercontent.com/B67NdPBWVrbyA1hUJ4mX99hoc88e9G_YgTp-Pdq7-NcimVYz1ZkePvjSJc37wmNjI5QBh9iajVbEqWxwUzMZF0549-4iR8NuyXH2ELLZ3ZY7eMuQRCvxCYIb8Vaf61D7BwNIoAEWzu6kRoLoYT_AMwk)

Decide whether you want to share data with Google or not.

![Share data with Google](https://lh7-us.googleusercontent.com/7aQCWB4HUQ7DFf0md7pM_3_tJ3nTeuO37p2VC3NqwV5vQT81V3A3ouKjZ-K7lX105uLyqMhjPoP83o2aNCkwu27rTd1FqYoq-3KxYHfjzHYuPznifTHgBl8-DViQ1fy8zHp_yMhtFxrHidVfUs-rytI)

On the following screen click “Next”.

![Welcome screen](https://lh7-us.googleusercontent.com/Tssbyrjv8OMzp04MJNRrgCxhFG6dCWPFlB12Lpbo_IqEbmt_VAKqel47q-pwA4V6W2M09ZgiKGkx25GJob-A1NlkDpIo2W86hyPtZmNI7HHejKvL44xQ1MKQpOTdVPm8T1s6KxDraSTZ8ABbACTN_iA)

Select “Standard” installation and click “Next”.

![Standard installation](https://lh7-us.googleusercontent.com/UWCJpWk7BLJZe0bLO4extk0FjRSPDpYyHWgq4aLQz7wu9ojojc3P3FKFtimfXQBYKvd1z0GakIv5A1-Kxq3MwKa96tudRNOwa1j7oxZn5iBv1hC-ckf4JxBCTMZ4JmwJUdY_5f7HxHJ1Uwz3vS9hvHQ)

Select the theme for the user interface you like. Then click “Next”.

Note**_:_** This is just the color scheme. You can select whatever you like (i.e. “Darcula” for dark mode). This selection has no influence on building the APK but the following screenshots might look different.

![UI color scheme](https://lh7-us.googleusercontent.com/hlWs-H0enSSLhtPFeWQxZXg9CVGi8Jmprh1p-O7uw_FxEb3RgmXwxW-Ll3-N8hAnpg9-DPYsMf0UYMwe9DYUGIZSUH_KQDVR5LiStSCK82rdk1rVmbOhOsMqsJBanv4bWQgrFOAN3jPpBSCItFMzREQ)

Click “Next” on the “Verify Settings” dialog.

![Verify settings](https://lh7-us.googleusercontent.com/mhSlG2UT_FZLFcYdOl-PEaSEK4GjxfOQB_zNDf1TxgCslJ2QMznZMv4uR4FWBhKi-H_NThB3u7dYvSLb-1mSw_OM4FWa6pW2ZDckFUb2b24Pfdrwl-luwrV8wdzr1wN8UIBuwORbC-L6erjhn2MOp5g)

Select “Accept” and click “Finish” on the License Agreement dialog.

**_Note:_** Depending on your setup the licenses to be accepted might vary from what is shown in the screenshot.

![License Agreement SDK](https://lh7-us.googleusercontent.com/RSYTpEFInt9IP6UKfoczeOBpJAvqe2K8u7r1GL4RxVid9mouQboTLPnKdqybAZzaPY9Ytu8nZTrih_c-Q7Fp-OsLlv4rTa9IYtOCvfnzJZymjyZG5DeOn3JyjkC5_nqkzAiRhXgJQOKBp0KDmkeQzLs)

Wait while Android Studio downloads additional components and be patient. Once everything is downloaded in Android Studio select the “Finish” button when it turns blue. Click the button now.

![Downloading components](https://lh7-us.googleusercontent.com/TecpoR9xKzrR_0WDt5ydEve6HHYHRVmNn-pLBPgSm7PLPw29ng8Ea7Udkm1HgMUqgDaePolABhUWOp5ZBNuvNpeRdVPifofXaXp9iJgl8BzrNnLxtMicOBdf-SJEKAsho14n7HICnIXn8kOGS2adMCk)


## Set Git path in preferences

Make sure G[it is installed](https://androidaps.readthedocs.io/en/rework-project/Installing-AndroidAPS/git-install.html) on your computer and you have restarted your computer after installing it.

On the Android Studio welcome screen click “Customize” (1) on the left and then select the link “All settings…” (2):

![Android Studio settings from welcome screen](https://lh7-us.googleusercontent.com/o6vID8q7iPRDXjiL9o7fTugLX1Vu3iM8B9FETlFJI8I3c02ucS4hAIMwTXLQr_kN5VpKxt6xg6Lzw9yfQPCXRC9XUr3Jfbr4B-UfemExbNzexgHSiJeNDcatAoIt5vXLu4z5rAZbzZhQa8gQhI6xbgY)


### Windows

- Double-click “Version Control” (1) to open the sub-menu.
- Click Git (2).
- Make sure the update method “Merge” (3) is selected.
- Check if Android Studio can locate the path to git.exe automatically by clicking the button “Test” (4).\
  ![Android Studio settings](https://lh7-us.googleusercontent.com/EwxVLXPDNnw1tLLJtfqSir5DJ3_w0VsFAZbnKHepURlH5S4VD1dRZ5I0feU3S7kWO0292BdCjJkXaTYwFxbS4BDAyt9Lyxc0Feb3CbUl7g7jwiZL35V38XtJti0p4NxT3tO4RougJxDKmgVkakuJSqo)
- If automatic setting is successful, the Git version will be displayed next to the path (it does not matter if the GIT version is not the latest version. Any recent GIT version will do).\
  ![Git version displayed](https://lh7-us.googleusercontent.com/-UE1XePLQiLLS195C5VGvrrFDd0GO24UpXDVlcyvqrAktqtt9QcNYlDA0dG_Y0YnP8qEtH2yuDlxI2wVbh78yvHueZIkGzFtPcaR0iSCP8BMBCrXwaUOFRW_get4iSbZ0TcvA4MM60_6T_5eP6ipnd8)

:::{admonition} What to do if Git is not found?

:class: info

- Eventually git.exe cannot be found automatically or the Test will result in an error (1):\
  ![Git not found](https://lh7-us.googleusercontent.com/nYaSbC125GXzImorfg7oAF2VajWVRsLmu9rjCMVfR5dUgOq8f5Vz1oLkkUWDsJ_1nMtWa5De10qAWoedOn0DcCqOEojEX3d0eCFysFrdtzDMZEiwqQSiTqwnp99tVt_BBdhA03SHATAPbaHJmBeZRN8)\
  In this case click on the folder icon (2).
- Use [search function](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) in windows explorer to find “git.exe” if you are unsure where git has been installed. You are looking for a file named “git.exe”, located in \*_\bin\*_ folder.
- Select path to git.exe and make sure you selected the one in ** \bin\ ** folder (3) and click “OK” (4).\
  ![Select git manually](https://lh7-us.googleusercontent.com/Vj-8AWH4DB8a-VBVuuds0qyXm6DjdU6A0qnVvT_8erdQ5QiQnGdzX-Tpi4IdTJR7xHpUD38fojLqjFdj7Y5IOKzkslchTmhN8hYTgxEgjfpMjMtre5DbUdzyhym6ZpgOuBDfiDNi5rogROiLuBsena4)
- Check your selected git path again with the “Test” button as described above.

:::

- When the Git version is displayed next to the path (see screenshot above), close settings window by clicking “OK” button (5).


### Mac

- Any Git version should work. For example <https://git-scm.com/download/mac>.
- Use homebrew to install git: `$ brew install git`.
- For details on installing git see the [official git documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- If you install Git via homebrew there is no need to change any preferences. Just in case: They can be found here: Android Studio - Preferences.

5. ### **Download the AAPS source code**

(⌛About 12 minutes to complete)

![](https://lh7-us.googleusercontent.com/p2mM7ilTxIIzilk6N0BFgqATvwYDAMzIs4R2qxoJOBdJRGOUXgtcZvEIdhL0nTqe-Wx89xMxvavvuhAUikiWJv5EWlcfbvEKi3EytCXntFT6GKFSNBZpdAz7I0NTnha38lFZc_Uq-mw_edPZLz1ZSL0)

:::{admonition} why does it take so long the first time?

:class: note

The first time AAPS is downloaded, Android Studio will connect over the internet to the Github website to download the source code for AAPS. This includes the actual source code of the current version of AAPS as well as past versions and ongoing beta and development files.  This should take about 1 minute. 

Android Studio will then use Gradle (a development tool included  Android studio) to identify other components needed to install these items on your computer. This takes much longer, about 10 minutes the first time.

Later on, when you need to update your application, most of the files will already be present on your local computer and only newer/changed files will be downloaded which should speed up the process. 

Note: Even if you uninstall Android Studio, most of these files will remain, making the reinstallation of Android Studio “_from scratch”_ much faster.\
:::

Please follow the steps below\
(If needed, you can find an installation demo video recording here:\
<https://drive.google.com/file/d/1-jH5izbSwrMc2jTNi9fC84FNjevnKUh-/view?usp=drive_link> )

- On the Android Studio welcome screen select “Projects” (1) on the left and then “Get from VCS” (2). (VCS stands for Version Control System, which in our case is the Git program you just configured earlier.)\
  ![Android Studio wizard](https://lh7-us.googleusercontent.com/b-MaelyK7ZXLVVHhT35ESEb7Z6fGOSnR21UnbsoqnkKLMjOtmVRGNsc2-yjHvG1mdiPXWHxwTr9BO6MDxmWkAyAm66XDpj_YeD7EuOD7DiiWVe-_Xzl11zRIhqWZQkrMR9RFuALFBr1-W-LKmdpM7so)

-

- If you already opened Android Studio and do not see the welcome screen anymore select File (1) > New (2) > Project from Version Control… (3)

- ![Check out project from version control within Android Studio](https://lh7-us.googleusercontent.com/rvbWx0Pwbzr5tzAr8So0ehxhNoamomD3gh2gB23u4ub2h3DpHwoGR7Tv5YF5mJruQiT_EAFxBZY9rQLE3CWycVpIB8vSDeUKzQ_7-PoxDbhdAW-gAVNslxg0lIIdXO5ynogdscf8UEfS0jT4kTwuUcw)

- We will now tell Android Studio where to get the code from:

  - Make sure you have selected “Repository URL” on the left (1).
  - Check if “Git” is selected as version control (2).\
    Copy and paste the URL\
    `https://github.com/nightscout/AndroidAPS.git`
  - to the main AAPS repository into the URL textbox (3).
  - Choose the directory where you want to save the cloned code (4).

<!---->

- Click button “Clone” (5).![](https://lh7-us.googleusercontent.com/RkPghG8WDIiO-aI8aWi33UU6A4Xl8tY0-tzPt-pPkUa0o3FJyAO8-_AnyBMxCZ9kt_2srlm4gUOwZUyv-B4teawSF2sAJaJSDdSLZq3aDFbwTSFFpek5DJGOrtJNgH7nBCmiCvngMx_NG0WS3QpsI_k)\
  ![Clone Git](https://lh7-us.googleusercontent.com/qPv19Ml478m-jjv6rM1TdCj3BivP2YkD9QAynYUrlsonBdngCd6ldqtOkUuB9in2vlCbWNUfu-NBiKuQFTBoC98y2-jhykp9s1ueUCah51IxdejAhFu8sWLjHyEJk5jLXtAuLi49gMx6vpb4B8BR2oU)
- Android Studio will now download the source code from the internet Github web site on your local computer (aka _cloning the AAPS Git repository_)\
  ![Clone repository](https://lh7-us.googleusercontent.com/hp3Gwa0PNgZi7YXvf__ctPXppJz3VO8iHNZY9TmOOoZRwPJ5E7wCfhNovzAlcW_E9nW4aW9N826oydPmeYGO1uW-xtAt3JUFRe8rXTArO2CRuTwxVBDHh8wk6f3yR-B5NNLomjmJrdY7O4hQ4W9eoXE)
- After the Repository is cloned successfully, Android Studio will open the cloned project.
- If asked whether you want to trust the project: click on “Trust project”!\
  ![Trust project](https://lh7-us.googleusercontent.com/WKKuHAZaHEPlwRCqyp_Y6J7rnN7NeytCJhaWumhipudnAlxKzzu5QjiSdCeSTrGC4KCAP04GoQ-iX1AasVWga5nM_vR9iu7LJs5z_fArh9i1np6dvOAR5dUB_oW3WsAnF7Qi6BEprmgmlMBOFmPh3rQ)
- In the status bar at the bottom you will see the information that Android Studio is running background tasks. Be aware this can take a long time depending on your computer hardware, your internet access speed and if an earlier version of Android Studio was ever installed.\
  ![Background tasks](https://lh7-us.googleusercontent.com/iq4FK_81ZtUpLSXf1lHaNRsa4YU2RX25w9yS4pb4EukcMZfc3z7oM8cTyYquqFqc6VPpeLfmQe5luypW8AxrEHu-9JdBfHU2M89sGbSzBuTog0JWdsnC7I1BgAOcCb2-q5dbsZl5l2x_87IdYCa9yb4)
- If your firewall asks you to grant access, allow it since Android Studio is going to need to download additional libraries/sdk etc...\
  ![Firewall permission java](https://lh7-us.googleusercontent.com/etivEeDx333mVbXispkCDqvtnF24UoTanefX3pCqjHENErK4srr-zQmJqj2XkmM7SOThh1GN0AVtH9EzWl7TW0tktHpGpo9Qq_HONV5Pg1CtLWcd1aecLP1JpyIzQ0rL8Zicldvy_xVOLUeVH9S5yJQ)
- Once the background tasks are finished you will probably see an error saying that errors occurred (1) or (2) or (3).\
  ![SDK licence](https://lh7-us.googleusercontent.com/tHW3tcJNgYQgiF4kh6g0bsx2UvY15zPukH16difByP2PhjT3JZqzQhMuv1AYatBzXceqNPsVE1hlyz_9hGeOb_-U4cvNXq2CYbkOnlk5lB6s-_DRagSe1g9AoZeUu1q5Qw-s4Upb-xpxYrJZJHcEq8g)\
  Or like this: DO NOT UPDATE GRADLE 
- ![](https://lh7-us.googleusercontent.com/jqXkgO3qW50IVQ_qoTnyzrSGcYB9GSASDFE-u-SNvi3Ps4LytDjHlFTSX0GrbV2VWks98CtWg7bgK_lmrrjehLxHCEBjc0J5i7oMR9LVWP5Acx5ejWzxAALFsop_LY0-vFhEAlslkYPQxI42J9MeG-U)

Don’t worry, this will be solved soon! Please ignore the following Gradle message prompt here:

Android Gradle plugin version 7.2.2. …upgrade available. Start the AGP Upgrade Assistant to update this project's AGP version.

This will interfere with your build.

6. ### **Download the Android SDK**

(⌛About 5 minutes to complete)

![](https://lh7-us.googleusercontent.com/MwSdETWHEpfRVv_uXNkhTjuHHGB3n8i-krPhf7AsKb51gLHaI0yDKp8a_MGQRmHP0smgyPzAmjuSK7NzcHgOr0fPajM878Qlmwj4CNOVSn7Y14v6Y1_-Mpv0IrKh_6L3WgjWPrVTrqXeexKx4JAgnf4)

:::{admonition} what is an Android SDK?

:class: note

In order to run AAPS on the phone the application needs to integrate with Android itself. Android provides “_software development kits_” (SDK)  which allow applications like AAPS to interface with an Android operating system. For instance each version of Android might have a slightly different way to handle keyboard inputs and gestures. 

- You will need to instruct Android Studio to use a specific version of the Android SDK to create an image compatible with your phone. Since AAPS 3.x is designed to run on top of Android 9 and above this is the version we will ask Android Studio to download. 
- Applications built with Android 9 SDK should work with subsequent versions (Android 10,11,12,13,...). However if you need to use an older phone, you will need to use an older version of AAPS as per the documentation\
  :::

Please follow the steps below\
(If needed, you can find an installation video recording here:\
<https://drive.google.com/file/d/10k9bvqkvunBThnZU2yL5OENkeH59tuVj/view?usp=drive_link> )

- In the menu, go to File (1) > Settings (2) (or Android Studio > Preferences on Mac).\
  ![](https://lh7-us.googleusercontent.com/4QQxduObHhv4qI651Xsmj-KHUktl6B2xOcD7g07uV7gTWr7XsibIEcraQlt5clPC58qFct4KzO0edrxQyc4Cr-84czhTwRaW_xDx2WnAfD4mDlXN7gIFI3f5Xx8uozBfHkgKeonG33zwsHFY8RDaXWg)

<!---->

- In the search box, search for “sdk” (1)
- Select Android SDK (2).
- Tick the box left of “Android 9.0 (Pie)” (3) (API Level 28).\
  ![](https://lh7-us.googleusercontent.com/BmiZ1GHG5sNe4D88YwhMzTbVzOUNqBvUyPxEVB2haH5LXhH34EjRGT1JMRHJxuG40u6_6QNaHGqleUMtwwROjisHSTRY3-BhC_77Xpf-KxrRdhmdV-2Z_nht3R9tNw-it93_jQR8PP6mbuOessptUcc)
- Confirm changes by clicking OK.\
  ![](https://lh7-us.googleusercontent.com/Nt3L8j1hh5ENjSE4oNL2LgYt-R0Bxo5QVu0lZY5YVREiCntqR7Jxrx93vHigYm7zyY3Ga5zak1NLzr-dhxOElGu3ldjFfmZFCfw39-DIo0zHJE5cHxFGM0IKKCQkwdeuJbogrYlhIFowTz9x7j4-_SI)
- If prompted,  Accept license agreement (1) and click “Next” (2).\
  ![Accept SDK licence](https://lh7-us.googleusercontent.com/vjraAnCEJa2ttOOaiHsT44ho8i2dC6F75w0TDbonlT0rA41-JFthYkS_FxYSnfmf8fHU6mTfqIHzJyPhb4narnrlOEYeqt4oEH9YRtvgHjKVx1-wn9VD2CSjOfc5IKP8HN9eUp5ncME4IEvM0MT2i0c)
- Wait until the SDK download and installation is finished.\
  ![Wait during SDK installation](https://lh7-us.googleusercontent.com/oDEH-eFxvsE5tgksV_nGVaroEpLODt3dgF9kx_hgxDi4yoiIKlM1a52CbYnNAgqjd-quST4QJjnf7knJnvwJMMEYPCRh037f5anHX6jdFwVkG_nwulUJbH88ayeInEz4B6d9OOF53HjjkrYnsa-BTuQ)
- When SDK installation is completed the “Finish” button will turn blue. Click this button.\
  ![](https://lh7-us.googleusercontent.com/jaC4nXBhfOUghM6nnns2-DM5Fd0wiQmdoVPwUWeaAML7mrfeuEofKAtM95kP3KVYCJI_RRaQFUGUFiikTPHesNhjIIZa3yaKfyyp2fjmEMmpMjnz5B26jIuaMigME7Qe6yB8WTSagmBZH-Vsn4jpJi4)

:::{admonition} NEVER UPDATE GRADLE!

:class: warning

Android Studio might recommend updating the gradle system. **Never update gradle!** This will lead to difficulties!\
:::

- If you see a notification on the lower or  right side of your Android Studio window that Android Gradle Plugin is ready to update click on the text “More” (1).
- In the dialog box the select “Don’t ask for this project” (2).\
  ![](https://lh7-us.googleusercontent.com/u6nIfFP8YaN-7Maelc-nH2j-nAn2AIfZV7MxNvfhb6zUIzgXYgEGkmMtoxq50hu7gLGmK1_nauOINl_EFVLGD58YXY9zXeoudDD9l4y0bPgNzMcsZxmaEXlFfwXdZ1nNC1YPkSKLXFO5ClJ2XBQNbxs)

7. ### **Restart Android Studio before the next step**

Might be doing something, might be for voodoo luck, in any case, just restart the program…\
![](https://lh7-us.googleusercontent.com/D7UZX-eF0ykP8wXka8qM1r11XrhMwBQBN2NoPgeUUaUda7ef6N705RASqoK0mHPVbwF-XvwSE9j_6BSVO5H0nNFrrW1YCotwW9T2ab0QN40iQnewi4QkW8Rzx1iFpMKAPUc20r4L_IWoQRakagWmmGk)

8. ### **Build & Sign  the APK**

(⌛About 17 minutes to complete - depends on your computer speed)

![](https://lh7-us.googleusercontent.com/0hUtv1yxmhrrjZ1J7tHDUzTz3GAkG_88gSj3qk0D99tZk5ywqk9d0UHYnEdpw9GMKcks6L0_05SZ_3Ez52MGevi2AeDQcPpO8JdtGSePllkSQZ7kjQaKPwavDnkyX2-cIc2zpGIN5-qJRFC2rk4s3N0)&#x20;

:::{admonition} Why signing Android apps?

:class: note

Android (like Apple’s IOS) requires each application to be signed to ensure that it can later only get updated from the same trusted source who released the original application.  For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key).\
:::

Please follow the steps below\
(If needed , you can find an installation video recording here:\
)

So now that we have installed Git, Android Studio, downloaded the AAPS source code, a compatible Android version SDK and let Gradle do whatever Gradle does… We can actually build and sign the AAPS phone app itself!   

- After Android Studio has started, wait until all background tasks are finished and these are displayed in the bottom right section of the main window(1).:

- on the left side on Android Studio you have the status of the last activity 

  - "daemon started successfully"
  - on the right side there is what's actively going on right now\... "Scanning Files to index..."
  - Please wait for all the messages on the right side to disappear.. This means your apk build is finished...\
    ![](https://lh7-us.googleusercontent.com/V0EQeE-Tgn6r8RuhfdyIznc3Azk__dV1TshqnzLHPsdmSSo_kCv_qsFBSDZ1I4SUACqq_TwM3liKAVcbM7wFdW-6iY3Zek31i90V9FbWlMLz_D9eqqI1Uvf-S0KE_lML1xIclnr_TSeNekO9uWhRa2s)

- **_Warning:_** If errors occur, do not continue with the following steps.\
  Consult the [troubleshooting section](https://androidaps.readthedocs.io/en/rework-project/Installing-AndroidAPS/troubleshooting_androidstudio.html) for known problems!\
  ![Gradle Sync Error](https://lh7-us.googleusercontent.com/2AojMrvdtAhIzNsI2Z9LpU3tACpCJDCxJ31aOPcoLoz6wCc9h8FcKWwHKbd1ipw8EsYA9j6L5irYE7Qjlkh1qs3P_e4kpmDUljB5AKbgVnC4-JzwYD0S2pZrgLP5O_-x2sLzVfUnv3XMU2Bd5Sg5X54)

- Click “Build” (1) in the menu bar and select “Generate Signed Bundle / APK…” (2).\
  ![](https://lh7-us.googleusercontent.com/aH4vjLjPYjSt45Zdcg2bcATpK9nMUfSlLmLCvKcn3GPxgZB9ltV9YhUMVE0Y6NbsttC1vrElXjan-0VjPL18G2LGNdV0OMn-WOwVic45vJUMpr-71ClhbWkdvrI-4jKoQSP6Jku9piu3OPjdDB6s6Mw) 

<!---->

- Select “APK” (1) instead of “Android App Bundle” and click “Next” (2).\
  ![](https://lh7-us.googleusercontent.com/xWyheMRQtRu_1jSECd0V9DaFYps3bo5Mc7VmJxB7uKJSoxET0GIggANGuQ-rL_r8N6ZWnj-ofvI2ljukakkmWDn-fB0I8b48vQAEgHaL6157G5bR5IIADeAzi32y8o2r25Y4dawmm6BVdL1B4n8JVIk)

<!---->

- Make sure that module is set to “AAPS.app” (1).
- Click “Create new…” (2). ****\
  ![](https://lh7-us.googleusercontent.com/KxwHIeM_vulJ7QgF-1aLYAhqFJPe9qgWOlNLo5tqGL7ssZg1wmgiyvjQ8TMkMG6wK2oSPtFWY9h-hzRYMXKnpNpiiC2vbmmH7khvgG-icRmH0acEauGTmkbyJBnAGHb1IKWyLpVS8QnY4BB6REFpMQM)

<!---->

- This opens a “**new Key store”** window. Click the folder symbol to select a path on your computer for your key store by clicking the “**key store path**” folder icon.\
  **_Note:_** A key store in this case is a file in which the information for signing is stored. It is encrypted and the information is secured with passwords.\
  ![](https://lh7-us.googleusercontent.com/CXRtedDPVhwEqWs4-WoNL6RD-F9L39WUWIAE7IUoPFXdpUa5G8GiG6ndNRpsumBvvqgbDxUiztrPoLmMo-xmD0UamlqfyvnyvU4J6JbEd3gFgfvGJaBVn0qAXS2xy58KAqq92TFNGtxEumT25tjvcq4)

- This will open a new window, aptly named  “Choose keystore file”... 

  - Select the path where your key store shall be saved (1); it is a good idea to keep your keystore on your google drive AAPS\_SECRETS folder.\
    **_Warning: Do not save in the same folder as project. You must use a different directory!_** 
  - Type a file name for your key store (2) 
  - confirm with “OK” (3).\
    ![](https://lh7-us.googleusercontent.com/xBho9Q4kk7_-7-X09bigZMyDihFDiiIF7TwJ98In6I2CF9D27XLIO3jgwvO4SlnPYgjtIE2p-Gz6xuHcL4CB-0yO01dL1Z0yxRV-OxjuRYqWI-QE5wCXwe-irlA8moeXsUSYxU5Y0pH4T1zxTmiFKYI)

<!---->

- Open your Google drive AAPS\_paramaters file to save your passwords…\
  You will need a Keystore password and  key password. In our case, we will use the same relatively simple string made of letters and digits, no special characters.\
  Make sure to save the passwords (1 & 2) in your Google drive AAPS\_parameters file as well as the key alias(3). \
  The password is required to simplify the upgrade process of AAPS later on. Copy the passwords then go back to Android Studio’s screen![](https://lh7-us.googleusercontent.com/x3ynCawWkVZ7_vBUl8jqezCpj-aRvdO283-dRxumcZh5nbHDkGu4l2KFjdusW0WUCluZbH3F56e77HvdGrhD4Qye-zrNmQyVcn5uV1X-k4ona6lzKGttNF5d1Ew7Yirp5DIhv9nqg2FlwzwzHOdhugY)  

<!---->

- Back to the Android Studio’s “**New Key Store**” window.\
  1 Check the **Key store path**2 & 3, Enter the  **Key store password**4 check the **key Alias**5 & 6,  Enter the **key Password**7 check that the **validity** is 25 years(default value)\
  8 Enter a name (use your dedicated AAPS google account pseudonym )\
  9 click “**OK**”![](https://lh7-us.googleusercontent.com/2b17qlkzWpS1XIEWa7UIV8yLkrSBJ7nI9I00Lwb6l0CO3374w_XoSAGE8Udcn5OPBAiLEWQgbEJS3oD-xL4pCYmjWLUxqpo5q5BmSjT7v1qhy8SqykK5uiDDOJFlN2OMVbjJk-4xyzVH8-9Hnv7MORA)\
  **_Note:_** In case you will not remember your passwords in the future, see [troubleshooting for lost key store](https://androidaps.readthedocs.io/en/rework-project/Installing-AndroidAPS/troubleshooting_androidstudio.html#troubleshooting-androidstudio-lost-keystore).

<!---->

- Back to “**Generate Signed Bundle or APK**” window!\
  1 IMPORTANT - Make sure the box to remember passwords is checked/ticked. This will avoid the need to enter your password again the next time you build the apk (i.e. when updating to a new AAPS version).\
  2 Click “Next”\
  ![](https://lh7-us.googleusercontent.com/gcBfUyUAh-C4ouYezCqM3ZqFbKJ3bN2Cdo1i7pq7jRzhlQrIIw17aYYcBflERtTb8yMXsyo4pHXM8DTXaFQBOEbqcoDmwaw2nWslZCrVmEGKYxyZnbfarIUOy7UQVCMoo_8WG0lzMVVwvqAM_hCD6Qo)

<!---->

- Select build variant “fullRelease” (1) and press “Create”.\
  ![](https://lh7-us.googleusercontent.com/0egu0YB5AZKKBMqUpmv5rpjwE1qNMt7i0JuyqX_ZREYmIExMHbJKq5gj3MggXnwcUcetSH2WTsWnV33YdNq3DWObcLFLFaFjJgW3njgpEcwebihJuXEJc8xSmgy2x0g5jKpSB4pN5PC_DgH00nqU1rc)
- Android Studio will show “Gradle Build running” at the bottom. This takes some time, depending on your computer and internet connection. **Be patient!** (about 18 minutes as timed for this Donald Muck’s build)****![](https://lh7-us.googleusercontent.com/ubHRIptbVSxF2qjYCfo4Vn4ACUwxHxC7sksGuMyQLnq6LEJpTwI57PqY9viJ5x-XQYxIDUNziQwL80lsom8-D9QceApFfyhxPi6T6E-i1tYr96kNqX1FKemvdYm_zYPA188s2YPjU9N1p4KRvHD1i4w)****

<!---->

- When Android Studio is done:\
  1\) it will display the information “Generate Signed APK” in the bottom left.\
  → Ifn case the build was not successful refer to the [troubleshooting section](https://androidaps.readthedocs.io/en/rework-project/Installing-AndroidAPS/troubleshooting_androidstudio.html).\
  2\) if you can’t find the “generate signed APK” notification anymore, click on the notifications tab all the way on the right edge of the Android studio window. All the notifications will show on the right side of the screen starting with the most recent on top.\
  3\) click the “locate” link to find the folder where the “apk” file has been generated.\
  ![](https://lh7-us.googleusercontent.com/eIpCiuujM-GaJcc7Mcqtydx4oZPWBt8Kkrs9jUsy_9-Q0dJIPY-EteGu6cbwZWg0r95O5c4U4eiMpJrbKo9-atmAIctJLdGG46_NuLg1qwMPgglf_x1XCSUb2mLPYG9BEMoIrux9xO5jcSi54xqbkC8)

<!---->

- This will open a window explorer window with a “release” folder…  \
  1\)  inside the release folder you will find the actual phone app: \
  2\) app-full-release.apk  \
  3\) (and a output-metadata.json that you can ignore)\
  4\) open another window explorer window in your google drive’s AAPS\_APK folder\
  5\) create a new subfolder with the name of your build: AAPS\_3.1.0.03\_AUGUST.2023 or AAPS\_3.1\_myfirstbuild or AAPS\_3.1… usually tracking the version number or the date makes the most sense.\
  ![](https://lh7-us.googleusercontent.com/mz95ql0rdL9Y-axmoiWasCuKiFV93gRF7tM4fLCWWpFv46LnmwwnAnpJRZJBboiN5Jusfi5kBT9jdQJwKw5hLt-xqHfoTT7k9667NmgemWNi9QgrXCpz75J9BeiehI807FaJ5V03uxKVQ5M953keKjo)

<!---->

- Copy and paste the “apk” file from your computer into google drive…\
  Since google drive is in the cloud and also visible to your phone, you will be able to install the application in the next chapter…\
  ![](https://lh7-us.googleusercontent.com/l4U2N5ZxBoeFIGeAMvmZ0uZoDcJ31p0n5_OflKasU1w-fywV6Ab4amJEintYmurJxWoDuX4DmIVFRts2AnQtFLPZX8y_LdeCtj47fsoqmq_uPveALlgCsRGXhOarbbMksaKdn4LT3uVZ-FvEqcx4OP8)

## **Installing & Configuring AAPS**

### **Phone Settings**

 #### Disable play protect
 #### Battery optimizations: Bluetooth

 ### **CGMs**

 ### **Installing the AAPS on the phone**

 #### Load the AAPS phone application
 #### Disable play protect
 #### Battery optimizations

 ### **?Sensor App choice?**
 ### **Pumps**

 ### **AAPS->NS**

 ### **Parent/caregiver connection**
 ### **Remote Control of AAPS**

 #### SMS command safety
      1. How to setup SMS commands
      2. Getting started with using SMS
      3. Additional notes on SMS commands
      4. SMS commands troubleshooting
