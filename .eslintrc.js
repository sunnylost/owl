module.exports = {
    extends      : 'eslint:recommended',
    plugins      : [
        'react'
    ],
    parserOptions: {
        ecmaVersion : 2017,
        sourceType  : 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules        : {
        'indent'               : [ 'error', 4 ],
        'object-curly-spacing' : [ 'error', 'always' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'react/jsx-uses-vars'  : 2
    }
}
