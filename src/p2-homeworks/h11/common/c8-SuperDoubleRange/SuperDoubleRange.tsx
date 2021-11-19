import React, {ChangeEvent} from 'react';
import Slider from "@material-ui/core/Slider";

type SuperDoubleRangePropsType = {
    onChangeDoubleRange?: (newValues: number | number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeDoubleRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (event: ChangeEvent<{}>, newValues: number | number[]): void => {
        onChangeDoubleRange && onChangeDoubleRange(newValues)
    }
    return (
        <>
            <Slider
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                style={{width: '100px'}}
            />
        </>
    )
}

export default SuperDoubleRange
