const { Mark, mergeAttributes } = Statamic.$bard.tiptap.core;

export const ArckFontSize = Mark.create({
    name: 'arckFontSize',

    addAttributes() {
        return {
            key: {
                default: '',
            },
        };
    },

    parseHTML() {
        return [
            {
                tag: "span.arck-font-size",
                getAttrs: (dom) => ({
                    key: dom.getAttribute('data-class')
                })
            }
        ];
    },

    renderHTML({mark, HTMLAttributes}) {
        let style = 'font-size: ';
        switch (mark.attrs.key) {
            case 'text-xs':
                style += '0.75rem;';
            break;
            case 'text-sm':
                style += '0.875rem;';
            break;
            case 'text-base':
                style += '1rem;';
            break;
            case 'text-lg':
                style += '1.125rem;';
            break;
            case 'text-xl':
                style += '1.25rem;';
            break;
            case 'text-2xl':
                style += '1.5rem;';
            break;
            case 'text-3xl':
                style += '1.875rem;';
            break;
            case 'text-4xl':
                style += '2.25rem;';
            break;
            case 'text-5xl':
                style += '3rem;';
            break;
            case 'text-6xl':
                style += '3.75rem;';
            break;
            case 'text-7xl':
                style += '4.5rem;';
            break;
            case 'text-8xl':
                style += '6rem;';
            break;
            case 'text-9xl':
                style += '8rem;';
            break;
        }

        return [
            "span",
            mergeAttributes(HTMLAttributes,
            {
                'class': 'arck-font-size ',
                'data-class': mark.attrs.key,
                'style': style
            }),
            0,
        ];
    },

    addCommands() {
        return {
            toggleArckFontFamily: (attributes) => ({ commands }) => {
                return commands.toggleMark(this.name, attributes);
            }
        }
    },

    pasteRules({type}) {
        return [];
    },

    plugins() {
        return [];
    }
});
