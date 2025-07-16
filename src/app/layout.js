import "./globals.css";

export const metadata = {
  title: "Eric Yang",
  description: "Eric Yang's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
