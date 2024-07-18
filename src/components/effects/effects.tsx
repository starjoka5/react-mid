import { useEffect, useInsertionEffect, useLayoutEffect } from "react"


export const Effects = () => {

    const primaryColor = '#8433b9';

    useEffect(() => {
        console.log('useEffect')
    }, [])

    useLayoutEffect(() => {
        console.log('useLayoutEffect')
    }, [])

    useInsertionEffect(() => {
        console.log('useInsertionEffect')
        const style = document.createElement('style');
        style.innerHTML = `
          :root {
            --primary-500: ${primaryColor};
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
    </div>
}