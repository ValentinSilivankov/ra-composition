import React, { useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";

export const HomePage: React.FC = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <div className="container items-center flex justify-center flex-col mx-auto bg-white">
            <div className="m-12">
                <img src="https://pro-kursy.com/wp-content/uploads/2023/04/netologiya.jpg" className="w-full object-cover" alt="netology_color.png"/>
            </div>
            <div className="w-full py-12 flex flex-col items-center bg-blue-200">
                <div className="font-rubik font-bold py-10 text-2xl">Домашнее задание по теме "Композиция компонентов"</div>
                    <ul className="text-blue-950 flex flex-col gap-4 underline">

                        <li><Link to="/cards">Карточки</Link></li>
                        <li><Link to="/decomposition">Декомпозиция</Link></li>
                    </ul>
                    <Outlet />

                <div className="text-white py-12">
                    <img src="https://netology-code.github.io/mq-homeworks/media-features/mobile-menu/img/logo.svg" className="w-full object-cover" alt="Логотип компании Нетология"/>
                </div>
            </div>
        </div>
    )
}
