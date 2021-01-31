# Wie arbeitet mit einer API?
Code aus dem YouTube Tutorial "Wie nutze ich eine API?". Um das Script zu starten einfach die folgenden Punkte durchführen:

### Erstellen einer .env Datei
In der obersten Struktur sollte eine neue Datei erstellt werden:

```
- cache
|- youtube.json
- routes
|- youtube.js
- .gitignore
- README.md
- app.js
- package-lock.json
- package.json
+ .env
```
In dieser Datei sollten anschließend die Variablen wie folgt erweitert werden:
```
YOUTUBE_ID= --your ID--
YOUTUBE_KEY= --your KEY--
PORT=3000
```
Anschließend einmal alles installieren
```
npm i
```
Und mit dem Befehl, den localen Server starten
```
npm run start
```
In deiner Console solltest du dann eine Ausgabe sehen und wenn du auf die URL `http://localhost:3000/youtube` gehst solltest du ein JSON sehen.