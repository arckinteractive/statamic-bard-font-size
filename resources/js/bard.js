import { ArckFontSize } from './ArckFontSize';
import ArckFontSizeMenu from './ArckFontSizeMenu.vue';

Statamic.booting(() => {
    Statamic.$bard.addExtension(() => ArckFontSize);
    Statamic.$bard.buttons((buttons, button) => {
        return button({
            name: 'ArckFontSize',
            text: 'Font Size',
            command: (editor) => editor.chain().focus().toggleArckFontSize().run(),
            args: {
                key: ""
            },
            html: '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 32H272a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32h88v304h-40a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-40V112h88v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM304 224H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-16h56v128H96a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-24V288h56v16a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16z" class=""></path></svg>',
            component: ArckFontSizeMenu
        });
    });
});
