import React from 'react'
import Drop from "@components/drop";
import {useAppSelector} from "@storeApp/hooks";
import {screen} from "@features/screenSlice";

const Screen = (props) => {
    const { width,height,scale } = useAppSelector(screen)
    return <Drop style={{width:width+'px',height:height+'px'}}>
        <div>

        </div>
    </Drop>
}


export default Screen
