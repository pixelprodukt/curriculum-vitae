/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'custom-red': '#f2575d',
                'custom-dark-green': '#4CAF50',
                'custom-light-green': '#AED581',
                'custom-light-blue': '#8ecae6',
                'custom-dark-orange': '#FFB300',
                'custom-light-orange': '#FFCC80',
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

