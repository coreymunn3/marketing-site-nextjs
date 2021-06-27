import {
  Overlay,
  ModalContainer,
  ModalContent,
  ModalHeader,
  SignInForm,
  SignInFieldGroup,
  SignInFieldLabel,
  SignInField,
} from './Modal.elements';
import { Button } from '../../styles/globals';
import { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, handleClose }) => {
  const contentVariants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        diratoion: 0.2,
      },
    },
  };
  const overlayVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  console.log(isOpen);
  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          <Overlay
            onClick={handleClose}
            as={motion.div}
            variants={overlayVariants}
            initial='hidden'
            animate='visible'
          />
          <ModalContainer>
            <ModalContent
              as={motion.div}
              variants={contentVariants}
              initial='hidden'
              animate='visible'
            >
              <ModalHeader>Sign In</ModalHeader>
              <SignInForm>
                <SignInFieldGroup>
                  <SignInFieldLabel>Email</SignInFieldLabel>
                  <SignInField type='email' />
                </SignInFieldGroup>
                <SignInFieldGroup>
                  <SignInFieldLabel>Password</SignInFieldLabel>
                  <SignInField type='password' />
                </SignInFieldGroup>
                <SignInFieldGroup>
                  <Button primary>Sign In</Button>
                </SignInFieldGroup>
                <p style={{ color: 'grey', textAlign: 'center' }}>
                  Note, this form is an example, currently has no functionality
                </p>
              </SignInForm>
            </ModalContent>
          </ModalContainer>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default Modal;
