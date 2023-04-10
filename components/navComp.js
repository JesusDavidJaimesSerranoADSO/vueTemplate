export default {
    name: "my-nav",
    template: /*html*/`
    <nav>
    <img :src="config.imagen1" alt=""> 
    <ul>
        <li><a href="#" v-text="config.enlaces[0]"></a></li>
        <li><a href="#" v-text="config.enlaces[1]"></a></li>
        <li><a href="#"v-text="config.enlaces[2]">Contact us</a></li>
    </ul>
    <a href="#" v-text="config.enlaces[3]"></a>
    </nav>
`,
    props: {
        config: Object
    }
}