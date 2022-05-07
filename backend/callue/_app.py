import os
import bottle
from . import default_routes
from .util import EnableCors, minify
from .routemap import _execute_routemap

_app = bottle.app()
_app.install(EnableCors())
pages = {
  'frontend': '',
  'homepage': '',
  'favicon': None
}

def run(port=80, *, frontend='./frontend', homepage='index.html', favicon='favicon.png'):
  """
  Launch the HTTP server in a blocking function.
  """
  pages['frontend'] = frontend
  
  _execute_routemap(_app, pages['frontend'])
  default_routes.init(_app, pages)
  
  pages['homepage'] = minify(os.path.join(frontend, homepage))
  pages['favicon']  = bottle.static_file(favicon, root=frontend)
  _app.run(host='0.0.0.0', port=port, server='paste', quiet=True)