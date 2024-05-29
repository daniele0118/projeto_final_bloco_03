
function Home(){
    return (
            <>
                <div className="bg-red-200 w-screen flex justify-center">
                    <div className="container grid grid-cols-2 text-white">
                        <div className='max-w-7xl flex flex-col items-center gap-4 justify-center py-4'>
                            <h2 className="text-5xl font-bold">Boas vindas!</h2>
                            <p className="text-xl">Farmácia.</p>

                            <div className="flex justify-around gap-4">
                                
                            <button className='rounded bg-white text-red-800 py-2 px-4'>Ver categorias</button>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img src="src/assets/HheNdw7.png" 
                                className="w-2/3"
                            />
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Home;

