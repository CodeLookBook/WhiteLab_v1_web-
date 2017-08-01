const { mix } = require('laravel-mix');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

    //Web users app
mix .js('resources/assets/js/user-app/app.js', 'public/js')
    .sass('resources/assets/sass/user-app/app.scss', 'public/css')

    //Admin app
    .js('resources/assets/js/admin-app/admin.js', 'public/js')
    .sass('resources/assets/sass/admin-app/admin.sass', 'public/css')

    //Shared Parts
    .styles('resources/assets/css/normalize.css', 'public/css/normalize.css')
    .mix.browserSync({ proxy: 'www.whitelab_v1.dev' });