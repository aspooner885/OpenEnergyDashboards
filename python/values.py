import sys
from pathlib import Path
sys.path.append(str(Path(__file__).resolve().parent.parent))

from connector import get_client

from icecream import ic 


def get_values():
    client = get_client()
    netzbezug = client.get_current_grid_power()

    return {
        "Photovoltaik": client.get_current_pv_power(),
        "Netz": client.get_current_grid_power(),
        "Batterie": client.get_current_battery_power(),
        "Haus": client.get_current_load_power(),
        "Batteriestand": client.get_battery_soc(),
        "Netzleistung": abs(netzbezug),
        "Netzrichtung": "Netzbezug" if netzbezug > 0 else "Einspeisung",
    }

