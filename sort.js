import { jason } from '../../addsoupbase.github.io/arrays.js'
import {rgbToHex} from '../../addsoupbase.github.io/color.js'
import *as math from '../../addsoupbase.github.io/num.js'
console.log("Loading...")
let ctx = new OffscreenCanvas(0, 0)
    .getContext('2d', { willReadFrequently: true })
Object.assign(ctx, {
    imageSmoothingEnabled: true,
    imageSmoothingQuality: 'high'
})
let averages = new Map
async function map(src) {
    let img = new Image
    img.src = `./emojis/${src}`
    await img.decode()
    return img
}
let data = await Array.fromAsync(
    await jason('./emojis.json')
    // ['1314222105394679858.webp']
    , map)
data.forEach(pixelStuff)
console.log(p.textContent = `Images ready!`)
function pixelStuff(image) {
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
        let color = rgbToHex(r, g, b, a)
        let amount = parseInt(`${color}`.slice(1), 16)
        all.push(amount)
    }
    averages.set(image.src.split('/').at(-1), math.average(...all))
}
let e = new Map([...averages.entries()].sort((a, b) => a[1] - b[1]))
let json = JSON.stringify([...e.keys()])
a.textContent = 'Download'
a.download = 'emojis.json'
a.href = URL.createObjectURL(new Blob([json]))