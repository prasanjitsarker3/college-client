import { useEffect, useState } from "react";

const Coffee = () => {
    const [coffees, setCoffee] = useState([])
    useEffect(() => {
        fetch('coffee.json')
            .then(res => res.json())
            .then(data => setCoffee(data.coffees))
    }, [])
    return (
        <div>
            <p className="text-center text-3xl font-sans py-5">Popular Coffee In Cafe</p>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    coffees.map(coffee => <div key={coffee.id}>
                        <div className="card shadow-md mx-auto">
                            <figure className="px-5 pt-5">
                                <img src={coffee.image} alt="Shoes" className="rounded-xl h-[200px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title p-0 m-0">{coffee.name}</h2>
                                <p className="text-lg py-2">{coffee.title}</p>
                                <div className="card-actions w-full md:px-4 px-7">
                                    <button className="btn btn-primary w-full">Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Coffee;