import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroSoftwareSculpture3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    let width = container.clientWidth || 580;
    let height = container.clientHeight || 520;

    // =========================================================================
    // 1. SCENE & CAMERA (Khử Z-fighting bằng tỉ lệ near: 0.5 / far: 30)
    // =========================================================================
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.5, 30);
    camera.position.set(2.8, 2.2, 5.2);
    camera.lookAt(0, 0.15, 0);

    // =========================================================================
    // 2. RENDERER (Antialias cao cấp, PCF Soft Shadow chuẩn)
    // =========================================================================
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height, false);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    // =========================================================================
    // 3. HỆ THỐNG ÁNH SÁNG & KHỬ SHADOW ACNE (Triệt tiêu chớp sọc đen bóng đổ)
    // =========================================================================
    const ambientLight = new THREE.AmbientLight(0xf5efe6, 1.45);
    scene.add(ambientLight);

    // Nguồn sáng chính ấm áp 45 độ
    const keyLight = new THREE.DirectionalLight(0xfff8ee, 2.3);
    keyLight.position.set(4.2, 5.5, 4.0);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 1.0;
    keyLight.shadow.camera.far = 12;
    // Cực kỳ quan trọng để triệt tiêu chớp bóng đổ trên bề mặt cong (Shadow Acne)
    keyLight.shadow.bias = -0.0005;
    keyLight.shadow.normalBias = 0.04;
    scene.add(keyLight);

    // Nguồn sáng hắt Terracotta ấm áp
    const terracottaRimLight = new THREE.PointLight(0xb96f4f, 1.4, 8);
    terracottaRimLight.position.set(-2.8, 1.6, 2.2);
    scene.add(terracottaRimLight);

    // Nguồn sáng phụ sau lưng chống tối góc khuất
    const fillLight = new THREE.DirectionalLight(0xdec8b0, 0.7);
    fillLight.position.set(-3.5, 2.5, -2.5);
    scene.add(fillLight);

    // =========================================================================
    // 4. CHẤT LIỆU ĐẤT SÉT MỊN SILKY MATTE CLAY (Êm ái, không nhiễu hạt)
    // =========================================================================
    const createClayMat = (colorHex: number, roughness = 0.92) => {
      return new THREE.MeshStandardMaterial({
        color: colorHex,
        roughness: roughness,
        metalness: 0.02,
        flatShading: false,
      });
    };

    const matClayIvory = createClayMat(0xf2eadf, 0.94);       // Màn hình kem ivory
    const matClaySand = createClayMat(0xd8c8b5, 0.90);        // Viền khung iMac
    const matClayBack = createClayMat(0xcebeab, 0.92);        // Lưng máy
    const matClayTerracotta = createClayMat(0xb96f4f, 0.88);  // Khối terracotta
    const matClayPlinthBase = createClayMat(0xe3d6c6, 0.92);   // Bệ đá dưới
    const matClayPlinthTop = createClayMat(0xede2d3, 0.94);    // Bệ đá trên
    const matClayStand = createClayMat(0xcebda8, 0.90);       // Chân đế cong

    // =========================================================================
    // 5. HELPER HÌNH HỌC: TẠO SHAPE BO TRÒN HỮU CƠ
    // =========================================================================
    const createRoundedRectShape = (w: number, h: number, r: number) => {
      const shape = new THREE.Shape();
      const x = -w / 2;
      const y = -h / 2;
      shape.moveTo(x + r, y);
      shape.lineTo(x + w - r, y);
      shape.quadraticCurveTo(x + w, y, x + w, y + r);
      shape.lineTo(x + w, y + h - r);
      shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      shape.lineTo(x + r, y + h);
      shape.quadraticCurveTo(x, y + h, x, y + h - r);
      shape.lineTo(x, y + r);
      shape.quadraticCurveTo(x, y, x + r, y);
      return shape;
    };

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // =========================================================================
    // 6. BỆ ĐÁ THẠCH CAO XẾP TẦNG (Không giao nhau với shadow plane)
    // =========================================================================
    // Bệ đá tầng 1 (Bottom Plinth)
    const plinth1Shape = createRoundedRectShape(2.5, 1.8, 0.55);
    const plinth1Geo = new THREE.ExtrudeGeometry(plinth1Shape, {
      depth: 0.07,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.04,
      bevelThickness: 0.04,
    });
    const plinth1Mesh = new THREE.Mesh(plinth1Geo, matClayPlinthBase);
    plinth1Mesh.rotation.x = Math.PI / 2;
    plinth1Mesh.position.set(0.15, -0.88, 0.1);
    plinth1Mesh.receiveShadow = true;
    mainGroup.add(plinth1Mesh);

    // Bệ đá tầng 2 (Top Plinth)
    const plinth2Shape = createRoundedRectShape(1.9, 1.4, 0.45);
    const plinth2Geo = new THREE.ExtrudeGeometry(plinth2Shape, {
      depth: 0.06,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.035,
      bevelThickness: 0.035,
    });
    const plinth2Mesh = new THREE.Mesh(plinth2Geo, matClayPlinthTop);
    plinth2Mesh.rotation.x = Math.PI / 2;
    plinth2Mesh.position.set(-0.05, -0.79, 0.2);
    plinth2Mesh.receiveShadow = true;
    mainGroup.add(plinth2Mesh);

    // =========================================================================
    // 7. MÀN HÌNH ĐIÊU KHẮC iMAC (Khung rỗng Hollow Frame - Triệt tiêu 100% Z-Fighting)
    // =========================================================================
    const monitorGroup = new THREE.Group();
    monitorGroup.position.set(0.1, 0.25, 0);
    mainGroup.add(monitorGroup);

    // A. Khung viền ngoài có khoét lỗ (Hollow Cutout Frame)
    // Khi khoét lỗ, mặt trước không còn phủ lên màn hình -> KHÔNG BAO GIỜ BỊ CHỚP!
    const frameOuterShape = createRoundedRectShape(1.98, 1.52, 0.26);
    const screenHolePath = createRoundedRectShape(1.68, 1.22, 0.16);
    frameOuterShape.holes.push(screenHolePath);

    const frameGeo = new THREE.ExtrudeGeometry(frameOuterShape, {
      depth: 0.08,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.06,
      bevelThickness: 0.06,
    });
    const frameMesh = new THREE.Mesh(frameGeo, matClaySand);
    frameMesh.position.set(0, 0, 0.06);
    frameMesh.castShadow = true;
    frameMesh.receiveShadow = true;
    monitorGroup.add(frameMesh);

    // B. Tấm lưng máy bo vát nhẹ phía sau
    const backShape = createRoundedRectShape(1.92, 1.46, 0.24);
    const backGeo = new THREE.ExtrudeGeometry(backShape, {
      depth: 0.06,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.04,
      bevelThickness: 0.04,
    });
    const backMesh = new THREE.Mesh(backGeo, matClayBack);
    backMesh.position.set(0, 0, -0.04);
    backMesh.castShadow = true;
    monitorGroup.add(backMesh);

    // C. Mặt màn hình kem hữu cơ (Nằm thụt vào bên trong khung khoét lỗ)
    const screenShape = createRoundedRectShape(1.70, 1.24, 0.16);
    const screenGeo = new THREE.ExtrudeGeometry(screenShape, {
      depth: 0.03,
      bevelEnabled: false,
    });
    const screenMesh = new THREE.Mesh(screenGeo, matClayIvory);
    // Đặt màn hình nằm gọn trong hốc khoét, mặt trước tại Z = 0.08 (thụt sâu 0.04 so với đỉnh viền Z=0.12)
    screenMesh.position.set(0, 0, 0.05);
    screenMesh.receiveShadow = true;
    monitorGroup.add(screenMesh);

    // D. Chấm camera / sensor dot ở cằm dưới viền
    const dotGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.02, 16);
    const dotMat = new THREE.MeshStandardMaterial({ color: 0x857666, roughness: 0.9 });
    const dotMesh = new THREE.Mesh(dotGeo, dotMat);
    dotMesh.rotation.x = Math.PI / 2;
    dotMesh.position.set(0, -0.66, 0.125);
    monitorGroup.add(dotMesh);

    // E. Chân đế màn hình uốn cong mượt mà (Curved Neck Stand)
    const standCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.02, -0.06),
      new THREE.Vector3(0, -0.32, -0.18),
      new THREE.Vector3(0, -0.72, -0.15),
      new THREE.Vector3(0, -0.90, 0.05),
    ]);
    const standGeo = new THREE.TubeGeometry(standCurve, 20, 0.075, 12, false);
    const standMesh = new THREE.Mesh(standGeo, matClayStand);
    standMesh.castShadow = true;
    standMesh.receiveShadow = true;
    monitorGroup.add(standMesh);

    // Đế chân phẳng nằm trên bệ thạch cao
    const footShape = createRoundedRectShape(0.65, 0.5, 0.12);
    const footGeo = new THREE.ExtrudeGeometry(footShape, {
      depth: 0.03,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.02,
      bevelThickness: 0.02,
    });
    const footMesh = new THREE.Mesh(footGeo, matClayStand);
    footMesh.rotation.x = Math.PI / 2;
    footMesh.position.set(0, -0.92, 0.05);
    footMesh.castShadow = true;
    monitorGroup.add(footMesh);

    // =========================================================================
    // 8. CÁC KHỐI ĐIÊU KHẮC HỮU CƠ LƠ LỬNG
    // =========================================================================
    interface FloatingNode {
      mesh: THREE.Object3D;
      basePos: THREE.Vector3;
      speed: number;
      offset: number;
      rotSpeedX: number;
      rotSpeedY: number;
    }

    const floatingNodes: FloatingNode[] = [];

    // Node 1: Khối đá đẽo thô góc cạnh (Top Left)
    const cube1Geo = new THREE.BoxGeometry(0.46, 0.46, 0.46);
    const posAttr = cube1Geo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      posAttr.setX(i, posAttr.getX(i) + Math.sin(i * 1.7) * 0.025);
      posAttr.setY(i, posAttr.getY(i) + Math.cos(i * 2.3) * 0.025);
    }
    cube1Geo.computeVertexNormals();

    const cube1Mesh = new THREE.Mesh(cube1Geo, matClaySand);
    cube1Mesh.position.set(-1.45, 1.15, 0.3);
    cube1Mesh.rotation.set(0.35, -0.4, 0.2);
    cube1Mesh.castShadow = true;
    mainGroup.add(cube1Mesh);
    floatingNodes.push({
      mesh: cube1Mesh,
      basePos: cube1Mesh.position.clone(),
      speed: 1.1,
      offset: 0,
      rotSpeedX: 0.003,
      rotSpeedY: 0.005,
    });

    // Node 2: Khối kiến trúc góc vát đá thô (Top Right)
    const stone2Geo = new THREE.BoxGeometry(0.42, 0.38, 0.36);
    const stone2Mesh = new THREE.Mesh(stone2Geo, matClaySand);
    stone2Mesh.position.set(1.4, 1.25, -0.2);
    stone2Mesh.rotation.set(-0.25, 0.5, -0.15);
    stone2Mesh.castShadow = true;
    mainGroup.add(stone2Mesh);
    floatingNodes.push({
      mesh: stone2Mesh,
      basePos: stone2Mesh.position.clone(),
      speed: 0.95,
      offset: 1.8,
      rotSpeedX: -0.004,
      rotSpeedY: 0.006,
    });

    // Node 3: Khối vòm terracotta bo tròn (Bottom Left)
    const terraShape = createRoundedRectShape(0.44, 0.52, 0.14);
    const terraGeo = new THREE.ExtrudeGeometry(terraShape, {
      depth: 0.34,
      bevelEnabled: true,
      bevelSegments: 4,
      bevelSize: 0.03,
      bevelThickness: 0.03,
    });
    const terraMesh = new THREE.Mesh(terraGeo, matClayTerracotta);
    terraMesh.position.set(-1.5, -0.4, 0.55);
    terraMesh.rotation.set(0.4, 0.35, -0.2);
    terraMesh.castShadow = true;
    mainGroup.add(terraMesh);
    floatingNodes.push({
      mesh: terraMesh,
      basePos: terraMesh.position.clone(),
      speed: 1.2,
      offset: 3.2,
      rotSpeedX: 0.005,
      rotSpeedY: -0.003,
    });

    // Node 4: Khối đá đa diện Terracotta (Right Center)
    const facetedGeo = new THREE.DodecahedronGeometry(0.28, 0);
    const facetedMesh = new THREE.Mesh(facetedGeo, matClayTerracotta);
    facetedMesh.position.set(1.58, -0.2, 0.4);
    facetedMesh.castShadow = true;
    mainGroup.add(facetedMesh);
    floatingNodes.push({
      mesh: facetedMesh,
      basePos: facetedMesh.position.clone(),
      speed: 1.05,
      offset: 4.5,
      rotSpeedX: 0.006,
      rotSpeedY: 0.008,
    });

    // Node 5: Hạt bi đất sét tròn nhỏ (Center Right)
    const beadGeo = new THREE.SphereGeometry(0.1, 24, 24);
    const beadMesh = new THREE.Mesh(beadGeo, matClayTerracotta);
    beadMesh.position.set(1.48, 0.35, 0.1);
    beadMesh.castShadow = true;
    mainGroup.add(beadMesh);
    floatingNodes.push({
      mesh: beadMesh,
      basePos: beadMesh.position.clone(),
      speed: 1.4,
      offset: 2.1,
      rotSpeedX: 0.002,
      rotSpeedY: 0.004,
    });

    // =========================================================================
    // 9. CÁC NÉT VẼ KỸ THUẬT KIẾN TRÚC MẢNH MAI (Architectural Lines)
    // =========================================================================
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x25231d,
      transparent: true,
      opacity: 0.18,
    });

    // Vòng tròn toạ độ kỹ thuật lớn phía sau
    const circlePoints: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const theta = (i / 64) * Math.PI * 2;
      circlePoints.push(new THREE.Vector3(Math.cos(theta) * 1.8, Math.sin(theta) * 1.8, -0.6));
    }
    const circleGeo = new THREE.BufferGeometry().setFromPoints(circlePoints);
    const circleLine = new THREE.Line(circleGeo, lineMat);
    mainGroup.add(circleLine);

    // Khung hộp wireframe isometric
    const boxWireGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.4, 1.4, 1.4));
    const boxWire = new THREE.LineSegments(boxWireGeo, lineMat);
    boxWire.position.set(1.0, 0.9, -0.7);
    boxWire.rotation.set(0.4, 0.5, 0);
    mainGroup.add(boxWire);

    // Đường gióng trục ngang
    const axisLineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-2.2, 0.1, -0.3),
      new THREE.Vector3(2.2, 0.1, -0.3),
    ]);
    const axisLine = new THREE.Line(axisLineGeo, lineMat);
    mainGroup.add(axisLine);

    // =========================================================================
    // 10. MẶT PHẲNG BÓNG ĐỔ (Đặt tại Y = -1.05 dưới đáy bệ đá, không cắt ngang)
    // =========================================================================
    const shadowPlaneGeo = new THREE.PlaneGeometry(8, 8);
    const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.12 });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.05;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // =========================================================================
    // 11. TƯƠNG TÁC CHUỘT (Mouse Parallax)
    // =========================================================================
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2));
      const y = ((event.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2));

      targetRotY = x * 0.22;
      targetRotX = -y * 0.14;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // =========================================================================
    // 12. RESIZE OBSERVER (Ngăn chặn vòng lặp Resize vô tận)
    // =========================================================================
    let lastW = width;
    let lastH = height;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0 && (Math.abs(newW - lastW) > 2 || Math.abs(newH - lastH) > 2)) {
          lastW = newW;
          lastH = newH;
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH, false);
        }
      }
    });
    resizeObserver.observe(container);

    // =========================================================================
    // 13. ANIMATION LOOP (Lơ lửng hữu cơ mượt mà)
    // =========================================================================
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Dao động lơ lửng nhẹ nhàng toàn bộ cụm tác phẩm
      const floatY = Math.sin(elapsedTime * 0.8) * 0.045;
      mainGroup.position.y = floatY;

      // Lerp góc nghiêng mềm mại theo chuột
      mouseX += (targetRotY - mouseX) * 0.06;
      mouseY += (targetRotX - mouseY) * 0.06;
      mainGroup.rotation.y = mouseX;
      mainGroup.rotation.x = mouseY;

      // Các khối điêu khắc lơ lửng độc lập
      floatingNodes.forEach((node) => {
        const deltaY = Math.sin(elapsedTime * node.speed + node.offset) * 0.06;
        node.mesh.position.y = node.basePos.y + deltaY;
        node.mesh.rotation.x += node.rotSpeedX;
        node.mesh.rotation.y += node.rotSpeedY;
      });

      renderer.render(scene, camera);
    };

    animate();

    // =========================================================================
    // DỌN DẸP BỘ NHỚ KHI UNMOUNT
    // =========================================================================
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] xl:h-[560px] select-none flex items-center justify-center">
      {/* Three.js WebGL Interactive Canvas */}
      <div ref={mountRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />

      {/* Technical Editorial Coordinate Badge (01 / 05) */}
      <div className="absolute top-4 left-6 pointer-events-none flex items-center gap-2 select-none z-10">
        <span className="font-mono text-[11px] text-[#25231D]/60 tracking-wider">
          01 <span className="opacity-40">/</span> 05
        </span>
      </div>

      <div className="absolute bottom-3 right-6 pointer-events-none hidden sm:flex items-center gap-2 text-[10.5px] font-mono text-[#25231D]/50 select-none z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B96F4F] animate-pulse" />
        <span>Di chuột để tương tác 3D WebGL</span>
      </div>
    </div>
  );
};

export default HeroSoftwareSculpture3D;
