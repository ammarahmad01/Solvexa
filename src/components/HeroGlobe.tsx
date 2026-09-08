// @ts-nocheck
"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    THREE: any;
  }
}

export default function HeroGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Wait for THREE.js to load from CDN
    const waitForThree = () => {
      return new Promise<void>((resolve) => {
        if (window.THREE) {
          resolve();
          return;
        }
        const interval = setInterval(() => {
          if (window.THREE) {
            clearInterval(interval);
            resolve();
          }
        }, 50);
      });
    };

    let animFrameId: number;
    let mouseMoveHandler: (e: MouseEvent) => void;
    let resizeHandler: () => void;

    waitForThree().then(() => {
      const THREE = window.THREE;
      const width = container.clientWidth || 600;
      const height = container.clientHeight || 600;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.set(0, 0, 18);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x795290, 0.8);
      scene.add(ambientLight);

      const goldLight = new THREE.PointLight(0xffd700, 2.0, 50);
      goldLight.position.set(8, 8, 12);
      scene.add(goldLight);

      const purpleLight = new THREE.PointLight(0x8a2be2, 2.0, 50);
      purpleLight.position.set(-10, -6, 10);
      scene.add(purpleLight);

      // Core Group
      const coreGroup = new THREE.Group();
      scene.add(coreGroup);

      // 1. Geometric Frame (Icosahedron wireframe)
      const icoGeo = new THREE.IcosahedronGeometry(4.2, 2);
      const icoWireMat = new THREE.MeshPhongMaterial({
        color: 0xba8eff,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
        shininess: 60,
      });
      const icoMesh = new THREE.Mesh(icoGeo, icoWireMat);
      coreGroup.add(icoMesh);

      // Neural nodes at icosahedron vertices
      const nodeGeo = new THREE.SphereGeometry(0.08, 8, 8);
      const nodeMat = new THREE.MeshPhongMaterial({
        color: 0xffe680,
        emissive: 0xd4af37,
        emissiveIntensity: 0.4,
        shininess: 80,
      });
      const posAttr = icoGeo.attributes.position;
      const nodesGroup = new THREE.Group();
      const addedCoords = new Set<string>();
      for (let i = 0; i < posAttr.count; i += 4) {
        const x = Math.round(posAttr.getX(i) * 10) / 10;
        const y = Math.round(posAttr.getY(i) * 10) / 10;
        const z = Math.round(posAttr.getZ(i) * 10) / 10;
        const key = `${x},${y},${z}`;
        if (!addedCoords.has(key)) {
          addedCoords.add(key);
          const node = new THREE.Mesh(nodeGeo, nodeMat);
          node.position.set(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
          nodesGroup.add(node);
        }
      }
      coreGroup.add(nodesGroup);

      // 2. Orbital Rings
      const ribbonCount = 3;
      const ribbons: THREE.Mesh[] = [];
      const goldRibbonMat = new THREE.MeshPhongMaterial({
        color: 0xffd24d,
        emissive: 0xaa7c11,
        emissiveIntensity: 0.2,
        specular: 0xffffff,
        shininess: 100,
        side: THREE.DoubleSide,
      });

      for (let r = 0; r < ribbonCount; r++) {
        const curvePoints: THREE.Vector3[] = [];
        const radius = 5.2;
        for (let i = 0; i <= 64; i++) {
          const theta = (i / 64) * Math.PI * 2;
          const x = Math.cos(theta) * radius;
          const y = 0;
          const z = Math.sin(theta) * radius;
          curvePoints.push(new THREE.Vector3(x, y, z));
        }
        const curve = new THREE.CatmullRomCurve3(curvePoints, true);
        const tubeGeo = new THREE.TubeGeometry(curve, 100, 0.05, 8, true);
        const tubeMesh = new THREE.Mesh(tubeGeo, goldRibbonMat);
        tubeMesh.rotation.x = Math.PI / 2.5;
        tubeMesh.rotation.y = ((Math.PI * 2) / ribbonCount) * r;
        coreGroup.add(tubeMesh);
        ribbons.push(tubeMesh);
      }

      // 3. Central Energy Sphere
      const energyCoreGeo = new THREE.SphereGeometry(1.5, 32, 32);
      const energyCoreMat = new THREE.MeshPhongMaterial({
        color: 0x9333ea,
        emissive: 0x5b21b6,
        emissiveIntensity: 0.6,
        transparent: true,
        opacity: 0.65,
        shininess: 60,
      });
      const energyCore = new THREE.Mesh(energyCoreGeo, energyCoreMat);
      coreGroup.add(energyCore);

      // 4. Cosmic Particle Halo
      const particleCount = 300;
      const pGeo = new THREE.BufferGeometry();
      const pPositions = new Float32Array(particleCount * 3);
      const pColors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const pRadius = 6 + Math.random() * 12;
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const sinPhi = Math.sin(phi);

        pPositions[i3] = pRadius * sinPhi * Math.cos(theta);
        pPositions[i3 + 1] = pRadius * sinPhi * Math.sin(theta);
        pPositions[i3 + 2] = pRadius * Math.cos(phi);

        if (Math.random() > 0.45) {
          pColors[i3] = 1.0;
          pColors[i3 + 1] = 0.84;
          pColors[i3 + 2] = 0.25;
        } else {
          pColors[i3] = 0.75;
          pColors[i3 + 1] = 0.52;
          pColors[i3 + 2] = 0.98;
        }
      }

      pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
      pGeo.setAttribute("color", new THREE.BufferAttribute(pColors, 3));

      const pMat = new THREE.PointsMaterial({
        size: 0.06,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });
      const particleSystem = new THREE.Points(pGeo, pMat);
      scene.add(particleSystem);

      // Mouse interaction — cursor direction drives rotation
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      mouseMoveHandler = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        mouseX = (event.clientX - cx) / (rect.width / 2);
        mouseY = (event.clientY - cy) / (rect.height / 2);
      };
      window.addEventListener("mousemove", mouseMoveHandler);

      resizeHandler = () => {
        const w = container.clientWidth || 600;
        const h = container.clientHeight || 600;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", resizeHandler);

      // Animation Loop
      const clock = new THREE.Clock();
      function animate() {
        animFrameId = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        // Smooth mouse damping
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        // Globe rotation follows cursor direction
        coreGroup.rotation.y = elapsed * 0.15 + targetX * 0.4;
        coreGroup.rotation.x = Math.sin(elapsed * 0.2) * 0.05 - targetY * 0.3;

        icoMesh.rotation.y = -elapsed * 0.1;
        icoMesh.rotation.z = elapsed * 0.05;

        ribbons.forEach((ribbon) => {
          ribbon.rotation.y += 0.005;
        });

        particleSystem.rotation.y = elapsed * 0.02 + targetX * 0.1;
        particleSystem.rotation.x =
          Math.cos(elapsed * 0.03) * 0.03 - targetY * 0.1;

        const scale = 1 + Math.sin(elapsed * 1.2) * 0.02;
        energyCore.scale.set(scale, scale, scale);

        renderer.render(scene, camera);
      }
      animate();
    });

    return () => {
      cancelAnimationFrame(animFrameId);
      if (mouseMoveHandler) window.removeEventListener("mousemove", mouseMoveHandler);
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      // Clean up renderer DOM element
      if (container) {
        const canvas = container.querySelector("canvas");
        if (canvas) container.removeChild(canvas);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
