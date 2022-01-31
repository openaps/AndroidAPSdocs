Pour les utilisateurs de Eversense
**************************************************
La façon la plus simple d'utiliser Eversense avec AndroidAPS est d'installer la version non-US modifiée de `l'application Eversense <https://github.com/BernhardRo/Esel/blob/master/apk/Eversense_CGM_v1.0.410-patched.apk>`_ (après avoir désinstallé au préalable l'application originale).

**Attention : en désinstallant l'ancienne application, vos historiques de données de plus d'une semaine seront perdus !**

Pour enfin obtenir vos données dans AndroidAPS, vous devez installer `ESEL <https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk>`_, activer "Send to AAPS and xDrip" dans ESEL et sélectionner "MM640g" comme source des glycémies dans le `Générateur de configuration <../Configuration/Config-Builder.html>`_ dans AndroidAPS. Comme les données de glycémie de Eversense peuvent parfois être incohérente, il est préférable d'activer "Smooth Data" dans ESEL, plutôt que d'activer "Utiliser delta basé sur moyenne courte" dans AAPS.

Vous pouvez trouver tous les APKs y compris celui de la version US et d'autres instructions pour utiliser xDrip avec un capteur Eversense `ici <https://github.com/BernhardRo/Esel/tree/master/apk>`_.
