<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Companies in which I provide or have provided services',
			clients: [
				{
					id: 1,
					title: 'Ramiro Campelo',
					img: new URL('@/assets/images/brands/ramiro_logo.png', import.meta.url),
				},
				{
					id: 2,
					title: 'ACP Group',
					img: new URL('@/assets/images/brands/acp_logo.png', import.meta.url),
				},
				{
					id: 3,
					title: 'Qintess',
					img: new URL('@/assets/images/brands/qintess_logo.png', import.meta.url),
				},
				{
					id: 5,
					title: 'Prodeb',
					img: new URL('@/assets/images/brands/prodeb_logo.png', import.meta.url),
				},

			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle v-for="client in clients" :key="client.id" :client="client" />
		</div>
	</div>
</template>
