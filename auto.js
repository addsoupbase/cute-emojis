//Auto imports images
try {
   const all = await Array.fromAsync(Deno.readDir('./emojis'), o => o.name)
   await Deno.writeTextFile('./emojis.json', JSON.stringify(all))
   console.log(`✅ Successfully wrote output (${all.length} emojis) to emojis.json`)
}
catch (e) {
   console.log('❌ Could not write output. Error is shown below')
   reportError(e)
}