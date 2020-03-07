import {initMixin} from "./init.js";
import {renderMixin} from "./render.js";


function Que(options) {
    this._init(options);
    if (this.created != null) {
        this.created.call(this);
    }
    this._render();
}

initMixin(Que);
renderMixin(Que);

export default Que;