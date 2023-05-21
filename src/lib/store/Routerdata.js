import HomeIcon from "../icons/HomeIcon.svelte";
import SettingsIcon from "../icons/SettingsIcon.svelte";
import StatusIcon from "../icons/StatusIcon.svelte";
import DocumentationIcon from "../icons/DocumentationIcon.svelte";
import CreditsIcon from "../icons/CreditsIcon.svelte";

const data = [
	{
		title: 'Home',
		icon:  HomeIcon,
		link: '/admin'
	},
	{
		title: 'Tickets',
		icon: DocumentationIcon,
		link: '/admin/ticket',
		id:"ticket",
		subitems: [
			{
				title: 'Lista',
				link: '/admin/ticket',
			},
			{
				title: 'Crear',
				link: '/admin/ticket/create',
			},
		]
	},
	{
		title: 'Archives',
		icon: StatusIcon,
		link: '/admin/sorteo'
	},
	{
		title: 'Credits',
		icon: CreditsIcon,
		link: '/admin/credits'
	},
	{
		title: 'Settings',
		icon: SettingsIcon,
		link: '/admin/settings'
	},
	// {
	// 	title: 'Documentation',
	// 	icon: Home,
	// 	link: '/admin/documentation'
	// }
];

export default data;
