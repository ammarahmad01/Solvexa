const fs = require('fs');
const path = require('path');

const legacyPath = path.join(__dirname, '_legacy_html', 'index.html');
const pagePath = path.join(__dirname, 'src', 'app', 'page.tsx');

let html = fs.readFileSync(legacyPath, 'utf-8');

// Extract body content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
  console.error("Could not find body tag");
  process.exit(1);
}

let bodyContent = bodyMatch[1];

// Convert class to className
bodyContent = bodyContent.replace(/class=/g, 'className=');

// Fix self-closing tags and specific attributes for JSX
bodyContent = bodyContent.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
bodyContent = bodyContent.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
bodyContent = bodyContent.replace(/<br>/g, '<br />');
bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
bodyContent = bodyContent.replace(/viewbox/g, 'viewBox');
bodyContent = bodyContent.replace(/preserveaspectratio/g, 'preserveAspectRatio');
bodyContent = bodyContent.replace(/stroke-linecap/g, 'strokeLinecap');
bodyContent = bodyContent.replace(/stroke-width/g, 'strokeWidth');
bodyContent = bodyContent.replace(/stroke-dasharray/g, 'strokeDasharray');
bodyContent = bodyContent.replace(/stroke-opacity/g, 'strokeOpacity');
bodyContent = bodyContent.replace(/stop-color/g, 'stopColor');
bodyContent = bodyContent.replace(/stop-opacity/g, 'stopOpacity');
bodyContent = bodyContent.replace(/lineargradient/g, 'linearGradient');

// Remove scripts and put them in a separate client component
let script1 = '';
let script2 = '';

const scriptMatch1 = bodyContent.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch1) {
  script1 = scriptMatch1[1];
  bodyContent = bodyContent.replace(/<script>([\s\S]*?)<\/script>/, '');
}

const scriptMatch2 = bodyContent.match(/<script src="https:\/\/ajax.googleapis.com\/ajax\/libs\/threejs\/r125\/three.min.js"><\/script>\s*<div id="threejs-container-ANIMATION_3" style="width:100%;height:100%"><\/div>\s*<script>([\s\S]*?)<\/script>/);

if (scriptMatch2) {
  script2 = scriptMatch2[1];
  // We keep the container but remove the script tags
  bodyContent = bodyContent.replace(/<script src="https:\/\/ajax.googleapis.com\/ajax\/libs\/threejs\/r125\/three.min.js"><\/script>\s*<div id="threejs-container-ANIMATION_3" style="width:100%;height:100%"><\/div>\s*<script>([\s\S]*?)<\/script>/, '<div id="threejs-container-ANIMATION_3" style={{width:"100%",height:"100%"}}></div>');
}

// Convert inline styles
bodyContent = bodyContent.replace(/style="display:block;"/g, 'style={{display:"block"}}');
bodyContent = bodyContent.replace(/style="display:block;width:100%;height:100%"/g, 'style={{display:"block", width:"100%", height:"100%"}}');

// Create the page component
const pageTsx = `
import Script from 'next/script';
import Animations from '../components/Animations';

export default function Home() {
  return (
    <>
      <Script src="https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js" strategy="beforeInteractive" />
      <Animations />
      ${bodyContent}
    </>
  );
}
`;

fs.writeFileSync(pagePath, pageTsx);

// Create Animations component
const animDir = path.join(__dirname, 'src', 'components');
if (!fs.existsSync(animDir)) fs.mkdirSync(animDir, { recursive: true });

const animTsx = `"use client";
import { useEffect } from 'react';

export default function Animations() {
  useEffect(() => {
    let animationFrameId1: number;
    let animationFrameId2: number;
    
    // WebGL Shader Animation
    try {
      ${script1.replace(/requestAnimationFrame\(render\)/g, 'animationFrameId1 = requestAnimationFrame(render)')}
    } catch(e) { console.error(e) }
    
    // Three.js Animation
    try {
      ${script2.replace(/requestAnimationFrame\(animate\)/g, 'animationFrameId2 = requestAnimationFrame(animate)')}
    } catch(e) { console.error(e) }
    
    return () => {
      cancelAnimationFrame(animationFrameId1);
      cancelAnimationFrame(animationFrameId2);
    };
  }, []);
  
  return null;
}
`;

fs.writeFileSync(path.join(animDir, 'Animations.tsx'), animTsx);

console.log('Migration completed successfully');
