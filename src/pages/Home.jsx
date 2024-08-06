import image from "../assets/home.png"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Form from "../components/Form"

export default function Home() {
    return (
        <>
            <div className="flex justify-between items-center text-white px-24 mb-10">
                <div className="w-1/2">
                    <h1 className="text-[80px] leading-none">Encuentra tu <br /> trabajo ideal <br /> hoy</h1>
                    <p className="mt-10 text-[16px]">Accede a miles de empleos actualizados diariamente, <br />ofreciéndote una amplia variedad de oportunidades.</p>
                    <div className="mt-10 font-bold">
                        <button className="flex items-center bg-secondary text-white px-6 py-3 rounded-full transition-colors">
                            Buscar empleos
                            <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>
                <div className=" relative inline-block">
                    <div className="absolute inset-0 bg-white rounded-full transform scale-75 "></div>
                    <img src={image} alt="home" className="w-[667px] h-[667px] relative rounded-full object-cover" />
                </div>
            </div>
            <Form />
        </>
    )
}
