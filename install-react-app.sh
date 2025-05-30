#!/bin/bash
#don't forget to make this script file executable by the comand
#sudo chmod u+x ./install-react-app.sh

#now yo can execute by typing ./install-react-app.sh

#checks if a parameter was given
if [ $# -ne 1 ]; then
    echo 'need to give an app name in one word. For example: my-app'
    exit 0
fi

#creates a react app named calculator in current directory. Simply change the name as you please
npx create-react-app $1
cd $1


#install react-router and react-bootstrap
npm install react-router
npm install react-bootstrap bootstrap
npm install react-bootstrap-icons

npm start




#for curl in windows powershell see
#https://www.delftstack.com/howto/powershell/run-curl-command-via-powershell/