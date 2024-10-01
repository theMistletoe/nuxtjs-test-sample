import {cleanup, render, screen, fireEvent} from '@testing-library/vue'
import { describe, it, expect, afterEach } from 'vitest'
import TodoApp from '../../../features/todo/TodoApp.vue'

describe('TodoApp', () => {
    afterEach(() => {
        cleanup()
    })
  it('コンポーネントが正しくレンダリングされる', () => {

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

//   it('TODOの完了状態を切り替えられる', async () => {
//     const wrapper = mount(TodoApp)
//     const todoForm = wrapper.findComponent(TodoForm)
    
//     await todoForm.get('input').setValue('テストタスク')
//     await todoForm.get('form').trigger('submit')

//     const todoList = wrapper.findComponent(TodoList)
//     const checkbox = todoList.find('input[type="checkbox"]')
//     await checkbox.setChecked()

//     expect(todoList.props('todos')[0].completed).toBe(true)
//   })
})
