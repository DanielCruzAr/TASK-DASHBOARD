import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function Home() {
    return (
        <div>
            <main className="flex w-full h-screen">
                <SideBar />
                <div className="flex w-full flex-col gap-4">
                    <Header />
					<Dashboard />
                    <footer className="px-4">@Daniel Cruz 2024</footer>
                </div>
            </main>
        </div>
    );
}
