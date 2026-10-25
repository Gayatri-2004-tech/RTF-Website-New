export default function Registration() {
    return (
        <div className="min-h-screen pt-32 px-6">
            <div className="max-w-3xl mx-auto">

                <h1 className="text-4xl font-display font-bold text-cyan-400 text-center">
                    RTF Registration
                </h1>

                <p className="text-text-secondary text-center mt-2 mb-10">
                    Register to join The Robo-Tech Forum
                </p>

                <div className="space-y-6">

                    {/* Name */}
                    <div>
                        <label className="block mb-2 text-text-primary">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 bg-transparent border border-cyan-500/30 rounded-lg"
                        />
                    </div>

                    {/* Personal Email */}
                    <div>
                        <label className="block mb-2 text-text-primary">
                            Personal Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your personal email"
                            className="w-full px-4 py-3 bg-transparent border border-cyan-500/30 rounded-lg"
                        />
                    </div>

                    {/* Branch */}
                    <div>
                        <label className="block mb-2 text-text-primary">
                            Branch
                        </label>
                        <select
                            className="w-full px-4 py-3 bg-[#111] text-white border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400"
                        >
                            <option value="">Select your branch</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Instrumentation">Instrumentation</option>
                            <option value="Civil">Civil</option>
                            <option value="Mechanical">Mechanical</option>
                            <option value="Electrical">Electrical</option>
                            <option value="ENTC">Electronics and Telecommunication (ENTC)</option>
                        </select>
                    </div>

                    {/* Year of Passing */}
                    <div>
                        <label className="block mb-3 text-text-primary">
                            Year of Passing
                        </label>

                        <div className="flex gap-8">

                            <label className="flex items-center gap-2 text-text-secondary cursor-pointer">
                                <input
                                    type="radio"
                                    name="yearOfPassing"
                                    value="2030"
                                />
                                2030 (1st Year)
                            </label>

                            <label className="flex items-center gap-2 text-text-secondary cursor-pointer">
                                <input
                                    type="radio"
                                    name="yearOfPassing"
                                    value="2029"
                                />
                                2029 (DSY)
                            </label>

                        </div>
                    </div>

                    {/* domain */}
                    <div>
                        <label className="block mb-2 text-text-primary">
                            Domain
                        </label>

                        <select
                            className="w-full px-4 py-3 bg-[#111] text-white border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400"
                        >
                            <option value="">Select your domain</option>
                            <option value="software">Software</option>
                            <option value="electrical">Electrical</option>
                            <option value="aero">Aero</option>
                            <option value="mech">Mech</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    );
}