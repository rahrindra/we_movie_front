# We Moovie front

## Install

This project used [Vite](https://vitejs.dev/guide/) and was created from the `react-ts` template with Vite CLI.

```
npm install
```

## Run

Launch the app with:

```
npm run dev
```

## Build

```
npm run build
```

When running this command, the webapp will be built in the `dist` directory.
Vite use [Rollup](https://rollupjs.org/guide/en/) under the hood to build for production. [See documentation for more details.](https://vitejs.dev/guide/build.html#building-for-production)

### utilisation docker 
```
docker run -p 3000:80 rahrindra/we-movie-front:test
```