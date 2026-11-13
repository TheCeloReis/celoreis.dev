import Footer from "@/components/templates/Footer";
import Topbar from "@/components/Topbar";
import { LocaleType } from "@/utils/constants";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { LocalizedStringProvider } from "react-aria-components/i18n";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as LocaleType;

  return (
    <html
      className={`${dmSans.variable} ${jetbrainsMono.variable} dark`}
      lang={locale}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('usehooks-ts-dark-mode');var d=s!==null?s==='true':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="pt-16 font-sans antialiased bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 min-h-screen">
        <Topbar locale={locale} />
        <LocalizedStringProvider locale={locale} />

        <div className="min-h-[calc(100vh_-_64px)]">{children}</div>

        <Footer locale={locale} />
      </body>
    </html>
  );
}
