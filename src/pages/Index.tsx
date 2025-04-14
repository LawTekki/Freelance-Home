import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { StatisticsCard } from "@/components/Dashboard/StatisticsCard";
import { SetupProgress } from "@/components/Dashboard/SetupProgress";
import { EarningsChart } from "@/components/Dashboard/EarningsChart";
import { ProductsTable } from "@/components/Dashboard/ProductsTable";

const Index = () => {
  return (
    <div className="bg-neutral-50 w-full overflow-hidden px-0.5">
      <div className="gap-5 flex">
        <div className="w-[16%]">
          <Sidebar />
        </div>

        <div className="w-[84%] ml-5">
          <div className="w-full">
            <Header />

            <main className="ml-[26px] mr-[18px] mt-6">
              <StatisticsCard />

              <div className="flex w-full gap-6 flex-wrap mt-6">
                <SetupProgress />
                <EarningsChart />
              </div>

              <ProductsTable />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
