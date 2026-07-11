# OpenEnergyDashboards

OpenEnergyDashboards ist eine Sammlung moderner Dashboards und Visualisierungen für **SigEnergy-Energiespeichersysteme**.

Das Projekt stellt verschiedene Möglichkeiten bereit, Energieflüsse, Erzeugung, Verbrauch und Batteriedaten übersichtlich und in Echtzeit darzustellen.

## Unterstützte Plattformen

- 🐍 Python Dashboard
- 🏠 Home Assistant Dashboard
- 📊 Grafana (geplant)
- 🌐 Web / HTML (geplant)

---

# Python Dashboard

Ein eigenständiges Web-Dashboard mit animierter Energieflussdarstellung.

## Funktionen

- ☀️ PV-Leistung
- 🏠 Hausverbrauch
- 🌍 Netzbezug / Einspeisung
- 🔋 Batteriestatus
- ⚡ animierte Energieflüsse
- 🌙 Hell-/Dunkelmodus (wird gespeichert)
- 🔄 Live-Aktualisierung

---

## Voraussetzungen

- Python 3.11 oder neuer
- Git
- Zugriff auf das lokale Netzwerk
- Aktiviertes Modbus TCP auf der SigEnergy-Anlage

---

## Installation

Repository klonen

```bash
git clone https://github.com/aspooner885/OpenEnergyDashboards.git
cd OpenEnergyDashboards
```

Virtuelle Umgebung erstellen

### Linux

```bash
python3 -m venv openenergy-venv
source openenergy-venv/bin/activate
```

### Windows

```powershell
python -m venv openenergy-venv
openenergy-venv\Scripts\activate
```

Pakete installieren

```bash
pip install -r requirements.txt
```

---

## SigEnergyPythonAPI

Das Dashboard verwendet die SigEnergyPythonAPI.

Installation erfolgt automatisch über die requirements.txt.

Alternativ kann sie manuell installiert werden:

```bash
git clone https://github.com/aspooner885/SigenergyPythonAPI.git
```

---

## Konfiguration

Die Verbindung wird über

```text
config.py
```

konfiguriert.

Beispiel:

```python
SIGENERGY_IP = "192.168.178.100"
SIGENERGY_PORT = 502
```

---

## Dashboard starten

```bash
cd python
python server.py
```

oder

```bash
uvicorn server:app --host 0.0.0.0 --port 8000
```

Danach im Browser öffnen

```
http://localhost:8000
```

oder

```
http://IP_DES_SERVERS:8000
```

---

## Bedeutung der Energieflüsse

| Farbe | Bedeutung |
|--------|-----------|
| 🟠 | PV → Haus |
| 🟢 | PV → Netz |
| 🔵 | Netz → Haus |
| 🔷 | Batterie → Haus |
| 🟡 | PV → Batterie |

---

# Home Assistant Dashboard

Das Repository enthält zusätzlich ein Dashboard für Home Assistant.

## Voraussetzungen

Installierte HACS-Komponenten:

- Mushroom Cards
- ApexCharts Card
- Power Flow Card Plus
- Card Mod (optional)

---

## Installation

Die Datei

```
homeassistant/dashboard.yaml
```

als neues Dashboard in Home Assistant importieren.

Anschließend die verwendeten Sensoren an die eigenen Entity-IDs anpassen.

Benötigt werden mindestens folgende Sensoren:

### Aktuelle Leistungen

- PV-Leistung
- Hausverbrauch
- Netzleistung
- Batterieleistung
- Batteriestand

### Tageswerte

- PV-Erzeugung
- Hausverbrauch
- Netzbezug
- Netzeinspeisung
- Akku geladen
- Akku entladen

### Berechnete Sensoren

Zusätzlich werden folgende Template-Sensoren verwendet:

- Autarkiegrad
- Eigenverbrauchsquote
- PV → Haus

Diese können über die entsprechenden Home-Assistant-Templates erstellt werden.

---

## Funktionen

- Live-Energiefluss
- Tagesstatistiken
- PV-Leistungsdiagramm
- Autarkiegrad
- Eigenverbrauch
- optimiert für Desktop und Tablet

---

# Fehlerbehebung

## Keine Daten

Prüfen:

- Modbus aktiviert
- richtige Entity-IDs
- SigEnergy erreichbar

## Python Dashboard startet nicht

```bash
python server.py
```

oder

```bash
uvicorn server:app
```

ohne Fehlermeldung starten.

## Browser zeigt alte Version

Browsercache leeren

```
STRG + F5
```

---

# Geplante Inhalte

- weitere Dashboard-Designs
- Grafana-Dashboard
- Mobile Dashboard
- Wandtablet-Layouts
- weitere Energiefluss-Visualisierungen

---

# Lizenz

Dieses Projekt steht unter der MIT-Lizenz.

Die verwendete SigEnergyPythonAPI ist ein eigenständiges Projekt und wird ebenfalls unter der MIT-Lizenz veröffentlicht.