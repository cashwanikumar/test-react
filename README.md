App Access
============

URL:  https://aidash-ashwani.herokuapp.com/index.html

Code structure
==============
    Components
        - Common (This contain all the generic component)
        - App   (Starting component which define template)
        - Dashboard (UI of dashboard page)
    Container
        - App   (It will be strating conatiner which will manage authentication or other global setting)
        - Dasboard  (Redux state/action will be define here)
    utils
        - service   (All API realted file should get here)
        - helper    (generic function throught the app)


NOTE:
======
instead of data.json, mock API is being created with random time delay. Check utils/service/widgetsService

Step To run Project
==============

Using yarn
-----------
1. go to base folder
2. yarn install
3. yarn start

using npm
-----------
1. go to base folder
2. npm install
3. npm start

