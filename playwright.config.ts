import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: false,
  workers: 1,
  reporter: [['html'], ['list']],
  use: {
    baseURL: 'https://angular-dashboard-lime.vercel.app/',
    trace: 'on-first-retry',
    headless: false,
  },
  projects: [
    // --- CHROMIUM (Cubre Chrome y Edge) ---
    { name: 'Chromium Desktop', use: { ...devices['Desktop Chrome'], browserName: 'chromium' } },
    { name: 'Chromium Tablet', use: { ...devices['iPad Pro 11'], browserName: 'chromium' } },
    { name: 'Chromium Mobile', use: { ...devices['Pixel 5'], browserName: 'chromium' } },

    // --- FIREFOX ---
    { name: 'Firefox Desktop', use: { ...devices['Desktop Firefox'], browserName: 'firefox' } },
    { name: 'Firefox Tablet', use: { ...devices['Galaxy Tab S4'], browserName: 'firefox' } },
    { name: 'Firefox Mobile', use: { ...devices['Pixel 5'], browserName: 'firefox' } },

    // --- WEBKIT (Safari Engine) ---
    { name: 'WebKit Desktop', use: { ...devices['Desktop Safari'], browserName: 'webkit' } },
    { name: 'WebKit Tablet', use: { ...devices['iPad Pro 11'], browserName: 'webkit' } },
    { name: 'WebKit Mobile', use: { ...devices['iPhone 13'], browserName: 'webkit' } },
  ],
});