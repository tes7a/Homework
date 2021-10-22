import React, {useState, MouseEvent, MouseEventHandler} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())
            // setDate
        }, 1000)
        setTimerId(id)
    }


    const onMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
        setShow(true)
        // show
    }


    const onMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
        setShow(false)
        // close
    }

    const stringTime = date?.toLocaleTimeString() || <br/>// fix with date
    const stringDate = date?.toLocaleDateString() || <br/> // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
