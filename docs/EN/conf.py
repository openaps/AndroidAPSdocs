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
