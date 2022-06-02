import { ArckFontSize } from './ArckFontSize';
import ArckFontSizeMenu from './ArckFontSizeMenu.vue';

Statamic.$bard.addExtension(() => ArckFontSize);
Statamic.$bard.buttons(() => {
    return {
        name: 'arckfontsize',
        text: 'Font Size',
        command: (editor) => editor.commands.toggleArckFontSize(),
        icon: 'arck-font-size',
        component: ArckFontSizeMenu
    };
});
