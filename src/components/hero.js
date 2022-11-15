import { ReactComponent as Logo } from '../yung1.svg';

export default function Hero() {
    return (
        <main className="bg-slate-900 py-16 p-10">
            <div className="w-full  \h-screen">
                <div className="flex items-center justify-center ">
                    <div className="">
                        <Logo className='w-full h-full hover:bg-indigo-900 border-2 rounded-full'/> 
                    </div>
                </div>
            </div>
        </main>  
    );
}

