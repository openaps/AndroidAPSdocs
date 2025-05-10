# Updating to AAPS 3.2.0.4

(update-aaps-3204)=

## Постройте сами вместо скачивания

**The AAPS app (an apk file) is not available for download, due to regulations around medical devices. Построить приложение для собственного использования вполне законно, но передавать копию другим не разрешается!**

See [FAQ page](../UsefulLinks/FAQ.md) for details.

## Computer and software specifications for building AAPS 3.2.0.4

* A specific **[Android Studio](https://developer.android.com/studio/)** version may be required to build the apk.

| AAPS Version            | Preferred<br/>Android Studio<br/>Version | Alternative<br/>Android Studio<br/>Version | Gradle | JVM |
| ----------------------- | ---------------------------------------------------- | ------------------------------------------------------ | ------ |:--- |
| [3.2.0.4](#version3200) | Hedgehog (2023.1.1)                                  | up to Meerkat                                          | 8.2    | 17  |

The "preferred version" is packaged with the appropriate JVM version. The preferred version is also the minimal version you can use to build **AAPS**. You will **NOT** be able to build on a version older than the "preferred" one. If using a different version, you may encounter issues related to JVM version. See the [Troubleshooting Android Studio](#troubleshooting_androidstudio-uncommitted-changes) page to help solve these issues. If your current Android Studio version is not listed in the table, you must update it first.

The Gradle version is linked to the source code, you will always get the correct Gradle version when downloading / updating the source code. It is mentioned here for reference only, you don't have to take action on it.

* [Windows 32-bit systems](#troubleshooting_androidstudio-unable-to-start-daemon-process) are not supported by Android Studio. Please keep in mind that both **64 bit CPU and 64 bit OS are mandatory condition.** If your system DOES NOT meet this condition, you have to change affected hardware or software or the whole system.

<table class="tg">
<tbody>
  <tr>
    <th class="tg-baqh">OS (Only 64 bit)</th>
    <td class="tg-baqh">Windows 8 or higher</td>
    <td class="tg-baqh">Mac OS 10.14 or higher</td>
    <td class="tg-baqh">Any Linux supports Gnome, KDE, or Unity DE;&nbsp;&nbsp;GNU C Library 2.31 or later</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">CPU (Only 64 bit)</th>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD CPU with support for a <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">ARM-based chips, or 2nd generation Intel Core or newer with support for <br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Hypervisor.Framework</span></a></td>
    <td class="tg-baqh">x86_64 CPU architecture; 2nd generation Intel Core or newer, or AMD processor with support for AMD Virtualization (AMD-V) and SSSE3</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">RAM</th>
    <td class="tg-baqh" colspan="3"><p align="center">8GB or more</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Disk</th>
    <td class="tg-baqh" colspan="3"><p align="center">At least 30GB free space. SSD is recommended.</td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Resolution</th>
    <td class="tg-baqh" colspan="3"><p align="center">1280 x 800 Minimum <br></td>
  </tr>
  <tr>
    <th class="tg-baqh"><p align="center">Internet</th>
    <td class="tg-baqh" colspan="3"><p align="center">Broadband</td>
  </tr>
</tbody>
</table>

**It is strongly recommended (not mandatory) to use SSD (Solid State Disk) instead of HDD (Hard Disk Drive) because it will take less time when you are building the AAPS apk file.**  You can still use a HDD when you are building the **AAPS** apk file. Процесс сборки приложения при этом может занять много времени, но после начала можно оставить его без присмотра.

## Help and support during 3.2.0.4 building process

If you run into difficulties in the process of building the **AAPS** app, there is a dedicated [**troubleshooting Android Studio**](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html) section, please consult that first.

If you think something in the building instructions is wrong, missing or confusing, or you are still struggling, please reach out to other **AAPS** users group on [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw). If you want to change something yourself (updating screenshots _etc_), please submit a [pull request (PR)](../SupportingAaps/HowToEditTheDocs.md).

```{note}
This page provides both example pictures for the **New** and old (**Classic**) Android Studio user interfaces.
```

## Overview for updating 3.2.0.x to 3.2.0.4

```{contents} Steps for updating to 3.2.0.4
:depth: 1
:local: true
```

### Export your current settings

Export your settings from the existing **AAPS** version on your phone. Возможно, это не потребуется, но лучше обезопасить себя, чем потом жалеть.

See the [Export & import settings](ExportImportSettings.md) page if you don't remember how to do this.

### Update your local AAPS copy

* Open your existing AAPS project with Android Studio. You might need to select your project. (Double) click on the AAPS project.

![Android Studio - Select Project](../images/update/01_ProjectSelection.png)

<br>

![Android Studio - Select Project](https://androidaps.readthedocs.io/en/3.1/_images/01_ProjectSelection.png)

* In the menu bar of Android Studio, select Git -> Fetch

![Android Studio Menu - Git - Fetch](../images/update/02_GitFetch.png)

<br>

![Android Studio Menu - Git - Fetch](https://androidaps.readthedocs.io/en/3.1/_images/02_GitFetch.png)

* You will see a message in the lower right corner that Fetch was successful.

![Android Studio Menu - Git - Fetch successful](../images/update/03_GitFetchSuccessful.png)

<br>

![Android Studio Menu - Git - Fetch successful](https://androidaps.readthedocs.io/en/3.1/_images/03_GitFetchSuccessful.png)

* In the menu bar, now select Git -> Pull

![Android Studio Menu - Git - Pull](../images/update/04_GitPull.png)

<br>

![Android Studio Menu - Git - Pull](https://androidaps.readthedocs.io/en/3.1/_images/04_GitPull.png)

* Leave all options as they are (origin/master) and select Pull

![Android Studio - Git - Pull dialog](../images/update/05_GitPullOptions.png)

<br>

![Android Studio - Git - Pull dialog](https://androidaps.readthedocs.io/en/3.1/_images/05_GitPullOptions.png)

* Wait while download is in progress, you will see this as info in the bottom bar. По окончании появится сообщение об успехе.

  ```{note}
  The files that were updated may vary! This is not an indication
  ```


![Android Studio - Pull successful](../images/update/06_GitPullSuccess.png)

<br>

![Android Studio - Pull successful](https://androidaps.readthedocs.io/en/3.1/_images/06_GitPullSuccess.png)

* Gradle Sync will be running to download some dependencies. Дождитесь завершения процесса.

![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

<br>

![Android Studio - Gradle Sync](https://androidaps.readthedocs.io/en/3.1/_images/40_BackgroundTasks.png)

### Select JVM version 17

- Open the Gradle view by clicking on the elephant (1) on the right side of Android Studio and open the settings (2) and select **Gradle Settings** (3):

![Open Gradle Settings](../images/studioTroubleshooting/161_GradleSettings.png)

<br>

![Open Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

- In **Gradle JDK** field, check if the appropriate version: **jbr-17** is selected (1) If not, click on the field, and see if it is already available in the list.

![Select Download JDK](../images/studioTroubleshooting/162_DownloadJDK.png)



- In Version (1), select **17**. In Vendor (2) select JetBrains Runtime or any Vendor. Location (3): do not change.

![Select JDK 17](https://androidaps.readthedocs.io/en/3.2/_images/163_JDKSelection.png)

- Close the **Settings** dialog with **OK**.

### Select the AAPS 3.2.0.4 branch

- At the bottom left, select the Git symbol, right-click on 3.2.0.4 and Checkout.

![Select Download JDK](../images/studioTroubleshooting/17_Checkout.png)

<br>

![Select Download JDK](../images/studioTroubleshooting/17_CheckoutOld.png)

### Sync project with Gradle

```{admonition} WARNING!
:class: warning
**Never update Gradle.** Always sync it with the project.
```

Use the elephant icon and Sync Project with Gradle Files (or follow [this](#gradle-resync)) for the new UI.

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephant.png)

Or ([this](https://androidaps.readthedocs.io/en/3.2/GettingHelp/TroubleshootingAndroidStudio.html#gradle-resync)) for the classic UI.

![Sync Project with Gradle Files](../images/studioTroubleshooting/06_GradleResyncElephantOld.png)

### Build the Signed 3.2.0.4 APK

Your sourcecode is now the current released version, and all prerequisites have been checked. It's time to build the signed apk as described in the [build signed apk section](#Building-APK-generate-signed-apk).

### Transfer and install the 3.2.0.4 APK

You need to transfer the apk to your phone so you can install it.

```{note}
If you completed the build with the same existing key store in Android Studio, then you do not need to remove the existing app on your phone. Когда вы устанавливаете apk, следуйте подсказкам для установки обновлений.
Для других сценариев, таких как создание нового хранилища ключей в Android Studio, нужно удалить старое приложение перед установкой apk. **Make sure to export your settings!**
```

See the instructions for [transferring and installing AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md)

### Check AAPS version 3.2.0.4 on phone

После установки нового приложения, проверьте версию AAPS, нажав на выпадающее меню вверху справа "о приложении". Вы увидете текущую версию.

