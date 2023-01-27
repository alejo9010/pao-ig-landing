import BackButton from '../components/BackButton';
function Asesorias() {
  return (
    <div className='container'>
      <BackButton />
      <div className='w-3/4 mx-auto'>
        <form className='flex flex-col gap-5' action=''>
          <div className=' flex flex-col'>
            <label htmlFor='instagram:'>Instagram:</label>
            <input type='text' name='instagram' />
          </div>
          <div className=' flex flex-col'>
            <label htmlFor='Nombre:'>Email:</label>
            <input type='text' name='instagram' />
          </div>
          <div className=' flex flex-col'>
            <label htmlFor='Nombre:'>Mensaje:</label>
            <textarea className='h-60' htmlFor='instagram'>
              Instagram:
            </textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Asesorias;
