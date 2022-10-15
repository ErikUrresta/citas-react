import React from 'react'

function Formulario() {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-center text-3xl '>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y {""}
        <span className='text-indigo-500 font-bold '>Administralos</span>
      </p>
      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' action="">
        <div className='mb-5'>
          <label  className='block text-gray-700 uppercase font-bold' htmlFor="nombre">Nombre mascota</label>
          <input  id='nombre' className='border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400' type="text" placeholder='Nombre de la mascota'/>
        </div>
        <div className='mb-5'>
          <label  className='block text-gray-700 uppercase font-bold' htmlFor="propietario">Nombre del propietario</label>
          <input  id='propietario' className='border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400' type="text" placeholder='Nombre del propietario'/>
        </div>
        <div className='mb-5'>
          <label  className='block text-gray-700 uppercase font-bold' htmlFor="propietario">Email contacto</label>
          <input  id='email' className='border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400' type="email" placeholder='Email contacto'/>
        </div>
        <div className='mb-5'>
          <label  className='block text-gray-700 uppercase font-bold' htmlFor="alta">Fecha alta</label>
          <input  id='alta' className='border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400' type="date"/>
        </div>
        <div className='mb-5'>
          <label  className='block text-gray-700 uppercase font-bold' htmlFor="sintomas">Sintomas</label>
          <textarea  id='sintomas' className='border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400' type="text" placeholder='Sintomas de la mascota'/>
        </div>
        <input 
        className='bg-indigo-500 w-full text-white p-3 font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all'
        type="submit"
        value="Agregar paciente" />
      </form>
    </div>
  )
}

export default Formulario