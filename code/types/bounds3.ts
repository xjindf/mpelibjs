// ********************************************************************************************************************
import * as THREE from 'three';
import { IEquality } from '../shared/equality.interface';
import { Vector3 } from "./vector3";
// ********************************************************************************************************************
export class Bounds3 extends THREE.Box3 implements IEquality<Bounds3> {

    // ****************************************************************************************************************
    // constructor
    // ****************************************************************************************************************
    constructor(min: Vector3, max: Vector3) { super(min, max); }

    // ****************************************************************************************************************
    // function:    insideOrOnEdge
    // ****************************************************************************************************************
    // parameters:  vector - the vector
    // ****************************************************************************************************************
    // returns:     whether inside or on the edge
    // ****************************************************************************************************************
    public insideOrOnEdge(vector: Vector3): boolean {

        if (vector) {

            if (vector.x < this.min.x) return false;

            if (vector.y < this.min.y) return false;

            if (vector.z < this.min.z) return false;

            if (vector.x > this.max.x) return false;

            if (vector.y > this.max.y) return false;

            if (vector.z > this.max.z) return false;
        }
        return true;
    }

    // ****************************************************************************************************************
    // function:    intersects
    // ****************************************************************************************************************
    // parameters:  bounds - the bounds
    // ****************************************************************************************************************
    // returns:     whether intersects
    // ****************************************************************************************************************
    public intersects(bounds: Bounds3): boolean {

        if (bounds) {

            if (bounds.max.x < this.min.x) return false;

            if (bounds.max.y < this.min.y) return false;

            if (bounds.max.z < this.min.z) return false;

            if (bounds.min.x > this.max.x) return false;

            if (bounds.min.y > this.max.y) return false;

            if (bounds.min.z > this.max.z) return false;
        }
        return true;
    }

    // ****************************************************************************************************************
    // function:    outside
    // ****************************************************************************************************************
    // parameters:  vector - the vector
    // ****************************************************************************************************************
    // returns:     whether outside
    // ****************************************************************************************************************
    public outside(vector: Vector3): boolean {

        return !this.insideOrOnEdge(vector);
    }
}
