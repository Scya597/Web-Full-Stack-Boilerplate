![logo](https://github.com/Scya597/MERN-Boilerplate/blob/master/assets/images/boilerplate-image.png)

# MERN Boilerplate &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
> 🎉 ✨ The Boilerplate I create to build app with ReactJS + NodeJS + Express + Mongodb + webpack 

- [blog](https://scyablog.blogspot.tw/2017/07/mern.html)

## 0. Table of Contents  
- [Setup Boilerplate](#1-setup-boilerplate)
- [Setup Mongodb](#2-setup-mongodb)
- [Development and Production](#3-development-and-production)

## 1. Setup Boilerplate
```
git clone https://github.com/Scya597/MERN-Boilerplate.git
npm install
```

## 2. Setup Mongodb

### 2.1 To install mongodb

```
brew install mongo
```

### 2.2 Initial config of mongodb

Create database directory

```
sudo mkdir -p /data/db
```

Find your username

```
whoami
```

Taking ownership to /data/db

```
// assume your username is John
sudo chown -Rv John /data/db
```

### 2.3 To run the database

```
mongod
```

If you don't want to run mongod everytime you need, the following command will automatically start your database while the computer is running:

```
brew services start mongo
```

## 3. Development and Production

### 3.1 To develop the project

```
npm run dev
```

### 3.2 Build production bundle and run the server

```
npm run prod
npm start
```