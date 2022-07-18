import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SignList from './Lists/SignList.jsx';
import SignedList from './Lists/SignedList.jsx';
import { resetDocToView } from './ViewDocument/ViewDocumentSlice';
import { resetDocToSign } from './SignDocument/SignDocumentSlice';
import { Box, Button, Container, Heading } from 'gestalt';
import 'gestalt/dist/gestalt.css';


const ProfilePage = () => {
  
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDocToView());
    dispatch(resetDocToSign());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <Box padding={3}>
          <Heading size="md">{`Sign Documents`}</Heading>
        </Box>
        <Box padding={3}>
          <SignList />
        </Box>
        <Box padding={3}>
          <Heading size="md">{`Prepare Document`}</Heading>
        </Box>
        <Box padding={2}>
          <Button
            onClick={event => {
              navigate(`/assignUsers`);
            }}
            text="Prepare Document for Signing"
            color="blue"
            inline
          />
        </Box>
        <Box padding={3}>
          <Heading size="md">{`Review Signed Documents`}</Heading>
        </Box>
        <Box padding={3}>
          <SignedList />
        </Box>
      </Container>
    </div>
  );
};
export default ProfilePage;
