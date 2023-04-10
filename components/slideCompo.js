export default {
    name: "my-slider",
    template:/*html*/`
    <div class="sidebar">
            <a href="#"> {{config.enlaces[4]}} <img :src="config.imagen3"> </a>
    </div>
    `,
    props: {
        config: Object
    }
}
