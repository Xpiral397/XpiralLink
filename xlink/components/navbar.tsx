"use client"
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Kbd} from "@nextui-org/kbd";
import {Link} from "@nextui-org/link";
import {Input} from "@nextui-org/input";
import {link as linkStyles} from "@nextui-org/theme";

import {siteConfig} from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {ThemeSwitch} from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import {Logo} from "@/components/icons";
import {ArrowDropDown, Bookmark, BookmarkOutlined, BookmarksOutlined, DarkMode, InfoSharp, KeyboardArrowDown, Notifications, NotificationsOutlined, Save, SaveAlt, SearchOutlined} from "@mui/icons-material";
import {Avatar} from "@mui/material";
import {useSwitch} from "@nextui-org/switch";
import {useTheme} from "@emotion/react";

export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);
	const changeMode = useTheme()

	return (

		<div className='shawdow-xl flex justify-between items-center py-3 mt-1 px-2 bg-white dark:bg-slate-950'>
			<div className="flex items-center ">
				<div className="w-8 h-8 rounded-[8px]  flex items-center bg-blue-500 justify-center">
					<div className="-rotate-45 px-[.5px] flex w-full justify-around items-center  ">
						<div className="bg-white w-1 h-1 rounded-full"></div>
						<div className="bg-white w-2 h-2 rounded-full"></div>
						<div className="bg-white w-2 h-2 rounded-full"></div>
					</div>
				</div>
				<h1 className="font-bold text-[16px] mx-2 font-[Arial]">X-Link</h1>
			</div>
			<div className="w-[50%] relative ">
				<input placeholder='Search' height={'10px'} className="focus:outline-none h-9 bg-neutral-100 font-[Arial] dark:bg-zinc-900 w-full rounded-md px-10 " />
				<h1 className="absolute top-0 mt-[6px] left-2"><span><SearchOutlined fontWeight={700} /></span></h1>
			</div>

			<div className="-mt-1 flex justify-between space-x-5 items-center">
				<div className="relative">
					<NotificationsOutlined className="w-7 h-5" />
					<div className="h-2 rounded-full w-2 bg-red-600 absolute right-1 top-1 "></div>
				</div>

				<div className="relative">
					<BookmarksOutlined className="w-7 h-5" />

				</div>

				<div className="relative h-5" >
					<ThemeSwitch />

				</div>

				<div className="flex space-x-2 items-center ">
					<Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-8 h-8" />
					<h1 className="font-[500] text-[12px] text-slate-800">Dave Jobs</h1>
					<KeyboardArrowDown />
				</div>
			</div>
		</div>


	);
};
