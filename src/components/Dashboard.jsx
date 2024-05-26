import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransitionChart from './TransactionsChart'
import BuyerProfileChart from './BuyerProfileChart'
export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid />
            <div className="flex gap-4 w-full ">
                <TransitionChart />
                <BuyerProfileChart />
            </div>
            <div className="flex flex-row gap-4 w-full "></div>
        </div>
    )
}
