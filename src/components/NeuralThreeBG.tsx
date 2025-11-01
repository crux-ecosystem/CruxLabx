"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeuralThreeBG() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const cleanupRef = useRef<() => void>();

	useEffect(() => {
		if (!containerRef.current) return;
		const width = containerRef.current.clientWidth;
		const height = containerRef.current.clientHeight;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
		camera.position.set(0, 0, 120);

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(width, height);
		renderer.setClearColor(0x000000, 0);
		containerRef.current.appendChild(renderer.domElement);

		const particles = 1000;
		const geometry = new THREE.BufferGeometry();
		const positions = new Float32Array(particles * 3);
		for (let i = 0; i < particles; i++) {
			positions[i * 3 + 0] = (Math.random() - 0.5) * 300;
			positions[i * 3 + 1] = (Math.random() - 0.5) * 180;
			positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
		}
		geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

		const material = new THREE.PointsMaterial({
			size: 1.6,
			sizeAttenuation: true,
			color: new THREE.Color(0x66fcf1),
			transparent: true,
			opacity: 0.5,
		});
		const points = new THREE.Points(geometry, material);
		scene.add(points);

		let raf = 0;
		const animate = () => {
			points.rotation.y += 0.0009;
			points.rotation.x += 0.0004;
			renderer.render(scene, camera);
			raf = requestAnimationFrame(animate);
		};
		animate();

		const onResize = () => {
			if (!containerRef.current) return;
			const w = containerRef.current.clientWidth;
			const h = containerRef.current.clientHeight;
			renderer.setSize(w, h);
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
		};
		window.addEventListener("resize", onResize);

		cleanupRef.current = () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", onResize);
			geometry.dispose();
			material.dispose();
			renderer.dispose();
			if (renderer.domElement.parentNode) {
				renderer.domElement.parentNode.removeChild(renderer.domElement);
			}
		};

		return () => cleanupRef.current?.();
	}, []);

	return <div ref={containerRef} className="pointer-events-none absolute inset-0 -z-10" />;
}
