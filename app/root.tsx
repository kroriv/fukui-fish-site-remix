import { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwindCssBunbleHref from "~/styles/tailwind.scss?url";
import styleCssBunbleHref from "~/styles/style.scss?url";
import Footer from "~/components/shared/Footer";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "preconnect", href: "https://fonts.googleapis.com", crossOrigin: "anonymous" },
  //{ rel: "preload", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap", as: "font", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: tailwindCssBunbleHref },
  { rel: "stylesheet", href: styleCssBunbleHref },
];

export function Layout() {
  // Render
  return (
    <html lang={ "ja" }>
      <head>
        <meta charSet={ "utf-8" }/>
        <meta name={ "viewport" } content={ "width=device-width, initial-scale=1" }/>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet/>
        <Footer/>
        <ScrollRestoration/>
        <Scripts/>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
