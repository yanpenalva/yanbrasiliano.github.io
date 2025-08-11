<script>
import AboutClients from "@/components/about/AboutClients";
import AboutCounter from "@/components/about/AboutCounter";
import AboutMe from "@/components/about/AboutMe";

export default {
    name: "AboutPage",
    components: {
        AboutMe,
        AboutCounter,
        AboutClients,
    },
    data: () => {
        return {};
    },

    methods: {},
};
</script>

<template>
    <div>
        <div class="container mx-auto">
            <AboutMe />
        </div>

        <AboutCounter />

        <!-- About counter -->
        <div class="container mx-auto">
            <AboutClients />
        </div>
    </div>
</template>

<style scoped></style>
