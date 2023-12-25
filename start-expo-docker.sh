#!/bin/bash

# Find the IP address of the host machine
HOST_IP=$(ip addr show | grep inet | grep -v 127.0.0.1 | awk '{print $2}' | cut -d'/' -f1)

# Start Expo with the host IP address
EXPO_DEVTOOLS_LISTEN_ADDRESS=$HOST_IP npx expo start --tunnel
