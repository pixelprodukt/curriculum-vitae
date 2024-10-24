/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'custom-red': '#FF735C',
                'custom-dark-green': '#1A2E35',
                'custom-light-blue': '#8ecae6',
                'custom-normal-blue': '#219ebc',
                'custom-dark-blue': '#023047',
                'custom-yellow': '#ffb703',
                'custom-orange': '#fb8500',
                'custom-light-brown': '#a19581'
            }
        },
        fontFamily: {
            sans: ['Geist']
        },
    },
    plugins: [],
}

