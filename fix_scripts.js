const fs = require('fs');

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf-8');
let animationsContent = fs.readFileSync('src/components/Animations.tsx', 'utf-8');

// Find all script src tags and remove them
pageContent = pageContent.replace(/<script src="[^"]*"><\/script>/g, '');

// Find all inline scripts
let scripts = [];
let match;
const scriptRegex = /<script>([\s\S]*?)<\/script>/g;
while ((match = scriptRegex.exec(pageContent)) !== null) {
  scripts.push(match[1]);
}

// Remove the inline scripts from page
pageContent = pageContent.replace(/<script>[\s\S]*?<\/script>/g, '');

// Remove style="width:100%;height:100%" since it breaks React
pageContent = pageContent.replace(/style="width:100%;height:100%"/g, 'style={{width:"100%", height:"100%"}}');

fs.writeFileSync('src/app/page.tsx', pageContent);

// Append the scripts to Animations.tsx
if (scripts.length > 0) {
  let extraScripts = scripts.map((s, idx) => {
    return `
    try {
      ${s.replace(/requestAnimationFrame\(animate\)/g, 'requestAnimationFrame(() => {})')}
    } catch(e) { console.error(e); }
    `;
  }).join('\n');
  
  // Just inject into the useEffect body
  animationsContent = animationsContent.replace('// Three.js Animation', '// Three.js Animation\n' + extraScripts);
  fs.writeFileSync('src/components/Animations.tsx', animationsContent);
}
