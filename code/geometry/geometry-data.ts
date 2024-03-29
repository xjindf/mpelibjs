// ********************************************************************************************************************
import { IEquality } from "../shared/equality.interface";
import { Colour } from "../types/colour";
import { Vector2 } from "../types/vector2";
import { Vector3 } from "../types/vector3";
// ********************************************************************************************************************
export class GeometryData implements IEquality<GeometryData> {

    // ****************************************************************************************************************
    // constructor
    // ****************************************************************************************************************
    constructor(public position: Vector3 | null = null, public uv: Vector2 | null = null, public normal: Vector3 | null = null, public colour: Colour | null = null, public uv2: Vector2 | null = null) { }

    // ****************************************************************************************************************
    // function:    equals
    // ****************************************************************************************************************
    // parameters:  other - the other
    // ****************************************************************************************************************
    // returns:     whether equal
    // ****************************************************************************************************************
    public equals(other: GeometryData): boolean {

        if (other) {

            // ********************************************************************************************************
            // check position
            // ********************************************************************************************************

            var equals = (this.position === null && other.position === null) ||

                (this.position !== null && other.position !== null && this.position.equals(other.position));

            if (equals === false) return equals;

            // ********************************************************************************************************
            // check uv
            // ********************************************************************************************************

            equals = (this.uv === null && other.uv === null) ||

                (this.uv !== null && other.uv !== null && this.uv.equals(other.uv));

            if (equals === false) return equals;

            // ********************************************************************************************************
            // check normal
            // ********************************************************************************************************

            equals = (this.normal === null && other.normal === null) ||

                (this.normal !== null && other.normal !== null && this.normal.equals(other.normal));

            if (equals === false) return equals;

            // ********************************************************************************************************
            // check colour
            // ********************************************************************************************************

            equals = (this.colour === null && other.colour === null) ||

                (this.colour !== null && other.colour !== null && this.colour.equals(other.colour));

            if (equals === false) return equals;

            // ********************************************************************************************************
            // check uv2
            // ********************************************************************************************************

            equals = (this.uv2 === null && other.uv2 === null) ||

                (this.uv2 !== null && other.uv2 !== null && this.uv2.equals(other.uv2));

            return equals;
        }
        return false;
    }
}
