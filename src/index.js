/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as THREE from 'three';
import { init } from './init.js';




function setupScene({ scene }) {
	const floorGeometry = new THREE.PlaneGeometry(6, 6);
	const floorMaterial = new THREE.MeshStandardMaterial({color: 'white'});
	const floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.rotateX(-Math.PI / 2);
	scene.add(floor);
}

init(setupScene);
