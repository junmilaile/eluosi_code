
/**
 * 生成随机数
 * @param min 最小数
 * @param max 最大数
 */
export function getRandom(min: number, max: number) {
    const dec = max - min
    return Math.floor(Math.random() * dec + min)
} 