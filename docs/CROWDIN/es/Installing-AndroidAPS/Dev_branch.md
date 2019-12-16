## Rama de desarrollo

<font color="#FF0000"><strong>Atención:</strong></font>
La rama de desarrollo es para el desarrollo adicional de AndroidAPS solamente. Se debe utilizar en un teléfono aparte para probar <font color="#FF0000"><strong>no para un lazo actual.</strong></font>

La versión más estable de AndroidAPS que se debe utilizar es la versión [Master](https://github.com/MilosKozak/AndroidAPS/tree/master). Se aconseja que permanezca en la rama maestra.

The dev version of AndroidAPS is only for developers and testers comfortable dealing with stacktraces, looking through log files and maybe firing up the debugger to produce bug reports that are helpful to the developers (in short: people that know what they are doing without being assisted!). Por lo tanto, muchas características inacabadas están inhabilitadas. To enable these features enter **Engineering Mode** by creating a file named `engineering_mode` in the same directory where you would find the log files. La habilitación del modo de ingeniería puede romper completamente el lazo.

However, the Dev branch is a good place to see what features are being tested and to help iron out the bugs and give feedback on how the new features work in practice. A menudo, la gente probará la rama Dev en un teléfono viejo y la bomba hasta que estén seguros de que es estable - cualquier uso de la misma es a su propio riesgo. Al probar cualquier característica nueva, recuerde que está eligiendo probar una característica aún-en-desarrollo. Haga lo mismo a su propio riesgo & con la debida diligencia para mantenerte a salvo.

If you find a bug or think something wrong has happened when using the Dev branch, then view the [issues tab](https://github.com/MilosKozak/AndroidAPS/issues) to check whether anyone else has found it, or add it yourself if not. The more information you can share here the better (don't forget you may need to share your [log files](../Usage/Accessing-logfiles.md). The new features can also be discussed in the [gitter room](https://gitter.im/MilosKozak/AndroidAPS).