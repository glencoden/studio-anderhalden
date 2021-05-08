# Studio Anderhalden

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project builds a web app that displays content from the Contentful Delivery API https://www.contentful.com/developers/docs/references/content-delivery-api/. <br/>
See https://www.contentful.com/help for further help on Contentful.

### work flow

Add ```"homepage": "https://<my-github-name>.github.io/<my-repo-name>"``` to package.json and run ```yarn build``` to create a prod build and ```yarn pre-deploy``` to copy it into docs/ for dev deploy on github pages.<br/>
Don't forget to remove the homepage entry for prod deploy.

Work on global styles in ```src/index.css```.<br/>
Commonly used css media queries in style modules are ```only screen and (min-width: 620px) and (orientation: portrait)``` and ```only screen and (min-width: 820px) and (orientation: landscape)```.

### project structure
Infrastructure ```src/lib```<br/>
Adapter ```src/store```<br/>
UI / UX ```src/components```
