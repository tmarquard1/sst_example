FROM mcr.microsoft.com/devcontainers/javascript-node:18

# install aws with apt-get
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y upgrade

RUN apt-get install -y awscli
RUN apt-get install -y default-mysql-server
 # mysql --host=db --user=myuser --password=mypassword mydatabase 
 # pnpm sst dev