# OpenEnergyDashboards

OpenEnergyDashboards ist eine Sammlung verschiedener Dashboards und Visualisierungen für **SigEnergy-Anlagen**.

Ziel dieses Projekts ist es, Energieflüsse auf unterschiedlichen Plattformen modern, übersichtlich und in Echtzeit darzustellen.

## Unterstützte Plattformen

- 🐍 Python
- 🏠 Home Assistant
- 📊 Grafana
- 🌐 HTML / Web

---

# Python Dashboard

Ein einfaches Live-Dashboard für SigEnergy-Speichersysteme.

## Funktionen

Das Dashboard zeigt in Echtzeit:

- ☀️ PV-Leistung
- 🌍 Netzbezug / Einspeisung
- 🏠 Hausverbrauch
- 🔋 Batteriestand
- animierten Energiefluss
- Hell-/Dunkelmodus (Einstellung wird gespeichert)

---

## Voraussetzungen

- Python 3.11 oder neuer
- Zugriff auf das lokale Netzwerk der SigEnergy-Anlage
- Aktiviertes Modbus TCP auf der SigEnergy
- Git (optional)

---

## Installation

Repository klonen:

```bash
git clone https://github.com/DEINNAME/OpenEnergyDashboards.git
cd OpenEnergyDashboards
```

Virtuelle Umgebung erstellen.

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

Benötigte Pakete installieren:

```bash
pip install -r requirements.txt
```

---

## SigEnergyPythonAPI

Dieses Dashboard verwendet die **SigEnergyPythonAPI**.

Repository klonen:

```bash
git clone https://github.com/DEINNAME/SigenergyPythonAPI.git
```

Alternativ kann eine bereits vorhandene Installation verwendet werden.

---

## Konfiguration

Die Verbindung zur Anlage wird über die Datei

```
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

Alternativ:

```bash
uvicorn server:app --host 0.0.0.0 --port 8000
```

Anschließend im Browser öffnen:

```
http://localhost:8000
```

oder

```
http://IP_DES_SERVERS:8000
```

---

## Bedeutung der Farben

| Farbe | Energiefluss |
|-------|--------------|
| 🟠 Orange | PV → Haus |
| 🟢 Grün | PV → Netz |
| 🔵 Blau | Netz → Haus |
| 🔷 Türkis | Batterie → Haus |
| 🟡 Gelb | PV → Batterie |

---

## Fehlerbehebung

### Keine Werte sichtbar

Prüfen:

- SigEnergy erreichbar
- Modbus TCP aktiviert
- IP-Adresse korrekt
- Firewall blockiert Port 502 nicht

### Dashboard startet nicht

Prüfen, ob

```bash
python server.py
```

oder

```bash
uvicorn server:app
```

ohne Fehlermeldung startet.

### Browser zeigt eine alte Version

Den Browser-Cache leeren.

Windows / Linux:

```
STRG + F5
```

---

# Geplante Inhalte

- weitere Dashboard-Designs
- zusätzliche Energiefluss-Visualisierungen
- Desktop-Anwendungen
- Web-Anwendungen
- Wandtablet-Layouts
- mobile Ansichten

---

# Lizenz

MIT License