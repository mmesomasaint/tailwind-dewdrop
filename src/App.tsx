function App() {

  return (
    <div className="bg-teal-600 min-h-screen flex flex-col justify-start items-stretch">
      <header className='p-5 text-white underline underline-offset-4 bg-teal-900'>
        <p className='text-white text-5xl font-bold text-center'>Tailwind DewDrop</p>
      </header>
      <main className='flex-grow flex justify-center items-center'>
        <div className="w-64 h-64 bg-gray-300 bg-opacity-90 transform rotate-45 rounded-[13rem] rounded-tl-[2rem] rounded-br-[16rem] overflow-hidden before:content-[''] before:absolute before:z-10 before:h-64 before:w-64 before:bg-teal-600 before:bg-opacity-40 before:rounded-[1rem] before:rounded-tl-[1rem] before:rounded-br-[15rem] after:content-[''] after:absolute after:z-20 after:bg-red-500 after:w-7 after:h-3 after:top-16 after:right-32 after:rounded-3xl after:bg-gray-300" />
      </main>
    </div>
  )
}

export default App
