import localFont from "next/font/local";

const ExpoArabicFont = localFont({
  variable: "--font-ExpoArabic",
  src: [
    {
      path: "../../../public/font/ExpoArabic-Book.ttf",
      /* default */
    },
    {
      path: "../../../public/font/Expo_Arabic_Light.ttf",
      weight: "300",
      /* Light */
    },
    {
      path: "../../../public/font/Expo_Arabic_Medium.ttf",
      weight: "500",
      /* Medium */
    },
    {
      path: "../../../public/font/Expo_Arabic_SemiBold.ttf",
      weight: "600",
      /* SemiBold */
    },
    {
      path: "../../../public/font/Expo_Arabic_Bold.ttf",
      weight: "700",
      /* Bold */
    },
  ],
});

export default ExpoArabicFont;
