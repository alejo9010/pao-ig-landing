import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function BackButton({ path = '/' }) {
  return (
    <div className='px-5 mb-2 inline-block'>
      <Link to={path}>
        <FaArrowCircleLeft className='text-2xl text-yellow-700' />
      </Link>
    </div>
  );
}

export default BackButton;
