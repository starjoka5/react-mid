import { useEffect, useInsertionEffect, useLayoutEffect } from "react"


export const Effects = () => {

    const primaryColor = '#4663e4';

    useEffect(() => {
        const squareEffect: HTMLDivElement | null = document.querySelector(".squareEffect");
        if (!squareEffect) return;
        squareEffect.style.transform = "translate(-50%, -50%)";
        squareEffect.style.left = "70%";
        squareEffect.style.top = "70%";
        console.log('useEffect: after render')
    }, [])

    useLayoutEffect(() => {
        const squareLayout: HTMLDivElement | null = document.querySelector(".squareLayout");
        if (!squareLayout) return;
        squareLayout.style.transform = "translate(-50%, -50%)";
        squareLayout.style.left = "80%";
        squareLayout.style.top = "80%";
        console.log('useLayoutEffect')
    }, [])

    useInsertionEffect(() => {
        console.log('useInsertionEffect')
        const style = document.createElement('style');
        style.innerHTML = `
          :root {
            --primary-500: ${primaryColor};
            --primary-800: ${primaryColor};
          }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, [])

    return <div className="bg-primary-500 text-white h-64 flex flex-col justify-center items-center">
        <div className="max-w-4xl text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to Our Landing Page</h1>
            <p className="text-xl mb-6">
                Discover the amazing features and benefits of our product. Join us today and experience the difference.
            </p>
            <button className="bg-white text-primary font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
                Get Started
            </button>
        </div>
        <div className="squareEffect absolute bg-red-600 w-12 h-12 rounded-md z-10"></div>
        <div className="squareLayout absolute bg-yellow-500 w-12 h-12 rounded-md z-10"></div>
    </div>
}