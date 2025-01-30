// tailwind.config.js
module.exports = {
    theme: {
        extend: {
        keyframes: {
            slide: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
            },
        },
        animation: {
            slide: 'slide 150s linear infinite',
            'slide-tablet': 'slide 120s linear infinite',
            'slide-pc': 'slide 90s linear infinite',
        },
        },
    },
    variants: {},
    plugins: [],
}