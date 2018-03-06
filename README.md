![logo](https://github.com/Scya597/MERN-Boilerplate/blob/master/assets/images/boilerplate-logo.png)

<p align=center>
<a target="_blank" href="http://nodejs.org/download/" title="Node version"><img src="https://img.shields.io/badge/node.js-%3E=_6.0-green.svg"></a>
<a target="_blank" href="http://makeapullrequest.com" title="PRs Welcome"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
<a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
</p>  


> 🎉 ✨ The Boilerplate I created to build web app, with support to ReactJS, NodeJS, Express, Mongodb, mySQL, socket.io, webpack, hot-reload, etc.

## Table of Contents  
1. [Setup Boilerplate](#1-setup-boilerplate)
2. [Setup Mongodb](#2-setup-mongodb)
3. [Setup MySQL](#3-setup-mysql)
4. [Development and Production](#4-development-and-production)
5. [Supported Config](#5-supported-config)

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

Go to `/apiCongfig.js` and set the value `environment.mongodb` to `true`. 

### 2.4 Create New Model

Execute `cd \server\api\database\mongodb\models` and create models you need.


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

Go to `/apiCongfig.js` and set the value `environment.mysql` to `true`.


### 3.5 Modify knexfile.js

You can find `knexfile.js` in `\server\api\database\mysql` folder. Make sure you have right user, password, and your database's name in this file. Current name of the database is `testSQLdb`, you can change it to any other name you like.

### 3.6 Create your database

After setting up, you can create a database in Sequel Pro. Please make sure  your database's name is the same as it is in `knexfile.js`.

### 3.7 Create New Table

1. Execute `cd \server\api\database\mysql` (The location where you put your `knexfile.js`)
2. Run `knex migrate:make {table name}` in terminal.
2. Create your own schema in the migration file and save it. You can find the documentation in the [official site](http://knexjs.org/).
3. Run `knex migrate:latest`


## 4. Development and Production

### 4.1 Run the project in Development mode

In development mode, if you modify frontend pages and save it, the project will automatically update your changes to your port without rebuilding whole project, which makes develop faster.

```
npm run dev
```

### 4.2 Run the project in Production mode

In production mode, the project will be optimized, which makes it lighter and faster.

```
npm run build
npm start
```