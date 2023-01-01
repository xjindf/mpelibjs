// ********************************************************************************************************************
import { createNoise3D, NoiseFunction3D } from 'simplex-noise';
import * as THREE from 'three';
import { FogExp2 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TerrainCellGridHeights } from './code/terrain-cell/terrain-cell-grid-heights';
import { TerrainSeedGenerator } from './code/terrain-generation/terrain-seed-generator';
import { TerrainShiftModifier } from './code/terrain-generation/terrain-shift-modifier';
import { TerrainSmoothModifier } from './code/terrain-generation/terrain-smooth-modifier';
import { TerrainUpscaleModifier } from './code/terrain-generation/terrain-upscale-modifier';
import { TerrainHeights } from './code/terrain/terrain-heights';
import { TerrainPatchGrid } from './code/terrain/terrain-patch-grid';
// ********************************************************************************************************************

// ********************************************************************************************************************
// noise
// ********************************************************************************************************************
const noise: NoiseFunction3D = createNoise3D();

// ********************************************************************************************************************
// scene & renderer
// ********************************************************************************************************************
const scene = new THREE.Scene();

scene.background = new THREE.Color('#333333');

scene.fog = new FogExp2('#a0a0a0', 0.001)

const renderer = new THREE.WebGLRenderer();

// ********************************************************************************************************************
// camera
// ********************************************************************************************************************
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 2000);

camera.position.y = 200; camera.position.z = 256;

new OrbitControls(camera, renderer.domElement);

// ********************************************************************************************************************
// lighting
// ********************************************************************************************************************
const sun = new THREE.DirectionalLight('#f0f0e0', 1.0);

sun.position.z = -100; sun.position.y = 64;

scene.add(sun);

// ********************************************************************************************************************
// ocean
// ********************************************************************************************************************
/*
const oceanGeometry = new THREE.PlaneGeometry(512, 512, 256, 256);

oceanGeometry.rotateX(THREE.MathUtils.degToRad(-90));

const oceanMaterial = new THREE.MeshStandardMaterial({ color: '#3366a0', roughness: 0.5, metalness: 0, wireframe: false });

const ocean = new THREE.Mesh(oceanGeometry, oceanMaterial);

var oceanPass = 0;

ocean.position.y = 8;

scene.add(ocean);
*/
// ********************************************************************************************************************
// terrain generation
// ********************************************************************************************************************

var terrainGrid = new TerrainSeedGenerator().generate();

while (terrainGrid.sizeX < 512) {

    terrainGrid = new TerrainUpscaleModifier().modify(terrainGrid);

    terrainGrid = new TerrainShiftModifier().modify(terrainGrid);
}
terrainGrid = new TerrainSmoothModifier().modify(terrainGrid);

// ********************************************************************************************************************
// terrain
// ********************************************************************************************************************

const terrainHeights = new TerrainCellGridHeights(terrainGrid);

//const terrainHeights = new TerrainHeights();

const terrain = new TerrainPatchGrid(32, 32, 50);

terrain.create(scene, terrainHeights);

// ********************************************************************************************************************
// initialise
// ********************************************************************************************************************
function initialise() {

    addEventListener('resize', resize);

    document.body.appendChild(renderer.domElement);

    resize();

    update();
}

// ********************************************************************************************************************
// resize
// ********************************************************************************************************************
function resize() {

    camera.aspect = window.innerWidth / window.innerHeight;

    renderer.setSize(window.innerWidth, window.innerHeight);
}

// ********************************************************************************************************************
// update
// ********************************************************************************************************************
function update() {

    requestAnimationFrame(update);

    renderer.render(scene, camera);

    // updateOcean();
}

// ********************************************************************************************************************
// updateOcean
// ********************************************************************************************************************
/*
function updateOcean() {

    const positions = oceanGeometry.getAttribute('position');

    for (var i = 0; i < positions.count; i++) {

        const x = positions.getX(i);

        const z = positions.getZ(i);

        const noise1 = noise(x / 4, z / 4, oceanPass) * 0.1;

        const noise2 = noise(x / 32, z / 32, oceanPass) * 0.1;

        const height = (noise1 + noise2) * 4;

        positions.setY(i, height);
    }
    oceanPass += 0.005;

    oceanGeometry.computeVertexNormals();

    oceanGeometry.attributes.position.needsUpdate = true;
}
*/
initialise();
