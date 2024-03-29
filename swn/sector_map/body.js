// Class for making celestial bodies.
import * as th from 'three';

// Spherical body, i.e. planets, moons
export class Body {
    constructor(name, size, xDist, zDist, face, col) {
        this.name = name;
        this.size = size;
        this.positionX = xDist;
        this.positionZ = zDist;
        this.face = face;
        if (this.mesh === undefined || this.mesh === null) {
            const geometry = new th.SphereGeometry(this.size);
            const material = new th.MeshBasicMaterial({ color: col, map: this.face });
            this.mesh = new th.Mesh(geometry, material);
            this.mesh.position.x += this.positionX;
            this.mesh.position.z += this.positionZ;
        }
    }
}


// Class to create entire systems
export class StarSystem {
    constructor(name, size, planets, x, y, z, face, faceColor) {
        this.name = name;
        this.size = size;
        this.planets = planets;
        this.posX = x;
        this.posY = y;
        this.posZ = z;
        this.face = face;
        this.faceColor = faceColor;
        this.planetsMesh = [];

        // Create Star Mesh
        if (this.mesh === undefined || this.mesh === null) {
            this.mesh = new Body(name, size, x, z, face, faceColor).mesh
        }

        // Make Planet Meshes
        // if (numPlanets != 0) {
        //     for (let i = 1; i <= numPlanets; i++) {
        //         // figure out planet size later
        //         const planetSize = th.MathUtils.randFloat(0.1, .25)
        //         const planetDistance = th.MathUtils.randFloatSpread(5);
        //         const planet = new Body('Planet1', planetSize, (i+1) *1.25, 0, face, faceColor)
        //         this.planetsMesh[i] = new th.Group();
        //         this.planetsMesh[i].add(planet.mesh);
        //         this.planetsMesh[i].position.set(x,y,z)
        //     }
        // }

        if (this.planets.length > 0) {
            for (let i = 0; i <= planets.length; i++) {
                // figure out planet size later
                const planetSize = th.MathUtils.randFloat(0.1, .25)
                const planetDistance = th.MathUtils.randFloatSpread(5);
                const planet = new Body(planets[i], planetSize, (i+ (size/1.5)) * 1.25, 0, face, faceColor)
                this.planetsMesh[i] = new th.Group();
                this.planetsMesh[i].add(planet.mesh);
                this.planetsMesh[i].position.set(x,y,z)
            }
        }
    }
}