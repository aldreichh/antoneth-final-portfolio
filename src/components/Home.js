function Home() {
    return (
    <section className="flex justify-center items-center h-full">
        <div className="flex-col w-full xl:pt-48 xl:pb-40 pt-32 pb-16 rounded-2xl">
            <div className="h-96 flex-col flex justify-center items-center py-56 bg-gradient-to-r from-pink-100 via-rose-100 to-orange-100 xl:mx-0 sm:mx-10 md:mx-10 rounded-2xl shadow-sm">
                <div className="text-center" data-aos="fade-up">
                    <p className="text-7xl font-bold space-x-5 text-shadow-xl">
                        <span className="text-rose-400">Antoneth</span>
                        <span className="text-orange-400">Bacalla</span>
                    </p>
                </div>
                <div className="mt-2 flex items-center justify-center" data-aos="fade-up">
                    <div className="w-3/4 md:w-full">
                        <p className="text-xl h-14 flex items-center justify-center text-center text-rose-500 space-x-3">
                            <span>Virtual Assistant</span>
                            <span>•</span>
                            <span>Photo Editor</span>
                            <span>•</span>
                            <span>Video Editor</span>
                            <span>•</span>
                            <span>Customer Support</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
  
export default Home;
