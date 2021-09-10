# OnlineSchoolEveryone
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Structure
This folder is [mono repository Angular](https://angular.io/guide/file-structure#multiple-projects).

/projects - all projects

### Applications
/projects/school - application school constructor
/projects/landing - landing school constructor
/projects/doc - documentation for all application and libs repository

### Library
/projects/ui-lib - library customs components for all projects

## Start
- install dependecies `npm install`
- start project see package json, for example `npm start` for run main app
- all applications usage ui-lib library. For correct works development use - `watch:ui-lib-all`

## Theming
- add css file(file name - new theme name) with css variables to /projects/ui-lib/lib/assets/themes
- add new theme name to Themes enum(/projects/ui-lib/lib/models/theme.model.ts)
- `npm run copy-themes` for share new theme to all projects
