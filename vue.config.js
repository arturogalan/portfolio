const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
module.exports = {
  configureWebpack: {
    plugins: [
      new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`
                                                     __     
          .-----.-----.----.-----.-----.-----.---.-.|  |    
          |  _  |  -__|   _|__ --|  _  |     |  _  ||  |    
          |   __|_____|__| |_____|_____|__|__|___._||__|    
          |__|                                              
                             __    ___         __ __        
          .-----.-----.----.|  |_.'  _|.-----.|  |__|.-----.
          |  _  |  _  |   _||   _|   _||  _  ||  |  ||  _  |
          |   __|_____|__|  |____|__|  |_____||__|__||_____|
          |__|                                              
           arturo.galan@gmail.com
          `],
          notes: [],
        },
      }),
    ],
  },
  css: {
    loaderOptions: {
      scss: {
        // options here will be passed to css-loader
        prependData: `@import "@/scss/_variables.scss";`,
      },
    },
  },
};
