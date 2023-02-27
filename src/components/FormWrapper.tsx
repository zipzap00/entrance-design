const FormWrapper = () => {
  return (
  <div className="flex justify-center m-32">
    <div className="bg-slate-400 w-96 h-80 rounded-md" >
      <div className="text-center  p-7 font-medium text-lg">
      Вход в Yoldi Agency
      </div> 
      <div className="text-center">
        <input className="w-80 h-12 rounded-md outline-none" type="email" placeholder="E-mail"/>
      </div>
      <div className="text-center  py-4">
        <input className="w-80 h-12 rounded-md outline-none" type="email" placeholder="Пароль"/>
      </div>
      <div className="text-center">
        <button className="w-80 h-12 rounded-md bg-slate-200">Войти</button>
      </div>
    </div>
  </div>
  );
}

export default FormWrapper;