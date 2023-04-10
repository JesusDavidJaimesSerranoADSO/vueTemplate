export default{
    name:"my-content",
    template:/*html*/`
    <div class="text-box">
        <h1 v-html="config.titulo1"></h1>
            <p v-text="config.texto1"></p>
            <button>Explore Now</button>
            <button>See the plans</button>

    </div>
    <img :src="config.imagen2" alt="" class="feature-img">
    `,
    props: {
        config: Object
    }
}