import "./globals.css";

export const metadata = {
  title: "Valentine For Colline",
  description: "A special Valentine experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
