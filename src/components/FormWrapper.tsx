import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineLock} from 'react-icons/ai';
const FormWrapper = () => (
  
  <div className="flex justify-center m-32">
    <div className="bg-slate-400 w-96 h-80 rounded-md">
      <div className="text-center  p-7 font-medium text-lg">
        Вход в Yoldi Agency
      </div>
      
      <div className="relative">
        <div className="flex items-center px-20">
          <AiOutlineMail className='w-5 h-5 absolute ml-3'/>
          <input className="w-80 h-12 rounded-md outline-none pr-3 pl-10" type="email" placeholder="E-mail" />
        </div>
      </div>

    
      <div className="relative py-4">
        <div className="flex items-center px-20">
          <AiOutlineLock className='w-5 h-5 absolute ml-3'/>
          <input className="w-80 h-12 rounded-md outline-none pr-3 pl-10" type="email" placeholder="Пароль" />
        </div>
      </div>

      <div className="text-center">
        <button className="w-80 h-12 rounded-md bg-slate-200">Войти</button>
      </div>
    </div>
  </div>
)

export default FormWrapper;