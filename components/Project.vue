<template>
    <section id="project" class="w-full md:h-screen bg-slate-600 duration-500 h-full">
        <div class="flex justify-center w-full">
            <div class="border-b-2 w-40 border-white">
                <h1 class="text-center text-white text-3xl font-semibold pb-3 pt-20">My Projects</h1>
            </div>
        </div>
        <div class="flex justify-center flex-wrap mt-3">
            <div v-for="dd in porto" class="">
                <a :href="dd.url" target="__blank">
                    <div class="bg-slate-300 mx-3 my-1 md:my-5 rounded-lg">
                        <img :src="dd.foto" alt="foto projects" class="block w-full md:h-[250px] h-40 rounded-t-lg">
                        <div class="ml-2">
                            <h1 class="text-2xl font-semibold">{{ dd.title }}</h1>
                            <p>{{ dd.description }}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>

    const supabase = useSupabaseClient()
    const {data: porto, error} = await supabase.from('portofolio').select('*'); 

    // console.log(porto);

    // const data = [
    //     {
    //         'id':'1',
    //         'title':'Todolist Javascript',
    //         'photo':'https://wvrvpccyvczrhxywqqfs.supabase.co/storage/v1/object/public/Foto/opop.png',
    //         'url':'https://salmanalfarizqi.github.io/todo_List/',
    //         'description':'Make todolist use HTML Tailwind CSS And \nJavascript'
    //     },
    //     {
    //         'id':'1',
    //         'title':'Todolist Javascript',
    //         'photo':'https://wvrvpccyvczrhxywqqfs.supabase.co/storage/v1/object/public/Foto/opop.png',
    //         'url':'https://salmanalfarizqi.github.io/todo_List/',
    //         'description':'Make todolist use HTML Tailwind CSS And \nJavascript'
    //     },
    // ]

</script>

<style lang="scss" scoped></style>