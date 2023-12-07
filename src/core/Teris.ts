
import { SquareGroup } from "./SquareGroup";
import { IPoint, Shape } from "./types";
import { getRandom } from "./util";

/**
 * 俄罗斯方法的语义层面上的位置
 */


export const TShape: Shape = [
    {x: -2,y: 0},
    {x: -1,y: 0},
    {x: 0,y: 0},
    {x: 1,y: 0},
]

export const LShape: Shape = [
    { x: -2, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: -1 }
];

export const LMirrorShape: Shape = [
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: -1 }
];

export const SShape: Shape = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 1 }
];

export const SMirrorShape: Shape = [
    { x: 0, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 }
];

export const SquareShape: Shape = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 }
];

export const LineShape: Shape = [
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 }
];

export const dianShape: Shape = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
]

export const aoShape: Shape = [
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: -1 }
]

const shapes = [
    TShape,
    LShape,
    LMirrorShape,
    SShape,
    SMirrorShape,
    SquareShape,
    LineShape,
    dianShape,
    aoShape
]

const colors = [
    "red",
    "#fff",
    "green",
    "blue",
    "orange",
    "aqua"
]


/**
 * 随机产生一个俄罗斯方块（颜色随机、形状随机）
 * @param centerPoint 
 */
export function createTeris(centerPoint: IPoint) {
    const index = getRandom(0, shapes.length)
    const shape = shapes[index]
    const index1 = getRandom(0, colors.length)
    const color = colors[index1]
    return new SquareGroup(shape,centerPoint,color)
}
