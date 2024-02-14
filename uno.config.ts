import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            extraProperties: {
                'display': 'inline-block',
                'height': '1.2em',
                'width': '1.2em',
                'vertical-align': 'middle',
            },
            warn: true,
        }),
    ],
    theme: {
        colors: {
            primary: 'var(--primary-color)', // 定义了一个主题色。
        }
    },
    shortcuts: {
        btn: 'p-2  font-semibold rounded-lg select-none cursor-pointer hover:bg-[#8882] dark:hover:bg-[#fff2]'
    }
});