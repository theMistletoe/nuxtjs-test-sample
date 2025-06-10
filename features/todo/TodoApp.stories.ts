import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import TodoApp from './TodoApp.vue'

const meta: Meta<typeof TodoApp> = {
  title: 'Features/Todo/TodoApp',
  component: TodoApp,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'メインのTodoアプリケーションコンポーネント。TodoFormとTodoListを含む完全なTodoアプリケーション。'
      }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'デフォルト',
  parameters: {
    docs: {
      description: {
        story: '初期状態のTodoアプリケーション。Todoアイテムは空の状態で表示されます。'
      }
    }
  }
}

export const WithSampleData: Story = {
  name: 'サンプルデータ付き',
  render: () => ({
    components: { TodoApp },
    template: `
      <div style="width: 600px;">
        <TodoApp />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'より広いコンテナ内での表示例。実際のアプリケーションでの使用例を示しています。'
      }
    }
  }
}

export const Mobile: Story = {
  name: 'モバイル表示',
  render: () => ({
    components: { TodoApp },
    template: `
      <div style="width: 300px;">
        <TodoApp />
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'モバイルデバイスでの表示例。レスポンシブデザインの動作を確認できます。'
      }
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '320px',
            height: '568px'
          }
        }
      },
      defaultViewport: 'mobile'
    }
  }
} 