
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Book3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Set up scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f4f0);
    
    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75, 
      mountRef.current.clientWidth / mountRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    // Create book cover (cuboid)
    const bookGeometry = new THREE.BoxGeometry(3, 4, 0.5);
    
    // Create materials for different sides of the book
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x1a56db }), // Right side
      new THREE.MeshStandardMaterial({ color: 0x1a56db }), // Left side
      new THREE.MeshStandardMaterial({ color: 0x0e3fa9 }), // Top side
      new THREE.MeshStandardMaterial({ color: 0x0e3fa9 }), // Bottom side
      new THREE.MeshStandardMaterial({ 
        color: 0x3b82f6,
        roughness: 0.2,
        metalness: 0.1
      }), // Front cover
      new THREE.MeshStandardMaterial({ color: 0x1e40af }) // Back cover
    ];
    
    const book = new THREE.Mesh(bookGeometry, materials);
    scene.add(book);
    
    // Create text on the book cover
    const loader = new THREE.TextureLoader();
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    if (context) {
      canvas.width = 512;
      canvas.height = 512;
      
      context.fillStyle = '#3b82f6';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      context.font = 'bold 60px Poppins, sans-serif';
      context.textAlign = 'center';
      context.fillStyle = 'white';
      context.fillText('TEACHER', canvas.width/2, canvas.height/2 - 50);
      context.fillText('PORTFOLIO', canvas.width/2, canvas.height/2 + 50);
      
      const texture = new THREE.CanvasTexture(canvas);
      materials[4] = new THREE.MeshStandardMaterial({ 
        map: texture,
        roughness: 0.2,
        metalness: 0.1
      });
      
      book.material = materials;
    }
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      
      book.rotation.y += 0.003;
      book.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  return <div ref={mountRef} className="w-full h-[400px] rounded-lg"></div>;
};

export default Book3D;
