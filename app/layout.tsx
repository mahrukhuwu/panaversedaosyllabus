import PageHeader from "@/components/PageHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body>
        <PageHeader />
        {children}
      </body>
    </html>
  );
}
