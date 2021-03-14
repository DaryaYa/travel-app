import React from 'react';
import { Form } from 'react-bootstrap';

type LeaveRating = {
  onChangeHandler: any
}

const LeaveRatingForm: React.FC<LeaveRating> = ({ onChangeHandler }) => {
  return (
      <>
        <h5>If you were here - rate this place</h5>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control
              as='select'
              onChange={(e) => onChangeHandler(+e.target.value)}
            >
              <option value=''>Select rating...</option>
              <option value='1'>1 - Poor</option>
              <option value='2'>2 - Fair</option>
              <option value='3'>3 - Good</option>
              <option value='4'>4 - Very Good</option>
              <option value='5'>5 - Excellent</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </>
  )
}

export default LeaveRatingForm
