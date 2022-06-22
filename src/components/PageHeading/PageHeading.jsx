import s from '../PageHeading/PageHeading.module.css';
const PageHeading = ({ text }) => {
  return (
    <>
      <h1 className={s.h1}>{text.toUpperCase()}</h1>
    </>
  );
};
export default PageHeading;
