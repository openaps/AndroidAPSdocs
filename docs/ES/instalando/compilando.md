# Compilando la APK

1.	Instalar [Android Studio](https://developer.android.com/studio/install.html)

2.	Usar git clone en Android Studio según las siguientes fotos para clonar el repositorio.

![](https://github.com/RadoslavR/AndroidAPS/blob/master/Screenshot%201.png)
![](https://github.com/RadoslavR/AndroidAPS/blob/master/Screenshot2.png)

3.	Abrir Android Studio y seleccionar “abrir un proyecto Android Studio existente”, seleccionando la localización y extrayendo los ficheros. 

4.	Puede que salte mensaje de error “not finding build tolos”- Click en el link de Android Studio para instalar el software de actualización sugerido. 

5.	Ir al Build menú y click en “Generate Signed APK”

6.	Seleccionar “app” como módulo 
![Select 'app' as Module](https://user-images.githubusercontent.com/9692866/38299495-8885e446-37fa-11e8-9d19-cb05fd1bb506.png)
![](https://github.com/gempickfordwaugh/AndroidAPS/raw/b09d7dc444f59b799888bcd596e36e1d562a9674/generate%20signed%20APK.png)


7.	Selecciona un un keystore y password, si es la primera vez al crear esto, o completando los detalles de uno existente. Para más información sobre uso de Keysore [ir aquí](https://developer.android.com/studio/publish/app-signing.html#generate-key)

8.	“Release” debe ser tu opción por defecto para “build Type”, la opción “debug” es para desarrolladores. 

9.	Selecciona la opción Build que quieres
       * Full
       * Openloop
       * Pumpcontrol
       * Nsclient
			 
10.	Selecciona V1 “Jar Signature” (V2 es opcional) y pincha en finalizar. 

![release full signatuer](https://user-images.githubusercontent.com/9692866/38299493-8838e38a-37fa-11e8-8c28-3fa6071e7a76.png)

11.	Espera a que se cree la APK. Recibirás un pop-up cuando termine. 

![](https://github.com/MilosKozak/AndroidAPS/wiki/images/androidstudio3.png)

12.	Pincha en “mostrar en explorer”. Encontrarás que la APK está generada, a veces tarda un tiempo en aparecer. 

13.	Copia la APK con el mismo nombre del fichero con el que construiste al móvil Android e instálala. Si tu APK no se instala y tienes una versión anterior de AndroidAPS en tu móvil que fue verificada con una Key diferente necesitarás desinstalar esta primero, recuerdo exportar los ajustes que tengas. 
