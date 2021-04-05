import { GUI } from "three/examples/jsm/libs/dat.gui.module.js";


class MyGui {
    constructor() {
        this.bind()
    }

    start() {
        this.gui = new GUI();
    }

    bind() {
        this.start = this.start.bind(this)
    }
}


const _instance = new MyGui
export default _instance