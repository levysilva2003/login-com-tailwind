import Link from 'next/link';

export default function Register() {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-5 bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-8">Cadastro de Usuário</h1>

        {/* NOME */}
        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="nameField">Nome Completo</label>
          <input className="w-full p-2 rounded-md bg-gray-800
          border border-gray-600 outline-yellow-500" type="text" id="nameField" />
        </div>

        {/* E-MAIL */}
        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="emailField">Endereço de E-mail</label>
          <input className="w-full p-2 rounded-md bg-gray-800
          border border-gray-600 outline-yellow-500" type="email" id="emailField" />
        </div>

        {/* SENHA */}
        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="passwordField">Senha</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800
          border border-gray-600 outline-yellow-500 focus:border-yellow-500" type="password" id="passwordField" />
        </div>

        {/* CONFIRMAR SENHA */}
        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="confirmPasswordField">Confirmar Senha</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800
          border border-gray-600 outline-yellow-500" type="password" id="confirmPasswordField" />
        </div>

        {/* CADASTRAR */}
        <div className="mt-8">
          <button className="w-full p-2 rounded-md text-lg font-bold text-white
           bg-yellow-500 hover:bg-yellow-600 transition-colors" type="submit">Cadastrar</button>
        </div>

        {/* VOLTAR PARA LOGIN */}
        <div className="text-center mt-6 text-gray-400">
          Já possui conta?
          <Link href="/">
            <span className="ml-2 font-bold text-yellow-500 hover:text-yellow-600 transition-colors">Faça seu login.</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
