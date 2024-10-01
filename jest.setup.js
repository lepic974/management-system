import '@testing-library/jest-dom/extend-expect';
import { config } from 'dotenv';
import testEnvironment from 'jest-environment-jsdom';

config({ path: ".env.test" })

export default testEnvironment
