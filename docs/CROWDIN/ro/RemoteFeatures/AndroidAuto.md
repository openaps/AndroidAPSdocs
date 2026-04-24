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

![Utilizați notificările de sistem pentru alerte și notificări](../images/android_auto_02.png)

În **Alerte locale** activați **Utilizați notificările de sistem pentru alerte și notificări**

![Utilizați notificările de sistem pentru alerte și notificări](../images/android_auto_03.png)

Verificați acum dacă primiți notificări de la **AAPS** pe telefon înainte de a merge la mașina dumneavoastră!

![Utilizați notificările de sistem pentru alerte și notificări](../images/android_auto_04.png)

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

Aici vedeți versiunea de Android Auto prezentată. Atingeți de 10 ori (în cuvinte zece) pe versiunea Android Auto. Cu această combinație ascunsă ați activat acum modul de dezvoltator.

![Activați modul dezvoltator](../images/android_auto_08.png)

Confirmați că doriți să activați modul dezvoltator în dialogul modal "Permiteți setările de dezvoltare?".

![Activați modul dezvoltator](../images/android_auto_09.png)

În setările **pentru dezvoltator** activați "Surse necunoscute".

![Activați modul dezvoltator](../images/android_auto_10.png)

Acum puteți ieși din modul de dezvoltator dacă doriți. Atingeți meniul cu trei puncte din dreapta sus pentru a face asta.

## Afișați notificările în mașină

Apăsați pe **pictograma număr** din partea dreaptă jos a Android Auto din mașina dumneavoastră.

![pictogramă număr - Android Auto în mașină](../images/android_auto_11.png)

Datele dumneavoastră CGM vor fi afișate după cum urmează:

![Date CGM AAPS pe Android Auto](../images/android_auto_01.png)

## Depanare:

* Dacă nu vedeți notificarea, verificați dacă [ați permis AAPS să afișeze notificările](#use-system-notifications-in-aaps-for-alerts-and-notifications) în Android și dacă [Android Auto are drepturi de acces la notificări](#allow-the-use-of-unknown-sources-with-android-auto).