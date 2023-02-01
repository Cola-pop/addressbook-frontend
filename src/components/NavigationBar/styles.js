import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  position: 'relative',
  header: {
    paddingLeft: '0px',
    position: 'relative',
    minHeight: '100px',
    display: 'flex',
    transition: '0.5s ease-in-out',
    justifyContent: 'center',
  },
  button: {
    color: '#fff',
  },
}));

export default useStyles;
