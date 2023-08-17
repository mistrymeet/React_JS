import React from 'react'
import './card.css'
import './btn.css'
import { BiCart, BiChevronsRight } from 'react-icons/bi'

function TailwindCard(props) {
    return (
        <>
            <div class="card max-w-xs p-2 text-justify m-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#" >
                    <img class="rounded-t-lg" src={props?.pData?.img} alt="" />
                </a>
                <div class="p-3">
                    <a href="#" style={{ textDecoration: 'none' }}>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props?.pData?.name}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Description :{props?.pData?.description}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">MRP :{props?.pData?.price}</p>
                    <div className="bdiv">
                        <button>
                            <span style={{ fontSize: '15px' }}>
                                Buy Now <BiChevronsRight />
                            </span>
                        </button>
                        <button >
                            <span style={{ fontSize: '15px' }}>
                                Add to Cart
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TailwindCard