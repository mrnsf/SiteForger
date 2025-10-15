import { test, expect } from '@playwright/test';

test.describe('Visual Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('homepage visual test', async ({ page }) => {
    // Take a full page screenshot
    await expect(page).toHaveScreenshot('homepage.png', { fullPage: true });
  });

  test('design system selector functionality', async ({ page }) => {
    // Test the design system selector
    const selector = page.locator('[data-testid="design-system-selector"]');
    
    if (await selector.isVisible()) {
      // Click to open dropdown
      await selector.click();
      
      // Take screenshot of opened dropdown
      await expect(page).toHaveScreenshot('design-selector-open.png');
      
      // Test each design system
      const systems = ['modern-minimal', 'vibrant-creative', 'professional-corporate', 'warm-organic', 'tech-futuristic'];
      
      for (const system of systems) {
        const option = page.locator(`[data-value="${system}"]`);
        if (await option.isVisible()) {
          await option.click();
          await page.waitForTimeout(500); // Wait for theme to apply
          await expect(page).toHaveScreenshot(`theme-${system}.png`);
          
          // Reopen selector for next iteration
          if (system !== systems[systems.length - 1]) {
            await selector.click();
          }
        }
      }
    }
  });

  test('theme toggle functionality', async ({ page }) => {
    const themeToggle = page.locator('[data-testid="theme-toggle"]');
    
    if (await themeToggle.isVisible()) {
      // Test light mode
      await expect(page).toHaveScreenshot('light-mode.png');
      
      // Switch to dark mode
      await themeToggle.click();
      await page.waitForTimeout(300);
      await expect(page).toHaveScreenshot('dark-mode.png');
    }
  });

  test('mobile responsive design', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page).toHaveScreenshot('mobile-homepage.png', { fullPage: true });
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page).toHaveScreenshot('tablet-homepage.png', { fullPage: true });
  });
});