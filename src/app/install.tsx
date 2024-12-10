#!/bin/bash

# Set Alt+Q to switch input sources
gsettings set org.gnome.desktop.wm.keybindings switch-input-source "['<alt>q']"
gsettings set org.gnome.desktop.wm.keybindings switch-input-source-backward "['<shift><alt>q']"

echo "Input source switching shortcut set to Alt+Q"
