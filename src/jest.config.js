const esModules = ['ngx-simple-crpt', '@ng-idle/core'].join('|');

module.exports = {
    globals: {
        'ts-jest': {
            'allowSyntheticDefaultImports': true,
            'tsConfig': 'src/tsconfig.spec.json',
        }
    },

    transformIgnorePatterns: [`<rootDir>/node_modules/(?!${esModules})`],
    testPathIgnorePatterns: [
        '<rootDir>/dist',
    ],
    'transform': {
        '^.+\\.js$': 'babel-jest'
    },
    verbose: true,
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage/',
    coverageThreshold: {
        'global': {
            'branches': 65,
            'functions': 80,
            'lines': 80,
            'statements': 0
        }
    },
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
    ],
    collectCoverageFrom: [
        '**/app/**/*.ts',
        '!**/*.module.ts*',
    ]
};
