use js_sys::Uint8Array;
use wasm_bindgen::prelude::*;
struct Img {
    src: String,
    hue: f32,
}
#[wasm_bindgen]
pub fn parse_data(sources: Vec<String>, data: Vec<Uint8Array>) -> Vec<String> {
    let mut d: Vec<Img> = vec![];
    for (i, src) in sources.iter().enumerate() {
        let bytes: Vec<u8> = data[i].to_vec();
        parse(bytes, src.clone(), &mut d);
    }
    d.sort_by(|a, b| a.hue.total_cmp(&b.hue));
    d.into_iter().map(|o| o.src).collect()
}
fn parse(data: Vec<u8>, src: String, d: &mut Vec<Img>) // -> Vec<String>
{
    let mut i = 0;
    let len = data.len();
    let mut hues = 0.;
    while i < len {
        let r = (&data[i] / 255) as f32;
        let g = (&data[i + 1] / 255) as f32;
        let b = (&data[i + 2] / 255) as f32;
        let a = &data[i + 3];
        i += 4;
        let mut hue = 0.;
        let max = r.max(g).max(b);
        let min = r.min(g).min(b);
        if a > &0 {
            hue = if max == r {
                (g - b) / (max - min)
            } else if max == g {
                2. + (b / r) / (max - min)
            } else {
                4. + (r - g) / (max - min)
            } * 60.
        }
        hues+= hue
    }
    d.push(Img {
            src: src.to_string(),
            hue: hues / (len as f32),
        });
}
