// ********************************************************************************************************************
import { max, min, normalize } from "../../helpers/math.helper";
import { Modifier } from "../../modifiers/modifier";
import { TerrainCellGrid } from "../terrain-cell/terrain-cell-grid";
// ********************************************************************************************************************
export class TerrainModifierNormalize extends Modifier<TerrainCellGrid, TerrainCellGrid> {

    // ****************************************************************************************************************
    // constructor
    // ****************************************************************************************************************
    constructor() { super(); }

    // ****************************************************************************************************************
    // function:    modify
    // ****************************************************************************************************************
    // parameters:  source - the source
    // ****************************************************************************************************************
    // returns:     the target
    // ****************************************************************************************************************
    public modify(source: TerrainCellGrid): TerrainCellGrid {

        // ************************************************************************************************************
        // obtain minimum and maximum
        // ************************************************************************************************************

        var minimum = Number.MAX_SAFE_INTEGER;

        var maximum = Number.MIN_SAFE_INTEGER;

        for (var x = 0; x < source.sizeX; x++) {

            for (var y = 0; y < source.sizeY; y++) {

                var src = source.get(x, y);

                minimum = min(minimum, src.height);

                maximum = max(maximum, src.height);
            }
        }

        // ************************************************************************************************************
        // normalize
        // ************************************************************************************************************

        for (var x = 0; x < source.sizeX; x++) {

            for (var y = 0; y < source.sizeY; y++) {

                var src = source.get(x, y);

                src.height = normalize(src.height, minimum, maximum);
            }
        }
        return source;
    }
}