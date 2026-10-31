# Rama de desarrollo

```{warning}
La rama dev es solo para seguir desarrollando AAPS. Se debe usar en un teléfono aparte para pruebas, <font color="#FF0000">**¡no para usar el lazo de verdad!**</font>
```

La versión más estable de AAPS es la de la [rama master](https://github.com/nightscout/AndroidAPS/tree/master). Se recomienda usar la rama master para el lazo de verdad.

La versión dev de AAPS es solo para desarrolladores y testers que saben manejar stacktraces, revisar archivos de log y quizá usar el depurador para crear informes de errores útiles para los desarrolladores (en resumen: personas que saben lo que hacen sin ayuda). Por eso muchas funciones sin terminar están desactivadas. Para activar estas funciones, entra en el **Modo de ingeniería** creando un archivo llamado `engineering_mode` en la carpeta /AAPS/extra . Activar el modo de ingeniería puede romper el lazo por completo.

Sin embargo, la rama dev es un buen lugar para ver qué funciones se están probando, ayudar a corregir errores y dar tu opinión sobre cómo funcionan las nuevas funciones en la práctica. Muchas personas prueban la rama dev en un teléfono y una bomba antiguos hasta que están seguras de que es estable. Cualquier uso es bajo tu propio riesgo. Cuando pruebes nuevas funciones, recuerda que eliges probar una función que aún está en desarrollo. Hazlo bajo tu propio riesgo y con el cuidado necesario para mantenerte a salvo.

Si encuentras un error o crees que algo ha ido mal al usar la rama dev, mira la [pestaña issues](https://github.com/nightscout/AndroidAPS/issues) para ver si alguien más ya lo ha encontrado. Si no, añádelo tú. Cuanta más información compartas aquí, mejor (no olvides que quizá tengas que compartir tus [archivos de log](../GettingHelp/AccessingLogFiles.md)). Las nuevas funciones también se pueden comentar en [Discord](https://discord.gg/4fQUWHZ4Mw).

Una versión dev tiene fecha de caducidad. Esto parece incómodo cuando la usas sin problemas, pero tiene un objetivo. Cuando solo circula una versión dev, es más fácil seguir los errores que reporta la gente. Los desarrolladores no quieren tener tres versiones dev en circulación, con errores corregidos en unas y no en otras, y con personas que siguen informando de errores ya corregidos.

(branch-ci-test)=

## Probar una rama concreta (branch-ci)

Para compilar una rama de prueba, selecciona branch-ci, que te permite elegir una rama concreta para crear el APK. Puedes usar este método cuando necesites probar la rama dev.

![aaps_ci_branch_ci1](../images/Building-the-App/CI/aaps_ci_branch_ci1.png)

![aaps_ci_branch_ci2](../images/Building-the-App/CI/aaps_ci_branch_ci2.png)

(github-pr-test)=

## Probar cambios de un pull request (GitHub CI actions deploy)

Disponible desde 3.3.2.1.dev

- Adecuado para testers o para quien ayuda con las pruebas.

```{eval-rst}
.. raw:: html

    <!--crowdin: exclude-->
    <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
      <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
        <iframe
          src="https://geo.dailymotion.com/player/x9rdx1q.html?video=x9rdx1q&loop=true&mute=true"
          loading="lazy"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </div>
```

![aaps_ci_pr_ci](../images/Building-the-App/CI/aaps_ci_pr_ci.png)

- Target repository: el repositorio que contiene el PR, con el formato owner/repo. Deja el valor por defecto **nightscout/AndroidAPS** salvo que te hayan dicho que uses otro repositorio (solo los desarrolladores deberían hacerlo).

- PR number: introduce el número del PR que quieres probar.

- PR reference types: hay dos opciones de tipo de referencia del PR:
    
    - head:
    - Obtiene el contenido real de la rama del autor del PR (es decir, el historial de commits original, sin ninguna fusión).
    - Equivale al estado original de la rama del PR, como si se obtuviera directamente de un fork o de una rama de funcionalidad.
    
    - merge:
    
    - Obtiene el resultado de la fusión del PR en la rama de destino (por ejemplo, dev) que GitHub simula de antemano.
    - Es un commit de fusión virtual que GitHub crea automáticamente.
    - Este commit solo existe cuando el PR no tiene conflictos y se puede fusionar.
    
    - variant:
    
    - Consulta [variant](#browserbuild-variant)