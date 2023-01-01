// ********************************************************************************************************************
import { clampZeroOne } from "../helpers/math.helper";
import { TerrainHeights } from "../terrain/terrain-heights";
import { TerrainCellGrid } from "./terrain-cell-grid";
// ********************************************************************************************************************
export class TerrainCellGridHeights extends TerrainHeights {

    // ****************************************************************************************************************
    // offsetX - the offset x
    // ****************************************************************************************************************
    private readonly offsetX: number = 0;

    // ****************************************************************************************************************
    // offsetY - the offset y
    // ****************************************************************************************************************
    private readonly offsetY: number = 0;

    // ****************************************************************************************************************
    // constructor
    // ****************************************************************************************************************
    constructor(private readonly grid: TerrainCellGrid) {

        super();

        this.offsetX = grid.sizeX >> 1;

        this.offsetY = grid.sizeY >> 1;
    }

    // ****************************************************************************************************************
    // function:    getHeight
    // ****************************************************************************************************************
    // parameters:  x - the x
    // ****************************************************************************************************************
    //              y - the y
    // ****************************************************************************************************************
    // returns:     the height
    // ****************************************************************************************************************
    public getHeight(x: number, y: number): number {

        const cell = this.grid.get(this.offsetX + x, this.offsetY + y);

        return clampZeroOne(cell?.height ?? 0);
    }
}
