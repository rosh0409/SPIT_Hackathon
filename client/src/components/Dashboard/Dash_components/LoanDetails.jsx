import { Box } from '@mui/material'
import React from 'react'
import "./Details.css"

const LoanDetails = () => {
  return (
 <>
 <Box sx={{
    width:'100%',
    height:'100vh',
    bgcolor:'white'
 }}> 
    <h1 style={{
        backgroundColor:'white',
        textAlign:'center'
    }}>Farmer Details</h1>
    <Box>
    <table class="vitamins">
        <thead>
            <tr>
                <th>Lender</th>
                <th>Enterprise</th>
                <th>Interest</th>
                <th>Loan</th>
                <th>Paid</th>
              
            </tr>
        </thead>
        <tfoot>
            <tr>
                <td colspan="4">
                    <p><strong>mcg</strong> stands for micrograms. <strong>IU</strong> stands for International Units</p>
               
                </td>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td>A</td>
                <td>fat-soluble</td>
                <td>Dark-colored fruit</td>
                <td>3,000 IU/day</td>
                <td>3,000 IU/day</td>
            </tr>
            <tr>
                <td>B</td>
                <td>water-soluble</td>
                <td>Lean meats</td>
                <td>3,000 IU/day</td>
                <td>1 mcg/day</td>
            </tr>
            <tr>
                <td>B 1</td>
                <td>water-soluble</td>
                <td>Lean meats</td>
                <td>3,000 IU/day</td>
                <td>2.2 mcg/day</td>
            </tr>
            <tr>
                <td>B 6</td>
                <td>water-soluble</td>
                <td>Nuts</td>
                <td>3,000 IU/day</td>
                <td>1.7 mg/day</td>
            </tr>
            <tr>
                <td>B 12</td>
                <td>water-soluble</td>
                <td>3,000 IU/day</td>
                <td>Meat</td>
                <td>2.4 mcg/day</td>
            </tr>
            <tr>
                <td>C</td>
                <td>water-soluble</td>
                <td>Broccoli</td>
                <td>3,000 IU/day</td>
                <td>90 mg/day</td>
            </tr>
            <tr>
                <td>D</td>
                <td>fat-soluble</td>
                <td>Fish</td>
                <td>3,000 IU/day</td>
                <td>600 IU/day</td>
            </tr>
            <tr>
                <td>E</td>
                <td>fat-soluble</td>
                <td>Avocado</td>
                <td>3,000 IU/day</td>
                <td>33 IU/day</td>
            </tr>
            <tr>
                <td>K</td>
                <td>fat-soluble</td>
                <td>Cabbage</td>
                <td>3,000 IU/day</td>
                <td>120 mcg/day</td>
            </tr>
        </tbody>
    </table>
    </Box>
 </Box>
 </>
  )
}

export default LoanDetails
