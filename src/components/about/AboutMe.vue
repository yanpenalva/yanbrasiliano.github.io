<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'',
				},
				{
					id: 2,
					bio:
						'As a Software Engineer, I have the skills to work through the entire system life cycle, with experience in maintaining systems in production, building new projects, requirements gathering, technical documentation, and version control. I have technical proficiency in English and am looking to improve by 1% every day! With my problem solving skills and critical thinking for solutions, along with my experience in various tools, technologies, and methodologies, I am able to provide high quality software solutions.'
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
