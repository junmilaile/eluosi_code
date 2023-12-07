import { SquareGroup } from "./core/SquareGroup";
import { createTeris } from "./core/Teris";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery"

const teris = createTeris({x: 10, y: 5})

teris.squares.forEach(sq => {
    sq.viewer = new SquarePageViewer(sq, $("#root"));
})

// setInterval(() => {
//     $(".bottom").click()
// },1000)

$(".bottom").click(function () {
    //更改中心点坐标
    teris.centerPoint = {
        x: teris.centerPoint.x,
        y: teris.centerPoint.y + 1
    }
})
$(".top").click(function () {
    //更改中心点坐标
    teris.centerPoint = {
        x: teris.centerPoint.x,
        y: teris.centerPoint.y - 1
    }
})

$(".left").click(function () {
    //更改中心点坐标
    teris.centerPoint = {
        x: teris.centerPoint.x - 1,
        y: teris.centerPoint.y
    }
})

$(".right").click(function () {
    //更改中心点坐标
    teris.centerPoint = {
        x: teris.centerPoint.x + 1,
        y: teris.centerPoint.y
    }
})