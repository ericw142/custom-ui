const initialData = {
    tasks : {
        'task-1': { id: 'task-1', content: 'Take out the garbage' },
        'task-2': { id: 'task-2', content: 'Watch my favorite show' },
        'task-3': { id: 'task-3', content: 'Charge my phone' },
        'task-4': { id: 'task-4', content: 'Cook dinner' },
        'task-5': { id: 'task-5', content: 'Pepperoni Pizza' },
        'task-6': { id: 'task-6', content: 'Steak and Mashed Potatoes' },
        'task-7': { id: 'task-7', content: 'Sushi' },
        'task-8': { id: 'task-8', content: 'Curry' },
        'task-9': { id: 'task-9', content: 'FFXIV' },
        'task-10': { id: 'task-10', content: 'Doom' },
        'task-11': { id: 'task-11', content: 'Bloodborne' },
        'task-12': { id: 'task-12', content: 'Pokemon' },
        'task-13': { id: 'task-13', content: 'React' },
        'task-14': { id: 'task-14', content: 'Bulma' },
        'task-15': { id: 'task-15', content: 'react-beautiful-dnd' },
        'task-16': { id: 'task-16', content: 'Express' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        }
    },
    columnOrder: ['column-1']
}

export default initialData;