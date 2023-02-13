import React, { useState } from 'react'
import { Button } from 'native-base'
export const CustomButton = (props) => {
    const [pressed, setPressed] = useState(false) //  for future use
    return (
        <Button {...props} borderWidth={2} colorScheme="custom_dark">
            {props.label}
        </Button>
    )
}
