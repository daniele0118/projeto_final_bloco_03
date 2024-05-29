import { FacebookLogo, InstagramLogo,  } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-pink-900 text-white">
                <div className="container flex flex-col items-center py-4">
                <p className='text-xl font-bold'>Farmácia | Copyright: {data} </p>
                    <div className='flex gap-2'>
                        <InstagramLogo size={48} weight='bold' />
                        <FacebookLogo size={48} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer