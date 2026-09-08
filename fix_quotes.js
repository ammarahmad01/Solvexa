const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf-8');
c = c.replace(/>\s*"([^"]+)"\s*</g, '>&quot;$1&quot;<');
fs.writeFileSync('src/app/page.tsx', c);
