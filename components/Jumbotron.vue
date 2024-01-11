<template>
    <div class="overflow-hidden w-full h-screen bg-cover bg-no-repeat p-12 text-center bg duration-500">
        <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
            <div class="flex h-full items-center justify-center flex-col">
                <div class="text-white">
                    <h2 class="mb-4 text-4xl font-semibold">Salman Alfarizqi</h2>
                    <h4 class="mb-6 text-xl font-semibold">Web Engginer</h4>
                </div>
                <div>
                    <div class="flex w-full h-full justify-center items-end">
                        <a href="#about"
                            class="rounded border-2 border-neutral-50 px-2 py-2 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init data-te-ripple-color="light">
                            <Icon name="basil:arrow-down-solid" width="40" height="40" color="white" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.bg {
    background-image: url('/041.webp');
    height: 650px
}

@media screen and (max-width: 360px) {
    .bg {
        height: 750px;
    }

    
}
</style>