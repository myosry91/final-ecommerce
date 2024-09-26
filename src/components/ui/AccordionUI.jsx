import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const AccordionUI = ({title, children}) => {
  return (
      <Accordion sx={{boxShadow:'none'}}>
          <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
              <p className="text-xl font-bold">{title}</p>
          </AccordionSummary>
          <AccordionDetails>
              {children}
          </AccordionDetails>
   </Accordion>
  )
}

export default AccordionUI
