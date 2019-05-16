import React from 'react';

import { Formik } from 'formik';
import { Button, Input, FormGroup, Label, FormFeedback } from 'reactstrap';
import moment from 'moment';
import * as Yup from 'yup';

import { ErrorMessage } from '../components';

const FormBody = ({ btnTxt = 'Save Expense', onSubmit, expense = {} }) => {
  const { amount = '', created = undefined, description = '' } = expense;
  const now = created
    ? moment(created).format('YYYY-MM-DD')
    : moment().format('YYYY-MM-DD');
  return (
    <Formik
      initialValues={{ amount, created: now, description }}
      onSubmit={onSubmit}
      validationSchema={Yup.object().shape({
        amount: Yup.number()
          .min(1)
          .required(),
        description: Yup.string().min(3),
        created: Yup.date().required()
      })}
      render={({
        errors,
        touched,
        handleBlur,
        handleChange,
        values,
        handleSubmit,
        isValid,
        isSubmitting
      }) => (
        <div>
          <ErrorMessage />
          <FormGroup>
            <Label>Description</Label>
            <Input
              invalid={errors.description && touched.description}
              name="description"
              type="string"
              value={values.description}
              placeholder="Enter Expesne description"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.description && touched.description && (
              <FormFeedback>{errors.description}</FormFeedback>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Amount</Label>
            <Input
              invalid={errors.amount && touched.amount}
              name="amount"
              type="number"
              value={values.amount}
              placeholder="Enter Expesne Amount"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.amount && touched.amount && (
              <FormFeedback>{errors.amount}</FormFeedback>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Date</Label>
            <Input
              invalid={errors.created && touched.created}
              name="created"
              type="date"
              value={values.created}
              placeholder="Enter Expesne Amount"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.created && touched.created && (
              <FormFeedback>{errors.created}</FormFeedback>
            )}
          </FormGroup>

          <Button
            color="primary"
            onClick={handleSubmit}
            disabled={!isValid || isSubmitting}
          >
            {btnTxt}
          </Button>
        </div>
      )}
    />
  );
};

export { FormBody };
