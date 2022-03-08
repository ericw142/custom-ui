const initialData = {
    tasks : {
        'task-1': { id: 'task-1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        'task-2': { id: 'task-2', type: 'Image', src: 'https://images.unsplash.com/photo-1645951031195-4cbd6894d12a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            taskIds: ['task-1', 'task-2'],
        },
        'column-2': {
            id: 'column-2',
            taskIds: [],
        },
    },
    columnOrder: ['column-1', 'column-2']
}

export default initialData;