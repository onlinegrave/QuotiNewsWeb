import {transform} from '@formatjs/ts-transformer'

module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
    ],
    "plugins": [
        "formatjs",
        {
            "idInterpolationPattern": "[sha512:contenthash:base64:6]",
            "ast": true
        }
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            getCustomTransformers() {
                                return {
                                    before: [
                                        transform({
                                            overrideIdFn: '[sha512:contenthash:base64:6]',
                                        }),
                                    ],
                                }
                            },
                        },
                    },
                ],
            },
        ],
    },
};
