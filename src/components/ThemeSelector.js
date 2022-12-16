import { useTheme } from "../hooks/useTheme"

export default function ThemeSelector() {
    const { changeColor } = useTheme()

    const themeColors = ['#E30613', '#06b6d4', '#a855f7']

    return (
        <div className="">
            <div className="flex flex-col justify-center items-center mt-[50px]">
                <p className="text-zinc-500 text-2xl">Select Theme</p>
                <div className="flex justify-center items-center space-x-5 mt-[20px]">
                    {themeColors.map(color => (
                        <div
                            className="w-[30px] h-[30px] cursor-pointer space-x-5 rounded-full"
                            key={color}
                            onClick={() => changeColor(color)}
                            style={{ background: color }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}