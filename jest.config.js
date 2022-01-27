/** @type {import('ts-jest').InitialOptionsTsJest} */
const config = {
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    verbose: true,
    roots: ['test'],
};

export default config;
