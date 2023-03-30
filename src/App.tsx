function App() {

  return (
    <div className="bg-teal-600 min-h-screen flex flex-col justify-start items-stretch">
      <header className='p-5 text-white underline underline-offset-4 bg-teal-900'>
        <p className='text-white text-5xl font-bold text-center'>Tailwind DewDrop</p>
      </header>
      <main className='flex-grow flex justify-center items-center'>
        <div className="before:content-[''] before:absolute before:z-10 before:h-64 before:w-64 before:bg-gray-500  before:rounded-[3rem] before:rounded-tl-[1rem] before:rounded-br-[12rem] w-64 h-64 bg-gray-300 border border-gray-300 border-opacity-40 transform rotate-45 rounded-[13rem] rounded-tl-[2rem] rounded-br-[16rem] overflow-hidden" />
      </main>
    </div>
  )
}

export default App
