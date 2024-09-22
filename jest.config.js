
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

// Ajouter les configurations Jest personnalisées ici
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Gestion des imports de styles CSS/SCSS avec un mock
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)