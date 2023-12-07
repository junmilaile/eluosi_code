import { IPoint,  IViewer } from "./types";

/**
 * 一个一个小方块的类
 */
export class Square{
   
    private _point: IPoint = {
        x: 0,
        y: 0
    }
    private _color: string = ""
    /**
     * 显示者，控制是否显示
     */
    private _viewer?: IViewer

    get viewer() {
        return this._viewer
    }
    set viewer(val) {
        this._viewer = val
        if(val) {
            val.show()
        }
    }

    get point() {
        return this._point
    }
    set point(val) {
        this._point = val
        // 完成显示
        if(this._viewer) {
            this._viewer.show()
        }
    }
    get color() {
        return this._color
    }
    set color(val) {
        this._color = val
        return
    }
}