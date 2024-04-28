import Image from "next/image";
import jonathan from '../../../../public/inbox/jonathan.jpg';

export  function chatList(){


    return (
        <div className={'chat-list'}>
            <div className="flex items-center">
                <Image src={jonathan} alt="Background Image" className={'w-20 h-20 rounded-full mr-4'}
                       objectFit="cover" />
                <div className="text-lg">
                    <p className="text-gray-900  leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600 mb-3">@jona</p>
                    <label className='flex cursor-pointer select-none items-center'>
                        <div className='relative'>
                            <input
                                type='checkbox'
                                className='sr-only'
                            />
                            <div className='block h-8 w-14 rounded-full bg-[#E5E7EB]'></div>
                            <div className='dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition'></div>
                        </div>
                        <div className={'ml-2 text-gray-500'}>Active</div>
                    </label>
                </div>
            </div>
        </div>
    )
}