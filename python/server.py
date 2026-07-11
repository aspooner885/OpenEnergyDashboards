from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pathlib import Path

app = FastAPI(title="OpenEnergyDashboards")

BASE_DIR = Path(__file__).parent

app.mount(
    "/static",
    StaticFiles(directory=BASE_DIR / "static"),
    name="static"
)


@app.get("/")
def index():
    return FileResponse(
        BASE_DIR / "static" / "animated_flow" / "index.html"
    )


from values import get_values


@app.get("/api/values")
def values():
    return get_values()