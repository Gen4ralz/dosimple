import { styled } from '@mui/styles';
import { Button } from '@mui/material';

const EmptyButton = styled(Button)({
  boxShadow: 'none',
  fullWidth: false,
  width: '40%',
  height: 45,
  borderRadius: 10,
});

export default EmptyButton;
