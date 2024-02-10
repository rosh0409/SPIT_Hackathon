import React from 'react';
import "./Apply.css"
import { Box } from '@mui/material';

function ApplyForm() {
    return (
       <Box sx={{
        width:'100%',
        height:'100vh',
        bgcolor:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
       }}>
         <div id="form-container">
            <div id="left-container">
                <h2 style={{
                    color:'white'
                }}>Farmer Information Form</h2>
                {/* Add additional content for the left container if needed */}
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="aadhar">Aadhar Card No:</label>
                <input type="text" id="aadhar" name="aadhar" required />

                <label htmlFor="eKisaan">e-Kisaan No:</label>
                <input type="text" id="eKisaan" name="eKisaan" required />

                <label htmlFor="loan">Ask for a Loan:</label>
                <select id="loan" name="loan">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div id="right-container">
                <h2></h2>

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" required />

                <label htmlFor="profitLoss">Profit and Loss of Last Month:</label>
                <textarea id="profitLoss" name="profitLoss" rows="4" required></textarea>

                <label htmlFor="rainfall">Rainfall:</label>
                <input type="text" id="rainfall" name="rainfall" required />

                <label htmlFor="humidity">Humidity:</label>
                <input type="text" id="humidity" name="humidity" required />

                <label htmlFor="crop">Type of Crop Yield:</label>
                <input type="text" id="crop" name="crop" required />

                <button type="submit">Submit</button>
            </div>
        </div>
       </Box>
    );
}

export default ApplyForm;
