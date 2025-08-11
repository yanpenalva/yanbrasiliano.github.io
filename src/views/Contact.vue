<script>
import ContactDetails from "@/components/contact/ContactDetails.vue";

export default {
    name: "ContactPage",
    components: {
        ContactDetails,
    },
    data: () => {
        return {
            contacts: [
                {
                    id: 1,
                    name: "Salvador/BA - Brasil",
                    icon: "map-pin",
                },
                {
                    id: 2,
                    name: "yanpenabr@gmail.com",
                    icon: "mail",
                },
                {
                    id: 3,
                    name: "yanpenalva",
                    icon: "github",
                },
                {
                    id: 4,
                    name: "yanpenalva",
                    icon: "linkedin",
                },
            ],
        };
    },
};
</script>

<template>
    <div class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10">
        <ContactDetails :contacts="contacts" />
    </div>
</template>
