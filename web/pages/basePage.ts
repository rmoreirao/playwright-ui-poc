import { Page } from '@playwright/test'

export abstract class BasePage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async wait(time: number) {
    // Debug purpose
    await this.page.waitForTimeout(time)
  }
}