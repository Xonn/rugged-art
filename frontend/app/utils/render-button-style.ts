export function renderButtonStyle(type: string) {
	switch (type) {
		case "primary":
			return "px-9 py-2 text-lg font-bertioga font-medium uppercase rounded-full dark:bg-white dark:text-black";
		case "secondary":
			return "px-9 py-2 text-lg font-bertioga font-medium border rounded-full dark:border-white uppercase";
		default:
			return "px-9 py-2 text-lg font-bertioga font-medium rounded-full dark:bg-violet-400 dark:text-gray-900";
	}
}
