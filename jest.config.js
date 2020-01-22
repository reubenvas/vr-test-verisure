module.exports = {
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
    ],
    moduleNameMapper: {
        '\\.(s(a|c)ss|css|jpg|png)$': '<rootDir>/mocks/mock.js',
    },
};
