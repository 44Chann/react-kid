import React from "react";
import ReactDom from "react-dom";
import { useState, useRef } from "react";
import useCopyToClipboard from "../hooks/useCopytoclipboard";
import { SocialShare } from "./SocialShare";
const modalRoot = document.querySelector("#portal") as HTMLElement;

export function ModalPortal() {
    const el = useRef(modalRoot);
    const link = "https://www.youtube.com/watch?v=MwpMEbgC7DA"
    const [value, copy] = useCopyToClipboard();
    const [iscopied, setIscopied] = useState(false)

    const [showModal, setShowModal] = React.useState(false);
    return ReactDom.createPortal(
        <>
            <h2>Modal</h2>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Open regular modal
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t min-w-[400px]">

                                    <h3 className="text-3xl font-semibold">
                                        Modal Title
                                    </h3>
                                    <button onClick={() => {
                                        setShowModal(false)
                                        setIscopied(false)
                                    }}>
                                        Close
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto ">
                                    <div className="flex">
                                        <SocialShare />
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
