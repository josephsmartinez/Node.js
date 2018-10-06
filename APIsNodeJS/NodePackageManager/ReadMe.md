# Node Package Manager

Switching betweem npm versions: 
- npm install global version number  
`npm i -g npm@5.5.1`

Create JSON file before creating a project  
`npm init`

Installing packages with npm
`npm i [option]`

### How node resolve modules imports, it looks at:
1. Core module
2. File or folder
3. node_modules

### Restoring Dependencies from the project JSON file
- If you delete the `node_modules` directory you can revert the changes by running the following:  
`npm i`
- Make sure that the `node_modules` directory is exculed from the Source Control Repository SCR (use the .gitignore file)

**Major.Minor.Patch**  
```
"mongoose": "^5.3.1" -> Update the Minor & Patch versions only 
"mongoose": "~5.3.1",
"mongoose": "5.x",
"mongoose": "5.3.1"  -> Keep the vesion as is
```
**The carrot arrow is for the minmum package version**  

### Listing dependencies (like using tree command)
`npm list`  
`npm list --depth=0`