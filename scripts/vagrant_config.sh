#!/bin/bash

# install docker with convenience script
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# add the vagrant user to the docker group
groupadd docker 
usermod -aG docker vagrant
newgrp docker 

# install docker-compose
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
