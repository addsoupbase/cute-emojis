import c from '../../addsoupbase.github.io/color.js'
import *as math from '../../addsoupbase.github.io/num.js'
console.log("Loading...")
let ctx = new OffscreenCanvas(0, 0)
    .getContext('2d', { willReadFrequently: true })
Object.assign(ctx, {
    imageSmoothingEnabled: true,
    imageSmoothingQuality: 'high'
})
let averages = new Map

let { length: len } = data
data.forEach(pixelStuff)
function pixelStuff(image, i) {
    let { width, height } = image
    Object.assign(ctx.canvas, {
        width,
        height
    })
    ctx.drawImage(image, 0, 0,)
    let all = []
    let imgdata = ctx.getImageData(0, 0, width, height)
    let pixeldata = imgdata.data
    for (let i = 0, { length } = pixeldata; i < length; i += 4) {
        let r = pixeldata[i]
        let g = pixeldata[i + 1]
        let b = pixeldata[i + 2]
        let a = pixeldata[i + 3]
        if (!r && !g && !b && !a) continue
        let color = c(r, g, b, a)
        let amount = parseInt(`${color}`.slice(1), 16)
        all.push(amount)
    }
    averages.set(image.src.split('/').at(-1), math.average(...all))
    // ctx.putImageData(imgdata,0,0)
    // console.log(URL.createObjectURL(await ctx.canvas.convertToBlob()))
}
let e = new Map([...averages.entries()].sort((a, b) => a[1] - b[1]))