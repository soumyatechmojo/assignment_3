import React from 'react'
import Records from "../users.json"
export default function User() {
  return (
    <div>
      <table>
        <tr>
            <td>Serial No.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
        </tr>
        <tr>
            <td></td>
            <td>{Records.map(records=>{
                return(<div key="id">
                {records.username}
                </div>
                )
            })}</td>

            <td>{Records.map(records=>{
                return <div key="id">
                    {records.email}
                </div>
            })}</td>

            <td>{Records.map(records=>{
                return <div key="id">
                    {records.address.city}
                </div>
            })}</td>
        </tr>
      </table>
    </div>
  )
}
