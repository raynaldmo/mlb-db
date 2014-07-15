Design Features
================

See what the app looks like [mlb-db]

Front End
------------
1. SPA architecture based on the wondeful book [Single Page Web Applications]
2. SPA Framework (each spa.xxx.js file forms a seperate namespace)
 - Single page design
 - Bootstrap (CSS framework)
 - jQuery, jquery.uriAnchor (history management)
 - jqpagination used as 'feature'
3. Dynamic (AJAX) loading of Handlebars template
4. AJAX loading of DB queries
5. Use of jQuery Event Delegation (for table td cell clicks)

Back End
----------

1. Node 0.10.26/Express 3.x
2. MongoDB 2.6.x/mongodb Native driver
3. [Sean Latham MLB database]
4. HTTP Caching

Cloud Hosting
--------------
Heroku 

Re-factor
----------
1. Use server side templating ?

#### Feel free to contribute to this project!



[Single Page Web Applications]:http://www.amazon.com/Single-Page-Applications-end---end/dp/1617290750/ref=sr_1_1?s=books&ie=UTF8&qid=1405382977&sr=1-1&keywords=single+page+web+applications

[Sean Latham MLB database]:http://www.seanlahman.com/baseball-archive/statistics/

[mlb-db]:http://mlb-db.herokuapp.com/