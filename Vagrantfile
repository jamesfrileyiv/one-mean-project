# -*- mode: ruby -*-
# vi: set ft=ruby :

# This will be a docker host for setting up dockerization of web-app
# initially, it will be used for running a MongoDB container 

Vagrant.configure("2") do |config|
  config.vm.define "docker" do |docker|
    docker.vm.box = "geerlingguy/ubuntu2004"
    docker.vm.hostname = "docker"
    docker.vm.network "private_network", ip: "10.1.0.1"
    docker.vm.network "forwarded_port", guest: 27017, host: 27017   # MongoDB 
    docker.vm.provision "shell", path: "scripts/vagrant_config.sh"
  end
end
