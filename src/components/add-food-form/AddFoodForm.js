import React from 'react'

export default function AddFoodForm({changeStateInParent, submit}) {
    return (
      <div>
        <input type="text" onChange={changeStateInParent} name="name" placeholder='Name' />
        <input type="text" onChange={changeStateInParent} name="calories" placeholder='Calories' />
        <input type="text" onChange={changeStateInParent} name='image' placeholder='Image' />
        <button onClick={submit}>Submit</button>
      </div>
    )
}
