# MERN Boilerplate &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


## 0. Table of Contents  
- [Development](#1-development)
- [Production](#2-production)

## 1. Development

### 1.1 To build the production package and run the server

```
git clone https://github.com/Scya597/MERN-Boilerplate.git
npm install
```

### 1.2 To install mongodb

```
brew install mongo
```

### 1.3 Initial config of mongodb

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

### 1.4 To run the database

```
mongod
```

If you don't want to run mongod everytime you need, the following command will automatically start your database while the computer is running:

```
brew services start mongo
```

### 1.5 To develop the project

```
npm run dev
```

## 2. Production

```
npm run prod
npm start
```