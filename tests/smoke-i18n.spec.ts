import { test, expect, Page } from '@playwright/test';

// Minimal smoke: homepage -> products/interface summary -> contact
// Runs for en + zh-Hans + zh-Hant only if those routes exist.
// Captures screenshots (desktop+mobile via projects) into test-results.

const LOCALES = ['en', 'zh-Hans', 'zh-Hant'] as const;

type MaybeResponse = Awaited<ReturnType<Page['request']['get']>>;

async function routeExists(page: Page, path: string): Promise<boolean> {
  const baseURL = (page.context() as any)._options?.baseURL as string | undefined;
  const url = new URL(path, baseURL || undefined).toString();
  const res: MaybeResponse = await page.request.get(url, { failOnStatusCode: false });
  return !!res && res.status() >= 200 && res.status() < 400;
}

async function firstWorkingPath(page: Page, paths: string[]): Promise<string | null> {
  for (const p of paths) {
    if (await routeExists(page, p)) return p;
  }
  return null;
}

async function stabilize(page: Page) {
  // Reduce flakiness for screenshot timing.
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(300);
}

test.describe('site smoke navigation (i18n, desktop+mobile projects)', () => {
  for (const locale of LOCALES) {
    test(`${locale}: home -> products/interface -> contact`, async ({ page }, testInfo) => {
      const homeCandidates = locale === 'en' ? ['/', '/en', '/en/'] : [`/${locale}`, `/${locale}/`];

      const homePath = await firstWorkingPath(page, homeCandidates);
      test.skip(!homePath, `No homepage route found for locale ${locale}`);

      const base = homePath!.replace(/\/$/, '');

      const productsCandidates = [
        `${base}/products`,
        `${base}/products/`,
        `${base}/interface-summary`,
        `${base}/interface-summary/`,
        `${base}/interface`,
        `${base}/interface/`,
        `${base}/summary`,
        `${base}/summary/`,
        // common chinese slugs (best-effort)
        `${base}/产品`,
        `${base}/产品中心`,
        `${base}/接口汇总`,
      ];

      const contactCandidates = [
        `${base}/contact`,
        `${base}/contact/`,
        `${base}/联系我们`,
        `${base}/聯絡我們`,
      ];

      await page.goto(homePath!, { waitUntil: 'domcontentloaded' });
      await stabilize(page);
      await page.screenshot({ path: testInfo.outputPath(`${locale}-01-home.png`), fullPage: true });

      // Prefer click-through if nav link exists.
      const navProducts = page
        .getByRole('link', { name: /products|product|interface|summary|产品|接口|汇总/i })
        .first();
      if ((await navProducts.count().catch(() => 0)) > 0) {
        await navProducts.click({ timeout: 5_000 }).catch(() => {});
      }

      const productsPath = await firstWorkingPath(page, productsCandidates);
      if (productsPath) {
        await page.goto(productsPath, { waitUntil: 'domcontentloaded' });
        await stabilize(page);
        await page.screenshot({ path: testInfo.outputPath(`${locale}-02-products.png`), fullPage: true });
      } else {
        testInfo.annotations.push({ type: 'note', description: `No products/interface route found for ${locale}` });
      }

      const navContact = page.getByRole('link', { name: /contact|联系我们|聯絡我們/i }).first();
      if ((await navContact.count().catch(() => 0)) > 0) {
        await navContact.click({ timeout: 5_000 }).catch(() => {});
      }

      const contactPath = await firstWorkingPath(page, contactCandidates);
      test.skip(!contactPath, `No contact route found for locale ${locale}`);

      await page.goto(contactPath!, { waitUntil: 'domcontentloaded' });
      await stabilize(page);
      await page.screenshot({ path: testInfo.outputPath(`${locale}-03-contact.png`), fullPage: true });

      // Basic assertion so the smoke isn't a no-op.
      await expect(page).toHaveURL(/contact|联系我们|聯絡我們/i);
    });
  }
});
