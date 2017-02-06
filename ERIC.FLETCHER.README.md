# BasicAngular

## Setup

Prerequisites: Node6.9+ with npm ***---Done---***

1.  Fork the repository. ***---Done---***
2.  Clone locally. ***---Done---***
3.  Commit any changes to your own fork. ***---Done---***
4.  Create a pull request with your changes to be reviewed.***---Done---***

Go to the directory with the project in it and type: npm install ***---Done---***

## Directions

**Create Component**
1.	Create a component to display information of the BikeInfo type.
2.	Hook the provided BasicService up to your component to display some bike info.



***---
All of my files are bike-app.component...
They were all created with the ng generate component command line. 
---***



**Create Service**
1.	Create a new service to fetch live data from https://feeds.citibikenyc.com/stations/stations.json using Angular’s http service.
2.	Hook the new service up to a second copy of your component.



***---
I was unable to get my project to work, there was many variations and I'm not sure what I'm missing. I belive I have just over thought it
and now am just spining in circles. But I would like to state that I understand the pathway of information.
The main info is located in app/data.ts as a raw file.
app/basic.services.ts works through the app/data.ts file using the bike-info.ts file as it's template. 
app/bike-info.ts uses the app/station-bean-enty.ts file as template to organize each "station" and the statistics for said station

To create the live data feed, I need to replace the data.ts file in basic.services.ts with the data being pulled from the feed link 
    via the Angular service. That seems like a very simple task, as basic.services.ts will continue to loop and reload itself with 
    new information that is fed to it. 
---***








**Bonus pts**: wrap the whole angular app into an electron app http://electron.atom.io/


## Angular cli stuff
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.
## Further help
To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
