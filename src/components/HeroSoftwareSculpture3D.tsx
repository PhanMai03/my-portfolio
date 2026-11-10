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
    // 2. RENDERER (Cập nhật PCFShadowMap mới nhất, triệt tiêu warning deprecated)
    // =========================================================================
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height, false);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap; // Đã cập nhật từ PCFSoftShadowMap cũ
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    // =========================================================================
    // 3. HỆ THỐNG ÁNH SÁNG & KHỬ SHADOW ACNE
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
    // 4. CHẤT LIỆU ĐẤT SÉT HỮU CƠ SILKY MATTE CLAY
    // =========================================================================
    const createClayMat = (colorHex: number, roughness = 0.92) => {
      return new THREE.MeshStandardMaterial({
        color: colorHex,
        roughness: roughness,
        metalness: 0.02,
        flatShading: false,
      });
    };

    const matClaySand = createClayMat(0xd8c8b5, 0.90);        // Viền khung iMac
    const matClayBack = createClayMat(0xcebeab, 0.92);        // Lưng máy
    const matClayTerracotta = createClayMat(0xb96f4f, 0.88);  // Khối terracotta QA
    const matClaySage = createClayMat(0x85866a, 0.88);        // Khối rêu sage
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

    // Root Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // =========================================================================
    // 6. BỆ ĐÁ THẠCH CAO ĐIÊU KHẮC (Archival Plinths)
    // =========================================================================
    const plinth1Shape = createRoundedRectShape(2.35, 1.75, 0.22);
    const plinth1Geo = new THREE.ExtrudeGeometry(plinth1Shape, {
      depth: 0.16,
      bevelEnabled: true,
      bevelSegments: 4,
      bevelSize: 0.04,
      bevelThickness: 0.04,
    });
    const plinth1Mesh = new THREE.Mesh(plinth1Geo, matClayPlinthBase);
    plinth1Mesh.rotation.x = Math.PI / 2;
    plinth1Mesh.position.set(0, -0.98, 0);
    plinth1Mesh.receiveShadow = true;
    mainGroup.add(plinth1Mesh);

    const plinth2Shape = createRoundedRectShape(1.85, 1.35, 0.18);
    const plinth2Geo = new THREE.ExtrudeGeometry(plinth2Shape, {
      depth: 0.14,
      bevelEnabled: true,
      bevelSegments: 4,
      bevelSize: 0.03,
      bevelThickness: 0.03,
    });
    const plinth2Mesh = new THREE.Mesh(plinth2Geo, matClayPlinthTop);
    plinth2Mesh.rotation.x = Math.PI / 2;
    plinth2Mesh.position.set(-0.05, -0.79, 0.2);
    plinth2Mesh.receiveShadow = true;
    mainGroup.add(plinth2Mesh);

    // =========================================================================
    // 7. MÀN HÌNH ĐIÊU KHẮC iMAC (Khung Hollow Frame)
    // =========================================================================
    const monitorGroup = new THREE.Group();
    monitorGroup.position.set(0.1, 0.25, 0);
    mainGroup.add(monitorGroup);

    // A. Khung viền ngoài có khoét lỗ (Hollow Cutout Frame)
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

    // C. MẶT MÀN HÌNH QA TESTING TELEMETRY (Được render động bằng Canvas)
    const termCanvas = document.createElement("canvas");
    termCanvas.width = 512;
    termCanvas.height = 380;
    const ctx = termCanvas.getContext("2d");

    const renderTerminal = (time: number) => {
      if (!ctx) return;
      // Nền terminal tông xám rêu đậm đồng điệu OFF-GRID
      ctx.fillStyle = "#1E241B";
      ctx.fillRect(0, 0, 512, 380);

      // Header Bar
      ctx.fillStyle = "#273024";
      ctx.fillRect(0, 0, 512, 36);

      // Window controls
      ctx.fillStyle = "#B96F4F";
      ctx.beginPath();
      ctx.arc(20, 18, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#85866A";
      ctx.beginPath();
      ctx.arc(36, 18, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#C8B69E";
      ctx.beginPath();
      ctx.arc(52, 18, 5, 0, Math.PI * 2);
      ctx.fill();

      // Title
      ctx.fillStyle = "#E6D8C5";
      ctx.font = "bold 13px 'Courier New', monospace";
      ctx.fillText("QA_SUITE // VERIFIED_BUILD v2.5", 72, 22);

      // Badge PASS
      ctx.fillStyle = "#34D399";
      ctx.fillText("[✓ PASS 100%]", 395, 22);

      // Divider line
      ctx.strokeStyle = "rgba(242, 234, 223, 0.12)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, 36);
      ctx.lineTo(512, 36);
      ctx.stroke();

      // Terminal logs (Mô phỏng kết quả kiểm thử thực tế)
      ctx.font = "12px 'Courier New', monospace";
      
      ctx.fillStyle = "#85866A";
      ctx.fillText("$ vitest --run --reporter=verbose", 24, 68);

      ctx.fillStyle = "#34D399";
      ctx.fillText("✓ auth.rbac.spec.ts (4 passed)", 24, 96);
      ctx.fillStyle = "rgba(242, 234, 223, 0.7)";
      ctx.fillText("  • verifyAdminToken ........... 12ms", 40, 118);
      ctx.fillText("  • enforceUserPermissions ..... 8ms", 40, 138);

      ctx.fillStyle = "#34D399";
      ctx.fillText("✓ postman.api.contract.spec.ts", 24, 170);
      ctx.fillStyle = "rgba(242, 234, 223, 0.7)";
      ctx.fillText("  • GET /api/v1/orders [200 OK]  14ms", 40, 192);
      ctx.fillText("  • POST /api/v1/checkout ...... 18ms", 40, 212);

      ctx.fillStyle = "#34D399";
      ctx.fillText("✓ web.ui.responsiveness.spec.ts", 24, 244);
      ctx.fillStyle = "rgba(242, 234, 223, 0.7)";
      ctx.fillText("  • zeroLayoutOverflow [375px] . 6ms", 40, 266);

      // Summary Bar
      ctx.fillStyle = "#273024";
      ctx.fillRect(20, 290, 472, 38);
      ctx.fillStyle = "#B96F4F";
      ctx.font = "bold 12px 'Courier New', monospace";
      ctx.fillText("TEST RUN: 18 PASSED (0 FAILURES)", 36, 314);

      // Blinking Cursor
      const blink = Math.floor(time * 2) % 2 === 0;
      if (blink) {
        ctx.fillStyle = "#34D399";
        ctx.fillRect(355, 303, 8, 14);
      }

      // Scanning radar line (Quét kiểm thử liên tục)
      const scanY = 36 + ((time * 65) % 310);
      const gradient = ctx.createLinearGradient(0, scanY - 14, 0, scanY);
      gradient.addColorStop(0, "rgba(52, 211, 153, 0)");
      gradient.addColorStop(1, "rgba(52, 211, 153, 0.18)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY - 14, 512, 14);
      ctx.strokeStyle = "rgba(52, 211, 153, 0.45)";
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(512, scanY);
      ctx.stroke();
    };

    renderTerminal(0);
    const termTexture = new THREE.CanvasTexture(termCanvas);

    const screenShape = createRoundedRectShape(1.70, 1.24, 0.16);
    const screenGeo = new THREE.ExtrudeGeometry(screenShape, {
      depth: 0.03,
      bevelEnabled: false,
    });
    const screenMat = new THREE.MeshStandardMaterial({
      map: termTexture,
      roughness: 0.4,
      metalness: 0.05,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
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
    // 8. CÁC KHỐI BIỂU TƯỢNG QA & FRONTEND CHUYÊN NGÀNH LƠ LỬNG
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

    // NODE 1: KHỐI KHIÊN BẢO VỆ QA (QA SHIELD INSPECTION TOKEN) — Top Left
    const shieldShape = new THREE.Shape();
    shieldShape.moveTo(0, 0.32);
    shieldShape.lineTo(0.24, 0.22);
    shieldShape.lineTo(0.22, -0.06);
    shieldShape.quadraticCurveTo(0, -0.28, 0, -0.32);
    shieldShape.quadraticCurveTo(0, -0.28, -0.22, -0.06);
    shieldShape.lineTo(-0.24, 0.22);
    shieldShape.closePath();

    const shieldGeo = new THREE.ExtrudeGeometry(shieldShape, {
      depth: 0.12,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.03,
      bevelThickness: 0.03,
    });
    const shieldMesh = new THREE.Mesh(shieldGeo, matClayTerracotta);
    shieldMesh.position.set(-1.45, 1.15, 0.3);
    shieldMesh.rotation.set(0.2, -0.3, 0.1);
    shieldMesh.castShadow = true;
    mainGroup.add(shieldMesh);
    floatingNodes.push({
      mesh: shieldMesh,
      basePos: shieldMesh.position.clone(),
      speed: 1.1,
      offset: 0,
      rotSpeedX: 0.003,
      rotSpeedY: 0.005,
    });

    // NODE 2: KHỐI FRONTEND COMPONENT WIREFRAME `<UI />` — Top Right
    const compBoxGeo = new THREE.BoxGeometry(0.52, 0.38, 0.3);
    const compBoxEdges = new THREE.EdgesGeometry(compBoxGeo);
    const compWireframe = new THREE.LineSegments(
      compBoxEdges,
      new THREE.LineBasicMaterial({ color: 0xb96f4f, linewidth: 2 })
    );
    const compBoxMesh = new THREE.Mesh(compBoxGeo, matClaySand);
    compBoxMesh.add(compWireframe);
    compBoxMesh.position.set(1.4, 1.25, -0.2);
    compBoxMesh.rotation.set(-0.25, 0.5, -0.15);
    compBoxMesh.castShadow = true;
    mainGroup.add(compBoxMesh);
    floatingNodes.push({
      mesh: compBoxMesh,
      basePos: compBoxMesh.position.clone(),
      speed: 0.95,
      offset: 1.8,
      rotSpeedX: -0.004,
      rotSpeedY: 0.006,
    });

    // NODE 3: HUY HIỆU API [200 OK] TRÒN KHẮC RÃNH — Bottom Left
    const tokenGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.12, 32);
    const tokenMesh = new THREE.Mesh(tokenGeo, matClaySage);
    tokenMesh.position.set(-1.5, -0.4, 0.55);
    tokenMesh.rotation.set(Math.PI / 3, 0.35, -0.2);
    tokenMesh.castShadow = true;
    mainGroup.add(tokenMesh);
    floatingNodes.push({
      mesh: tokenMesh,
      basePos: tokenMesh.position.clone(),
      speed: 1.2,
      offset: 3.2,
      rotSpeedX: 0.005,
      rotSpeedY: -0.003,
    });

    // NODE 4: KHỐI ĐÁ ĐA DIỆN TERRACOTTA KIỂM ĐỊNH DEFECT — Right Center
    const facetedGeo = new THREE.DodecahedronGeometry(0.26, 0);
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

    // =========================================================================
    // 9. CÁC NÉT VẼ KỸ THUẬT KIẾN TRÚC MẢNH MAI (Architectural QA Grid Lines)
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
    // 10. MẶT PHẲNG BÓNG ĐỔ (Đặt tại Y = -1.05 dưới đáy bệ đá)
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
    // 12. RESIZE OBSERVER
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
    // 13. ANIMATION LOOP — SỬ DỤNG performance.now() TRIỆT TIÊU THREE.Clock WARNING
    // =========================================================================
    const startTime = performance.now();
    let lastTerminalUpdate = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const now = performance.now();
      const elapsedTime = (now - startTime) * 0.001;

      // Cập nhật màn hình Terminal QA (30fps để tối ưu hiệu năng)
      if (now - lastTerminalUpdate > 33) {
        renderTerminal(elapsedTime);
        termTexture.needsUpdate = true;
        lastTerminalUpdate = now;
      }

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
    // 14. DỌN DẸP BỘ NHỚ KHI UNMOUNT
    // =========================================================================
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();

      termTexture.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-[480px] sm:h-[540px] lg:h-[580px] relative select-none" />;
};

export default HeroSoftwareSculpture3D;
