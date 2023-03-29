function App() {

  return (
    <div className="bg-teal-600 min-h-screen flex flex-col justify-start items-stretch">
      <header className='p-5 text-white underline underline-offset-4 bg-teal-900'>
        <p className='text-white text-5xl font-bold text-center'>Tailwind DewDrop</p>
      </header>
      <main className='flex-grow flex justify-center items-center'>
        <div className='w-60 h-60 border border-gray-200 transform rotate-45 rounded-[13rem] rounded-tl-[2rem] rounded-br-[16rem]' />
      </main>
    </div>
  )
}

export default App
