// Minimal root layout required by Next.js App Router.
// No UI is served — this app exists solely to host /public static assets.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
