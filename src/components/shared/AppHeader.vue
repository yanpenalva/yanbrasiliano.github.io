<script>
import ThemeSwitcher from '../ThemeSwitcher';
import feather from 'feather-icons';
import AppHeaderLinks from './AppHeaderLinks.vue';
import Button from '../reusable/Button.vue';

export default {
	components: {
		ThemeSwitcher,
		AppHeaderLinks,
		Button,
	},
	data() {
		return {
			isOpen: false,
			theme: '',
			modal: false,
			categories: [
				{
					id: 1,
					value: 'web',
					name: 'Web Application',
				},
				{
					id: 2,
					value: 'api',
					name: 'API Application',
				},
	
			],
		};
	},

	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	methods: {
		updateTheme(theme) {
			this.theme = theme;
		},

	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<nav id="nav" class="sm:container sm:mx-auto">
		<!-- Header start -->
		<div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6">
			<!-- Header menu links and small screen hamburger menu -->
			<div class="flex justify-between items-center px-4 sm:px-0">
				<!-- Header logos -->
				<div>
					<router-link to="/">
						<a href="#_" class="relative inline-block text-lg group">
							<span
								class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
								<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-100"></span>
								<span
									class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
								<span class="relative">Home</span>
							</span>
							<span
								class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
								data-rounded="rounded-lg"></span>
						</a>
					</router-link>
				</div>

				<!-- Theme switcher small screen -->
				<theme-switcher :theme="theme" @themeChanged="updateTheme"
					class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg" />

				<!-- Small screen hamburger menu -->
				<div class="sm:hidden">
					<button @click="isOpen = !isOpen" type="button" class="focus:outline-none" aria-label="Hamburger Menu">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light">
							<path v-if="isOpen" fill-rule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								clip-rule="evenodd"></path>
							<path v-if="!isOpen" fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
							</path>
						</svg>
					</button>
				</div>
			</div>

			<!-- Header links -->
			<AppHeaderLinks :showModal="showModal" :isOpen="isOpen" />

			<!-- Header right section buttons -->
			<div class="hidden sm:flex justify-between items-center flex-col md:flex-row">
			

				<!-- Theme switcher large screen -->
				<theme-switcher :theme="theme" @themeChanged="updateTheme"
					class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer" />
			</div>
		</div>

		
	</nav>
</template>

<style scoped>

</style>
