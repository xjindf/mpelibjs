// ********************************************************************************************************************
import * as THREE from 'three';
import { lerp, max, min } from "../helpers/math.helper";
import { IEquality } from '../shared/equality.interface';
// ********************************************************************************************************************
export class Vector2 extends THREE.Vector2 implements IEquality<Vector2> {

    // ****************************************************************************************************************
    // constructor
    // ****************************************************************************************************************
    constructor(x: number = 0, y: number = 0) { super(x, y); }

    // ****************************************************************************************************************
    // function:    max
    // ****************************************************************************************************************
    // parameters:  vector1 - the vector 1
    // ****************************************************************************************************************
    //              vector2 - the vector 2
    // ****************************************************************************************************************
    // returns:     the max
    // ****************************************************************************************************************
    public static max(vector1: Vector2, vector2: Vector2): Vector2 {

        if (vector1 && vector2) {

            const x = max(vector1.x, vector2.x);

            const y = max(vector1.y, vector2.y);

            return new Vector2(x, y);
        }
        return vector1 ?? vector2 ?? null;
    }

    // ****************************************************************************************************************
    // function:    mid
    // ****************************************************************************************************************
    // parameters:  vector1 - the vector 1
    // ****************************************************************************************************************
    //              vector2 - the vector 2
    // ****************************************************************************************************************
    // returns:     the mid
    // ****************************************************************************************************************
    public static mid(vector1: Vector2, vector2: Vector2): Vector2 {

        if (vector1 && vector2) {

            const x = lerp(vector1.x, vector2.x);

            const y = lerp(vector1.y, vector2.y);

            return new Vector2(x, y);
        }
        return vector1 ?? vector2 ?? null;
    }

    // ****************************************************************************************************************
    // function:    min
    // ****************************************************************************************************************
    // parameters:  vector1 - the vector 1
    // ****************************************************************************************************************
    //              vector2 - the vector 2
    // ****************************************************************************************************************
    // returns:     the min
    // ****************************************************************************************************************
    public static min(vector1: Vector2, vector2: Vector2): Vector2 {

        if (vector1 && vector2) {

            const x = min(vector1.x, vector2.x);

            const y = min(vector1.y, vector2.y);

            return new Vector2(x, y);
        }
        return vector1 ?? vector2 ?? null;
    }
}
