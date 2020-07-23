# 

## Requirements

* Docker
* Docker desktop dashboard or VS Code Docker plugin (recommended)

## Getting started

`git clone ...`

Add a .env file on project root folder with the following variables:

```shell
#  Server Port
APP_SERVER_PORT=5000

# Client Port
NEXT_APP_PORT=3000
```

Then:

```shell
$ make build
$ make up
```

This commands will download the images listed on the [docker-compose.yml](./docker-compose.yml) configuration and will install the containers requirements. The service will be available on localhost with the port defined on `APP_SERVER_PORT` or the 5000 default setting.


