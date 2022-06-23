import { FiLoader } from 'react-icons/fi';
import s from '../Loader/Loader.module.css';
const Loader = () => {
  return <FiLoader className={s.rotate} size="30px" />;
};
export default Loader;
