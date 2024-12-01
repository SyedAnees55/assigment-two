import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-image":'background-imageurl(https://th.bing.com/th/id/OIP.CF3N8s40pfIeY-6uNNZ1KQHaKu?rs=1&pid=ImgDetMain)'
      },
    },
  },
  plugins: [],
};
export default config;
