import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import Layout from "../components/Layout";
import Header from "../components/Header";
import About from "../components/About";
import Works from "../components/Works";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";

export default function App() {
  const [showLayout, setShowLayout] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.jsの基本設定
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // 背景色を黒に設定
    scene.background = new THREE.Color(0x000000);

    // フォントの設定
    const loader = new FontLoader();
    loader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (font) => {
        const textMaterials: THREE.MeshPhongMaterial[] = [];
        const textMeshes: THREE.Mesh[] = [];
        const targetPositions = [-2.5, 0, 2.5]; // "いざわ"の文字位置
        const text = "いざわ";

        // ライトを追加
        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(10, 10, 10);
        scene.add(light);

        // 文字を1文字ずつ作成
        for (let i = 0; i < text.length; i++) {
          const textGeometry = new TextGeometry(text[i], { // 修正ポイント
            font,
            size: 1,
            height: 0.2,
          });

          const textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
          const textMesh = new THREE.Mesh(textGeometry, textMaterial);

          textMesh.position.set(targetPositions[i], 10, 0); // 初期位置を上に設定
          scene.add(textMesh);

          textMaterials.push(textMaterial);
          textMeshes.push(textMesh);
        }

        // アニメーション設定
        let step = 0;
        const animate = () => {
          requestAnimationFrame(animate);

          if (step < textMeshes.length) {
            const mesh = textMeshes[step];
            mesh.position.y -= 0.2; // 徐々に下がる
            if (mesh.position.y <= 0) {
              mesh.position.y = 0; // 定位置で止まる
              step++;
            }
          }

          // 3文字表示後のキラキラ演出
          if (step === textMeshes.length) {
            textMaterials.forEach((material) => {
              material.emissive = new THREE.Color(0xffd700); // ゴールドっぽい輝き
            });
            setTimeout(() => setShowLayout(true), 1000); // Layoutを表示
          }

          renderer.render(scene, camera);
        };

        animate();
      }
    );

    // クリーンアップ
    return () => {
      renderer.dispose();
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
    };
  }, []);

  // アニメーションが完了したらLayoutを表示
  return (
    <div>
      {showLayout ? (
        <Layout header={<Header />}>
          <About />
          <Works />
          <Skills />
          <Certifications />
        </Layout>
      ) : (
        <div ref={canvasRef} style={{ width: "100vw", height: "100vh" }} />
      )}
    </div>
  );
}
