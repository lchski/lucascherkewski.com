#!/bin/zsh
ARCHIVE_NAME="lucascherkewski.com.tar.gz"
DEPLOY_PATH="${LCCOM_SERVER_PATH}/ansible/resources/"

bundle exec jekyll b
cd _site
tar -czf $ARCHIVE_NAME *
rm $DEPLOY_PATH$ARCHIVE_NAME
mv lucascherkewski.com.tar.gz $DEPLOY_PATH
cd $LCCOM_SERVER_PATH
debops --tags role::resources:archives

