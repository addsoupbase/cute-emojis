//Auto import images
const all = []
for await (const dir of Deno.readDir('./emojis')) {
   all.push(dir.name)
}   
Deno.writeTextFile('./emojis.json',JSON.stringify(all))