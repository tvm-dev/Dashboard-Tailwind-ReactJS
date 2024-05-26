import React from 'react'
import { IoBagHandle } from 'react-icons/io5'

function DashboardStatsGrid() {
    return (
        <div className="flex gap-4 w-full">
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                    <IoBagHandle className="text-2xl text-white" />
                </div>

                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold"> US$ 34.000,50 </strong>
                        <strong className="text-sm text-green-500"> +23,5</strong>
                    </div>
                </div>
                {/* ======================== */}
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
                    <IoBagHandle className="text-2xl text-white" />
                </div>

                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Expenses</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold"> US$ 304.50 </strong>
                        <strong className="text-sm text-green-500"> +3,5</strong>
                    </div>
                </div>
                {/* ======================== */}
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
                    <IoBagHandle className="text-2xl text-white" />
                </div>

                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Customers</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold"> 421 </strong>
                        <strong className="text-sm text-green-500"> +2</strong>
                    </div>
                </div>
                {/* ======================== */}
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
                    <IoBagHandle className="text-2xl text-white" />
                </div>

                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Orders</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold"> 987</strong>
                        <strong className="text-sm text-green-500"> +189</strong>
                    </div>
                </div>
                {/* ======================== */}
            </BoxWrapper>
        </div>
    )
}

export default DashboardStatsGrid

function BoxWrapper({ children }) {
    return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
