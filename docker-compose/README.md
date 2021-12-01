**mongo-compose.yml**

To use the `mongo-compose.yml` file to launch a MongoDB container, you must supply environment variables. The easiest way to do so is with a file named `.env` in the same directory as the `mongo-compose.yml` file.

If using an .env file, variables must be specified in the from `VAR=var`. 
Required variables are:

MONGO_INITDB_ROOT_USERNAME=
MONGO_INITDB_ROOT_PASSWORD=

To run the MongoDB container, once the vagrant box is up, from the directory containing the Vagrantfile, run the command:

`vagrant ssh -c "docker-compose -f /vagrant/docker-compose/mongo-compose.yml up -d"`

This will start a detached container for MongoDB but also won't keep your shell in the vagrant box.