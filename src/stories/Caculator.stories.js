import React from 'react';

import Caculator from './Caculator';

export default{
    title: 'Example/ToTal',
    component : Caculator
}

const Template = (args) => <Caculator {...args} />;

export const ToTal1 = Template.bind({});
ToTal1.args = {
    a:1,
    b:2
};
export const ToTal2 = Template.bind({});
ToTal2.args = {
    a:3,
    b:5
}
export const ToTal3 = Template.bind({});
ToTal3.args = {
    a:3,
    b:5
}