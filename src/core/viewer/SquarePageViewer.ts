import { Square } from "../Square";
import { IViewer } from "../types";
import $ from "jquery"
import PageConfig from "./PageConfig";

export class SquarePageViewer implements IViewer {

    private _dom?:JQuery<HTMLElement>
    private _isisRemove: boolean = false

    constructor(
        private _square: Square,
        private container: JQuery<HTMLElement>,
    ){

    }

    show() {
        if(this._isisRemove) {
            return
        }
        if(!this._dom) {
            this._dom = $("<div>").css({
                position: "absolute",
                width: PageConfig.SquareSize.width,
                height: PageConfig.SquareSize.height,
                border: "1px solid #ccc",
                boxSizing: "border-box"
            }).appendTo(this.container)
        }
        this._dom.css({
            left: this._square.point.x * PageConfig.SquareSize.width,
            top: this._square.point.y * PageConfig.SquareSize.height,
            background: this._square.color
        })
    }
    remove(): void {
       if(this._dom && !this._isisRemove) {
            this._dom.remove()
            this._isisRemove = true
       }
    }
}