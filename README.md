# Website

## todo
- [x] add edit on github
- [x] update taglines and footers
- [x] switch out github repo
- [ ] switch out algolia key

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Create algolia search index
`docker run -it --env-file=.env -e "CONFIG=$(cat algolia-config.json | jq -r tostring)" algolia/docsearch-scraper`
