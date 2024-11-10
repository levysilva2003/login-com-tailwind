import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-screen h-screen p-5 bg-gray-900 flex items-center justify-center">

      <div className="w-full px-5 py-10 md:max-w-md bg-gray-800 rounded-lg border border-gray-700">
        <h1 className="text-3xl font-bold text-center ">Sistema de Login</h1>

        {/* E-MAIL */}
        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="emailField">Endereço de E-mail</label>
          <input className="w-full p-2 rounded-md bg-gray-800
          border border-gray-600 outline-yellow-500" type="email" id="emailField" />
        </div>

        {/* SENHA */}
        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="passwordFiel">Senha</label>
          <input className=" w-full p-2 rounded-md text-lg bg-gray-800
          border border-gray-600 outline-yellow-500" type="password" id="passwordFiel" />
        </div>

        {/* ENTRAR */}
        <div className="m-6">
          <button className="w-full p-2 rounded-md text-lg font-bold text-white
           bg-yellow-500 hover:bg-yellow-600" type="submit">Entrar</button>
        </div>

        {/* CADASTRO */}
        <div className="text-center text-gray-400">
          Não é membro?
          <Link href="/register">
            <span className="ml-2 font-bold text-yellow-500 hover:text-yellow-600">Faça seu cadastro.</span>
          </Link>
        </div>

      </div>

    </div>
  )
}