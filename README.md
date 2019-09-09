# Project Name

little full stack app to search github and choose favorites

## Installation

this repository consists of 2 folders:
1) FrontEnd_mini => the angular project without any modules, they need to be install with "npm install" within the folder.
2) RepoSearchEngine => C#.NET project, just open in your IDE (or regular serve like IIS) and run it.
                 
## Usage
the front and back apps configured to work with those settings:
1) front-end - run at "localhost:4200"
2) back-end - run at "localhost:36472"

if in your environment you are using different settings please consider those changes:
1) for FRONT-END: change the "environment.ts" file (in the angular project)
   to your environment settings, here are the defaults:
  host_server : "localhost:36472", //host : port
  proto : "http" // http | https

2) for BACK-END, you may encounter CORS blockings, please consider change cors attribute (resides above values controller):
[EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*", SupportsCredentials = true)]

and that's it =]

## History

always replicate itself... =]

## Credits

Moshe Netanel Zackay 

