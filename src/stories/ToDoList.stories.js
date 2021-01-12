import React from 'react';

import ToDoList from './ToDoList';

export default{
    title: 'Example/ToDoList',
    component : ToDoList
}

const Template = (args) => <ToDoList {...args} />;

export const ALL = Template.bind({});
ALL.args = {
    todos: [{"id":1,"text":"hihi","isCompleted":true},{"id":2,"text":"haha","isCompleted":false}],
    status:'ALL',
    isChecked: false
}
export const ACTIVE = Template.bind({});
ACTIVE.args = {
    todos: [{"id":1,"text":"hihi","isCompleted":true},{"id":2,"text":"haha","isCompleted":false}],
    status:'ACTIVE',
    isChecked: false
}
export const COMPLETED = Template.bind({});
COMPLETED.args = {
    todos: [{"id":1,"text":"hihi","isCompleted":true},{"id":2,"text":"haha","isCompleted":false}],
    status:'COMPLETED',
    isChecked: false
}

