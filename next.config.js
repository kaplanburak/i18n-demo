const withAntdLess = require("next-plugin-antd-less");

module.exports = {
    ...withAntdLess({
        lessVarsFilePath: "./src/styles/variables.less",
        modifyVars: {},
        webpack(config, options) {
            return config;
        },
    }),
    i18n: {
        locales: ["en", "tr"],
        defaultLocale: "en",
    },
};
