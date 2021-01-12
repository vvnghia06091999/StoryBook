import React from 'react';

import ToDo from './ToDo';
import './ToDo.scss';

export default{
    title: 'Example/ToDoList/ToDo',
    component : ToDo
}

const Template = (args) => <ToDo {...args} />;
export const TestToDo = Template.bind({});
TestToDo.args = {
    todo: {
        id:1,
        text:"hello",
        isCompleted: false
    }
}