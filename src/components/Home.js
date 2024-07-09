

function Home() {
    return (
    <section className="flex justify-center items-center h-full">
        <div className="flex-col w-full pt-48 pb-40 rounded-2xl">
            <div className="h-96 flex-col flex justify-center items-center py-56 bg-slate-200 xl:mx-0 mx-10">
                <div className="text-center">
                    <p className="text-7xl font-bold animate-fade-in-bottom">
                        <span className="text-slate-700">John </span>
                        <span className="text-cyan-900">Aldreich </span>
                        <span className="text-slate-700">Rosales</span>
                    </p>
                </div>
                <div className="mt-2 flex items-center justify-center">
                    <div className="w-3/4 md:w-full">
                        <p className="text-xl h-14 flex items-center justify-center text-center text-slate-700 space-x-3 animate-fade-in-bottom">
                            <span>Video Editor</span>
                            <span>•</span>
                            <span>Photo Editor</span>
                            <span>•</span>
                            <span>UI/UX Design</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
  
  export default Home;