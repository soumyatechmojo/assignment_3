import React from 'react'
import Records from "../product.json"
export default function Product() {
  return (
    <div>
      <table>
        <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
        </tr>

        <tr>
            <td>
                {Records.map(records=>{
                    return <div key="id">
                        {records.title}
                    </div>
                })}
            </td>

            <td>
                {Records.map(records=>{
                    return <div key="id">
                        {records.category}
                    </div>
                })}
            </td>

            {/* <td>

                {Records.map(records=>{
                    return <div key="id">
                        {records.price}
                    </div>
                })}
            </td> */}

            <td>

                {Records.map(records=>{
                    return <div key="id">
                        {records.rating.rate}
                    </div>
                })}
            </td>
        </tr>
      </table>
    </div>
  )
}
