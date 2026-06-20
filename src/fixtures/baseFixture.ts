import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
// Puedes importar más páginas aquí conforme crezcas:
// import { DashboardPage } from '../pages/DashboardPage';

type MyFixtures = {
  loginPage: LoginPage;
  takeScreenshot: (name: string) => Promise<void>;
  // dashboardPage: DashboardPage; // Ejemplo de escalabilidad
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  takeScreenshot: async ({ page }, use) => {
    await use(async (name: string) => {
      await page.waitForLoadState('networkidle'); 
      
      // 2. Opcional: Pequeña pausa si hay animaciones (ej. fade-in)
      // await page.waitForTimeout(500); 

      const buffer = await page.screenshot({ 
        fullPage: true,
        animations: 'disabled'
      });
      
      await base.info().attach(name, {
        body: buffer,
        contentType: 'image/png'
      });
    });
  },
});

export { expect } from '@playwright/test';