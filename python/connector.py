from SigenAPI.api import SigenStorClient
import SigenAPI
import config



def get_client():
    return SigenStorClient(config.IP)