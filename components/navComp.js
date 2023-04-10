export default {
    name: "my-nav",
    template: /*html*/`
    <nav>
    <img :src="config.imagen1" alt=""> 
    <ul>
        <li><a href="#">Services</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact us</a></li>
    </ul>
    <a href="#">Partnership program</a>
    </nav>
`,
    props: {
        config: Object
    }
}