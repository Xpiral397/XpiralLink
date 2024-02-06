import {Link} from "@nextui-org/link";
import {Snippet} from "@nextui-org/snippet";
import {Code} from "@nextui-org/code"
import {button as buttonStyles} from "@nextui-org/theme";
import {siteConfig} from "@/config/site";
import {title, subtitle} from "@/components/primitives";
import {GithubIcon, SearchIcon} from "@/components/icons";
import {EditNote, EditNoteOutlined, FilterListOutlined, Search} from "@mui/icons-material";
import {Input} from "@nextui-org/input";
import MessageRender from "@/components/MessageRender";

export default function Home() {
	return (
		<div className="flex w-full h-full space-x-2 bg-inherit">
			<div className="bg-white w-full h-full rounded-md shadow-2xl ">

			</div>
			<div className="w-full space-y-2 flex flex-col items-center bg-white rounded-md  w-[350px] h-full shadow-2xl ">
				<ul className="font-[550] text-zinc-950 font-[Arial, apple,Heltivica] w-full flex items-center justify-between px-2 py-2">
					<li>
						Messages
					</li>
					<EditNoteOutlined />
				</ul>
				<Input
					className="px-2"
					type="search"
					placeholder="Search"
					startContent={<SearchIcon className="text-slate-500 text-sm" />}
					endContent={<FilterListOutlined className="text-slate-500 text-sm" />}
					classNames={{
						inputWrapper: 'h-1 px-2 rounded-md',
						input: 'text-sm'
					}} />

				<ul className="flex items-center w-full justify-between px-2 ">
					<li className="text-slate-900 font-[450] flex space-x-2 w-full text-[12px] items-center">
						<li className="border-b-[2px] py-1 border-slate-950">Primary</li>
						<li>General</li>
					</li>
					<li className="text-blue-400 text-sm font-[550] text-[12px]">Requests(5)</li>
				</ul>
				<MessageRender sortBy='Primaryds' />
			</div>
		</div>
	);
}
