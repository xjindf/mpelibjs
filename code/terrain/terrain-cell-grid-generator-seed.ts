// ********************************************************************************************************************
import { Generator } from "../generators/generator";
// ********************************************************************************************************************
import { random, randomInteger } from "../helpers/random.helper";
// ********************************************************************************************************************
import { TerrainCellGrid } from "./terrain-cell-grid";
// ********************************************************************************************************************
export class TerrainCellGridGeneratorSeed extends Generator<TerrainCellGrid> {

    // ****************************************************************************************************************
    // constructor
    // ****************************************************************************************************************
    constructor(public readonly coverage: number = 0.33, public readonly max: number = 1, public readonly min: number = 0.33, public readonly size: number = 8, public readonly edge: number = 1) { super(); }

    // ****************************************************************************************************************
    // function:    generate
    // ****************************************************************************************************************
    // parameters:  n/a
    // ****************************************************************************************************************
    // returns:     the target
    // ****************************************************************************************************************
    public generate(): TerrainCellGrid {

        const target = new TerrainCellGrid(this.size, this.size);

        const inner = this.size - (this.edge * 2);

        const coverage = (this.coverage * inner * inner);

        for (var pass = 0; pass < coverage;) {

            const x = randomInteger(this.edge, this.size - this.edge)

            const y = randomInteger(this.edge, this.size - this.edge)

            const tgt = target.get(x, y);

            if (tgt) {

                if (tgt.height > 0) continue;

                tgt.height = random(this.min, this.max);

                pass++;
            }
        }
        return target;
    }
}
