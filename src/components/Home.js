
function Home() {
    return (
    <section className="flex justify-center items-center h-full">
        <div className="flex-col w-full pt-80 pb-64 rounded-2xl">
            <div className="text-center">
                <p className="text-7xl font-bold">
                    <span className="text-slate-600">John </span>
                    <span className="text-slate-600">Aldreich </span>
                    <span className="text-slate-600">Rosales</span>
                </p>
            </div>
            <div className="mt-2 flex items-center justify-center">
                <div className="w-3/4 md:w-full">
                    <p className="text-xl h-14 flex items-center justify-center text-center text-slate-600 space-x-4">
                        <span>Video Editor</span>
                        <span>•</span>
                        <span>Photo Editor</span>
                        <span>•</span>
                        <span>UI/UX Design</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
  }
  
  export default Home;