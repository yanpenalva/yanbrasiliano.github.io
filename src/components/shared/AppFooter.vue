<script>
import FooterCopyright from "@/components/shared/FooterCopyright.vue";
import feather from "feather-icons";
export default {
    components: { FooterCopyright },
    data() {
        return {
            socials: [
                {
                    id: 1,
                    name: "GitHub",
                    icon: "github",
                    url: "https://github.com/yanbrasiliano",
                },

                {
                    id: 2,
                    name: "Medium",
                    icon: "book",
                    url: "https://medium.com/@yanpenabr",
                },
                {
                    id: 3,
                    name: "Instagram",
                    icon: "instagram",
                    url: "https://instagram.com/yanbpenalva",
                },
                {
                    id: 4,
                    name: "Linkedin",
                    icon: "linkedin",
                    url: "https://www.linkedin.com/in/yanbrasiliano/",
                },
                {
                    id: 5,
                    name: "WhatsApp",
                    title: "WhatsApp",
                    icon: "message-circle",
                    url: "https://wa.me/+5571992432603",
                },
            ],
        };
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
};
</script>

<template>
    <div class="container mx-auto">
        <div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
            <!-- Footer social links -->
            <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
                <p
                    class="font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"
                >
                    <!-- Follow me -->
                </p>
                <ul class="flex gap-4 sm:gap-8">
                    <a
                        v-for="social in socials"
                        :key="social.id"
                        :href="social.url"
                        target="__blank"
                        class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"
                    >
                        <i :data-feather="social.icon" class="w-5 sm:w-8 h-5 sm:h-8"></i>
                    </a>
                </ul>
            </div>

            <!-- Footer copyright -->
            <FooterCopyright />
        </div>
    </div>
</template>

<style scoped></style>
