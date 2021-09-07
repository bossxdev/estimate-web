import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'

const Init = (scene) => {
  const { sceneModel } = scene

  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)
    // scene.fog = new THREE.Fog(0xa0a0a0, 1, 1600)

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444)
    scene.add(hemiLight)

    const dirLight = new THREE.DirectionalLight(0xffffff)
    dirLight.position.set(100, 200, 300)
    dirLight.castShadow = true
    dirLight.shadow.camera.top = 300
    dirLight.shadow.camera.bottom = -300
    dirLight.shadow.camera.left = -300
    dirLight.shadow.camera.right = 300
    dirLight.shadow.camera.near = 0.1
    dirLight.shadow.camera.far = 500
    scene.add(dirLight)

    // ground

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(5000, 5000),
      new THREE.MeshPhongMaterial({
        color: 0x999999,
        depthWrite: false,
      })
    )
    mesh.receiveShadow = true
    mesh.rotation.x = -Math.PI / 2
    // scene.add(mesh)

    // model

    scene.add(sceneModel)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth / 5, window.innerHeight / 5)
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.shadowMap.enabled = true

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      5000
    )
    camera.position.z = 300

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableRotate = false
    controls.enableZoom = false

    const element = document.getElementById('init') //?  สร้าง element wrbgl

    element.appendChild(element !== null ? renderer.domElement : '') //?  ถ้า element != null ให้เรนเดอร์ parent child renderer.domElement

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth / 5, window.innerHeight / 5)
    }
    window.addEventListener('resize', onWindowResize)

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      element.removeChild(renderer.domElement)
    } //?  didMount โดยการ remove parent child ของ renderer.domElement ออกไป
  }, [sceneModel]) //? dependencies กำหนดว่าให้ props ไหนที่มีการเปลี่ยนแปลง

  return <div id="init" />
}

export default Init
