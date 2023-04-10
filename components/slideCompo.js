export default{
    name:"my-slider",
    template:/*html*/`
    <div class="sidebar">
            <a href="#"> 0ur recent projects <img :src="config.imagen3"> </a>
    </div>
    `,

    props: {
        config: Object
    }
}
