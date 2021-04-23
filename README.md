# Aplicación de clima con React

## Scripts necesarios para ejecutarlo
### `git clone https://github.com/SquatCub/weather-test.git`
### `cd weather-test`
### `npm install`

### Si no se tiene instalado axios se debe ejecutar:
### `npm install --save axios`

### Para ejecutar la app
### `npm start`
 

## Features
- Úso de la API OpenWeatherMap
- Página responsiva
- Se muestra pantalla de carga al iniciar
- Pide permisos de ubicación (Probado en Chrome)
- Muestra el clima de la ubicación actual si se le otorgan permisos
- Si no se otorgan los permisos muestra un mensaje con una imagen

- Se puede buscar cualquier ciudad y si no se encuentra deja un mensaje, se mantiene la anterior ciudad mostrada
- Si se deja en blanco y se envía el formulario, se mostrará el clima de la posicion actual, si no se tienen permisos se mostrará una mensaje al usuario

- Imagenes alusivas al clima de la ciudad y cada pronóstico de la misma
- Colores alusivos al clima y hora (dia o noche) tanto como en el clima actual como en los pronósticos
- Uso de Bootstrap y CSS custom
- UI y UX

### Puede jugar con los permisos de ubicacion de Chrome para ver como se comporta la app
### -   -   -   -   -   -   -   -   -   -   -   -   ##
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
