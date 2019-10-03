# Hello Docker

Simple way to test if a student's local Docker setup is working correctly.

It's a docker container you can have them quickly launch and verify their
local laptops can access PyPI and NPM.

## Screenshot

![screen of hello-docker](https://raw.githubusercontent.com/frankwiles/hello-docker/master/images/screenshot.png)

## Usage

The simplest way to use this is to have the user grab the docker-compose file
in this repository and run `docker-compose up` and then browse to `http://localhost/`.

Or you can run it more manually with:

```shell
$ docker run -p "80:80" frankwiles/hello-docker:latest
```

And then browse to `http://localhost/`. To use a different port just change the
first "80" to whichever port you want to use.

## Local Development

You will need to install the Javascript dependencies with:

```shell
$ npm install
```

You can then start the local development server with:

```shell
$ npm run dev
```

Then you need to build the Tailwind CSS with:

```shell
$ npm run build:css
```
