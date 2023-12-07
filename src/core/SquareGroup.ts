import { Square } from "./Square";
import { IPoint, Shape } from "./types";


export class SquareGroup {
    private _squares: readonly Square[];

    constructor(
        private _shape: Shape,
        private _centerPoint: IPoint,
        private _color: string
    ){
        const arr: Square[] = [];
        
        this._shape.forEach((item,index) => {
            const sq = new Square()
            sq.point = {
                x: this._centerPoint.x + item.x,
                y: this._centerPoint.y + item.y
            }    
            sq.color = this._color
            arr.push(sq)
        })
        this._squares = arr
    }

    public set centerPoint(v: IPoint) {
        this._centerPoint = v;
        //同时设置所有小方块对象的坐标
        this._shape.forEach((p, i) => {
            this._squares[i].point = {
                x: this._centerPoint.x + p.x,
                y: this._centerPoint.y + p.y
            }
        })
    }

    public get squares() {
        return this._squares;
    }

    public get centerPoint(): IPoint {
        return this._centerPoint;
    }
}