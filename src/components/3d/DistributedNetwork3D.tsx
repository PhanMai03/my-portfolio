import React, { useRef, useMemo, useEffect, useState, Component, ErrorInfo, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RefreshCw, Palette } from "lucide-react";

// =======================================================================
// 1. PROCEDURAL TEXTURES (Badge Front, Back & Flat Woven Ribbon Straps)
// =======================================================================

export type StrapStyle = "obsidian" | "white" | "emerald";

function useLanyardTextures(strapStyle: StrapStyle) {
  const textures = useMemo(() => {
    // --- A. FRONT TEXTURE (1024 x 1536) - Modern Dev Pass with CV Details ---
    const frontCanvas = document.createElement("canvas");
    frontCanvas.width = 1024;
    frontCanvas.height = 1536;
    const fctx = frontCanvas.getContext("2d");

    if (fctx) {
      // Obsidian Slate Base
      const bgGrad = fctx.createLinearGradient(0, 0, 0, 1536);
      bgGrad.addColorStop(0, "#0F141C");
      bgGrad.addColorStop(0.5, "#0A0D13");
      bgGrad.addColorStop(1, "#06080C");
      fctx.fillStyle = bgGrad;
      fctx.fillRect(0, 0, 1024, 1536);

      // Fine Dot Matrix Pattern
      fctx.fillStyle = "rgba(255, 255, 255, 0.035)";
      for (let x = 40; x < 984; x += 32) {
        for (let y = 120; y < 1480; y += 32) {
          fctx.beginPath();
          fctx.arc(x, y, 1.5, 0, Math.PI * 2);
          fctx.fill();
        }
      }

      // Top Lanyard Slot Graphic (Hole Cutout)
      fctx.fillStyle = "#040609";
      fctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
      fctx.lineWidth = 3;
      fctx.beginPath();
      fctx.roundRect(412, 45, 200, 36, 18);
      fctx.fill();
      fctx.stroke();

      // Holographic Top Header Foil
      const holoGrad = fctx.createLinearGradient(60, 120, 964, 120);
      holoGrad.addColorStop(0, "rgba(5, 150, 105, 0.35)");
      holoGrad.addColorStop(0.5, "rgba(16, 185, 129, 0.55)");
      holoGrad.addColorStop(1, "rgba(52, 211, 153, 0.35)");
      fctx.fillStyle = holoGrad;
      fctx.beginPath();
      fctx.roundRect(60, 120, 904, 52, 10);
      fctx.fill();

      fctx.fillStyle = "#FFFFFF";
      fctx.font = "bold 22px 'JetBrains Mono', 'Geist Mono', monospace";
      fctx.letterSpacing = "4px";
      fctx.textAlign = "center";
      fctx.fillText("FULL-STACK", 512, 154);

      // Gold Smartchip / NFC Contact Pad
      fctx.fillStyle = "#D97706";
      fctx.beginPath();
      fctx.roundRect(80, 220, 140, 100, 12);
      fctx.fill();
      fctx.strokeStyle = "#FDE68A";
      fctx.lineWidth = 3;
      fctx.stroke();

      fctx.strokeStyle = "rgba(0, 0, 0, 0.35)";
      fctx.lineWidth = 2;
      fctx.strokeRect(100, 220, 40, 100);
      fctx.strokeRect(160, 220, 40, 100);
      fctx.beginPath();
      fctx.moveTo(80, 270);
      fctx.lineTo(220, 270);
      fctx.stroke();

      // Status Pill (Top-Right)
      fctx.fillStyle = "rgba(16, 185, 129, 0.15)";
      fctx.beginPath();
      fctx.roundRect(660, 235, 284, 56, 28);
      fctx.fill();
      fctx.strokeStyle = "rgba(16, 185, 129, 0.55)";
      fctx.lineWidth = 2;
      fctx.stroke();

      fctx.fillStyle = "#34D399";
      fctx.font = "bold 20px 'JetBrains Mono', monospace";
      fctx.textAlign = "center";
      fctx.fillText("● AVAILABLE FOR ROLES", 802, 270);

      // Center Avatar Emblem: Monogram "M"
      const cx = 512;
      const cy = 490;
      const rad = 130;

      const glowRing = fctx.createRadialGradient(cx, cy, rad - 20, cx, cy, rad + 40);
      glowRing.addColorStop(0, "rgba(16, 185, 129, 0.45)");
      glowRing.addColorStop(1, "transparent");
      fctx.fillStyle = glowRing;
      fctx.beginPath();
      fctx.arc(cx, cy, rad + 35, 0, Math.PI * 2);
      fctx.fill();

      fctx.fillStyle = "#0B111A";
      fctx.beginPath();
      fctx.arc(cx, cy, rad, 0, Math.PI * 2);
      fctx.fill();
      fctx.strokeStyle = "#10B981";
      fctx.lineWidth = 6;
      fctx.stroke();

      fctx.fillStyle = "#FFFFFF";
      fctx.font = "900 135px 'Space Grotesk', 'Geist', sans-serif";
      fctx.textAlign = "center";
      fctx.textBaseline = "middle";
      fctx.fillText("M", cx, cy + 4);

      // Name & Title
      fctx.fillStyle = "#FFFFFF";
      fctx.font = "bold 60px 'Space Grotesk', 'Geist', sans-serif";
      fctx.fillText("PHAN THI NGOC MAI", cx, 710);

      fctx.fillStyle = "#10B981";
      fctx.font = "bold 25px 'JetBrains Mono', 'Geist Mono', monospace";
      fctx.letterSpacing = "2px";
      fctx.fillText("FULL-STACK SOFTWARE ENGINEER", cx, 775);

      // Alma Mater & Degree Card
      fctx.fillStyle = "rgba(255, 255, 255, 0.04)";
      fctx.beginPath();
      fctx.roundRect(100, 835, 824, 105, 18);
      fctx.fill();
      fctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      fctx.lineWidth = 2;
      fctx.stroke();

      fctx.fillStyle = "#E2E8F0";
      fctx.font = "500 25px 'Plus Jakarta Sans', sans-serif";
      fctx.fillText("HCMUTE Class of 2025 • Software Engineering", cx, 880);
      fctx.fillStyle = "#34D399";
      fctx.font = "bold 20px 'JetBrains Mono', monospace";
      fctx.fillText("GPA 3.23 / 4.0  •  TOEIC 640", cx, 915);

      // Core Stack Badges (Matching authentic CV)
      const stack = ["React", "Next.js", "Node.js", "SQL & Mongo"];
      const sWidth = 185;
      const sGap = 16;
      const startX = (1024 - (stack.length * sWidth + (stack.length - 1) * sGap)) / 2;

      stack.forEach((tech, i) => {
        const tx = startX + i * (sWidth + sGap);
        fctx.fillStyle = "rgba(16, 185, 129, 0.1)";
        fctx.beginPath();
        fctx.roundRect(tx, 985, sWidth, 48, 12);
        fctx.fill();
        fctx.strokeStyle = "rgba(16, 185, 129, 0.45)";
        fctx.lineWidth = 2;
        fctx.stroke();

        fctx.fillStyle = "#34D399";
        fctx.font = "bold 19px 'JetBrains Mono', monospace";
        fctx.textAlign = "center";
        fctx.fillText(tech, tx + sWidth / 2, 1017);
      });

      // Divider & Barcode
      fctx.fillStyle = "#1E293B";
      fctx.fillRect(80, 1110, 864, 2);

      fctx.fillStyle = "rgba(255, 255, 255, 0.88)";
      let bx = 120;
      const barPattern = [
        4, 2, 8, 3, 2, 6, 2, 4, 3, 6, 2, 8, 4, 2, 5, 3, 2, 6, 4, 2, 8, 2, 5, 3, 2,
        6, 4, 2, 8, 3, 2, 6, 2, 4, 3, 6, 2, 8, 4, 2, 5, 3, 2, 6, 4, 2, 8, 2, 5, 3,
        2, 6, 4, 2, 8, 3, 2, 6, 2, 4, 3, 6, 2, 8, 4, 2, 5, 3, 2, 6, 4, 2, 8, 2, 5,
      ];
      barPattern.forEach((w) => {
        fctx.fillRect(bx, 1150, w, 70);
        bx += w + 6.5;
      });

      fctx.fillStyle = "#64748B";
      fctx.font = "18px 'JetBrains Mono', monospace";
      fctx.textAlign = "center";
      fctx.fillText("ID: PTNM-2025-DEV // AUTH HASH: 9F2A-4B81-7C0E", 512, 1260);

      fctx.fillStyle = "rgba(16, 185, 129, 0.85)";
      fctx.font = "bold 18px 'JetBrains Mono', monospace";
      fctx.fillText("ENGINEERING ECOSYSTEM • HO CHI MINH CITY, VN", 512, 1315);
    }

    const frontTexture = new THREE.CanvasTexture(frontCanvas);
    frontTexture.colorSpace = THREE.SRGBColorSpace;
    frontTexture.needsUpdate = true;

    // --- B. BACK TEXTURE (1024 x 1536) ---
    const backCanvas = document.createElement("canvas");
    backCanvas.width = 1024;
    backCanvas.height = 1536;
    const bctx = backCanvas.getContext("2d");

    if (bctx) {
      bctx.fillStyle = "#0A0D13";
      bctx.fillRect(0, 0, 1024, 1536);

      // Circuit Trace Network
      bctx.strokeStyle = "rgba(16, 185, 129, 0.18)";
      bctx.lineWidth = 3;
      for (let i = 0; i < 12; i++) {
        bctx.beginPath();
        bctx.moveTo(80, 180 + i * 90);
        bctx.lineTo(380, 180 + i * 90);
        bctx.lineTo(580, 230 + i * 90);
        bctx.lineTo(944, 230 + i * 90);
        bctx.stroke();
      }

      // Watermark "PTNM"
      bctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      bctx.font = "900 170px 'Space Grotesk', sans-serif";
      bctx.textAlign = "center";
      bctx.textBaseline = "middle";
      bctx.fillText("PTNM", 512, 570);

      bctx.fillStyle = "#E2E8F0";
      bctx.font = "bold 32px 'JetBrains Mono', monospace";
      bctx.fillText("PERSONAL DEVELOPER ACCESS", 512, 760);

      bctx.fillStyle = "#10B981";
      bctx.font = "bold 25px 'JetBrains Mono', monospace";
      bctx.fillText("maiphan03.work@gmail.com", 512, 825);
      bctx.fillText("Tel: (+84) 0337 273 891", 512, 875);
      bctx.fillText("github.com/PhanMai03", 512, 925);
      bctx.fillText("linkedin.com/in/phanmai03", 512, 975);

      // Magnetic Stripe Mockup
      bctx.fillStyle = "#020408";
      bctx.fillRect(60, 1080, 904, 130);

      bctx.fillStyle = "#64748B";
      bctx.font = "16px 'JetBrains Mono', monospace";
      bctx.fillText("THIS ACCESS PASS IS CRYPTOGRAPHICALLY VALIDATED FOR 2025", 512, 1290);
    }

    const backTexture = new THREE.CanvasTexture(backCanvas);
    backTexture.colorSpace = THREE.SRGBColorSpace;
    backTexture.needsUpdate = true;

    // --- C. FLAT WOVEN LANYARD TEXTURE (1024 x 128) ---
    const strapCanvas = document.createElement("canvas");
    strapCanvas.width = 1024;
    strapCanvas.height = 128;
    const sctx = strapCanvas.getContext("2d");

    if (sctx) {
      if (strapStyle === "white") {
        // Vercel White: Off-white flat woven tape with crisp typography (like laggg.vercel.app)
        sctx.fillStyle = "#F8FAFC";
        sctx.fillRect(0, 0, 1024, 128);

        // Fine herringbone weave pattern
        sctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        for (let x = 0; x < 1024; x += 8) {
          for (let y = 0; y < 128; y += 8) {
            if ((x + y) % 16 === 0) sctx.fillRect(x, y, 4, 4);
          }
        }

        // Vibrant emerald edge borders
        sctx.fillStyle = "#10B981";
        sctx.fillRect(0, 0, 1024, 6);
        sctx.fillRect(0, 122, 1024, 6);

        sctx.fillStyle = "#0F172A";
        sctx.font = "bold 34px 'JetBrains Mono', 'Geist Mono', monospace";
        sctx.textBaseline = "middle";
        sctx.letterSpacing = "2px";
        sctx.fillText("◆ PHAN THI NGOC MAI ◆ FULL-STACK DEV ◆ HCMUTE 2025 ", 12, 66);
      } else if (strapStyle === "emerald") {
        // Pure Emerald Ribbon
        sctx.fillStyle = "#047857";
        sctx.fillRect(0, 0, 1024, 128);

        sctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        for (let x = 0; x < 1024; x += 8) {
          for (let y = 0; y < 128; y += 8) {
            if ((x + y) % 16 === 0) sctx.fillRect(x, y, 4, 4);
          }
        }

        sctx.fillStyle = "#34D399";
        sctx.fillRect(0, 0, 1024, 6);
        sctx.fillRect(0, 122, 1024, 6);

        sctx.fillStyle = "#FFFFFF";
        sctx.font = "bold 34px 'JetBrains Mono', 'Geist Mono', monospace";
        sctx.textBaseline = "middle";
        sctx.letterSpacing = "2px";
        sctx.fillText("◆ PHAN THI NGOC MAI ◆ FULL-STACK DEV ◆ HCMUTE 2025 ", 12, 66);
      } else {
        // Default: Obsidian Dark with Neon Emerald Stitches & Crisp White Text
        sctx.fillStyle = "#0B1118";
        sctx.fillRect(0, 0, 1024, 128);

        // Dark fabric weave
        sctx.fillStyle = "rgba(16, 185, 129, 0.14)";
        for (let x = 0; x < 1024; x += 10) {
          for (let y = 0; y < 128; y += 10) {
            if ((x + y) % 20 === 0) sctx.fillRect(x, y, 5, 5);
          }
        }

        // Distinct Neon Emerald Stitched Edges
        sctx.fillStyle = "#10B981";
        for (let x = 4; x < 1024; x += 16) {
          sctx.fillRect(x, 2, 10, 5);
          sctx.fillRect(x, 121, 10, 5);
        }

        sctx.fillStyle = "#FFFFFF";
        sctx.font = "bold 34px 'JetBrains Mono', 'Geist Mono', monospace";
        sctx.textBaseline = "middle";
        sctx.letterSpacing = "2px";
        sctx.fillText("◆ DEV PASS 2025 ◆ PHAN THI NGOC MAI ◆ FULL-STACK DEV ", 12, 66);
      }
    }

    const strapTexture = new THREE.CanvasTexture(strapCanvas);
    strapTexture.wrapS = THREE.RepeatWrapping;
    strapTexture.wrapT = THREE.ClampToEdgeWrapping;
    strapTexture.colorSpace = THREE.SRGBColorSpace;
    strapTexture.needsUpdate = true;

    return { frontTexture, backTexture, strapTexture };
  }, [strapStyle]);

  // GPU Memory Safety: Dispose procedural canvas textures on unmount/re-render
  useEffect(() => {
    return () => {
      textures.frontTexture.dispose();
      textures.backTexture.dispose();
      textures.strapTexture.dispose();
    };
  }, [textures]);

  return textures;
}

// =======================================================================
// 2. PROCEDURAL FLAT RIBBON GEOMETRY BUILDER (Stable Quad Strips)
// =======================================================================

function createRibbonGeometry(segments = 28) {
  const vertexCount = (segments + 1) * 2;
  const positions = new Float32Array(vertexCount * 3);
  const uvs = new Float32Array(vertexCount * 2);
  const indices = new Uint16Array(segments * 6);

  for (let i = 0; i <= segments; i++) {
    const u = (i / segments) * 3.5; // repeats along the ribbon
    // Left edge (v = 0)
    uvs[i * 4 + 0] = u;
    uvs[i * 4 + 1] = 0;
    // Right edge (v = 1)
    uvs[i * 4 + 2] = u;
    uvs[i * 4 + 3] = 1;
  }

  for (let i = 0; i < segments; i++) {
    const a = i * 2;
    const b = i * 2 + 1;
    const c = (i + 1) * 2;
    const d = (i + 1) * 2 + 1;

    indices[i * 6 + 0] = a;
    indices[i * 6 + 1] = b;
    indices[i * 6 + 2] = c;

    indices[i * 6 + 3] = b;
    indices[i * 6 + 4] = d;
    indices[i * 6 + 5] = c;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  geo.setIndex(new THREE.BufferAttribute(indices, 1));
  return geo;
}

function updateRibbonGeometry(
  geo: THREE.BufferGeometry,
  curve: THREE.CatmullRomCurve3,
  halfWidth: number
) {
  const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
  const posArray = posAttr.array as Float32Array;
  const segments = posAttr.count / 2 - 1;

  const camForward = new THREE.Vector3(0, 0, 1);
  const tangent = new THREE.Vector3();
  const widthVec = new THREE.Vector3();

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const point = curve.getPointAt(t);
    curve.getTangentAt(t, tangent);

    // Calculate perpendicular ribbon width vector facing camera
    widthVec.crossVectors(tangent, camForward).normalize().multiplyScalar(halfWidth);

    // Left vertex
    posArray[i * 6 + 0] = point.x - widthVec.x;
    posArray[i * 6 + 1] = point.y - widthVec.y;
    posArray[i * 6 + 2] = point.z - widthVec.z;

    // Right vertex
    posArray[i * 6 + 3] = point.x + widthVec.x;
    posArray[i * 6 + 4] = point.y + widthVec.y;
    posArray[i * 6 + 5] = point.z + widthVec.z;
  }

  posAttr.needsUpdate = true;
  geo.computeVertexNormals();
  geo.computeBoundingSphere();
}

// =======================================================================
// 3. MAIN 3D LANYARD SCENE WITH PHYSICS, STRAPS & DRAG
// =======================================================================

interface LanyardSceneProps {
  onHoverChange: (hovered: boolean) => void;
  onDragChange: (dragging: boolean) => void;
  dropKey: number;
  strapStyle: StrapStyle;
}

function LanyardScene({ onHoverChange, onDragChange, dropKey, strapStyle }: LanyardSceneProps) {
  const { frontTexture, backTexture, strapTexture } = useLanyardTextures(strapStyle);

  // Root Transforms
  const cardGroupRef = useRef<THREE.Group>(null);
  const hardwareGroupRef = useRef<THREE.Group>(null);
  const leftStrapMeshRef = useRef<THREE.Mesh>(null);
  const rightStrapMeshRef = useRef<THREE.Mesh>(null);

  // Home equilibrium position (comfortably centered in lower view)
  const restPos = useMemo(() => new THREE.Vector3(0, -0.38, 0), []);

  // Physics Simulation Vectors
  const pos = useRef(new THREE.Vector3(0, 1.8, 0));
  const vel = useRef(new THREE.Vector3(0, -6.0, 0));
  const rot = useRef(new THREE.Euler(0.25, 0.12, -0.06));

  // Drag interaction
  const isDragging = useRef(false);
  const dragPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);
  const dragOffset = useRef(new THREE.Vector3(0, 0, 0));
  const prevDragPos = useRef(new THREE.Vector3(0, 0, 0));
  const hasMoved = useRef(false);

  // Click-to-flip angle
  const flipAngle = useRef(0);
  const targetFlip = useRef(0);

  // Idle hover coordinate
  const hoverCoord = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Top Anchors: Suspended at natural shoulder/neck width to form an authentic V-neck lanyard
  const leftAnchor = useMemo(() => new THREE.Vector3(-0.48, 2.4, -0.02), []);
  const rightAnchor = useMemo(() => new THREE.Vector3(0.48, 2.4, -0.015), []);

  // Pre-allocated Flat Ribbon Geometries (Fixed buffer, NO reallocations in frame loop)
  const leftRibbonGeo = useMemo(() => createRibbonGeometry(28), []);
  const rightRibbonGeo = useMemo(() => createRibbonGeometry(28), []);

  // Materials
  const strapMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: strapTexture,
        roughness: 0.55,
        metalness: 0.15,
        side: THREE.DoubleSide,
      }),
    [strapTexture]
  );

  const metalMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#E2E8F0",
        metalness: 0.95,
        roughness: 0.15,
      }),
    []
  );

  const badgeMaterials = useMemo(() => {
    const edgeMat = new THREE.MeshStandardMaterial({
      color: "#080B10",
      metalness: 0.85,
      roughness: 0.25,
    });
    const frontMat = new THREE.MeshStandardMaterial({
      map: frontTexture,
      roughness: 0.35,
      metalness: 0.25,
    });
    const backMat = new THREE.MeshStandardMaterial({
      map: backTexture,
      roughness: 0.35,
      metalness: 0.25,
    });
    return [edgeMat, edgeMat, edgeMat, edgeMat, frontMat, backMat];
  }, [frontTexture, backTexture]);

  // Trigger drop whenever dropKey changes
  useEffect(() => {
    pos.current.set(0, 1.8, 0);
    vel.current.set(0, -6.0, 0);
    rot.current.set(0.3, 0.15, -0.08);
  }, [dropKey]);

  // Global window pointerup fallback so drag never hangs
  useEffect(() => {
    const handleUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        onDragChange(false);
      }
    };
    window.addEventListener("pointerup", handleUp);
    return () => window.removeEventListener("pointerup", handleUp);
  }, [onDragChange]);

  // Physics & Animation Loop (60 FPS, completely leak-free)
  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.033);
    const time = state.clock.getElapsedTime();

    // Smooth flip transition
    flipAngle.current = THREE.MathUtils.damp(flipAngle.current, targetFlip.current, 8.0, dt);

    // Smooth hover parallax
    hoverCoord.current.x = THREE.MathUtils.damp(
      hoverCoord.current.x,
      hoverCoord.current.targetX,
      4.0,
      dt
    );
    hoverCoord.current.y = THREE.MathUtils.damp(
      hoverCoord.current.y,
      hoverCoord.current.targetY,
      4.0,
      dt
    );

    if (isDragging.current) {
      // Raycast directly onto z=0 plane under mouse
      const hitPoint = new THREE.Vector3();
      const intersects = state.raycaster.ray.intersectPlane(dragPlane, hitPoint);

      if (intersects) {
        // Free, unconstrained dragging
        const targetX = hitPoint.x + dragOffset.current.x;
        const targetY = hitPoint.y + dragOffset.current.y;

        const dx = targetX - pos.current.x;
        const dy = targetY - pos.current.y;
        if (Math.abs(dx) > 0.03 || Math.abs(dy) > 0.03) {
          hasMoved.current = true;
        }

        vel.current.x = dx / dt;
        vel.current.y = dy / dt;
        vel.current.z = 0;

        pos.current.x = targetX;
        pos.current.y = targetY;
        pos.current.z = THREE.MathUtils.damp(pos.current.z, 0.25, 12, dt);

        // Dynamic tilt while dragging
        const dragTiltX = (pos.current.y - restPos.y) * 0.22;
        const dragTiltY = flipAngle.current - pos.current.x * 0.32;
        const dragTiltZ = -pos.current.x * 0.2;

        rot.current.x = THREE.MathUtils.damp(rot.current.x, dragTiltX, 18, dt);
        rot.current.y = THREE.MathUtils.damp(rot.current.y, dragTiltY, 18, dt);
        rot.current.z = THREE.MathUtils.damp(rot.current.z, dragTiltZ, 18, dt);
      }
    } else {
      // Damped Harmonic Oscillator (Spring + Gravity Return)
      const springK = 38.0;
      const dampingC = 4.2;

      const fx = -springK * (pos.current.x - restPos.x) - dampingC * vel.current.x;
      const fy = -springK * (pos.current.y - restPos.y) - dampingC * vel.current.y;
      const fz = -springK * (pos.current.z - restPos.z) - dampingC * vel.current.z;

      vel.current.x += fx * dt;
      vel.current.y += fy * dt;
      vel.current.z += fz * dt;

      vel.current.clampLength(0, 32.0);

      pos.current.x += vel.current.x * dt;
      pos.current.y += vel.current.y * dt;
      pos.current.z += vel.current.z * dt;

      // Natural idle sway (pendulum breathing)
      const swayX = Math.sin(time * 1.3) * 0.025 + hoverCoord.current.x * 0.25;
      const swayY = Math.cos(time * 0.9) * 0.015 + hoverCoord.current.y * 0.15;

      const targetRotX = swayY + THREE.MathUtils.clamp((pos.current.y - restPos.y) * 0.2, -0.35, 0.35) + vel.current.y * 0.02;
      const targetRotY = flipAngle.current + swayX - pos.current.x * 0.35 - vel.current.x * 0.035;
      const targetRotZ = -pos.current.x * 0.18 - vel.current.x * 0.025 + Math.sin(time * 1.1) * 0.015;

      rot.current.x = THREE.MathUtils.damp(rot.current.x, targetRotX, 9, dt);
      rot.current.y = THREE.MathUtils.damp(rot.current.y, targetRotY, 9, dt);
      rot.current.z = THREE.MathUtils.damp(rot.current.z, targetRotZ, 9, dt);
    }

    // Apply translation & rotation to Card Group
    if (cardGroupRef.current) {
      cardGroupRef.current.position.copy(pos.current);
      cardGroupRef.current.rotation.copy(rot.current);
    }

    // Slot position at the top of the card
    const slotLocal = new THREE.Vector3(0, 1.25, 0);
    slotLocal.applyEuler(rot.current);
    const slotWorld = pos.current.clone().add(slotLocal);

    // Hardware Clamp position
    if (hardwareGroupRef.current) {
      hardwareGroupRef.current.position.copy(slotWorld);
      hardwareGroupRef.current.rotation.copy(rot.current);
    }

    // -------------------------------------------------------------
    // STRAIGHT FLAT STRAP UPDATE (Clean vertical straight hang without bowed curves)
    // -------------------------------------------------------------
    const clampWorld = slotWorld.clone().add(new THREE.Vector3(0, 0.15, 0));
    const ribbonHalfWidth = 0.055;

    // Straight Left Ribbon Curve (Linear interpolation directly along taut path)
    const leftClampAttach = clampWorld.clone().add(new THREE.Vector3(-0.015, 0.06, -0.01));
    const leftMid1 = new THREE.Vector3().lerpVectors(leftAnchor, leftClampAttach, 0.33);
    const leftMid2 = new THREE.Vector3().lerpVectors(leftAnchor, leftClampAttach, 0.66);
    const leftCurve = new THREE.CatmullRomCurve3([leftAnchor, leftMid1, leftMid2, leftClampAttach]);
    updateRibbonGeometry(leftRibbonGeo, leftCurve, ribbonHalfWidth);

    // Straight Right Ribbon Curve (Linear interpolation directly along taut path)
    const rightClampAttach = clampWorld.clone().add(new THREE.Vector3(0.015, 0.06, 0.005));
    const rightMid1 = new THREE.Vector3().lerpVectors(rightAnchor, rightClampAttach, 0.33);
    const rightMid2 = new THREE.Vector3().lerpVectors(rightAnchor, rightClampAttach, 0.66);
    const rightCurve = new THREE.CatmullRomCurve3([rightAnchor, rightMid1, rightMid2, rightClampAttach]);
    updateRibbonGeometry(rightRibbonGeo, rightCurve, ribbonHalfWidth);
  });

  const onCardPointerDown = (e: { stopPropagation: () => void; point?: THREE.Vector3 }) => {
    e.stopPropagation();
    if (!e.point) return;
    isDragging.current = true;
    onDragChange(true);
    hasMoved.current = false;
    dragOffset.current.copy(pos.current).sub(e.point);
    prevDragPos.current.copy(pos.current);
  };

  const onCardPointerUp = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    if (isDragging.current) {
      isDragging.current = false;
      onDragChange(false);
      if (!hasMoved.current) {
        targetFlip.current += Math.PI;
      }
    }
  };

  return (
    <>
      {/* 1. Left Flat Ribbon Strap */}
      <mesh
        ref={leftStrapMeshRef}
        geometry={leftRibbonGeo}
        material={strapMaterial}
        frustumCulled={false}
      />

      {/* 2. Right Flat Ribbon Strap */}
      <mesh
        ref={rightStrapMeshRef}
        geometry={rightRibbonGeo}
        material={strapMaterial}
        frustumCulled={false}
      />

      {/* 3. Sleek Chrome Swivel Clasp Hardware */}
      <group ref={hardwareGroupRef}>
        {/* Upper metallic clamp holding both strap ends */}
        <mesh position={[0, 0.18, 0]}>
          <boxGeometry args={[0.2, 0.08, 0.036]} />
          <primitive object={metalMaterial} attach="material" />
        </mesh>
        {/* Swivel ring */}
        <mesh position={[0, 0.09, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.048, 0.015, 16, 24]} />
          <primitive object={metalMaterial} attach="material" />
        </mesh>
        {/* Clasp Hook through the punched slot hole */}
        <mesh position={[0, -0.04, 0]}>
          <cylinderGeometry args={[0.018, 0.018, 0.14, 16]} />
          <primitive object={metalMaterial} attach="material" />
        </mesh>
      </group>

      {/* 4. Suspended ID Card - 100% Monolithic, Sleek Slab */}
      <group
        ref={cardGroupRef}
        onPointerOver={() => onHoverChange(true)}
        onPointerOut={() => onHoverChange(false)}
        onPointerDown={onCardPointerDown}
        onPointerUp={onCardPointerUp}
      >
        {/* Main Card Body */}
        <mesh material={badgeMaterials}>
          <boxGeometry args={[1.8, 2.65, 0.04]} />
        </mesh>

        {/* Top Slot Hole Cutout */}
        <mesh position={[0, 1.15, 0]}>
          <boxGeometry args={[0.36, 0.065, 0.06]} />
          <meshStandardMaterial color="#040608" roughness={0.9} />
        </mesh>

        {/* Interactive Hit Area */}
        <mesh visible={false}>
          <boxGeometry args={[2.4, 3.4, 0.4]} />
        </mesh>
      </group>
    </>
  );
}

// =======================================================================
// 4. WEBGL ERROR BOUNDARY FALLBACK
// =======================================================================

class CanvasErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("3D Badge Canvas Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none">
          <div className="w-20 h-28 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/10 border border-emerald-500/30 flex flex-col items-center justify-center text-emerald-400 mb-3 shadow-xl">
            <span className="font-display font-extrabold text-2xl text-white">M</span>
            <span className="text-[9px] font-mono text-emerald-300 mt-1">DEV PASS</span>
          </div>
          <div className="font-mono text-xs text-white font-bold">PHAN THI NGOC MAI</div>
          <div className="font-mono text-[11px] text-slate-400 mt-0.5">
            Full-Stack Software Engineer &bull; HCMUTE &apos;25
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// =======================================================================
// 5. EXPORTED CANVAS COMPONENT
// =======================================================================

export const DistributedNetwork3D: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dropKey, setDropKey] = useState(0);
  const [strapStyle, setStrapStyle] = useState<StrapStyle>("white"); // Default to Vercel White (like laggg.vercel.app)

  const handleReDrop = useCallback(() => {
    setDropKey((k) => k + 1);
  }, []);

  const cycleStrapStyle = useCallback(() => {
    setStrapStyle((current) => {
      if (current === "white") return "obsidian";
      if (current === "obsidian") return "emerald";
      return "white";
    });
  }, []);

  const strapLabelMap: Record<StrapStyle, string> = {
    white: "FLAT VERCEL WHITE",
    obsidian: "FLAT OBSIDIAN STRAP",
    emerald: "FLAT EMERALD STRAP",
  };

  return (
    <div
      className={`relative w-full h-[620px] sm:h-[680px] lg:h-[720px] flex items-center justify-center select-none overflow-visible ${isDragging ? "cursor-grabbing" : isHovered ? "cursor-grab" : "cursor-default"
        }`}
    >
      {/* Soft Ambient Emerald Glows Behind Canvas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* 3D WebGL Canvas - Unconstrained, borderless, fully responsive */}
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, -0.15, 4.2], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          className="w-full h-full pointer-events-auto"
        >
          {/* Studio Lights */}
          <ambientLight intensity={1.1} />
          <directionalLight position={[4, 5, 4]} intensity={2.4} color="#FFFFFF" />
          <directionalLight position={[-4, 3, 2]} intensity={2.0} color="#10B981" />
          <directionalLight position={[0, -4, -3]} intensity={1.4} color="#059669" />
          <pointLight position={[0, 2, 2.8]} intensity={1.8} color="#FFFFFF" distance={8} />

          <LanyardScene
            onHoverChange={setIsHovered}
            onDragChange={setIsDragging}
            dropKey={dropKey}
            strapStyle={strapStyle}
          />
        </Canvas>
      </CanvasErrorBoundary>

      {/* Interactive Bottom Control Pill */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md border border-slate-200 dark:border-white/[0.1] text-[11px] font-mono text-slate-700 dark:text-slate-400 shadow-lg dark:shadow-xl z-10 transition-colors">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />

        {/* Style Switcher Button */}
        <button
          type="button"
          onClick={cycleStrapStyle}
          title="Đổi kiểu dây đeo phẳng dẹp (Vercel White / Obsidian / Emerald)"
          className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white font-medium hover:underline cursor-pointer transition-colors"
        >
          <Palette size={12} className="text-emerald-500 dark:text-emerald-400" />
          <span>{strapLabelMap[strapStyle]}</span>
        </button>

        <span className="text-slate-400 dark:text-slate-500">&bull;</span>

        {/* Drop Button */}
        <button
          type="button"
          onClick={handleReDrop}
          title="Thả rơi thẻ từ trên xuống"
          className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 font-bold hover:underline cursor-pointer transition-colors"
        >
          <RefreshCw size={11} className="transition-transform hover:rotate-180 duration-300" />
          <span>DROP AGAIN</span>
        </button>
      </div>
    </div>
  );
};

export default DistributedNetwork3D;
