http://localhost:3000/ the app will load the list of items from /api1
http://localhost:3000/?modules=newlist will add a second grid from /api2 below the first one. Styling should be different.
http://localhost:3000/?modules=alternativemenu this will change the menu. The top menu will be replaced by a sidebar menu hidden behind a hamburger button.
http://localhost:3000/?modules=newlist,alternativemenu will enable both changes. Note the order in which you receive the params can pe reversed.
