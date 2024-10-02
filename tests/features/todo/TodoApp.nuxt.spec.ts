import {cleanup, render, screen, fireEvent} from '@testing-library/vue'
import { describe, it, expect, afterEach } from 'vitest'
import TodoApp from '../../../features/todo/TodoApp.vue'

describe('TodoApp', () => {
    afterEach(() => {
        cleanup()
    })
  it('TODOフォームが見える', () => {
    render(TodoApp);
    expect(screen.getByText('TODOリスト')).toBeInTheDocument();
  })

  it('新しいTODOを追加できる', async () => {
    render(TodoApp);

    const input = screen.getByPlaceholderText('新しいTODOを入力');
    await fireEvent.update(input, '新しいタスク');
    const button = screen.getByRole('button', { name: '追加' });
    await fireEvent.click(button);

    expect(screen.getByText('新しいタスク')).toBeInTheDocument();
  })

  it('TODOの完了状態を切り替えられる', async () => {
    render(TodoApp);

    const input = screen.getByPlaceholderText('新しいTODOを入力');
    await fireEvent.update(input, '新しいタスクタイトル');
    const button = screen.getByRole('button', { name: '追加' });
    await fireEvent.click(button);

    const checkbox = screen.getByRole('checkbox', { name: '新しいタスクタイトル' });
    await fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  })
})
