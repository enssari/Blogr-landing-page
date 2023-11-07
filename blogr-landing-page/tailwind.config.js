/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verylightred': 'hsl(13, 100%, 72%)',
        'lightred': 'hsl(353, 100%, 62%)',
        'grayishblue': 'hsl(240, 2%, 79%)',
        'darkgrayishblue': 'hsl(207, 13%, 34%)',
        'darkblue':'hsl(208, 49%, 24%)',
        "verydarkblue": 'hsl(240, 10%, 16%)'
      }
    },
  },
  plugins: [],
}

