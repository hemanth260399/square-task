import { useState } from 'react'
import './App.css'
export let Smallbox = () => {
    let [splitbox, setsplitbox] = useState({})
    let handleboxclick = (index) => {
        setsplitbox((data) => ({ ...data, [`box-${index + 2}`]: true }))
    }
    let box = [[], [], [], []]
    return (
        <>
            {
                box.map((data, index) => {
                    return (
                        <>
                            < div className="smallOuterBox" name={`box-${index + 2}`
                            } key={index} onClick={() => handleboxclick(index)} >
                                {splitbox[`box-${index + 2}`] && (
                                    <Smallbox />
                                )
                                }
                            </div >
                        </>
                    )
                })
            }
        </>
    )
}