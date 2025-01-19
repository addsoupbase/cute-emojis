//Auto imports images
let time = performance.now()
try {
   const all = await Array.fromAsync(Deno.readDir('./emojis'), map)
   await Deno.writeTextFile('./emojis.json', JSON.stringify(all))
   console.log(`✅ Successfully wrote output (${all.length} emojis) to emojis.json`)
}
catch (e) {
   console.log('❌ Could not write output. Error is shown below:')
   reportError(e)
}
finally {
   console.log(`⏰ Operation completed after ${performance.now() - time} ms`)
}
function map({name}) {
   return name
}