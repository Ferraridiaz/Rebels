import React from 'react'

function modalCreate({closeModal}) {

    const tambahData =(event)=>{

        event.preventDefault()
        let topik = event.target.topik.value;
        let nominal = event.target.nominal.value;
        let tanggal = event.target.tanggal.value;
        let foto = event.target.foto.value;
        let tipedata = "pemasukan";

    const data = {
        topik,
        nominal,
        tanggal,
        foto,
        tipedata,
    }
console.log(data)
        const result =  fetch(`http://localhost:4000/datatable`,{
            method: `POST`, 
            headers: { 
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data)
        } ).then((res) => res.json())
    }

    return (
        <div className="fixed w-screen h-screen bg-black top-0 left-0 flex justify-center items-center bg-opacity-40">
            <div className="fixed p-6 w-1/3 bg-white drop-shadow-xl rounded-xl">
                <div className="flex flex-row-reverse mr-3">
                    <button className="font-bold mb-4 text-red-300" onClick={()=>{
                        closeModal(false)
                    }}>X</button>
                </div>
                <form onSubmit={tambahData} action="" className="flex flex-col">
                    <input type="text" placeholder="Topic" name="topik" className="bg-black bg-opacity-10 border-none drop-shadow-xl p-2 rounded-lg my-2"/>
                    <input type="text" placeholder="Nominal" name="nominal" className="bg-black bg-opacity-10 border-none drop-shadow-xl p-2 rounded-lg mb-2"/>
                        <div>
                            <input type="datetime-local" name="tanggal" className="bg-black bg-opacity-10 border-none drop-shadow-xl p-2 rounded-lg mb-2"/>
                            <input type="file" name="foto"className="mb-4 mt-2"/>
                        </div>
                            <textarea placeholder="Keterangan" name="keterangan" className="bg-black bg-opacity-10 border-none drop-shadow-xl h-32 p-2 rounded-lg mb-2"></textarea>
                            <p className="text-sm my-2 text-gray-500">Catat sebagai</p>
                    <div>
                        <button name="tipedata" className="border-black border-2 py-2 px-6 mr-5 rounded-lg border-transparent bg-green-500 text-white">Pemasukan</button>
                        <button name="tipedata-pengeluaran" className="border-black border-2 py-2 px-6 rounded-lg border-transparent bg-red-500 text-white">Pengeluaran</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default modalCreate
