import { test, expect } from '@playwright/test';
import { TodoPage } from './page-object-models/todolist-page';

test.describe('TODOリスト', () => {
  let todoPage: TodoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
  });

  test('ページが正しく表示される', async () => {
    await expect(todoPage.title).toHaveText('TODOリスト');
    await expect(todoPage.newTodoInput).toBeVisible();
    await expect(todoPage.addButton).toBeVisible();
  });

  test('新しいTODOを追加できる', async () => {
    await todoPage.addTodo('テストTODO');
    await expect(await todoPage.getTodoItem('テストTODO')).toBeVisible();
  });

  test('TODOをチェックできる', async () => {
    await todoPage.addTodo('チェックするTODO');
    const checkbox = await todoPage.getLastCheckbox();
    await expect(checkbox).not.toBeChecked();
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  });
});
