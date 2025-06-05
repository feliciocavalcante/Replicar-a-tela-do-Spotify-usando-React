
import { AppleLogo, FacebookLogo, GoogleLogo, SpotifyLogo } from "phosphor-react"
import './App.css'

function App() {
  return (
    <>
      <div className="width-screen h-screen">
        <div className="flex items-center gap-2 justify-center border-b-2 border-zinc-600 p-2">
        <SpotifyLogo size={32} />
        <h1 className="font-bold text-2xl ">Spotify</h1>
        </div>

        <section className="flex flex-col items-center mt-4 ">
          <button className="flex items-center gap-1 justify-center border rounded-full 
           p-1 my-1 px-20 bg-[#3B5997] border-[#3B5997] text-white cursor-pointer transform hover:bg-[#3B6990]"><FacebookLogo size={32}/>CONTINUE WITH FACEBOOK</button>

          <button className="flex items-center gap-2 justify-center border rounded-full 
           p-1 my-1 px-23 bg-[#000000] border-[#000000] text-white  cursor-pointer"><AppleLogo size={32} />CONTINUE WITH APPLE</button>

          <button className="flex items-center gap-2 justify-center border rounded-full 
           p-1 my-1 px-19 bg-white-600 border-black-600 text-black font-bold cursor-pointer"><GoogleLogo size={32}/>CONTINUE WITH GOOGLE</button>
        </section>

        <div className="flex items-center gap-2 justify-center border-b-2 border-zinc-600 p-2 w-[380px] mx-auto mt-1"></div>

        <section className="flex flex-col items-center mt-4">
          <div className="flex flex-col">
            <p className="font-bold">Email address or username</p>
          <input className="w-[380px] mx-auto border border-zinc-600 " type="email" name="email" id="" placeholder="Email adress or username" />

          <p className="font-bold mt-4">Password</p>
          <input className="w-[380px] mx-auto border border-zinc-600" type="password" name="password" id=""  placeholder="Password"/>

          <a className="text-sm mt-4 underline" href="#">Forgot your password?</a>
          </div>
        </section>

        <section className="flex flex-col items-center ">
           <div className="flex items-center space-x-32 mt-6">
             <input className="mr-2 align-center cursor-pointer bg-green-600 border-green-600" type="checkbox" name="checkbox" id="" />
             <label htmlFor="checkbox">Remember me</label>
             <button className="flex items-center gap-2 justify-center border rounded-full 
           p-1 my-1 px-10 bg-[#15883E] border-green-600 text-white font-bold mt-4 cursor-pointer transform hover:scale-105 transition:bg duration-200">Log in</button>
           </div>
        </section>
        <div className="flex items-center gap-2 justify-center border-b-2 border-zinc-600 p-2 w-[380px] mx-auto mt-4"></div>

        <section className="flex flex-col items-center mt-4">
          <p className="font-bold">Don't have an account?</p>
          <button className="flex items-center gap-2 justify-center border rounded-full 
           p-1 my-1 px-33 text-[12px] cursor-pointer transform hover:scale-102 transition:bg duration-100">SIGN UP FOR SPOTIFY</button>
        </section>
      </div>
    </>
  )
}

export default App
