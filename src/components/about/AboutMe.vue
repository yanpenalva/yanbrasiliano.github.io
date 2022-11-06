<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Hi, I am Yan and I have been working with development for 2 years. Ex-Military Marine Corps, passionate about technology and challenges! In my spare time, I like to read, write and play sports. ',
				},
				{
					id: 2,
					bio:
						'Currently I work as Developer II for Qintess, based at PRODEB,an organization that assures the Bahia State Government the domain in the application of development solutions. My current work stack is: PHP, Laravel, Javascript and Vue.js. But I also have experience with Python, Shell Script and GNU/Linux Systems Administration.'
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img src="@/assets/images/profile.jpeg" class="rounded-xl w-96" alt="" />
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p v-for="bio in bios" :key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
