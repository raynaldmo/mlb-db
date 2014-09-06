
##mlb-db
mblb-db is a web app for Major League Baseball (MLB) team and player statistics.  
Uses [Sean Lahman Baseball Database]. The latest version of this database archives stats from 1871 - 2013.

* Built with Bootstrap 3/Node.js/MongoDB

* See what the app looks like [mlb-db]

##Design Architecture


###Front End
1. UI - Bootstrap 3

2. Namespacing  
Single global: spa

3. Modules
* spa.shell.js - controller/router , initializes all modules
* spa.player.js - model and view for player list, player profiles and player stats
* spa.team.js - model and view for team list, team profiles and team stats  
* spa.autoc_search.js - model and view for auto-complete search (for desktop viewport)
* spa.search.js - model and view for search feature (phone & tablet viewport)
* spa.pagination.js - pagination for player and team list views

4. MVC architecture  
This design doesn't implement separate model/view functionality but does feature  
a controller/router module.

* Controller (spa.shell.js)  
Initializes all modules
Handles URI hashchange events triggered by modules to trigger DB requests  
All views (player list, team list etc.) are bookmarkable.


* Templates  
Handlebars.js is used for templating. Template .html file are in separate files  
loaded at startup, compiled and stored in module object.


Browser caching is used

Features:  
* auto-complete search (cobbled together)
* pagination

1. Backend  
Import database to mongo

Data crunching is done on server  
For more flexibility could be done client side
Purposely done on server to use mongoDB aggr 


[Single Page Web Applications]:http://www.amazon.com/Single-Page-Applications-end---end/dp/1617290750/ref=sr_1_1?s=books&ie=UTF8&qid=1405382977&sr=1-1&keywords=single+page+web+applications

[Sean Lahman Baseball Database]:http://www.seanlahman.com/baseball-archive/statistics/

[mlb-db]:http://mlb-db.herokuapp.com/

[Heroku]:https://www.heroku.com/

[mongolab]:https://mongolab.com/welcome/

