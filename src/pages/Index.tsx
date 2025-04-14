import { StatisticsCard } from "@/components/Dashboard/StatisticsCard";
import { SetupProgress } from "@/components/Dashboard/SetupProgress";
import { EarningsChart } from "@/components/Dashboard/EarningsChart";
import ProductsTable from "@/components/Dashboard/ProductsTable";

const Index = () => {
  return (
    <main className="ml-[26px] mr-[18px] mt-6">
      <StatisticsCard />

      <div className="flex w-full gap-6 flex-wrap mt-6">
        <SetupProgress />
        <EarningsChart />
      </div>

      <ProductsTable />
    </main>
  );
};

export default Index;
