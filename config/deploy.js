module.exports = function(deployTarget) {

  var ENV = {
    build: {
      environment: deployTarget
    },
    'revision-data': {
      type: 'git-commit'
    },
    'ssh-index': {
      remoteDir: "/var/www/html/myapp",
      username: "www",
      host: "192.168.88.187",
      privateKeyFile: "/Users/beukema/.ssh/id_rsa",
      allowOverwrite: true
    },
    rsync2: {
      username: "www",
      host: "192.168.88.187",
      releasesPath: "/home/www/releases",
    },

    //'with-rsync': {
      //username: "www",
      //host: "192.168.88.187",
      //privateKeyPath: '~/.ssh/id_rsa', // optional
      //passphrase: "ftmhbn8e",
      //port: 22, // optional
      //root: "/var/www/html/myapp"
    //}



  };

  return ENV;

};
