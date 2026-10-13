import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // Group for the 3D Vacuum Tube
    const tubeGroup = new THREE.Group();
    scene.add(tubeGroup);

    // 1. Glass Envelope (transparent cylinder + rounded dome)
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.28,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.9,
      ior: 1.5,
      reflectivity: 0.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    const cylinderGeo = new THREE.CylinderGeometry(1.2, 1.2, 3.2, 32, 1, true);
    const glassCylinder = new THREE.Mesh(cylinderGeo, glassMaterial);
    tubeGroup.add(glassCylinder);

    const domeGeo = new THREE.SphereGeometry(1.2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const glassDome = new THREE.Mesh(domeGeo, glassMaterial);
    glassDome.position.y = 1.6;
    tubeGroup.add(glassDome);

    // Glass tip / seal
    const tipGeo = new THREE.ConeGeometry(0.2, 0.4, 16);
    const glassTip = new THREE.Mesh(tipGeo, glassMaterial);
    glassTip.position.y = 2.8;
    tubeGroup.add(glassTip);

    // 2. Bakelite Base
    const baseGeo = new THREE.CylinderGeometry(1.25, 1.25, 0.9, 32);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x3B3833,
      roughness: 0.7,
      metalness: 0.2,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMaterial);
    baseMesh.position.y = -2.05;
    tubeGroup.add(baseMesh);

    // 3. Coral / Copper Connection Pins
    const pinGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.7, 16);
    const pinMaterial = new THREE.MeshStandardMaterial({
      color: 0xE05D4F,
      roughness: 0.3,
      metalness: 0.8,
    });

    const pinAngles = [0, 45, 90, 135, 180, 225, 270, 315];
    pinAngles.forEach((deg) => {
      const rad = (deg * Math.PI) / 180;
      const pin = new THREE.Mesh(pinGeo, pinMaterial);
      pin.position.set(Math.cos(rad) * 0.75, -2.7, Math.sin(rad) * 0.75);
      tubeGroup.add(pin);
    });

    // 4. Internal Anode Plate (Nickel structure)
    const plateGeo = new THREE.CylinderGeometry(0.8, 0.8, 2.0, 16, 1, true);
    const plateMaterial = new THREE.MeshStandardMaterial({
      color: 0x56504A,
      roughness: 0.5,
      metalness: 0.8,
      side: THREE.DoubleSide,
    });
    const plateMesh = new THREE.Mesh(plateGeo, plateMaterial);
    plateMesh.position.y = 0.2;
    tubeGroup.add(plateMesh);

    // 5. Getter Flash (Mirror chrome at the top dome)
    const getterGeo = new THREE.SphereGeometry(1.15, 32, 16, 0, Math.PI * 2, 0, Math.PI / 3);
    const getterMaterial = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      roughness: 0.1,
      metalness: 0.95,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.75,
    });
    const getterMesh = new THREE.Mesh(getterGeo, getterMaterial);
    getterMesh.position.y = 1.6;
    tubeGroup.add(getterMesh);

    // 6. Glowing Cathode Filament
    const filamentGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.8, 16);
    const filamentMaterial = new THREE.MeshBasicMaterial({
      color: 0xEA7262,
    });
    const filamentMesh = new THREE.Mesh(filamentGeo, filamentMaterial);
    filamentMesh.position.y = 0.2;
    tubeGroup.add(filamentMesh);

    // Internal Point Light (Coral/Amber Glow)
    const tubeLight = new THREE.PointLight(0xE05D4F, 3.2, 5);
    tubeLight.position.set(0, 0.2, 0);
    tubeGroup.add(tubeLight);

    // Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xFFF8F0, 0.75);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xFFF8F0, 1.5);
    dirLight.position.set(4, 5, 4);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0x617290, 1.2);
    rimLight.position.set(-4, -2, -4);
    scene.add(rimLight);

    // Interactive Drag & Rotation State
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationY = 0.3;
    let targetRotationX = 0.15;

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging) {
        // Subtle tilt on mouse move
        const rect = currentMount.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / width) * 2 - 1;
        const mouseY = -(((e.clientY - rect.top) / height) * 2 - 1);
        targetRotationY = mouseX * 0.6;
        targetRotationX = -mouseY * 0.4 + 0.1;
        return;
      }
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.01;
      targetRotationX += deltaY * 0.01;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Continuous gentle idle spin if not dragging
      if (!isDragging) {
        tubeGroup.rotation.y += (targetRotationY + Math.sin(elapsedTime * 0.8) * 0.15 - tubeGroup.rotation.y) * 0.05;
        tubeGroup.rotation.x += (targetRotationX + Math.cos(elapsedTime * 0.6) * 0.08 - tubeGroup.rotation.x) * 0.05;
      } else {
        tubeGroup.rotation.y += (targetRotationY - tubeGroup.rotation.y) * 0.1;
        tubeGroup.rotation.x += (targetRotationX - tubeGroup.rotation.x) * 0.1;
      }

      // Filament intensity pulsation
      tubeLight.intensity = 2.4 + Math.sin(elapsedTime * 4) * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElem.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute bottom-2 right-3 text-[10px] font-mono text-chassis-600 bg-chassis-950/80 px-2 py-0.5 rounded border border-chassis-800 pointer-events-none">
        3D VACUUM TUBE // INTERACTIVE DRAG
      </div>
    </div>
  );
};
