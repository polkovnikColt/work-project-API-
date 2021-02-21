import React, {useState, useEffect} from 'react'
import "./leftSidebar.scss"
import left from '../../images/iconmonstr-arrow-25.svg'
import right from '../../images/iconmonstr-arrow-64.svg'
import NavLink from "./additional/NavLink";
import down from '../../images/arrow-down.svg'

let links =
    [{title: "Головна", href: "/", subtitle: []},
        {title: "Новини", href: "/news", subtitle: []},
        {title: "Про нас", href: "/about", subtitle: []},
        {title: "Міжнародна співпраця", href: "/world", subtitle: []},
        {title: "Конференції та семінари", href: "/conference", subtitle: []},
        {title: "Сувеніри", href: "/souvenirs", subtitle: []}]

//TODO create animation of sliding
export default function LeftSidebar() {

    const [width, setWidth] = useState(window.innerWidth);
    const [visible, setVisible] = useState(false);
    const [arrow, setArrow] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return function cleanup() {
            handleResize();
        }
    });

    if (!visible && width < 765) {
        return (
            <div className="">
                <div style={{"top": window.innerHeight / 2 + "px"}}
                     className="open-button"
                     onClick={() => {
                         setVisible(true)
                         setArrow(prev => !prev)
                     }
                     }><img src={arrow ? right : left} alt=""/>
                </div>
            </div>
        )
    }

    if (visible && width < 765) {
        return (
            <div
                style={{"min-height": window.innerHeight + "px"}}
                className="bg-light text-center box-shadow bar">
                <div
                    className="title text-center py-3">
                    Розділи
                </div>
                <div className="my-auto">
                    {links.map((item) => {
                        return <NavLink item={item} key={Math.random()}/>
                    })}
                </div>
                <div
                    onClick={() => {
                        setArrow(prev => !prev)
                        setVisible(false)
                    }}
                    className="close-button">
                    <img src={arrow ? right : left} alt=""/>
                </div>
            </div>
        )
    }

    return (
        <div
            style={{"min-height": window.innerHeight - 65 + "px"}}
            className="col-3 bg-light text-center box-shadow">
            <div
                className="title py-3">
                Розділи
            </div>

            <div className="my-auto">
                {links.map(item =>
                    <NavLink item={item} key={item}/>
                )}
            </div>
        </div>
    )
}