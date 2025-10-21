import os

exec (open("../shared.conf.py").read())

# Theme options are theme-specific and customize the look and feel of a theme
# further.  For a list of options available for each theme, see the
# documentation.

html_context = {
  'display_github': True,
  'github_user': 'openaps',
  'github_repo': 'AndroidAPSdocs',
  'github_version': 'master/docs/EN/',
}

# The name of an image file (relative to this directory) to place at the top
# of the sidebar.
#html_logo = None
html_logo = '../androidaps-logo.png'

# The name of an image file (relative to this directory) to use as a favicon of
# the docs.  This file should be a Windows icon file (.ico) being 16x16 or 32x32
# pixels large.
#html_favicon = None
html_favicon = '../favicon.ico'

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['../_static']

# A list of paths that contain extra templates (or templates that overwrite builtin/theme-specific templates). Relative paths
# are taken as relative to the configuration directory.
templates_path = ['../_templates']

# Add any extra paths that contain custom files (such as robots.txt or
# .htaccess) here, relative to this directory. These files are copied
# directly to the root of the documentation.
html_extra_path = ["_html"]

language = "en"
myst_html_meta = {
  'title': 'AAPS Documentation',
  'subtitle': 'AndroidAPS Documentation',
  'short_title': 'AAPS Documentation',
  'description': 'Android APS (AAPS) is an open source app for people living with insulin-dependent diabetes. It is an artificial pancreas system (APS) which runs on Android smartphones.',
  'github': 'openaps/AndroidAPSdocs',
  'keywords': 'Android, DIY, APS, Insulin, CGM, Pump',
  'thumbnail': 'https://androidaps.readthedocs.io/en/latest/_static/androidaps-logo.png',
  'property=og:locale':  'en_US',
#<!-- Facebook Meta Tags -->
  'og:url': 'https://androidaps.readthedocs.io',
  'og:type': 'website',
  'og:title': 'Welcome to the AAPS Documentation — AndroidAPS Documentation',
  'og:description': 'Android APS (AAPS) is an open source app for people living with insulin-dependent diabetes. It is an artificial pancreas system (APS) which runs on Android smartphones.',
  'og:image': 'https://androidaps.readthedocs.io/en/latest/_static/androidaps-logo.png',
#<!-- Twitter Meta Tags -->
  'twitter:card':'summary_large_image',
  'twitter:domain': 'androidaps.readthedocs.io',
  'twitter:url': 'https://androidaps.readthedocs.io',
  'twitter:title': 'Welcome to the AAPS documentation — AndroidAPS Documentation',
  'twitter:description':'Android APS (AAPS) is an open source app for people living with insulin-dependent diabetes. It is an artificial pancreas system (APS) which runs on Android smartphones.',
  'twitter:image': 'https://androidaps.readthedocs.io/en/latest/_static/androidaps-logo.png',
}