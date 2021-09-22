module.exports = {
    presets: [
      ['next/babel'],
    ],
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          style: true,
        },
      ],
      ["babel-plugin-styled-components"],
      [
        "formatjs",
        {
          "idInterpolationPattern": "[sha512:contenthash:base64:6]",
          "ast": true
        }
      ]
    ]
  };