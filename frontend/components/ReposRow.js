import Link from "next/link";
import React, { useState } from "react";
import {} from 'next-auth/react'

const rowData  = {
  
    mentor:"",
    rank:"",
    contributions:""
}
  
function ReposRow(props) {
    return (
        <div>
          <table>
            <tr>
              <td>{props.mentor}</td>
              <td>{props.rank}</td>
              <td>{props.contributions}</td>
            </tr>
          </table>
        </div>
      );
}

export default ReposRow;

