module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
          @import "@/assets/scss/main.scss";
        `
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/seo-website/'
        : '/'
};