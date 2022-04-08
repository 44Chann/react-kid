import React from "react";
import ReactDom from "react-dom";
import { useState, useRef } from "react";
import useCopyToClipboard from "../hooks/useCopytoclipboard";
import { SocialShare } from "./SocialShare";
const modalRoot = document.querySelector("#portal") as HTMLElement;


interface Props {
    showModal: boolean
    closeModal: Function
    url: string
    title: string
    text: string
}

export function ModalPortal({ showModal, closeModal, url, title, text }: Props) {
    const el = useRef(modalRoot);
    const link = "https://www.youtube.com/watch?v=MwpMEbgC7DA"
    const [value, copy] = useCopyToClipboard();
    const [iscopied, setIscopied] = useState(false)


    return ReactDom.createPortal(
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative  my-6 mx-auto ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t min-w-[400px]">

                                    <h3 className="text-3xl font-semibold">
                                        Modal Title
                                    </h3>
                                    <button onClick={() => {
                                        closeModal()
                                        setIscopied(false)
                                    }}>
                                        Close
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto ">
                                    <div className="flex">
                                        <SocialShare url={url} title={title} text={text} />
                                    </div>
                                    <div className="flex items-center">
                                        <input className="my-4 text-slate-500 text-lg leading-relaxed border border-blue-500 min-w-[500px] " type="text" value={link} />
                                        <button onClick={() => {
                                            copy(link)
                                            setIscopied(true)
                                        }} className="mx-2">{iscopied ? "copied" : "copy"}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
        ,
        el.current
    )
}
