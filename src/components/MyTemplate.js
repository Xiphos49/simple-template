// components & hooks
import ThemeSelector from "./ThemeSelector"
import { useSpring, animated } from 'react-spring'
import { useTheme } from "../hooks/useTheme"

export default function MyTemplate({ bgImage, alert, title, description, btnText, website, logo }) {
    const { color } = useTheme()

    const [props, api] = useSpring(
        () => ({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: { duration: 1200 }
        }),
        []
    )

    return (
        <div className="w-[100vw] h-[100vh] bg-[#F5F5F5] flex flex-col justify-center items-center">
            <div className="w-[400px] h-[400px] md:w-[1080px] md:h-[1080px] bg-white flex justify-start items-start">
                <img src={bgImage} alt="background image" className="absolute w-[380px] h-[380px] md:w-[1032px] md:h-[1038px]" />
                <animated.div style={props} className="w-[360px] md:w-[994px] bg-white relative self-end mx-auto">
                    <div className="space-y-[10px] md:space-y-[25px] mx-[12px] mt-[12px] md:mx-[48px] md:mt-[48px]">
                        <h3 style={{ color: color }} className={`inline p-[4px] md:p-[10px] h-[12px] md:h-[50px] bg-[#F5F5F5] text-[#E30613] font-bold text-[12px] md:text-[24px] duration-300`}>{alert}</h3>
                        <h1 className="text-black text-[28px] md:text-[70px] leading-[130%]">{title}</h1>
                        <h2 className="text-black text-[18px] md:text-[48px] leading-[130%]">{description}</h2>
                        <button style={{ background: color }} className="w-[100px] md:w-[270px] h-[30px] md:h-[64px] bg-[#E30613] text-[#FFFFFF] text-[12px] md:text-[32px] flex justify-center items-center space-x-[4px] md:space-x-[8px] duration-300">
                            <p>{`>`}</p>
                            <p>{btnText}</p>
                        </button>
                        <div className="h-[30px] md:h-[90px] bg-[#FFFFFF] border-t-[1.68px] border-[#A8AAAC] flex justify-between items-center text-[#A8AAAC]">
                            <p className="text-[#A8AAAC] text-[16px] md:text-[32px]">{website}</p>
                            <img src={logo} alt="remondis logo" className="w-[80px] md:w-[167px]" />
                        </div>
                    </div>
                </animated.div>
            </div>
            <ThemeSelector />
        </div>
    )
}