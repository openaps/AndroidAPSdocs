# Android Auto

**AAPS** este capabil să vă trimită informații despre starea dumneavoastră curentă ca mesaj, direct în Android Auto în mașina dumneavoastră.

```{admonition} version and last change information :class: dropdown date of last edit: 07/05/2023

versiuni utilizate pentru documentație:

* AAPS 3.2.0-dev-i
* Android Auto: 9.3.631434-release ```

## Cerințe

**AAPS** utilizează o caracteristică a Android Auto care permite ca mesajele de la aplicațiile de pe mobil să fie direcționate către afișarea Auto Audio în mașină.

Aceasta înseamnă că:

* Trebuie să configurați **AAPS** pentru a utiliza notificările de sistem pentru alerte și notificări și
* Cum **AAPS** este o aplicație neoficială, permiteți utilizarea de "surse necunoscute" cu Android Auto.

![Date CGM AAPS pe Android Auto](../images/android_auto_01.png)

## Utilizați notificările de sistem în AAPS pentru alerte și notificări

Deschideți meniul în 3 puncte din dreapta sus în **AAPS** și selectați **Preferințe**

![Utilizați notificările sistemului pentru alerte și notificări](../images/android_auto_02.png)

În **Alerte locale** activați **Utilizați notificările de sistem pentru alerte și notificări**

![Utilizați notificările sistemului pentru alerte și notificări](../images/android_auto_03.png)

Verificați acum dacă primiți notificări de la **AAPS** pe telefon înainte de a merge la mașina dumneavoastră!

![Utilizați notificările sistemului pentru alerte și notificări](../images/android_auto_04.png)

## Permiteți utilizarea de "surse necunoscute" cu Android Auto.

Deoarece **AAPS** nu este o aplicație Android oficială, notificările trebuie să fie activate pentru "surse necunoscute" în Android Auto. Acest lucru se face prin utilizarea modului de dezvoltator pe care vi-l vom arăta aici.

Mergeți la mașină și conectați-vă telefonul mobil cu sistemul audio pentru mașini.

Ar trebui să vedeți acum un ecran similar cu acest ecran.

![Activați modul dezvoltator](../images/android_auto_05.png)

Apăsați pe pictograma **setare** pentru a începe configurarea.

Derulați în jos până la sfârșitul paginii și selectați **vedeți mai multe în telefon**.

![Activați modul dezvoltator](../images/android_auto_06.png)

Acum, pe mobil vom activa modul de dezvoltator.

Primul ecran arată așa. Derulează în jos până la sfârșitul paginii.

![Activați modul dezvoltator](../images/android_auto_07.png)

Aici vedeți versiunea de Android Auto prezentată. Atingeți de 10 ori (în cuvinte zece) pe versiunea Android Auto. With this hidden combination you have now enabled developer mode.

![Activați modul dezvoltator](../images/android_auto_08.png)

Confirm that you want to enable the developer mode in the modal dialog "Allow development settings?".

![Activați modul dezvoltator](../images/android_auto_09.png)

In the **developer settings** enable the "Unknown sources".

![Activați modul dezvoltator](../images/android_auto_10.png)

Now you can quit developer mode if you want. Tap three dots menu on the top right to do so.

## Show notifications in car

Tap the **number icon** on the lower right side in Android Auto in your car.

![number icon - Android Auto in car](../images/android_auto_11.png)

Your CGM data will be shown as follows:

![Date CGM AAPS pe Android Auto](../images/android_auto_01.png)

## Troubleshooting:

* If you don't see the notification, check if you [allowed AAPS to show notifications](#use-system-notifications-in-aaps-for-alerts-and-notifications) in Android and if [Android Auto has access rights to notifications](#allow-the-use-of-unknown-sources-with-android-auto).