import "@/styles/globals.css";
import {Metadata} from "next";
import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import {Providers} from "./providers";
import {Navbar} from "@/components/navbar";
import {Link} from "@nextui-org/link";
import clsx from "clsx";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{media: "(prefers-color-scheme: light)", color: "white"},
		{media: "(prefers-color-scheme: dark)", color: "black"},
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"px-1 py-2 min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<div className=" rounded-md px-1 dark:bg-slate-900 bg-neutral-100">
					<Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
						<div className="relative flex flex-col h-screen ">
							<Navbar />
							<div className="w-full h-full dark:bg-slate-950 bg-blue-100 flex space-x-2 py-2 ">
								<Sidebar />
								<main className="w-full container  w-full h-full ">
									{children}
								</main>
							</div>

						</div>
					</Providers>
				</div>
			</body>
		</html>
	);
}
