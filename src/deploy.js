#!/usr/bin/env node

const basePath = './dist';
const destinationPath = '/www/zerowasteuppsala.org/map/';

var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

const config = {
  host: process.env.FTP_HOST,
  password: process.env.FTP_PASSWORD,
  user: process.env.FTP_USER,
  port:21,
  localRoot: './dist',
  remoteRoot: '.',
  include: ['*', '**/*'],
  deleteRemote: false,
  forcePasv: true
};

// use with promises
ftpDeploy.deploy(config)
    .then(res => console.log('finished:', res))
    .catch(err => console.log(err))

