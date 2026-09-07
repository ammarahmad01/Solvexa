/* ============================================= */
/* Solvexa 3D Agency — Three.js Hero Scene      */
/* & Interactive Behaviors                       */
/* ============================================= */

(function() {
  'use strict';

  // =========================================
  // 1. THREE.JS HERO 3D SCENE
  // =========================================
  function initHeroScene() {
    const container = document.getElementById('threejs-hero-container');
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting — rich metallic gold and deep violet sheen
    const ambientLight = new THREE.AmbientLight(0x28124d, 1.8);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xffdf78, 3.2);
    goldKeyLight.position.set(8, 10, 12);
    scene.add(goldKeyLight);

    const goldFillLight = new THREE.PointLight(0xd4af37, 2.5, 30);
    goldFillLight.position.set(-6, -4, 8);
    scene.add(goldFillLight);

    const violetRimLight = new THREE.PointLight(0x8a2be2, 3.5, 40);
    violetRimLight.position.set(4, -8, -6);
    scene.add(violetRimLight);

    const centerLuminance = new THREE.PointLight(0xffeedd, 1.2, 15);
    centerLuminance.position.set(0, 0, 0);
    scene.add(centerLuminance);

    // Master Dual-Core Group
    const dualCoreGroup = new THREE.Group();
    scene.add(dualCoreGroup);

    // 1. Dark-Violet Wireframe Neural Polyhedron
    const polyGeo = new THREE.IcosahedronGeometry(3.6, 2);
    const polyMat = new THREE.MeshPhongMaterial({
      color: 0x241042,
      emissive: 0x481885,
      emissiveIntensity: 0.65,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
      shininess: 90
    });
    const polyhedron = new THREE.Mesh(polyGeo, polyMat);
    dualCoreGroup.add(polyhedron);

    // Inner crystalline core
    const innerCoreGeo = new THREE.OctahedronGeometry(1.6, 1);
    const innerCoreMat = new THREE.MeshPhongMaterial({
      color: 0x160833,
      emissive: 0x6a1b9a,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.8,
      shininess: 120
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    dualCoreGroup.add(innerCore);

    // Neural Vertex Node Spheres (gold dots on wireframe)
    const nodeGeo = new THREE.SphereGeometry(0.08, 10, 10);
    const nodeMat = new THREE.MeshPhongMaterial({
      color: 0xfde047,
      emissive: 0xd4af37,
      emissiveIntensity: 0.9,
      shininess: 100
    });
    const pos = polyGeo.attributes.position;
    const nodesGroup = new THREE.Group();
    const visited = new Set();
    for (let i = 0; i < pos.count; i += 3) {
      const x = Math.round(pos.getX(i) * 10) / 10;
      const y = Math.round(pos.getY(i) * 10) / 10;
      const z = Math.round(pos.getZ(i) * 10) / 10;
      const key = `${x},${y},${z}`;
      if (!visited.has(key)) {
        visited.add(key);
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        node.position.set(pos.getX(i), pos.getY(i), pos.getZ(i));
        nodesGroup.add(node);
      }
    }
    dualCoreGroup.add(nodesGroup);

    // 2. Flowing Liquid-Gold Ribbons (Torus Trefoils via CatmullRom Curves)
    const ribbonCount = 2;
    const ribbons = [];
    const goldMaterial = new THREE.MeshPhongMaterial({
      color: 0xf5cf47,
      emissive: 0x8a6508,
      emissiveIntensity: 0.45,
      specular: 0xffffff,
      shininess: 160,
      side: THREE.DoubleSide
    });

    for (let r = 0; r < ribbonCount; r++) {
      const points = [];
      const total = 140;
      const loops = 2;
      const radius = 4.3 + r * 0.5;
      for (let i = 0; i <= total; i++) {
        const t = (i / total) * Math.PI * 2 * loops;
        const p = (i / total) * Math.PI * 2;
        const px = Math.cos(t) * (radius + Math.sin(p * 3 + r * 1.5) * 0.9);
        const py = Math.sin(t * 1.2 + r) * 2.2;
        const pz = Math.sin(t) * (radius + Math.cos(p * 2) * 0.9);
        points.push(new THREE.Vector3(px, py, pz));
      }
      const path = new THREE.CatmullRomCurve3(points, true);
      const tubeGeo = new THREE.TubeGeometry(path, 160, 0.16 + r * 0.05, 12, true);
      const ribbonMesh = new THREE.Mesh(tubeGeo, goldMaterial);
      ribbonMesh.rotation.x = r * 1.2;
      ribbonMesh.rotation.y = r * 0.6;
      dualCoreGroup.add(ribbonMesh);
      ribbons.push(ribbonMesh);
    }

    // 3. Orbital Dust Halo (micro gold/violet embers)
    const particleCount = 280;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    const pCol = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const rad = 4.8 + Math.random() * 5.2;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      pPos[i3] = rad * Math.sin(phi) * Math.cos(theta);
      pPos[i3 + 1] = rad * Math.sin(phi) * Math.sin(theta);
      pPos[i3 + 2] = rad * Math.cos(phi);

      if (Math.random() > 0.4) {
        pCol[i3] = 0.98;     // Gold
        pCol[i3 + 1] = 0.82;
        pCol[i3 + 2] = 0.32;
      } else {
        pCol[i3] = 0.72;     // Soft Violet
        pCol[i3 + 1] = 0.48;
        pCol[i3 + 2] = 0.95;
      }
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Mouse Parallax Interaction
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    function handleMove(e) {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX = (e.clientX - cx) / (rect.width / 2);
      mouseY = (e.clientY - cy) / (rect.height / 2);
    }
    window.addEventListener('mousemove', handleMove);

    // Resize Handler
    function handleResize() {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener('resize', handleResize);

    // Render Loop
    const clock = new THREE.Clock();
    function renderScene() {
      requestAnimationFrame(renderScene);
      const elapsed = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      dualCoreGroup.rotation.y = elapsed * 0.22 + targetX * 0.45;
      dualCoreGroup.rotation.x = Math.sin(elapsed * 0.25) * 0.1 - targetY * 0.3;

      polyhedron.rotation.y = -elapsed * 0.15;
      innerCore.rotation.x = elapsed * 0.6;
      innerCore.rotation.y = elapsed * 0.8;

      ribbons.forEach((r, idx) => {
        r.rotation.y += 0.007 * (idx + 1);
        r.rotation.z += 0.004 * (idx === 0 ? 1 : -1);
      });

      particles.rotation.y = elapsed * 0.03;

      renderer.render(scene, camera);
    }
    renderScene();
  }

  // =========================================
  // 2. SMOOTH SCROLL FOR ANCHOR LINKS
  // =========================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // =========================================
  // 3. ACTIVE NAV STATE ON SCROLL
  // =========================================
  function initActiveNavTracking() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[data-path]');
    
    if (sections.length === 0 || navLinks.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const path = link.getAttribute('data-path');
            if (path === id) {
              link.classList.add('bg-surface-container-highest', 'text-primary', 'font-semibold');
              link.classList.add('shadow-[inset_0_1px_1px_rgba(242,202,80,0.2)]');
              link.classList.remove('text-on-surface-variant');
            } else {
              link.classList.remove('bg-surface-container-highest', 'text-primary', 'font-semibold');
              link.classList.remove('shadow-[inset_0_1px_1px_rgba(242,202,80,0.2)]');
              link.classList.add('text-on-surface-variant');
            }
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(section => observer.observe(section));
  }

  // =========================================
  // 4. SCROLL REVEAL ANIMATIONS
  // =========================================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-section');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  }

  // =========================================
  // 5. CONTACT FORM HANDLING
  // =========================================
  function initFormHandling() {
    const form = document.getElementById('solvexa-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const feedback = document.getElementById('form-feedback');
      if (feedback) {
        feedback.classList.remove('hidden');
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  // =========================================
  // 6. MOBILE MENU TOGGLE
  // =========================================
  function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // =========================================
  // INIT ALL
  // =========================================
  document.addEventListener('DOMContentLoaded', () => {
    initHeroScene();
    initSmoothScroll();
    initActiveNavTracking();
    initScrollReveal();
    initFormHandling();
    initMobileMenu();
  });

})();
