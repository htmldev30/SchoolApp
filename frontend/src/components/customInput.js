import React, { useState } from 'react'
import { Input, FormControl } from 'native-base'
export const CustomInput = (props, { inputError }) => {
    return (
        <FormControl w="100%">
            <Input {...props} borderWidth={2} />
            {inputError ? (
                <FormControl.ErrorMessage>
                    Try different from previous passwords.
                </FormControl.ErrorMessage>
            ) : null}
        </FormControl>
    )
}
