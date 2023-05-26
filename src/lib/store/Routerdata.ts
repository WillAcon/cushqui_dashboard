import HomeIcon from "$lib/icons/HomeIcon.svelte";
import SettingsIcon from "$lib/icons/SettingsIcon.svelte";
import StatusIcon from "$lib/icons/StatusIcon.svelte";
import DocumentationIcon from "$lib/icons/DocumentationIcon.svelte";
import CreditsIcon from "$lib/icons/CreditsIcon.svelte";

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
