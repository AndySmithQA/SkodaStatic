# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploying on IONOS Deploy Now

This project has been converted to a fully static build (all data embedded in `src/data/months.js`). No external API or json-server is required.

### Build Settings
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`
- Node Version: See `.nvmrc` (currently `20`).

### Steps
1. Commit and push changes to GitHub.
2. In IONOS Deploy Now, create a new project and connect this repository.
3. Use the build settings above. Detect automatically or enter manually if prompted.
4. Deploy. The static assets in `dist` will be served.

### Environment Variables
None required. Remove any previous references to an API base URL; all components read static data.

### Maintenance
To update months data, edit `src/data/months.js` and rebuild/deploy. There is intentionally no runtime update UI.

### Optional Cleanup
You can delete any remaining unused files related to dynamic fetching (e.g. `useFetch.jsx`, old `data/db.json`).

---
Static snapshot ready for deployment.
