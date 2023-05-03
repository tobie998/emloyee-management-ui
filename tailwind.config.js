/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'main-color': '#006D75',
            },
            width: {
                sidebar: '21.875%',
            },
            lineHeight: {
                header: '80px',
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
