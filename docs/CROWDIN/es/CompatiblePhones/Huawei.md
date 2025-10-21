# Cómo configurar un teléfono Huawei

Hay diferentes opciones, algunas específicas de Android, algunas específicas de Huawei:

* Add AAPS and xdrip+ to apps list which ignore battery optimisations:
  
  * Ajustes / App / Config / Autorizaciones Especiales / Ignorar la optimización de la batería / Seleccione "Todas las aplicaciones" / Configurar aplicación a permitido
    
    ![Huawei - ignorar la optimización de la batería](../images/Huawei_BatteryOptimization.png)

* Establezca los valores de la opción de batería:
  
  * Valores / aplicación / Seleccionar AndroidAPS / xdrip+ / Bajo lanzamiento de batería / aplicación
    
    * Asegúrese de eliminar la "gestión automática"
    * Permitir:
      
      * Inicio automático
      * Lanzamientos secundarios (se pueden lanzar desde otras aplicaciones)
      * Ejecutar en fondo
        
        ![Huawei - opciones de batería](../images/Huawei_BatteryOptions.png)

* Bloquear la aplicación
  
  * Ir a la Aplicación reciente de la lista y seleccione el icono de bloqueo
    
    ![Huawei - bloqueo de la aplicación](../images/Huawei_LockApp.png)

For xDrip+, you must enable persistent notifications (within xDrip+ app):

* Settings / less common settings / other misc options / Run Collector in foreground
  
  ![xdrip+ ajustes - recolector en primer plano](../images/xdrip_collector_foreground.png)

En función de la versión de Android, estos valores se encuentran en otro lugar. Estas explicaciones son para Android 8.1.