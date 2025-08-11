<script>
import AboutClientSingle from "@/components/about/AboutClientSingle.vue";

export default {
    components: { AboutClientSingle },
    data: () => ({
        clientsHeading: "Companies in which I provide or have provided services",
        clients: [
            { id: 1, title: "Ramiro Campelo", img: new URL("@/assets/images/brands/ramiro_logo.png", import.meta.url) },
            { id: 2, title: "ACP Group", img: new URL("@/assets/images/brands/acp_logo.png", import.meta.url) },
            { id: 3, title: "Qintess", img: new URL("@/assets/images/brands/qintess_logo.png", import.meta.url) },
            { id: 4, title: "Prodeb", img: new URL("@/assets/images/brands/prodeb_logo.png", import.meta.url) },
            {
                id: 5,
                title: "Netra Tecnologia",
                img: new URL("@/assets/images/brands/netra_logo.png", import.meta.url),
            },
        ],
    }),
};
</script>

<template>
    <div class="clients-section">
        <p class="clients-title">{{ clientsHeading }}</p>
        <div class="clients-grid">
            <AboutClientSingle v-for="client in clients" :key="client.id" :client="client" />
        </div>
    </div>
</template>

<style scoped>
.clients-section {
    @apply mt-10 sm:mt-20;
}
.clients-title {
    @apply text-2xl sm:text-3xl text-primary-dark dark:text-primary-light font-medium text-center;
}
.clients-grid {
    @apply grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-14 place-items-center;
}
</style>
