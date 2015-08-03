
##mlb-db
mlb-db is a web app for accessing Major League Baseball (MLB) team and player profiles and statistics.  
Uses [Sean Lahman Baseball Database]. The latest version of this database has stats from 1871 - 2013.

* Built with Bootstrap 3/Node.js/MongoDB

* Design leveraged from architecture and components in [Single Page Web Applications]

* See what the app looks like [mlb-db]

##Design Architecture


###Front End
1. UI - Bootstrap 3

2. Namespacing - Single global: spa  

3. Modules
 * spa.shell.js - controller/router , initializes all modules
 * spa.player.js - model and view for player list, player profiles and player stats
 * spa.team.js - model and view for team list, team profiles and team stats  
 * spa.autoc_search.js - model and view for auto-complete search (for desktop)
 * spa.search.js - model and view for search feature (for phones & tablets)
 * spa.pagination.js - pagination for player and team list views 


Templates  
* Handlebars.js is used for templating. Templates are in separate files  
loaded at startup, compiled and stored and cached.

####MVC architecture  
 This design doesn't implement separate model/view functionality but does feature  
a controller/router module.(spa.shell.js)

* Initializes all modules
Handles URI hashchange events triggered by model/view modules to   
trigger  DB requests  

* All views (player list, team list etc.) are bookmarkable.


####Other Features:  
* auto-complete search
* pagination support using jquery.jqpagination jQuery plugin


###Back End

Node 0.10.x/Express 3.2.x
MongoDB 2.6.x/mongodb Native driver 1.3.x 
* mongoimport used to import csv database files to collections
* Uses mongodb aggregation framework for some queries (ex. player career stats)

### Performance Tuning
1. Indexes are created on several mongoDB collections (db-config.js)
2. Use res.setHeader('Cache-Control', 'public, max-age=xxxx');  
to cache static files and database responses.

###Cloud Hosting

[Heroku] & [mongolab]


[Single Page Web Applications]:http://www.amazon.com/Single-Page-Applications-end---end/dp/1617290750/ref=sr_1_1?s=books&ie=UTF8&qid=1405382977&sr=1-1&keywords=single+page+web+applications

[Sean Lahman Baseball Database]:http://www.seanlahman.com/baseball-archive/statistics/

[mlb-db]:http://mlb-db.herokuapp.com/

[Heroku]:https://www.heroku.com/

[mongolab]:https://mongolab.com/welcome/

