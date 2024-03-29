// ********************************************************************************************************************
import { round } from "../helpers/math.helper";
import { IEquality } from "../shared/equality.interface";
import { Bounds2 } from "./bounds2";
// ********************************************************************************************************************
export class Array2<_TType extends IEquality<_TType>> {

    // ****************************************************************************************************************
    // array - the array
    // ****************************************************************************************************************
    protected readonly array: _TType[][] = [];

    // ****************************************************************************************************************
    // constructor
    // ****************************************************************************************************************
    constructor(public readonly sizeX: number, public readonly sizeY: number) {

        for (var x = 0; x < this.sizeX; x++) {

            this.array[x] = [];
        }
    }

    // ****************************************************************************************************************
    // function:    copy
    // ****************************************************************************************************************
    // parameters:  source - the source
    // ****************************************************************************************************************
    //              bounds - the bounds to copy or null for all
    // ****************************************************************************************************************
    // returns:     n/a
    // ****************************************************************************************************************
    public copy(source: Array2<_TType>, bounds: Bounds2 | null = null): void {

        if (source) {

            const x1 = bounds?.min.x ?? 0;

            const x2 = bounds?.max.x ?? this.sizeX - 1;

            const y1 = bounds?.min.y ?? 0;

            const y2 = bounds?.max.y ?? this.sizeY - 1;

            for (var x = x1; x <= x2; x++) {

                for (var y = y1; y <= y2; y++) {

                    const value = source.get(x, y);

                    if (value) this.set(x, y, value);
                }
            }
        }
    }

    // ****************************************************************************************************************
    // function:    get
    // ****************************************************************************************************************
    // parameters:  x - the x
    // ****************************************************************************************************************
    //              y - the y
    // ****************************************************************************************************************
    // returns:     the value
    // ****************************************************************************************************************
    public get(x: number, y: number): _TType {

        const result = this.getInternal(round(x), round(y));

        return result;
    }

    // ****************************************************************************************************************
    // function:    getInternal
    // ****************************************************************************************************************
    // parameters:  x - the x
    // ****************************************************************************************************************
    //              y - the y
    // ****************************************************************************************************************
    // returns:     the value
    // ****************************************************************************************************************
    private getInternal(x: number, y: number): _TType {

        if (this.valid(x, y)) {

            return this.array[x][y];
        }
        return this.array[0][0];
    }

    // ****************************************************************************************************************
    // function:    set
    // ****************************************************************************************************************
    // parameters:  x - the x
    // ****************************************************************************************************************
    //              y - the y
    // ****************************************************************************************************************
    //              value - the value
    // ****************************************************************************************************************
    // returns:     n/a
    // ****************************************************************************************************************
    public set(x: number, y: number, value: _TType): void {

        this.setInternal(round(x), round(y), value);
    }

    // ****************************************************************************************************************
    // function:    setInternal
    // ****************************************************************************************************************
    // parameters:  x - the x
    // ****************************************************************************************************************
    //              y - the y
    // ****************************************************************************************************************
    //              value - the value
    // ****************************************************************************************************************
    // returns:     n/a
    // ****************************************************************************************************************
    private setInternal(x: number, y: number, value: _TType): void {

        if (this.valid(x, y)) {

            this.array[x][y] = value;
        }
    }

    // ****************************************************************************************************************
    // function:    valid
    // ****************************************************************************************************************
    // parameters:  x - the x
    // ****************************************************************************************************************
    //              y - the y
    // ****************************************************************************************************************
    // returns:     whether this is a valid index
    // ****************************************************************************************************************
    public valid(x: number, y: number): boolean {

        if (x < 0) return false;

        if (x >= this.sizeX) return false;

        if (y < 0) return false;

        if (y >= this.sizeY) return false;

        return true;
    }
}
