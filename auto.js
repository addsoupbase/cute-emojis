//Auto import images
let all = JSON.stringify(await Array.fromAsync(Deno.readDir('./emojis'),o=>o.name))
Deno.writeTextFile('./emojis.json',all)