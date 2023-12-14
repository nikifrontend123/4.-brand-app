const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Brand App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'GenerateSW',
    iconPaths: {
      favicon32: 'images/logo.png',
      favicon16: 'images/logo.png',
      appleTouchIcon: 'images/logo.png',
      maskIcon: 'images/logo.png',
      msTileImage: 'images/logo.png',
    },
    // manifestOptions: {
    //   name: "Brand App",
    //   short_name: "Brand App",
    //   description: "Brand App",
    //   start_url: "./",
    //   display: "standalone",
    //   background_color: "#ffffff",
    //   theme_color: "#000000",
    //   orientation: "portrait",
    //   "icons": [
    //     {
    //       "src": "images/logo.png",
    //       "sizes": "72x72",
    //       "type": "image/png"
    //     },
    //     {
    //       "src": "images/logo.png",
    //       "sizes": "96x96",
    //       "type": "image/png"
    //     } 
    //   ]
    //   // Add more options as needed
    // },
  }

});
