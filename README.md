### Storybook
##### Installation
```
npx create-react-app PROJECT_NAME
```
```
npx -p @storybook/cli sb init
```

##### Deployment (Github Pages)
###### Install GitHub pages for development
```
npm install gh-pages --save-dev
```
###### Add deployment script
In `package.json`:
```json
/* beginning of the package.json */
"homepage": "http://YOUR_GITHUB_USERNAME.github.io/REPO_NAME",

/* ... Rest of the package.json content*/

"scripts": {
    /* ... Other Scripts */
    "predeployStorybook": "npm run build-storybook",
    "deployStorybook": "gh-pages -d storybook-static"
},
```
###### Deploy
```
npm run deployStorybook
```
