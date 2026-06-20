import { test } from '../fixtures/baseFixture';
import { expect } from '@playwright/test';

test.describe('Login Suite', () => {
  test('Login Test', async ({ loginPage, page, takeScreenshot }) => {
    // 1. Navegar
    await loginPage.navigate('/login');
    await takeScreenshot('login-loaded');
    
    // 2. Login
    await loginPage.login('zoaib@zoaibkhan.com', 'testing123');
  
    
    // 4. Verificación
    await expect(page).toHaveURL(/.*dashboard/);
  });
});