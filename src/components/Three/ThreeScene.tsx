'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './ThreeScene.module.scss';

export const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 1. Satellite A: Right Floating Cybernetic Octahedron (framing the side, not covering face)
    const satAGeometry = new THREE.OctahedronGeometry(11, 0);
    const satAMaterial = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    const satAMesh = new THREE.Mesh(satAGeometry, satAMaterial);
    satAMesh.position.set(44, 10, -10);
    scene.add(satAMesh);

    // 2. Satellite B: Left Floating Cybernetic Dodecahedron (framing the side)
    const satBGeometry = new THREE.DodecahedronGeometry(10, 0);
    const satBMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.24
    });
    const satBMesh = new THREE.Mesh(satBGeometry, satBMaterial);
    satBMesh.position.set(-44, -10, -12);
    scene.add(satBMesh);

    // 3. Deep Background Matrix Polyhedron (far in the back at z: -55, never near face)
    const deepGeometry = new THREE.IcosahedronGeometry(20, 1);
    const deepMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    const deepMesh = new THREE.Mesh(deepGeometry, deepMaterial);
    deepMesh.position.set(0, 4, -55);
    scene.add(deepMesh);

    // 4. 3D Particle Constellation / Starfield (framing around portrait, leaving face clean)
    const particleCount = 280;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const lime = new THREE.Color(0x34d399);
    const emerald = new THREE.Color(0x10b981);
    const cyan = new THREE.Color(0x06b6d4);
    const white = new THREE.Color(0xffffff);

    let placed = 0;
    while (placed < particleCount) {
      const px = (Math.random() - 0.5) * 260;
      const py = (Math.random() - 0.5) * 180;
      const pz = (Math.random() - 0.5) * 120;

      // Ensure face zone has clear visibility
      if (Math.abs(px) < 22 && Math.abs(py) < 32 && pz > -25) {
        continue;
      }

      positions[placed * 3] = px;
      positions[placed * 3 + 1] = py;
      positions[placed * 3 + 2] = pz;

      const rand = Math.random();
      const mixed = rand > 0.6 ? emerald : rand > 0.3 ? cyan : rand > 0.1 ? lime : white;
      colors[placed * 3] = mixed.r;
      colors[placed * 3 + 1] = mixed.g;
      colors[placed * 3 + 2] = mixed.b;

      placed++;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Mouse Tracking for 3D Camera Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.04;
      mouseY = (e.clientY - windowHalfY) * 0.04;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation toward mouse
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 0.4;
      camera.position.y = -targetY * 0.4;
      camera.lookAt(0, 0, 0);

      // Rotate Satellites in 3D orbit
      satAMesh.rotation.x = elapsedTime * 0.22;
      satAMesh.rotation.y = elapsedTime * 0.18;
      satAMesh.position.y = 10 + Math.sin(elapsedTime * 0.8) * 3;

      satBMesh.rotation.x = -elapsedTime * 0.18;
      satBMesh.rotation.z = elapsedTime * 0.2;
      satBMesh.position.y = -10 + Math.cos(elapsedTime * 0.7) * 3;

      // Deep background mesh
      deepMesh.rotation.y = elapsedTime * 0.05;
      deepMesh.rotation.x = elapsedTime * 0.03;

      // Slow drift on particle system
      particleSystem.rotation.y = elapsedTime * 0.012;
      particleSystem.rotation.x = elapsedTime * 0.006;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      satAGeometry.dispose();
      satAMaterial.dispose();
      satBGeometry.dispose();
      satBMaterial.dispose();
      deepGeometry.dispose();
      deepMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className={styles.threeCanvas} aria-hidden="true" />;
};
