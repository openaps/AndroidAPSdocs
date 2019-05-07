# xDrip+ Einstellungen

Wenn Du es nicht bereits eingerichtet hast, lade [xdrip](https://github.com/NightscoutFoundation/xDrip) herunter.

Nutze für G6 Transmitter, die nach Mitte / Ende 2018 hergestellt wurden, eine der aktuellen <1>nightly build xDrip+ Versionen</1>. Diese Transmitter haben eine neue Firmware und die letzte stabile Version von xDrip+ vom 10.01.2019 kann mit diesen noch nicht korrekt umgehen.

## Grundsätzliche Einstellungen für alle CGM & FGM-Systeme

* Stelle sicher, dass Du die Base URL korrekt eingibst - inkl. <font color="#FF0000"><b>S</font></b> am Ende von http<b><font color="#FF0000">s</font></b>:// (nicht http://).</p> 
   
   <p>
     z.B. https://API_SECRET@your-app-name.herokuapp.com/api/v1/
   </p>
   
   <p>
     -> Hamburger Menü (oben links auf dem Starbildschirm) -> Einstellungen-> Cloud Upload-> API Upload (REST) -> Basis-URL
   </p></li> 
   
   <li>
     <p>
       Deaktiviere “Automatic Calibration” Falls die Checkbox für "Automatic Calibration" ausgewählt ist, aktiviere "Download data" einmalig, entferne dann den Haken in der Checkbox für "automatic calibration" und deaktiviere "Download data" wieder. Sonst werden die Behandlungen (Insulin & Kohlenhydrate) doppelt in Nightscout eingetragen.
     </p>
   </li>
   
   <li>
     Tippe auf "Extra Options"
   </li>
   
   <li>
     Deaktiviere "Upload treatments" und "Back-fill data"
   </li>
   
   <li>
     <p>
       Die Option "Alert on failures" sollte ebenfalls deaktiviert sein. Andernfalls erhälst Du alle 5 Minuten einen Alarm, falls das WLAN / Mobilfunknetz zu schlecht oder der Server nicht verfügbar ist.
     </p>
     <p>
       <img src="../images/xDrip_Basic1.png" alt="xDrip+ Grundeinstellungen 1" />
     </p>
     <p>
       <img src="../images/xDrip_Basic2.png" alt="xDrip+ Grundeinstellungen 2" />
     </p>
   </li>
   
   <li>
     <p>
       <strong>InterApp-Einstellungen</strong> (Broadcast) Wenn Du planst, AndroidAPS zu nutzen und die Daten an AndroidAPS weiterzugeben, musst Du den sogenannten 'Broadcast' in xDrip+ in den Inter-App Einstellungen einschalten.
     </p>
   </li>
   
   <li>
     Damit die Werte überseinstimmen, solltest Du "Sende den angezeigten Glukosewert" aktivieren.
   </li>
   
   <li>
     <p>
       Wenn Du zusätzlich "Behandlungen annehmen" und in AndroidAPS den Brodcast aktivierst, dann wird xDrip+ Insulinmengen, Kohlenhydrate und Basalrateninformationen aus AndroidAPS erhalten und kann so z.B. niedrige Werte vorhersagen.
     </p>
     <p>
       <img src="../images/xDrip_Basic3.png" alt="xDrip+ Grundeinstellungen 3" />
     </p>
   </li></ul> 
   
   <h2>
     xDrip+ mit Dexcom G6
   </h2>
   
   <h3>
     Dexcom-spezifische Einstellungen
   </h3>
   
   <ul>
     <li>
       <p>
         Öffne G5 Debug Einstellungen (gilt auch für Dexcom G6!) -> Hamburger Menü (oben links auf dem Homescreen) -> Einstellungen -> G5 Debug Einstellungen <img src="../images/xDrip_Dexcom_SettingsCall.png" alt="xDrip+ Einstellungen öffnen" />
       </p>
     </li>
     <li>
       <p>
         Aktiviere die folgenden Einstellungen:
       </p>
       <ul>
         <li>
           Use the OB1 Collector
         </li>
         <li>
           Native Algorithm (wichtig, wenn Du SMB benutzen willst)
         </li>
         <li>
           G6 support
         </li>
         <li>
           Allow OB1 unbonding
         </li>
         <li>
           Allow OB1 initiate bonding
         </li>
       </ul>
     </li>
     <li>
       Alle anderen Optionen sollten deaktiviert werden.
     </li>
     <li>
       <p>
         Passe die Warnschwelle für die Batterie ('Adjust battery warning level') auf 280 an. (Du findest diese ganz unten in der Liste der G5/G6 Debug Settings.)
       </p>
       <p>
         <img src="../images/xDrip_Dexcom_DebugSettings.png" alt="xDrip+ G5 Debugeinstellungen" />
       </p>
     </li>
   </ul>
   
   <h3>
     Preemptive restarts werden nicht empfohlen
   </h3>
   
   <p>
     Die automatische Verlängerung von Dexcom G6 Sensoren ("preemptive restarts") werden nicht empfohlen, da dies zu Sprüngen in den BZ-Werten nach dem eustart am 9. Tag führen kann.
   </p>
   
   <pre><code>![xDrip+ Jump after Preemptive Restart](../images/xDrip_Dexcom_PreemptiveJump.png)
</code></pre>
   
   <p>
     Die Nutzung des G6 kann vielleicht etwas komplexer sein, als zunächst vermutet. Mache Dir die folgenden Punkte bewusst, um das System sicher zu nutzen:
   </p>
   
   <ul>
     <li>
       Wenn Du mit nativen Daten und dem Kalibrierungscode in xDrip+ oder Spike arbeitest, ist es am sichersten, auf den "preemptive" Neustart des Sensors zu verzichten.
     </li>
     <li>
       Falls Du den "preemptive restart" verwendest, stelle sicher, dass dieser zu einer Tageszeit erfolgt, zu der Du die Änderungen verfolgen und ggf. durch eine Kalibrierung eingreifen kannst.
     </li>
     <li>
       Falls Du Sensoren verlängerst, verzichte aus Sicherheitsgründen entweder auf die Werkskalibrierung an Tag 11 und 12 oder stelle sicher, dass Du die Abweichungen im Auge hast und evtl. durch Kalibrierung korrigieren kannst.
     </li>
     <li>
       Das sogenannte "Pre-soaking" (Sensor früher ohne Transmitter setzen, damit er sich an die Gewebsflüssigkeit "gewöhnt") mit Werkskalibrierung führt wahrscheinlich zu Abweichungen in den Glukosewerten. Falls Du mit "pre-soaking" arbeitest, wirst Du wahrscheinlich besser Ergebnisse erzielen, wenn Du den Sensor kalibrierst.
     </li>
     <li>
       Wenn Du nicht auf die Abweichungen, die stattfinden können, achten willst, wäre es evtl. besser bei der Verlängerung auf die Werkskalibrierung zu verzichten und das System wie den G5 (mit "Pflichtkalibrierung") zu nutzen.
     </li>
   </ul>
   
   <p>
     Mehr zu den Details und Gründen für diese Empfehlungen findest Du im <a href="http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/">kompletten Artikel</a> (englisch) von Tim Street auf seiner Seite <a href="http://www.diabettech.com">www.diabettech.com</a>.
   </p>
   
   <h3>
     G6 Transmitter das erste Mal verbinden
   </h3>
   
   <p>
     

<b>Für den zweiten und alle weiteren Transmitter siehe 'Transmitterlaufzeit verlängern' weiter unten.</b>

   </p>
   
   <ul>
     <li>
       Nutze für G6 Transmitter, die nach Mitte / Ende 2018 hergestellt wurden, eine der aktuellen <1>nightly build xDrip+ Versionen</1>. Diese Transmitter haben eine neue Firmware und die letzte stabile Version von xDrip+ vom 10.01.2019 kann mit diesen noch nicht korrekt umgehen.
     </li>
     <li>
       Schalten Sie den Original Dexcom Empfänger aus (falls Du diesen verwendet).
     </li>
     <li>
       Drücke auf der Startseite lang auf den roten Blutstropfen des xDrip+ Logos, um den "Source Wizard Button" zu aktivieren.
     </li>
     <li>
       Benutze den Source Wizard Button. Damit wird sicher gestellt, dass Du die Standardeinstellungen inkl. OB1 & Native Mode verwendest. <ul>
         <li>
           Du wirst durch die Grundeinstellungen geführt.
         </li>
         <li>
           Wenn Du den Transmitter zum ersten Mal verbindest, benötigst Du die Transmitter-Seriennummer.
         </li>
       </ul>
     </li>
     <li>
       <p>
         Gib die Seriennummer des Transmitters, die Du auf der Transmitter-Verpackung und auf der Rückseite des Transmitters findest, ein.
       </p>
       <p>
         <img src="../images/xDrip_Dexcom_TransmitterSN.png" alt="xDrip+ Dexcom Transmitter Seriennummer" />
       </p>
     </li>
     <li>
       <p>
         Setze den neuen Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung).
       </p>
     </li>
     <li>
       Klicke den Transmitter in die Halterung auf dem Sensorpflaster ein.
     </li>
     <li>
       Starte den Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung) -> Am unteren Bildschirmrand nach einigen Minuten wird “Warm Up x,x hours left” angezeigt. -> Falls die Zeitangabe fehlt, musst Du den Sensor stoppen und erneut starten.
     </li>
     <li>
       Starte den Datensammler neu (im Systemstatus und nur, wenn Du den Sensor neu gesetzt hast).
     </li>
     <li>
       Falls Du den Dexcom Empfänger nutzt, schalte diesen nicht ein, bevor xDrip+ die ersten BZ-Werte anzeigt.
     </li>
     <li>
       <p>
         Drücke auf der Startseite lang auf den roten Blutstropfen des xDrip+ Logos, um den "Source Wizard Button" zu deaktivieren.
       </p>
       <p>
         <img src="../images/xDrip_Dexcom_Transmitter01.png" alt="xDrip+ Dexcom Transmitter 1" />
       </p>
       <p>
         <img src="../images/xDrip_Dexcom_Transmitter02.png" alt="xDrip+ Dexcom Transmitter 2" />
       </p>
       <p>
         <img src="../images/xDrip_Dexcom_Transmitter03.png" alt="xDrip+ Dexcom Transmitter 3" />
       </p>
       <p>
         <img src="../images/xDrip_Dexcom_Transmitter04.png" alt="xDrip+ Dexcom Transmitter 4" />
       </p>
     </li>
   </ul>
   
   <h3>
     Transmitter-Batteriestatus
   </h3>
   
   <ul>
     <li>
       Der Batteriestatus kann im Systemstatus (Hamburgerbenü links oben auf dem Startbildschirm) überwacht werden.
     </li>
     <li>
       <p>
         Wische nach links, um den zweiten Status-Bildschirm zu sehen.<img src="../images/xDrip_Dexcom_Battery.png" alt="xDrip+ Erster Transmitter" />
       </p>
     </li>
     <li>
       <p>
         Die genauen Werte, nach denen der Transmitter aufgrund niedrigem Batteriestand ausfällt, sind nicht bekannt. Die folgenden Informationen wurden von einem User gepostet, nachdem sich der Transmitter abgeschaltet hatte: Transmitter days: 151 Voltage A: 297 Voltage B: 260 Resistance: 2391
       </p>
     </li>
   </ul>
   
   <h3>
     Transmitterlaufzeit verlängern
   </h3>
   
   <ul>
     <li>
       Wechsle in den "engineering mode": <ul>
         <li>
           Klicke auf das Spritzen-Symbol rechts auf dem xDrip+ Startbildschirm.
         </li>
         <li>
           Klicke dann auf das Mikrophon-Symbol in der unteren rechten Ecke.
         </li>
         <li>
           Gib in das Textfeld, das geöffnet wird, "enable engineering mode" ein und klicken auf OK.
         </li>
         <li>
           Klicke auf "Done".
         </li>
         <li>
           Falls Du die Google Speak engine nutzt, kannst Du auch das Sprachkommando "enable engineering mode" nutzen.
         </li>
       </ul>
     </li>
     <li>
       Wechsle zu den G5 Debugeinstellungen und prüfe den 'OB1 collector'.
     </li>
     <li>
       Benutze den Sprachbefehl: “hard reset transmitter”
     </li>
     <li>
       Beim nächsten Dateneingang vom Transmitter wird der Reset durchgeführt.
     </li>
     <li>
       Beobachte im Systemstatus (Hamburgermenü links oben -> Systemstatus) was passiert.
     </li>
   </ul>
   
   <h3>
     Transmitter ersetzen
   </h3>
   
   <p>
     Nutze für G6 Transmitter, die nach Mitte / Ende 2018 hergestellt wurden, eine der aktuellen <1>nightly build xDrip+ Versionen</1>. Diese Transmitter haben eine neue Firmware und die letzte stabile Version von xDrip+ vom 10.01.2019 kann mit diesen noch nicht korrekt umgehen.
   </p>
   
   <ul>
     <li>
       Schalte den Original Dexcom Empfänger aus (falls Du diesen verwendet).
     </li>
     <li>
       <p>
         Stoppe den Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung) Stelle sicher, dass er tatsächlich gestoppt ist: Suche dem zweiten "G5/G6 Status" Bildschirm nach "Queue Items" (etwa auf halber Höhe) - Es wird "(1) Stop Sensor" oder so ähnlich angezeigt Warte, bis diese Meldung nach einigen Minuten verschwindet. -> Eine Videoanleitung zum Wechsel des Transmitters ohne den Sensor zu stoppen findest Du unter <a href="https://youtu.be/AAhBVsc6NZo">https://youtu.be/AAhBVsc6NZo</a>.
       </p>
       <p>
         <img src="../images/xDrip_Dexcom_StopSensor.png" alt="xDrip+ Sensor stoppen" />
       </p>
     </li>
     <li>
       <p>
         Wähle im Systemstatus "Gerät löschen".
       </p>
       <p>
         <img src="../images/xDrip_Dexcom_ForgetDevice.png" alt="xDrip+ Gerät löschen" />
       </p>
     </li>
     <li>
       <p>
         Entferne die Bluetooth Verbindung zum Transmitter in den Einstellungen Deines Smartphones. Dieser wird als 'DexcomXX' angezeigt. Dabei steht XX für die letzten beiden Stellen der Seriennummer des Transmitters.
       </p>
     </li>
     <li>
       Entferne den Transmitter (und den Sensor, falls Du auch diesen wechselst).
     </li>
     <li>
       Drücke auf der Startseite lang auf den roten Blutstropfen des xDrip+ Logos, um den "Source Wizard Button" zu aktivieren.
     </li>
     <li>
       Benutze den Source Wizard Button. Damit wird sicher gestellt, dass Du die Standardeinstellungen inkl. OB1 & Native Mode verwendest. <ul>
         <li>
           Du wirst durch die Grundeinstellungen geführt.
         </li>
         <li>
           Wenn Du den Transmitter zum ersten Mal verbindest, benötigst Du die Transmitter-Seriennummer.
         </li>
       </ul>
     </li>
     <li>
       Gib die Seriennnummer des neuen Transmitters ein.
     </li>
     <li>
       Setze den neuen Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung). -> Es wird empfohlen, ca. 15 Minuten zwischen dem Stoppen und dem Start des neuen Sensors zu warten.
     </li>
     <li>
       Klicke den Transmitter in die Halterung auf dem Sensorpflaster ein.
     </li>
     <li>
       Starte den neuen Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung).
     </li>
     <li>
       Starte den Datensammler neu (im Systemstatus und nur, wenn Du den Sensor neu gesetzt hast).
     </li>
     <li>
       Falls Du den Dexcom Empfänger nutzt, schalte diesen nicht ein, bevor xDrip+ die ersten BZ-Werte anzeigt.
     </li>
     <li>
       <p>
         Drücke auf der Startseite lang auf den roten Blutstropfen des xDrip+ Logos, um den "Source Wizard Button" zu deaktivieren.
       </p>
       <p>
         <img src="../images/xDrip_Dexcom_Transmitter01.png" alt="xDrip+ Dexcom Transmitter 1" />
       </p>
       <p>
         <img src="../images/xDrip_Dexcom_Transmitter02.png" alt="xDrip+ Dexcom Transmitter 2" />
       </p>
       <p>
         <img src="../images/xDrip_Dexcom_Transmitter03.png" alt="xDrip+ Dexcom Transmitter 3" />
       </p>
       <p>
         <img src="../images/xDrip_Dexcom_Transmitter04.png" alt="xDrip+ Dexcom Transmitter 4" />
       </p>
     </li>
   </ul>
   
   <h3>
     Neuer Sensor
   </h3>
   
   <ul>
     <li>
       Schalte den Original Dexcom Empfänger aus (falls Du diesen verwendet).
     </li>
     <li>
       <p>
         Stoppe den Sensor (außer Du tauscht den Transmitter während einer laufenden Sensorsitzung) Stelle sicher, dass er tatsächlich gestoppt ist: Suche dem zweiten "G5/G6 Status" Bildschirm nach "Queue Items" (etwa auf halber Höhe) - Es wird "(1) Stop Sensor" oder so ähnlich angezeigt Warte, bis diese Meldung nach einigen Minuten verschwindet
       </p>
       <p>
         <img src="../images/xDrip_Dexcom_StopSensor.png" alt="xDrip+ Sensor stoppen" />
       </p>
     </li>
     <li>
       <p>
         Reinige die Kontakte (Transmitter-Rückseite) mit Alkohol und lasse sie an der Luft trocknen.
       </p>
     </li>
     <li>
       <p>
         Falls Du diese Funktionen verwendest: Deaktiviere “Restart Sensor” und “Preemptive restarts” (Hamburger Menü -> Einstellungen -> G5 Debugeinstellungen). Wenn Du diese Funktionen nicht deaktivierst, wird der neue Sensor nicht richtig starten.
       </p>
       <p>
         <img src="../images/xDrip_Dexcom_Restart.png" alt="xDrip+ Preemptive Restart" />
       </p>
     </li>
     <li>
       <p>
         Starte Sensor <b><font color="#FF0000">-> Es wird empfohlen, ca. 15 Minuten zwischen dem Stoppen und dem Starten des neuen Sensors zu warten.</b></font></p></li> 
         
         <li>
           Gib die Zeit an, zu der der Sensor gesetzt wurde. <ul>
             <li>
               Um den G6 im "native mode" zu nutzen, musst Du die 2-Stunden-Aufwärmzeit abwarten.
             </li>
             <li>
               Wenn Du den xDrip+ Algorithmus verwendest, kannst Du eine Setzzeit von mehr als zwei Stunden in der Vergangenheit setzen, um die Aufwärmphase zu umgehen. Die angeziegten Werte können dann aber recht fehlerhaft sein. Deshalb wird dies nicht empfohlen.
             </li>
           </ul>
         </li>
         
         <li>
           Gib den Sensorcode ein. Diesen findest Du auf der Abdeckfolie des Sensorpflasters. <ul>
             <li>
               Bewahre diesen Code für künftige Nutzung auf (z.B. für einen Neustart nach Tausch des Transmitters).
             </li>
             <li>
               Der Code findet sich auch in den xDrip+ Logs: Klicke auf das 3-Punkte-Menü oben rechts auf dem Startbildschirm und wähle "Log anzeigen".
             </li>
           </ul>
         </li>
         
         <li>
           Kalibrierungen sind nicht notwendig, wenn Du den G6 im "native mode" verwendest. xDrip+ wird nach der zweistündigen Aufwärmphase automatisch die erste BZ-Werte anzeigen.
         </li>
         
         <li>
           <p>
             Falls Du den Dexcom Empfänger nutzt, schalte diesen nicht ein, bevor xDrip+ die ersten BZ-Werte anzeigt.
           </p>
           <p>
             <img src="../images/xDrip_Dexcom_SensorStart01.png" alt="xDrip+ Sensor starten 1" />
           </p>
           <p>
             <img src="../images/xDrip_Dexcom_SensorStart02.png" alt="xDrip+ Sensor starten 2" />
           </p>
         </li></ul> 
         
         <h3>
           Sensorcode in den Logs finden
         </h3>
         
         <ul>
           <li>
             Der Dexcom Sensorcode findet sich in den xDrip+ Logs.
           </li>
           <li>
             Tippe auf das 3-Punkte-Menü (oben rechts auf dem Homescreen).
           </li>
           <li>
             <p>
               Wähle 'Log anzeigen' und suche nach 'code'
             </p>
             <p>
               <img src="../images/xDrip_Dexcom_SensorCode.png" alt="xDrip+ Dexcom Sensorcode ermitteln" />
             </p>
           </li>
         </ul>
         
         <h2>
           xDrip+ mit Freestyle Libre
         </h2>
         
         <h3>
           Libre-spezifische Einstellungen
         </h3>
         
         <ul>
           <li>
             <p>
               Öffne die Bluetooth Einstellungen -> Hamburger Menü (oben links auf dem Startbildschirm) -> Einstellungen -> scrolle nach unten -> Erweiterte Einstellungen -> Bluetootheinstellungen
             </p>
             <p>
               <img src="../images/xDrip_Libre_BTSettings1.png" alt="xDrip+ Libre Bluetooth Einstellungen 1" />
             </p>
           </li>
           <li>
             <p>
               Aktiviere die folgenden Einstellungen:
             </p>
             <ul>
               <li>
                 Schalte Bluetooth ein
               </li>
               <li>
                 Verwende Scannen
               </li>
               <li>
                 Dienste immer ermitteln
               </li>
             </ul>
           </li>
           <li>
             <p>
               Alle anderen Optionen sollten deaktiviert werden.
             </p>
             <p>
               <img src="../images/xDrip_Libre_BTSettings2.png" alt="xDrip+ Libre Bluetooth Einstellungen 2" />
             </p>
           </li>
         </ul>
         
         <h3>
           Libre Transmitter verbinden und Sensor starten
         </h3>
         
         <pre><code>![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)
</code></pre>