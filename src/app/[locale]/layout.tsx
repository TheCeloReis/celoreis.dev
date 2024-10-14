import Footer from "@/components/templates/Footer";
import Topbar from "@/components/Topbar";
import { LocaleType } from "@/utils/constants";
import { LocalizedStringProvider } from "react-aria-components/i18n";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: LocaleType };
}) {
  return (
    <html className="dark" lang={locale}>
      <body className="pt-16 bg-slate-50 text-zinc-900 dark:bg-zinc-900 dark:text-slate-100 min-h-screen">
        <Topbar locale={locale} />
        <LocalizedStringProvider locale={locale} />

        <div className="min-h-[calc(100vh_-_64px)]">{children}</div>

        <Footer locale={locale} />
      </body>
    </html>
  );
}
