# Pour les utilisateurs de Eversense

La façon la plus simple d'utiliser Eversense avec AndroidAPS est d'installer l'application modifée non US [Eversense](https://github.com/BernhardRo/Esel/blob/master/apk/Eversense_CGM_v1.0.410-patched.apk) (après avoir désinstallé l'application originale).

**Attention : en désinstallant l'ancienne application, vos données historiques locales de plus d'une semaine seront perdues !**

Pour obtenir enfin vos données à AndroidAPS, vous devez installer [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) et activer "Envoyer à AAPS et xDrip" dans ESEL et "MM640g" comme source BG dans la [Configuration Builder](../Configuration/Config-Builder.md) dans AndroidAPS. Comme les données de glycémie de Eversense peuvent parfois être incohérente, il est bon de permettre "Smooth Data" dans ESEL, ce qui est mieux que d'activer "Toujours utiliser un delta courte moyenne au lieu d'un simple delta" dans AAPS.

Vous pouvez trouver tous les APKs y compris celui de la version US et d'autres instructions pour utiliser xDrip avec un capteur Eversense [ici](https://github.com/BernhardRo/Esel/tree/master/apk).
