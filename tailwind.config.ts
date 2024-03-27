/* eslint-disable @typescript-eslint/no-unused-vars */
import colors from "tailwindcss/colors";
import headlessui from "@headlessui/tailwindcss";

// フォントサイズのpx->rem計算用関数
const fontSize = Object.fromEntries(
  [...Array(200)].map((_, index) => { 
    const px = index + 10
    return [`${px}ptr`, `${px / 16}rem`]
  })
);

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1280px',
        "2xl": '1320px',
      },
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "0rem",
        xl: "0rem",
        "2xl": "0rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      red: colors.red,
      gray: {
        ...colors.gray,
        100: "#f0f3f5",
        //#f0f3f5
      },
      blue: {
        ...colors.blue,
        250: "#dae2ea",
        550: "#294c81",
        1000: "#0064be",
      },
      yellow: {
        ...colors.yellow,
        550: "#d6c821",
      },
      wave: {
        1: "rgba(218, 226, 234, .5)",
        2: "#dae2ea",
      },
      error: {
        DEFAULT: "#a05469",
        100: "#f3e4e7",
      },
    },
    // フォントファミリー各種
    fontFamily: {
      "notosansjp": '"Noto Sans JP", sans-serif',
      "notoserifjp": '"Noto Serif JP", sans-serif',
      "mincho": '"游明朝体", YuMincho, "游明朝", "Yu Mincho", serif',
      "yugothic": '"游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif',
      "arial": '"Arial", メイリオ',
    },
    extend: {
      fontSize: fontSize,
    },
  },
  plugins: [headlessui],
  darkMode: "class",
  important: true,
}