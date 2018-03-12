# README

This README would normally document whatever steps are necessary to get the
application up and running.



1. You may or may not need to install rails and bundle manually in vagrant.
Take a look at VagrantFile to see how to do that if things aren't working 
correctly

2. Vuex, vuetify, and vue router are already added

3. type "foreman start" after sshing into vagrant to run the project

4. If you need to install yarn, enter the following in the command line:

    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt-get update && sudo apt-get install yarn

5. If you get the following message when running vagrant up:

    The VirtualBox VM was created with a user that doesn't match the
    current user running Vagrant. VirtualBox requires that the same user
    be used to manage the VM that was created. Please re-run Vagrant with
    that user. This is not a Vagrant issue.
    
    The UID used to create the VM was: 1000
    
    Your UID is: 0

    
- go to  cd .vagrant/machines/default/virtualbox
- open and edit creator_uid so that it matches your UID