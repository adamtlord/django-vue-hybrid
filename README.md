# django-vue-hybrid

This repo is intended as a proof-of-concept/base project for a hybrid Django/Vue app. This approach is [fairly opinionated](https://gist.github.com/Raisins/d3b437a76f84829f1582e7f806f044d5) and based on experimentation by [raisins](https://github.com/Raisins).

Aside from the Vue integration, this is a standard dockerized Django 3/PostgreSQL project.

The `common` app within `django_web` consists of one TemplateView with some extra context for demonstration purposes.

Vue is managed by vue-cli, which is installed globally within the container.

Node modules and commands are managed by Yarn.

Django and Vue are linked by `django-webpack-loader` and `webpack-bundle-tracker`. See the `common/index.html` template for use of the `{% render_bundle %}` tag.

This project also uses [tailwindcss](https://tailwindcss.com/docs) as a [PostCSS](https://postcss.org/) plugin, along with plugins for css imports and nested rules. Tailwind is managed through the postcss-cli.

The `vue.config.js` file does several important things:
- configures devServer to use the port defined in `docker-compose.yml`
- handles publicPath/outputDir options for serve/build on dev/production
- alters the Webpack configuration to _not_ generate html files or handle preloading or prefetching output files, as these are handled by Django and webpack-loader
- defines how to chunk files

## Project Setup

- Clone project
- `cp django_web/.env_example django_web/.env`
- `docker-compose up`
- ssh into `djangovue_web` container
- `yarn serve`

## Development
Check out scripts defined in `package.json`

- `yarn serve` will compile tailwindcss and start both Django's dev server and vue-cli's dev server, configured for hot reloading
- Python packages are managed with [Poetry](https://python-poetry.org/). To use the Poetry cli within the container, you must first `source $HOME/.poetry/env`.
