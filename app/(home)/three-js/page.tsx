import * as THREE from "three"

//Create a scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x050505)

//Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

//Create a renderer
const renderer = new THREE.WebGLRenderer()
