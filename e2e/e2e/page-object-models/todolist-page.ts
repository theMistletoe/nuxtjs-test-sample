import type { Page, Locator } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly title: Locator;
  readonly newTodoInput: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByRole('heading', { level: 1 });
    this.newTodoInput = page.getByRole('textbox', { name: '新しいTODOを入力' });
    this.addButton = page.getByRole('button', { name: '追加' });
  }

  async goto() {
    await this.page.goto('http://localhost:3000');
  }

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.addButton.click();
  }

  async getTodoItem(text: string) {
    return this.page.getByRole('listitem').filter({ hasText: text });
  }

  async getLastCheckbox() {
    return this.page.getByRole('checkbox').last();
  }
}