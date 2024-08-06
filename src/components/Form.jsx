import bolita from "../assets/bolita.svg"

export default function Form() {
    return (
        <div className="bg-white p-20">
            <div className="w-1/2 space-y-9">
                <h1 className="text-[32px] text-text font-semibold leading-none">Regístrate para Acceder a <br /> Oportunidades Exclusivas</h1>
                <p className="text-[16px] text-text font-light">¡Déjanos tu correo electrónico y recibe ofertas de <br /> trabajo personalizadas directamente en tu bandeja <br /> de entrada!</p>
                <div className="flex items-center">
                    <img src={bolita} alt="bolita" className="w-[23px] h-[85px]" />
                    <div className="flex flex-col ml-4 space-y-2 text-text">
                        <p className="text-[16px] font-medium">Regístrate y Completa tu Perfil</p>
                        <span className="text-[14px]">Proporciona tu información básica y tus <br /> preferencias laborales.</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <img src={bolita} alt="bolita" className="w-[23px] h-[85px]" />
                    <div className="flex flex-col ml-4 space-y-2 text-text">
                        <p className="text-[16px] font-medium">Recibe Ofertas Personalizadas</p>
                        <span className="text-[14px]">Accede a las mejores oportunidades basadas <br /> en tu perfil.</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <img src={bolita} alt="bolita" className="w-[23px] h-[85px]" />
                    <div className="flex flex-col ml-4 space-y-2 text-text">
                        <p className="text-[16px] font-medium">Aplica Fácilmente</p>
                        <span className="text-[14px]">Postula a los empleos con solo un clic.</span>
                    </div>
                </div>
            </div>
            <div>
                <form action="">
                    
                </form>
            </div>
        </div>
    )
}
