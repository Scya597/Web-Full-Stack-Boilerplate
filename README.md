![logo](https://github.com/Scya597/MERN-Boilerplate/blob/master/assets/images/boilerplate-logo.png)

<p align=center>
<a target="_blank" href="http://nodejs.org/download/" title="Node version"><img src="https://img.shields.io/badge/node.js-%3E=_6.0-green.svg"></a>
<a target="_blank" href="http://makeapullrequest.com" title="PRs Welcome"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
<a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
</p>  


> 🎉 ✨ The Boilerplate I created to build web app, with support to ReactJS, NodeJS, Express, MongoDb, mySQL, Socket.io, webpack, hot-reload, etc.

## Table of Contents  
1. [Setup Boilerplate](#1-setup-boilerplate)
2. [Setup MongoDb](#2-setup-mongodb)
3. [Setup MySQL](#3-setup-mysql)
4. [Setup Socket.io](#4-setup-socket.io)
5. [Development and Production](#5-development-and-production)
6. [Deploy in Google Compute Engine](#6-deploy-in-google-compute-engine)


## 1. Setup Boilerplate
```
git clone https://github.com/Scya597/Web-Full-Stack-Boilerplate.git
npm install
```

## 2. Setup MongoDB

### 2.1 Install and start MongoDB

```
brew update
brew install mongo
mongod
```

If you don't want to run `mongod` everytime you want to start, executing following command will automatically start your Mongo Database while the computer is running:

```
brew services start mongo
```


### 2.2 Init config of MongoDB

Create database directory.

```
sudo mkdir -p /data/db
```

Find your username.

```
whoami
```

Take the ownership of `/data/db`.

```
// assume your username is Samuel
sudo chown -Rv Samuel /data/db
```

### 2.3 Connect your server to MongoDB

Go to `/config-api.js` and set the value `environment.mongodb` to `true`. 

### 2.4 Create New Model

Execute `cd /server/api/database/mongodb/models` and create models you need.

### 2.5 Develop MongoDB API

1. Modify `/server/api/controllers/controller-mongo.js` to implement API functions.
2. Modify `/server/api/routes.js` and `/config-api.js` to implement API routings.

## 3. Setup MySQL

I'll only show how to setup MySQL in Mac, for Windows users please go to [MySQL official site](https://dev.mysql.com/downloads/windows/installer/5.7.html) and follow their instructions.  

### 3.1 Install and start MySQL

```
brew update
brew install mysql
brew services start mysql
```

### 3.2 Setup password

Following command set password to `password`.

```
mysqladmin -u root password 'password'
```

### 3.3 Install Sequel Pro

Install Sequel Pro from this [site](https://www.sequelpro.com/). It's not needed, but useful for development.

### 3.4 Connect your server to MySQL

Go to `/config-api.js` and set the value `environment.mysql` to `true`.


### 3.5 Modify knexfile.js

You can find `knexfile.js` in `/server/api/database/mysql` folder. Make sure you have right user, password, and your database's name in this file. Current name of the database is `testSQLdb`, you can change it to any other name you like.

### 3.6 Create your database

After setting up, you can create a database in Sequel Pro. Please make sure  your database's name is the same as it is in `knexfile.js`.

### 3.7 Create New Table

1. Execute `cd /server/api/database/mysql` (The location where you put your `knexfile.js`)
2. Run `knex migrate:make {table name}` in terminal.
3. Create your own schema in the migration file and save it. You can find the documentation in the [official site](http://knexjs.org/).
4. Run `knex migrate:latest`

### 3.8 Develop MySQL API

1. Write new functions at `/server/api/database/mysql/store.js`
2. Modify `/server/api/controllers/controller-sql.js` to implement API functionss.
3. Modify `/server/api/routes.js` and `/config-api.js` to implement API routings.

## 4. Setup Socket.io

### 4.1 Connect your server to Socket.io

Go to `/config-api.js` and set the value `environment.socketio` to `true`.

### 4.2 Develop Socket.io tasks

1. Add new socket tasks in `/config-io.js`.
2. Modify `/server/io-setting.js` and `/client/components/PageIO.js` to implement socket.io's tasks.


## 5. Development and Production

### 5.1 Run the project in Development mode

In development mode, if you modify frontend pages and save it, the project will automatically update your changes to your port without rebuilding whole project, which makes develop faster.

```
npm run dev
```

### 5.2 Run the project in Production mode

In production mode, the project will be optimized, which makes it lighter and faster.

```
npm run build
npm start
```


## 6 Deploy in Google Compute Engine


### 6.1 SSL connect to your VM 

```
gcloud compute --project "project-name" ssh --zone "your-zone" "VM-name"
```

### 6.2 Install everything you need

```
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install git
sudo apt-get install nodejs
sudo apt-get install nginx
sudo apt-get install tmux
```

### 6.3 Clone your project

```
git clone https://github.com/Scya597/Web-Full-Stack-Boilerplate.git
npm install
```

### 6.4 Setup NGINX

1. Replace `default` file in VM's `/etc/nginx/sites-available/default` with our `default` file in our repo's `/deploy`

2. Excute `sudo service nginx reload` and `sudo service nginx restart` to connect the port you've setup in `/server/config.js` into your ip address.

3. If you have use Socket.io in your application, go to `/config-io.js` and set the value of `setting.endpoint` to your new ip address.

### 6.5 Run your project with tmux

1. Execute `tmux` to create new session, and `tmux attach -t 0` to attach session 0.

2. Excute `npm run build` and `npm start`
