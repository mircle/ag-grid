(function (global) {
    // simplified version of Object.assign for es3
    function assign() {
        var result = {};
        for (var i = 0, len = arguments.length; i < len; i++) {
            var arg = arguments[i];
            for (var prop in arg) {
                result[prop] = arg[prop];
            }
        }
        return result;
    }

    System.config({
        transpiler: 'plugin-babel',
        defaultExtension: 'js',
        paths:
            assign(
                {
                    // paths serve as alias
                    "npm:": "https://cdn.jsdelivr.net/npm/",
                }, systemJsPaths),
        map: assign(
            {
                // babel transpiler
                'plugin-babel': 'npm:systemjs-plugin-babel@0.0.25/plugin-babel.js',
                'systemjs-babel-build': 'npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js',

                // css plugin
                css: boilerplatePath + "css.js",
                // css: 'npm:systemjs-plugin-css@0.1.37/css.js',

                // vuejs
                'vue': 'npm:vue@3.2.29/dist/vue.esm-browser.js',
                '@vue/reactivity': 'npm:@vue/reactivity@3.0.0/dist/reactivity.esm-browser.prod.js',

                // vue class component
                'vue-class-component': 'npm:vue-class-component@^8.0.0-beta.3/dist/vue-class-component.cjs.js',

                app: appLocation + 'app'
            },
            systemJsMap
        ), // systemJsMap comes from index.html

        packages: {
            'vue': {
                defaultExtension: 'js'
            },
            'vue-class-component': {
                defaultExtension: 'js'
            },
            'vue-property-decorator': {
                defaultExtension: 'js'
            },
            app: {
                defaultExtension: 'js'
            },
            'ag-grid-vue3': {
                main: './lib/AgGridVue.js',
                defaultExtension: 'js'
            },
            'ag-grid-community': {
                main: './dist/ag-grid-community.cjs.min.js',
                defaultExtension: 'js'
            },
            'ag-grid-enterprise': {
                main: './dist/ag-grid-enterprise.cjs.min.js',
                defaultExtension: 'js'
            },
            '@ag-grid-community/vue3': {
                main: './lib/AgGridVue.js',
                defaultExtension: 'js'
            }
        },
        meta: {
            '*.js': {
                babelOptions: {
                    stage1: true,
                    stage2: true,
                    es2015: true
                }
            },
            '*.css': { loader: 'css' }
        }
    });
})(this);
